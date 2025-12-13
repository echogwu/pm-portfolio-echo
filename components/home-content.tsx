import Link from "next/link"
import { Github, Mail, MapPin, Linkedin } from "lucide-react"
// import { Button } from "@/components/ui/button"

export default function HomeContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="text-lg font-semibold tracking-tight">PM Portfolio</div>
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

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
                AI Ships Features.
                <br />I Ship Direction.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                Data & Platform Product Manager who builds the systems that make business performance legible. Owned
                data architecture, attribution, and activation platforms behind mission-critical growth engines and
                consumer workflows. Founder experience diagnosing ecosystem-level data lineage failures.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="https://github.com/echogwu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
                Github
              </Link>
              <Link
                href="mailto:echopaulus@berkeley.edu"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </Link>
              <Link
                href="https://www.linkedin.com/in/echo-paulus/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Link>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="flex flex-col items-center gap-3">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10" />
                <img
                  src="/profile-avatar.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover border-4 border-border shadow-xl"
                />
              </div>
              <div className="text-center">
                <h2 className="text-2xl font-bold">Echo Paulus</h2>
                <p className="text-muted-foreground font-medium">Data Product Manager</p>
                <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground mt-1">
                  <MapPin className="w-4 h-4" />
                  San Francisco Bay Area, CA
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Philosophy Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 border-t border-border">
        <div className="max-w-4xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">My Data Philosophy</h2>

          <div className="flex flex-col gap-6 text-foreground leading-relaxed">
            <p className="text-lg font-medium">Modern products are data systems first.</p>

            <p>
              Every UI, workflow, and activation layer is downstream of whether the right data flows to the right place
              at the right time. When events are inconsistent, late, or incorrectly modeled, the product breaks — even
              if the interface is beautiful.
            </p>

            <p>
              My work centers on designing clean event schemas, reliable ingestion pipelines, and clear data contracts
              between upstream and downstream systems so that product behavior becomes predictable and scalable. Good
              products are built on good data; good data comes from well-structured events, strong lineage, and systems
              that enforce integrity by design.
            </p>

            <div className="border-l-4 border-primary pl-6 my-4">
              <p className="font-medium">My experience at Dishclosure and Gainbridge sharpened this perspective:</p>
              <ul className="mt-4 space-y-3 list-none">
                <li>
                  <span className="font-semibold">At Dishclosure,</span> I learned that no amount of UX innovation can
                  compensate for missing or unreliable upstream data.
                </li>
                <li>
                  <span className="font-semibold">At Gainbridge,</span> I saw how clean event modeling, dependency
                  mapping, and taxonomy governance unblock entire workflows and align engineering, product, and
                  marketing around a shared system of truth.
                </li>
              </ul>
            </div>

            <p className="text-lg font-medium">This philosophy shapes how I build platforms:</p>

            <p className="text-xl font-semibold text-primary">
              Start with the data model, enforce the contracts, and let every feature flow from there.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24 border-t border-border">
        <div className="grid md:grid-cols-3 gap-12">
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">What I Do</h3>
            <p className="text-foreground font-medium">Define strategy, ship products</p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Data Platforms</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Unified foundations for analytics, attribution, and insights that scale.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              APIs & Integrations
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Bridge ambiguous requirements with reliable systems that developers love.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <h2 className="text-3xl lg:text-4xl font-bold mb-16 tracking-tight">Featured Projects</h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-muted aspect-video">
              <img src="/gainbridge.gif" alt="Gainbridge project" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold leading-tight">Gainbridge — Product Manager, Data and Measurement</h3>
            <p className="text-foreground leading-relaxed">
              Built the instrumentation layer that made performance trustworthy — before optimization.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Data Architecture
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Measurement Strategy
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Event Taxonomy
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Identity Resolution
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Attribution Systems
              </span>
            </div>
            <Link
              href="/projects/gainbridge-data-architecture"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group"
            >
              Read case study
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold leading-tight">Dishclosure — Founder and Product Lead</h3>
            <p className="text-foreground leading-relaxed">
              An operator-first investigation that revealed the real constraint wasn't UX or adoption, but broken
              upstream data lineage.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Zero-to-One
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Data Lineage
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Schema Design
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Ecosystem Diagnosis
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Go/No-Go Decision
              </span>
            </div>
            <Link
              href="/projects/dishclosure-founder-mode"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group"
            >
              Read case study
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-muted aspect-video">
              <img
                src="/dishclosure.gif"
                alt="Dishclosure project - Collaborative ingredient exploration and allergen discovery"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative rounded-xl overflow-hidden shadow-lg bg-muted aspect-video">
              <img src="/lyft.gif" alt="Lyft project" className="w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold leading-tight">
              Lyft — System Quality Engineer → Developer Experience PM
            </h3>
            <p className="text-foreground leading-relaxed">
              When to stop optimizing for conventional metrics — and start optimizing what actually matters.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Developer Experience
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Internal Tools
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Simulation
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Systems Thinking
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Validation Strategy
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Platform Reliability
              </span>
            </div>
            <Link
              href="/projects/lyft-developer-experience-pm"
              className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group"
            >
              Read case study
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
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
