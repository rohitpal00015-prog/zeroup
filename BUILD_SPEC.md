# BUILD SPEC — A Media Company Designing Its Own Operating System

> **Build attention. Own distribution.**

This document is the master build specification for the company website. It is written to be handed directly to a designer, a developer, or an AI coding agent (Claude Code, Cursor, etc.).

---

## 0. READ THIS FIRST

### 0.1 What this is
The digital foundation of a new **Content & Distribution company**, in the **early building / validation stage**. The website is the **first prototype of the company's philosophy**. It is an **interactive editorial thesis**, not a brochure.

### 0.2 What this is NOT
- Not a portfolio website
- Not a freelancer portfolio
- Not a traditional social media agency site
- Not a generic digital marketing landing page
- Not a crypto / Web3 / gaming / hacker / generic AI-SaaS site

### 0.3 Feeling
**Media Company × Technology Lab × Strategy Firm.**
Intelligent, editorial, experimental, technical, minimal, premium, calm, precise, slightly unconventional, information-driven. Cyber/technical influence is **subtle**.

### 0.4 The one test
Every section must do at least one of:
1. **Explain** the idea
2. **Visualize** the idea
3. **Prove** the idea
4. **Challenge** the visitor to think about the idea

If a section does none, **delete it**.

### 0.5 Honesty Rule (mandatory, overrides everything)
Never invent: clients, testimonials, numbers, followers, views, revenue, partnerships, awards, team size, case studies, achievements, founder credentials.

Conceptual items must carry a visible status label:

| Label | Meaning |
|---|---|
| `CONCEPT` | An idea/model we believe in; not operational |
| `PROTOTYPE` | Something partially built or being tested |
| `EXPERIMENT` | A live or planned test with a hypothesis |
| `BUILDING` | Actively in progress |

Future milestones are **never** presented as achievements. Do not use "500+ clients", "10M+ views", "100+ brands", fake awards, fake logos, fake stats. Credibility comes from **clarity + thinking + experiments + execution + design + research**.

---

## 1. PRODUCT GOALS

The site has four jobs:

| # | Job | How the site does it |
|---|---|---|
| 1 | **Explain** | A visitor understands what the company is within one scroll of the narrative |
| 2 | **Differentiate** | "What we don't do" + systems framing make it clearly not a social media agency |
| 3 | **Demonstrate** | The site's own structure, diagrams and motion embody systems/editorial/distribution thinking |
| 4 | **Create curiosity** | Serious founders, brands and creators think: *"These people are building something interesting."* |

Secondary goal: convert interested people into **conversations** (contact form).

Long-term: the site evolves **Company Website → Research Platform → Experiment Archive → Content IP → Media Platform** without a redesign. Architecture must support this (see §9).

---

## 2. CORE MESSAGING (source of truth)

### 2.1 Central thesis
**Build attention. Own distribution.**

### 2.2 Supporting beliefs (use verbatim where possible)
- Content is no longer just marketing. **It is distribution infrastructure.**
- **Don't rent attention forever. Build an asset.**
- **Content is not the problem. The system is.**
- One idea. Multiple surfaces.
- From expertise to distribution.
- Compounding attention.
- We build systems that learn.

### 2.3 Value chain
`Knowledge → Ideas → Content → Attention → Audience → Data → Distribution → IP`

### 2.4 The shift
- Earlier: `Brand → Advertisement → Audience`
- Now: `Brand/Founder → Content → Platforms → Audience → Community → Data → IP`

Attention is fragmented across YouTube, Instagram, LinkedIn, Shorts, Podcasts, Communities, Search, Creator ecosystems.

### 2.5 Copy rules
Copy must be: short, sharp, intelligent, specific, editorial, confident without exaggeration.

**Banned phrases (generic agency language):**
- "Take your brand to the next level"
- "We are a passionate team"
- "Your success is our success"
- "We provide innovative solutions"
- "Unlock your brand's true potential"
- Also avoid: "cutting-edge", "world-class", "end-to-end solutions", "synergy", "game-changing", "leverage" (as a verb), "drive growth"

---

## 3. INFORMATION ARCHITECTURE

### 3.1 Primary structure: a continuous narrative, not Hero→About→Services→Portfolio→Contact

The homepage is **one continuous scroll-driven thesis** in 7 numbered chapters, followed by Experiments, Lab teaser, What We Don't Do, Building in Public, About, Contact.

```
/                       The thesis (single continuous narrative)
 ├─ 00  Opening / signature visual
 ├─ 01  THE SHIFT
 ├─ 02  THE PROBLEM
 ├─ 03  THE THESIS
 ├─ 04  THE SYSTEM
 ├─ 05  THE ENGINES
 ├─ 06  CONTENT ATOMIZATION
 ├─ 07  THE FLYWHEEL
 ├─ 08  EXPERIMENTS (teaser)
 ├─ 09  LAB (teaser)
 ├─ 10  WHAT WE DON'T DO
 ├─ 11  BUILDING IN PUBLIC (BUILD / 001)
 ├─ 12  ABOUT (very short)
 └─ 13  CONTACT
/experiments            Archive index
/experiments/[slug]     Experiment detail
/lab                    Research/thinking index (filterable)
/lab/[slug]             Article/research detail
/engines/[slug]         (later) Deep pages: brand | founder | ip
/about                  (optional) expanded, still minimal
/contact                Standalone form page (same form as home)
```

