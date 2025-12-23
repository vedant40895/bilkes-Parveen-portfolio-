"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

export default function GalleryPage() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null)
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null)
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({})

  const galleryImages = [
    {
      id: 1,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.57.16 PM.jpeg",
    },
    {
      id: 2,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.57.18 PM (1).jpeg",
    },
    {
      id: 3,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.57.18 PM.jpeg",
    },
    {
      id: 4,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.57.19 PM.jpeg",
    },
    {
      id: 5,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.57.20 PM (1).jpeg",
    },
    {
      id: 6,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.57.20 PM.jpeg",
    },
    {
      id: 7,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.57.21 PM (1).jpeg",
    },
    {
      id: 8,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.57.21 PM.jpeg",
    },
    {
      id: 9,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.59.55 PM (1).jpeg",
    },
    {
      id: 10,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.59.55 PM.jpeg",
    },
    {
      id: 11,
      src: "/gallery/WhatsApp Image 2025-12-22 at 8.59.56 PM.jpeg",
    },
    {
      id: 12,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.14 PM (1).jpeg",
    },
    {
      id: 13,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.14 PM (2).jpeg",
    },
    {
      id: 14,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.14 PM.jpeg",
    },
    {
      id: 15,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.16 PM (1).jpeg",
    },
    {
      id: 16,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.16 PM (2).jpeg",
    },
    {
      id: 17,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.16 PM.jpeg",
    },
    {
      id: 18,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.17 PM (1).jpeg",
    },
    {
      id: 19,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.17 PM.jpeg",
    },
    {
      id: 20,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.18 PM (1).jpeg",
    },
    {
      id: 21,
      src: "/gallery/WhatsApp Image 2025-12-22 at 9.02.18 PM.jpeg",
    },
  ]

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

      {/* Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {galleryImages.map((image) => {
              // @ts-expect-error: isVideo may not exist on all images
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
                        // @ts-expect-error: thumbnail may not exist on all images
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
                        alt="Gallery image"
                        width={400}
                        height={600}
                        className="w-full h-auto object-cover"
                      />
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
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="outline"
              size="icon"
              className="absolute -top-12 right-0 bg-white hover:bg-gray-200 border-white text-black shadow-lg"
              onClick={() => setLightboxImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <Image
              src={lightboxImage}
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
