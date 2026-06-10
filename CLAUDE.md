# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server (localhost:5173)
npm run build      # Production build → dist/
npm run preview    # Serve the production build locally
npm run lint       # ESLint across all files
```

There are no tests. No test runner is configured.

## Tech Stack

- **React 19** + **Vite 8** (Rolldown bundler)
- **React Router v7** — `BrowserRouter` wrapping in `main.jsx`, all routes defined in `App.jsx`
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin — imported as `@import "tailwindcss"` in `index.css` (no `tailwind.config.js`)
- **Framer Motion** — animations throughout; always check `useReducedMotion()` before animating
- **Lucide React** — all icons

## Route Structure

17 pages, all wrapped in `<AnimatedPage>` (fade+slide transition via `AnimatePresence`):

```
/                          Home
/about                     About
/services                  Services (hub)
/services/web-design       WebDesign (hub)
  /landing-page            LandingPage
  /corporate               CorporateWebsite
  /ecommerce               EcommerceWebsite
  /lms                     LMSWebsite
/services/digital-ads      DigitalAds (hub)
  /google-ads              GoogleAds
  /social-ads              SocialAds
/services/search           SearchHub (hub)
  /google-seo              GoogleSEO
  /ai-search               AISearch
/services/social-management  SocialManagement
/blog                      Blog
/contact                   Contact
```

## Styling Architecture

**Global CSS wins over Tailwind utilities** for element selectors. `index.css` defines global styles for `h1–h6`, `p`, buttons, and cards — these override Tailwind classes. To force a style on a heading (e.g. `color: white` on an `h2` inside a dark section), use an inline `style` prop; a Tailwind class alone will be overridden.

### Design tokens (all in `index.css`)
- **Card styles**: `.neumorphic`, `.claymorphic`, `.glassmorphic` — apply as `className`
- **Buttons**: `.btn-primary`, `.btn-ghost`, `.btn-ghost-white` — apply as `className` on `<a>` or `<button>`
- **Eyebrow label**: `.eyebrow-pill`
- **Brand colours**: `#1565c0` (primary blue), `#29b6f6` (sky accent), `#0b0f1e` (dark navy), `#f5f7fa` (alt background)
- **Fonts**: Space Grotesk (headings), Inter (body) — loaded from Google Fonts

### Button-group spacing rule
`section div:has(> a.btn-primary)` gets `padding-top: 1.5rem` globally to create breathing room between text and button rows. This is suppressed inside `.claymorphic`, `.neumorphic`, `.glassmorphic`, and `footer`. Do not add extra `mt-*` classes on button wrapper divs — the CSS handles it.

## Animation Conventions

All shared variants live in `src/utils/animations.js`:

```js
import { fadeUp, fadeLeft, fadeRight, scaleIn, staggerContainer, staggerFast,
         viewportOnce, safeAnim, safeAnimAnimate } from '../utils/animations';
```

- Use `safeAnim(variant, shouldReduce)` for scroll-triggered (`whileInView`) animations
- Use `safeAnimAnimate(variant, shouldReduce)` for mount-triggered (`animate`) animations
- Always get `const shouldReduce = useReducedMotion()` at the top of every component that animates
- `viewportOnce = { once: true, margin: '-60px' }` — pass as `viewport` prop

## HeroImage Component

Every page uses `<HeroImage>` for the right-column image in the hero section:

```jsx
import HeroImage, { HERO_IMAGES } from '../../components/ui/HeroImage';

<HeroImage
  src={HERO_IMAGES.webDesign}
  alt="..."
  badge={{ text: 'Badge text', icon: LucideIcon }}
  badge2={{ text: 'Second badge', icon: LucideIcon }}
/>
```

All Unsplash CDN URLs are centralised in the `HERO_IMAGES` map inside `HeroImage.jsx`. To add a new page image, add a key there.

## Navbar

`Navbar.jsx` has two separate interactive areas for the Services nav link:
- A `<Link to="/services">` for navigation
- A separate `<button>` for toggling the mega-menu dropdown

Both desktop and mobile follow this split pattern. Merging them into a single `<button>` breaks navigation to `/services`.

The mega-menu structure (columns + sub-links) is defined in the `megaMenu` array at the top of `Navbar.jsx`.

## CTABanner Component

`<CTABanner>` is a shared dark-background CTA section used at the bottom of most pages:

```jsx
<CTABanner
  headline="Your headline"
  body="Optional body text"
  cta1="Primary button label"   // defaults to "Book a Call"
  cta2="Secondary label"        // optional
  cta2to="/custom-path"         // defaults to "/services"
/>
```

The `h2` inside CTABanner uses `color: white` as an inline style — this is intentional to override the global `h2 { color: #0b0f1e }` rule.