### 3.2 Navigation
- Minimal fixed top bar: wordmark (left), a **chapter indicator** (e.g. `04 / SYSTEM`) in the center that updates on scroll, and `Experiments · Lab · Contact ↗` (right).
- A thin **progress rail** on the left/edge showing 7 chapters as nodes. Clicking a node scrolls to the chapter. It is the nav *and* a miniature of the signature diagram.
- Mobile: wordmark + menu button; the chapter indicator remains.

### 3.3 Footer
Wordmark, one-line thesis, links (Experiments, Lab, Contact), `BUILD / 001 · 2026`, honesty note: *"Everything labelled CONCEPT is a direction, not a claim."*

---

## 4. SECTION-BY-SECTION SPEC

Each section lists: **Purpose · Copy · Visual · Motion (what concept it explains) · No-motion fallback · Status labels.**

---

### 00 — OPENING

**Purpose:** State the thesis, introduce the signature visual, set the tone.

**Copy**
- Eyebrow: `A CONTENT & DISTRIBUTION COMPANY — BUILD / 001 — 2026`
- H1: **Build attention. Own distribution.**
- Sub: *Content is no longer just marketing. It is distribution infrastructure.*
- CTA (text links, not big buttons): `Read the thesis ↓` · `See the experiments →`
- Status chip: `CURRENTLY BUILDING`

**Visual:** The **Signature Distribution Graph** (see §6) fills the right/background. Left holds typographic H1.

**Motion:** Nodes `IDEA → CONTENT → CREATOR → PLATFORM → AUDIENCE → DATA → IP` draw in sequence, then connect, then idle with a slow signal pulse travelling the path. *Concept explained: distribution is a connected system, not a single post.*

**Fallback:** Static SVG of the connected graph with labels.

---

### 01 — THE SHIFT

**Purpose:** Establish that something fundamental changed.

**Copy**
- Chapter label: `01 — THE SHIFT`
- Headline: **The internet didn't remove distribution. It fragmented it.**
- Body (≤ 60 words): Attention now moves across platforms, formats and creators. A brand used to buy a slot in front of an audience. Now it has to earn a place across many surfaces at once.
- Two-line comparison:
  - `EARLIER  Brand → Advertisement → Audience`
  - `NOW  Brand/Founder → Content → Platforms → Audience → Community → Data → IP`
- Surface list (labels only): YouTube · Instagram · LinkedIn · Shorts · Podcasts · Communities · Search · Creator ecosystems

**Visual:** A single linear path (EARLIER) that **fractures** into a branching network of surfaces (NOW). Surfaces appear as editorial "tags/chips" on nodes, not logos (do **not** use platform brand logos).

**Motion:** On scroll, the straight line splits into branches. *Concept: one channel became many.*

**Fallback:** Two stacked static diagrams.

---

### 02 — THE PROBLEM

**Purpose:** Reframe "posting on social media" as the wrong problem.

**Copy**
- Chapter: `02 — THE PROBLEM`
- Headline: **Content is not the problem. The system is.**
- Four failure modes (each a short row, with a tiny broken-diagram icon):
  1. **Ideas without strategy.**
  2. **Content without distribution.**
  3. **Attention without compounding.**
  4. **Brands publishing without building an asset.**
- Pull question: *How do you build a repeatable system that continuously creates, distributes, measures and improves content?*

**Visual:** Four disconnected fragments (node, node with no outbound edge, a loop that never closes, a pile of posts with no base). The final question line draws a connecting edge across them.

**Motion:** Fragments stay disconnected as each is described; connection appears only on the question. *Concept: the missing piece is the connections.*

**Fallback:** Static fragments + question.

---

### 03 — THE THESIS

**Purpose:** Introduce the core belief via a direct contrast.

**Copy**
- Chapter: `03 — THE THESIS`
- Headline: **Don't rent attention forever. Build an asset.**
- Two panels:
  - **PAID MEDIA** — `Brand → Campaign → Attention → Ends`
  - **OWNED MEDIA** — `Brand → Content → Audience → Data → IP → Compounds`
- Footnote: *Paid media isn't wrong. It just doesn't leave anything behind.*

**Visual:** Left panel is a line that **terminates** (a hard stop glyph). Right panel is a line that bends back and **thickens** each lap. Horizontal split on desktop, stacked on mobile.

**Motion:** Left line runs and dies; right line loops and accumulates weight/opacity. *Concept: spend vs. compounding.*

**Fallback:** Static two-panel diagram.

---

### 04 — THE SYSTEM  *(major visual system)*

**Purpose:** Show how we solve the problem. This is a hero diagram of the site.

**Copy**
- Chapter: `04 — THE SYSTEM`
- Headline: **We build systems that learn.**
- Seven stages, each with one-line description and an expandable detail:

