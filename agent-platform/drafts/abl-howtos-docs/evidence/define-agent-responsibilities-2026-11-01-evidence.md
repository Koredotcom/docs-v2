# Evidence: define-agent-responsibilities

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/define-agent-responsibilities.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/define-agent-responsibilities-2026-11-01-review.md`
**Topic:** 1.4 - How to define clear responsibilities for each enterprise agent
**Workflow:** Refresh against `release_Artemis_1.9.0`. The previous scan used `hotfix_Artemis_1.8.1` (evidence `define-agent-responsibilities-2026-10-19-evidence.md`).
**Verdict:** update-needed

**Validation harness:** `node /private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/9ea46136-0cae-4156-8653-b15e7af1a4e3/scratchpad/harness/validate.mjs <files>` from `/tmp`. It runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators over the files as one project at `release_Artemis_1.9.0`. The code repo was not modified and no branch was switched. Runtime services were not started, so runtime behavior is close-read.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`E124` at line 2191) | `GOAL` required |
| `packages/core/src/diagnostics/registry.data.ts` (`E124`) | Error code |
| `apps/runtime/src/services/execution/identity-limitations.ts` (new in 1.9.0, ABLP-6754) | Shared `LIMITATIONS` formatter |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`buildIdentityLimitationsText`, `buildCustomSystemPrompt` near 4229 to 4323, `resolveTemplateKey` near 1030) | Generated templates, custom prompt, template key by role |
| `packages/shared/src/prompts/prompt-catalog.ts` (lines 256, 384) | `limitations` only in `specialist` and `standalone` templates. File diff adds only an unrelated tool description |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (near 23780 to 23810, `reasoning_zone`) | `LIMITATIONS` in FLOW reasoning steps (new) |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (near 15490) and `apps/runtime/src/services/search-ai/description-builder.ts` | `LIMITATIONS` in the Knowledge Base search planner direct answer (new) |
| `apps/runtime/src/services/pipeline/null-safe-eval.ts` | Missing variable gives false. Diff is a comment only |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` | `INVALID_HANDOFF_TARGET`. No diff since 1.8.1 |
| `packages/compiler/src/platform/ir/compiler.ts` (comment-only `WHEN` guard, `validateDeclaredIntentCategories`) | Handoff lowering, `UNDECLARED_INTENT_CATEGORY` |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` | History default `full`. No diff |
| `examples/ai4hc-payer-provider/agents/plan_information_agent.agent.abl` | No diff since 1.8.1 |

## Drift analysis (1.8.1 to 1.9.0)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| `LIMITATIONS` in a custom `SYSTEM_PROMPT` | New (ABLP-6754). The text renders where the prompt writes `{{limitations}}`. When the rendered prompt does not carry the complete block, the runtime appends a `Limitations:` block. This applies to every role, including supervisors | Scope sentence rewritten |
| `LIMITATIONS` in FLOW reasoning steps | New. The step system prompt includes a `Limitations:` block | Scope sentence rewritten |
| `LIMITATIONS` in the Knowledge Base search planner | New. A direct answer prompt includes the limitations | Scope sentence rewritten |
| Generated supervisor templates | Still omit `limitations` (`resolveTemplateKey` maps router and orchestrator to `supervisor` and `supervisor_direct`) | Sentence kept, scoped to the generated prompt |
| Comment-only `WHEN` in a handoff | New compile error (`WHEN is required`). The article's `WHEN` conditions are real | No change |
| `INVALID_HANDOFF_TARGET`, `INVALID_ROUTING_TARGET`, `UNDECLARED_INTENT_CATEGORY`, `UNUSED_REQUIRED_GATHER_FIELD`, `E124` | Present. Harness reproduces the target errors alone | None |
| Handoff history default `full` | Unchanged | None |
| Missing variable makes condition false | Unchanged | None |
| Completed `RETURN: false` parent hand-back | New runtime path. A target can hand back to its completed direct parent when it declares a route to it | Out of scope. Doc review note |
| `Live_Agent` stub in the article | Prints text only. It does not transfer to a person. Doc bug since 1.8.1 | Replaced with `ESCALATE`, matching article 1.3 |
| Parser, compiler, and `flow-step-executor.ts` large diffs | Re-verified every article claim | None beyond the above |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `GOAL` required | yes | `E124` | covered |
| `PERSONA` single-line and multiline | yes | Harness block 1 | covered |
| `LIMITATIONS` quoted list | yes | Harness block 1 | covered |
| `LIMITATIONS` in specialist and standalone generated prompts | yes | `prompt-catalog.ts` 256, 384 | covered |
| `LIMITATIONS` in custom `SYSTEM_PROMPT`, FLOW reasoning step, Knowledge Base planner | yes (new) | `prompt-builder.ts`, `flow-step-executor.ts`, `reasoning-executor.ts` | covered (new) |
| `LIMITATIONS` absent from generated supervisor prompts | yes | `resolveTemplateKey`, catalog | covered |
| `LIMITATIONS` is guidance, not enforcement | yes | Only prompt consumers | covered |
| `INTENTS` plus `intent.category` handoff | yes | Harness block 1 | covered |
| Undeclared category warning | yes | Compiler, unchanged | covered |
| Quoted semantic `WHEN` | yes | Article 1.6 and 1.3 | out of scope: covered by 1.3 and 1.6 |
| `HANDOFF` `RETURN: false`, `HISTORY` default `full` | yes | Unchanged | covered |
| `CONSTRAINTS` flat `REQUIRE` with `ON_FAIL` | yes | Harness block 1 | covered |
| `DELEGATE` boundary | yes | Types, parser | covered (decision row) |
| `ESCALATE` human route | yes | Harness block 3 (new) | covered |
| `HANDOFF` extras (`ENABLED_WHEN`, `PRIORITY`, `ON_FAILURE`, `ON_RETURN`, remote) | yes | `HandoffConfig` | out of scope: routing articles |
| Hand-back to completed parent | yes (new) | `resolveHandoffAncestorResume` | out of scope: return handling topics |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Template selection, limitation surfaces, null-safe evaluation, routing lowering | covered | Close-read, not run |
| Required companion resources identified | `Billing_Support_Agent` and `Live_Agent` defined. `Live_Agent` now escalates. Human transfer needs a connection and `routing` block, stated with a link | covered | None |
| Referenced variables have sources | `account_id` and `verification_method` from `GATHER`. `PASS: [account_id]` and `context_for_human` use `account_id` | covered | None |
| Fallback, failure, ambiguity behavior verified | `human_help` route, `ON_FAIL`, unset field gives false | covered | None |
| Customer verification path defined | Five steps. Step 4 now expects an escalation | covered | None |
| Production readiness checklist included | Present. Adds escalation connection item | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Account_Security_Agent`) | full-document (set) | Harness, blocks 1 to 3 together | pass | none | kept |
| Block 2 (`Billing_Support_Agent`) | full-document | same run | pass | none | kept |
| Block 3 (`Live_Agent`, proposed `ESCALATE` form) | full-document | same run on the proposed text | pass | none | rewritten |
| Old block 3 (`COMPLETE` stub) | full-document | Harness | pass | none | replaced. It compiles but does not transfer to a person |
| Block 1 alone | negative check | Harness | 6 errors: `INVALID_ROUTING_TARGET`, `INVALID_HANDOFF_TARGET` | as documented | documented |

