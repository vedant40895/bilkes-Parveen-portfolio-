import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-royal-blue to-black">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Image?</h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Whether you're looking for professional image coaching, seeking a dynamic speaker for your event, or
          interested in brand collaborations, let's create something extraordinary together.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-rose-gold hover:bg-rose-gold/90 text-white text-lg px-8 py-3">
            <Link href="/services">Explore Services</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-black text-lg px-8 py-3 bg-transparent"
          >
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
