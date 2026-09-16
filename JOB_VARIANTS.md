# Job variants: a tailored site per application

A **job variant** is a tailored copy of the portfolio served at `/<jobId>`, so you can
reframe the site for one application without touching the real site.

```text
echo-paulus.com/                 canonical site (never changes when you add a variant)
echo-paulus.com/ljqme6/          variant homepage
echo-paulus.com/ljqme6/work/     variant work index
echo-paulus.com/ljqme6/work/<slug>/   variant case study
echo-paulus.com/ljqme6/artifacts/     artifacts (shared with canonical)
```

**Everything you don't override is inherited.** A variant states only what it changes, so
adding one is usually 20 lines of copy, not a new set of pages. All the copy for every
variant lives in one file: `lib/job-variants.ts`.

> **Before you start:** variant pages are public static HTML on the live domain. They are
> `noindex`ed so search engines skip them, but anyone who guesses or is forwarded the URL
> can read the page. Keep ids opaque (never `stripe` or `acme-2026`), never put anything
> confidential in them, and delete the variant when the application closes.

---

## Step 1 — Get a job id

Six lowercase alphanumeric characters. Run this:

```bash
LC_ALL=C tr -dc 'a-z0-9' < /dev/urandom | head -c 6; echo
```

Rules the build enforces for you (it fails loudly if you break one):

- Lowercase letters, digits, and dashes only.
- Not already used by another variant.
- Not a real route. Reserved: `work`, `artifacts`, `work-samples`, `journey`, `projects`,
  `opengraph-image.png`, `twitter-image.png` (see `RESERVED_JOB_IDS` in `lib/paths.ts`).

Keep a note of which id went to which company — `note` is for exactly that and is never rendered.

---

## Step 2 — Add the variant

Open `lib/job-variants.ts` and add an entry to `JOB_VARIANTS`:

```ts
{
  id: "ljqme6",
  note: "Acme, staff PM — platform economics framing.",
},
```

That alone gives you a complete working variant at `/ljqme6` that is identical to the
canonical site. Now override only what should differ.

---

## Step 3 — Customize each page

### How overriding works

This is the one rule worth internalizing:

- **Top-level keys merge.** Setting `home` leaves `work` and `caseStudies` inherited.
- **Nested objects replace wholesale.** If you set `home.howIWork`, you must supply the
  whole section — `heading`, `steps`, and all. This is also how you *remove* something:
  omit `howIWork.quote` and no quote renders.
- **Arrays replace wholesale.** Set `featuredProjects` and you define the full list, in order.

### 3a. Homepage — the `home` key

Defaults and the full field list live in `lib/home-data.ts`.

| Field | What it controls |
| --- | --- |
| `meta` | `<title>` and meta description (defaults to the hero copy) |
| `eyebrow` | Small label above the headline (rendered uppercase) |
| `headline` | The `<h1>` |
| `subhead` | First hero paragraph |
| `supporting` | Optional second hero paragraph |
| `secondaryCta` | `{ label, href }` — e.g. a resume link |
| `profileTagline` | Role line under your name on the avatar card |
| `featured` | `{ heading, intro }` for the Featured Projects section |
| `featuredProjects` | The project cards, in order; each takes `title`, `description`, optional `outcome`, `href`, `imageSrc`, `imageAlt`, `tags` |
| `howIWork` | `{ heading, headingAccent, intro, steps, quote }`; each step is `{ title, copy }` or `{ title, bullets }` |
| `background` | Optional `{ heading, body, capabilities }` section |
| `contact` | Optional `{ heading, copy }` closing section |

Notes:

- `featuredProjects[].href` is the **canonical** path (`/work/slug`). The variant prefix is
  added at render time — never hardcode `/ljqme6/...`.
- Step number, accent color, and above/below placement in `howIWork` are derived from
  position, so you only write copy. Four steps fit the desktop diagram.
- `headingAccent` is the trailing phrase of the heading that gets the lime underline.

### 3b. Work index — the `work` key

Defaults in `lib/work-data.ts`.

| Field | What it controls |
| --- | --- |
| `title` / `description` | Page metadata |
| `intro` | The career-introduction paragraph |
| `itemIds` | Which timeline cards appear, and in what order |
| `items` | Per-card copy overrides, keyed by item id |

`intro` takes either a plain string or, for colored underlines, an array of segments:

```ts
intro: [
  "My work has evolved from ",
  { text: "software engineering", accent: "lime" },
  " to ",
  { text: "internal platforms", accent: "sky" },
  ".",
],
```

Available accents: `lime`, `sky`, `emerald`, `amber`, `pink`, `violet`.

`items` overrides copy only — year, logo, destination, and accent color stay with the card:

```ts
items: {
  klaviyo: {
    companyRole: "Klaviyo: Senior Product Manager, Events",  // the company + title line
    label: "Turning platform economics into product strategy", // the headline
    microCaption: "Sequencing data-access changes",            // the line beneath it
    tags: ["Platform Strategy", "Customer Research"],
  },
},
```

Valid item ids: `engineering`, `lyft`, `mba`, `ideo`, `gainbridge`, `dishclosure`, `klaviyo`.

