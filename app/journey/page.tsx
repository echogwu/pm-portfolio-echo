import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectsTimeline } from "@/components/projects-timeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Journey",
  description:
    "A collection of product management work spanning data platforms, APIs, zero-to-one products, and strategic frameworks.",
  pathname: "/journey",
  type: "website",
})

export default function JourneyPage() {
  return (
    <div className="min-h-screen bg-background">
      <PreserveScroll />

      {/* Navigation */}
      <SiteNav active="journey" />

      {/* Timeline */}
      <ProjectsTimeline />

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}


