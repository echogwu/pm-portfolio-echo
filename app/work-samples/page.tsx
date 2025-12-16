import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"
import { WorkSamplesGrid } from "@/components/work-samples-grid"
import { SiteNav } from "@/components/site-nav"

export const metadata: Metadata = buildMetadata({
  title: "Work Samples",
  description: "Sample work artifacts, documents, and deliverables from product management projects.",
  pathname: "/work-samples",
  type: "website",
})

export default function WorkSamplesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <SiteNav active="work-samples" />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Work Samples</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          A collection of work artifacts, documents, and deliverables showcasing product thinking, technical writing,
          and strategic frameworks.
        </p>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <div className="flex flex-col gap-2 mb-10">
          <h2 className="text-3xl font-bold tracking-tight">Dishclosure artifacts</h2>
          <p className="text-muted-foreground max-w-3xl">
            Five representative artifacts from the Dishclosure founder build — click any card to preview.
          </p>
        </div>

        <WorkSamplesGrid />
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-24">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-sm text-muted-foreground">© 2025 Product Portfolio. Crafted with care.</div>
        </div>
      </footer>
    </div>
  )
}
