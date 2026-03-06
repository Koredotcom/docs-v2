# Kore.ai Platform Documentation

Official documentation for the Kore.ai Platform — build intelligent AI solutions for enterprise productivity, customer service, and process automation.

## Products

- **Agent Platform** — Build intelligent, autonomous AI agents
- **AI for Work** — Enterprise productivity platform
- **AI for Service** — Customer service AI solutions
- **AI for Process** — Process automation with AI

## Prerequisites and Development

Get started:

- [Node.js](https://nodejs.org) v20.17.0 or later (LTS version recommended)
- Get write access to this repo.
* Install Mintlify CLI `npm i -g mintlify`.

Dev:

* Create local build using `mint dev` or `mint dev --port xxxx` in the cloned repo's root folder.
* Preview deployments/stage links are in [the pull requests](https://github.com/Koredotcom/docs-v2/pulls).

## Contribute

1. Clone the repo. Use GitHub Desktop client.
2. Work only in your [product-specific branch](https://github.com/Koredotcom/docs-v2/branches) and your product-specific folder.
3. Create or update only .mdx files.
4. Post-migration cleanup details are shared internally.
6. To preview changes, raise a PR and look for the deployment link.
7. To publish doc updates, request a review of your PR and wait for it to be merged. Do NOT merge on your own.

## Folder structure

```
agent-management-platform  # Agent Management Platform docs 
agent-platform/            # Agent Platform docs
ai-for-process/            # AI for Process docs
ai-for-service/            # AI for Service docs
ai-for-work/               # AI for Work docs
assets/                    # Common assets for all docs, mostly contains graphics
├── favicon.png
├── koreailogo.svg
custom-css           # custom stylesheets. Don't edit.
├── style.css
snippets             # Reusable content for single sourcing
xo                   # Don't edit. Read-only dump of XO11 docs from old repo. Being repurposed in /ai-for-service folder.
.cspell.json         # Spell check config file that's NOT available in the repo but added in everyone's local clone manually. Works when extension is installed in VSCode editor.
.gitignore           # Exclusions from repo uploads
.markdownlint.jsonc  # Markdown linting rules. Works when extension is installed in VSCode editor
.mintignore          # Exclusions from the Mintlify build
docs.json            # Config, TOC, home page design theme, analytics integration, etc.
home.mdx             # Docs home page
README.md            # This file
```

## License

Copyright © Kore.ai, Inc. All rights reserved.
