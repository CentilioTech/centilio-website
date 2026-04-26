#!/bin/bash
#
# Manual-fallback version of the build-and-push GitHub Action.
# Use this when:
#   - The GitHub Action is broken
#   - You need to push a build without going through the production branch
#   - You want to verify the build locally before letting CI ship it
#
# REQUIREMENTS:
#   - You have push access to CentilioTech/centilio-website-build
#   - Your GitHub auth is set up (gh auth status confirms)
#   - You're on the centilio-website source repo, on whatever branch you
#     want to ship
#
# USAGE:
#   ./scripts/build-and-deploy.sh
#
# What it does (mirrors .github/workflows/build-and-push.yml):
#   1. npm ci                         (install deps cleanly)
#   2. npm run build                  (produce out/)
#   3. Sanity-check the build         (no localhost leaks, expected pages)
#   4. git init in out/, commit, force-push to centilio-website-build/main
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

BRIDGE_URL="https://github.com/CentilioTech/centilio-website-build.git"

echo "=== [1/5] Install dependencies (npm ci) ==="
npm ci

echo "=== [2/5] Build (npm run build) ==="
npm run build

echo "=== [3/5] Sanity-check the build ==="
test -f out/index.html       || { echo "FAIL: out/index.html missing"; exit 1; }
test -f out/robots.txt       || { echo "FAIL: out/robots.txt missing"; exit 1; }
test -f out/sitemap.xml      || { echo "FAIL: out/sitemap.xml missing"; exit 1; }
test -f out/_headers         || { echo "FAIL: out/_headers missing"; exit 1; }
test -f out/_redirects       || { echo "FAIL: out/_redirects missing"; exit 1; }
PAGE_COUNT=$(find out -name "index.html" | wc -l | tr -d ' ')
if [ "$PAGE_COUNT" -lt 30 ]; then
    echo "FAIL: only $PAGE_COUNT index.html files in build (expected 30+)"
    exit 1
fi
echo "  OK: $PAGE_COUNT pages built"
if grep -q "http://localhost" out/index.html; then
    echo "FAIL: localhost URL leaked into homepage HTML"
    grep -n "http://localhost" out/index.html | head
    exit 1
fi
echo "  OK: no localhost URLs in homepage"

echo "=== [4/5] Stage out/ as a git repo ==="
SOURCE_SHA=$(git rev-parse HEAD)
SOURCE_BRANCH=$(git rev-parse --abbrev-ref HEAD)
SOURCE_MSG=$(git log -1 --pretty=%B)

cd out

cat > README.md <<EOF
# centilio-website-build

Pre-built static export of [\`centilio-website\`](https://github.com/CentilioTech/centilio-website).
DigitalOcean App Platform deploys every push to \`main\` here.

**Do NOT edit files by hand.** The build pipeline overwrites this repo on
every push to \`centilio-website/production\`. Make changes in the source
repo instead.

See \`centilio-audit/P3_DEPLOY_PIPELINE.md\` for the full pipeline
documentation.

Last manual rebuild: $(date -u +%Y-%m-%dT%H:%M:%SZ)
Source commit: $SOURCE_SHA ($SOURCE_BRANCH)
EOF

rm -rf .git
git init -q -b main
git add -A
git commit -q -m "build: $(echo "$SOURCE_MSG" | head -n1)" \
                -m "Source commit: $SOURCE_SHA" \
                -m "Source branch: $SOURCE_BRANCH" \
                -m "Built manually via scripts/build-and-deploy.sh" \
                -m "" \
                -m "$SOURCE_MSG"

echo "=== [5/5] Push to centilio-website-build (main) ==="
git remote add origin "$BRIDGE_URL"
git push -f origin main

echo
echo "============================================================"
echo " Build pushed."
echo " Bridge repo: https://github.com/CentilioTech/centilio-website-build"
echo " DO App Platform should auto-deploy within ~3 min."
echo "============================================================"
