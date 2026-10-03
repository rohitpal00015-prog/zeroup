# COMPONENT MAP — ZEROUP ARCHITECTURE

This document maps all React/Next.js components, file locations, data props, interactive states, and responsive behaviors.

---

## 1. Global & Layout Components
| Component | Path | Primary Purpose | State & Interactions |
|---|---|---|---|
| `Navbar` | `components/Navbar.tsx` | Fixed editorial header with stage telemetry badge (`BUILD 001 / 2026`) and direct section anchors | Blur on scroll, active section highlight, mobile overlay toggle |
| `MobileNav` | `components/MobileNav.tsx` | Responsive full-screen slide-down menu for mobile users | Open/close state, accessible ESC key and focus traps |
| `Footer` | `components/Footer.tsx` | High-density editorial metadata, copyright, timestamp, status monitor | Live UTC/IST clock, status dot (`● SYSTEM STABLE`), back-to-top |
| `ScrollProgress` | `components/ui/ScrollProgress.tsx` | Minimal 1px hairline reading/scroll indicator | Motion-driven width binding `scrollYProgress` |
| `SectionLabel` | `components/ui/SectionLabel.tsx` | Standardized index label (`01 / THE SHIFT`, `02 / THE SYSTEM`) | Pure UI, monospace tracking with accent dot |

---

## 2. Narrative Section Components
| Section | Component File | Description & Special Features |
|---|---|---|
| **01 HERO** | `components/sections/Hero.tsx` | Eyebrow, H1 typography ("Build attention. Own distribution."), split CTA buttons, and embedded `DistributionMap` |
| **01-VISUAL** | `components/visuals/DistributionMap.tsx` | **Signature Interaction**: 7-node network (`IDEA` → `CONTENT` → `CREATOR` → `PLATFORM` → `AUDIENCE` → `DATA` → `IP`). Interactive node selection with telemetry breakdown. |
| **02 SHIFT** | `components/sections/ShiftSection.tsx` | "The internet didn't remove distribution. It fragmented it." Interactive surface tags (`YouTube`, `LinkedIn`, etc.) and comparison grid. |
| **03 PROBLEM** | `components/sections/ProblemSection.tsx` | "Content is not the problem. The system is." 3 diagnostic cards with hover state reveals. |
| **04 THESIS** | `components/sections/ThesisSection.tsx` | "Don't rent attention forever. Build an asset." Side-by-side comparative simulation: Paid Media (Depletion) vs. Owned Media (Compounding). |
| **05 SYSTEM** | `components/sections/SystemSection.tsx` | "From expertise to distribution." 7-stage interactive pipeline (`01 RESEARCH` → `07 ITERATION`) with active step inspector and dynamic inputs/outputs display. |
| **06 ENGINES** | `components/sections/EnginesSection.tsx` | "Three ways we build distribution." 3 distinct engine cards (`Brand Engine`, `Founder Engine`, `IP Engine`) with expandable architectural breakdown modals/drawers. |
| **07 ATOMIZER** | `components/sections/AtomizerSection.tsx` | "One idea can become many distribution assets." Interactive central input branching into 6 distribution surfaces with animated distribution routes. |
| **08 FLYWHEEL** | `components/sections/FlywheelSection.tsx` | "Compounding attention." Circular kinetic loop diagram highlighting the 7 compounding stages and self-reinforcing dynamics. |
| **09 EXPERIMENTS**| `components/sections/ExperimentsSection.tsx`| "We are building the system on ourselves first." 5 empirical experiment logs with `Hypothesis`, `Execution`, `Data`, `Learning` drawer inspection. |
| **10 LAB** | `components/sections/LabSection.tsx` | "We test what works." Editorial research library with filterable category tabs and detailed study modal readers. |
| **11 WHAT WE DON'T DO** | `components/sections/AntiPositioningSection.tsx` | "We don't manage social media." Bold 6-point contrast list followed by "We build systems that learn." |
| **12 WHY THIS EXISTS** | `components/sections/WhySection.tsx` | Editorial manifesto on why modern attention demands infrastructure rather than transient marketing decoration. |
| **13 CONTACT** | `components/sections/ContactSection.tsx` | High-intent briefing form with fields for founder vision, distribution bottlenecks, and project scope. Interactive submission state. |

---

## 3. Data & State Management
- `data/content.ts`: Single source of truth for all editorial copy, experiment logs, lab notes, and system steps.
- Clean separation: No hardcoded text inside deep visual wrappers.
- State: Local React hooks (`useState`, `useRef`, `useCallback`) and `framer-motion` for buttery 60fps animations.
