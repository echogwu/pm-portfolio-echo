import Link from "next/link"
import type { Metadata } from "next"
import { PreserveScroll } from "@/components/preserve-scroll"
import { ProjectsTimeline } from "@/components/projects-timeline"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Projects | Echo Paulus",
  description:
    "A collection of product management work spanning data platforms, APIs, zero-to-one products, and strategic frameworks.",
  pathname: "/projects",
  type: "website",
})

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <PreserveScroll />

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="text-lg font-semibold tracking-tight hover:text-foreground/70 transition-colors">
            PM Portfolio
          </Link>
          <div className="flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Home
            </Link>
            <Link href="/projects" className="text-sm font-medium text-foreground">
              Projects
            </Link>
            <Link href="/work-samples" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Work Samples
            </Link>
          </div>
        </div>
      </nav>

      {/* Timeline */}
      <ProjectsTimeline />

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-sm text-muted-foreground">© 2025 Product Portfolio. Crafted with care.</div>
        </div>
      </footer>
    </div>
  )
}
