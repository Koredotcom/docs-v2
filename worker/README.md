# Ask AI Worker

The same Worker source supports staging and production. The top-level Wrangler configuration is the staging Worker; the production Worker is the production environment in worker/wrangler.toml.

## Staging

Cloudflare Builds should use repository Koredotcom/docs-v2, branch ai-for-service-dev, root directory worker, and deploy command npx wrangler deploy. This keeps the existing Worker name docs-ai-assistant-staging.

Set OPENROUTER_API_KEY as a Cloudflare Worker secret on the staging Worker. The stage origin and SITE_URL are configured in wrangler.toml.

## Production

After the production changes are merged to main, configure Cloudflare Builds for branch main, root directory worker, and deploy command npx wrangler deploy --env production. This deploys docs-ai-assistant-production from the production environment in wrangler.toml.

Set OPENROUTER_API_KEY as a Cloudflare Worker secret on the production Worker. Secrets are separate per Worker environment and are not stored in Git. After the first production deployment, add the secret using the Cloudflare dashboard or run npx wrangler secret put OPENROUTER_API_KEY --env production from an authenticated Wrangler session.

The production origin and SITE_URL are https://docs.kore.ai. Both environments intentionally use the current shared AI for Service index at https://raw.githubusercontent.com/Koredotcom/docs-v2/search-index/ai-for-service.json.

assistant.js selects the production Worker on docs.kore.ai, the staging Worker on other hosted docs pages, and the local Worker on localhost. Set window.DOCS_AI_ENDPOINT before the script loads to override the default endpoint.

## Widget feature flag

The widget is enabled by default. Disable it with data-enabled="false", an enabled=false script URL parameter, or window.DOCS_AI_ENABLED = false before the script loads. Mintlify loads root-level JavaScript files automatically, so docs.json does not need to change.

## Local development

Use worker/.dev.vars for local Wrangler secrets and development only. It is ignored by Git. Never put OPENROUTER_API_KEY in wrangler.toml, source files, or commits.
