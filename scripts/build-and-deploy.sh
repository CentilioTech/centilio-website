#!/bin/bash
#
# Manual-fallback version of the build-and-push GitHub Action.
# Use this when:
#   - The GitHub Action is broken
#   - You need to push a build without going through the production branch
#   - You want to verify the build locally before letting CI ship it
#
# REQUIREMENTS:
#   - You have push access to CentilioTech/centilio-website-build-deployment
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
#   4. git init in out/, commit, force-push to centilio-website-build-deployment/main
#
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO_ROOT"

BRIDGE_URL="https://github.com/CentilioTech/centilio-website-build-deployment.git"

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

# Clone bridge repo so we commit on top of its history (preserves
# rollback capability via git revert).
TMPDIR=$(mktemp -d)
trap "rm -rf $TMPDIR" EXIT
git clone --depth 1 "$BRIDGE_URL" "$TMPDIR/deploy-repo"
cd "$TMPDIR/deploy-repo"
find . -mindepth 1 -maxdepth 1 ! -name '.git' -exec rm -rf {} +
cp -R "$REPO_ROOT/out/." .

cat > README.md <<EOF
# centilio-website-build-deployment

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

git config user.email "${USER}@$(hostname)"
git config user.name "$USER (manual deploy)"
git add -A
if git diff --cached --quiet; then
    echo "Nothing changed in build output — nothing to push."
    exit 0
fi
git commit -q -m "build: $(echo "$SOURCE_MSG" | head -n1)" \
                -m "Source commit: $SOURCE_SHA" \
                -m "Source branch: $SOURCE_BRANCH" \
                -m "Built manually via scripts/build-and-deploy.sh" \
                -m "" \
                -m "$SOURCE_MSG"

echo "=== [5/5] Push to centilio-website-build-deployment (main) ==="
# Regular push — no force. Adds a commit on top.
git push origin main

echo
echo "============================================================"
echo " Build pushed."
echo " Bridge repo: https://github.com/CentilioTech/centilio-website-build-deployment"
echo " DO App Platform should auto-deploy within ~3 min."
echo "============================================================"
