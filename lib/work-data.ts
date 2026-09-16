/**
 * Work index copy a job variant can retune. Leaving `intro` unset keeps the
 * default decorated paragraph in `components/projects-timeline.tsx`; leaving
 * `itemIds` unset shows the full timeline in its default order.
 */

/** Underline colors available to an emphasized intro phrase. */
export type IntroAccent = "lime" | "sky" | "emerald" | "amber" | "pink" | "violet"

/** A run of intro copy: plain text, or a phrase carrying a colored underline. */
export type IntroSegment = string | { text: string; accent: IntroAccent }

/**
 * Copy-only override for one timeline card, keyed by item id. Year, logo,
 * destination, and accent color are structural and stay with the item.
 */
export type TimelineCopy = {
  /** The company and title line. */
  companyRole?: string
  /** The card headline. */
  label?: string
  /** The line under the headline. */
  microCaption?: string
  tags?: readonly string[]
}

export type WorkData = {
  title: string
  description: string
  intro?: string | readonly IntroSegment[]
  itemIds?: readonly string[]
  items?: Readonly<Record<string, TimelineCopy>>
}

export const DEFAULT_WORK: WorkData = {
  title: "Work",
  description:
    "My work has evolved from engineering foundations, to developer platforms, to owning complex data products—while business training broadened how I think about markets, economics, and strategy.",
}
