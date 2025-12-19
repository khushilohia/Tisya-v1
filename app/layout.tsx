import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const SITE_URL = 'https://tisya.vercel.app'
const COMPANY_NAME = 'Tisya AI'
const COMPANY_EMAIL = 'tisya.ai@hotmail.com'
const COMPANY_PHONE = '+91 9647408802'
const COMPANY_LOCATION = 'Siliguri, West Bengal, India'
const SOCIAL_MEDIA = {
  instagram: 'https://instagram.com/tisya.ai',
  twitter: 'https://twitter.com/tisya_ai',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tisya AI - Best Website & Software Company in Siliguri | AI Solutions',
    template: '%s | Tisya AI - Siliguri',
  },
  description: 'Tisya AI is the leading website and software development company in Siliguri, West Bengal. We specialize in AI-powered websites, custom CMS development, SaaS products, and business software solutions. Premium quality at the best prices.',
  keywords: [
    'website development company Siliguri',
    'best website developer Siliguri',
    'software company Siliguri',
    'AI software development Siliguri',
    'custom CMS developer Siliguri',
    'SaaS development Siliguri',
    'web design Siliguri',
    'business software solutions',
    'AI solutions Siliguri',
    'web development company West Bengal',
    'software solutions near me',
    'custom software development India',
  ],
  robots: {
    index: true,
    follow: true,
    'max-snippet': -1,
    'max-image-preview': 'large',
    'max-video-preview': -1,
  },
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    title: 'Tisya AI - Best Website & Software Company in Siliguri | AI Solutions',
    description: 'Leading website and software development company in Siliguri specializing in AI-powered solutions, custom CMS, and SaaS products.',
    siteName: 'Tisya AI',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a9be8f27671aca112e0f34_Social%20Preview.avif',
        width: 1200,
        height: 630,
        alt: 'Tisya AI - Website and Software Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tisya AI - Best Website & Software Company in Siliguri',
    description: 'AI-powered websites, custom CMS, SaaS products, and business software solutions in Siliguri.',
    images: ['https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a9be8f27671aca112e0f34_Social%20Preview.avif'],
    creator: '@tisya_ai',
  },
  icons: {
    icon: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a41b28eb0fd24f5f16d22d_Favicon.png',
    apple: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a41b53872ffdcf03e8a46f_Webclip.png',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // JSON-LD Structured Data for Organization
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: COMPANY_NAME,
    url: SITE_URL,
    logo: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a41b28eb0fd24f5f16d22d_Favicon.png',
    description: 'Tisya AI is a leading website and software development company in Siliguri, West Bengal, specializing in AI-powered solutions.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      telephone: COMPANY_PHONE,
      email: COMPANY_EMAIL,
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Siliguri',
      addressLocality: 'Siliguri',
      addressRegion: 'West Bengal',
      postalCode: '734001',
      addressCountry: 'IN',
    },
    sameAs: [
      SOCIAL_MEDIA.instagram,
      SOCIAL_MEDIA.twitter,
    ],
  }

  // JSON-LD for LocalBusiness
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: COMPANY_NAME,
    url: SITE_URL,
    telephone: COMPANY_PHONE,
    email: COMPANY_EMAIL,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Siliguri',
      addressLocality: 'Siliguri',
      addressRegion: 'West Bengal',
      postalCode: '734001',
      addressCountry: 'IN',
    },
    priceRange: '₹',
    image: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a9be8f27671aca112e0f34_Social%20Preview.avif',
    description: 'Professional website and software development company offering AI solutions, custom CMS, and SaaS products.',
    areaServed: [
      {
        '@type': 'City',
        name: 'Siliguri',
      },
      {
        '@type': 'State',
        name: 'West Bengal',
      },
      {
        '@type': 'Country',
        name: 'India',
      },
    ],
  }

  return (
    <html lang="en" data-wf-domain="grovia-template.webflow.io" data-wf-site="68a413987ca3efce6f38ee67">
      <head>
        {/* SEO & Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="x-ua-compatible" content="IE=edge" />
        <meta name="theme-color" content="#000000" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="uV36x_BMmPNimSPAzpuSsXX1zSCFBQsDHBeJKeH08Lk" />
        
        {/* Local Business SEO */}
        <meta name="geo.placename" content="Siliguri, West Bengal" />
        <meta name="geo.position" content="26.725;88.412" />
        <meta name="ICBM" content="26.725, 88.412" />
        
        {/* Sitemap & Robots */}
        <link rel="sitemap" href="/sitemap.xml" />

        {/* Preconnect for Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://cdn.prod.website-files.com" />
        <link rel="preconnect" href="https://cdn.prod.website-files.com" />

        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        
        <script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          type="text/javascript"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              WebFont.load({
                google: {
                  families: [
                    "Geist:regular,500,600,700,800,900",
                    "Albert Sans:regular,500,600,700,800,900",
                  ],
                },
              });
            `,
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !(function (o, c) {
                var n = c.documentElement,
                  t = " w-mod-";
                (n.className += t + "js"),
                  ("ontouchstart" in o ||
                    (o.DocumentTouch && c instanceof DocumentTouch)) &&
                    (n.className += t + "touch");
              })(window, document);
            `,
          }}
        />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-140NRHXB47"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-140NRHXB47');
            `,
          }}
        />

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
