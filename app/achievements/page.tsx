import Image from "next/image"
import { Award, Star, Trophy, Crown } from "lucide-react"

export default function AchievementsPage() {
  const achievements = [
    {
      title: "Calendar Cover Model 2021",
      subtitle: "Face of West Bengal",
      description:
        "Selected as the face of West Bengal Calendar Cover Model 2021, representing elegance, grace, and the cultural essence of the region.",
      image: "/placeholder.svg?height=600&width=800",
      icon: Crown,
      year: "2021",
      category: "Modeling",
    },
    {
      title: "Brand Ambassador",
      subtitle: "P&C Art Arena",
      description:
        "Appointed as Brand Ambassador for P&C Art Arena, promoting arts, culture, and creative expression across various platforms.",
      image: "/IMG-20250818-WA0133.jpg?height=600&width=800",
      icon: Star,
      year: "2020-Present",
      category:"Business Leadership",
    },
    {
      title: "Founder & CEO",
      subtitle: "Perveen & Chatterjee OPC Pvt Ltd",
      description:
        "Successfully founded and established P&C as Founder and CEO, building a thriving business from the ground up.",
      image: "/IMG-20250818-WA0096.jpg?height=600&width=800",
      icon: Trophy,
      year: "2020",
      category: "Entrepreneurship",
    },

    {
      title: "Sports Presenter",
      subtitle: "Indian Super League (ISL)",
      description:
        "Served as Sports Presenter for the Indian Super League, bringing expertise and charisma to sports broadcasting.",
      image: "/placeholder.svg?height=600&width=800",
      icon: Star,
      year: "2020-2022",
      category: "Media & Broadcasting",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-rose-gold to-royal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">Achievements</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            A collection of milestones, recognitions, and accomplishments that define a journey of excellence across
            multiple industries.
          </p>
        </div>
      </section>

      {/* Achievements Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-4">
                    <achievement.icon className="h-8 w-8 text-royal-blue mr-3" />
                    <span className="text-sm font-semibold text-royal-blue uppercase tracking-wide">
                      {achievement.category}
                    </span>
                  </div>
                  <div className="flex items-center mb-4">
                    <h2 className="font-playfair text-3xl md:text-4xl font-bold text-black mr-4">
                      {achievement.title}
                    </h2>
                    <span className="bg-rose-gold text-white px-3 py-1 rounded-full text-sm font-medium">
                      {achievement.year}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">{achievement.subtitle}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">{achievement.description}</p>
                  <div className="flex items-center">
                    <div className="w-12 h-1 bg-royal-blue rounded-full"></div>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                  <div className="relative">
                    <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-2xl">
                      <Image
                        src={achievement.image || "/placeholder.svg"}
                        alt={achievement.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-rose-gold rounded-full opacity-20"></div>
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-royal-blue rounded-full opacity-20"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Recognition & Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Beyond individual achievements, the impact extends to inspiring others and contributing to industry
              growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-royal-blue w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Industry Recognition</h3>
              <p className="text-gray-600">
                Acknowledged for contributions to modeling, media, and entrepreneurship sectors.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-rose-gold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Inspiring Others</h3>
              <p className="text-gray-600">
                Mentoring and coaching individuals to achieve their personal and professional goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">Business Success</h3>
              <p className="text-gray-600">
                Building successful ventures and creating opportunities for growth and innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
