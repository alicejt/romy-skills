#!/usr/bin/env bash
set -euo pipefail

script_dir="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
root="$(CDPATH= cd -- "$script_dir/.." && pwd)"
dist="$root/dist/claude-desktop"
mkdir -p "$dist"

python3 - "$root" "$dist" <<'PY'
import json
import sys
import zipfile
from pathlib import Path

root = Path(sys.argv[1])
dist = Path(sys.argv[2])
manifest = json.loads((root / "skills-manifest.json").read_text())
excluded_parts = {".git", "private", ".DS_Store", "__pycache__"}

for name, config in sorted(manifest["skills"].items()):
    if not config["targets"].get("claude_desktop", False):
        continue
    skill_dir = root / name
    archive = dist / f"{name}.zip"
    with zipfile.ZipFile(archive, "w", zipfile.ZIP_DEFLATED) as zf:
        for source in skill_dir.rglob("*"):
            relative = source.relative_to(skill_dir)
            if any(part in excluded_parts for part in relative.parts):
                continue
            if source.name.endswith("-profile.md") or not source.is_file():
                continue
            zf.write(source, Path(name) / relative)
    print(f"Packaged: {archive}")
PY
