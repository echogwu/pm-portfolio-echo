import Link from "next/link"
import { BackButton } from "@/components/back-button"

export const metadata = {
  title: "IDEO Challenge — Trusting the Design Process | Echo Paulus",
  description: "Practiced rapid ideation, divergent→convergent thinking, and human-centered problem reframing.",
}

export default function IDEOPage() {
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
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <BackButton />

        <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
          IDEO Challenge — Trusting the Design Process
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Practiced rapid ideation, divergent→convergent thinking, and human-centered problem reframing. Followed the
          IDEO methodology end-to-end: insight extraction, experience mapping, prototyping, and testing — strengthening
          your ability to solve ambiguous problems creatively, not just analytically.
        </p>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Design Thinking
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            User Research
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">Prototyping</span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Creativity Under Ambiguity
          </span>
        </div>

        {/* Case Study Content - Placeholder */}
        <div className="prose prose-lg max-w-none space-y-8">
          <div>
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-foreground leading-relaxed">
              This case study is currently being developed. Check back soon for detailed insights into the IDEO design
              thinking process and learnings.
            </p>
          </div>
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
