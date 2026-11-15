---
name: anatomi-prompt-octa-prompt
**One Master Orchestrator. Eight Specialized Pillars. One Integrated Prompt Architecture.**
description: Anatomi Prompt mengubah ide mentah, kebutuhan, dan prompt pengguna menjadi spesifikasi instruksi AI yang menjaga intensi, mengurai requirements, mengelola konteks dan variabel, menetapkan metode serta workflow, mengendalikan batasan dan exception, menentukan completion criteria, dan membangun output contract yang dapat diperiksa..
---

## Arsitektur

- `M00 — anatomi-prompt`: master orchestrator, intent router, coordinator, integrator, conflict resolver, cross-pillar validator.
- `P1 — role-persona-architect`
- `P2 — objective-task-architect`
- `P3 — context-variable-architect`
- `P4 — reasoning-workflow-architect`
- `P5 — constraints-guardrails-architect`
- `P6 — edge-case-recovery-architect`
- `P7 — stop-completion-architect`
- `P8 — output-schema-architect`

Cross-pillar services: capability/platform readiness, evidence/provenance, instruction hierarchy and trust boundary, semantic fidelity, intent traceability, conflict arbitration, quality assurance, benchmark/regression, feedback/version management, and prompt efficiency.

## Octa-Prompt output contract

BUILD/REFINE menghasilkan satu blok kode dengan tepat delapan heading utama: ROLE & PERSONA ARCHETYPE; CORE OBJECTIVE & TASK MATRIX; CONTEXT & VARIABLE ANCHORS; COGNITIVE REASONING & WORKFLOW; CONSTRAINTS & NEGATIVE GUARDRAILS; EDGE CASES & ERROR HANDLING; STOP & COMPLETION CRITERIA; OUTPUT SCHEMA & FORMATTING SPEC.

Mode `LEGACY_SIX_PART` tersedia hanya ketika diminta secara eksplisit.

## Batas eksekusi

Skill menyusun dan mengaudit prompt, bukan menjalankan tugas yang tertulis dalam prompt sumber. Ketersediaan model, data, tool, akses, izin, atau runtime tidak boleh diasumsikan. Static audit tidak sama dengan dynamic execution test.

## Package layout

Portable skill files berada di `skills/<skill-name>/SKILL.md`. Dokumen kontrak, katalog, pola, dan acceptance cases berada di bawah `skills/anatomi-prompt/references/` dan `tests/`.
