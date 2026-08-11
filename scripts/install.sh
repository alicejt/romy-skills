#!/usr/bin/env bash
set -euo pipefail

target="${1:-}"
shift || true
include_optional=false
dry_run=false

for option in "$@"; do
  case "$option" in
    --include-optional) include_optional=true ;;
    --dry-run) dry_run=true ;;
    *) printf 'Unknown option: %s\n' "$option" >&2; exit 2 ;;
  esac
done

case "$target" in
  codex) destination_root="$HOME/.codex/skills" ;;
  claude-code) destination_root="$HOME/.claude/skills" ;;
  *) printf 'Usage: ./scripts/install.sh codex|claude-code [--include-optional] [--dry-run]\n' >&2; exit 2 ;;
esac

script_dir="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"
root="$(CDPATH= cd -- "$script_dir/.." && pwd)"
[ "$dry_run" = true ] || mkdir -p "$destination_root"

for skill_dir in "$root"/*; do
  [ -f "$skill_dir/SKILL.md" ] || continue
  skill_name="$(basename "$skill_dir")"
  if [ "$skill_name" = "daily-signal-brief" ] && [ "$include_optional" = false ]; then
    continue
  fi

  destination="$destination_root/$skill_name"
  if [ -L "$destination" ]; then
    if [ "$(realpath "$destination")" = "$(realpath "$skill_dir")" ]; then
      printf 'Current: %s\n' "$destination"
      continue
    fi
    printf 'Skipped (different symlink): %s\n' "$destination" >&2
    continue
  fi
  if [ -e "$destination" ]; then
    printf 'Skipped (existing directory or file): %s\n' "$destination" >&2
    continue
  fi
  if [ "$dry_run" = true ]; then
    printf 'Would link: %s -> %s\n' "$destination" "$skill_dir"
  else
    ln -s "$skill_dir" "$destination"
    printf 'Linked: %s -> %s\n' "$destination" "$skill_dir"
  fi
done
