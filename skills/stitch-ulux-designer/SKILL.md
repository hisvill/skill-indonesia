---
name: stitch-ulux-designer
description: Turn one reference image into a complete UI design system and a working multi-screen prototype. Use when the user shares a design reference (screenshot, Pinterest pin, sketch, wireframe, photo of a screen) and wants UI screens built from it, with design tokens, design system guidelines, and a standalone HTML prototype. No MCP server needed; everything is produced natively in chat.
---

# stitch-ulux-designer

A custom skill modelled on the workflow. One image in, five things out. It runs without any MCP connection: the agent reads the image, extracts the visual DNA, writes the system, and builds the prototype.

## When to use

- The user shares a design reference image and says "make UI like this", "tiru ini", or asks for screens in a style.
- The user names an app or a set of screens and attaches a style reference.
- Do NOT use for a blank brief with no image: ask for a reference first. One strong reference beats a long text description.

## Input

1. **One reference image** (required). A screenshot, a Pinterest pin, a sketch, a wireframe, a photo of a screen.
2. **Short brief** (optional, ask if missing): app name, what the app does, which screens (default: 3), platform (default: mobile app, phone-framed).

## Workflow

### Step 1. Analyse the image first (deep analysis mode)

Before drawing anything, read the image and extract its visual DNA. Write it down; every later step must follow it, not drift from it.

- Dominant colours + hex values: background, surface, ink/text, accents, success/warning/error.
- Typography style: display font character (geometric, grotesque, rounded, extended) and body font character.
- Corner radius: sharp, small, large, pill.
- Border style: none, hairline, or bold (e.g. 2px solid ink).
- Shadow style: soft blur, or hard offset (e.g. 2px 2px 0 ink).
- Spacing rhythm: tight or airy; card padding.
- Component shapes: cards, buttons, pills, nav bar, charts.
- Icon style: line icons, filled, playful.
- Imagery: illustration style, mascots, photos.
- Overall vibe in one line (e.g. neobrutalism: bold borders, bright fills, hard shadows, playful).

### Step 2. Design tokens (Markdown file)

Write `DESIGN-TOKENS.md` with exact values, no placeholders:

- `colors`: accent colours with hex, success, warning, error, ink, ink-muted, surface, surface-dark, surface-light.
- `typography`: `font-display` and `font-sans` (real Google Fonts names), plus a scale table with size, lineHeight, weight, letterSpacing for display, h1, h2, kpi-lg, kpi-md, body-md, caption-sm.
- `spacing`: xs 4px, sm 8px, md 12px, lg 16px, xl 20px, 2xl 24px, 3xl 32px.
- `radius`: md 16px, lg 24px, xl 28px, 2xl 32px, full 9999px.
- `borders`: default `2px solid <ink>`.
- `shadows`: brutal-sm `2px 2px 0px <ink>`, brutal-md `4px 4px 0px <ink>`.

### Step 3. Design System Guidelines (Markdown file)

Write `DESIGN-SYSTEM.md`, numbered sections:

1. Visual Philosophy & Identity: what the style is, in plain words.
2. Colour Usage: which colour does what, and what never to mix.
3. Typography Rules: where display vs body is used.
4. Component Rules & Tactile Micro-interactions: nested radius (parent card uses radius.2xl 32px with padding, inner elements smaller), interactive elements use a `150ms ease-out` transition, pressed states translate by 2px and shrink the shadow.
5. Layout & Screens: the screen list, what each screen shows, navigation between them.

### Step 4. Standalone index.html prototype

Write ONE self-contained `index.html` (Tailwind CSS v4 browser CDN, Google Fonts, Lucide icons CDN, Tailwind v4 CSS-first `@theme` config carrying the tokens as `--color-*` and `--font-*`).

Requirements:

- Single file, opens directly in a browser, no build step.
- Phone-framed screens (about 390px wide), centred on a background that uses the style.
- Tab navigation across the screens (e.g. 1. Analytics, 2. Saving, 3. Success), plus a bottom nav bar inside each phone.
- Realistic data everywhere: amounts, names, dates. No lorem ipsum, no placeholder text.
- Lucide icons only (`<i data-lucide="...">` + `lucide.createIcons()`). No emojis as icons.
- Title: `<AppName> — <Style> <Type> Prototype` (e.g. `CrunchPay — Neobrutalism Analytics & Savings Prototype`).
- Mobile-first, every screen fully readable at phone width.

### Step 5. Design board

Add a board section (top of the prototype page, or a `DESIGN-BOARD.md`): colour swatches with hex values, typography specimens, and one sample of each core component. This is the quick visual check that tokens and screens agree.

### Step 6. Verify

Render the HTML and screenshot every screen. Check: all screens readable, tokens match the reference, no overflow, no placeholder text, navigation works. Fix what fails and re-render. Do not deliver an unverified prototype.

## Output files

All outputs go under `~/workspace/stitch-ulux/<project-slug>/`:

- `DESIGN-TOKENS.md`
- `DESIGN-SYSTEM.md`
- `index.html`
- `DESIGN-BOARD.md` (or board section inside `index.html`)

## Rules

- Never invent tokens that contradict the reference image. If the image shows 2px borders and hard shadows, the tokens say so.
- One token set across all screens. A screen that drifts from the tokens is a bug.
- Realistic data only. Amounts, names, and dates must look like a real product.
- No emojis as UI icons. Lucide only.
- The reference image is the authority. When in doubt, look at it again instead of guessing.

## Best practices (from the reel)

- Start from one strong reference, not five weak ones.
- Extract tokens BEFORE drawing screens, so the system drives the UI instead of the other way round.
- Show the finished screens first, then the system behind them.
- Keep the prototype to one file so anyone can open it with a double click.
