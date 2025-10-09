"use client"

import { Button } from "@/components/ui/button"
import { Facebook } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-card to-background">
      <div className="absolute inset-0 bg-[url('/images/food-1.jpg')] bg-cover bg-center" />

      {/* Global Dark Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-6 sm:px-20 sm:py-8 text-center text-white shadow-xl">
          <div className="mb-6">
            <Image
              src="/images/logo.png"
              alt="Kainan - A Place to Eat"
              width={200}
              height={120}
              className="mx-auto mb-6 drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-balance drop-shadow-md">
            🍽️ Welcome to <span className="text-[#F5B035]">Kainan</span>
          </h1>

          <p className="text-xl md:text-2xl mb-2 max-w-2xl mx-auto text-gray-100">
            Savor the true taste of the Philippines 🇵🇭
          </p>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            Authentic Filipino dishes made with love and tradition — where family and flavor come together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md mx-auto">
            {/* Menu Button */}
            <Button
              size="lg"
              className="w-full sm:flex-1 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 shadow-lg"
              onClick={() => scrollToSection("menu")}
            >
              🍽️ View Our Menu
            </Button>

            {/* Facebook Link as Button */}
            <Button
              asChild
              size="lg"
              className="w-full sm:flex-1 bg-secondary text-white px-6 py-3 shadow-lg hover:bg-secondary/90 transition-colors duration-200"
            >
              <a
                href="https://www.facebook.com/profile.php?id=100091358628559"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 font-semibold text-lg w-full"
              >
                <Facebook className="w-5 h-5" />
                Follow Us On Facebook
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
