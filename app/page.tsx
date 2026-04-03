import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CarsSection } from "@/components/cars-section"
import { Car3DShowcase } from "@/components/car-3d-showcase"
import { ServicesSection } from "@/components/services-section"
import { WhyUsSection } from "@/components/why-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <CarsSection />
      <Car3DShowcase />
      <ServicesSection />
      <WhyUsSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
