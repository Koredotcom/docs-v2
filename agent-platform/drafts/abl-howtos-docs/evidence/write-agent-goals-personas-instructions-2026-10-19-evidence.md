# Evidence: write-agent-goals-personas-instructions

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/write-agent-goals-personas-instructions.md`
**Topic:** 1.6 - How to write effective agent goals, personas, instructions, and limitations
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, update-needed for the HISTORY note)

**Validation harness:** `validateABL()` from `packages/compiler/src/platform/ir/validate-ir.ts` at `hotfix_Artemis_1.8.1`. It runs `parseAgentBasedABL`, `compileABLtoIR`, and all IR validators. The code came from a read-only `git archive` of `hotfix_Artemis_1.8.1` into a scratch directory outside the repo, run with `tsx` and a tsconfig path map. Command: `npx tsx v.ts <files>`. Scratch path: `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/b2bc1dfb-b8c5-45da-a8f1-9a78b40dd311/scratchpad/h`. The code repo was not modified.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (section dispatch ~1565-1610; `parseGoal` ~1960; `parseInstructions`; `parsePersona` 5689; `parseLimitations` 5722; `parseIdentity` ~12930; `INSTRUCTIONS` branch ~1790; `SYSTEM_PROMPT:` branch ~1788) | Authoring forms and merge rules. `INSTRUCTIONS` appends to the goal as "\n\nInstructions:\n..." only if `GOAL` already exists. `IDENTITY` sets goal from `role`, persona from `persona` plus " Expertise: ...", and replaces `limitations`. `LIMITATIONS:` replaces the list. `SYSTEM_PROMPT:` must equal the line `SYSTEM_PROMPT:`. |
| `packages/core/src/diagnostics/registry.data.ts` (`E124`) | GOAL required. |
| `packages/compiler/src/platform/ir/compiler.ts` (~1410 identity lowering; `buildSystemPromptTemplate` ~5925) | `identity.goal`, `persona`, `limitations`, `system_prompt.custom`. |
| `packages/shared/src/prompts/prompt-catalog.ts` (templates `supervisor`, `supervisor_direct`, `specialist`, `standalone`, `fallback`) | `Persona: {{persona}}` in all four main templates. `{{limitations}}` only in `specialist` and `standalone`. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`resolveTemplateKey` 1004, `buildTemplateContext` 2021, `buildCustomSystemPrompt` 3820, custom branch 4167) | Catalog templates for non-custom agents. Custom `SYSTEM_PROMPT` template variables: `name`, `goal`, `persona`, plus context fields. No `limitations` variable. Goal, persona, and limitations accept `{{var}}` interpolation. |
| `apps/runtime/src/__tests__/prompt-builder-clone-passthrough.test.ts` | Test that uses `{{member_name}}` in GOAL, PERSONA, and LIMITATIONS. |
| `apps/runtime/src/services/execution/value-resolution.ts` (`interpolateTemplate`) | A missing variable logs "Template variable not found in data context". |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` | HANDOFF history default `full`. |
| `packages/compiler/src/platform/ir/validate-ir.ts` and harness | Validation of every example. |

## Drift since `hotfix_Artemis_1.4.4`

Over parser, types, and IR: 64 files, +18434 / -3017.

