import Link from "next/link"
import { ScrollToTop } from "@/components/scroll-to-top"
import { BackButton } from "@/components/back-button"

export const metadata = {
  title: "IDEO: Design Thinking Challenge | Echo Paulus",
  description: "Practiced divergent→convergent thinking, research synthesis, rapid prototyping, and iteration.",
}

export default function IDEOPage() {
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
            <Link href="/work-samples" className="text-sm font-medium hover:text-foreground/70 transition-colors">
              Work Samples
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <BackButton />

            <h1 className="mt-10 text-4xl lg:text-5xl font-bold mb-6 tracking-tight text-balance">
              IDEO: Design Thinking Challenge
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Understanding humans before designing systems
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Design Thinking
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                User Research
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Prototyping
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Synthesis
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Divergent → Convergent
              </span>
              <span className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground">
                Storytelling
              </span>
            </div>
          </div>

          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-muted">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/design-thinking.gif`}
              alt="IDEO design thinking prototype walkthrough"
              className="w-full"
            />
          </div>
        </div>

        <div className="rounded-3xl border border-border bg-card px-8 py-10 shadow-[0_18px_50px_rgba(2,6,23,0.06),0_0_0_1px_rgba(15,23,42,0.04)] mt-12">
          <div className="space-y-12 justify-text">
            <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">The Challenge</h2>
            <p className="text-foreground/90 leading-relaxed">
              Loneliness is widely discussed, but poorly understood in practice. Most products treat it as a social
              graph problem (more friends, more messages), ignoring how people actually experience connection:
              inconsistently, emotionally, and often indirectly.
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              The challenge was not to design a social app — it was to understand how people recognize, lose, and
              rebuild connection in real life, especially during life transitions (moving cities, starting new jobs,
              changing routines).
            </p>
            <p className="text-foreground/90 leading-relaxed mt-4">
              This project intentionally constrained us from jumping to solutions. The goal was insight quality, not
              feature output.
            </p>
            </div>

            <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">My Role</h2>
            <p className="text-muted-foreground italic mb-6">Project Lead — Research, Synthesis, and Narrative</p>
            <p className="text-foreground/90 leading-relaxed mb-6">
              I led the end-to-end execution of the project, from discovery through final presentation.
            </p>

            <p className="text-foreground/90 leading-relaxed mb-3 font-medium">Key responsibilities and actions:</p>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90 mb-6">
              <li>Set the project timeline and working cadence, balancing research depth with delivery constraints</li>
              <li>Planned and conducted primary user interviews, shaping prompts to elicit stories rather than opinions</li>
              <li>
                Led sensemaking and synthesis sessions, clustering qualitative signals into actionable insights
              </li>
              <li>Sketched early concepts to test shared understanding before committing to direction</li>
              <li>
                Owned the final narrative and deck, ensuring insights translated clearly into product intent
              </li>
              <li>
                Presented the work to IDEO judges, articulating tradeoffs, insights, and design rationale
              </li>
              <li>
                Handled team logistics and cohesion, including visual identity and team swag, to keep momentum and shared
                ownership high
              </li>
            </ul>

            <p className="text-foreground/90 leading-relaxed font-semibold">
              This role required switching constantly between facilitation, analysis, synthesis, and communication —
              keeping the team aligned while preserving space for insight to emerge.
            </p>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Approach / Decisions</h2>
            <p className="text-muted-foreground italic mb-6">
              Observe → synthesize → frame → diverge → converge → prototype → test → iterate
            </p>
            <div className="space-y-10">
              <div>
                <h3 className="text-xl font-semibold mb-3">Led qualitative discovery under ambiguity</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    Conducted and synthesized <strong>deep interviews</strong> focused on lived experiences, not
                    opinions:
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>When people felt connected vs invisible</li>
                      <li>How they shared joy and distress</li>
                      <li>The role of routines, physical presence, and emotional timing</li>
                    </ul>
                  </li>
                  <li>
                    Used open-ended prompts (<em>“Tell me about the last time…”</em>) to surface <strong>stories</strong>
                    , not abstractions
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Treated humans as the system</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    Mapped <strong>emotional signals</strong> as indirect inputs (withdrawal, oversharing, avoidance,
                    routine-seeking)
                  </li>
                  <li>Explicitly avoided reducing behavior into clean metrics too early</li>
                  <li>
                    Identified loneliness as a <em>perspective</em>, not a constant state
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Synthesized insight before ideation</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    Clustered findings into three core insights:
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>
                        <strong>Loneliness is contextual and episodic</strong>, not binary
                      </li>
                      <li>
                        <strong>Consistency matters more than intensity</strong> in maintaining relationships
                      </li>
                      <li>
                        <strong>Purposeful shared activity</strong> creates stronger bonds than passive interaction
                      </li>
                    </ul>
                  </li>
                  <li>
                    Used these insights to define <em>what should exist</em>, not just what could be built
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Prototyped to test understanding, not scale</h3>
                <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                  <li>
                    Built low-fidelity flows to validate whether insights resonated:
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Emotional check-ins as reflection, not broadcasting</li>
                      <li>Inner-circle reminders based on neglect patterns, not engagement scores</li>
                      <li>
                        Community activities framed as <em>larger-than-self</em> participation
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
            </div>

            <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Key Outcomes</h2>
            <ul className="space-y-6 text-foreground/90 mt-6">
              <li>
                <strong>Clear articulation of the real problem</strong>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    Reframed loneliness from “lack of people” to misalignment between emotional state, routine, and
                    connection
                  </li>
                  <li>Identified why social media amplifies loneliness rather than alleviating it</li>
                </ul>
              </li>
              <li>
                <strong>Coherent product concept grounded in insight</strong>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>
                    Designed <strong>Lonely Hearts Club</strong>: a platform centered on:
                    <ul className="list-disc pl-6 space-y-2 mt-2">
                      <li>Emotional awareness</li>
                      <li>Intentional reconnection</li>
                      <li>Purpose-driven community engagement</li>
                    </ul>
                  </li>
                  <li>Each surface mapped directly back to a validated human behavior pattern</li>
                </ul>
              </li>
              <li>
                <strong>Demonstrated disciplined product judgment</strong>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Resisted feature bloat</li>
                  <li>Avoided gamification, social validation loops, and artificial engagement metrics</li>
                  <li>Prioritized psychological safety and user dignity in design choices</li>
                </ul>
              </li>
            </ul>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">What I Learned</h2>
            <div className="space-y-6">
              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Human behavior is the most important—and least instrumented—part of any system
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  Before you can design metrics, workflows, or platforms, you need a grounded understanding of how
                  people actually think, feel, and act in context.
                </p>
              </div>

              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">Clarity comes from synthesis, not data volume</h3>
                <p className="text-foreground/90 leading-relaxed">
                  Insight is earned by sitting with ambiguity long enough to form judgment—an approach I later applied
                  to data architecture, instrumentation, and product strategy.
                </p>
              </div>

              <div className="bg-white/60 border border-border/50 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-2">
                  Products fail when they encode assumptions instead of understanding
                </h3>
                <p className="text-foreground/90 leading-relaxed">
                  This experience sharpened my ability to translate human reality into systems that guide better
                  decisions rather than amplify misalignment.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Evidence Strip (Artifacts)</h2>
            <ul className="list-disc pl-6 space-y-2 text-foreground/90">
              <li>Interview notes and qualitative synthesis</li>
              <li>Insight clustering and guiding principles</li>
              <li>Low-fidelity wireframes (emotional check-ins, inner circle, community flows)</li>
              <li>End-to-end prototype walkthrough deck</li>
            </ul>
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
