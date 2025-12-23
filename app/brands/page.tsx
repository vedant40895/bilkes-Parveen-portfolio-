"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function BrandsPage() {
  const brands = [
    "Minu",
    "Obako",
    "Oui & Me",
    "Tanishq",
    "Panghat",
    "Shrachi Sports",
    "Merlin",
    "JBG Marathon",
    "ISL",
    "Times Fashion Week",
    "Prabhuji",
    "Panghat Cyclothon Kolkata",
    "Windows Productions",
    "Times Bangla Music",
    "Asha Audio",
    "Maxima",
    "Secret Temptation",
    "Lab & Herb",
    "Olfra",
    "Heena Designer",
    "Lotus",
    "Calfnero",
    "Infinity",
    "Ambuja",
    "BNI",
    "CT Fashion Week",
    "KFW",
    "101 Endura",
    "Kayakalp",
    "JBG Staircase",
    "Bengal Britain Friendship Cup",
    "Shahida MUA",
    "Mon Makeover",
    "Amna Junaid",
    "Eid Souk Exhibition",
    "NIPS College",
    "Eventalla Exhibition",
    "Tia Pakhi",
    "Studio AV",
    "Club De Golfe",
    "Shuja Perfumes",
    "Miss Universe",
    "Swiss Beauty",
    "Garnier",
    "Sugar",
    "Mia by Tanishq",
    "Offbeat CCU",
    "NY Salon",
    "Emmm Mega Mart",
    "Avama Jewellers",
    "Sixth Avenue",
    "B20 Nail House",
    "Klear Skin n Hair Clinic",
    "Media Connect",
    "Style Grove Exhibition",
    "Thunderbolts",
    "TURMS apparels",
    "Avama Jewellers",
    "Golden Tulip Hotel",
    "Numis",
    "Stevia",
    "Belora",
    "Nimis Fashion",
    "Genesis Academy",
    "Pearl Hotel",
    "Sleepkart",
    "Shuja Perfumes",
    "Max",
    "The London Salon",
    "Biba",
    "Aarju jain Designer",
    "Medhavini Designer",
    "GN Jewellers",
    "Raoni beauty cosmetics",
    "The Flamboyant",
    "Home Delite Sargam",
    "SRM",
    "BBC",
    "Kolkata Book fair",
    "Ponds",
    "Great lakes institute of management",
    "SAI Kolkata",
    "FitIndia",
    "Momentz Kolkata",
    "Steam in mugs cafe",
    "Mcafeine",
    "Neha's Fashion",
    "Mukund Jewellers",
    "Skinn perfumes",
    "Techno India group",
    "Snehodiya",
    "Chopstick Restaurant",
    "Mioamore",
    "Monginis",
    "Kayakalp",
    "Clear Skin clinic",
    "Tericomm",
    "Anav Pearls",
    "Colatch official",
    "Sportizindia",
    "Navdurga",
    "UnivitedV",
    "Newtown Sarbojonin",
    "Kumartuli Sarbojonin",
    "Glamup by Sujata",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-black to-royal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6">
            Where Style Meets Stage, Screen & Storytelling
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto text-center px-2 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed">
            A versatile Fashion & Lifestyle Influencer, Emcee, and Sports Host
            with experience collaborating with leading fashion, lifestyle,
            jewellery, beauty, skin and event brands. Known for her confident
            on-stage presence and natural camera-facing ease, she brings
            brands to life through impactful live hosting, anchoring, and
            curated digital storytelling.
          </p>
          <p className="text-xl text-gray-700 leading-relaxed mt-4">
            Her strengths lie in blending fashion-forward aesthetics with
            strong interpersonal communication, creating engaging content that
            resonates both on-ground and online. From high-energy events to
            refined brand campaigns, she represents brands with authenticity,
            elegance, and professionalism.
          </p>
        </div>
      </section>

      {/* Key Skills & Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Key Skills & Strengths */}
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6 text-center">
                Key Skills & Strengths
              </h2>
              <div className="flex flex-col gap-4 text-lg text-gray-700">
                <p className="flex items-start gap-3">
                  <span>🎤</span>
                  <span>Live Hosting & Anchoring</span>
                </p>
                <p className="flex items-start gap-3">
                  <span>🎥</span>
                  <span>Camera-facing Confidence</span>
                </p>
                <p className="flex items-start gap-3">
                  <span>📱</span>
                  <span>Content Creation (Reels, Stories, Campaigns)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span>👗</span>
                  <span>Fashion & Styling Sense</span>
                </p>
                <p className="flex items-start gap-3">
                  <span>❇️</span>
                  <span>Inter personal communication skills</span>
                </p>
              </div>
            </Card>

            {/* Services Offered */}
            <Card className="p-8 bg-white shadow-lg">
              <h2 className="font-playfair text-3xl font-bold text-gray-900 mb-6 text-center">
                Services Offered
              </h2>
              <div className="flex flex-col gap-4 text-lg text-gray-700">
                <p className="flex items-start gap-3">
                  <span className="text-royal-blue">•</span>
                  <span>Live Hosting & Anchoring</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-royal-blue">•</span>
                  <span>Camera-Facing Brand Representation</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-royal-blue">•</span>
                  <span>Content Creation (Reels, Stories & Campaigns)</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-royal-blue">•</span>
                  <span>Fashion Styling & Visual Storytelling</span>
                </p>
                <p className="flex items-start gap-3">
                  <span className="text-royal-blue">•</span>
                  <span>Interpersonal Communication & Audience Engagement</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Brands Grid Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-900 mb-4">
              Brands I've Worked With
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of {brands.length}+ renowned brands and organizations
              that have trusted me to represent their vision and values.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {brands.map((brand, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 hover:border-royal-blue cursor-pointer bg-gradient-to-br from-yellow-50 to-amber-50 "
              >
                <div className="p-6 flex items-center justify-center min-h-[100px]">
                  <Badge
                    variant="outline"
                    className="text-center text-sm font-medium text-gray-700 group-hover:text-royal-blue group-hover:border-royal-blue transition-colors px-4 py-2 border-gray-400"
                  >
                    {brand}
                  </Badge>
                </div>
              </Card>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center bg-gradient-to-br from-royal-blue to-blue-600 text-white">
              <div className="text-5xl font-bold mb-2">{brands.length}+</div>
              <div className="text-lg opacity-90">Brand Collaborations</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-purple-600 to-pink-600 text-white">
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-lg opacity-90">Successful Projects</div>
            </Card>
            <Card className="p-8 text-center bg-gradient-to-br from-amber-500 to-orange-500 text-white">
              <div className="text-5xl font-bold mb-2">6+</div>
              <div className="text-lg opacity-90">Years of Experience</div>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-white mb-6">
            Let's Collaborate
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Interested in working together? Let's create something amazing for
            your brand.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-royal-blue px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
