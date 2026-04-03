'use client'

import { useEffect, useRef, useState } from 'react'
import { Car3DViewer } from './car-3d-viewer'

const showcaseCars = [
  {
    id: 1,
    name: 'Civic RS Turbo',
    brand: 'Honda',
    description: 'Premium sedan with cutting-edge turbo technology',
    specs: ['2024 Model', '0 km', 'Petrol', 'PKR 95 Lac'],
  },
  {
    id: 2,
    name: 'Prado VX',
    brand: 'Toyota',
    description: 'Luxury SUV with superior performance and comfort',
    specs: ['2023 Model', '20,000 km', 'Diesel', 'PKR 2.5 Cr'],
  },
  {
    id: 3,
    name: 'Fortuner Legender',
    brand: 'Toyota',
    description: 'Powerful 7-seater with best-in-class features',
    specs: ['2024 Model', '0 km', 'Diesel', 'PKR 1.2 Cr'],
  },
]

export function Car3DShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCar, setSelectedCar] = useState(0)
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
    <section id="3d-showcase" ref={sectionRef} className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="inline-block px-4 py-2 mb-6 text-xs tracking-[0.3em] uppercase text-primary border border-primary/30 rounded-full">
            3D Showcase
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Explore Our Premium <span className="text-primary">Vehicles in 3D</span>
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground text-lg">
            Get an interactive 360-degree view of our featured vehicles. Rotate, zoom, and explore every detail.
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-3 gap-12 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* 3D Viewer */}
          <div className="lg:col-span-2">
            <Car3DViewer carName={showcaseCars[selectedCar].name} />
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                Hover over the car to control rotation
              </p>
            </div>
          </div>

          {/* Car List */}
          <div className="space-y-4">
            {showcaseCars.map((car, index) => (
              <div
                key={car.id}
                onClick={() => setSelectedCar(index)}
                className={`p-6 rounded-lg border cursor-pointer transition-all duration-300 ${
                  selectedCar === index
                    ? 'bg-primary/10 border-primary shadow-lg shadow-primary/20'
                    : 'bg-card border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-sm text-primary font-semibold">{car.brand}</p>
                    <h3 className="text-lg font-semibold text-foreground">{car.name}</h3>
                  </div>
                  {selectedCar === index && (
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-4">{car.description}</p>
                <div className="space-y-2">
                  {car.specs.map((spec, i) => (
                    <div key={i} className="flex items-center text-xs text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                      {spec}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
