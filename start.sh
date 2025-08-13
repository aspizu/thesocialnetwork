#!/usr/bin/bash
set -euo pipefail
cd frontend
bun install
bun run build
cd ..
cd backend
if [ -f /var/run/gunicorn.pid ]; then
  xargs kill < /var/run/gunicorn.pid
fi
uv sync
uv pip install -e .
uv run python -m gunicorn src.thesocialnetwork:app -b unix:/var/run/gunicorn.sock --pid /var/run/gunicorn.pid > /dev/null 2>&1 & disown
