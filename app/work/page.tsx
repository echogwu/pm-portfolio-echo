import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectsTimeline } from "@/components/projects-timeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Journey",
  description:
    "My work has evolved from engineering foundations, to developer platforms, to owning complex data products—while business training broadened how I think about markets, economics, and strategy.",
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


