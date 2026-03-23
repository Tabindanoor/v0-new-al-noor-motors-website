"use client"

import { useEffect, useRef, useState } from "react"
import { Shield, Award, Users, Clock } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Trusted Dealer",
    description: "Over 15 years of trusted service in Faisalabad",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Every vehicle thoroughly inspected and certified",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Dedicated to your complete satisfaction",
  },
  {
    icon: Clock,
    title: "Quick Process",
    description: "Hassle-free buying and selling experience",
  },
]

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-secondary/50"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <span className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
              About Us
            </span>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 leading-tight">
              Your Trusted Partner in 
              <span className="text-primary"> Automotive Excellence</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              New Al-Noor Motors has been a cornerstone of the Faisalabad automotive 
              market for over 15 years. We specialize in dealing with all kinds of new 
              and used cars, ensuring our customers get the best value and quality in 
              every transaction.
            </p>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our commitment to transparency, quality, and customer satisfaction has 
              made us the go-to destination for car enthusiasts and families alike. 
              Whether you&apos;re looking to buy your dream car, sell your current vehicle, 
              or exchange for an upgrade, we&apos;re here to help.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div
            className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-4">
              <div
                className="h-48 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop')`,
                }}
              />
              <div
                className="h-64 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop')`,
                }}
              />
            </div>
            <div className="space-y-4 pt-8">
              <div
                className="h-64 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')`,
                }}
              />
              <div
                className="h-48 rounded-lg bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop')`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
