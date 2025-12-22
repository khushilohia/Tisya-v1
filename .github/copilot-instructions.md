# Tisya AI - AI Agent Development Guidelines

## Project Overview
Tisya AI is a Next.js 14 marketing website for an AI/software solutions company. Originally built in Webflow, it's been migrated to Next.js with TypeScript while preserving all original styling and animations.

## Architecture

### Key Technical Stack
- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Original Webflow CSS (preserved in [globals.css](app/globals.css)) + custom CSS classes
- **Animations**: Webflow's `Ix2` animation system (loaded via legacy scripts)
- **Scripts**: jQuery 3.5.1 + Webflow JavaScript bundles (vendor files in `public/asset/`)
- **Sliders**: Webflow native sliders (init via `window.Webflow.require('slider')`)
- **Analytics**: Vercel Analytics integrated

### Component Structure Pattern
All components are in `components/` and follow this pattern:
- **Client components** use `'use client'` directive for interactivity (Navigation, HomepageContent, WebflowScripts, ImageLightbox, ProjectsSection)
- **Server-rendered sections** for static content (Footer, ContactSection with Webflow forms)
- Components are section-based, not granular (one component per major section)
- Heavy use of Webflow CSS class names (`.navbar`, `.section`, `.display-h1`, etc.)

**Key components**: 
- [Navigation.tsx](components/Navigation.tsx) - Mobile menu state management
- [HomepageContent.tsx](components/HomepageContent.tsx) - IntersectionObserver scroll animations
- [ProjectsSection.tsx](components/ProjectsSection.tsx) - Slider initialization
- [WebflowScripts.tsx](components/WebflowScripts.tsx) - Legacy animation/form handling
- [ImageLightbox.tsx](components/ImageLightbox.tsx) - Image modal gallery

### Data Flow & External Dependencies
1. **Form handling**: Webflow forms embedded in [ContactSection.tsx](components/ContactSection.tsx) - uses Webflow's form submission
2. **Image optimization**: Configured in `next.config.js` to allow Webflow CDN images (`cdn.prod.website-files.com`)
3. **Dynamic interactions**: Webflow's `Ix2` system handles animations; new interactions must call `window.Webflow.require('ix2').init()`
4. **Navigation**: Hash-based anchors (`/#feature`, `/#pricing`, `/#contact`) for smooth navigation

### Asset Organization
- **Static assets**: `public/asset/` mirrors original Webflow structure (keep this exact structure)
- **Images**: `public/asset/images/` and `public/projects/`
- **Legacy scripts**: Webflow JavaScript bundles stay in `public/asset/68a413987ca3efce6f38ee67/js/`
- **CSS**: Webflow CSS loaded in [layout.tsx](app/layout.tsx), custom styles in [globals.css](app/globals.css)

## Development Workflows

### Starting the dev server
```bash
npm run dev
```
Visit `http://localhost:3000`. All Webflow animations and scripts load automatically via [WebflowScripts.tsx](components/WebflowScripts.tsx).

### Building for production
```bash
npm run build && npm start
```
Ensure Webflow scripts finish loading before navigation (handled by `strategy="afterInteractive"`).

### Adding new sections
1. Create component in `components/` with `'use client'` if needs interactivity
2. Import in [page.tsx](app/page.tsx) and add to render order
3. Use Webflow CSS classes for styling; add section `id` for anchor navigation
4. If animations needed, trigger Webflow's `Ix2.init()` in [WebflowScripts.tsx](components/WebflowScripts.tsx)

## Critical Patterns & Conventions

### Webflow CSS Class Dependencies
All styling relies on exact Webflow CSS class names. **Do not rename classes.** Examples:
- Layout: `.section`, `.container`, `.nav-wrap`, `.navbar`
- Typography: `.display-h1`, `.display-h2`, `.display-h5`, `.button-text`
- Spacing: Uses Webflow's design tokens (gaps, margins defined in Webflow CSS)

### Handling Legacy Scripts
**Important**: Webflow scripts must be loaded after component render. [WebflowScripts.tsx](components/WebflowScripts.tsx) handles this:
```tsx
useEffect(() => {
  const timer = setTimeout(() => {
    if (window.Webflow) {
      window.Webflow.destroy()
      window.Webflow.ready()
      window.Webflow.require('ix2').init()
    }
  }, 100)
})
```
After any DOM manipulation, manually call this to re-initialize animations.

