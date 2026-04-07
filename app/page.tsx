import { AnimatedBackground } from '@/components/animated-background'
import { FloatingButton } from '@/components/floating-button'
import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Portfolio } from '@/components/portfolio'
import { TechStack } from '@/components/tech-stack'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { DemosSection } from '@/components/demos-section'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-black">
      <AnimatedBackground />
      <Navbar />
      
      <div className="relative z-10">
        <Hero />
        <About />
        <Services />
        <DemosSection />
        <Portfolio />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
      </div>

      <FloatingButton />
    </main>
  )
}
