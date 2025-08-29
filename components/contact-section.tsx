import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Clock, Facebook, Dog, TreePine } from "lucide-react"
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
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Visit Us Today</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Come experience authentic Filipino hospitality and cuisine. We can't wait to welcome you to our family table.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <p className="text-sm text-muted-foreground mt-4 italic">*Hours might differ</p>
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
                <span className="text-foreground">Outdoor seating</span>
              </div>
              <div className="flex items-center gap-3">
                <Dog className="w-5 h-5 text-accent" />
                <span className="text-foreground">Dogs allowed outside</span>
              </div>
              <div className="mt-6 p-4 bg-card rounded-lg">
                <p className="text-sm text-card-foreground text-pretty">
                  Enjoy your meal in our comfortable outdoor seating area, perfect for families and pet owners alike!
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Find Us (Full Width on 2nd Row) */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary">
                <MapPin className="w-5 h-5" />
                Find Us
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
                  src="/images/map-location.png"
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
