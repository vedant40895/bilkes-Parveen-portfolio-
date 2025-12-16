"use client";

import Image from "next/image";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

export default function MediaAwardsPage() {
  const mediaImages = [
    "/media-1.jpg",
    "/media-2.jpg",
    "/media-3.jpg",
    "/media-4.jpg",
    "/media-5.jpeg",
  ];
  const awardImages = [
    "/paper.jpeg",
    "/WhatsApp Image 2025-12-14 at 22.51.27_88feadcd.jpg",
    "/WhatsApp Image 2025-12-14 at 22.52.17_fcb71665.jpg",
    "/WhatsApp Image 2025-12-14 at 22.58.42_31946ba2.jpg",
    "/WhatsApp Image 2025-12-14 at 23.22.48_7cb1bbef.jpg",
    "/awards-6.jpeg",
    // Add more award image paths as needed
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-10 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">
            Media & Awards
          </h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Explore a collection of media features, press highlights, and prestigious awards that showcase a journey of excellence and recognition.
          </p>
        </div>
      </section>

      {/* Media Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
              Media Highlights
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Glimpses from media coverage, events, and public appearances.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mediaImages.map((img, i) => (
              <Card key={i} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={img}
                    alt={`Media Highlight ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Gallery Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
              Awards & Recognitions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Honoring achievements and special recognitions received over the years.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awardImages.map((img, i) => (
              <Card key={i} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[3/4] relative">
                  <Image
                    src={img}
                    alt={`Award ${i + 1}`}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Press Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
            In the Spotlight
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Bilkes Perveen has been widely recognized by leading media houses for her impactful journey as a fashion influencer, entrepreneur, and professional role model. Her work and voice have earned her prestigious felicitations from the Times Group and The Telegraph, acknowledging her influence, leadership, and contribution to the industry.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-4">
            She has been regularly featured across prominent media platforms, including The Telegraph, Calcutta Times, Times Indulge, and several other leading publications. Bilkes has also made notable appearances on talk shows and media interactions, where she shares her insights on fashion, empowerment, entrepreneurship, and personal growth.
          </p>  
          <p className="text-xl text-gray-700 leading-relaxed mt-4">
            These recognitions reflect her credibility, consistency, and the respect she commands across media platforms, making her a trusted and celebrated name in the industry.
          </p>
        </div>
      </section>
    </div>
  );
}