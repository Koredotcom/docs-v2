# Evidence: write-agent-goals-personas-instructions

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/write-agent-goals-personas-instructions.md`
**Topic:** 1.6 - How to write effective agent goals, personas, instructions, and limitations
**Workflow:** Refresh against `release_Artemis_1.9.0` (HEAD `9b7b268cc61`). Previous scan: `hotfix_Artemis_1.8.1`.

**Validation harness:** `validateABL()` from `packages/compiler/src/platform/ir/validate-ir.ts` at `release_Artemis_1.9.0`. Command: `node <scratchpad>/harness/validate.mjs <files>`, run from `/tmp`. A second script (`parse.mjs`) prints the parsed goal, persona, and limitations. Scratch files: `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/9ea46136-0cae-4156-8653-b15e7af1a4e3/scratchpad/t16`. The code repo was not modified.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`GOAL`, `PERSONA`, `IDENTITY`, `LIMITATIONS` dispatch ~1852-1884; `SYSTEM_PROMPT:` ~2075; `INSTRUCTIONS` ~2082; `E124` ~2191; `parseGoal`, `parsePersona`, `parseLimitations`, `parseIdentity`, `parseInstructions`) | These parse functions are byte-identical to 1.8.1. Merge rules are unchanged. New: inline-value section boundaries, `INSTRUCTIONS` marked repeatable (~806), `W498` for a step `PERSONA` (~4106). |
| `packages/core/src/diagnostics/registry.data.ts` (`E124`, `E101`, `W498`) | `W498` is new. `E101` for a duplicate singleton section. |
| `packages/compiler/src/platform/ir/compiler.ts` (`collectSystemPromptLimitationsWarnings` ~2070-2095) | New warning `SYSTEM_PROMPT_LIMITATIONS_APPENDED` when `SYSTEM_PROMPT` is set, `LIMITATIONS` exist, and no `{{limitations}}` or `{{ limitations }}` appears. |
| `apps/runtime/src/services/execution/identity-limitations.ts` | New shared formatter. Heading "Limitations:" and one `- rule` line each. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`buildIdentityLimitationsText` ~1294; `carriesCompleteBlock` ~1322; `buildTemplateContext` ~2404; `buildCustomSystemPrompt` ~4274-4325; `resolveTemplateKey` 1029) | Custom prompts now bind `limitations` when the agent declares any. The runtime appends the block when the rendered prompt does not carry it. Router and orchestrator roles still use `supervisor` and `supervisor_direct`. |
| `packages/shared/src/prompts/prompt-catalog.ts` (templates at ~64, ~158, ~254, ~382) | `{{limitations}}` only in `specialist` and `standalone`. `Persona: {{persona}}` in all four. Unchanged. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`buildReasoningZoneSurface` ~23737-23830) | FLOW `REASONING: true` step prompt now includes persona, then "Limitations:", then behavior profiles, then goal (ABLP-6654, ABLP-6754). Goal, persona, and limitations accept `{{var}}`. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (~15429-15440) | The knowledge search classify path now passes limitations with the persona. Not documented: platform detail. |
| `apps/runtime/src/services/execution/__tests__/custom-system-prompt-limitations.test.ts` | Tests: append without slot, explicit slot, spaced slot, suppressed slot, near-duplicate rule, hand-written block, adjacent text, parity across paths. |
| `apps/runtime/src/__tests__/execution/flow-reasoning-step-limitations.executor.test.ts` | FLOW reasoning step limitations. |
| `apps/runtime/src/__tests__/prompt-builder-clone-passthrough.test.ts` | `{{member_name}}` in goal, persona, limitations. |

## Drift analysis 1.8.1 to 1.9.0

| Drift item | Impact on article | Action |
| ---------- | ----------------- | ------ |
| Custom `SYSTEM_PROMPT` now supports `{{limitations}}` and always carries `LIMITATIONS` (ABLP-6754, PR 5401). | The article said the list "is not a template variable" and told the author to write limits into the template. That is now wrong. The published block 8 now raises a compiler warning. | Rewrote the section. Replaced block 8 with a validated version that uses `{{limitations}}`. Added the warning code, table, verification, and checklist rows. |
| `LIMITATIONS` reach FLOW `REASONING: true` step prompts (ABLP-6654). | The article implied only specialist and standalone prompts carry limitations. | Added a "where limitations reach the model" table. |
| `W498`: step `PERSONA` is ignored. | Not mentioned. | Added a sentence, mistake row, troubleshooting row. |
| `INSTRUCTIONS` may repeat. Each section appends "Instructions:" text to the goal. | The article described one section. | No change. Behavior matches "appends". Recorded in the scenario map. |
| Generated supervisor and `supervisor_direct` templates still omit limitations. | Article claim holds. | Kept, now in the table. |
| `GOAL`, `PERSONA`, `INSTRUCTIONS`, `IDENTITY`, `LIMITATIONS` parse functions. | Identical to 1.8.1. | None. |
| Strict validation setting (`strict-validation.ts`): promotes `GUARDRAIL_UNKNOWN_PROPERTY`, `MEMORY_INVALID_*` warnings to errors. | Does not include `SYSTEM_PROMPT_LIMITATIONS_APPENDED`. | No article change. |
| `E101` duplicate `GOAL`, `PERSONA`, `IDENTITY`, `SYSTEM_PROMPT` section. Existed in 1.8.1. | Not covered. | Harness check only (duplicate `GOAL` gives `E101`). Not added: low value. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Single-line quoted `GOAL` | yes | `parseGoal` | covered |
| Multiline `GOAL: |` and unquoted inline `GOAL: text` | yes | `parseGoal` | gap: not shown; quoted form is the documented style |
| `GOAL` required | yes (`E124`) | Parser post-check | covered |
| Single-line `PERSONA` | yes | `parsePersona` | covered |
| Multiline `PERSONA: |` | yes | `parsePersona` | covered |
| `PERSONA` optional | yes | Parser sets an empty persona | covered |
| Step-level `PERSONA` | no (`W498`) | Harness (`n_flowpersona.abl`) | covered (new) |
| `LIMITATIONS` list | yes | `parseLimitations` | covered |
| `LIMITATIONS` in specialist and standalone standard prompts | yes | `prompt-catalog.ts` | covered |
| `LIMITATIONS` absent from router and orchestrator standard prompts | yes | `resolveTemplateKey`, catalog | covered |
| `LIMITATIONS` in FLOW reasoning step prompts | yes (new) | `flow-step-executor.ts` ~23800 | covered (new) |
| `LIMITATIONS` in custom `SYSTEM_PROMPT` via `{{limitations}}` or appended | yes (new) | `buildCustomSystemPrompt`, tests | covered (new) |
| Custom `SYSTEM_PROMPT` with no placeholder warns | yes (new) | Harness: `SYSTEM_PROMPT_LIMITATIONS_APPENDED` on `b8.abl` and on a supervisor | covered (new) |
| `INSTRUCTIONS` appended to goal, order-dependent, repeatable | yes | Parser, `parse.mjs` output | covered |
| `IDENTITY` with `role`, `persona`, `expertise`, `limitations` | yes | `parseIdentity`, `parse.mjs` | covered |
| `IDENTITY` overrides earlier `GOAL` and `LIMITATIONS` | yes | `parse.mjs` (`n_order.abl`) | covered |
| `{{var}}` interpolation in goal, persona, limitations | yes | Test file, `buildTemplateContext`, step surface | covered |
| Custom `SYSTEM_PROMPT` with `{{goal}}` and `{{persona}}` | yes | `buildCustomSystemPrompt` | covered |
| `SYSTEM_PROMPT: |` on one line | no (`E105` errors) | Harness (`n_pipe.abl`) | covered as a caution |
| Quoted semantic `WHEN` boundary handoff | yes | Harness | covered |
| Legacy indented `GOAL`/`PERSONA` under `AGENT:` | yes (legacy) | `LEGACY_INDENTED_AGENT_METADATA` | out of scope: legacy |
| Behavior profile changing persona or limits | yes | Topic 1.7 | out of scope |
| Prompt library prompt selected for `SYSTEM_PROMPT` | yes | Test `path=prompt-library`; limitations appended | out of scope: Studio feature, no ABL syntax |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Prompt builder close-read, custom prompt tests, step surface code | covered | No live run |
| Required companion resources identified | `Billing_Specialist` defined next to the refund agent | covered | None |
| Referenced variables have sources | `order_id` and `customer_id` have no source in the minimal example; `{{member_name}}` comes from `GATHER` | covered | Marked as project-local assumptions in the article |
| Fallback/failure/ambiguity behavior verified | Boundary handoff and refusal tests; `E124`; ordering failures; custom prompt warning | covered | None |
| Customer verification path defined | Seven steps | covered | None |
| Production readiness checklist included | Present; adds `{{limitations}}` placement | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Refund_Policy_Agent`) with block 2 | full-document set | `validate.mjs` on blocks 1 and 2 together | pass | none | kept byte for byte |
| Block 2 (`Billing_Specialist`) | full-document | same run | pass | none | kept byte for byte |
| Block 3 (`Billing_Answer_Agent`) | full-document | `validate.mjs` | pass | none | kept |
| Block 4 (`Identity_Verification_Agent`, multiline persona) | full-document | `validate.mjs` | pass | none | kept |
| Block 5 (`Returns_Agent`, `INSTRUCTIONS`) | full-document | `validate.mjs` | pass | none | kept |
| Block 6 (`Identity_Verification_Agent`, `IDENTITY`) | full-document | `validate.mjs` plus `parse.mjs` | pass | none | kept |
| Block 7 (`Member_Support_Agent`, interpolation) | full-document | `validate.mjs` | pass | none | kept |
| Block 8 as published (`Policy_Assistant`, hard-coded rule) | full-document | `validate.mjs` | pass with 1 warning | `SYSTEM_PROMPT_LIMITATIONS_APPENDED` | replaced |
| Block 8 as proposed (`{{limitations}}`) | full-document | `validate.mjs` | pass | none | new |
| Block 1 alone | negative check | `validate.mjs` | 3 errors (`INVALID_ROUTING_TARGET`, `INVALID_HANDOFF_TARGET`) | target missing | block 2 is shown next to it |
| Custom prompt on a supervisor with no placeholder | negative check | `validate.mjs` | `SYSTEM_PROMPT_LIMITATIONS_APPENDED` | as expected | cited |
| Step `PERSONA` in a FLOW | negative check | `validate.mjs` | `W498` | as expected | cited |
| `INSTRUCTIONS` before `GOAL`, `IDENTITY` after `GOAL` and `LIMITATIONS` | negative check | `parse.mjs` | goal replaced, limitations replaced | as documented | cited |
| Repeated `INSTRUCTIONS` | positive check | `parse.mjs` | both appended under "Instructions:" | none | recorded |
| `SYSTEM_PROMPT: |` | negative check | `validate.mjs` | `E105` errors | cited |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime/prompt, tests, and examples? | pass | See sources |
| Did I search synonyms and neighboring constructs? | pass | `INSTRUCTIONS`, `IDENTITY`, `SYSTEM_PROMPT`, `LIMITATIONS`, `limitations` template variable, `SYSTEM_PROMPT_LIMITATIONS_APPENDED`, `W498`, `BEHAVIOR` |
| Did I identify every supported authoring style, default, and fallback? | pass | Multiline goal forms stay a gap |
| Did I separate optional helpers from required configuration? | pass | `GOAL` required only |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Prompt path table, custom prompt placement |
| Did I avoid making one pattern sound like the only pattern? | pass | Short, multiline, `INSTRUCTIONS`, `IDENTITY`, interpolation, custom prompt |
| Could a customer build this another supported way? | pass | Behavior profiles in 1.7; prompt library is Studio only |
| What evidence answers "are you not considering all scenarios"? | n/a | Scenario map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Prompt path table matches the 1.9.0 builder; the custom prompt rules match the tests | None |
| Senior content writer | ready | One table replaces a long paragraph; examples unchanged except block 8 | None |
| Product manager/customer enablement | ready | The new warning code is searchable and has a fix row | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Fixed the outdated custom prompt claim; added the prompt path table | 5 |
| Depth of conceptual explanation | 4 | Added where limitations reach the model | 5 |
| Readability and usability | 4 | Table in place of prose | 5 |
| Coverage of examples | 3 | Replaced block 8 so it validates without warnings | 5 |
| Search and discovery quality | 4 | Named `SYSTEM_PROMPT_LIMITATIONS_APPENDED` and `W498` | 5 |
| Completeness of workflow and failure modes | 4 | Added warning, step persona, and verification rows | 5 |
| Customer/partner self-service readiness | 4 | No repo paths in the article | 5 |
| Scenario comprehensiveness | 4 | Multiline `GOAL` stays a gap | 4 |
| Article completeness | 5 | None | 5 |

**Minimum final score:** 4
**Gate result:** pass

## Doc discrepancies for human review

- The published custom `SYSTEM_PROMPT` section is wrong for 1.9.0. It says the limitations list is not a template variable. The published example also raises a compiler warning now.
- Topics 1.3 and 1.4 (supervisors) may still say that supervisor prompts omit limitations. That holds for the standard prompt only. A custom `SYSTEM_PROMPT` on a supervisor now carries limitations. Review both.
- A `FLOW` reasoning step now carries limitations. Topic 1.5 gets the same fact.
- The minimal example leaves `order_id` and `customer_id` without a source. The code block is unchanged. The article labels them as assumptions.

## Open questions

- Whether to document the multiline `GOAL: |` form. It is accepted. Left as a gap to keep the article short.
- Runtime prompt rendering was close-read and checked against the unit tests. No live session was run.
- `SYSTEM_PROMPT_LIMITATIONS_APPENDED` is a warning, so the validator does not block deploys. Strict validation does not promote it. Confirm that is intended.
