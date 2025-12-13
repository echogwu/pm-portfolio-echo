import Link from "next/link"
import { Github, Mail, MapPin, Linkedin } from "lucide-react"
// import { Button } from "@/components/ui/button"

export default function HomeContent() {
  const featuredProjects = [
    {
      title: "Gainbridge: Product Manager, Data and Measurement",
      description: "Built the instrumentation layer that made performance trustworthy — before optimization.",
      href: "/projects/gainbridge-data-architecture",
      imageSrc: "/gainbridge.gif",
      imageAlt: "Gainbridge project",
      tags: ["Data Architecture", "Measurement Strategy", "Event Taxonomy", "Identity Resolution", "Attribution Systems"],
    },
    {
      title: "Dishclosure: Founder and Product Lead",
      description:
        "An operator-first investigation that revealed the real constraint wasn't UX or adoption, but broken upstream data lineage.",
      href: "/projects/dishclosure-founder-mode",
      imageSrc: "/dishclosure.gif",
      imageAlt: "Dishclosure project - Collaborative ingredient exploration and allergen discovery",
      tags: ["Zero-to-One", "Data Lineage", "Schema Design", "Ecosystem Diagnosis", "Go/No-Go Decision"],
    },
    {
      title: "Lyft: Quality Engineer → Developer Experience PM",
      description: "When to stop optimizing for conventional metrics — and start optimizing what actually matters.",
      href: "/projects/lyft-developer-experience-pm",
      imageSrc: "/lyft.gif",
      imageAlt: "Lyft project",
      tags: [
        "Developer Experience",
        "Internal Tools",
        "Simulation",
        "Systems Thinking",
        "Validation Strategy",
        "Platform Reliability",
      ],
    },
  ] as const

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
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-balance">
                AI Ships Features.
                <br />I Ship Direction.
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md justify-text">
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
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-16 border-t border-border">
        <div className="w-full">
          <h2 className="text-3xl lg:text-4xl font-bold mb-8 tracking-tight">My Data Philosophy</h2>

          <div className="flex flex-col gap-6 text-foreground leading-relaxed justify-text">
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

      {/* Featured Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex items-end justify-between gap-6 mb-10 lg:mb-12">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="text-muted-foreground mt-2 max-w-2xl justify-text">
              A few representative case studies. Each one focuses on system clarity: definitions, contracts, and
              decisions that scale.
            </p>
          </div>
          <Link
            href="/projects"
            className="hidden sm:inline-flex text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
          >
            View all →
          </Link>
        </div>

        <div className="space-y-10 lg:space-y-14">
          {featuredProjects.map((project, idx) => {
            const isReversed = idx % 2 === 1
            return (
              <div
                key={project.href}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
              >
                <div className={isReversed ? "lg:order-2" : undefined}>
                  <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-muted/40 shadow-sm aspect-video">
                    <img
                      src={project.imageSrc}
                      alt={project.imageAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                <div className={isReversed ? "lg:order-1" : undefined}>
                  <div className="flex flex-col gap-5">
                    <h3 className="text-2xl font-bold leading-tight text-balance">{project.title}</h3>
                    <p className="text-foreground/90 leading-relaxed justify-text">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={project.href}
                      className="text-blue-600 hover:text-blue-700 font-medium text-sm inline-flex items-center gap-1 group w-fit"
                    >
                      Read case study
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })}

          <div className="sm:hidden pt-2">
            <Link href="/projects" className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
              View all →
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
          <div className="text-sm text-muted-foreground">© 2025 Product Portfolio. Crafted with care.</div>
        </div>
      </footer>
    </div>
  )
}
