#!/usr/bin/bash
set -euo pipefail
cd frontend
bun install
mkdir -p /var/www/dist
bun run build --outDir /var/www/dist
chown -R 755 /var/www/dist
cd ..
cd backend
if [ -f /var/run/gunicorn.pid ]; then
  xargs kill < /var/run/gunicorn.pid
fi
uv sync
uv pip install -e .
uv run python -m gunicorn src.thesocialnetwork:app \
  -b unix:/var/run/gunicorn.sock \
  --log-file /var/log/gunicorn.log \
  --pid /var/run/gunicorn.pid > /dev/null 2>&1 & disown
