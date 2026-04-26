import StickyScrollProcess from "./StickyScrollProcess"

const steps = [
  {
    step: "01",
    title: "Sign Agreement",
    body: "Quick onboarding — share your MC number, equipment type, preferred lanes. Done in minutes.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=1000&q=80&fit=crop",
  },
  {
    step: "02",
    title: "Share Truck Details",
    body: "Tell us your availability, home base, and what you want to haul. We learn your business.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=1400&h=1000&q=80&fit=crop",
  },
  {
    step: "03",
    title: "We Book the Loads",
    body: "Your dedicated dispatcher goes to work. We find, negotiate, and confirm profitable freight for you.",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1400&h=1000&q=80&fit=crop",
  },
  {
    step: "04",
    title: "You Drive. We Handle the Rest.",
    body: "Updates, paperwork, broker communication — all on us. You focus on the road and getting paid.",
    image: "https://images.unsplash.com/photo-1464746133101-a2c3f88e0dd9?w=1400&h=1000&q=80&fit=crop",
  },
]

export default function HowItWorks() {
  return (
    <StickyScrollProcess
      id="how-it-works"
      eyebrow="The Process"
      title="Simple Process."
      titleHighlight="Real Results."
      subtitle="You don't need to figure everything out. Once you join Traacker, we take it from here."
      steps={steps}
      ctaPrimary={{ label: "Start the Process", href: "#contact" }}
      ctaSecondary={{ label: "See Pricing", href: "/pricing" }}
    />
  )
}
