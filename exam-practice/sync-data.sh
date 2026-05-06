#!/usr/bin/env bash
# Regenerate data.js from data.json so the dashboard works under file:// (no CORS).
# Run after editing data.json.
set -e
cd "$(dirname "$0")"
python3 -c "
import json
with open('data.json') as f:
    data = json.load(f)
with open('data.js', 'w') as f:
    f.write('window.examData = ')
    json.dump(data, f, indent=2)
    f.write(';')
print('data.js regenerated from data.json')
"
