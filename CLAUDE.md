# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.2 website for "Centilio" (internally referenced as "fairfield-website" in package.json) built with React 19, TypeScript, and Tailwind CSS 4. The project uses the App Router architecture and Turbopack for fast development builds.

## Development Commands

### Running the Development Server
```bash
npm run dev
```
Opens development server at http://localhost:3000 with Turbopack enabled for faster builds.

### Building for Production
```bash
npm run build
```
Creates optimized production build using Turbopack.

### Starting Production Server
```bash
npm start
```
Runs the production server (requires `npm run build` first).

### Linting
```bash
npm run lint
```
Runs ESLint with Next.js TypeScript configuration.

## Architecture

### App Router Structure
The project uses Next.js App Router with the following page structure:
- `app/page.tsx` - Root homepage (renders Home component)
- `app/home/page.tsx` - Home route
- `app/about/page.tsx` - About page
- `app/careers/page.tsx` - Careers page
- `app/contact/page.tsx` - Contact page
- `app/project/page.tsx` - Project page
- `app/layout.tsx` - Root layout with Geist font configuration

### Component Organization
Components are organized by feature in the `components/` directory:
- `components/home/Home.tsx` - Home page component
- `components/aboutus/Aboutus.tsx` - About us component
- `components/careers/Careers.tsx` - Careers listing component
- `components/careers/CareerForm.tsx` - Career application form
- `components/contact/Contact.tsx` - Contact component
- `components/project/Project.tsx` - Project component
- `components/layout/Header.tsx` - Header navigation component
- `components/layout/Footer.tsx` - Footer component

**Important**: Page components in `app/` typically import and render their corresponding feature component from `components/`. This separation keeps business logic in reusable components while pages handle routing.

### Import Aliases
TypeScript is configured with `@/*` path alias mapping to the root directory:
```typescript
import Home from '@/components/home/Home'
```

### Styling Architecture
- **Tailwind CSS 4** is used via PostCSS (`@tailwindcss/postcss`)
- Global styles in `app/globals.css` with custom CSS variables for theming
- Custom color tokens defined in `:root` for the Centilio design system:
  - `--dark-bg: #181A1E`
  - `--border-color: #5B5858`
  - `--accent-blue: #3B82F6`
  - `--accent-red: #EF4444`
- Theme configuration uses inline `@theme` directive to expose CSS variables to Tailwind
- Font system uses three Google Fonts:
  - **Inter** (primary, weights 400-700) - exposed as `--font-inter`
  - **Geist Sans** - exposed as `--font-geist-sans`
  - **Geist Mono** - exposed as `--font-geist-mono`

### TypeScript Configuration
- Target: ES2017
- Module resolution: bundler
- Strict mode enabled
- JSX preserve mode (handled by Next.js)

## Key Technical Decisions

### Turbopack
All build commands use `--turbopack` flag for improved performance. This is the default in this project.

### ESLint Configuration
Uses flat config format (`eslint.config.mjs`) with Next.js core-web-vitals and TypeScript presets. Ignores standard build directories (`.next/`, `out/`, `build/`).

### Font Strategy
Uses Next.js font optimization with Geist fonts and Inter, exposing them as CSS variables for use throughout the application. Inter is the primary font applied to the body via `globals.css`.

### Metadata
Site metadata is centrally managed in `app/layout.tsx`:
- Title: "Centilio - Your Trusted Growth Engine"
- Description: Growth partner focused on revenue scaling and operations simplification
