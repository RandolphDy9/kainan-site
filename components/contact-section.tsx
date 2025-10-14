import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Facebook, Dog, TreePine, ParkingSquare } from "lucide-react"
import Image from "next/image"

const hours = [
  { day: "Monday", time: "9 a.m.–8 p.m." },
  { day: "Tuesday", time: "9 a.m.–8 p.m." },
  { day: "Wednesday", time: "9 a.m.–8 p.m." },
  { day: "Thursday", time: "9 a.m.–8 p.m." },
  { day: "Friday", time: "9 a.m.–8 p.m." },
  { day: "Saturday", time: "9 a.m.–8 p.m." },
  { day: "Sunday", time: "Closed" },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <section className="text-center mb-20 px-4">
          <div className="inline-block space-y-4">
            {/* <span className="text-amber-600 dark:text-amber-500 font-semibold text-sm uppercase tracking-widest">
              Visit Our Restaurant
            </span> */}

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-amber-700 via-orange-600 to-amber-700 dark:from-amber-400 dark:via-orange-400 dark:to-amber-400 bg-clip-text text-transparent">
              What are you waiting for? <br className="hidden md:block" />
              We&apos;re just as excited to welcome you!
            </h2>

            <div className="space-y-1">
              <span className="block text-amber-700 dark:text-amber-400 text-xl md:text-3xl font-semibold">
                Kita-kits, Kainan Family!
              </span>
              <span className="block text-muted-foreground text-sm md:text-base italic">
                (See you soon, Kainan Family!)
              </span>
            </div>
          </div>
        </section>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#FCE183] p-8 rounded-xl">
          {/* Location & Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                Location & Contact
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-semibold text-foreground">Address:</p>
                <p className="text-muted-foreground">
                  318-A Main St
                  <br />
                  Shediac, NB E4P 2E3
                </p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Phone:</p>
                <a href="tel:+15063510182" className="text-primary hover:text-primary/80 transition-colors">
                  (506) 351-0182
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground">Follow Us:</p>
                <a
                  href="https://www.facebook.com/profile.php?id=100091358628559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </div>
              <div>
                <p className="font-semibold text-foreground">Email:</p>
                <a
                  href="mailto:kainanrestaurantinc@gmail.com"
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                >
                  kainanrestaurantinc@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Hours */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <Clock className="w-5 h-5" />
                Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {hours.map((schedule) => (
                  <div key={schedule.day} className="flex justify-between">
                    <span className="font-medium text-foreground">{schedule.day}</span>
                    <span className={`${schedule.time === "Closed" ? "text-secondary" : "text-muted-foreground"}`}>
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Service Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <TreePine className="w-5 h-5" />
                Service Options
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <TreePine className="w-5 h-5 text-accent" />
                <span className="text-foreground">Outdoor seating <br/><span className="text-muted-foreground text-xs">(patio open during summer season only)</span></span>
              </div>
              <div className="flex items-center gap-3">
                <Dog className="w-5 h-5 text-accent" />
                <span className="text-foreground">Dogs allowed outside</span>
              </div>
              <div className="flex items-center gap-3">
                <ParkingSquare className="w-8 h-8 text-accent" />
                <span className="text-foreground">Customer parking available <span className="text-muted-foreground text-xs">(entrance at the side of the building)</span></span>
              </div>
            </CardContent>
          </Card>

          {/* Find Us (Full Width on 2nd Row) */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                Find Us!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <a
                href="https://www.google.com/maps/place/Kainan+a+place+to+eat/@46.2193544,-64.5468311,17.24z/data=!4m14!1m7!3m6!1s0x4ca0912a49fec51d:0xa5f2a229e2f7ce4f!2sKainan+a+place+to+eat!8m2!3d46.2194786!4d-64.5465999!16s%2Fg%2F11k3tvxxwr!3m5!1s0x4ca0912a49fec51d:0xa5f2a229e2f7ce4f!8m2!3d46.2194786!4d-64.5465999!16s%2Fg%2F11k3tvxxwr?entry=ttu&g_ep=EgoyMDI1MDgyNS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-90 transition-opacity"
              >
                <Image
                  src="/images/kainan-location.png"
                  alt="Kainan restaurant location on Google Maps"
                  width={800}
                  height={400}
                  className="w-full h-auto rounded-lg border"
                />
              </a>
              <p className="text-sm text-muted-foreground mt-2 text-center">Click to open in Google Maps</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
