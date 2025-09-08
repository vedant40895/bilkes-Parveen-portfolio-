"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const categories = [
    { id: "all", label: "All Photos" },
    { id: "modeling", label: "Modeling" },
    { id: "events", label: "Events" },
    { id: "bts", label: "GLimpse" },
    { id: "professional", label: "Professional" },
    { id: "lifestyle", label: "Lifestyle" },
  ]

  const galleryImages = [
    {
      id: 1,
      src: "/reel-1.mp4",
      thumbnail: "/thubmnail-1.png",
      category: "modeling",
      title: "Fashion Editorial",
      description: "High-fashion editorial shoot",
      isVideo: true,
    },
    {
      id: 2,
      src: "/IMG-20250818-WA0007.jpg",
      category: "events",
      title: "Corporate Event",
      description: "Hosting corporate conference",
    },
    {
      id: 3,
      src: "/IMG-20250818-WA0084.jpg",
      category: "professional",
      title: "Business Portrait",
      description: "Professional headshot session",
    },
    {
      id: 4,
      src: "/IMG-20250818-WA0009.jpg",
      category: "modeling",
      title: "Calendar Shoot",
      description: "West Bengal Calendar 2021",
    },
    {
      id: 5,
      src: "/IMG-20250818-WA0097.jpg",
      category: "bts",
      title: "Behind the Scenes",
      description: "Candid moments during shoot",
    },
    {
      id: 6,
      src: "/IMG-20250818-WA0012.jpg",
      category: "lifestyle",
      title: "Lifestyle Portrait",
      description: "Natural lifestyle photography",
    },
    {
      id: 7,
      src: "/IMG-20250818-WA0014.jpg",
      category: "events",
      title: "ISL Presentation",
      description: "Sports presenting at ISL",
    },
    {
      id: 8,
      src: "/IMG-20250818-WA0115.jpg",
      category: "modeling",
      title: "Brand Campaign",
      description: "Luxury brand collaboration",
    },
    {
      id: 9,
      src: "/IMG-20250818-WA0016.jpg",
      category: "professional",
      title: "Speaking Event",
      description: "Keynote speaking engagement",
    },
    {
      id: 10,
      src: "/IMG-20250818-WA0018.jpg",
      category: "bts",
      title: "Preparation",
      description: "Getting ready for shoot",
    },
    {
      id: 11,
      src: "/IMG-20250818-WA0020.jpg",
      category: "lifestyle",
      title: "Casual Moments",
      description: "Relaxed lifestyle shots",
    },
    {
      id: 12,
      src: "/IMG-20250818-WA0008.jpg",
      category: "modeling",
      title: "Fashion Week",
      description: "Runway and fashion week",
    },
  ]

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((image) => image.category === selectedCategory)

  const handleVideoClick = (id: number) => {
    const currentVideo = videoRefs.current[id]
    if (!currentVideo) return

    Object.entries(videoRefs.current).forEach(([key, video]) => {
      if (parseInt(key) !== id && video) {
        video.pause()
      }
    })

    setSelectedId(id)
    if (playingVideoId !== id) {
      setPlayingVideoId(id)
      currentVideo.play()
    } else {
      if (currentVideo.paused) {
        currentVideo.play()
      } else {
        currentVideo.pause()
        setPlayingVideoId(null)
        setSelectedId(null)
      }
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-royal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">Gallery</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            A visual journey through professional shoots, events, behind-the-scenes moments, and lifestyle photography
            capturing the essence of a multifaceted career.
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
                onClick={() => {
                  setSelectedCategory(category.id)
                  setPlayingVideoId(null)
                  setSelectedId(null)
                }}
                className={selectedCategory === category.id ? "bg-royal-blue hover:bg-royal-blue/90" : ""}
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredImages.map((image) => {
              const isVideo = image.isVideo || image.src.endsWith(".mp4")

              return (
                <div
                  key={image.id}
                  className="break-inside-avoid group"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    if (isVideo) {
                      handleVideoClick(image.id)
                    } else {
                      setLightboxImage(image.src)
                      setSelectedId((prev) => (prev === image.id ? null : image.id))
                    }
                  }}
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-[1.02]">
                    {isVideo ? (
                      <video
                        ref={(el) => {
                          videoRefs.current[image.id] = el
                        }}
                        src={image.src}
                        controls
                        poster={image.thumbnail}
                        className="w-full h-auto object-cover rounded-lg"
                        onPlay={() => setSelectedId(image.id)}
                        onPause={() => {
                          setPlayingVideoId(null)
                          setSelectedId(null)
                        }}
                        onClick={(e) => e.stopPropagation()}
                      />
                    ) : (
                      <Image
                        src={image.src || "/IMG-20250818-WA0007.jpg"}
                        alt={image.title}
                        width={400}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    {selectedId !== image.id && (
                      <div className="absolute bottom-4 left-4 right-4 text-white transition-opacity duration-300">
                        <h3 className="font-playfair text-lg font-bold mb-1">{image.title}</h3>
                        <p className="text-sm opacity-90">{image.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
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
              className="absolute top-4 right-4 bg-white/10 border-white/20 text-white hover:bg-white/20"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={lightboxImage || "/IMG-20250818-WA0007.jpg"}
              alt="Gallery image"
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
