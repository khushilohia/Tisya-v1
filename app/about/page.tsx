import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WebflowScripts from '@/components/WebflowScripts'
import AboutContent from '@/components/AboutContent'

export const metadata = {
  title: 'About Us - Tisya AI',
  description: 'Learn more about Tisya AI, our mission, and our team',
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
