import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Maria Santos",
    review:
      "Absolutely amazing! The pancit and lumpia reminded me of my grandmas cooking. This place feels like home.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    review:
      "Best Filipino food in the Maritimes! The beef bulalo is incredible and the portions are generous. Highly recommend!",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarah MacDonald",
    review:
      "Such a warm and welcoming family restaurant. The sisig is phenomenal and the staff treats you like family.",
    rating: 5,
  },
  {
    id: 4,
    name: "Miguel Rodriguez",
    review:
      "Finally found authentic Filipino cuisine! The adobo chicken is perfect and the garlic fried rice is a must-try.",
    rating: 5,
  },
  {
    id: 5,
    name: "Jennifer Thompson",
    review:
      "Love this place! Great food, friendly service, and reasonable prices. The crispy pata is absolutely delicious.",
    rating: 5,
  },
  {
    id: 6,
    name: "Carlos Mendoza",
    review:
      "Outstanding Filipino restaurant! The flavors are authentic and the atmosphere is so welcoming. Will definitely be back!",
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-block">
            <span className="text-amber-600 dark:text-amber-500 font-semibold text-sm uppercase tracking-widest mb-2 block">
              Customer Reviews
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              What Our Customers Say
            </h2>
          </div>
          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Real stories, real flavors! 😋 — hear from our satisfied customers who keep coming back for more.
          </p>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-background hover:shadow-lg">
              <CardContent className="p-6">
                {/* Star ratings */}
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                {/* Review text */}
                <p className="text-foreground mb-4 text-pretty">{`"${review.review}"`}</p>
                <p className="font-semibold text-primary">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
