import Image from "next/image"

const crewMembers = [
  {
    name: "Miguel",
    role: "Head Chef",
    image: "/images/crew-1.jpg",
    description:
      "Miguel brings 15 years of culinary expertise, specializing in authentic Filipino flavors that remind you of home.",
  },
  {
    name: "Carlos",
    role: "Kitchen Manager",
    image: "/images/crew-2.jpg",
    description:
      "Carlos ensures every dish meets our high standards with his infectious energy and attention to detail.",
  },
  {
    name: "Isabel",
    role: "Sous Chef",
    image: "/images/crew-3.jpg",
    description:
      "Isabella's passion for traditional recipes and modern techniques creates the perfect balance in every meal.",
  },
  {
    name: "Maria",
    role: "Restaurant Manager",
    image: "/images/crew-4.jpg",
    description:
      "Maria welcomes every guest with genuine Filipino hospitality, making sure your dining experience is unforgettable.",
  },
]

export function CrewSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-red-800 mb-4 text-balance">Meet Our Amazing Team</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto text-pretty">
            The heart and soul of Kainan - passionate individuals who bring authentic Filipino flavors to your table
            with love and dedication.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {crewMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-red-800 mb-1">{member.name}</h3>
                <p className="text-amber-600 font-semibold mb-3 text-sm uppercase tracking-wide">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed text-pretty">{member.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-[#AB3031] text-white px-6 py-3 rounded-full">
            <span className="text-2xl">🇵🇭</span>
            <span className="font-semibold">Proudly Filipino-Owned & Operated</span>
          </div>
        </div>
      </div>
    </section>
  )
}
