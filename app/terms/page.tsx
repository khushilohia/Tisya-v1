import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WebflowScripts from '@/components/WebflowScripts'
import TermsContent from '@/components/TermsContent'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Tisya AI',
  description: 'Read the Terms & Conditions for Tisya AI\'s website development, custom software, and AI automation services, including our payment and refund policy.',
  keywords: [
    'Tisya AI terms and conditions',
    'Tisya AI refund policy',
    'website development terms',
    'software development agreement',
  ],
  openGraph: {
    title: 'Terms & Conditions | Tisya AI',
    description: 'Terms & Conditions for Tisya AI\'s website development, custom software, and AI automation services.',
    url: 'https://tisya.tech/terms',
    type: 'website',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a9be8f27671aca112e0f34_Social%20Preview.avif',
        width: 1200,
        height: 630,
        alt: 'Tisya AI Terms & Conditions',
      },
    ],
  },
  alternates: {
    canonical: 'https://tisya.tech/terms',
  },
}

export default function TermsPage() {
  return (
    <>
      <Navigation />
      <TermsContent />
      <Footer />
      <WebflowScripts />
    </>
  )
}
