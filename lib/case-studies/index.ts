import { caseStudy as dishclosureFounderMode } from "@/lib/case-studies/dishclosure-founder-mode"
import { caseStudy as engineeringFoundation } from "@/lib/case-studies/engineering-foundation"
import { caseStudy as gainbridgeDataArchitecture } from "@/lib/case-studies/gainbridge-data-architecture"
import { caseStudy as ideoDesignThinking } from "@/lib/case-studies/ideo-design-thinking"
import { caseStudy as klaviyoRealTimeDataStrategy } from "@/lib/case-studies/klaviyo-real-time-data-strategy"
import { caseStudy as lyftDeveloperExperiencePm } from "@/lib/case-studies/lyft-developer-experience-pm"
import { caseStudy as mbaStrategicFrameworks } from "@/lib/case-studies/mba-strategic-frameworks"
import type { CaseStudyContent, CaseStudyOverride } from "@/lib/case-studies/types"

export type { CaseStudyContent, CaseStudyLayout, CaseStudyMeta, CaseStudyOverride } from "@/lib/case-studies/types"

export const CASE_STUDIES = {
  "dishclosure-founder-mode": dishclosureFounderMode,
  "engineering-foundation": engineeringFoundation,
  "gainbridge-data-architecture": gainbridgeDataArchitecture,
  "ideo-design-thinking": ideoDesignThinking,
  "klaviyo-real-time-data-strategy": klaviyoRealTimeDataStrategy,
  "lyft-developer-experience-pm": lyftDeveloperExperiencePm,
  "mba-strategic-frameworks": mbaStrategicFrameworks,
} satisfies Record<string, CaseStudyContent>

export type CaseStudySlug = keyof typeof CASE_STUDIES

export const CASE_STUDY_SLUGS = Object.keys(CASE_STUDIES) as CaseStudySlug[]

export function isCaseStudySlug(slug: string): slug is CaseStudySlug {
  return slug in CASE_STUDIES
}

/**
 * Applies a job variant's partial override on top of the default case study.
 * Anything the variant leaves out is inherited, so a variant only states what
 * it actually changes.
 */
export function mergeCaseStudy(base: CaseStudyContent, override?: CaseStudyOverride): CaseStudyContent {
  if (!override) return base

  const layout = override.layout
  return {
    scroll: base.scroll,
    footer: base.footer,
    meta: { ...base.meta, ...override.meta },
    layout: {
      ...base.layout,
      ...layout,
      row1: { ...base.layout.row1, ...layout?.row1 },
      row2: { ...base.layout.row2, ...layout?.row2 },
      row3: { ...base.layout.row3, ...layout?.row3 },
    },
  }
}