| Drift item | Impact on article | Action |
| ---------- | ----------------- | ------ |
| `INSTRUCTIONS` is a parsed section that merges into the goal. The topic title names instructions, but the published article never covered it. | Coverage gap, not new drift. | Added a variation with a validated example and the order rule. |
| `IDENTITY` syntax (`role`, `persona`, `expertise`, `limitations`) and merge rules. | The article named `IDENTITY` with no syntax or caveats. | Added a validated example, a mapping table, and the ordering caveat. |
| Limitations render only in `specialist` and `standalone` prompt templates. | Article implied limitations apply to every agent. | Added a scoping sentence. |
| `{{var}}` interpolation in goal, persona, and limitations (test and prompt-builder). | Not mentioned. | Added a validated variation. |
| Custom `SYSTEM_PROMPT` drops the standard persona and limitations text unless referenced. | Not mentioned. | Added a validated variation and troubleshooting rows. |
| `GOAL` required (`E124`). Registry code is new in the registry, behavior unchanged. | Not mentioned. | Added to the concept table. |
| HANDOFF default HISTORY `full`. | Already in the article. | Kept. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Single-line quoted `GOAL` | yes | `parseGoal` | covered |
| Multiline `GOAL: |` and unquoted inline `GOAL: text` | yes | `parseGoal` | gap: not shown; quoted form is the documented style |
| `GOAL` required | yes (`E124`) | Parser post-check | covered |
| Single-line `PERSONA` | yes | `parsePersona` | covered |
| Multiline `PERSONA: |` | yes | `parsePersona` | covered |
| `PERSONA` optional | yes | Parser sets an empty persona | covered |
| `LIMITATIONS` list | yes | `parseLimitations` | covered |
| `LIMITATIONS` rendered only for specialist and standalone agents | yes | `prompt-catalog.ts` | covered |
| `INSTRUCTIONS` appended to goal, order-dependent | yes | Parser and harness parse output | covered |
| `IDENTITY` with `role`, `persona`, `expertise`, `limitations` | yes | `parseIdentity`, harness parse output | covered |
| `IDENTITY` overrides earlier `GOAL` and `LIMITATIONS` | yes | Harness parse output (`t/g7.abl`) | covered |
| `{{var}}` interpolation in goal, persona, limitations | yes | Test file, `buildTemplateContext` | covered |
| Custom `SYSTEM_PROMPT` with `{{goal}}` and `{{persona}}` | yes | `buildCustomSystemPrompt` | covered |
| `SYSTEM_PROMPT: |` on one line | no (E105 errors) | Harness | covered as a caution |
| Quoted semantic `WHEN` boundary handoff | yes | Harness | covered |
| Legacy indented `GOAL`/`PERSONA` under `AGENT:` | yes (legacy) | `LEGACY_INDENTED_AGENT_METADATA` | out of scope: legacy |
| BEHAVIOR_PROFILE changing persona or limits | yes | Separate topic 1.7 | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Catalog templates, custom prompt variables, interpolation test | covered | No runtime run possible here |
| Required companion resources identified | `Billing_Specialist` defined next to the refund agent | covered | None |
| Referenced variables have sources | `order_id` and `customer_id` have no source in the minimal example | covered | Marked as project-local assumptions in the article; `{{member_name}}` comes from `GATHER` |
| Fallback/failure/ambiguity behavior verified | Boundary handoff and refusal tests; `E124`; ordering failures | covered | None |
| Customer verification path defined | Six steps | covered | None |
| Production readiness checklist included | Present | covered | Added target and variable source checks |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Refund_Policy_Agent`) with block 2 | full-document set | `validateABL` on blocks 1 and 2 together | pass | none | kept byte for byte |
| Block 2 (`Billing_Specialist`) | full-document | same run | pass | none | kept byte for byte |
| Block 3 (`Billing_Answer_Agent`) | full-document | `validateABL` | pass | none | kept |
| Block 4 (`Identity_Verification_Agent`, multiline persona) | full-document | `validateABL` | pass | none | kept |
| Block 5 (`Returns_Agent`, `INSTRUCTIONS`) | full-document | `validateABL` plus parse output check | pass | none | new |
| Block 6 (`Identity_Verification_Agent`, `IDENTITY`) | full-document | `validateABL` plus parse output check | pass | none | new |
| Block 7 (`Member_Support_Agent`, interpolation) | full-document | `validateABL` | pass | none | new |
| Block 8 (`Policy_Assistant`, `SYSTEM_PROMPT`) | full-document | `validateABL` | pass | none | new |
| Block 1 alone | negative check | `validateABL` | 3 errors (`INVALID_HANDOFF_TARGET` family) | target missing | block 2 is shown next to it |
| `INSTRUCTIONS` before `GOAL` | negative check | parse output | goal replaced; instructions lost | as documented | cited |
| `IDENTITY` after `GOAL` and `LIMITATIONS` | negative check | parse output | goal and limitations replaced | as documented | cited |
| `SYSTEM_PROMPT: |` | negative check | `validateABL` | `E105` errors | cited |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime/prompt, tests, and examples? | pass | See sources |
| Did I search synonyms and neighboring constructs? | pass | `INSTRUCTIONS`, `IDENTITY`, `SYSTEM_PROMPT`, `DESCRIPTION`, `BEHAVIOR`, `EXECUTION` |
| Did I identify every supported authoring style, default, and fallback? | pass | Multiline goal forms recorded as a gap |
| Did I separate optional helpers from required configuration? | pass | `GOAL` required only |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Catalog templates and custom prompt behavior |
| Did I avoid making one pattern sound like the only pattern? | pass | Short, multiline, `INSTRUCTIONS`, `IDENTITY`, interpolation, custom prompt |
| Could a customer build this another supported way? | pass | Behavior profiles are covered by 1.7 |
| What evidence answers "are you not considering all scenarios"? | n/a | Scenario map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Merge rules, prompt scope, and custom prompt gap are code-verified | None |
| Senior content writer | ready | Concept table first, one example per variation, short sentences | None |
| Product manager/customer enablement | ready | Troubleshooting maps ordering and custom prompt surprises to causes | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Removed "enforceable boundaries" wording; scoped limitations; verified merge rules | 5 |
| Depth of conceptual explanation | 4 | Added concept table and prompt scope | 5 |
| Readability and usability | 4 | Shorter sentences; no banned phrases | 5 |
| Coverage of examples | 3 | Added `INSTRUCTIONS`, `IDENTITY`, interpolation, custom prompt examples, all validated | 5 |
| Search and discovery quality | 4 | Named `E124`, `INSTRUCTIONS`, `IDENTITY`, `SYSTEM_PROMPT` | 5 |
| Completeness of workflow and failure modes | 3 | Added ordering and custom prompt failures | 4 |
| Customer/partner self-service readiness | 4 | No repo paths in the article | 5 |
| Scenario comprehensiveness | 3 | Covered every `yes` row except legacy and multiline goal forms | 4 |
| Article completeness | 5 | None | 5 |

**Minimum final score:** 4
**Gate result:** pass

## Doc discrepancies for human review

- The published article used "enforceable boundaries" for limitations. Code treats limitations as prompt text only. Reworded.
- The published article named `IDENTITY` without syntax. The title also lists "instructions", which the article never covered. Both are now covered.
- Limitations are absent from supervisor prompts. Articles 1.3 and 1.4 may need the same scoping.
- The minimal example leaves `order_id` and `customer_id` without a source. The code block is unchanged. The article labels them as assumptions.

## Open questions

- Whether to document the multiline `GOAL: |` form. It is accepted. Left as a gap to keep the article short.
- Runtime prompt rendering was close-read only. No live session was run.
