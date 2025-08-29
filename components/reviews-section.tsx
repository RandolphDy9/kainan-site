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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4">What Our Customers Say</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Don&apos;t just take our word for it - hear from our satisfied customers who keep coming back for more authentic
            Filipino flavors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="bg-background">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-4 text-pretty">"{review.review}"</p>
                <p className="font-semibold text-primary">- {review.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
