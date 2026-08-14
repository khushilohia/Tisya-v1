import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WebflowScripts from '@/components/WebflowScripts'
import AboutContent from '@/components/AboutContent'

export const metadata: Metadata = {
  title: 'About Tisya AI - Website & Software Development Company in Siliguri',
  description: 'Learn about Tisya AI, a leading website and software development company in Siliguri, West Bengal. Our mission, team, and expertise in AI solutions and custom software development.',
  keywords: [
    'about Tisya AI',
    'website development company',
    'software development team',
    'custom software solutions',
    'AI expertise Siliguri',
  ],
  openGraph: {
    title: 'About Tisya AI - Website & Software Development Company',
    description: 'Learn about our mission, team, and expertise in delivering premium software solutions.',
    url: 'https://tisya.tech/about',
    type: 'website',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a9be8f27671aca112e0f34_Social%20Preview.avif',
        width: 1200,
        height: 630,
        alt: 'About Tisya AI',
      },
    ],
  },
  alternates: {
    canonical: 'https://tisya.tech/about',
  },
}

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <AboutContent />
      <Footer />
      <WebflowScripts />
    </>
  )
}
