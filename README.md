# Kore.ai Platform Documentation

Official documentation for the Kore.ai Platform — build intelligent AI solutions for enterprise productivity, customer service, and process automation.

## Products

The new **[Agent Platform](https://docs.kore.ai/home)** is the next-generation Kore.ai platform to design, deploy, and operate intelligent agent systems. The platform unifies conversational AI and agentic AI under a single programming model, so a single agent definition can combine deterministic workflows with autonomous reasoning. 

Other business solutions of Kore.ai:

- **[AI for Service](https://docs.kore.ai/ai-for-service)** — Customer service AI solutions.
- **[AI for Work](https://docs.kore.ai/ai-for-work)** — Enterprise productivity platform.
- **[AI for Process](https://docs.kore.ai/ai-for-process)** — Process automation with AI.

## Contribute to this Documentation

Prerequisites to author and contribute are:

- [Node.js](https://nodejs.org) v20.17.0 or later (LTS version recommended).
- Get write access to this repo.
- Install Mintlify CLI `npm i -g mintlify`.

To author and preview, follow these steps:

1. Clone the repo. Use GitHub Desktop client.
1. Work only in your [product-specific branch](https://github.com/Koredotcom/docs-v2/branches) and your product-specific folder.
1. Create or update the .mdx files or other assets.
1. To preview locally, create a local build using `mint dev` or `mint dev --port xxxx` in the cloned repo's root folder.
1. To preview on stage, create [a pull requests](https://github.com/Koredotcom/docs-v2/pulls) targeting `main` branch and view the preview or deployment link in it.
1. To publish your doc updates, request a review of your PR and wait for it to be merged. Do NOT merge on your own.

## Folder structure and common files

```text
agent-platform/				# Agent Platform docs
ai-for-process/				# AI for Process docs
ai-for-service/				# AI for Service fka XO11 docs
ai-for-work/				# AI for Work docs
assets/						# Common assets for all docs, say favicon, logo, etc.
├── favicon.png
├── koreailogo.svg
custom-css			# custom stylesheets. Don't edit.
├── style.css
snippets			# Reusable content for single sourcing
xo/					# Don't edit. Read-only dump of XO11 docs from old repo. Being repurposed in /ai-for-service folder.
.cspell.json		# Spell check config file that's NOT available in the repo but added in everyone's local clone manually. Works when extension is installed in VSCode editor.
.gitignore			# Exclusions from repo uploads
.markdownlint.jsonc	# Markdown linting rules. Works when extension is installed in VSCode editor
.mintignore			# Exclusions from the Mintlify build
docs.json			# Config, TOC, home page design theme, analytics integration, etc.
home.mdx			# Docs home page
License				# 
README.md			# This file
```
