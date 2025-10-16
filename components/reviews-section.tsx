import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Kleyr Ombao",
    review:
      "Absolutely enjoyed dining here. Service is quick and serves family style. Highly recommend their any of their sisig’s with a side of garlic fried rice. Chef’s kiss. Everything is made to order to food quality is great. 10/10 would visit again",
    rating: 5,
  },
  {
    id: 2,
    name: "Steve D",
    review:
      "This is one of the best places in New Brunswick. The atmosphere is great. The staff were all phenomenal and friendly. The food was fantastic. The place was busy when we went but there was not a noticeable wait time for anything. If you are anywhere near Shediac you should definitely try it out.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sheika Fateema",
    review:
      "For anyone craving Filipino food or just looking for a spot with good food and good vibes, I highly recommend this place. It’s no wonder I keep coming back.",
    rating: 5,
  },
  {
    id: 4,
    name: "Heather Walsh",
    review:
      "Best fried chicken we've had in years! The tofu dish was delicious-- we practically licked the plate clean. Rice noodle and veg combo also really good. Excellent service, really friendly folks and you have GOT to try the Ube (purple yam) cake. Omg amazing. ",
    rating: 5,
  },
  {
    id: 5,
    name: "Edmar Alvarez",
    review:
      "Authentic filipino food. I ordered sisig here, and it definitely tastes what it's supposed to taste. Not watered-down or too much. It feels like Im back in the Philippines eating sisig during lunch in University.",
    rating: 5,
  },
  {
    id: 6,
    name: "T C",
    review:
      "Absolutly delicious Filipino food and friendly service! We had the pork adobo, pancit and spring rolls, all amazing and authentic taste. Good sized portion and value for your money. This place is a gem, will definitely come back!!",
    rating: 5,
  },
]

export function ReviewsSection() {
  return (
    <section className="py-16 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 px-4 sm:px-6 lg:px-8">
          <h2
            className="font-extrabold bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 
              dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 
              bg-clip-text text-transparent 
              text-4xl sm:text-5xl md:text-6xl
              leading-tight max-w-5xl mx-auto"
          >
           When customers turn into family.
          </h2>

          <p className="text-neutral-700 dark:text-neutral-300 mt-2 max-w-3xl mx-auto 
            text-lg sm:text-xl lg:text-3xl leading-relaxed font-medium">
            Don&apos;t believe us? Believe them! True experiences from our Kainan Family.
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
