import Image from "next/image";
import { Award, Users, Briefcase } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    {
      year: "2019",
      title: "Fashion Show & Company Formation",
      description: "Formed the Grooming Academy andf started The beauty Pageant",
      icon: Briefcase,
      image: "/2019.jpg?height=300&width=400",
    },
    {
      year: "2020",
      title: "Minu Sarees",
      description: "Fashion Brand Shoots with Renowned Brands",
      icon: Award,
      image: "/minu.jpg?height=300&width=400",
    },
    {
      year: "2021",
      title: "Collaborations as a host with Merlin Group",
      description: "Football Mania at Merlin Group",
      icon: Award,
      image: "/2021-(2).jpg?height=300&width=400",
    },
    {
      year: "2022",
      title: "Lifestyle Brand Endorsements",
      description: "Brand endorsements for National Fashion lifestyle products",
      icon: Users,
      image: "/2022.jpg?height=300&width=400",
    },
    {
      year: "2023",
      title: "Tanishq",
      description: "Brand collaboration with Tanishq",
      icon: Award,
      image: "/tanishq.jpg?height=300&width=700",
    },
    {
      year: "2024",
      title: "ISL",
      description: "Sports Presenter at Indian Super League",
      icon: Users,
      image: "/isl.jpg?height=300&width=400",
    },
    {
      year: "2025",
      title: "Prabhuji",
      description: "Collaborations with National Brand - Prabhuji",
      icon: Award,
      image: "/prabhuji.jpg?height=300&width=400",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-playfair text-5xl md:text-6xl font-bold text-black mb-6">
                About Bilkes
              </h1>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                With over a decade of corporate leadership experience, Bilkes
                Perveen has always stood out for her communication skills,
                people management strengths, and commitment to excellence. A
                spontaneous participation in a fashion show became the turning
                point that reshaped her journey, leading her to discover a
                deeper purpose: empowering individuals to embrace confidence
                inside out.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                This passion led to the establishment of Perveen & Chatterjee
                OPC Pvt. Ltd. and the creation of the acclaimed P&C Face of West
                Bengal, now stepping into its 6th successful season. The pageant
                goes beyond beauty, celebrating empowerment, personality, and
                transformation.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Today, Bilkes is a true multi-faceted professional — a fashion,
                lifestyle, and sports influencer, corporate emcee, soft-skills
                trainer, grooming and image coach, content creator, show
                director, model, and speaker. Her unique blend of corporate
                experience and creative expertise has helped countless
                individuals shape their dreams with clarity and confidence.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Her work also extends to art, culture, and social causes,
                reflecting her commitment to community upliftment. Featured by
                leading media houses and associated with brands like Prabhuji,
                Tanishq, Maxima, and Panghat, Cyclothonkolkata, Jbg Marathon and
                many more, she even represented as a sports presenter in ISL
                2024.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Through every role, Bilkes Perveen continues to inspire—proving
                that reinvention is powerful, and success grows when shared.
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
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
              Career Timeline
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Key milestones and achievements that have shaped a remarkable
              professional journey.
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
                      <span className="text-2xl font-playfair font-bold text-royal-blue">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-black mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {milestone.description}
                    </p>
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
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">
              Professional Achievements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/prof-1.jpg?height=300&width=400"
                  alt="Calendar Cover 2021"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                Hosting Events
              </h3>
              <p className="text-gray-600">
                Founder and Director of P&C group.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/prof-2.jpg?height=300&width=400"
                  alt="Brand Ambassador"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                Kolkata Cyclothon
              </h3>
              <p className="text-gray-600">
                Pan India Brand Endorsements and Collaborations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg mb-4">
                <Image
                  src="/jewels.jpeg?height=300&width=400"
                  alt="Entrepreneur"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="font-playfair text-xl font-bold mb-2">
                Infinity Jewels
              </h3>
              <p className="text-gray-600">
                Brand Face for Jewellery Companies.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
