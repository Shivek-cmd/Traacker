import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { getService, getAllSlugs } from "@/lib/services"
import PageHero from "@/components/layout/PageHero"
import ServiceDetail from "@/components/sections/ServiceDetail"
import CTA from "@/components/sections/CTA"

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getService(slug)
  if (!service) return {}
  return {
    title: service.meta.title,
    description: service.meta.description,
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = getService(slug)
  if (!service) notFound()

  return (
    <>
      <PageHero
        eyebrow="Dispatch Services"
        title={service.title}
        titleHighlight=""
        subtitle={service.longDescription}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
      />
      <ServiceDetail service={service} />
      <CTA
        eyebrow="Ready to Get Moving?"
        headline="Your Truck Shouldn't Sit Idle."
        headlineHighlight="Let's Change That."
        subtext="Get a dedicated dispatcher working for you from day one. No upfront cost, no long-term commitment."
        primaryLabel="Start Dispatching Today"
        primaryHref="/contact-us"
        secondaryLabel="See All Services"
        secondaryHref="/services"
      />
    </>
  )
}
