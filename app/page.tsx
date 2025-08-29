import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { FoodGallery } from "@/components/food-gallery"
import { MenuSection } from "@/components/menu-section"
import { ReviewsSection } from "@/components/reviews-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div id="home">
        <HeroSection />
      </div>

      <FoodGallery />

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
