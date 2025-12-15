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
