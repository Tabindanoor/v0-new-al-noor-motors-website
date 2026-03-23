"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Fuel, Gauge, Calendar, ArrowRight } from "lucide-react"

interface CarCardProps {
  car: {
    id: number
    name: string
    brand: string
    price: string
    year: number
    mileage: string
    fuel: string
    image: string
    isNew: boolean
  }
}

export function CarCard({ car }: CarCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group bg-card border-border overflow-hidden transition-all duration-500 hover:border-primary/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url('${car.image}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        
        {/* Badge */}
        <Badge
          className={`absolute top-4 left-4 ${
            car.isNew
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          {car.isNew ? "New" : "Used"}
        </Badge>
        
        {/* Quick View Button */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-background/60 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
            View Details
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>

      <CardContent className="p-6">
        {/* Brand & Name */}
        <div className="mb-4">
          <p className="text-xs text-primary uppercase tracking-wider mb-1">{car.brand}</p>
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {car.name}
          </h3>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 mb-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center gap-1">
            <Gauge className="w-4 h-4" />
            <span>{car.mileage}</span>
          </div>
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span>{car.fuel}</span>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <div>
            <p className="text-xs text-muted-foreground">Starting from</p>
            <p className="text-2xl font-serif font-bold text-primary">{car.price}</p>
          </div>
          <a
            href={`https://wa.me/923009665022?text=Hi, I'm interested in ${car.name}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1"
          >
            Inquire
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </CardContent>
    </Card>
  )
}
