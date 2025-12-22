import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const SITE_URL = 'https://tisya.vercel.app'
const COMPANY_NAME = 'Tisya AI'
const COMPANY_EMAIL = 'tisya.ai@outlook.com'
const COMPANY_PHONE = '+91 9647408802'
const COMPANY_LOCATION = 'Siliguri, West Bengal, India'
const SOCIAL_MEDIA = {
  instagram: 'https://instagram.com/tisya.ai',
  twitter: 'https://twitter.com/tisya_ai',
  linkedin: 'https://linkedin.com/company/tisya-ai',
}

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Tisya AI - Best Website & Software Company in Siliguri | AI Solutions',
    template: '%s | Tisya AI - Siliguri',
  },
  description: 'Top-rated website & software development company in Siliguri. Get AI-powered websites starting at ₹18,000. Custom CMS, SaaS products & business automation. 4.9★ rated. Free consultation available.',
  keywords: [
    // Core Services
    'website development company Siliguri',
    'best website developer Siliguri',
    'software company Siliguri',
    'AI software development Siliguri',
    'custom CMS developer Siliguri',
    'SaaS development Siliguri',
    'web design Siliguri',
    'business software solutions',
    'AI solutions Siliguri',
    // Local Intent (High conversion)
    'website developer near me Siliguri',
    'best web development agency Siliguri',
    'affordable website design Siliguri',
    'Siliguri software development company',
    'web development company West Bengal',
    'software solutions near me',
    // Service-Specific (Less competition)
    'AI chatbot development Siliguri',
    'custom CMS development West Bengal',
    'e-commerce website development Siliguri',
    'business automation software Siliguri',
    'responsive website design Siliguri',
    'mobile app development Siliguri',
    // Long-Tail Keywords (Easier to rank)
    'how much does a website cost in Siliguri',
    'best AI solutions for small business Siliguri',
    'SaaS product development India',
    'website maintenance services Siliguri',
    'custom software development India',
    'website redesign services Siliguri',
    'SEO services Siliguri',
    'digital transformation Siliguri',
  ],
  icons: {
    icon: '/asset/images/tisya-logo.png',
    apple: '/asset/images/tisya-logo.png',
  },
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
        url: `${SITE_URL}/asset/images/tisya-logo.png`,
        width: 1200,
        height: 1200,
        alt: 'Tisya AI Logo - Website and Software Development Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tisya AI - Best Website & Software Company in Siliguri',
    description: 'AI-powered websites, custom CMS, SaaS products, and business software solutions in Siliguri.',
    images: [`${SITE_URL}/asset/images/tisya-logo.png`],
    creator: '@tisya_ai',
    site: '@tisya_ai',
  },
  authors: [{ name: 'Tisya AI', url: SITE_URL }],
  publisher: 'Tisya AI',
  creator: 'Tisya AI',
  applicationName: 'Tisya AI',
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
    logo: `${SITE_URL}/asset/images/tisya-logo.png`,
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
      SOCIAL_MEDIA.linkedin,
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
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
    priceRange: '₹₹',
    image: `${SITE_URL}/asset/images/tisya-logo.png`,
    description: 'Professional website and software development company offering AI solutions, custom CMS, and SaaS products. Rated 4.9/5 stars.',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '3',
    },
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

  // JSON-LD for FAQ (Google Rich Snippets)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a website cost in Siliguri?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Website costs in Siliguri start from ₹18,000 for a basic 5-page site, ₹38,000 for custom business websites with advanced CMS, and ₹1,10,000 for AI-powered platforms with advanced features and automation.'
        }
      },
      {
        '@type': 'Question',
        name: 'What services does Tisya AI offer?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tisya AI offers website development, custom CMS development, SaaS product development, AI-powered automation, mobile app development, business software solutions, and ongoing maintenance and support services.'
        }
      },
      {
        '@type': 'Question',
        name: 'How long does it take to build a website?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A basic website typically takes 1-2 weeks, custom business websites take 3-4 weeks, and AI-powered platforms take 6-8 weeks depending on complexity and requirements.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do you provide website maintenance services?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we provide monthly maintenance services starting from ₹2,000/month including updates, security patches, content changes, and technical support.'
        }
      },
      {
        '@type': 'Question',
        name: 'Where is Tisya AI located?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Tisya AI is based in Siliguri, West Bengal, India. We serve clients across Siliguri, West Bengal, and throughout India.'
        }
      }
    ]
  }

  // JSON-LD for Service
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Website Development & Software Solutions',
    provider: {
      '@type': 'Organization',
      name: COMPANY_NAME,
      url: SITE_URL,
    },
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
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Website Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Essential Web Presence',
            description: 'Basic 5-page responsive website with clean design',
          },
          price: '18000',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Growth & Business Website',
            description: 'Custom 10-page website with advanced CMS and analytics',
          },
          price: '38000',
          priceCurrency: 'INR',
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI-Powered Premium Platform',
            description: 'Scalable AI-powered platform with custom features',
          },
          price: '110000',
          priceCurrency: 'INR',
        },
      ],
    },
  }

  // JSON-LD for WebSite (Sitelinks Search Box)
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: COMPANY_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/?s={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
