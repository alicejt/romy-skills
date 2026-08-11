#!/usr/bin/env bash
set -euo pipefail

script_dir="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
root="$(CDPATH= cd -- "$script_dir/.." && pwd)"
count=0

for skill_dir in "$root"/*; do
  skill_file="$skill_dir/SKILL.md"
  [ -f "$skill_file" ] || continue
  count=$((count + 1))
  head -n 1 "$skill_file" | grep -qx -- '---'
  grep -q '^name:' "$skill_file"
  grep -q '^description:' "$skill_file"
done

python3 -m json.tool "$root/skills-manifest.json" >/dev/null
printf 'Validated %s GTM skills.\n' "$count"