### 3c. Case studies — the `caseStudies` key

Keyed by slug. Default content lives in `lib/case-studies/<slug>.ts`.

Valid slugs: `dishclosure-founder-mode`, `engineering-foundation`,
`gainbridge-data-architecture`, `ideo-design-thinking`,
`klaviyo-real-time-data-strategy`, `lyft-developer-experience-pm`,
`mba-strategic-frameworks`.

```ts
caseStudies: {
  "klaviyo-real-time-data-strategy": {
    meta: { title: "...", description: "..." },
    layout: {
      title: "...",        // the <h1>
      subline: "...",      // hero description
      tags: ["..."],
      row1: {
        challenge: { heading: "Challenge", bullets: ["..."] },
        role: { heading: "Role", bullets: ["..."] },
      },
      row2: {
        left: [{ title: "...", description: "...", bullets: ["..."] }],
        right: [{ title: "...", description: "..." }],
      },
      row3: {
        outcomes: { heading: "Outcomes", bullets: ["..."] },
        learnings: { heading: "Learnings", bullets: ["..."] },
      },
    },
  },
},
```

Section-by-section mapping:

- **Hero** → `title`, `subline`, `tags`, `heroImage`
- **Challenge / Role** → `row1.challenge.bullets`, `row1.role.bullets`
- **Approach & Decisions** → `row2.left` and `row2.right`; items read down the left
  column, then down the right. `row2.throughline` is the italic line under the heading —
  set it to `undefined` to drop an inherited one.
- **Outcomes / Learnings** → `row3`. Outcome bullets can be plain strings or
  `{ label, description }` cards. For learnings, use `bullets` for a list or `flow` for a
  single arrow chain like `"Customer workflow → Product guarantee → Economics"`.
- **Artifacts** → `artifacts.items` reorders and relabels; see below.

Omit `heroImage` to keep the existing image.

### 3d. Artifacts

The `/artifacts` page is **shared** — it renders the global catalog in `lib/artifacts.ts`,
so editing it changes the canonical site too. That is fine for fixing a typo or a title,
but it is not per-variant.

What *is* per-variant is the artifact list inside a case study:

```ts
artifacts: {
  projectHref: "/work/klaviyo-real-time-data-strategy",
  projectLabel: "Klaviyo",
  items: [
    // Reorder, and optionally relabel. Omit a field to inherit it from the catalog.
    { id: "klaviyo-cost-to-value-segmentation", subline: "A description for this variant." },
    { id: "klaviyo-data-access-decision-gates", headline: "A different title" },
    // Something real but not publishable yet: renders as a non-clickable "Coming soon" row.
    { pending: true, headline: "Competitive Landscape", subline: "..." },
  ],
},
```

Omit `items` entirely to show the project's artifacts in catalog order. A typo in an `id`
fails the build rather than silently dropping a row. To list the available ids:

```bash
rg 'id: "' lib/artifacts.ts
```

---

## Step 4 — Preview it

```bash
pnpm dev
```

Then open `http://localhost:3000/ljqme6/`. Click through the nav and every card: links
should all stay under `/ljqme6/`. If a click drops you onto an unprefixed page, a `href`
somewhere is missing `withPrefix`.

---

## Step 5 — Check your work

```bash
pnpm build
```

The build generates every variant page and fails on an invalid id, a duplicate id, or an
unknown artifact id. Then confirm:

- [ ] Every page you customized reads the way you intended, on desktop **and** mobile.
- [ ] Links stay inside `/<jobId>/`.
- [ ] Pages you did *not* customize still render (they fall back to canonical content).
- [ ] The canonical site is unchanged — visit `/`, `/work`, and the case studies.
- [ ] Nothing confidential is in the copy.

To check the built output rather than the dev server:

```bash
npx serve out -l 3100    # then open http://localhost:3100/ljqme6/
```

---

## Step 6 — Ship it

```bash
git add lib/job-variants.ts
git commit -m "Add the <jobId> variant for <company>"
git push origin main
```

Deployment builds the static site, so the new pages appear once the build completes.

---

## Retiring a variant

Delete the entry from `JOB_VARIANTS` and push. The pages stop being generated on the next
build, and the URL 404s.

---

## Reference

| File | What lives there |
| --- | --- |
| `lib/job-variants.ts` | Every variant's copy — the file you edit |
| `lib/home-data.ts` | Homepage fields and canonical defaults |
| `lib/work-data.ts` | Work index fields and canonical defaults |
| `lib/case-studies/` | Per-case-study default content |
| `lib/artifacts.ts` | Shared artifact catalog |
| `lib/paths.ts` | Prefix helpers and reserved ids |
| `app/[job]/` | The routes that render variants |

### Good to know

- Variant pages are `noindex, nofollow`, and their canonical URL points at the
  unprefixed original — so they never compete with the real site in search.
- Add a new page type by creating it under `app/[job]/` with `generateStaticParams`.
- Prefer overriding copy over editing shared components. If a handoff asks for something
  the data model can't express, add the field to `home-data.ts` / `work-data.ts` with a
  default that preserves current canonical rendering, then set it in the variant.
