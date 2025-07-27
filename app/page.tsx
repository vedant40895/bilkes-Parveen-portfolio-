import { HeroSection } from "@/components/hero-section"
import { IntroSection } from "@/components/intro-section"
import { StatsSection } from "@/components/stats-section"
import { ImageSlider } from "@/components/image-slider"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <IntroSection />
      <StatsSection />
      <ImageSlider />
      <CTASection />
    </div>
  )
}