Scratch files: `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/9ea46136-0cae-4156-8653-b15e7af1a4e3/scratchpad/responsibilities`.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime and prompt code, tests, examples? | pass | Source table |
| Did I search synonyms and neighboring constructs? | pass | `IDENTITY`, `SYSTEM_PROMPT`, `limitations`, `INSTRUCTIONS`, `ESCALATE`, `DELEGATE`, `reasoning_zone` |
| Did I identify every style, default, fallback? | pass | Scenario map |
| Did I separate optional helpers from required configuration? | pass | `GOAL` required, others optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Limitations are prompt text on four surfaces |
| Did I avoid making one pattern sound like the only one? | pass | Six-row decision guide |
| Could a customer build this another supported way? | pass | Custom prompt and FLOW forms now named |
| What evidence answers "are you not considering all scenarios"? | pass | Scenario map and drift table |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Limitation surfaces match code. Human route now matches runtime | None |
| Senior content writer | ready | Small edits, same voice, no dashes | None |
| Product manager/customer enablement | ready | Escalation prerequisite named. Troubleshooting row added | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Added three new limitation surfaces. Replaced stub | 5 |
| Depth of conceptual explanation | 4 | Scope sentence expanded | 5 |
| Readability and usability | 4 | Short sentences | 5 |
| Coverage of examples | 3 | `Live_Agent` now operationally meaningful | 4 |
| Search and discovery quality | 4 | Added escalation troubleshooting row | 5 |
| Completeness of workflow and failure modes | 4 | Added escalation failure and checklist item | 5 |
| Customer/partner self-service readiness | 4 | No repo paths | 5 |
| Scenario comprehensiveness | 4 | New surfaces covered. Hand-back scoped out | 4 |
| Article completeness | 5 | Template sections present | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- The 1.8.1 article shipped a `Live_Agent` stub that prints text but never reaches a person. This refresh fixes it.
- Published page `agent-platform/abl/how-to/define-agent-responsibilities.mdx` needs the same changes after approval.
- The article says `LIMITATIONS` is absent from supervisor prompts. This is true for the generated prompt only. A supervisor with a custom `SYSTEM_PROMPT` now receives them. Check articles 1.3 and 1.7 for the old claim.
- The routing claim rests on compiler lowering and null-safe evaluation. No runtime run was possible.

## Open questions

- Should the article describe the hand-back of a `RETURN: false` child to its completed parent? Left to return handling topics.
