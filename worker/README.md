# Ask AI Worker

## Shared Worker

The existing docs-ai-assistant-staging Worker serves the local site, the AI for Service staging site, and production:

- http://localhost:3000
- https://koreai-ai-for-service-dev.mintlify.app
- https://docs.kore.ai

All three origins use the same deployment, OpenRouter secret, model quota, and latest AI for Service search index. Production therefore shares the staging Worker's availability and limits.

The Worker reads ALLOWED_ORIGINS, APP_NAME, and the model settings from worker/wrangler.toml. Its OPENROUTER_API_KEY is stored as an encrypted Cloudflare Worker secret and must never be committed to Git. The request origin is used for OpenRouter's HTTP-Referer header so requests from each site are attributed to their actual origin.

DOCS_INDEX_URL points to the search-index workflow output built from ai-for-service-dev:

https://raw.githubusercontent.com/Koredotcom/docs-v2/search-index/ai-for-service.json

Keep that shared URL current when the search-index workflow or branch changes.

## Deploying the shared Worker

The Cloudflare Worker is named docs-ai-assistant-staging to preserve the existing deployment URL:

https://docs-ai-assistant-staging.pratik-gokhe.workers.dev

When configuring Cloudflare Builds, use repository Koredotcom/docs-v2, the branch that contains the approved Worker source, root directory worker, and deploy command npx wrangler deploy. Keep the existing OPENROUTER_API_KEY secret on this Worker.

Update the Git configuration and Cloudflare runtime variables together. Cloudflare currently has the shared stage, production, and localhost origins configured. The dashboard notes when its variables differ from the Wrangler file.

## Widget feature flag

The widget is enabled by default. Disable it with data-enabled="false", an enabled=false script URL parameter, or window.DOCS_AI_ENABLED = false before the script loads. Mintlify loads root-level JavaScript files automatically, so docs.json does not need to change.

assistant.js uses the shared Worker by default. Set window.DOCS_AI_ENDPOINT before the script loads, or use the script's data-endpoint attribute, to override it.

## Local development

For a local Wrangler Worker, use worker/.dev.vars for development secrets. This file is ignored by Git. Never put OPENROUTER_API_KEY in wrangler.toml, source files, or commits.
