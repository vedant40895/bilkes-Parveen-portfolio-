import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { User, Mic, Camera, Star, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "1-on-1 Image Coaching",
      description: "Personalized coaching sessions to enhance your personal brand and professional image.",
      features: [
        "Personal style assessment",
        "Wardrobe consultation",
        "Body language training",
        "Professional photo guidance",
        "Confidence building exercises",
      ],
      icon: User,
      image: "/IMG-20250818-WA0132.jpg?height=400&width=600",
      duration: "2-3 hours per session",
      price: "Custom pricing",
    },
    {
      title: "Personality Development",
      description: "Comprehensive programs to develop charisma, confidence, and leadership qualities.",
      features: [
        "Communication skills enhancement",
        "Leadership development",
        "Social etiquette training",
        "Networking strategies",
        "Personal branding workshop",
      ],
      icon: Star,
      image: "/IMG-20250818-WA0094.jpg?height=400&width=600",
      duration: "4-6 week program",
      price: "Package deals available",
    },
    {
      title: "Public Speaking Training",
      description: "Master the art of public speaking and presentation with confidence and impact.",
      features: [
        "Speech preparation techniques",
        "Stage presence training",
        "Overcoming speaking anxiety",
        "Voice modulation and projection",
        "Audience engagement strategies",
      ],
      icon: Mic,
      image: "/IMG-20250818-WA0130.jpg?height=400&width=600",
      duration: "Flexible scheduling",
      price: "Group and individual rates",
    },
    {
      title: "Professional Image Management",
      description: "Complete image makeover and management for executives and professionals.",
      features: [
        "Executive presence development",
        "Professional wardrobe planning",
        "Digital image optimization",
        "Media training",
        "Crisis communication prep",
      ],
      icon: Camera,
      image: "/IMG-20250818-WA0083.jpg?height=400&width=600",
      duration: "Ongoing consultation",
      price: "Corporate packages available",
    },
  ]

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Marketing Executive",
      content:
        "Bilkes transformed my professional image completely. Her coaching gave me the confidence to pursue leadership roles.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Rajesh Kumar",
      role: "Entrepreneur",
      content:
        "The personality development program was life-changing. I now present myself with confidence in business meetings.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Anita Desai",
      role: "Corporate Trainer",
      content: "Public speaking training with Bilkes helped me overcome my fears and become an effective presenter.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <div className="min-h-screen pt-16">

     {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-royal-blue to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">Coaching Services</h1>
          <p className="text-xl text-white/90 leading-relaxed mb-8">
            Transform your image, enhance your personality, and unlock your full potential with personalized coaching
            programs designed for success.
          </p>
          <Button asChild size="lg" className="bg-rose-gold hover:bg-rose-gold/90 text-lg px-8 py-3">
            <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Coaching Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive coaching services tailored to your individual needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-[3/2] relative">
                  <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center mb-2">
                    <service.icon className="h-8 w-8 text-royal-blue mr-3" />
                    <CardTitle className="font-playfair text-2xl">{service.title}</CardTitle>
                  </div>
                  <CardDescription className="text-lg">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <ArrowRight className="h-4 w-4 text-royal-blue mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-sm text-gray-500">Duration</p>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Investment</p>
                      <p className="font-semibold">{service.price}</p>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-royal-blue hover:bg-royal-blue/90">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Coaching Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A structured approach to transformation and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Assessment",
                description: "Initial consultation to understand your goals and current state",
              },
              {
                step: "02",
                title: "Planning",
                description: "Customized coaching plan tailored to your specific needs",
              },
              {
                step: "03",
                title: "Implementation",
                description: "Hands-on coaching sessions with practical exercises",
              },
              {
                step: "04",
                title: "Transformation",
                description: "Achieve your goals with ongoing support and guidance",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="bg-royal-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-playfair text-xl font-bold">
                  {item.step}
                </div>
                <h3 className="font-playfair text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Client Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real transformations from real people who have experienced the power of professional coaching.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <CardContent className="pt-6">
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-rose-gold to-royal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Image?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Take the first step towards unlocking your full potential with personalized coaching.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-royal-blue hover:bg-gray-100 text-lg px-8 py-3">
              <Link href="/contact">Book Free Consultation</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-royal-blue text-lg px-8 py-3 bg-transparent"
            >
              <Link href="/portfolio">View Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
