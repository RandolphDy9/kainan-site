"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@/components/ui/dialog"
import Image from "next/image"

const menuPages = [
  {
    id: 1,
    title: "Breakfast & Classics",
    image: "/images/menu-1.webp",
    description: "Traditional breakfast, pancakes, omelettes, sandwiches, burgers, and handhelds",
  },
  {
    id: 2,
    title: "Filipino Specialties",
    image: "/images/menu-2.webp",
    description: "Authentic silogs, ulam, fried specialties, and sizzling dishes",
  },
  {
    id: 3,
    title: "Noodles & Soups",
    image: "/images/menu-3.webp",
    description: "Traditional noodle dishes, sides, and hearty Filipino soups",
  },
  {
    id: 4,
    title: "Desserts & Group Meals",
    image: "/images/menu-4.webp",
    description: "Sweet treats, beverages, and family-style group meal sets",
  },
]

export function MenuSection() {
  const [open, setOpen] = useState(false)
  const [activeImage, setActiveImage] = useState<string | null>(null)

  const handleOpen = (image: string) => {
    setActiveImage(image)
    setOpen(true)
  }

  return (
    <section id="menu" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Menu</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our authentic Filipino dishes, made with traditional recipes passed down through generations.
          </p>
        </div>

        {/* Grid menu cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menuPages.map((page) => (
            <Card
              key={page.id}
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleOpen(page.image)}
            >
              <CardContent className="p-0">
                <div className="relative aspect-[3/4]">
                  <Image src={page.image || "/placeholder.svg"} alt={page.title} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{page.title}</h3>
                  <p className="text-muted-foreground text-pretty">{page.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Dialog with Dark Backdrop */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogOverlay className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
          <DialogContent className="max-w-4xl p-0 bg-transparent border-none shadow-none">
            {activeImage && (
              <div className="relative w-full h-[80vh]">
                <Image
                  src={activeImage}
                  alt="Enlarged menu image"
                  fill
                  className="object-contain rounded-lg"
                />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
