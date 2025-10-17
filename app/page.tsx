import { Navigation } from "@/components/navigation"
// import { HeroSection } from "@/components/hero-section"
// import { MenuSection } from "@/components/menu-section"
// import { ReviewsSection } from "@/components/reviews-section"
// import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
// import ImageCarousel from "@/components/image-carousel"
// import LookInside from "@/components/look-inside-section"
// import TraySection from "@/components/tray-section"
// import WhoWeAre from "@/components/who-we-are"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* <div id="home">
        <HeroSection />
      </div>

      <div id="highlights">
        <ImageCarousel />
      </div>

      <div id="menu">
        <MenuSection />
      </div>

      <div id="trays">
        <TraySection />
      </div>

      <div id="lookinside">
        <LookInside />
      </div>

      <div id="whoweare">
        <WhoWeAre />
      </div>

      <div id="reviews">
        <ReviewsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div> */}

      <Footer />
    </main>
  )
}
