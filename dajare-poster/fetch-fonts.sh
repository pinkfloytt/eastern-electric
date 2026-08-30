#!/bin/sh
# Noto Sans JP (OFL) をダウンロードして fonts/ に置く
set -e
cd "$(dirname "$0")"
mkdir -p fonts
for w in 700 900; do
  url=$(curl -s "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@$w" \
        | grep -o 'https://fonts.gstatic.com[^)]*' | head -1)
  curl -s "$url" -o "fonts/NotoSansJP-$w.ttf"
  echo "fonts/NotoSansJP-$w.ttf"
done
