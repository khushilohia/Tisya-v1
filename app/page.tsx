import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WebflowScripts from '@/components/WebflowScripts'
import ImageLightbox from '@/components/ImageLightbox'
import HomepageContent from '@/components/HomepageContent'
import FeatureTabs from '@/components/FeatureTabs'
import IntegrationSection from '@/components/IntegrationSection'
import PricingSection from '@/components/PricingSection'
import ProjectsSection from '@/components/ProjectsSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'

export const metadata: Metadata = {
  title: 'Website & Software Development Company in Siliguri | Tisya AI',
  description: 'Tisya AI - Best website development, custom CMS, AI software, and SaaS solutions in Siliguri, West Bengal. Premium quality at competitive prices. Contact us today.',
  keywords: [
    'website development company Siliguri',
    'best website developer near me',
    'software company Siliguri',
    'AI software development',
    'custom CMS Siliguri',
    'SaaS development company',
    'web design services',
    'business software solutions',
  ],
  openGraph: {
    title: 'Website & Software Development Company in Siliguri | Tisya AI',
    description: 'Best website development, custom CMS, AI software, and SaaS solutions in Siliguri, West Bengal.',
    url: 'https://tisya.vercel.app/',
    type: 'website',
    images: [
      {
        url: 'https://cdn.prod.website-files.com/68a413987ca3efce6f38ee67/68a9be8f27671aca112e0f34_Social%20Preview.avif',
        width: 1200,
        height: 630,
        alt: 'Tisya AI Services',
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Navigation />
      <HomepageContent />
      <FeatureTabs />
      <IntegrationSection />
      <PricingSection />
      <ProjectsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <ImageLightbox />
      <WebflowScripts />
    </>
  )
}
