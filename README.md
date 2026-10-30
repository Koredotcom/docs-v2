# Kore.ai Platform Documentation

Official documentation for the Kore.ai Platform — build intelligent AI solutions for enterprise productivity, customer service, and process automation.

## Products

The new **[Agent Platform](https://docs.kore.ai/home)** is the next-generation Kore.ai platform to design, deploy, and operate intelligent agent systems. The platform unifies conversational AI and agentic AI under a single programming model, so a single agent definition can combine deterministic workflows with autonomous reasoning. 

Other business solutions of Kore.ai:

- **[AI for Service](https://docs.kore.ai/ai-for-service)** — Customer service AI solutions.
- **[AI for Work](https://docs.kore.ai/ai-for-work)** — Enterprise productivity platform.
- **[AI for Process](https://docs.kore.ai/ai-for-process)** — Process automation with AI.

## Contribute to this Documentation

This repo is public. To contribute edits, clone it or fork it and submit a PR. Request a review of your PR and wait for a repo owner to merge it into the `main` branch. To report bugs or share suggestions, create an issue.

When editing .mdx files, follow GitHub Flavored Markdown syntax.

To preview your edits locally, use the npm package of [Mintlify](https://www.mintlify.com/docs/cli/index).

## Folder structure and common files

```text
agent-platform/        # Agent Platform v1 archived docs
agent-platform/v1      # Artemis Agent Platform v2 docs
ai-for-process/        # AI for Process archived docs
ai-for-service/        # AI for Service docs
ai-for-work/           # AI for Work docs
assets/                # Common assets for all docs, say favicon, logo, etc. Used in docs.json.
├── favicon.png
├── favicon-dark.png
├── favicon-light.svg
├── koreailogo-black.svg
├── koreailogo-white.svg
custom-css             # custom stylesheets. Don't edit.
├── style.css
drafts                 # Drafted content or assets that are to be used later.
snippets               # Reusable content for single sourcing
.cspell.json           # Spell check config file that's NOT available in the repo but added in everyone's local clone manually. Works when extension is installed in VSCode editor.
.gitignore             # Exclusions from repo uploads
.lycheeignore          # Configuration for Lychee linkchecker. It is configured to run as an on-demand Action on this repo.
.markdownlint.jsonc    # Markdown linting rules. Works when extension is installed in VSCode editor
.mintignore            # Exclusions from the Mintlify build
docs.json              # Config, TOC, home page design theme, analytics integration, etc.
home.mdx               # Docs home page
License                # MIT license for docs
linkinator.config.json # Config for Linkinator link checker. It is used separately from the CLI.
README.md              # This file.
search.js              # JavaScript that powers search of AI for Service and AI for Work help articles.
```