| Stage | One-liner | Expanded detail |
|---|---|---|
| **Research** | Understand the terrain. | audience · competitors · trends · search behaviour · customer questions · market conversations |
| **Strategy** | Decide what to say and where. | positioning · content pillars · editorial direction · formats · recurring series · distribution strategy |
| **Story** | Turn knowledge into narrative. | hooks · scripts · narratives · visual concepts · stories |
| **Production** | Make it well. | video · short-form · long-form · design · motion · AI-assisted content |
| **Distribution** | Put it where attention is. | YouTube · Instagram · LinkedIn · Shorts · Search · Communities · Creator networks |
| **Intelligence** | Study what happened. | retention · watch time · engagement · shares · saves · clicks · leads · audience behaviour |
| **Iteration** | Feed it back. | `DATA → INSIGHT → NEW IDEA → CONTENT → DISTRIBUTION` |

- Closing line under diagram: *The system continuously learns.*

**Visual:** A vertical (mobile) / horizontal-then-looping (desktop) flow of the 7 stages ending in a **return arrow ↺ back to Research**. Each stage is a node with a numeral (`01`–`07`).

**Motion:** Scroll-pinned. Active stage highlights, the signal travels to the next, and at Iteration the line curves back to Research. Clicking a stage expands its detail. *Concept: a loop, not a pipeline.*

**Fallback:** Static numbered list with expanded details visible; the loop shown as a final "↺ returns to Research" row.

---

### 05 — THE ENGINES

**Purpose:** Present three business models as parts of **one operating system**, not three service cards.

**Copy**
- Chapter: `05 — THE ENGINES`
- Headline: **Three engines. One operating system.**
- Engines (each with status chip `CONCEPT`):
  - **01 BRAND ENGINE** — *Turn a company into a media property.* `Brand → Editorial Identity → Recurring Formats → Content → Audience`
  - **02 FOUNDER ENGINE** — *Turn expertise into authority.* `Knowledge → Ideas → Stories → Personal Brand → Audience`
  - **03 IP ENGINE** — *Turn recurring ideas into recognizable media properties.* `Concept → Format → Series → Audience → IP`
- Note: *These are conceptual models at this stage. Not all three are operational.*
- Who it's for (small, plain): Brands · Startups · Founders · Experts · Creators · Emerging businesses

**Visual:** Three horizontal "rails" sharing a common **bus** on the right labelled `AUDIENCE → DATA → IP`. All three rails feed the same bus. No card borders; use rails, numerals and typography.

**Motion:** Hover/tap an engine → its rail lights up and signal runs to the shared bus; the other two dim. *Concept: separate inputs, shared infrastructure.*

**Fallback:** Three stacked text blocks with chains in monospace.

---

### 06 — CONTENT ATOMIZATION

**Purpose:** Demonstrate that one idea becomes many distribution assets.

**Copy**
- Chapter: `06 — CONTENT ATOMIZATION`
- Headline: **One idea. Multiple surfaces.**
- Body: A single strong idea, expressed once in depth, can be shaped for every surface where attention lives. *We don't promise a fixed number of deliverables. We show how a system multiplies the value of one idea.*
- Example label: `EXAMPLE · ILLUSTRATIVE` (clearly not a case study)
- Tree: `One long-form conversation →` YouTube Episode · Short Clips · YouTube Shorts · Instagram Reels · LinkedIn Posts · Newsletter · Visual Assets

**Visual:** Left: one large "source" block (a waveform/transcript motif). Right: it **splits** into 7 differently shaped output tiles, each in the proportion/format of its surface (16:9, 9:16, text card, square, etc.).

**Motion:** Source block "fractures" into output tiles on scroll; each tile gets a tiny caption. A toggle lets the visitor swap the source (Conversation / Essay / Talk) and the outputs re-flow. *Concept: atomization from a single source.*

**Fallback:** Static tree diagram.

> Do **not** put numbers like "1 video = 30 posts". No promised quantities.

---

### 07 — THE FLYWHEEL

**Purpose:** Show compounding.

**Copy**
- Chapter: `07 — THE FLYWHEEL`
- Headline: **Compounding attention.**
- Loop labels (clockwise): `CONTENT → AUDIENCE → DATA → INSIGHT → BETTER CONTENT → STRONGER IP → MORE AUDIENCE ↺`
- Line: *Every lap leaves something behind.*

**Visual:** A circular loop with 7 nodes. Each lap, the stroke weight grows and a faint "residue" ring accumulates in the center labelled `ASSET`.

**Motion:** Scroll scrubs the loop through 3 laps; the central asset mass grows. *Concept: compounding vs. one-off.*

**Fallback:** Static loop with a larger center ring.

---

### 08 — EXPERIMENTS  *(replaces "Our Work / Clients / Case Studies")*

**Purpose:** Prove thinking and execution honestly.

