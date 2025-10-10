import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { MenuSection } from "@/components/menu-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import ImageCarousel from "@/components/image-carousel"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div id="home">
        <HeroSection />
      </div>

      <ImageCarousel />

      <div id="menu">
        <MenuSection />
      </div>

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
