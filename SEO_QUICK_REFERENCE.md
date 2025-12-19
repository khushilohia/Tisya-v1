# SEO Quick Reference for Developers

## Adding a New Page with SEO

### 1. Create Page File
```bash
app/new-page/page.tsx
```

### 2. Add Metadata Export
```tsx
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Title | Tisya AI',
  description: 'Meta description (160 characters max)',
  keywords: ['keyword1', 'keyword2', 'keyword3'],
  openGraph: {
    title: 'Page Title',
    description: 'Description for social sharing',
    url: 'https://tisya.vercel.app/new-page',
    type: 'website',
    images: [
      {
        url: 'image-url.jpg',
        width: 1200,
        height: 630,
        alt: 'Page image description',
      },
    ],
  },
  alternates: {
    canonical: 'https://tisya.vercel.app/new-page',
  },
}

export default function NewPage() {
  return (
    // Your page content
  )
}
```

### 3. Update Sitemap
Add URL to `app/sitemap.ts`:
```tsx
{
  url: `${baseUrl}/new-page`,
  lastModified,
  changeFrequency: 'monthly',
  priority: 0.8,
}
```

---

## SEO Best Practices

### Title Tags
- ✅ Include primary keyword
- ✅ Add brand name: "Title | Tisya AI"
- ✅ Keep under 60 characters
- ❌ Don't keyword stuff

**Good**: "Custom CMS Development in Siliguri | Tisya AI"  
**Bad**: "Tisya AI custom CMS custom CMS custom CMS"

### Meta Descriptions
- ✅ Clear, compelling copy
- ✅ Include keyword naturally
- ✅ 155-160 characters
- ✅ Add call-to-action

**Good**: "Tisya AI provides custom CMS development for Siliguri businesses. Build your perfect content management system today."  
**Bad**: "This page is about custom CMS"

### Keywords
- ✅ Use 5-7 primary keywords per page
- ✅ Include location modifiers (Siliguri, West Bengal)
- ✅ Mix broad and long-tail keywords
- ❌ Don't overuse keywords

**Example Array**:
```ts
keywords: [
  'AI software development Siliguri',
  'custom software solutions',
  'web development company',
  'business software West Bengal',
  'affordable software developer',
]
```

### Structured Data (Schema)
Pages automatically inherit Organization & LocalBusiness schemas from layout.tsx

For service pages, add:
```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Custom Software Development",
  "provider": {
    "@type": "Organization",
    "name": "Tisya AI",
  },
  "description": "...",
  "areaServed": "Siliguri, West Bengal, India",
})}
</script>
```

---

## SEO-Friendly Content Tips

### Headings
- ✅ H1 once per page (main title)
- ✅ Use H2, H3 hierarchically
- ✅ Include keywords in headings
- ✅ Make them descriptive

```tsx
<h1>Best Website Development Company in Siliguri</h1>
<h2>Our Web Development Services</h2>
<h3>Custom Website Design</h3>
```

### Links
- ✅ Use descriptive anchor text
- ✅ Link to related content
- ✅ Use canonical URLs for internal links
- ❌ Avoid "click here" links

**Good**: `<Link href="/about">Learn about Tisya AI</Link>`  
**Bad**: `<Link href="/about">Click here</Link>`

### Images
- ✅ Always add `alt` text (SEO + accessibility)
- ✅ Use descriptive filenames
- ✅ Optimize file size (use WebP)
- ✅ Include in image sitemap if needed

```tsx
<img 
  src="/images/website-design.jpg" 
  alt="Custom website design in Siliguri"
  title="Website Design Services"
/>
```

### Mobile Optimization
- ✅ Responsive design (already implemented)
- ✅ Touch-friendly buttons
- ✅ Fast loading (test with PageSpeed)
- ✅ Readable font sizes

---

## Common SEO Mistakes to Avoid

| ❌ Mistake | ✅ Fix |
|-----------|--------|
| Duplicate titles across pages | Use template with page-specific titles |
| Meta desc < 120 chars | Aim for 155-160 characters |
| No keywords in title | "Page Title - Siliguri \| Tisya AI" |
| Missing alt text on images | Add descriptive alt text always |
| Poor mobile experience | Test on mobile devices |
| Slow page load | Check PageSpeed Insights |
| Broken internal links | Test links regularly |
| Outdated metadata | Update when content changes |

---

## Testing & Verification

### Check Metadata
1. Open DevTools (F12)
2. Go to Elements tab
3. Find `<head>` section
4. Verify all meta tags present

### Test Open Graph
1. **Facebook**: https://developers.facebook.com/tools/debug/
2. **LinkedIn**: https://www.linkedin.com/post-inspector/
3. **Twitter**: https://cards-dev.twitter.com/validator

### Google Search Console
1. Request "URL Inspection" for each page
2. Check if "Indexable" ✓
3. Monitor search analytics

### Lighthouse SEO Audit
1. Open DevTools
2. Go to Lighthouse tab
3. Run audit for "SEO"
4. Aim for 90+ score

---

## Files Reference

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Base metadata, schemas |
| `app/page.tsx` | Homepage metadata |
| `app/about/page.tsx` | About page metadata |
| `app/robots.ts` | Crawl directives |
| `app/sitemap.ts` | URL sitemap |
| `next.config.js` | Image optimization |

---

## Quick Wins for Better Rankings

1. **Verify in Google Search Console** (5 mins)
2. **Submit Sitemap** (1 min)
3. **Create Google My Business** (10 mins)
4. **Add to Local Directories** (30 mins)
5. **Write 2-3 Blog Posts** (2 hours)
6. **Get 5 Quality Backlinks** (1 week)

---

## Monitoring Checklist

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Monitor search queries

### Monthly
- [ ] Review keyword rankings
- [ ] Check Core Web Vitals
- [ ] Analyze top/bottom performing pages

### Quarterly
- [ ] Audit internal links
- [ ] Update outdated content
- [ ] Analyze competitor keywords

---

## Need Help?

Refer to: [SEO_STRATEGY.md](./SEO_STRATEGY.md) for detailed implementation guide
