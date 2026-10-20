# Evidence: define-agent-responsibilities

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/define-agent-responsibilities.md`
**Topic:** 1.4 - How to define clear responsibilities for each enterprise agent
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, evidence `define-agent-responsibilities-2026-08-21-evidence.md`)

**Validation harness:** `validateABL()` from `packages/compiler/src/platform/ir/validate-ir.ts` at `hotfix_Artemis_1.8.1`. It runs `parseAgentBasedABL`, `compileABLtoIR`, and all IR validators. The code came from a read-only `git archive` of `hotfix_Artemis_1.8.1` (core, compiler, shared, shared-kernel, i18n, config, auth-dsl, shared-auth, analyzer) into a scratch directory outside the repo, run with `tsx` and a tsconfig path map. Command: `npx tsx v.ts <files>`. Scratch path: `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/b2bc1dfb-b8c5-45da-a8f1-9a78b40dd311/scratchpad/h`. The code repo was not modified.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (section dispatch ~1565-1610, `parseGoal`, `parsePersona`, `parseLimitations`, post-parse checks ~1900) | GOAL required (`E124`), PERSONA optional, LIMITATIONS list parsing. |
| `packages/core/src/diagnostics/registry.data.ts` (`E124`) | Message text for the missing-GOAL error. |
| `packages/core/src/types/agent-based.ts` (`HandoffConfig`, `HandoffContext`, lines ~1780-1850) | Handoff surface at 1.8.1: new `enabledWhen`, `priority`, `onFailure`, `onReturn`, `remote`, `async`, `experienceMode`, `context.set`, `context.memoryGrants`, `context.history`. |
| `packages/compiler/src/platform/ir/compiler.ts` (~1405-1420 identity lowering, ~1582-1600 routing lowering, ~3174 `autoGuardConstraint`, ~5803-5900 `validateDeclaredIntentCategories`) | Identity lowering, HANDOFF lowered to `ir.routing.rules`, intent classification exposure, `UNDECLARED_INTENT_CATEGORY`. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`. |
| `packages/compiler/src/platform/ir/compiler.ts` `compileHistoryStrategy` (~4308) | HISTORY accepts `auto`, `none`, `full`, `summary_only`, `last_N`. |
| `apps/runtime/src/services/execution/routing-executor.ts:26670` | Runtime fallback to `DEFAULT_HANDOFF_HISTORY_STRATEGY`. |
| `apps/runtime/src/services/pipeline/null-safe-eval.ts` (`nullSafeEvaluateCondition`) | A condition that reads a missing variable rewrites that comparison to false. |
| `packages/shared/src/prompts/prompt-catalog.ts` (templates `supervisor`, `supervisor_direct`, `specialist`, `standalone`, `fallback`) | `{{#if limitations}}` appears only in `specialist` (line ~256) and `standalone` (line ~384). Supervisor templates render goal and persona only. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`resolveTemplateKey` 1004, `buildTemplateContext` 2021) | Template selection by agent role; limitations are rendered only from the catalog templates above. |
| `packages/compiler/src/platform/ir/validate-ir.ts` (`validateABL` 3777) and harness runs | `INVALID_HANDOFF_TARGET`, `INVALID_ROUTING_TARGET`, `UNUSED_REQUIRED_GATHER_FIELD` observed with real validation. |
| `examples/ai4hc-payer-provider/agents/plan_information_agent.agent.abl` | Real usage of GOAL, PERSONA, LIMITATIONS, CONSTRAINTS `always:` phase, FLOW. |

## Drift since `hotfix_Artemis_1.4.4`

`git diff --stat hotfix_Artemis_1.4.4..hotfix_Artemis_1.8.1` over parser, types, and IR: 64 files, +18434 / -3017. `agent-based-parser.ts` changed by about 7300 lines. `compiler.ts` by about 1980 lines. `flow-step-executor.ts` by about 10400 lines.

