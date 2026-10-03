# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

### Primary Development

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build the static site for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint on codebase
- `pnpm test` - Run tests with Vitest

### Package Management

- Uses `pnpm` as package manager (v10.10.0)

## Architecture Overview

This is a **Next.js static resume website** that exports to static files (`output: "export"` in next.config.ts). The site showcases personal projects and professional experience.

### Key Technical Decisions

- **Static Export**: Configured for GitHub Pages deployment (setodeve.github.io/Resume-Website/)
- **Single page with tabs**: 記事 / Works / 経歴 on `/` (`?tab=articles|works|cv`); `/works` and `/cv` redirect to the matching tab
- **Build-time articles**: Latest Qiita / Zenn articles are fetched on the server at build time (the deploy workflow also rebuilds daily)
- **Data-driven Content**: Projects and experiences loaded from JSON files in `/public`

### Project Structure

```mdx
src/
├── app/
│   ├── layout.tsx          # Root layout (Inter font, theme init script)
│   ├── page.tsx            # Single page: profile + tabs
│   ├── works/, cv/         # Legacy URLs redirecting to tabs
│   └── globals.css         # Design tokens (light/dark) and global styles
├── components/
│   ├── ThemeProvider.tsx   # Light/dark theme state (localStorage)
│   ├── ThemeToggle.tsx     # Theme toggle button
│   ├── Profile.tsx         # Avatar, name, social links
│   ├── ResumeTabs.tsx      # Tab list and panels (client)
│   ├── ArticleList.tsx     # 記事 tab
│   ├── WorkList.tsx        # Works tab
│   ├── CareerList.tsx      # 経歴 tab (company-level summary)
│   └── RedirectToTab.tsx   # Client redirect for legacy URLs
└── lib/
    ├── articles.ts         # Qiita / Zenn fetching, sorting, date formatting
    └── resume.ts           # Project / experience types and career summary
```

### Data Sources

- `/public/projects.json` - Project data with GitHub links and thumbnails
- `/public/experiences.json` - Professional experience data
- Qiita API / Zenn API - Latest articles (build time)

### Next.js Configuration

- Configured for static export to GitHub Pages
- Image optimization disabled (`unoptimized: true`)
- SVG images allowed (`dangerouslyAllowSVG: true`)
- Remote images from GitHub allowed

### Git Hooks

- **Lefthook** configured for pre-commit linting
- Runs `pnpm lint` on staged TypeScript/JavaScript files
- Auto-fixes and stages corrected files

### Testing

- **Vitest** for unit testing
- **@testing-library/react** for component testing
- **jsdom** environment for DOM testing

### Styling

- **Tailwind CSS** v4.1.11 for styling
- Design tokens defined as CSS variables in `globals.css` (`.dark` overrides); dark mode by default
- Icons: Phosphor Icons (`@phosphor-icons/react`)
- Responsive design with mobile-first approach
