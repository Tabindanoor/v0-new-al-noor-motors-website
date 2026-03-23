"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { ShoppingCart, Banknote, RefreshCw, Wrench, FileCheck, Headphones } from "lucide-react"

const services = [
  {
    icon: ShoppingCart,
    title: "Buy Cars",
    description: "Browse our extensive collection of new and used vehicles. Find your perfect match with our expert guidance.",
  },
  {
    icon: Banknote,
    title: "Sell Cars",
    description: "Get the best value for your vehicle. We offer fair pricing and quick, hassle-free transactions.",
  },
  {
    icon: RefreshCw,
    title: "Exchange Cars",
    description: "Upgrade to your dream car easily. Trade in your current vehicle and get the best exchange deals.",
  },
  {
    icon: FileCheck,
    title: "Documentation",
    description: "Complete paperwork assistance. We handle all legal documentation for smooth ownership transfer.",
  },
  {
    icon: Wrench,
    title: "Vehicle Inspection",
    description: "Thorough inspection of every vehicle. Get complete transparency about your car's condition.",
  },
  {
    icon: Headphones,
    title: "After Sales Support",
    description: "Continued support even after purchase. We're always here to help with any queries.",
  },
]

export function ServicesSection() {
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
    <section id="services" ref={sectionRef} className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Comprehensive automotive services tailored to meet all your car buying, 
            selling, and exchange needs.
          </p>
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-card border-border hover:border-primary/50 transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
