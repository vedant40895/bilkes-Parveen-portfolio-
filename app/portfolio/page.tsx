"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Play } from "lucide-react"

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "All" },
    { id: "Modelling", label: "Modelling" },
    { id: "Emcee", label: "Emcee" },
    { id: "Event Appearances", label: "Event Appearances" },
    { id: "Personality Development Sessions", label: "Personality Development Sessions" },
    { id: "Pageant grooming", label: "Pageant grooming" },
    { id: "brand Collaborations", label: "Brand Shoots & Endorsements" },
  ]

  const portfolioItems = [
    {
      id: 1,
      category: "brand Collaborations",
      image: "/collab-1.jpeg",
      type: "image",
    },
    {
      id: 2,
      category: "Event Appearances",
      image: "/event-4.jpg",
      type: "image",
    },
    {
      id: 3,
      category: "brand Collaborations",
      image: "/collab-3.jpeg",
      type: "image",
    },
    {
      id: 4,
      category: "brand Collaborations",
      image: "/collab-4.jpeg",
      type: "image",
    },
    {
      id: 5,
      category: "Emcee",
      image: "/emcee-1.jpg",
      type: "image",
    },
    {
      id: 6,
      category: "Emcee",
      image: "/emcee-2.jpg",
      type: "image",
    },
    {
      id: 7,
      category: "Pageant grooming",
      image: "/groom-1.jpg",
      type: "image",
    },
    {
      id: 8,
      category: "Personality Development Sessions",
      image: "/image-coach-1.jpg",
      type: "image",
    },
    {
      id: 9,
      category: "Emcee",
      image: "/emcee-3.jpg",
      type: "image",
    },
    {
      id: 10,
      category: "Pageant grooming",
      image: "/groom-2.jpg",
      type: "image",
    },
    {
      id: 11,
      category: "Personality Development Sessions",
      image: "/image-coach-2.jpg",
      type: "image",
    },
    {
      id: 12,
      category: "Modelling",
      image: "/model-1.jpeg",
      type: "image",
    },
    {
      id: 13,
      category: "Modelling",  
      image: "/model-2.jpeg",
      type: "image",
    },
    {
      id: 14,
      category: "Modelling",
      image: "/model-3.jpeg",
      type: "image",
    },
    {
      id: 15, 
      category: "Event Appearances",
      image: "/event-1.jpg",
      type: "image",
    },
    {
      id: 16,
      category: "Event Appearances",
      image: "/event-2.jpeg",
      type: "image",
    },
    {
      id: 17,
      category: "Event Appearances",
      image: "/event-3.jpg",
      type: "image",
    },
    {
      id: 18,
      category: "Event Appearances",
      image: "/event-5.jpg",
      type: "image",
    },
    {
      id: 19,
      category: "Event Appearances",
      image: "/event-6.jpg",
      type: "image",
    },
    { 
      id: 20,
      category: "Event Appearances",
      image: "/event-7.jpg",
      type: "image",
    },
    {
      id: 21,
      category: "Pageant grooming",
      image: "/groom-3.jpg",
      type: "image",
    },
    {
      id: 22,
      category: "Pageant grooming",
      image: "/groom-4.jpg",
      type: "image",
    },
    {
      id: 23,
      category: "Pageant grooming",
      image: "/groom-5.jpg",
      type: "image",
    },
    {
      id: 24,
      category: "brand Collaborations",
      image: "/collab-5.jpg",
      type: "image",
    },
    {
      id: 25,
      category: "Modelling",
      image: "/model-4.jpg",
      type: "image",
    },
    {
      id: 26,
      category: "Modelling",
      image: "/model-5.jpg",
      type: "image",
    },
    {
      id: 27,
      category: "Personality Development Sessions",
      image: "/image-coach-3.jpg",
      type: "image",
    },
    {
      id: 28,
      category: "Personality Development Sessions",
      image: "/image-coach-4.jpg",
      type: "image",
    },
    {
      id: 29,
      category: "Personality Development Sessions",
      image: "/image-coach-5.jpg",
      type: "image",
    }
  ]

  const filteredItems =
    selectedCategory === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">Portfolio</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            A comprehensive showcase of professional work spanning modeling, hosting, speaking engagements, brand
            collaborations, and coaching sessions.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className={selectedCategory === category.id ? "bg-royal-blue hover:bg-royal-blue/90" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div key={item.id} className="group cursor-pointer" onClick={() => setLightboxImage(item.image)}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    fill
                    alt="Portfolio item"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  {item.type === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white/90 rounded-full p-4">
                        <Play className="h-8 w-8 text-royal-blue" />
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  {/*
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 sm:opacity-0 sm:group-hover:opacity-100 xs:opacity-100 xs:static xs:bg-black/60 xs:rounded-b-lg xs:p-2">
                    <h3 className="font-playfair text-xl font-bold mb-1 xs:text-base xs:mb-0">{item.title}</h3>
                    <p className="text-sm opacity-90 xs:opacity-100">{item.description}</p>
                  </div>
                  */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <Button
              variant="outline"
              size="icon"
              className="absolute -top-12 right-0 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={lightboxImage || "/placeholder.svg"}
              alt="Portfolio item"
              width={800}
              height={1000}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
