import asyncio
import random
import time
from typing import Optional, Dict, Any, List, Set
import discord

def make_progress_bar(current: int, total: int, length: int = 10) -> str:
    if total <= 0:
        return f"[{'░' * length}] 0%"
    pct = min(1.0, max(0.0, current / total))
    filled = int(round(length * pct))
    return f"[{'■' * filled}{'░' * (length - filled)}] {int(pct * 100)}%"

def format_duration(seconds: float) -> str:
    sec = max(0, int(seconds))
    hours, remainder = divmod(sec, 3600)
    minutes, secs = divmod(remainder, 60)
    if hours > 0:
        return f"{hours:02d}h {minutes:02d}m" if minutes > 0 else f"{hours:02d}h"
    if minutes > 0:
        return f"{minutes:02d}m {secs:02d}s"
    return f"{secs:02d}s"

class AdaptiveDeleter:
    __slots__ = ("client", "min_delay", "current_delay", "max_delay", "last_edit_timestamp")

    def __init__(self, client: discord.Client, min_delay: float = 0.05, initial_delay: float = 0.15, max_delay: float = 2.5) -> None:
        self.client = client
        self.min_delay = min_delay
        self.current_delay = initial_delay
        self.max_delay = max_delay
        self.last_edit_timestamp = 0.0

    async def _safe_edit(self, message: Optional[discord.Message], content: str) -> None:
        if not message:
            return
        try:
            await message.edit(content=content)
        except discord.HTTPException as e:
            if e.status == 429:
                retry_after = getattr(e, "retry_after", 1.0)
                await asyncio.sleep(retry_after + 0.1)
                try:
                    await message.edit(content=content)
                except Exception:
                    pass
        except Exception:
            pass

    async def _safe_delete(self, message: Optional[discord.Message]) -> None:
        if not message:
            return
        try:
            await message.delete()
        except discord.HTTPException as e:
            if e.status == 429:
                retry_after = getattr(e, "retry_after", 1.0)
                await asyncio.sleep(retry_after + 0.1)
                try:
                    await message.delete()
                except Exception:
                    pass
        except Exception:
            pass

    async def _update_progress(
        self,
        msg2: Optional[discord.Message],
        deleted_count: int,
        total_discovered: int,
        custom_cooldown: Optional[float] = None,
        force: bool = False
    ) -> None:
        if not msg2:
            return
        now = time.time()
        if not force and (now - self.last_edit_timestamp < 3.5):
            return
        self.last_edit_timestamp = now

        cooldown = custom_cooldown if custom_cooldown is not None else (self.current_delay if self.current_delay > (self.min_delay * 1.5) else None)
        if cooldown is not None and cooldown > 0.1:
            text = f"deleting (current cooldown: {cooldown:.2f}s) [{deleted_count} out of {total_discovered}]"
        else:
            text = f"deleting... [{deleted_count} out of {total_discovered}]"
        await self._safe_edit(msg2, text)

    async def _finalize(
        self,
        status_msg1: Optional[discord.Message],
        status_msg2: Optional[discord.Message],
        deleted_count: int,
        start_time: float
    ) -> None:
        elapsed = time.time() - start_time
        dur_str = format_duration(elapsed)
        bar = make_progress_bar(1, 1)

        if status_msg2:
            await self._safe_delete(status_msg2)

        if status_msg1:
            final_content = f"Done ! {deleted_count} messages deleted. Took : {dur_str}\n{bar}"
            await self._safe_edit(status_msg1, final_content)

    async def delete_single_message(
        self,
        channel: discord.abc.Messageable,
        message_id: int,
        status_msg1: Optional[discord.Message] = None,
        status_msg2: Optional[discord.Message] = None,
        target_name: str = "target"
    ) -> bool:
        start_time = time.time()
        if status_msg2:
            await self._safe_edit(status_msg2, "fetching first messages...")

        try:
            msg = await channel.fetch_message(message_id)
            if msg.author.id != self.client.user.id:
                if status_msg2:
                    await self._safe_delete(status_msg2)
                if status_msg1:
                    await self._safe_edit(status_msg1, "⚠️ **Error**: Message was not sent by you.")
                return False

            if status_msg2:
                await self._safe_edit(status_msg2, "deleting... [0 out of 1]")

            await msg.delete()
            await self._finalize(status_msg1, status_msg2, 1, start_time)
            return True
        except discord.NotFound:
            if status_msg2:
                await self._safe_delete(status_msg2)
            if status_msg1:
                await self._safe_edit(status_msg1, "⚠️ **Error**: Message not found.")
            return False
        except discord.HTTPException as e:
            if e.status == 429:
                retry_after = getattr(e, "retry_after", 1.0)
                if status_msg2:
                    await self._safe_edit(status_msg2, f"deleting (current cooldown: {retry_after:.2f}s) [0 out of 1]")
                await asyncio.sleep(retry_after + 0.05)
                try:
                    msg = await channel.fetch_message(message_id)
                    await msg.delete()
                    await self._finalize(status_msg1, status_msg2, 1, start_time)
                    return True
                except Exception:
                    pass
            if status_msg2:
                await self._safe_delete(status_msg2)
            if status_msg1:
                await self._safe_edit(status_msg1, "⚠️ **Error**: Failed to delete message.")
            return False
        except Exception:
            if status_msg2:
                await self._safe_delete(status_msg2)
            return False

    async def purge_channel_messages(
        self,
        channel: discord.abc.Messageable,
        target_message_id: Optional[int] = None,
        max_messages: Optional[int] = None,
        status_msg1: Optional[discord.Message] = None,
        status_msg2: Optional[discord.Message] = None,
        target_name: str = "target"
    ) -> int:
        start_time = time.time()
        deleted_count = 0
        total_discovered = 0
        last_message: Optional[discord.Message] = None
        protected_ids: Set[int] = {m.id for m in (status_msg1, status_msg2) if m}

        if status_msg2:
            await self._safe_edit(status_msg2, "fetching first messages...")

        while True:
            try:
                history_kwargs: Dict[str, Any] = {"limit": 100}
                if last_message:
                    history_kwargs["before"] = last_message

                batch: List[discord.Message] = [msg async for msg in channel.history(**history_kwargs)]
                if not batch:
                    break

                last_message = batch[-1]
                self_messages = [m for m in batch if m.author.id == self.client.user.id and m.id not in protected_ids]
                total_discovered += len(self_messages)

                for msg in self_messages:
                    if target_message_id and msg.id != target_message_id:
                        continue

                    while True:
                        try:
                            await msg.delete()
                            deleted_count += 1
                            self.current_delay = max(self.min_delay, self.current_delay * 0.95)
                            await self._update_progress(status_msg2, deleted_count, total_discovered)
                            await asyncio.sleep(self.current_delay + random.uniform(0.01, 0.03))
                            break
                        except discord.NotFound:
                            break
                        except discord.Forbidden:
                            await self._finalize(status_msg1, status_msg2, deleted_count, start_time)
                            return deleted_count
                        except discord.HTTPException as e:
                            if e.status == 429:
                                retry_after = getattr(e, "retry_after", 1.0)
                                self.current_delay = min(self.max_delay, max(0.5, self.current_delay * 1.6))
                                await self._update_progress(status_msg2, deleted_count, total_discovered, custom_cooldown=retry_after)
                                await asyncio.sleep(retry_after + 0.05)
                                continue
                            break
                        except Exception:
                            break

                    if target_message_id and msg.id == target_message_id:
                        await self._finalize(status_msg1, status_msg2, deleted_count, start_time)
                        return deleted_count
                    if max_messages and deleted_count >= max_messages:
                        await self._finalize(status_msg1, status_msg2, deleted_count, start_time)
                        return deleted_count

            except discord.Forbidden:
                break
            except Exception:
                break

        await self._finalize(status_msg1, status_msg2, deleted_count, start_time)
        return deleted_count
