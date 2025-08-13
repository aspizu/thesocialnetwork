#!/usr/bin/bash
set -euo pipefail
cd frontend
bun install
bun run build
cd ..
cd backend
xargs kill < /var/run/gunicorn.pid
uv sync
uv pip install -e .
uv run python -m gunicorn src.thesocialnetwork:app -b unix:/var/run/gunicorn.sock --pid /var/run/gunicorn.pid > /dev/null 2>&1 & disown
