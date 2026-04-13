# Krescendo AI Agency - Global Claude Code Configuration

> **Agency:** Krescendo AI | **Operator:** Gustavo Diaz
> **Standard:** Every project gets the full toolkit. No exceptions.

---

## Installed Skills (~/.claude/skills/)

| Skill | Description |
|-------|-------------|
| **banner-design** | Design banners for social media, ads, website heroes, print. 22+ styles, multi-platform. |
| **brand** | Brand voice, visual identity, messaging frameworks, asset management, brand consistency. |
| **design** | Comprehensive design: brand identity, logos (55 styles), CIP, presentations, banners, icons, social photos. |
| **design-system** | Token architecture (primitive/semantic/component), CSS variables, spacing/typography scales, component specs. |
| **design-taste-frontend** | Senior UI/UX Engineer rules. Overrides LLM biases with metric-based rules, strict component architecture. |
| **full-output-enforcement** | Overrides LLM truncation. Enforces complete code generation, bans placeholder patterns. |
| **high-end-visual-design** | High-end agency design standards. Exact fonts, spacing, shadows, animations. Blocks cheap AI defaults. |
| **industrial-brutalist-ui** | Swiss typographic + military terminal aesthetics. Rigid grids, extreme type scale, analog degradation. |
| **minimalist-ui** | Clean editorial interfaces. Warm monochrome, typographic contrast, flat bento grids, muted pastels. |
| **redesign-existing-projects** | Upgrades existing sites/apps to premium quality. Audits and fixes generic AI patterns. |
| **slides** | Strategic HTML presentations with Chart.js, design tokens, responsive layouts, copywriting formulas. |
| **stitch-design-taste** | Semantic Design System for Google Stitch. Premium DESIGN.md files with anti-generic UI standards. |
| **tailwind-design-system** | Scalable design systems with Tailwind CSS v4, design tokens, component libraries. |
| **ui-animation** | UI motion: springs, gestures, drag, clip-path reveals, easing, timing, animation review. |
| **ui-styling** | shadcn/ui + Radix UI + Tailwind. Accessible UIs, dark mode, responsive layouts, canvas designs. |
| **ui-ux-pro-max** | 50+ styles, 161 palettes, 57 font pairings, 161 product types, 99 UX guidelines, 25 chart types, 10 stacks. |
| **web-design-guidelines** | Review UI code for Web Interface Guidelines compliance, accessibility, UX best practices. |

## Installed Plugins (~/.claude/plugins/)

| Plugin | Source | Version |
|--------|--------|---------|
| **frontend-design** | claude-code-plugins (anthropics/claude-code) | 1.0.0 |
| **frontend-design** | awesome-claude-plugins (ComposioHQ) | latest |
| **chrome-devtools-mcp** | chrome-devtools-plugins (ChromeDevTools) | 0.20.3 |
| **senior-frontend** | awesome-claude-plugins (ComposioHQ) | latest |
| **theme-factory** | awesome-claude-plugins (ComposioHQ) | latest |
| **marketing-skills** | marketingskills (coreyhaines31) | latest |
| **web-dev** | cc-marketplace | 1.0.0 |
| **ui-ux-pro-max** | ui-ux-pro-max-skill (nextlevelbuilder) | 2.5.0 |
| **ui-designer** | cc-marketplace | 1.0.0 |

## Active MCP Servers

| Server | Command | Purpose |
|--------|---------|---------|
| **magic** | `npx @21st-dev/magic@latest` | 21st.dev Magic - AI component generation |
| **playwright** | `npx @playwright/mcp@latest` | Browser automation and testing |
| **context7** | `npx @upstash/context7-mcp` | Context7 - up-to-date library documentation |
| **sequentialthinking** | `npx @modelcontextprotocol/server-sequential-thinking` | Step-by-step reasoning for complex problems |
| **github** | `npx @modelcontextprotocol/server-github` | GitHub API integration |

---

## Standard Workflow & Auto-Activation Rules

### Always activate ALL skills for every project

When working on ANY project, regardless of type, automatically leverage the full skill set:

1. **Design & UI tasks** - Use `design-taste-frontend`, `high-end-visual-design`, `ui-ux-pro-max`, and `full-output-enforcement` together. Never produce generic AI-looking output.
2. **Frontend development** - Activate `senior-frontend`, `frontend-design`, `tailwind-design-system`, `ui-styling`, and `ui-animation`.
3. **Presentations** - Use `slides` with `design-system` tokens and `brand` voice.
4. **Redesigns** - Always run `redesign-existing-projects` audit first, then apply `high-end-visual-design` standards.
5. **Marketing** - Full `marketing-skills` plugin suite (30+ sub-skills: SEO, ads, email, CRO, etc.).
6. **Debugging** - Use `chrome-devtools-mcp` plugin for browser debugging, performance, accessibility, memory leaks.
7. **Theming** - Use `theme-factory` to apply or generate themes for any artifact.

### Quality Standards (enforced on all output)

- **No generic AI aesthetics.** Every UI must pass `design-taste-frontend` and `high-end-visual-design` rules.
- **Complete code only.** `full-output-enforcement` is always active - no truncation, no placeholders, no "// rest of code here".
- **Accessibility first.** All UI output must meet `web-design-guidelines` compliance.
- **Design tokens.** Use `design-system` token architecture for all systematic design work.

### Krescendo AI Agency Info

- **Agency Name:** Krescendo AI
- **Focus:** Premium web design, development, and AI-powered digital solutions
- **Standards:** High-end agency quality on every deliverable
- **Operator:** Gustavo Diaz
- **Workflow:** Research > Plan > Design > Build > Review > Deploy
- **Philosophy:** Every pixel matters. Ship production-grade, not prototypes.