**Copy**
- Chapter: `08 — EXPERIMENTS`
- Headline: **What we're testing.**
- Sub: *We're early. Instead of a portfolio, here's what we're learning in public.*
- Each experiment is a "lab card" with the structure:
  `HYPOTHESIS · EXECUTION · DATA · LEARNING` and a status label.

Initial entries (all internal, honest status, **no fabricated data**):

| ID | Title | Status | Hypothesis (draft placeholder) |
|---|---|---|---|
| EXPERIMENT 001 | Founder Content | `EXPERIMENT` | Consistent expertise-led content builds authority faster than promotional content. |
| EXPERIMENT 002 | AI Video Workflow | `PROTOTYPE` | An AI-assisted workflow can cut production time without lowering editorial quality. |
| EXPERIMENT 003 | Short-form Hook Study | `EXPERIMENT` | Hook structure affects retention more than topic. |
| EXPERIMENT 004 | Distribution Test | `CONCEPT` | The same idea performs differently by surface; format fit matters more than volume. |
| EXPERIMENT 005 | Content IP Prototype | `CONCEPT` | A recurring format with a clear identity can become a recognizable series. |

For fields without real results yet, render: `DATA — Not yet collected` and `LEARNING — Pending`. **Never fill with fake numbers.**

**Visual:** A table-like index (rows, monospace IDs) that expands into the 4-part card. Think lab notebook / research log, not case-study tiles.

**Motion:** Row expands, the four parts reveal sequentially. *Concept: hypothesis → test → learning.*

**Fallback:** Static expanded rows.

---

### 09 — LAB

**Purpose:** Establish that we study how attention works, not just produce content.

**Copy**
- Chapter: `09 — LAB`
- Headline: **We're studying how attention works.**
- Categories (filter chips): Research · Experiments · Distribution · AI · Creator Economy · Content Strategy · Media · Content IP
- Teaser list: 3 entries max. If there are no published articles yet, show `FIRST NOTES — BUILDING` placeholders, not fake titles with dates.

**Visual:** An editorial index (title, category, date, reading time) in a typographic list, with a category filter.

**Motion:** Filter reflows the list. *Concept: a body of knowledge you can navigate.*

---

### 10 — WHAT WE DON'T DO

**Purpose:** Positioning against the social-media-agency category.

**Copy**
- Headline: **What we don't do.**
- List (large, struck-through or negated typographic treatment):
  - We don't manage social media.
  - We don't publish for the sake of publishing.
  - We don't chase vanity metrics.
  - We don't copy every trend.
  - We don't promise viral content.
  - We don't confuse followers with customers.
  - We don't use AI as a substitute for thinking.
- Close: **We build systems that learn.**

**Visual:** Large type, one statement per viewport-slice, with a thin strike line that draws across the "wrong" verb phrase and the closing line resolving in the accent colour.

**Motion:** Strike lines draw on reveal. *Concept: negation clarifies positioning.*

---

### 11 — BUILDING IN PUBLIC

**Purpose:** Document the journey honestly.

**Copy**
- Label: `BUILD / 001 · 2026 · CURRENTLY BUILDING`
- Progress line: `Idea → Research → Experiments → First Clients → First IP → Media`
- Only completed/active steps are marked. Everything else is dimmed and labelled `NEXT` or `LATER`. **Never mark future steps as done.**
- Long-term direction (clearly labelled `DIRECTION, NOT ACHIEVEMENT`):
  `01 Content Strategy → 02 Content Production → 03 Distribution Systems → 04 Creator Network → 05 Content IP → 06 Owned Media → 07 Media + Community + Commerce`
- A changelog area (`BUILD LOG`) where entries can be added over time (MDX-driven).

**Visual:** A horizontal timeline/stage tracker with a "you are here" marker at the true current stage.

**Motion:** Marker pulses gently; later stages are visually "unlit". *Concept: honest progress.*

---

### 12 — ABOUT (very short)

**Copy**
- **We're building the infrastructure behind modern attention.**
- 2–3 lines: An independent content company focused on **strategy + storytelling + distribution + media IP.**
- Founder/team: minimal, factual, optional photo and name only. **No inflated credentials.** Use placeholders `[FOUNDER NAME]` `[ONE-LINE FACTUAL ROLE]` until real info is provided.

---

### 13 — CONTACT

**Copy**
- Headline: **Have something worth building?**
- Sub: *Tell us what you're trying to communicate, who you're trying to reach, and what you're trying to change.*
- Fields:
  - Name (required)
  - Company
  - Email (required)
  - What are you building? (textarea, required)
  - What do you need? (select/multi-select: Strategy · Storytelling · Production · Distribution · Founder content · Content IP · Not sure yet)
  - Budget range (select: Not sure yet · Under X · X–Y · Y+ ; ranges configurable via env/config, **not hard-coded**)
- CTA: **Start the conversation ↗**
- Success state: *"Received. We'll read it properly and reply."*
- Error state: plain, specific, no blame.

**Behaviour:** Validation (client + server), honeypot + rate limit for spam, accessible errors, no third-party tracking in the form. Submissions delivered via email/webhook/DB (see §8.5).

---

## 5. DESIGN SYSTEM