### Client-side State Management
Uses React `useState` for simple toggles (e.g., mobile menu in [Navigation.tsx](components/Navigation.tsx#L6-L13)). No global state manager; keep state co-located with components.

### Form Handling
Contact form is Webflow-native, embedded in HTML. Success/error messages use Webflow classes (`.w-form-done`, `.w-form-fail`). Don't modify form structure without updating in Webflow.

## Component Interaction Patterns

### IntersectionObserver for Scroll Animations
[HomepageContent.tsx](components/HomepageContent.tsx) uses IntersectionObserver to trigger staggered card animations on scroll:
```tsx
const observer = new IntersectionObserver((entries) => {
  if (entry.isIntersecting) {
    // Animate cards with staggered delay
    processCards.forEach((card, index) => {
      setTimeout(() => {
        cardElement.style.opacity = '1'
        cardElement.style.transform = 'translateX(0)'
      }, index * 200)
    })
    observer.unobserve(entry.target) // Important: unobserve after animation
  }
}, { threshold: 0.2 })
```
Always clean up with `observer.disconnect()` in return statement.

### Slider & Carousel Initialization
Projects use Webflow's native sliders (not Swiper library). Initialize after component mount in [ProjectsSection.tsx](components/ProjectsSection.tsx):
```tsx
useEffect(() => {
  if (typeof window !== 'undefined' && (window as any).Webflow) {
    (window as any).Webflow.require('slider').redraw()
    (window as any).Webflow.require('slider').ready()
  }
}, [])
```

### Image Lightbox Pattern
[ImageLightbox.tsx](components/ImageLightbox.tsx) provides `window.openLightbox()` global function. Attach click handlers to images:
```tsx
onClick={(e) => {
  (window as any).openLightbox?.(e.currentTarget.src)
}}
```

## Common Tasks

### Modifying component styles
- **Webflow-styled sections**: Update only inline `className` or data attributes; Webflow CSS handles rest
- **Custom additions**: Add to [globals.css](app/globals.css) with new class names (avoid overriding Webflow classes)

### Adding navigation links
- Update links in [Navigation.tsx](components/Navigation.tsx) and page anchor IDs
- Use Next.js `Link` component with hash routes (`href="/#section-id"`)

### Integrating new images
- Place images in `public/asset/images/` or `public/projects/`
- Use `<img>` tags with proper `alt` text (already CDN-optimized in config)

### Debugging Webflow animations
1. Check browser console for errors in Webflow script loading
2. Verify element has matching `data-w-id` attribute from original export
3. Call `window.Webflow.require('ix2').init()` if animations don't trigger after updates

## Known Quirks
- **Form submission**: Contact form uses Webflow's built-in handling; backend must be configured in Webflow dashboard
- **Mobile menu**: Manually toggles `document.body.overflow` to prevent scrolling ([Navigation.tsx](components/Navigation.tsx#L13-L16))
- **Script timing**: 100ms delay in [WebflowScripts.tsx](components/WebflowScripts.tsx) needed for jQuery and Webflow JS to load
- **Image hosting**: Some images proxied from `cdn.prod.website-files.com`; configure in Vercel deployment if CORS issues occur
- **Swiper.js**: Listed in package.json but not actively used; sliders use Webflow's native implementation

## TypeScript Setup
- `tsconfig.json` uses `@/*` path alias for clean imports
- Webflow global interface extended in [WebflowScripts.tsx](components/WebflowScripts.tsx#L5-L7) to avoid type errors
- Strict mode enabled; ensure all external scripts have proper type definitions

## SEO Considerations
- Metadata configured in [layout.tsx](app/layout.tsx) with comprehensive keywords targeting local searches ("Siliguri", "West Bengal", "AI solutions")
- Open Graph tags set for social sharing with image preview
- Sitemap ([sitemap.ts](app/sitemap.ts)) and robots.txt ([robots.ts](app/robots.ts)) configured for search indexing
- Keep keyword targeting focused on service + location combinations for conversion

## Deployment & Environment
- Deployed on Vercel with Analytics integration
- Image remoting from `cdn.prod.website-files.com` requires CORS allowlist in Vercel
- Next.js build ignores linting errors but enforces TypeScript checks (`typescript.ignoreBuildErrors: false`)
- Production builds require all Webflow scripts to fully load before route transitions
