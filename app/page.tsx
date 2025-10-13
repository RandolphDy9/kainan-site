import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import ImageCarousel from "@/components/image-carousel"
import LookInside from "@/components/look-inside-section"
import TraySection from "@/components/tray-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div id="home">
        <HeroSection />
      </div>

      <ImageCarousel />
      <TraySection />

      <div id="menu">
        <MenuSection />
      </div>

      <LookInside />

      <div id="reviews">
        <ReviewsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </main>
  )
}
