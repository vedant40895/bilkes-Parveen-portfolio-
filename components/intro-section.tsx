import Image from "next/image";

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
              Welcome to my world!
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm Bilkes Perveen — a multifaceted personality driven by passion,
              purpose, and the art of self-expression. From being a *social
              media influencer, emcee, corporate soft-skills trainer, image
              coach, content creator, model, show director, and speaker*, my
              journey has been a dynamic blend of creativity and
              professionalism.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              With over a decade of corporate experience, I truly understand the
              power of communication, self-branding, and authentic confidence.
              These values have shaped my path and helped me collaborate with
              numerous brands across fashion, lifestyle, corporate and creative
              industries.
            </p>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Here, I share my work, my voice, and my vision. Welcome to a space
              where passion meets purpose — and where every story
              inspires growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="px-4 py-2 bg-royal-blue text-white rounded-full text-sm font-medium">
                Entrepreneur
              </span>
              <span className="px-4 py-2 bg-rose-gold text-white rounded-full text-sm font-medium">
                Social Media Influencer
              </span>
              <span className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium">
                Image Coach
              </span>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/IMG-20250818-WA0311.jpg?height=600&width=480"
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
  );
}
