import Image from "next/image"
import { Award, Users, Briefcase } from "lucide-react"

export default function AboutPage() {
  const milestones = [
    {
      year: "2021",
      title: "Calendar Cover Model",
      description: "Selected as Face of West Bengal Calendar Cover Model",
      icon: Award,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2020-2022",
      title: "ISL Sports Presenter",
      description: "Sports Presenter at Indian Super League",
      icon: Users,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2019",
      title: "Founded P&C",
      description: "Established P&C as Founder and CEO",
      icon: Briefcase,
      image: "/IMG-20250818-WA0082.jpg?height=300&width=400",
    },
    {
      year: "2023",
      title: "Perveen & Chatterjee OPC",
      description: "Founded and became Managing Director",
      icon: Briefcase,
      image: "/IMG-20250818-WA0129.jpg?height=300&width=700",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-6">About Bilkes</h1>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A visionary entrepreneur and multifaceted professional who has carved a unique path across diverse
                industries. From the glamour of modeling to the boardroom of successful companies, Bilkes Perveen
                embodies the modern renaissance professional.
              </p>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                With a passion for empowering others through image coaching and personal development, she combines her
                extensive experience in media, fashion, and business to help individuals unlock their full potential and
                achieve their goals.
              </p>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] relative overflow-hidden rounded-lg shadow-2xl">
                <Image
                  src="/portfolio-1 .jpg?height=600&width=480"
                  alt="Bilkes Perveen Professional Portrait"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Career Timeline</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones and achievements that have shaped a remarkable professional journey.
            </p>
          </div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-[1.5] min-w-[350px]">
                  <div className="bg-gray-50 p-10 rounded-lg">
                    <div className="flex items-center mb-4">
                      <milestone.icon className="h-8 w-8 text-royal-blue mr-3" />
                      <span className="text-2xl font-playfair font-bold text-royal-blue">{milestone.year}</span>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-black mb-3">{milestone.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{milestone.description}</p>
                  </div>
                </div>
                <div className="flex-[1.5] min-w-[350px]">
                  <div className="aspect-[16/9] relative overflow-hidden rounded-lg shadow-lg min-h-[260px]">
                    <Image
                      src={milestone.image || "/placeholder.svg"}
                      alt={milestone.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Achievements */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Professional Achievements</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Calendar Cover 2021"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Calendar Cover Model 2021</h3>
              <p className="text-gray-600">Face of West Bengal Calendar, representing elegance and grace.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Brand Ambassador"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Brand Ambassador</h3>
              <p className="text-gray-600">P&C Art Arena Brand Ambassador, promoting arts and culture.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image src="/portfolio-1 .jpg?height=300&width=400" alt="Entrepreneur" fill className="object-cover" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Successful Entrepreneur</h3>
              <p className="text-gray-600">Founded multiple companies with focus on innovation and growth.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
