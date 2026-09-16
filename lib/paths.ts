/**
 * Per-job-application route prefixes.
 *
 * The canonical site renders with no prefix. A job variant renders the same
 * components under `/<jobId>`, so every internal link has to be rewritten or
 * the visitor silently falls out of their variant on the first click.
 *
 * This is separate from Next's `basePath`, which `Link` and `router` already
 * apply on their own.
 */
export type RoutePrefix = string | undefined

/** Segments that already exist at the root, so a job id can never use them. */
export const RESERVED_JOB_IDS = [
  "work",
  "artifacts",
  "work-samples",
  "journey",
  "projects",
  "opengraph-image.png",
  "twitter-image.png",
] as const

export function isReservedJobId(id: string) {
  return (RESERVED_JOB_IDS as readonly string[]).includes(id)
}

export function prefixForJob(jobId?: string): RoutePrefix {
  return jobId ? `/${jobId}` : undefined
}

export function withPrefix(prefix: RoutePrefix, path: string) {
  if (!prefix) return path
  if (path === "/") return `${prefix}/`
  return `${prefix}${path}`
}
