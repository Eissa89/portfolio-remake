# SKILLS REGISTRY

This registry maps the available capability Skills provided in the repository to their specific domains, triggers, usage constraints, target projects, and validation criteria.

---

## Skill Capabilities Inventory

| Skill File | Primary Domain | Core Purpose & Capabilities | Triggers / When to Use | Constraints & Anti-Patterns | Target Projects |
|---|---|---|---|---|---|
| `skill2prompt-output-akseolabs-seo-cinematic-ui.md` | VISUAL DESIGN / SEO / LANDING | Cinematic UI, high-impact hero sections, SEO metadata, semantic structure, dark mode aesthetic | Landing pages, hero sections, visual showcase, metadata optimization | Do NOT sacrifice performance or load times for visuals; preserve content hierarchy | `red-stillness`, `eissa-card` |
| `skill2prompt-output-meodai-skill.color-expert.md` | VISUAL DESIGN / COLOR | Color theory, palette harmony, contrast ratio compliance (WCAG AAA/AA), dark/light theme tokens | Theme creation, background/text contrast tuning, atmospheric color palettes | Do NOT change identity palette (espresso, cream, rust, crimson) arbitrarily | `red-stillness`, `cv-system`, `eissa-card` |
| `skill2prompt-output-greensock-gsap-skills.md` | ANIMATION / MOTION | GSAP / Canvas / WebGL animation, performance animation timing, complex transitions | Interactive particle canvas, smooth scroll transitions, dynamic state transitions | Do NOT run unthrottled animation loops on scroll; always implement `requestAnimationFrame` cleanup | `modules/particles`, `red-stillness`, `cv-system` |
| `skill2prompt-output-nextlevelbuilder-ui-ux-pro-max-skill.md` | UI / UX / INTERACTION | High-density dashboard UX, micro-interactions, responsive touch targets, navigation patterns | Complex component layouts, interactive menus, responsive viewport behavior | Avoid over-engineering micro-interactions; do NOT introduce fake UI actions | `cv-system`, `one-day`, `eissa-card` |
| `skill2prompt-output-Community-Access-accessibility-agents.md` | ACCESSIBILITY (a11y) | ARIA attributes, keyboard navigation, focus trap, screen reader support, reduced motion | Accessibility audit, keyboard focus state validation, semantic HTML verification | Do NOT use `div` with `onclick` without keydown handlers and ARIA roles | ALL projects (`red-stillness`, `cv-system`, `one-day`, `eissa-card`, `pwa-tracker`) |
| `skill2prompt-output-Leonxlnx-taste-skill.md` | DESIGN SYSTEMS / TASTE | Refined typography, spacing rhythm, micro-padding, subtle borders, premium feel | Visual polish phase, typography hierarchy audit, layout alignment | Avoid generic template aesthetics; respect identity decisions in `THE_IDENTITY.txt` | `red-stillness`, `cv-system`, `eissa-card` |
| `skill2prompt-output-AThevon-genjutsu.md` | GAME DESIGN / STATE | Game state machines, decision logic, resource progression, narrative branching | Decision mechanics, resource pressure, save/load state logic | Do NOT add fake progression; ensure reproducible state transitions | `one-day`, `pwa-tracker` |
| `skill2prompt-output-wondelai-skills.md` | PWA / PERFORMANCE / INFRA | Service workers, web app manifest, offline caching strategies, bundle/DOM performance | PWA setup, offline functionality, asset preloading, performance audits | Never claim PWA compliance without testing offline load and manifest validation | `pwa-tracker`, `red-stillness` |

---

## Skill Selection Matrix by Project

### P0.1 — THE RED STILLNESS
- **Primary:** Cinematic UI & Color Expert (`akseolabs`, `meodai`)
- **Supporting:** GSAP Motion (`greensock`)
- **Validation:** Accessibility (`Community-Access`), Performance (`wondelai`)

### P0.2 — CV / PERSONAL SYSTEM
- **Primary:** UI/UX Pro Max (`nextlevelbuilder`)
- **Supporting:** Design Taste (`Leonxlnx`), GSAP Motion (`greensock`)
- **Validation:** Accessibility (`Community-Access`), PWA/Offline (`wondelai`)

### P0.3 — ONE DAY / FOUNDER GAME
- **Primary:** Game Design & State (`AThevon`)
- **Supporting:** UI/UX Pro Max (`nextlevelbuilder`)
- **Validation:** Accessibility (`Community-Access`), State Persistence (`wondelai`)

### P0.4 — PARTICLE / MOTION MODULES
- **Primary:** GSAP / Canvas Motion (`greensock`)
- **Supporting:** Color Expert (`meodai`)
- **Validation:** Performance (`wondelai`)

### P0.5 — EISSA CARD
- **Primary:** UI/UX & Design Taste (`Leonxlnx`, `nextlevelbuilder`)
- **Supporting:** Color Expert (`meodai`)
- **Validation:** Accessibility (`Community-Access`), Responsive Viewport (`wondelai`)

### P0.6 — PWA TRACKER
- **Primary:** PWA / Caching / Storage (`wondelai`)
- **Supporting:** UI/UX Pro Max (`nextlevelbuilder`), Game State (`AThevon`)
- **Validation:** Accessibility (`Community-Access`), Offline Manifest (`wondelai`)
