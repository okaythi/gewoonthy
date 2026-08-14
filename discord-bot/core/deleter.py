import asyncio
import random
from typing import Optional, Dict, Any, List
import discord

class AdaptiveDeleter:
    __slots__ = ("client", "min_delay", "current_delay", "max_delay")

    def __init__(self, client: discord.Client, min_delay: float = 0.05, initial_delay: float = 0.15, max_delay: float = 2.5) -> None:
        self.client = client
        self.min_delay = min_delay
        self.current_delay = initial_delay
        self.max_delay = max_delay

    async def delete_single_message(self, channel: discord.abc.Messageable, message_id: int) -> bool:
        try:
            msg = await channel.fetch_message(message_id)
            if msg.author.id != self.client.user.id:
                return False
            await msg.delete()
            return True
        except discord.NotFound:
            return False
        except discord.HTTPException as e:
            if e.status == 429:
                retry_after = getattr(e, "retry_after", 1.0)
                await asyncio.sleep(retry_after + 0.05)
                try:
                    msg = await channel.fetch_message(message_id)
                    await msg.delete()
                    return True
                except Exception:
                    pass
            return False

    async def purge_channel_messages(self, channel: discord.abc.Messageable, target_message_id: Optional[int] = None, max_messages: Optional[int] = None) -> int:
        deleted_count = 0
        last_message: Optional[discord.Message] = None

        while True:
            try:
                history_kwargs: Dict[str, Any] = {"limit": 100}
                if last_message:
                    history_kwargs["before"] = last_message

                batch: List[discord.Message] = [msg async for msg in channel.history(**history_kwargs)]
                if not batch:
                    break

                last_message = batch[-1]
                self_messages = [m for m in batch if m.author.id == self.client.user.id]

                for msg in self_messages:
                    if target_message_id and msg.id != target_message_id:
                        continue

                    while True:
                        try:
                            await msg.delete()
                            deleted_count += 1
                            self.current_delay = max(self.min_delay, self.current_delay * 0.95)
                            await asyncio.sleep(self.current_delay + random.uniform(0.01, 0.03))
                            break
                        except discord.NotFound:
                            break
                        except discord.Forbidden:
                            return deleted_count
                        except discord.HTTPException as e:
                            if e.status == 429:
                                retry_after = getattr(e, "retry_after", 1.0)
                                await asyncio.sleep(retry_after + 0.05)
                                self.current_delay = min(self.max_delay, max(0.5, self.current_delay * 1.6))
                                continue
                            break
                        except Exception:
                            break

                    if target_message_id and msg.id == target_message_id:
                        return deleted_count
                    if max_messages and deleted_count >= max_messages:
                        return deleted_count

            except discord.Forbidden:
                break
            except Exception:
                break

        return deleted_count
