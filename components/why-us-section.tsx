"use client"

import { useEffect, useRef, useState } from "react"
import { CheckCircle, Star } from "lucide-react"

const reasons = [
  "15+ years of trusted service in Faisalabad",
  "Comprehensive vehicle inspection guarantee",
  "Transparent pricing with no hidden charges",
  "Complete documentation assistance",
  "Wide selection of new and used vehicles",
  "Flexible exchange and trade-in options",
  "Professional and friendly customer service",
  "After-sales support and guidance",
]

const testimonials = [
  {
    name: "Ahmed Khan",
    location: "Faisalabad",
    text: "Excellent service! Bought my Civic from Al-Noor Motors and the entire process was smooth and transparent.",
    rating: 5,
  },
  {
    name: "Muhammad Ali",
    location: "Sargodha",
    text: "Best dealership in the area. They gave me a great exchange deal for my old car. Highly recommended!",
    rating: 5,
  },
  {
    name: "Usman Malik",
    location: "Faisalabad",
    text: "Trustworthy and professional team. The documentation process was handled perfectly.",
    rating: 5,
  },
]

export function WhyUsSection() {
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
    <section id="why-us" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              The <span className="text-primary">Trusted Choice</span> for Car Buyers
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              With over 15 years of experience serving customers in Faisalabad and beyond, 
              we have built a reputation for trust, quality, and exceptional service.
            </p>

            <div className="grid gap-4">
              {reasons.map((reason, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg transition-all duration-300 hover:bg-secondary"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-serif font-bold text-foreground mb-8">
              What Our Customers Say
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">&ldquo;{testimonial.text}&rdquo;</p>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