| Drift item | Impact on article | Action |
| ---------- | ----------------- | ------ |
| Parser errors now carry registry codes (`E124`, `E200`, `E201`, `E560`, `W200`, `W201`). Behavior is unchanged from 1.4.4. | The article can cite `E124`. | Added `E124` to the surface table and troubleshooting. |
| `UNDECLARED_INTENT_CATEGORY` warning is new. It is absent from the 1.4.4 compiler. | The article's `WHEN: intent.category == "..."` conditions depend on `INTENTS`. | Added a "How the handoff boundaries work" section and a troubleshooting row. |
| HANDOFF default HISTORY is `full` (already in the published article). | Confirmed current. | Kept. |
| HANDOFF gained `ENABLED_WHEN`, `PRIORITY`, `ON_FAILURE`, `ON_RETURN`, remote and async options, `SET`, memory grants. | The article's two entries use none of them. | Out of scope for this article. Recorded as a gap, not covered. |
| `LIMITATIONS` render only in the specialist and standalone catalog templates. Supervisor templates omit them. | Article said limitations "guide the model" without scope. | Added a scoping sentence. |
| `CONSTRAINTS` flat `REQUIRE`/`ON_FAIL` | Validated with zero warnings on 1.8.1. | None. |
| `autoGuardConstraint` | The condition `account_id IS SET` already contains `IS SET`, so it is returned unchanged. | None. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `GOAL` as the owned outcome, required | yes | `E124` in parser post-check and registry | covered |
| `PERSONA` single-line and multiline `|` | yes | `parsePersona`, harness pass | covered (multiline in the example) |
| `LIMITATIONS` as a quoted list | yes | `parseLimitations` | covered |
| `LIMITATIONS` rendered in prompt for specialist and standalone only | yes | `prompt-catalog.ts` lines 256, 384 | covered (new sentence) |
| `LIMITATIONS` is prompt guidance, not enforcement | yes | Only consumer is prompt-builder (`ir.identity.limitations`) | covered |
| `INTENTS` plus `WHEN: intent.category == "x"` handoff | yes | `compiler.ts` routing lowering, harness pass | covered |
| Undeclared intent category in a condition | yes (warning) | Harness: `UNDECLARED_INTENT_CATEGORY` | covered (new) |
| Quoted semantic `WHEN` text | yes | Used in article 1.6 and validated there | out of scope here, covered in 1.6 |
| `HANDOFF` `RETURN: false` | yes | `HandoffConfig.return` | covered |
| `HANDOFF` `HISTORY` default `full` | yes | `contract-source-data.ts:3` | covered |
| `CONSTRAINTS` flat `REQUIRE` with `ON_FAIL` | yes | Harness pass | covered |
| `DELEGATE` boundary | yes | Types and parser | covered as a decision-guide row only |
| Human escalation (`ESCALATE`) | yes | Valid section | covered as a decision-guide row only |
| HANDOFF `ENABLED_WHEN`, `PRIORITY`, `ON_FAILURE`, `ON_RETURN`, remote | yes | `HandoffConfig` | out of scope: routing detail belongs to the supervisor and routing articles |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Null-safe condition evaluation, catalog template selection, routing lowering | covered | None |
| Required companion resources identified | `Billing_Support_Agent` and `Live_Agent` defined in the same example; validating alone gives `INVALID_HANDOFF_TARGET` | covered | Added to Verification |
| Referenced variables have sources | `account_id` and `verification_method` come from `GATHER`; `PASS: [account_id]` sends a gathered field | covered | Source stated in prose |
| Fallback/failure/ambiguity behavior verified | `human_help` route; `ON_FAIL` on the constraint; unset field makes a condition false | covered | None |
| Customer verification path defined | Five concrete steps | covered | None |
| Production readiness checklist included | Present | covered | Added "every handoff target exists" |

## Example validation

