import Link from "next/link"

export type DecisionBlock = {
  title: string
  description: string
  bullets?: string[]
}

export type ProjectDetailLayoutProps = {
  title: string
  subline: string
  tags?: string[]
  heroImage: {
    src: string
    alt: string
  }

  row1: {
    challenge: {
      heading?: string
      bullets: string[]
    }
    role: {
      heading?: string
      bullets: string[]
    }
  }

  row2: {
    throughline: string
    left: DecisionBlock[]
    right: DecisionBlock[]
  }

  row3: {
    outcomes: {
      heading?: string
      bullets: string[]
    }
    learnings: {
      heading?: string
      bullets: string[]
    }
  }
}

function withBasePath(path: string) {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || ""
  if (!path) return base
  if (path.startsWith("http")) return path
  if (path.startsWith(base)) return path
  if (path.startsWith("/")) return `${base}${path}`
  return `${base}/${path}`
}

function DecisionColumn({
  blocks,
}: {
  blocks: DecisionBlock[]
}) {
  return (
    <div className="relative pl-6">
      {/* spine */}
      <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200" aria-hidden="true" />
      <div className="space-y-10">
        {blocks.map((b) => (
          <div key={b.title} className="space-y-2">
            <div className="font-semibold text-foreground">{b.title}</div>
            <div className="text-foreground/90 leading-relaxed">{b.description}</div>
            {b.bullets && b.bullets.length > 0 ? (
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                {b.bullets.map((li) => (
                  <li key={li}>{li}</li>
                ))}
              </ul>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProjectDetailLayout(props: ProjectDetailLayoutProps) {
  const {
    title,
    subline,
    tags = [],
    heroImage,
    row1,
    row2,
    row3,
  } = props

  return (
    <main>
      {/* Header band (hero) */}
      <section className="max-w-6xl mx-auto px-6 lg:px-8 pt-12 pb-12 lg:pt-14 lg:pb-14">
        <div className="mb-8">
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to projects
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:items-stretch">
          <div className="flex flex-col">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-balance">{title}</h1>
            <p className="mt-4 text-xl text-muted-foreground leading-relaxed text-pretty">{subline}</p>

            {tags.length > 0 ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-muted rounded-full text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>

          <div className="md:pl-2">
            <div className="relative overflow-hidden rounded-2xl bg-muted aspect-[4/3] md:aspect-auto md:h-full">
              <img
                src={withBasePath(heroImage.src)}
                alt={heroImage.alt}
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-200" />

      {/* Row 1: Challenge | Role */}
      <section className="bg-neutral-50/50">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="md:pr-10">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                {row1.challenge.heading ?? "Challenge"}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                {row1.challenge.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="md:pl-10 md:border-l md:border-neutral-200">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                {row1.role.heading ?? "Role"}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                {row1.role.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-200" />

      {/* Row 2: Approach & Decisions */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Approach &amp; Decisions</h2>
          <p className="mt-3 text-muted-foreground italic">{row2.throughline}</p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
            <DecisionColumn blocks={row2.left} />
            <DecisionColumn blocks={row2.right} />
          </div>
        </div>
      </section>

      <div className="border-t border-neutral-200" />

      {/* Row 3: Outcomes | Learnings */}
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="md:pr-10">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                {row3.outcomes.heading ?? "Outcomes"}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                {row3.outcomes.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="md:pl-10 md:border-l md:border-neutral-200">
              <h2 className="text-3xl font-bold mb-4 tracking-tight">
                {row3.learnings.heading ?? "Learnings"}
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-foreground/90">
                {row3.learnings.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}