### 5.1 Principles
1. Typography first; diagrams second; decoration never.
2. One strong accent. Everything else monochrome.
3. Grid is visible when it helps explain structure.
4. Information density is a feature, but with calm whitespace.
5. Subtle technical cues: monospace labels, index numbers, hairlines, coordinates. Not terminals, glitch, neon, or matrix effects.

### 5.2 Colour tokens (starting palette; designer may refine)

```css
:root {
  /* Dark default */
  --bg:        #0B0B0C;   /* near-black, not pure black */
  --bg-raised: #111113;
  --line:      #26262A;   /* hairlines */
  --line-soft: #1A1A1D;
  --text:      #ECECEA;   /* warm off-white */
  --text-dim:  #9A9A9F;
  --text-mute: #5E5E64;

  /* One accent. Pick ONE and commit. Suggested: */
  --accent:    #D7FF3A;   /* signal lime; alt: #FF5B2E (signal orange) */
  --accent-dim: color-mix(in srgb, var(--accent) 18%, transparent);
}

/* Light variant (optional, editorial paper feel) */
[data-theme="light"] {
  --bg: #F4F3EF; --bg-raised: #FFFFFF; --line: #D9D7D0;
  --text: #111113; --text-dim: #4A4A50; --text-mute: #8A8A90;
  --accent: #111113; /* or the same hue darkened for contrast */
}
```

Rules:
- Accent is used for: the active signal, the thesis line, status `BUILDING`, CTA arrow. **Max ~5% of any viewport.**
- Avoid purple/blue neon gradients, glows, glassmorphism, and gradient text.
- Contrast: body text ≥ 7:1, UI ≥ 4.5:1.

### 5.3 Typography

| Role | Direction | Example choices |
|---|---|---|
| Display / headlines | Editorial serif or high-contrast grotesk, tight leading | *Instrument Serif*, *Newsreader*, *Fraunces*; or *Neue Montreal*, *Inter Tight* |
| Body | Clean neutral sans | *Inter*, *Geist*, *Söhne*-like |
| Labels / data / IDs | Monospace, uppercase, tracked | *JetBrains Mono*, *Geist Mono*, *IBM Plex Mono* |

Scale (fluid, `clamp()`):
```
--step--1: clamp(0.78rem, 0.76rem + 0.1vw, 0.85rem);  /* labels */
--step-0:  clamp(1rem, 0.96rem + 0.2vw, 1.125rem);     /* body */
--step-2:  clamp(1.6rem, 1.3rem + 1.4vw, 2.4rem);      /* h3 */
--step-4:  clamp(2.6rem, 1.8rem + 4vw, 5rem);          /* h2 */
--step-6:  clamp(3.6rem, 2rem + 8vw, 9rem);            /* h1 */
```
- Headlines: sentence case with full stops (matches the voice: *"Build attention. Own distribution."*).
- Labels: `UPPERCASE`, letter-spacing `0.08em`, size `--step--1`.
- Max body measure: `62ch`.

### 5.4 Layout
- 12-column grid, 1440 max content width, generous side gutters.
- Chapter numerals (`01`–`07`) hang in the left margin as index marks.
- Hairline rules separate chapters. No box shadows. Minimal border radius (0–4px).
- Spacing scale: 4/8/12/16/24/32/48/72/120/180.

### 5.5 Status label component
```
<StatusLabel kind="concept|prototype|experiment|building" />
```
Mono, uppercase, 1px outline, small dot. `BUILDING` uses accent; the others use neutral tones. Always visible next to anything non-operational.

### 5.6 Iconography
No icon packs of clip-art. Use simple geometric glyphs (circle, square, arrow, loop, split) drawn as inline SVG at 1.5px stroke.

### 5.7 Imagery
No stock photos. No platform logos. No fake dashboards with fake numbers. If a UI mock is needed for the Intelligence stage, label it `ILLUSTRATIVE` and use obviously abstract placeholder values (e.g. `—`).

---

## 6. SIGNATURE VISUAL — THE DISTRIBUTION GRAPH

**What it must say:** `Idea → Content → Distribution → Audience → Data → IP`

### 6.1 Nodes
`IDEA` · `CONTENT` · `CREATOR` · `PLATFORM` · `AUDIENCE` · `DATA` · `IP`

### 6.2 Edges (directed)
```
IDEA → CONTENT
CREATOR → CONTENT
CONTENT → PLATFORM
PLATFORM → AUDIENCE
AUDIENCE → DATA
DATA → IDEA          (feedback)
DATA → CONTENT       (feedback)
AUDIENCE → IP
CONTENT → IP
```

### 6.3 Look
- Not a force-directed "blob" (that reads crypto/Web3). Use a **structured, grid-aligned layout**: nodes sit on a visible coordinate grid, edges are orthogonal or gently curved with consistent radii, like an information-architecture diagram or a transit map.
- Nodes are small labelled rectangles/circles with index numbers (`N1`…`N7`) and a tiny caption, e.g. `PLATFORM — where attention lives`.
- Edges are hairlines. The **signal** is a short accent-coloured segment that travels along edges.
- Optional: coordinate ticks and axis labels at the margins (subtle technical cue).

