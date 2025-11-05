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
- **P5.js Integration**: Custom animated background using P5.js particle system
- **Data-driven Content**: Projects and experiences loaded from JSON files in `/public`
- **Component Structure**: Modular React components in `/src/components`

### Project Structure

```mdx
src/
├── app/
│   ├── layout.tsx          # Root layout with font configuration
│   ├── page.tsx            # Main homepage component
│   └── globals.css         # Global styles
└── components/
    ├── P5Background.tsx    # Animated particle background
    ├── Header.tsx          # Navigation with external links
    ├── About.tsx           # Personal information section
    ├── Project.tsx         # Project showcase component
    └── Cat.tsx             # Interactive cat component
```

### Data Sources

- `/public/projects.json` - Project data with GitHub links and thumbnails
- `/public/experiences.json` - Professional experience data

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
- Dark mode enabled by default
- Responsive design with mobile-first approach
