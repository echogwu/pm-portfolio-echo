import Link from "next/link"
import type { Metadata } from "next"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Work Samples | Echo Paulus",
  description: "Sample work artifacts, documents, and deliverables from product management projects.",
  pathname: "/work-samples",
  type: "website",
})

export default function WorkSamplesPage() {
  return (
    <div className="min-h-screen bg-background">
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
            <Link href="/projects" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Projects
            </Link>
            <Link href="/work-samples" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Work Samples
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">Work Samples</h1>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
          A collection of work artifacts, documents, and deliverables showcasing product thinking, technical writing,
          and strategic frameworks.
        </p>
      </section>

      {/* Content - Placeholder */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pb-24">
        <div className="prose prose-lg max-w-none">
          <p className="text-foreground leading-relaxed">
            Work samples are currently being curated. Check back soon for detailed artifacts including PRDs, technical
            specs, data models, and strategic frameworks.
          </p>
        </div>
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
