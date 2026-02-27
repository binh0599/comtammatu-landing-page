# CLAUDE.md — Cơm Tấm Má Tư

## Project Overview

Landing page website for **Cơm Tấm Má Tư**, a Vietnamese broken rice restaurant in Đất Đỏ, Bà Rịa - Vũng Tàu. The site is a single-page application with full-page snap scrolling, Indochine-themed design, and strong SEO for local search.

- **Production URL:** https://comtammatu.com
- **Language:** Vietnamese (`vi_VN` locale)
- **Deployment:** Vercel

## Tech Stack

| Technology       | Version | Purpose                        |
|------------------|---------|--------------------------------|
| Next.js          | 16.x    | App Router, SSR, image optimization |
| React            | 19.x    | UI library                     |
| TypeScript       | 5.x     | Type safety (strict mode)      |
| Tailwind CSS     | 4.x     | Utility-first styling          |
| PostCSS          | —       | Tailwind integration           |
| Vercel Speed Insights | 1.x | Performance monitoring        |

## Commands

```bash
npm run dev      # Start dev server on localhost:3000
npm run build    # Production build
npm run start    # Serve production build
npm run lint     # Run ESLint (flat config, Core Web Vitals + TypeScript rules)
```

**Always run `npm run lint` before committing.** There is no test framework configured.

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout: fonts, metadata, JSON-LD, CustomCursor
│   ├── page.tsx            # Homepage: snap-scroll container with all sections
│   ├── globals.css         # Global styles, animations, Indochine color palette
│   ├── robots.ts           # robots.txt generation
│   ├── sitemap.ts          # sitemap.xml generation
│   └── icon.png            # Favicon
├── components/             # Page-level React components
│   ├── Navbar.tsx           # Floating pill navbar with glassmorphism
│   ├── Hero.tsx             # Full-viewport hero with background image
│   ├── About.tsx            # Restaurant story section
│   ├── Menu.tsx             # Menu cards with pricing carousel
│   ├── Gallery.tsx          # Photo gallery (masonry layout)
│   ├── Testimonials.tsx     # Customer reviews carousel
│   ├── Footer.tsx           # Contact info, social links
│   ├── BookingModal.tsx     # Reservation modal with focus trapping
│   ├── Lightbox.tsx         # Full-screen image viewer
│   ├── AnimationProvider.tsx # Global IntersectionObserver for reveal animations
│   ├── HeroButtons.tsx      # Hero CTA buttons (client component)
│   ├── GalleryButtons.tsx   # Gallery control buttons (client component)
│   └── ui/                  # Small reusable UI primitives
│       ├── CustomCursor.tsx
│       ├── Counter.tsx
│       ├── ScrollIndicator.tsx
│       └── CornerOrnament.tsx
└── lib/
    ├── data.ts              # All static content: menus, gallery, testimonials, nav links
    └── hooks.ts             # Custom hooks (useInView)
public/
└── images/                  # WebP images: logos, menu items, restaurant space photos
```

## Architecture & Patterns

### Server vs Client Components
- **Server Components** (default): `page.tsx`, `layout.tsx`, `About.tsx`, `Gallery.tsx`
- **Client Components** (marked with `"use client"`): Interactive components that need browser APIs — `Navbar.tsx`, `Hero.tsx`, `Menu.tsx`, `Testimonials.tsx`, `BookingModal.tsx`, `Lightbox.tsx`, all `ui/` components, `hooks.ts`
- Below-the-fold components are **lazy-loaded** with `next/dynamic` in `page.tsx`

### Data Management
- **No database or API routes.** All content is static, defined in `src/lib/data.ts`
- TypeScript interfaces (`MenuGroup`, `GalleryImage`, `Testimonial`, etc.) are exported from `data.ts`
- To update menu items, prices, gallery images, or testimonials — edit `data.ts`

### State Management
- React hooks only (`useState`, `useEffect`, `useRef`, `useCallback`) — no external state library
- Inter-component communication via custom DOM events (e.g., `"open-booking"` event for the modal, `"open-lightbox"` for image viewer)

### Animations
- Scroll-triggered reveal animations via `AnimationProvider` (global `IntersectionObserver`)
- CSS classes: `.reveal`, `.reveal-up`, `.reveal-left`, `.reveal-right`, `.reveal-scale`, `.reveal-fade`
- Elements get `.visible` class when they enter the viewport
- All animation keyframes defined in `globals.css`

### Styling
- Tailwind CSS 4 with custom CSS variables for the Indochine color palette in `globals.css`:
  - `--color-do-co` (dark red, primary), `--color-vang-kem` (golden cream, accent)
  - `--color-nau-go` (brown wood), `--color-xanh-la` (green leaf)
- **Typography:** Philosopher (serif, headings) + Mulish (sans-serif, body text), both with Vietnamese subsets
- Path alias: `@/*` → `./src/*`

### SEO
- Full Open Graph + Twitter Card metadata in `layout.tsx`
- JSON-LD structured data (Restaurant schema) in `layout.tsx`
- Generated `robots.txt` and `sitemap.xml` from `src/app/`
- Section anchors: `#trang-chu`, `#cau-chuyen`, `#thuc-don`, `#khong-gian`, `#cam-nhan`, `#footer`

### Accessibility
- Skip link to main content
- Focus trapping in `BookingModal`
- ARIA labels on interactive elements
- Keyboard navigation support
- `focus-visible` ring styles

## Code Conventions

- **Language:** All UI text, comments, and commit messages are in **Vietnamese** (code identifiers in English)
- **Component files:** PascalCase (e.g., `BookingModal.tsx`)
- **Data/utility files:** camelCase (e.g., `data.ts`, `hooks.ts`)
- **Imports:** Use `@/` path alias for all `src/` imports
- **Images:** Use WebP format, served via `next/image` with AVIF fallback
- **No test files** — no testing framework is set up
- **No Prettier** — rely on ESLint for code quality

## Configuration Details

### TypeScript (`tsconfig.json`)
- Strict mode enabled
- Target: ES2017
- Module resolution: bundler
- JSX: react-jsx

### ESLint (`eslint.config.mjs`)
- ESLint 9 flat config format
- Extends: `eslint-config-next/core-web-vitals`, `eslint-config-next/typescript`
- Ignored dirs: `.next/`, `.agents/`, `out/`, `build/`

### Next.js (`next.config.ts`)
- Image optimization: AVIF + WebP, responsive device sizes
- Security headers: `X-Content-Type-Options`, `X-Frame-Options`, `X-XSS-Protection`, `Referrer-Policy`
- Image caching: 1 year, immutable

## Common Tasks

### Adding a new menu item
Edit `src/lib/data.ts` — add entry to `menuGroups`, `sideItems`, or `drinkOptions` arrays.

### Adding a gallery image
1. Place the WebP image in `public/images/`
2. Add an entry to `galleryImages` in `src/lib/data.ts` with `src`, `alt`, and optional `span` for grid layout

### Adding a new section
1. Create component in `src/components/`
2. Add it to `src/app/page.tsx` (use `next/dynamic` if below the fold)
3. Add section anchor ID and update `navLinks` in `data.ts`
4. Give the section a `snap-start` class for scroll snapping

### Modifying styles/colors
Edit CSS custom properties in `src/app/globals.css` (search for `:root` or `@theme`).
