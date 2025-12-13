import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackButton } from "@/components/back-button"

export const metadata = {
  title: "Lyft — System Quality Engineer → Developer Experience PM | Echo Paulus",
  description: "Learned when to stop optimizing tools and start optimizing where teams focus.",
}

export default function LyftPage() {
  return (
    <div className="min-h-screen bg-[#fafaf7]">
      <ScrollToTop />

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
            <Link href="#" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Work Samples
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <BackButton />

        <h1 className="text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
          Lyft — System Quality Engineer → Developer Experience PM
        </h1>
        <p className="text-xl text-muted-foreground leading-relaxed mb-8">
          When to stop optimizing for conventional metrics — and start optimizing what actually matters.
        </p>

        <div className="flex flex-wrap gap-2 mb-12">
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Developer Experience
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
            Internal Tools
          </span>
          <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">Simulation</span>
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
        <div className="relative rounded-xl overflow-hidden shadow-2xl bg-muted mb-12">
          <img src="/lyft.gif" alt="Lyft developer experience" className="w-full" />
        </div>

        <div className="prose prose-lg max-w-none space-y-12 text-justify">
          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">The Challenge</h2>
            <p className="text-foreground/90 leading-relaxed">
              Lyft fundamentally changed the driver workflow to surface earnings and destination earlier in the
              experience. This shift touched core pricing, dispatch, and earnings services across regions and ride
              types.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              After launching experiments, the impact was immediate:
            </p>
            <ul className="space-y-2 text-foreground/90 mt-4">
              <li>Weekly SEVs tied to earnings and pricing logic</li>
              <li>Critical bugs that slipped past manual regression suites and UI automation</li>
              <li>
                Issues discovered only through sophisticated exploratory testing, combining logs, metrics, and system
                tools
              </li>
            </ul>
            <p className="text-foreground/90 leading-relaxed mt-6">
              Existing validation approaches were largely optimized for automation coverage of individual components.
              They struggled to surface failures that emerged only when multiple services interacted under real-world
              conditions.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              The challenge was to move beyond maximizing test coverage and instead identify new tools and methods that
              could bridge gaps across services, exposing high-stakes system failures before they reached production.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">My Role</h2>
            <p className="text-muted-foreground italic mb-6">System Quality Engineer → Internal Tool Product Manager</p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              I started as a system quality engineer embedded in driver workflows, where my focus extended beyond test
              execution to shaping quality strategy across teams. As gaps in the existing validation approach became
              clear, my role evolved into owning and productizing the internal simulation tool as the highest-leverage
              solution.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-3 font-medium">
              As a System Quality Engineer, I focused on:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90 mb-6">
              <li>Setting quality strategy for complex, multi-service driver systems</li>
              <li>Creating alignment across teams on where validation effort mattered most</li>
              <li>
                Influencing quality culture by shifting focus from test coverage to failure modes and system behavior
              </li>
              <li>Identifying high-leverage tools and methods to surface earnings- and pricing-related risks</li>
            </ul>

            <p className="text-foreground/90 leading-relaxed mb-3 font-medium">
              As an Internal Tool Product Manager, I focused on expanding usefulness and driving adoption under
              constrained, post-RIF conditions, wearing multiple hats:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90 mb-6">
              <li>
                <strong>Product Manager</strong> — roadmap definition, prioritization, success metrics
              </li>
              <li>
                <strong>Technical Lead</strong> — tool reliability, workflows, instrumentation
              </li>
              <li>
                <strong>Adoption Driver</strong> — documentation, demos, stakeholder enablement
              </li>
              <li>
                <strong>Support Owner</strong> — on-call rotation, user feedback loops
              </li>
            </ul>

            <p className="text-foreground/90 leading-relaxed font-semibold">
              The transition reflected a shift from influencing quality locally to owning a platform that changed how
              teams validated systems company-wide.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Approach / Decisions</h2>
            <p className="text-muted-foreground italic mb-6">
              UI automation → acceptance tests → still not enough → simulation + metrics
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Questioned UI automation efficacy with data</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Pulled six months of Jira bugs and SEVs into a spreadsheet and reviewed each one to assess whether UI
                  automation could have realistically caught it. Found that UI tests would have prevented only a small
                  fraction of high-impact issues.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Identified where automation breaks down</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Most severe failures came from complex, real-world conditions — region-specific logic, ride-type
                  combinations, pricing edge cases — that neither UI nor standard end-to-end tests could reliably cover.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Rebalanced validation strategy</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Shifted effort away from flaky UI tests toward backend end-to-end acceptance tests for deterministic
                  paths, while acknowledging the limits of automation as a whole.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Discovered simulation as the highest leverage</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Through SEV postmortems and metrics reviews, concluded that system-level simulation paired with
                  metrics and alerts was the only reliable way to surface the failures that mattered most.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Productized the solution</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Took ownership of the rider–driver simulation tool, defined a roadmap based on user feedback and usage
                  data, and improved reliability, usability, and adoption across engineering teams.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Key Outcomes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-foreground mb-2">+10%</div>
                <div className="text-sm text-muted-foreground">
                  Reliability and adoption of internal validation tooling
                </div>
              </div>
              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-foreground mb-2">−30%</div>
                <div className="text-sm text-muted-foreground">
                  Support load, reducing on-call noise and engineering interrupts
                </div>
              </div>
              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-foreground mb-2">~$150K</div>
                <div className="text-sm text-muted-foreground">
                  Quarterly savings validated through log and usage analysis
                </div>
              </div>
              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <div className="text-3xl font-bold text-foreground mb-2">Earlier</div>
                <div className="text-sm text-muted-foreground">
                  Failure detection shifted from post-launch to pre-release
                </div>
              </div>
            </div>
            <ul className="space-y-3 text-foreground/90 mt-6">
              <li>
                <strong>Earlier failure detection:</strong> shifted discovery of high-risk issues (pricing, earnings,
                regional logic) from post-launch to pre-release
              </li>
              <li>
                <strong>Prevented recurring SEVs</strong> by introducing metrics, alerts, and simulation checks that
                caught issues automation could not
              </li>
              <li>
                <strong>Shaped quality culture:</strong> moved teams away from "more tests" toward evidence-based
                validation, focusing on failure modes, observability, and system behavior
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">What I Learned</h2>
            <div className="space-y-6">
              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Judgment beats tools</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The hardest part of product work isn't choosing what to build, but deciding what not to invest in. At
                  Lyft, the highest-impact move was not adding more automation, but recognizing where it stopped
                  creating value and redirecting effort to higher-leverage validation.
                </p>
              </div>

              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Leverage comes from understanding the system</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The most important failures didn't live in features or UI flows, but in how systems interacted under
                  real-world conditions. Effective product decisions required reasoning across data, infrastructure, and
                  user behavior — not optimizing any single layer in isolation.
                </p>
              </div>

              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Evidence is the fastest way to influence</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Challenging entrenched practices only worked when decisions were grounded in concrete data (bugs,
                  SEVs, usage metrics). Clear evidence made tradeoffs legible and enabled alignment without authority.
                </p>
              </div>

              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Internal tools need product rigor</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Adoption, reliability, and trust don't happen by accident. Internal platforms only change behavior
                  when they have clear users, workflows, success metrics, and positioning — the same fundamentals as
                  external products.
                </p>
              </div>

              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Prevention is a product outcome</h3>
                <p className="text-foreground/90 leading-relaxed">
                  The most valuable impact often shows up as incidents that never happen. Designing for early detection
                  and confidence at launch protected driver trust and business outcomes, even when the results were
                  invisible.
                </p>
              </div>
            </div>
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
