"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock } from "lucide-react"

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Our Showroom",
    details: ["Shop No. B-7, Ground Floor", "9 Madina Colony, Main Sargodha Road", "Faisalabad"],
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["0300-9665022", "0336-9665022", "0312-9665022", "0300-7658022"],
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Monday - Saturday: 9:00 AM - 9:00 PM", "Sunday: 10:00 AM - 6:00 PM"],
  },
]

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Contact <span className="text-primary">Us</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Have questions or ready to find your perfect car? 
            Reach out to us through any of the channels below.
          </p>
        </div>

        <div
          className={`space-y-6 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {contactInfo.map((info, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300"
            >
              <CardContent className="p-6 flex gap-6">
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-muted-foreground">
                      {info.title === "Call Us" ? (
                        <a href={`tel:${detail.replace(/-/g, "")}`} className="hover:text-primary transition-colors">
                          {detail}
                        </a>
                      ) : (
                        detail
                      )}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="h-64 rounded-lg overflow-hidden border border-border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3403.2244559752397!2d73.07418611511901!3d31.45481008139003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242b7747b4b59%3A0x9b3a2a7e3b7b7b7b!2sSargodha%20Road%2C%20Faisalabad%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="New Al-Noor Motors Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
