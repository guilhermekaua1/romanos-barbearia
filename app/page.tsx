import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/clube-romanos"
import { ServicesSection } from "@/components/services-section"
import { AppDownloadSection } from "@/components/app-download-section"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { LocationSection } from "@/components/location-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950">
      <HeroSection />
      <AppDownloadSection />
      <AboutSection />
      <ReviewsCarousel />
      <ServicesSection />
      <LocationSection />
      <ContactSection />

      <footer className="bg-zinc-900 border-t border-zinc-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 text-center">
          <p className="text-zinc-400 text-xs sm:text-sm">© 2025 Romanos Barbearia - Conceito & Elegância</p>
        </div>
      </footer>
    </main>
  )
}