### 6.4 Interactions (each must explain a concept)
| Interaction | Concept explained |
|---|---|
| Hover a node → highlight upstream/downstream edges and show a one-line definition | Every part depends on the others |
| Click `PLATFORM` → it **fans out** into surfaces (YouTube, Instagram, LinkedIn, Shorts, Search, Communities, Podcasts) | Distribution is fragmented |
| Click `DATA` → highlights feedback edges to `IDEA`/`CONTENT` | The system learns |
| Click `IP` → shows the end-state: recurring format → series → property | Where compounding ends up |
| "Play" toggle → runs a single idea through the graph step by step | The whole chain in one pass |
| Scroll-linked state across chapters | The same graph reappears smaller in the progress rail |

### 6.5 Implementation notes
- Build in **SVG** (React component, data-driven from a `graph.ts` config of nodes/edges/positions). Animate with Framer Motion / GSAP (`stroke-dashoffset`, `motion.path`).
- Respect `prefers-reduced-motion`: render the static graph; hover/click still work, but no travelling signal or auto-play.
- Keyboard accessible: nodes are focusable `<button>`s with `aria-describedby`; arrow keys move focus along edges.
- Must render a meaningful static version with **JS disabled** (server-rendered SVG).

---

## 7. MOTION SYSTEM

### 7.1 Rule
**Every major animation must answer: "What concept is this explaining?"** If it can't, remove it.

### 7.2 Allowed
- Nodes connecting
- Content flowing between surfaces
- Systems looping
- Sections revealing progressively
- Data → insight transformation
- Content branching into formats

### 7.3 Forbidden
- Random floating objects
- Excessive parallax
- Spinning 3D objects
- Cursor trails
- Particle fields with no meaning
- Decorative-only animation
- Auto-playing sound

### 7.4 Specs
| Property | Value |
|---|---|
| Easing (enter) | `cubic-bezier(0.22, 1, 0.36, 1)` |
| Easing (exit) | `cubic-bezier(0.64, 0, 0.78, 0)` |
| Reveal duration | 500–800ms |
| Stagger | 60–90ms |
| Scroll-linked | Only in chapters 04, 06, 07 (pinned/scrubbed). Elsewhere use one-time reveals |
| Reduced motion | Disable travelling signals, scrub, parallax; keep opacity fades ≤ 150ms or instant |

### 7.5 "Works without animation" requirement
- All content is in the DOM and readable with CSS animations and JS animation disabled.
- Reveal-on-scroll uses `IntersectionObserver` with a no-JS fallback (`<noscript>` styles show everything).
- No content is gated behind hover.

---

## 8. TECHNICAL ARCHITECTURE

### 8.1 Recommended stack
| Concern | Choice | Why |
|---|---|---|
| Framework | **Next.js (App Router) + TypeScript** | SSR/SSG, routing, scales to platform |
| Styling | **Tailwind CSS** + CSS variables for tokens | Fast, consistent, token-driven |
| Motion | **Framer Motion** (UI) + **GSAP ScrollTrigger** (pinned chapters) | Concept-driven scroll sequences |
| Diagrams | **Inline SVG** components (data-driven) | Crisp, accessible, SSR-friendly |
| Content | **MDX** via `contentlayer`/`velite`/`next-mdx-remote` with typed schemas | Add experiments/articles with no redesign |
| Forms | **React Hook Form + Zod**, Server Action / Route Handler | Typed validation |
| Email/delivery | Resend / Postmark / SMTP; optional DB (Postgres) | Reliable delivery |
| Analytics | Privacy-friendly (Plausible / Umami), opt-in only | No invasive tracking |
| Hosting | Vercel / Netlify / Cloudflare | Edge + previews |
| Testing | Playwright (e2e + a11y), Vitest (unit) | Regression safety |

### 8.2 Folder structure
```
/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx                      # assembles the chapters
│  ├─ experiments/
│  │   ├─ page.tsx                  # archive index
│  │   └─ [slug]/page.tsx
│  ├─ lab/
│  │   ├─ page.tsx                  # filterable index
│  │   └─ [slug]/page.tsx
│  ├─ contact/page.tsx
│  ├─ api/contact/route.ts
│  ├─ sitemap.ts · robots.ts · opengraph-image.tsx
├─ components/
│  ├─ chapters/                     # Opening, Shift, Problem, Thesis, System, Engines, Atomization, Flywheel, Experiments, Lab, Not, Build, About, Contact
│  ├─ graph/                        # DistributionGraph, Node, Edge, Signal, graph.ts
│  ├─ diagrams/                     # FlowLoop, Fragmentation, PaidVsOwned, EngineBus, Atomizer, FlywheelRing
│  ├─ ui/                           # StatusLabel, ChapterLabel, MonoTag, Button, Field, Rule
│  └─ layout/                       # Nav, ProgressRail, Footer
├─ content/
│  ├─ experiments/*.mdx             # 001-founder-content.mdx ...
│  ├─ lab/*.mdx
│  ├─ build-log/*.mdx
│  └─ site.ts                       # all copy strings & config (single source)
├─ lib/
│  ├─ schemas.ts                    # Zod schemas (contact, experiment, lab)
│  ├─ motion.ts                     # shared variants, easing, reduced-motion hook
│  └─ seo.ts
├─ styles/
│  ├─ tokens.css
│  └─ globals.css
├─ public/
└─ tests/
```

