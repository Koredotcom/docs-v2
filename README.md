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
.claude/               # Claude Code project instructions (CLAUDE.md). Other files are git-ignored.
.github/               # Repo automation
├── CODEOWNERS
├── scripts/           # Search index build script (build-index.cjs)
└── workflows/         # Search index builds, external link check, filename convention check
.vscode/               # Shared VSCode settings and recommended extensions
agent-platform/        # Agent Platform (Artemis) v2 docs. Has its own drafts/ folder.
└── v1/                # Agent Platform v1 archived docs
ai-for-process/        # AI for Process archived docs
ai-for-service/        # AI for Service docs. Has its own drafts/ folder.
ai-for-work/           # AI for Work docs. Has its own drafts/ folder.
assets/                # Common assets for all docs, say favicon, logo, etc. Used in docs.json.
custom-css/            # Custom stylesheets. Don't edit.
└── style.css
drafts/                # Drafted content or assets that are to be used later. Excluded from the Mintlify build. The product folders agent-platform/, ai-for-service/, and ai-for-work/ have their own drafts/ folders.
snippets/              # Reusable content for single sourcing, including JSX components
.cspell.json           # Local only. Not in the repo (git-ignored). Add it manually. Instructions are [here](https://github.com/ashishguptaiitb/koreaidocs-cspell-config).
.gitignore             # Exclusions from repo uploads
.lycheeignore          # Configuration for Lychee linkchecker. It's an on-demand Action.
.markdownlint.jsonc    # Markdown linting rules. Works when extension is installed in VSCode editor
.mintignore            # Exclusions from the Mintlify build
docs.json              # Config, TOC, home page design theme, analytics integration, etc.
home.mdx               # Docs home page
License                # MIT license for docs
linkinator.config.json # Config for Linkinator link checker. It is used separately from the CLI.
README.md              # This file.
search.js              # JavaScript that powers search of AI for Service and AI for Work help articles.
```
