import { Hero } from "@/components/sections/hero"
import { ValueProposition } from "@/components/sections/value-proposition"
import { Features } from "@/components/sections/features"
import { HowItWorks } from "@/components/sections/how-it-works"
import { Pricing } from "@/components/sections/pricing"
import { FinalCta } from "@/components/sections/final-cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <ValueProposition />
      <Features />
      <HowItWorks />
      <Pricing />
      <FinalCta />
      <Footer />
    </>
  )
}
