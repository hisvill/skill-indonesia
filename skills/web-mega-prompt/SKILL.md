---
name: web-mega-prompt
description: Generate comprehensive Technical Spec Mega-Prompts for single-file HTML/CSS/JS websites. Use this skill whe
---
# Web Mega-Prompt Creator

## Summary
Guide the user through generating a highly precise "God-Tier Mega-Prompt" for building a single-file zero-dependency website. This skill forces a two-step workflow: first gathering the requirements through structured questions, and then generating the final Mega-Prompt inside a markdown code block.

## When to Use
- The user asks to generate a prompt for a website or landing page.
- The user provides a design reference and wants a prompt to recreate it.
- The conversation revolves around creating a "Single-file HTML/CSS/JS" prompt.

## Steps

1. **Phase 1: Clarify and Gather Requirements (DO NOT generate the prompt yet)**
   - Acknowledge the request and ask the user for specific details about the website before writing any prompt. Ask about:
     - **Goal & Theme:** Brand identity, vibe, and visual style (e.g., dark mode, cinematic, minimal).
     - **Sections:** What specific sections are needed (e.g., Hero, Navigation, Marquee, Footer).
     - **Typography & Colors:** Preferred fonts (e.g., Google Fonts) and color palette (CSS variables).
     - **Motion & Interactions:** Specific animation effects (e.g., scroll reveals, spring physics, Lenis smooth scroll, WebGL fluid canvas).
     - **Assets & Copy:** Any specific hardcoded text, images, or assets to include.
   - Wait for the user's response before proceeding to Phase 2.

2. **Phase 2: Write the Mega-Prompt**
   - Once the user provides the details, draft the Mega-Prompt as a rigorous Technical Spec that leaves no room for hallucination.
   - Place the **entire Mega-Prompt** inside a single markdown code block (` ```markdown ... ``` `) so it is easy to copy.
   - **Enforce the following constraints within the generated Mega-Prompt:**
     - **Single-File Zero Dependency:** Pure HTML/CSS/JS in one `index.html` file. No build steps, no frameworks (e.g., React/Tailwind), no bundlers. External libraries only via CDN (e.g., Lenis).
     - **Adaptive Rem Grid:** Include a CSS `vw`-based root font-size scheme (e.g., `@media (max-width:1920px) { html { font-size: 0.833333vw; } }`) to ensure proportional scaling.
     - **Hardcoded Values:** All colors (CSS custom properties), typography sizes, text copy, and animation timings must be strictly hardcoded fixed constants.
     - **Animation Physics (Spring-to-CSS):** Convert spring animations into precise `cubic-bezier` curves and millisecond durations (e.g., `cubic-bezier(0.16,1,0.3,1)`), and define exact stagger delays (e.g., `i * 90ms`).

3. **Phase 3: Delivery**
   - Present the prompt to the user.
   - Provide options for a concise version and a highly detailed version.
   - Ask if any architecture, variables, animations, or assets need adjustment.
