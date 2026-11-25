# Ask AI staging Worker

This Worker serves the Ask AI API for the `ai-for-service-dev` documentation stage. It uses only the AI for Service search index configured in `wrangler.toml` and deploys as `docs-ai-assistant-staging`.

## Deploy from Cloudflare Builds

1. In Cloudflare, open **Workers & Pages** and create an application connected to the `Koredotcom/docs-v2` GitHub repository.
2. Set the repository branch to `ai-for-service-dev` and the root directory to `worker`.
3. Use `npx wrangler deploy` as the deploy command. Confirm the deployed Worker name matches `docs-ai-assistant-staging` in `wrangler.toml`.
4. In the Worker dashboard, open **Settings → Variables and Secrets** and add `OPENROUTER_API_KEY` as a **secret**.
5. Save and deploy. Cloudflare Builds will deploy the Worker on pushes to the selected branch. The Worker URL will appear in Cloudflare under the `workers.dev` subdomain.

Cloudflare performs the build and deployment, so this flow does not need a Cloudflare API token, account ID, or GitHub Actions secrets. `ALLOWED_ORIGINS` and `SITE_URL` are public staging values in `wrangler.toml`. Keep the OpenRouter key in Cloudflare Worker secrets; do not put it in Git. The local `worker/.dev.vars` file is for local Wrangler development only and is ignored by Git.

See [Cloudflare Workers Builds](https://developers.cloudflare.com/workers/ci-cd/builds/) for Git integration setup.

## Widget feature flag

The widget is enabled by default. Disable it in its script tag with `data-enabled="false"` or add `?enabled=false` to the script URL. Re-enable it by setting `data-enabled="true"` or removing the `enabled=false` query parameter. A page can also set `window.DOCS_AI_ENABLED = false` before loading the script. The flag hides the widget without changing the Worker deployment.

Mintlify loads root-level JavaScript files automatically. `assistant.js` is at the docs root, is limited to `/ai-for-service` routes, and defaults to the staging Worker URL. `docs.json` remains unchanged.