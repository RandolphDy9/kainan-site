"use client"

import { Button } from "@/components/ui/button"
import { Facebook } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export function HeroSection() {
  const [_, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-card to-background">
      <div className="absolute inset-0 bg-[url('/images/food-1.jpg')] bg-cover bg-center" />

      {/* Global Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative z-10 px-4 max-w-4xl mx-auto">
        <div className="bg-black/60 backdrop-blur-sm rounded-2xl p-6 sm:px-20 sm:py-8 text-center text-white shadow-xl">
          <div className="mb-6">
            <Image
              src="/images/logo.png"
              alt="Kainan - A Place to Eat"
              width={300}
              height={200}
              className="mx-auto mb-6 drop-shadow-lg"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 text-balance drop-shadow-md">
            🍽️ Welcome to <span className="text-[#F5B035]">Kainan</span>
          </h1>

          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto text-gray-100">
            Savor the true taste of the Philippines 🇵🇭
          </p>

          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-200 leading-relaxed">
            Indulge in authentic Filipino dishes, lovingly prepared with recipes
            passed down through generations. A cozy place where family, tradition,
            and flavor come together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 shadow-lg" onClick={() => scrollToSection("menu")}>
              View Our Menu
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-3 bg-transparent"
              asChild
            >
              <a
                href="https://www.facebook.com/profile.php?id=100091358628559"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Facebook className="w-5 h-5" />
                Follow Us
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