**Validation harness:** `validateABL()` from `packages/compiler/src/platform/ir/validate-ir.ts` at `hotfix_Artemis_1.8.1`. It runs `parseAgentBasedABL`, `compileABLtoIR`, and all IR validators. The code came from a read-only `git archive` of `hotfix_Artemis_1.8.1` (core, compiler, shared, shared-kernel, i18n, config, auth-dsl, shared-auth, analyzer) into a scratch directory outside the repo, run with `tsx` and a tsconfig path map. Command: `npx tsx v.ts <files>`. Scratch path: `/private/tmp/claude-504/-Users-Prabhat-Singh-Documents-GitHub-docs-v2/b2bc1dfb-b8c5-45da-a8f1-9a78b40dd311/scratchpad/h`. The code repo was not modified.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Account_Security_Agent`) | full-document (as a set with blocks 2 and 3) | `validateABL` on blocks 1-3 together | pass | none | kept byte for byte |
| Block 2 (`Billing_Support_Agent`) | full-document | same run | pass | none | kept byte for byte |
| Block 3 (`Live_Agent`) | full-document | same run | pass | none | kept byte for byte |
| Block 1 alone | negative check | `validateABL` on block 1 only | 6 errors: `INVALID_ROUTING_TARGET`, `INVALID_HANDOFF_TARGET` | targets missing | documented in Verification and Troubleshooting |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime/prompt, tests, and examples? | pass | Parser, `agent-based.ts`, `compiler.ts`, `prompt-catalog.ts`, `prompt-builder.ts`, example agent, harness |
| Did I search synonyms and neighboring constructs? | pass | `GUARDRAILS`, `IDENTITY`, `INSTRUCTIONS`, `ESCALATE`, `DELEGATE`, `ENABLED_WHEN` |
| Did I identify every supported authoring style, default, and fallback? | pass | Default HISTORY, default persona handling, phase-less constraints |
| Did I separate optional helpers from required executable configuration? | pass | `GOAL` required; `PERSONA`, `LIMITATIONS` optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Limitations are prompt text for specialist/standalone agents |
| Did I avoid making one pattern sound like the only pattern? | pass | Decision guide lists six choices |
| Could a customer build this another supported way? | pass | `IDENTITY`, `INSTRUCTIONS`, and quoted `WHEN` are in article 1.6 |
| What evidence answers "are you not considering all scenarios"? | n/a | Scenario map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Every claim traces to code; handoff and intent claims validated | None |
| Senior content writer | ready | Goal-first, tables for decisions, short sentences, no dashes | None |
| Product manager/customer enablement | ready | Worksheet, verification utterances, named error codes for support searches | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Added limitation scope, intent category check, `E124`; removed an unverifiable trace claim | 5 |
| Depth of conceptual explanation | 4 | Added "How the handoff boundaries work" | 5 |
| Readability and usability | 4 | Shortened sentences, removed em dash | 5 |
| Coverage of examples | 4 | Kept validated set; added negative check | 4 |
| Search and discovery quality | 4 | Named `INVALID_HANDOFF_TARGET`, `UNDECLARED_INTENT_CATEGORY`, `UNUSED_REQUIRED_GATHER_FIELD`, `E124` | 5 |
| Completeness of workflow and failure modes | 4 | Added target-missing and undeclared-category failures | 4 |
| Customer/partner self-service readiness | 4 | No repo paths in the article | 5 |
| Scenario comprehensiveness | 4 | Handoff extras scoped out with reason | 4 |
| Article completeness | 4 | Added Related HowTos | 5 |

**Minimum final score:** 4
**Gate result:** pass

## Doc discrepancies for human review

- The published article contained an em dash and the claim "the trace shows your literal source text". No code evidence supports the trace claim. It is removed.
- The `intent.category` conditions depend on the intent classifier. No runtime run was possible here. The routing claim rests on compiler lowering and null-safe evaluation code only.
- `LIMITATIONS` is absent from supervisor prompts. Articles 1.3 and 1.7 may describe limitations on supervisors. Review them.

## Open questions

- Should the article show `ENABLED_WHEN` or `PRIORITY` on handoffs? Left out as routing detail.
