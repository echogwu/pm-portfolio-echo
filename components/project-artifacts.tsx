import Link from "next/link"
import { ARTIFACTS } from "@/lib/artifacts"

export function ProjectArtifacts({
  projectHref,
  projectLabel,
}: {
  projectHref: string
  projectLabel: string
}) {
  const items = ARTIFACTS.filter((s) => s.projectHref === projectHref)
  if (items.length === 0) return null

  return (
    <>
      <div className="border-t border-neutral-200" />
      <section>
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 lg:py-14">
          <div className="flex items-end justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">Artifacts</h2>
              <p className="text-muted-foreground">
                Selected deliverables from this project. Each opens in the Artifacts gallery.
              </p>
            </div>
            <Link
              href={{ pathname: "/artifacts", query: { project: projectLabel } }}
              className="shrink-0 inline-flex items-center justify-center rounded-lg bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground shadow-sm hover:bg-primary/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              View all ↗
            </Link>
          </div>

          <ul className="mt-8 divide-y divide-border rounded-xl border border-border bg-background">
            {items.map((a) => (
              <li key={a.id} className="flex items-center justify-between gap-6 p-4">
                <div className="min-w-0">
                  <div className="font-semibold text-foreground truncate">{a.headline}</div>
                  <div className="mt-1 text-sm text-muted-foreground line-clamp-2">{a.subline}</div>
                </div>
                <Link
                  href={{ pathname: "/artifacts", query: { project: projectLabel, artifact: a.id } }}
                  className="shrink-0 text-sm font-semibold text-foreground/80 hover:text-foreground transition-colors"
                >
                  Open ↗
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}


