import Image from "next/image"
import { Card } from "@/components/ui/card"

const foodImages = [
  {
    src: "/images/food-1.jpg",
    alt: "Assorted Filipino dishes including sisig, fried chicken, and traditional soups",
    title: "Family Feast",
  },
  {
    src: "/images/food-2.jpg",
    alt: "Crispy pork belly (lechon kawali) with pickled vegetables",
    title: "Crispy Pork Belly",
  },
  {
    src: "/images/food-3.jpg",
    alt: "Sizzling sisig with fried egg on cast iron plate",
    title: "Sizzling Sisig",
  },
  {
    src: "/images/food-4.jpg",
    alt: "Golden fried chicken with lemon and dipping sauce",
    title: "Fried Chicken",
  },
  {
    src: "/images/food-5.jpg",
    alt: "Beef bone marrow soup (bulalo) with corn and vegetables",
    title: "Beef Bulalo",
  },
  {
    src: "/images/food-6.jpg",
    alt: "Colorful Filipino dessert drink with Kainan logo",
    title: "Signature Drink",
  },
]

export function FoodGallery() {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">Our Delicious Dishes</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Feast your eyes on our authentic Filipino cuisine, prepared fresh daily with traditional recipes passed down
            through generations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodImages.map((image, index) => (
            <Card key={index} className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
              <div className="relative aspect-square">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {image.title}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
