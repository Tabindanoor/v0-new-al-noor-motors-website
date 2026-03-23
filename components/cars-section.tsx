"use client"

import { useEffect, useRef, useState } from "react"
import { CarCard } from "./car-card"
import { Button } from "@/components/ui/button"

const featuredCars = [
  {
    id: 1,
    name: "Civic RS Turbo",
    brand: "Honda",
    price: "PKR 95 Lac",
    year: 2024,
    mileage: "0 km",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1606611013016-969c19ba27bb?q=80&w=2070&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 2,
    name: "Corolla Grande",
    brand: "Toyota",
    price: "PKR 65 Lac",
    year: 2023,
    mileage: "15,000 km",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?q=80&w=2070&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 3,
    name: "Sportage Alpha",
    brand: "Kia",
    price: "PKR 85 Lac",
    year: 2024,
    mileage: "5,000 km",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?q=80&w=2070&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 4,
    name: "Fortuner Legender",
    brand: "Toyota",
    price: "PKR 1.2 Cr",
    year: 2024,
    mileage: "0 km",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=2071&auto=format&fit=crop",
    isNew: true,
  },
  {
    id: 5,
    name: "Prado VX",
    brand: "Toyota",
    price: "PKR 2.5 Cr",
    year: 2023,
    mileage: "20,000 km",
    fuel: "Diesel",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop",
    isNew: false,
  },
  {
    id: 6,
    name: "City Aspire",
    brand: "Honda",
    price: "PKR 52 Lac",
    year: 2024,
    mileage: "0 km",
    fuel: "Petrol",
    image: "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?q=80&w=2064&auto=format&fit=crop",
    isNew: true,
  },
]

export function CarsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [filter, setFilter] = useState<"all" | "new" | "used">("all")
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

  const filteredCars = featuredCars.filter((car) => {
    if (filter === "all") return true
    if (filter === "new") return car.isNew
    return !car.isNew
  })

  return (
    <section id="cars" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Featured <span className="text-primary">Vehicles</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Explore our handpicked selection of premium new and used vehicles.
            Each car is thoroughly inspected to ensure the highest quality.
          </p>
        </div>

        <div
          className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { value: "all" as const, label: "All Cars" },
            { value: "new" as const, label: "New Cars" },
            { value: "used" as const, label: "Used Cars" },
          ].map((item) => (
            <Button
              key={item.value}
              variant={filter === item.value ? "default" : "outline"}
              onClick={() => setFilter(item.value)}
              className={
                filter === item.value
                  ? "bg-primary text-primary-foreground"
                  : "border-border text-foreground hover:bg-secondary"
              }
            >
              {item.label}
            </Button>
          ))}
        </div>

        <div
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {filteredCars.map((car, index) => (
            <div
              key={car.id}
              className="transition-all duration-500"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CarCard car={car} />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            View All Vehicles
          </Button>
        </div>
      </div>
    </section>
  )
}
