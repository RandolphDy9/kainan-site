"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ImageModal } from "./ui/image-modal"

const menuPages = [
  {
    id: 1,
    title: "Menu 1",
    image: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712433/menu-1_u3lowl.png",
  },
  {
    id: 2,
    title: "Menu 2",
    image: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712434/menu-2_ouvvqf.png",
  },
  {
    id: 3,
    title: "Menu 3",
    image: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712437/menu-3_ukn9i8.png",
  },
  {
    id: 4,
    title: "Menu 4",
    image: "https://res.cloudinary.com/dbxxaxhpi/image/upload/v1760712433/menu-4_sotlfr.png",
  },
]

export function MenuSection() {
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string } | null>(null)

  const handleImageClick = (src: string, alt: string) => {
    setSelectedImage({ src, alt })
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section id="menu" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="text-center mb-16 space-y-4">
            {/* <span className="text-amber-600 dark:text-amber-500 font-semibold text-sm uppercase tracking-widest">
              View Our Menu
            </span> */}

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              There&apos;s something for everyone<br className="hidden md:block" />
              All day breakfast, Omelettes, Burgers & Fries, Silogs, Sisig, Noodles, Soups, and more
            </h2>

            <div className="space-y-1">
              <span className="block text-amber-700 dark:text-amber-400 text-xl md:text-3xl font-semibold">
                Kain Tayo!
              </span>
              <span className="block text-muted-foreground text-sm md:text-base italic">
                (Let&apos;s Eat!)
              </span>
            </div>
          </div>
        </div>

        {/* Grid menu cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuPages.map((page) => (
            <Card
              key={page.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleImageClick(page.image, page.title)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/4]">
                  <Image src={page.image || "/placeholder.svg"} alt={page.title} fill className="object-contain" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        {selectedImage && (
          <ImageModal
            src={selectedImage.src}
            alt={selectedImage.alt}
            isOpen={!!selectedImage}
            onClose={closeModal}
          />
        )}

      </div>
    </section>
  )
}
