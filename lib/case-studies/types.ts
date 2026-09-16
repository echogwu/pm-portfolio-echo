import type { ProjectDetailLayoutProps } from "@/components/project-detail-layout"

/** Layout props minus the ones the route derives rather than the content. */
export type CaseStudyLayout = Omit<ProjectDetailLayoutProps, "prefix">

export type CaseStudyMeta = {
  title: string
  description: string
  ogImagePath?: string
  ogImageAlt?: string
}

export type CaseStudyContent = {
  /**
   * Which scroll helper the route mounts. The original pages disagreed on this,
   * so it stays per-case-study rather than being normalized.
   */
  scroll: "preserve" | "top"
  /**
   * Whether the page ends with the minimal copyright footer. Also inconsistent
   * across the original pages (4 of 7 had it), and preserved as-is here.
   */
  footer: boolean
  meta: CaseStudyMeta
  layout: CaseStudyLayout
}

/**
 * A job variant's partial override. Merging is shallow at the top level and one
 * level into row1/row2/row3; arrays such as `row2.left` are replaced wholesale,
 * since element-wise array merges are where this kind of system gets confusing.
 */
export type CaseStudyOverride = {
  meta?: Partial<CaseStudyMeta>
  layout?: {
    title?: CaseStudyLayout["title"]
    subline?: CaseStudyLayout["subline"]
    tags?: CaseStudyLayout["tags"]
    heroImage?: CaseStudyLayout["heroImage"]
    artifacts?: CaseStudyLayout["artifacts"]
    row1?: Partial<CaseStudyLayout["row1"]>
    row2?: Partial<CaseStudyLayout["row2"]>
    row3?: Partial<CaseStudyLayout["row3"]>
  }
}
