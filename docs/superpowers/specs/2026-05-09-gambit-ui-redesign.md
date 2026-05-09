# Gambit UI Redesign + Next.js Migration

**Date:** 2026-05-09  
**Status:** Approved

## Summary

Migrate the Gambit YSWS landing page from Astro to Next.js App Router, and overhaul the visual design with a "Velvet Underground" palette — artsy, Hack Club energy meets velvet-rope casino.

---

## Framework Migration

**From:** Astro v4 + Tailwind CSS + Three.js  
**To:** Next.js 15 App Router + Tailwind CSS + Three.js

### Key migration rules
- All Three.js canvas components get `'use client'` directive
- Three.js components imported via `dynamic(() => import(...), { ssr: false })` in their parent page to avoid SSR canvas errors
- Single page app: `app/page.tsx` renders all sections
- Global styles in `app/globals.css`
- Tailwind config migrated and extended with new color tokens
- `next/font` for Space Grotesk (replaces Google Fonts `<link>` tags)
- `public/` folder kept as-is

### File structure
```
app/
  layout.tsx         # root layout, font, metadata
  page.tsx           # main page, imports all sections
  globals.css        # tailwind directives + base styles + custom animations
components/
  Navbar.tsx         # new
  Footer.tsx         # new
  HeroSection.tsx    # migrated from index.astro hero block
  YouShipSection.tsx # migrated from "You Ship" block
  WeShipSection.tsx  # migrated from "We Ship" block
  DetailsSection.tsx # migrated from "Details" block
  CTASection.tsx     # migrated from CTA block
  HeroChips.tsx      # Three.js — 'use client'
  RollingDice.tsx    # Three.js — 'use client'
  DraggableChip.tsx  # Three.js — 'use client'
  DiceIcon.tsx       # SVG icon — plain component
  ScrollReveal.tsx   # client component wrapping IntersectionObserver logic
```

---

## Color Palette

Replace all existing gambit color tokens:

| Token | Old | New | Usage |
|-------|-----|-----|-------|
| `gambit-dark` | `#0f0f0f` | `#0D0010` | page background |
| `gambit-black` | `#1a1a1a` | `#130018` | alternate section bg |
| `gambit-card` | — | `#1A0025` | card backgrounds |
| `gambit-gold` | `#FFD700` | `#C8A96E` | champagne gold, primary accent |
| `gambit-violet` | — | `#8B2FC9` | electric violet, secondary accent |
| `gambit-cream` | — | `#F5F0E8` | primary text |
| `gambit-muted` | — | `#9B8EA8` | muted/secondary text |

Remove old color tokens: `gambit-red`, `gambit-blue`, `gambit-green`.

Border styles:
- Subtle gold: `border-gambit-gold/15`
- Glow gold: `border-gambit-gold/40`
- Subtle violet: `border-gambit-violet/20`
- Glow violet: `border-gambit-violet/50`

---

## Component Designs

### Navbar (new)
- Fixed top, full width, `z-50`
- Default: fully transparent
- On scroll (>50px): `backdrop-blur-md bg-gambit-dark/80 border-b border-gambit-gold/15`
- Left: "GAMBIT" wordmark in champagne gold, bold, uppercase, tracking-wider
- Right: anchor links → `How It Works`, `Prizes`, `Join` in gambit-cream, hover gold underline
- Mobile: collapse links (hamburger optional — skip for v1, just hide links below md)
- Implemented as `'use client'` for scroll detection

### Hero Section
- Background: `HeroChips` Three.js canvas (keep as-is, colors are fine on purple-black)
- Layout: centered, `min-h-screen`
- Decorative elements: suit symbols `♠ ♥ ♦ ♣` scattered in corners at low opacity (`text-gambit-gold/10`), large font, `pointer-events-none`, `select-none`
- Title: "GAMBIT" — keep massive, use `text-gambit-gold` (champagne), `glitch-text` hover
- Subtitle: "Stuck on what to build?" in gambit-cream
- Body: existing copy in gambit-muted
- CTAs:
  - Primary: `bg-gambit-violet text-white` + `hover:bg-gambit-violet/80`, `pulse-glow` uses violet glow
  - Secondary: `border-2 border-gambit-gold text-gambit-gold hover:bg-gambit-gold hover:text-black`
