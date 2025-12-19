# Tisya AI - SEO Strategy & Configuration Guide

## Overview
This document outlines the comprehensive SEO strategy implemented for Tisya AI to maximize visibility in Google search results, particularly for local Siliguri-based searches and industry-specific queries.

---

## 1. Core SEO Setup

### Metadata Configuration (`app/layout.tsx`)
**Primary Keywords**: 
- "website development company Siliguri"
- "best website developer Siliguri"
- "software company Siliguri"
- "AI software development Siliguri"
- "custom CMS developer Siliguri"
- "SaaS development company"

**Meta Tags Implemented**:
- ✅ Title Tags (template-based for all pages)
- ✅ Meta Descriptions (160 characters optimized)
- ✅ Robots Directives (`index: true, follow: true`)
- ✅ Canonical URLs (prevents duplicate content)
- ✅ Viewport & Charset Meta Tags
- ✅ Theme Color & Mobile Web App Tags

### Local Business SEO
**Geo-Targeting Data** (in `layout.tsx`):
- Company location: Siliguri, West Bengal, India
- Coordinates: 26.725°N, 88.412°E
- Postal Code: 734001
- Country: India (IN)

**Meta Tags for Local SEO**:
```html
<meta name="geo.placename" content="Siliguri, West Bengal" />
<meta name="geo.position" content="26.725;88.412" />
<meta name="ICBM" content="26.725, 88.412" />
```

---

## 2. Structured Data (JSON-LD)

### Organization Schema
Implemented in `layout.tsx` to help Google understand company details:
- Company name, URL, logo
- Contact information (phone: +91 9647408802, email: tisya.ai@hotmail.com)
- Address with postal address type
- Social media profiles (Instagram, Twitter)

**Benefits**:
- Appears in Knowledge Panel
- Rich snippets in search results
- Enhanced SERP display

### Local Business Schema
Provides detailed business information for local search:
- Business type and area served
- Price range indicator (₹)
- Service description
- Areaserved: Siliguri, West Bengal, India

**Benefits**:
- Appears in Google Maps results
- Local search pack ranking
- Increased visibility for "near me" searches

---

## 3. Page-Specific Metadata

### Homepage (`app/page.tsx`)
- **Title**: "Website & Software Development Company in Siliguri | Tisya AI"
- **Description**: Covers all main services: web development, custom CMS, AI software, SaaS
- **Priority**: 1.0 (highest in sitemap)

### About Page (`app/about/page.tsx`)
- **Title**: "About Tisya AI - Website & Software Development Company in Siliguri"
- **Description**: Focuses on mission, team, expertise
- **Priority**: 0.9
- **Canonical URL**: `/about`

---

## 4. Sitemaps & Robots

### Sitemap (`app/sitemap.ts`)
**Coverage**:
- Homepage (priority 1.0, weekly)
- About page (priority 0.9, monthly)
- Feature section (priority 0.8, monthly)
- Pricing section (priority 0.85, weekly)
- Projects section (priority 0.8, weekly)
- Testimonials (priority 0.7, monthly)
- FAQ (priority 0.7, monthly)
- Contact (priority 0.85, weekly)

**Auto-generated at**: `/sitemap.xml`

### Robots Configuration (`app/robots.ts`)
- **Allow**: All public pages (`/`)
- **Disallow**: Admin, API, Next.js internal routes
- **Sitemap Reference**: Links to `/sitemap.xml`
- **Host**: `https://tisya.vercel.app`

---

## 5. Open Graph & Twitter Cards

### Open Graph (Facebook, LinkedIn, WhatsApp)
```json
{
  "og:type": "website",
  "og:locale": "en_IN",
  "og:url": "https://tisya.vercel.app/",
  "og:title": "Tisya AI - Best Website & Software Company in Siliguri",
  "og:description": "...",
  "og:image": "https://cdn.prod.website-files.com/.../Social%20Preview.avif",
  "og:site_name": "Tisya AI"
}
```

### Twitter Card
- **Card Type**: summary_large_image
- **Creator**: @tisya_ai
- **Image**: 1200x630px optimized

**Benefits**:
- Professional appearance when shared
- Increased CTR from social media
- Brand consistency across platforms

---

## 6. Performance Optimizations for SEO

### DNS Prefetch & Preconnect
```tsx
<link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
<link rel="preconnect" href="https://cdn.prod.website-files.com" />
```
**Impact**: Faster image loading → Better Core Web Vitals

### Font Optimization
- Google Fonts preload
- WebFont loader for fallbacks
- Reduces Cumulative Layout Shift (CLS)

---

## 7. Keywords Strategy

