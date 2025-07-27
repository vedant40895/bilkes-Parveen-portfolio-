import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight } from "lucide-react"

export default function BlogPage() {
  const articles = [
    {
      id: 1,
      title: "The Power of Personal Branding in Today's Digital Age",
      excerpt:
        "Discover how to build an authentic personal brand that resonates with your audience and opens doors to new opportunities.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Personal Branding",
      date: "2024-01-15",
      readTime: "5 min read",
      author: "Bilkes Perveen",
    },
    {
      id: 2,
      title: "Confidence on Camera: Tips for Professional Photo Shoots",
      excerpt:
        "Learn the secrets to looking confident and natural in front of the camera, whether for professional headshots or brand campaigns.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Photography",
      date: "2024-01-10",
      readTime: "7 min read",
      author: "Bilkes Perveen",
    },
    {
      id: 3,
      title: "From Entrepreneur to Speaker: My Journey in Public Speaking",
      excerpt:
        "A personal account of overcoming stage fright and developing the skills to become an effective public speaker.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Speaking",
      date: "2024-01-05",
      readTime: "6 min read",
      author: "Bilkes Perveen",
    },
    {
      id: 4,
      title: "The Art of Networking: Building Meaningful Professional Relationships",
      excerpt:
        "Strategies for authentic networking that goes beyond exchanging business cards to creating lasting professional connections.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Networking",
      date: "2023-12-28",
      readTime: "4 min read",
      author: "Bilkes Perveen",
    },
    {
      id: 5,
      title: "Fashion and Function: Dressing for Success in Different Industries",
      excerpt:
        "How to adapt your professional wardrobe to different industries while maintaining your personal style and authenticity.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Fashion",
      date: "2023-12-20",
      readTime: "8 min read",
      author: "Bilkes Perveen",
    },
    {
      id: 6,
      title: "Media Training Essentials: Preparing for Interviews and Presentations",
      excerpt:
        "Key techniques for handling media interviews, presentations, and public appearances with confidence and professionalism.",
      image: "/placeholder.svg?height=300&width=500",
      category: "Media Training",
      date: "2023-12-15",
      readTime: "6 min read",
      author: "Bilkes Perveen",
    },
  ]

  const mediaFeatures = [
    {
      title: 'Featured in Business Today: "Rising Entrepreneurs to Watch"',
      publication: "Business Today",
      date: "2024-01-20",
      type: "Magazine Feature",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: 'Podcast Interview: "The Modern Professional"',
      publication: "Career Growth Podcast",
      date: "2024-01-12",
      type: "Podcast",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "TV Interview: Morning Show Discussion on Image Coaching",
      publication: "Regional TV Network",
      date: "2023-12-25",
      type: "Television",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-rose-gold to-black">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-5xl md:text-6xl font-bold text-white mb-6">Blog & Media</h1>
          <p className="text-xl text-white/90 leading-relaxed">
            Insights on personal branding, professional development, and industry trends. Plus media features and
            interviews showcasing expertise and thought leadership.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <Badge className="mb-4 bg-royal-blue">Featured Article</Badge>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-playfair text-4xl font-bold text-black mb-4">{articles[0].title}</h2>
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">{articles[0].excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="mr-4">{new Date(articles[0].date).toLocaleDateString()}</span>
                  <User className="h-4 w-4 mr-2" />
                  <span className="mr-4">{articles[0].author}</span>
                  <span>{articles[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${articles[0].id}`}
                  className="inline-flex items-center text-royal-blue hover:text-royal-blue/80 font-semibold"
                >
                  Read Full Article
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
              <div className="aspect-[4/3] relative overflow-hidden rounded-lg shadow-lg">
                <Image
                  src={articles[0].image || "/placeholder.svg"}
                  alt={articles[0].title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Latest Articles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Practical insights and expert advice on personal branding, professional development, and career growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="aspect-[3/2] relative">
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{article.category}</Badge>
                    <span className="text-sm text-gray-500">{article.readTime}</span>
                  </div>
                  <CardTitle className="font-playfair text-xl line-clamp-2">{article.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <Link
                      href={`/blog/${article.id}`}
                      className="text-royal-blue hover:text-royal-blue/80 font-semibold text-sm"
                    >
                      Read More
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-black mb-4">Media Features</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Recent media appearances, interviews, and features highlighting expertise and industry insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {mediaFeatures.map((feature, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[3/2] relative">
                  <Image src={feature.image || "/placeholder.svg"} alt={feature.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{feature.type}</Badge>
                  <CardTitle className="font-playfair text-lg line-clamp-2">{feature.title}</CardTitle>
                  <CardDescription>
                    {feature.publication} • {new Date(feature.date).toLocaleDateString()}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-royal-blue">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-4xl font-bold text-white mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8">
            Subscribe to receive the latest articles, insights, and updates on personal branding and professional
            development.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-rose-gold"
            />
            <button className="bg-rose-gold hover:bg-rose-gold/90 text-white px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
