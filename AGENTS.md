# Commands
- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- No tests configured

# Architecture
- Next.js 16 app directory with MDX support
- Convex backend for newsletter functionality
- Redis for data storage
- Blog posts as static MDX pages under app/(post)/
- Pure components in /components/, post components in /app/(post)/components/
- shadcn/ui + Tailwind CSS for styling

# Code Style
- TypeScript with path aliases (@/*)
- ESLint: next/core-web-vitals (react/jsx-no-target-blank disabled)
- Prettier: arrowParens avoid
- Strict null checks enabled, other strict mode disabled
- Wrap media in Figure component, use Tenor for GIFs
- CopyPrompt component for educational prompts
- Class-variance-authority for component variants
