# Kore.ai Platform Documentation

Official documentation for the Kore.ai Platform — build intelligent AI solutions for enterprise productivity, customer service, and process automation.

## Products

- **Agent Platform** — Build intelligent, autonomous AI agents
- **AI for Work** — Enterprise productivity platform
- **AI for Service** — Customer service AI solutions
- **AI for Process** — Process automation with AI

## Development

* Install [Node.js](https://nodejs.org/en/download).
* Install Mintlify `npm i -g mintlify`.
* Create local build `mint dev` or `mint dev --port xxxx` in the cloned repo's root folder.
* Preview deployments/stage links are in the [PRs](https://github.com/Koredotcom/docs-v2/pulls).

## Contribute

1. Create a feature branch from `main` branch.
2. Create or update .md or .mdx files.
3. Create a pull request.
5. Wait for its approval and merge.

## Folder structure

```
agent-management-platform  # Agent Management Platform docs 
agent-platform/            # Agent Platform docs
ai-for-process/            # AI for Process docs
ai-for-service/            # AI for Service docs
ai-for-work/               # AI for Work docs
assets/              # Common assets for all docs, mostly contains graphics
├── favicon.png
├── koreailogo.svg
custom-css           # custom stylesheets
├── style.css
snippets             # Reusable content for single sourcing
xo                   # Dump of old docs
.gitignore           # Exclusions from repo uploads
.markdownlint.jsonc  # MD Linter
.mintignore          # Exclusions from the Mintlify build
docs.json            # Config, TOC, home page design, etc.
home.mdx             # Docs home page 
```

## License

Copyright © Kore.ai, Inc. All rights reserved.