### 8.3 Content schemas (typed, extensible)

```ts
// Experiment
type Status = 'concept' | 'prototype' | 'experiment' | 'building' | 'complete';
interface Experiment {
  id: string;            // "001"
  slug: string;
  title: string;
  status: Status;
  startedAt?: string;    // ISO date, optional
  hypothesis: string;
  execution: string;     // or "Not yet run"
  data?: string;         // omit => render "Not yet collected"
  learning?: string;     // omit => render "Pending"
  tags: string[];
  surfaces?: string[];   // YouTube, LinkedIn, ...
}

// Lab entry
interface LabEntry {
  slug: string;
  title: string;
  category: 'Research'|'Experiments'|'Distribution'|'AI'|'Creator Economy'|'Content Strategy'|'Media'|'Content IP';
  publishedAt: string;
  summary: string;
  readingTime: number;
  draft?: boolean;
}

// Build log
interface BuildLogEntry { date: string; stage: string; note: string; }
```

Adding a new experiment/article/case study/IP project = **adding one MDX file** + (if a new content type) one schema. No layout changes.

### 8.4 Future-proofing (the site becomes a platform)
- Generic `ContentCollection` abstraction so future types (`case-study`, `ip`, `project`, `report`) reuse index/detail templates.
- Status labels and honesty rules enforced in components: a `case-study` type **requires** a `verified: true` + `source` field before it renders (prevents fabrication creep).
- Tag taxonomy shared across experiments & lab → cross-linking and a future "graph of ideas" view.
- RSS/Atom feed for Lab and Experiments.
- Search (static index, e.g. Pagefind) when content > ~20 items.

### 8.5 Contact pipeline
1. Client-side Zod validation.
2. POST `/api/contact` → server Zod validation → honeypot check → rate limit (IP, 5/hr).
3. Deliver: email to the team + persist in DB or append to a Google Sheet/Airtable via webhook.
4. Auto-reply optional.
5. Store only what is needed; no tracking pixels; include a short privacy line under the form.

### 8.6 Performance budgets
- LCP < 2.0s on 4G mid-tier mobile; CLS < 0.05; INP < 200ms.
- JS for first load < 170KB gz (lazy-load GSAP/graph interactions below the fold).
- Fonts: ≤ 3 families, `font-display: swap`, subset, preload display font.
- SVG diagrams inlined and optimized; no large raster assets.
- Defer scroll-scrubbed chapters until near-viewport.

### 8.7 Accessibility (WCAG 2.2 AA)
- Semantic landmarks, one `h1`, ordered heading levels per chapter.
- All diagrams have a text equivalent (`<figure>` + `<figcaption>` or `aria-describedby` listing the flow in words).
- Focus-visible styles in accent; skip link.
- Full keyboard support for graph, tabs, accordions.
- `prefers-reduced-motion`, `prefers-color-scheme`, and a manual theme toggle.
- Status labels not conveyed by colour alone.

### 8.8 SEO & sharing
- Title: `[Company] — Build attention. Own distribution.`
- Meta description (≤155 chars): *A content and distribution company building systems that create, distribute, measure and improve attention.*
- Dynamic OG images per experiment/lab entry (typographic, on-brand).
- Structured data: `Organization`, `WebSite`, `Article` (Lab), no fake `Review`/`AggregateRating`.
- Clean URLs, sitemap, canonical tags.

---

## 9. RESPONSIVE BEHAVIOUR

| Breakpoint | Behaviour |
|---|---|
| ≥ 1200 | Full signature graph, pinned chapters, side progress rail |
| 768–1199 | Graph simplified (fewer labels), pinned chapters retained where performant |
| < 768 | Graph becomes a vertical flow; no pinning, use sequential reveals; progress rail becomes a thin top bar; diagrams stack; engine bus becomes a vertical stack |

Touch: all hover interactions have tap equivalents; tap targets ≥ 44px.

---

## 10. COPY DECK (ready-to-use strings)

```
HERO_EYEBROW   = "A CONTENT & DISTRIBUTION COMPANY — BUILD / 001 — 2026"
HERO_H1        = "Build attention. Own distribution."
HERO_SUB       = "Content is no longer just marketing. It is distribution infrastructure."

SHIFT_H        = "The internet didn't remove distribution. It fragmented it."
PROBLEM_H      = "Content is not the problem. The system is."
THESIS_H       = "Don't rent attention forever. Build an asset."
SYSTEM_H       = "We build systems that learn."
ENGINES_H      = "Three engines. One operating system."
ATOMIZE_H      = "One idea. Multiple surfaces."
FLYWHEEL_H     = "Compounding attention."
EXPERIMENTS_H  = "What we're testing."
LAB_H          = "We're studying how attention works."
NOT_H          = "What we don't do."
ABOUT_H        = "We're building the infrastructure behind modern attention."
CONTACT_H      = "Have something worth building?"
CONTACT_SUB    = "Tell us what you're trying to communicate, who you're trying to reach, and what you're trying to change."
CONTACT_CTA    = "Start the conversation ↗"
FOOTER_NOTE    = "Everything labelled CONCEPT is a direction, not a claim."
```

