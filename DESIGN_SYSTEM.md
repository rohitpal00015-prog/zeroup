# DESIGN SYSTEM — ZEROUP MEDIA OS

## 1. Aesthetic Thesis & Mood
**"An editorial media institution designing its own operating system."**
- Blends the intellectual restraint of a Swiss broadsheet / research institute (*The Economist*, *Wired UK 90s archive*, *Monocle*, *Stratechery*) with the technical precision of high-end developer infrastructure (*Vercel*, *Linear*, *Stripe Press*, *Humane OS schematics*).
- **Core Attributes**: Editorial, Empirical, Minimal, Technical, Restrained, High Information Density, Razor-sharp hairline boundaries.

---

## 2. Color Architecture
Strictly monochrome foundation with a single energetic precision accent:

### Base Values:
- **Background Root**: `#090A0C` (Deepest Obsidian Black)
- **Surface Elevation 1 (Card/Section)**: `#101216` (Smoky Slate Black)
- **Surface Elevation 2 (Interactive/Hover)**: `#181B22` (Graphite)
- **Border / Hairline Dividers**: `rgba(255, 255, 255, 0.08)` / `rgba(255, 255, 255, 0.15)` on hover
- **Text Primary (Display & Body)**: `#F4F4F6` (96% High-contrast Off-White)
- **Text Secondary (Subtext/Captions)**: `#9EA3B0` (Muted Zinc Grey)
- **Text Tertiary / Muted**: `#5D6370` (Subdued Charcoal Grey)

### The Single Brand Accent:
- **Accent Cadmium Orange**: `#FF4800` (Pantone Warm Red / Signal Kinetic Vermilion)
- **Accent Subtle Glow**: `rgba(255, 72, 0, 0.15)` (Used strictly for active node indicators, live experiment pulses, and focused execution pipelines)
- **Constraint**: No gradient purples, no cyber-neon pinks, no multi-color badges.

---

## 3. Typography Hierarchy
Two coordinated font families delivering editorial authority and computational precision:

### Primary Sans (Grotesk Editorial): `Geist Sans` / `Inter Tight`
- **Display Hero**: `clamp(2.75rem, 7vw, 5.5rem)`, Tracking: `-0.04em`, Leading: `1.05`, Weight: `600/700`
- **Section Headers (H2)**: `clamp(2rem, 4vw, 3.5rem)`, Tracking: `-0.03em`, Leading: `1.15`, Weight: `600`
- **Subsection Titles (H3)**: `1.25rem - 1.75rem`, Tracking: `-0.02em`, Weight: `500`
- **Body Large**: `1.125rem (18px)`, Leading: `1.6`, Weight: `400`
- **Body Regular**: `0.9375rem (15px)`, Leading: `1.55`, Weight: `400`

### Monospace (Technical Metadata & System Telemetry): `Geist Mono` / `IBM Plex Mono`
- **Section Index Numbers**: `0.75rem (12px)`, Uppercase, Tracking: `0.15em`, Weight: `500`
- **System Tags & Status Flags**: `0.7rem (11px)`, Uppercase, Tracking: `0.12em`
- **Telemetry & Timestamp Data**: `0.8125rem (13px)`, Tracking: `0.02em`

---

## 4. Spacing, Grid & Layout
- **Global Container**: Max width `1440px`, horizontal padding `px-4 sm:px-8 lg:px-12`
- **Editorial 12-Column Grid**: Flexible multi-column divisions with clean vertical and horizontal border guidelines.
- **Section Padding**: `py-24 sm:py-32 lg:py-40` for spacious breathing room and dramatic editorial rhythm.
- **Hairline Rules**: `border-t border-b border-white/[0.08]` dividing key conceptual modules cleanly without visual noise.

---

## 5. Motion & Interaction Principles
- **Motion Philosophy**: Every animation communicates an engineering or distribution concept (e.g. data flowing through a pipeline, branching nodes, closed-loop compounding flywheel).
- **Duration & Easing**: 200ms - 400ms snappy cubic-bezier `[0.16, 1, 0.3, 1]`.
- **Accessibility**: Full `prefers-reduced-motion` fallbacks to instant transitions.