- Remove the 01–04 grid tiles from hero entirely (moved conceptually to You Ship)
- Add subtle `mb-32` before section ends for breathing room

### You Ship Section
- Background: `gambit-black` (`#130018`)
- `RollingDice` stays top-right
- Section label "You Ship" in gambit-violet (not gold)
- Heading: gambit-cream
- Step cards grid (2x2):
  - Background: `gambit-card` (`#1A0025`)
  - Step number: ultra-large (`text-6xl`), outlined style — `text-transparent bg-clip-text bg-gradient-to-r from-gambit-violet to-gambit-gold`
  - Left accent bar: `border-l-4 border-gambit-violet`
  - Hover: `hover:border-gambit-gold/50 hover:bg-gambit-violet/10 hover:scale-[1.02]`
  - Title: gambit-cream bold
  - Body: gambit-muted

### We Ship Section
- Background: `gambit-dark` (`#0D0010`)
- `DraggableChip` stays top-right
- Section label "We Ship" in gambit-gold
- Heading + subtext: existing copy, colors updated to cream/muted
- Prize cards (4 columns):
  - Each gets a suit symbol icon: ♠ Stickers · ♥ Tech Gear · ♦ Grants · ♣ Mystery
  - Suit symbol: `text-3xl text-gambit-gold/60 mb-3`
  - Card bg: `gambit-card`
  - Border: `shadow-[0_0_0_1px_rgba(139,47,201,0.25)]` (ring via box-shadow)
  - Hover: violet glow `hover:shadow-[0_0_0_1px_rgba(139,47,201,0.5),0_0_20px_rgba(139,47,201,0.2)]`
- Criteria box: `border border-gambit-gold/30 bg-gambit-gold/5` + `shadow-[0_0_30px_rgba(200,169,110,0.1)]`

### Details Section
- Background: `gambit-black` (`#130018`)
- Border-left items:
  - Loot System: `border-gambit-gold` border, title gets gradient text `from-gambit-gold to-gambit-violet`
  - Others: `border-gambit-violet/40`, titles in gambit-cream
  - Hover: border brightens via transition
- Spacing: increase padding between items

### CTA Section
- Background: `gambit-dark`
- Decorative: giant `♦` behind heading — `text-[20rem] text-gambit-violet/5 absolute inset-0 flex items-center justify-center pointer-events-none select-none`
- Heading "Ready to roll?" in gambit-cream
- Subtext in gambit-muted
- Button: `bg-gambit-gold text-black hover:bg-gambit-cream`, pulse-glow uses gold
- Separator pills: gambit-violet `|` instead of gold
- Footer note: gambit-muted

### Footer (new)
- Background: `#080010` (deepest purple, slightly darker than dark)
- Top border: `border-t border-gambit-gold/20`
- Layout: `flex justify-between items-center py-8 px-8`
- Left: "GAMBIT" small + "A Hack Club YSWS"
- Right: `#gambit` · Prize Suggestions · Join
- Bottom: copyright line in gambit-muted text-xs

---

## Animation & Scroll Reveal

Keep all existing animations. Migrate from `<style>` block to `app/globals.css`.

Update `pulse-glow` keyframes: use violet glow instead of gold glow.

`ScrollReveal` component: `'use client'` component that runs `IntersectionObserver` in `useEffect`, adding `active` to elements with `.reveal`, `.reveal-left`, `.reveal-right` in the document. Rendered once in `app/layout.tsx`.

Parallax: keep the existing scroll-based section transform, moved to a `'use client'` component or `useEffect` in page.

---

## What Does NOT Change

- Three.js chip geometry and dice geometry — untouched
- Copy/content in all sections — untouched (except suit symbol icons added)
- Space Grotesk font
- Scroll reveal animation logic
- `glitch-text`, `float-animation` keyframes
- Section structure and ordering

---

## Out of Scope

- No routing beyond single page
- No backend, API routes, or forms
- No mobile hamburger menu (nav links hidden below `md`)
- No unit tests
