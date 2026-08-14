import hashlib
import json
import os
import subprocess
import sys
import time
from typing import Dict, Optional, List
import discord

STATE_FILE: str = os.path.join(os.path.dirname(__file__), "..", "restart_state.json")
RESTART_CHANNEL_ID: int = 1373427463694057612
RESTART_LOADING_MESSAGE: str = "<a:Load:1523418185691299841> restarting..."

def get_git_commit() -> Optional[str]:
    try:
        res = subprocess.run(["git", "rev-parse", "HEAD"], cwd=os.path.dirname(__file__), capture_output=True, text=True, timeout=3)
        if res.returncode == 0:
            return res.stdout.strip()
    except Exception:
        pass
    return None

def compute_file_checksums() -> Dict[str, str]:
    checksums: Dict[str, str] = {}
    base_dir = os.path.join(os.path.dirname(__file__), "..")
    for root, _, files in os.walk(base_dir):
        if "__pycache__" in root: continue
        for f in files:
            if f.endswith((".py", ".txt", ".json", ".env")) and not f.endswith("restart_state.json"):
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, base_dir)
                try:
                    with open(full_path, "rb") as fh:
                        checksums[rel_path] = hashlib.sha256(fh.read()).hexdigest()
                except Exception:
                    pass
    return checksums

def detect_changes_since(prev_commit: Optional[str], prev_checksums: Dict[str, str]) -> str:
    changes_lines: List[str] = []
    base_dir = os.path.join(os.path.dirname(__file__), "..")

    current_commit = get_git_commit()
    if prev_commit and current_commit and prev_commit != current_commit:
        try:
            res = subprocess.run(["git", "log", f"{prev_commit}..{current_commit}", "--pretty=format:+ %s (%h)"], cwd=base_dir, capture_output=True, text=True, timeout=5)
            if res.returncode == 0 and res.stdout.strip():
                changes_lines.extend(res.stdout.strip().splitlines())
        except Exception:
            pass

    try:
        res = subprocess.run(["git", "status", "--porcelain", "."], cwd=base_dir, capture_output=True, text=True, timeout=5)
        if res.returncode == 0 and res.stdout.strip():
            for line in res.stdout.strip().splitlines():
                status_code = line[:2].strip()
                file_name = line[3:].strip()
                if "restart_state.json" not in file_name:
                    changes_lines.append(f"+ [{status_code}] {file_name}")
    except Exception:
        pass

    if not changes_lines and prev_checksums:
        current_checksums = compute_file_checksums()
        for path, chash in current_checksums.items():
            if path not in prev_checksums:
                changes_lines.append(f"+ [new] {path}")
            elif prev_checksums[path] != chash:
                changes_lines.append(f"+ [modified] {path}")
        for path in prev_checksums:
            if path not in current_checksums:
                changes_lines.append(f"- [deleted] {path}")

    seen = set()
    deduped = []
    for line in changes_lines:
        if line not in seen:
            seen.add(line)
            deduped.append(line)

    return "\n".join(deduped).strip()

class LifecycleManager:
    __slots__ = ()

    @staticmethod
    async def initiate_restart(client: discord.Client, trigger_channel: Optional[discord.abc.Messageable] = None) -> None:
        snapshot = {
            "timestamp": time.time(),
            "git_commit": get_git_commit(),
            "checksums": compute_file_checksums(),
            "channel_id": getattr(trigger_channel, "id", RESTART_CHANNEL_ID) if trigger_channel else RESTART_CHANNEL_ID
        }

        target_channel = client.get_channel(RESTART_CHANNEL_ID)
        if target_channel is None:
            try:
                target_channel = await client.fetch_channel(RESTART_CHANNEL_ID)
            except Exception:
                pass

        if target_channel:
            try:
                await target_channel.send(RESTART_LOADING_MESSAGE)
            except Exception:
                pass

        with open(STATE_FILE, "w", encoding="utf-8") as f:
            json.dump(snapshot, f, indent=2)

        python_exe = sys.executable
        args = [python_exe] + sys.argv

        if os.name == "nt":
            subprocess.Popen(args, close_fds=False)
        else:
            os.execv(python_exe, args)

        await client.close()
        os._exit(0)

    @staticmethod
    async def handle_post_restart(client: discord.Client) -> None:
        if not os.path.exists(STATE_FILE):
            return

        try:
            with open(STATE_FILE, "r", encoding="utf-8") as f:
                state = json.load(f)
        except Exception:
            return

        channel_id = state.get("channel_id", RESTART_CHANNEL_ID)
        prev_commit = state.get("git_commit")
        prev_checksums = state.get("checksums", {})

        changes = detect_changes_since(prev_commit, prev_checksums)

        if changes:
            message_content = f"🌞Restarted ! Updates :\n```diff\n{changes}\n```"
        else:
            message_content = "🌞Restarted ! Updates : "

        target_channel = client.get_channel(channel_id)
        if target_channel is None:
            try:
                target_channel = await client.fetch_channel(channel_id)
            except Exception:
                pass

        if target_channel:
            try:
                await target_channel.send(message_content)
            except Exception:
                pass

        try:
            if os.path.exists(STATE_FILE):
                os.remove(STATE_FILE)
        except Exception:
            pass
