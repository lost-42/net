#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

find src -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) | while read -r f; do
    dir=$(dirname "$f")
    base=$(basename "$f")
    name="${base%.*}"
    out="$dir/$name.webp"

    if [ -f "$out" ]; then
        echo "  $out already exists, skipping"
        continue
    fi

    echo "  $f -> $out"
    convert "$f" -quality 90 "$out" && rm "$f"
done

echo "All done."
