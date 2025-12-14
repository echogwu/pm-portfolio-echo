import Link from "next/link"
import { BackButton } from "@/components/back-button"

export const metadata = {
  title: "MBA Decision, Analytics, and Strategy Portfolio | Echo Paulus",
  description:
    "Developed analytical frameworks, financial models, and go-to-market strategies under imperfect information.",
}

export default function MBAWorkPage() {
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
        <BackButton />

        <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
          MBA Decision, Analytics, and Strategy Portfolio
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          Developed analytical frameworks, financial models, and go-to-market strategies under imperfect information.
          From M&A to strategy to marketing analytics, built structured decision models, segmentation logic, and
          value-creation theses that clarified where to invest and how to measure success.
        </p>
        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">Analytics</span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Measurement Strategy
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Financial Modeling
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Competitive Analysis
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Decision Systems
          </span>
        </div>

        {/* Case Study Content - Placeholder */}
        <div className="rounded-3xl border border-border bg-card px-8 py-10 shadow-[0_18px_50px_rgba(2,6,23,0.06),0_0_0_1px_rgba(15,23,42,0.04)] mt-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Coming Soon</h2>
            <p className="text-foreground leading-relaxed justify-text">
              This portfolio showcasing MBA-level analytical work is currently being developed. Check back soon for
              detailed case studies and frameworks.
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
