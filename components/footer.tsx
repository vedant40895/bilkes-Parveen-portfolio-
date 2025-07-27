import Link from "next/link"
import { Instagram, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-playfair text-2xl font-bold mb-4 text-rose-gold">Bilkes Perveen</h3>
            <p className="text-gray-300 mb-4 max-w-md">
              Entrepreneur, Image Coach, Model, Emcee, Influencer, and Speaker. Empowering individuals through image
              coaching and personality development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-rose-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-300 hover:text-rose-gold transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@bilkesperveen.com"
                className="text-gray-300 hover:text-rose-gold transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-rose-gold">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-rose-gold">Services</h4>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-300">Image Coaching</span>
              </li>
              <li>
                <span className="text-gray-300">Public Speaking</span>
              </li>
              <li>
                <span className="text-gray-300">Event Hosting</span>
              </li>
              <li>
                <span className="text-gray-300">Brand Collaborations</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">© 2024 Bilkes Perveen. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
