import Image from "next/image"

export function IntroSection() {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-6">
              Empowering Through Excellence
            </h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              As a multifaceted professional, I bring together the worlds of entrepreneurship, image coaching, modeling,
              and public speaking. My journey spans from being the Face of West Bengal Calendar Cover Model 2021 to
              founding successful companies and coaching individuals to unlock their full potential.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With experience as a former Sports Presenter at ISL and founder of multiple ventures, I understand the
              importance of personal branding, confidence, and authentic self-expression in today's competitive
              landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-royal-blue text-white rounded-full text-sm font-medium">Entrepreneur</span>
              <span className="px-4 py-2 bg-rose-gold text-white rounded-full text-sm font-medium">Image Coach</span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">Speaker</span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/placeholder.svg?height=600&width=480"
                  alt="Bilkes Perveen Portrait"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-rose-gold rounded-full opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-royal-blue rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
