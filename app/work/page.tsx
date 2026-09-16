import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectsTimeline } from "@/components/projects-timeline"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { DEFAULT_WORK } from "@/lib/work-data"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: DEFAULT_WORK.title,
  description: DEFAULT_WORK.description,
  pathname: "/work",
  type: "website",
})

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <PreserveScroll />

      {/* Navigation */}
      <SiteNav active="work" />

      {/* Timeline */}
      <ProjectsTimeline intro={DEFAULT_WORK.intro} itemIds={DEFAULT_WORK.itemIds} />

      {/* Footer */}
      <SiteFooter />
    </div>
  )
}
