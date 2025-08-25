"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ImageSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      image: "/IMG-20250818-WA0022.jpg?height=600&width=800",
      title: "Modeling Portfolio",
      // description: "Professional fashion and commercial modeling work",
    },
    {
      image: "/new.png?height=600&width=800",
      title: "Event Hosting",
      // description: "Emcee and hosting at corporate and entertainment events",
    },
    {
      image: "/IMG-20250818-WA0135.jpg?height=600&width=800",
      title: "Speaking Engagements",
      // description: "Motivational speaking and industry presentations",
    },
    {
      image: "/IMG-20250818-WA0232.jpg?height=600&width=800",
      title: "Brand Collaborations",
      // description: "Strategic partnerships with leading brands",
    },
    {
      image: "/IMG-20250818-WA0042.jpg?height=600&width=800",
      title: "Image Coaching Sessions",
      // description: "Personal image coaching and development programs",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Portfolio Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the diverse range of professional work spanning modeling, hosting, speaking, and brand
            collaborations.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-[16/9] relative overflow-hidden rounded-lg shadow-2xl">
            <Image
              src={slides[currentSlide].image || "/placeholder.svg"}
              alt={slides[currentSlide].title}
              fill
              className="object-cover transition-all duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <h3 className="font-playfair text-3xl font-bold mb-2">{slides[currentSlide].title}</h3>
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-2 w-2" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
            onClick={nextSlide}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  index === currentSlide ? "bg-royal-blue" : "bg-gray-300"
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