---

## 11. BUILD PHASES

| Phase | Deliverable | Done when |
|---|---|---|
| **P0 — Foundations** | Repo, tokens, type scale, layout shell, nav, footer, `StatusLabel`, MDX pipeline | Empty chapters render with correct tokens; Lighthouse a11y ≥ 95 |
| **P1 — Static narrative** | All 13 sections with final copy and **static** SVG diagrams | Full site readable with JS off |
| **P2 — Signature graph** | `DistributionGraph` with hover/click/play, progress-rail miniature | Every interaction maps to a concept in §6.4 |
| **P3 — Motion** | Chapters 04, 06, 07 scroll-scrubbed; reveals elsewhere; reduced-motion paths | Motion audit: each animation has a named concept |
| **P4 — Content layer** | Experiments + Lab + Build log from MDX; archive pages; filters | Add a new experiment by dropping one MDX file |
| **P5 — Contact & ops** | Form pipeline, spam protection, email delivery, analytics (opt-in) | Test submission arrives; errors handled |
| **P6 — Polish & launch** | SEO, OG images, perf budget, a11y audit, cross-browser, copy pass for banned phrases | Acceptance checklist (§12) all green |

---

## 12. ACCEPTANCE CHECKLIST

**Honesty & positioning**
- [ ] No fabricated clients, numbers, testimonials, logos, followers, views, revenue, awards, team size
- [ ] Every non-operational item carries `CONCEPT` / `PROTOTYPE` / `EXPERIMENT` / `BUILDING`
- [ ] Future stages are shown as direction, not achievement
- [ ] Founder/team info minimal and factual (placeholders until provided)
- [ ] No banned agency phrases anywhere (search the repo)

**Narrative**
- [ ] Chapters 01–07 appear in order and read as one continuous story
- [ ] Each section passes the "explain / visualize / prove / challenge" test
- [ ] "What we don't do" section present; closes with *We build systems that learn.*
- [ ] Experiments section replaces any "Work/Clients/Case Studies" language

**Design**
- [ ] Single accent colour; dark minimal default; monospace labels; editorial headlines
- [ ] Does **not** read as gaming / crypto / Web3 / generic AI SaaS / freelancer portfolio
- [ ] Signature Distribution Graph is structured, editorial, not a force-directed blob
- [ ] Every animation answers "what concept is this explaining?"

**Engineering**
- [ ] Works fully with JS disabled and with `prefers-reduced-motion`
- [ ] Keyboard-navigable; WCAG 2.2 AA; diagrams have text equivalents
- [ ] Performance budgets met (§8.6)
- [ ] New experiment/article added via a single MDX file, no layout change
- [ ] Contact form validated, spam-protected, delivering

---

## 13. OPEN INPUTS (needed from the founder; do not invent)

1. Company name, wordmark/logo (or "use text wordmark for now")
2. Domain and contact email
3. Founder name, photo (optional), one-line factual role
4. Accent colour preference (lime / orange / other)
5. Budget range buckets for the form
6. Which experiments are actually running vs. planned (to set true status labels)
7. Preferred delivery for form submissions (email / DB / sheet)
8. Light theme: yes/no

Until provided, use clearly marked placeholders: `[COMPANY NAME]`, `[FOUNDER NAME]`, `[EMAIL]`.

---

## 14. AGENT INSTRUCTIONS (paste-ready for an AI coding agent)

```
You are building the website for a new Content & Distribution company, per BUILD_SPEC.md.

Hard rules:
1. HONESTY: never invent clients, stats, testimonials, numbers, followers, views, revenue,
   awards, partnerships, team size or case studies. Label conceptual items
   CONCEPT / PROTOTYPE / EXPERIMENT / BUILDING. Use placeholders for unknown facts.
2. This is NOT a portfolio or agency site. Do not use the Hero→About→Services→Portfolio→
   Testimonials→Contact structure. Build the 7-chapter narrative in §4.
3. Every animation must explain a concept. No decorative motion.
4. The site must work without animation, without JS, and with prefers-reduced-motion.
5. Use the copy deck (§10) verbatim for headlines. Avoid banned phrases (§2.5).
6. Architect for growth (§8.3–8.4): new experiments/articles/IP = new MDX files only.
7. If a section does not explain, visualize, prove, or challenge the idea
   "Build attention. Own distribution." — remove it.

Work in the phases of §11. After each phase, run the checklist in §12 and report failures.
Ask for the inputs in §13 before inventing any real-world fact.
```

---

*BUILD / 001 · 2026 · CURRENTLY BUILDING*
