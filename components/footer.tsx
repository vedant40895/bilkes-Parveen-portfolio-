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
              <a href="https://www.instagram.com/bilkesperveen?igsh=ejYyMHlkdnh4cmMw" className="text-gray-300 hover:text-rose-gold transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/bilkes-perveen-2536a3177/" className="text-gray-300 hover:text-rose-gold transition-colors">
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

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-base">© 2024 Bilkes Perveen. All rights reserved.</p>
            <div className="flex items-center gap-3 text-slate-400 text-base">
              <span className="font-medium">Designed by Vedant Khanna</span>
              <a 
                href="https://www.linkedin.com/in/vedant-khanna-aaa48a258/" 
                className="w-7 h-7 bg-slate-700 rounded-md flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5 text-white" />
              </a>
              <a 
                href="mailto:vedantkhanna40@gmail.com" 
                className="w-7 h-7 bg-slate-700 rounded-md flex items-center justify-center hover:bg-accent transition-colors duration-300"
                title="Email"
              >
                <Mail className="w-5 h-5 text-white"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
