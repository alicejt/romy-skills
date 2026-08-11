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

if rg -n -i \
  -e '\b(do|does|did|is|are|was|were|will|would|should|could|have|has|had) not\b' \
  -e '\b(they|we|you|it|that|there|here|who|what|i) (are|is|have|has|had|will|would|should|could)\b' \
  "$root/README.md"; then
  printf '%s\n' 'README contains an uncontracted form. Complete the Alice ToV contraction pass.' >&2
  exit 1
fi

printf 'Validated %s GTM skills.\n' "$count"
