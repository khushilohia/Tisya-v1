import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tisya AI - AI, Software, and Business Solutions',
  description: 'Tisya AI provides AI, software, and business solutions for startups and growing companies. We help you present your brand and drive growth with clarity through innovative technology.',
  openGraph: {
    title: 'Tisya AI - AI, Software, and Business Solutions',
    description: 'Tisya AI provides AI, software, and business solutions for startups and growing companies.',
    images: ['https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a9be8f27671aca112e0f34_Social%20Preview.avif'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tisya AI - AI, Software, and Business Solutions',
    description: 'Tisya AI provides AI, software, and business solutions for startups and growing companies.',
    images: ['https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a9be8f27671aca112e0f34_Social%20Preview.avif'],
  },
  icons: {
    icon: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a41b28eb0fd24f5f16d22d_Favicon.png',
    apple: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a41b53872ffdcf03e8a46f_Webclip.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-wf-domain="grovia-template.webflow.io" data-wf-site="68a413987ca3efce6f38ee67">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
      </head>
      <body>{children}</body>
    </html>
  )
}