### Primary Keywords (High Intent, Local)
1. "website development company Siliguri"
2. "best website developer Siliguri"
3. "custom CMS developer Siliguri"
4. "software company Siliguri"

### Secondary Keywords (Service-Based)
1. "AI software development"
2. "SaaS development company"
3. "web design services"
4. "business software solutions"

### Long-Tail Keywords (Low Competition)
- "AI website development company India"
- "affordable website design Siliguri"
- "custom software solutions West Bengal"

### Location Modifiers (for Local SEO)
- "near me"
- "in Siliguri"
- "West Bengal"
- "India"

---

## 8. Server-Side Rendering Benefits

The project uses Next.js App Router with:
- ✅ **Server Components** for static content (better for SEO)
- ✅ **Metadata API** for dynamic meta tags
- ✅ **Built-in Image Optimization** (next/image)
- ✅ **Automatic Sitemap Generation** (Next.js 14+)
- ✅ **Static Site Generation** with ISR capability

**SEO Benefits**:
- Search engines receive fully rendered HTML
- Metadata is server-side rendered (not JavaScript-dependent)
- Faster initial page load (critical for SEO)
- No CLS issues from late-loading content

---

## 9. Verification & Tools

### Google Search Console
1. Add property: `https://tisya.vercel.app/`
2. Upload sitemap: `/sitemap.xml`
3. Request URL inspection for homepage
4. Monitor search performance (keywords, CTR, impressions)
5. Fix any crawl errors or mobile usability issues

### Bing Webmaster Tools
1. Add website URL
2. Submit sitemap
3. Monitor indexing status

### Tools for Monitoring
- Google Search Console (rankings, impressions, CTR)
- Google Analytics 4 (user behavior)
- Google PageSpeed Insights (Core Web Vitals)
- Ahrefs / SEMrush (keyword research, competitor analysis)

---

## 10. Implementation Checklist

- ✅ Base metadata with keywords in `layout.tsx`
- ✅ Page-specific metadata in `page.tsx` and `about/page.tsx`
- ✅ Organization JSON-LD schema
- ✅ Local Business JSON-LD schema
- ✅ Local geo-targeting meta tags
- ✅ Open Graph metadata for social sharing
- ✅ Twitter Card metadata
- ✅ Robots.txt configuration
- ✅ Dynamic sitemap generation
- ✅ Canonical URL setup
- ✅ DNS prefetch & preconnect optimization
- ⏳ **Next Steps**:
  - [ ] Verify site in Google Search Console
  - [ ] Submit sitemap to Google
  - [ ] Monitor search console for 4-8 weeks
  - [ ] Optimize based on search performance data
  - [ ] Create high-quality blog content (if applicable)
  - [ ] Build backlinks from local directories
  - [ ] Add more service pages (if needed)

---

## 11. Content Recommendations for Better SEO

### Blog Strategy
Create blog posts targeting local keywords:
- "Top 5 Website Design Trends in 2024"
- "How Custom CMS Development Improves Your Business"
- "AI-Powered Software Solutions for Small Businesses"
- "Why Siliguri Businesses Need Modern Web Solutions"

### Local Directory Listings
Add Tisya AI to:
- Google My Business (critical)
- Bing Places
- Apple Maps
- Facebook Business
- LinkedIn Company Page
- Industry directories

### Link Building
- Guest posts on web development blogs
- Partnerships with local Siliguri businesses
- Press releases for company milestones
- Testimonial pages (with client website links)

---

## 12. Monitoring & Maintenance

### Monthly Tasks
- Check Google Search Console for new issues
- Monitor keyword rankings
- Review Core Web Vitals
- Check backlink profile

### Quarterly Tasks
- Update content with latest information
- Add new service/project pages
- Review and optimize underperforming pages
- Audit internal linking structure

### Annual Tasks
- Comprehensive SEO audit
- Competitor analysis
- Update schemas if business info changes
- Plan content calendar for next year

---

## File References

- **Layout Configuration**: `app/layout.tsx`
- **Homepage Metadata**: `app/page.tsx`
- **About Page Metadata**: `app/about/page.tsx`
- **Robots Configuration**: `app/robots.ts`
- **Sitemap Configuration**: `app/sitemap.ts`
- **Global Styles**: `app/globals.css`
- **Next.js Config**: `next.config.js`

---

## Questions or Issues?

If metadata needs updates:
1. Update the corresponding page's `metadata` export
2. Modify layout.tsx constants if changing company info
3. Update sitemap.ts if adding new pages
4. Submit updated sitemap to Google Search Console

**Last Updated**: December 2025
