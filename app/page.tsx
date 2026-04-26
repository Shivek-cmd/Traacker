import Hero from "@/components/sections/Hero"
import Stats from "@/components/sections/Stats"
import Services from "@/components/sections/Services"
import BeforeAfter from "@/components/sections/BeforeAfter"
import HowItWorks from "@/components/sections/HowItWorks"
import WhyUs from "@/components/sections/WhyUs"
import OurStory from "@/components/sections/OurStory"
import Testimonials from "@/components/sections/Testimonials"
import CTA from "@/components/sections/CTA"

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      {/* <BeforeAfter /> */}
      <HowItWorks />
      <WhyUs />
      <OurStory showLink />
      <Testimonials />
      <CTA />
    </>
  )
}
