# Kore.ai Platform Documentation

Official documentation for the Kore.ai Platform — build intelligent AI solutions for enterprise productivity, customer service, and process automation.

## Products

- **[Agent Platform](https://docs-site-koreai.vercel.app/agent-platform)** — Build intelligent, autonomous AI agents
- **[AI for Work](https://docs-site-koreai.vercel.app/ai-for-work)** — Enterprise productivity platform
- **[AI for Service](https://docs-site-koreai.vercel.app/ai-for-service)** — Customer service AI solutions
- **[AI for Process](https://docs-site-koreai.vercel.app/ai-for-process)** — Process automation with AI

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework
- [Nextra 4](https://nextra.site/) — Documentation framework
- [Pagefind](https://pagefind.app/) — Static search
- [Vercel](https://vercel.com/) — Deployment

## Contributing

1. Create a feature branch from `main`
2. Make your changes to MDX files in `src/content/`
3. Open a Pull Request
4. Wait for Vercel preview deployment and review
5. Get approval and merge

All changes to `main` require a Pull Request with:
- At least 1 approving review
- Passing Vercel deployment check

## Structure

```
src/
├── app/                 # Next.js app router
│   └── layout.tsx       # Main layout with navbar/footer
├── content/             # Documentation content (MDX)
│   ├── agent-platform/  # Agent Platform docs
│   ├── ai-for-work/     # AI for Work docs
│   ├── ai-for-service/  # AI for Service docs
│   ├── ai-for-process/  # AI for Process docs
│   └── index.mdx        # Home page
└── mdx-components.tsx   # Custom MDX components
```

## License

Copyright © Kore.ai, Inc. All rights reserved.
