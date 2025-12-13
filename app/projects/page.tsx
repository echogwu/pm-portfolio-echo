import Link from "next/link"
import { PreserveScroll } from "@/components/preserve-scroll"
import { RouteMap } from "@/components/route-map" // Import the RouteMap component

export const metadata = {
  title: "Projects | Echo Paulus",
  description:
    "A collection of product management work spanning data platforms, APIs, zero-to-one products, and strategic frameworks.",
}

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
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 015.646 5.646 9.001 9.001 0 0020.354 15.354z"
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 tracking-tight text-balance">Career Journey</h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
          Follow the route map below to explore my evolution from engineering to product leadership—each node represents
          a key milestone in building clarity inside messy systems.
        </p>
      </section>

      {/* Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-8 lg:py-12">
        <blockquote className="border-l-4 border-foreground/20 pl-8 py-4">
          <p className="text-2xl lg:text-3xl font-medium leading-relaxed text-balance mb-8">
            I build clarity inside messy systems.
          </p>
          <div className="space-y-6 text-foreground/90 leading-relaxed">
            <p>
              I'm drawn to problems most people avoid: ambiguous data ecosystems, fragmented workflows, misaligned
              teams, and products held together by assumptions instead of architecture.
            </p>
            <p>
              Across every project — from restaurant allergen data to financial pipelines — my work follows the same
              pattern:
            </p>
            <ul className="space-y-2 ml-6 list-none">
              <li>❶ Go where the complexity actually lives.</li>
              <li>❷ Model the system so everyone can see what's really happening.</li>
              <li>❸ Align the people who depend on that system.</li>
              <li>❹ Build only what matters once the foundation is sound.</li>
            </ul>
            <p className="font-medium">Execution is cheap.</p>
            <p className="italic">Clarity, judgment, and system design are the real leverage.</p>
          </div>
        </blockquote>
      </section>

      {/* Interactive Route Map */}
      <RouteMap />

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-sm text-muted-foreground">© 2025 Product Portfolio. Crafted with care.</div>
        </div>
      </footer>
    </div>
  )
}
