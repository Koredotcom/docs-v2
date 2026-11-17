# Evidence: infer-values-from-context

**Date:** 2026-11-08
**Topic:** 6.7 - How to infer values from conversation context
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/infer-values-from-context-2026-11-08-draft.md`
**Release:** `hotfix_Artemis_1.9.2` (code repo read-only, branch head `cf1f637c7ed`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

`validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts` (and an IR dumper built from the same bundle by the research agents, in `scratchpad/r6a`, `r6b`, `r6c`) bundled with esbuild into `scratchpad/h/validate.mjs`. Workspace packages resolve to `packages/*/src`. The bundle needed three local patches: the zod version pin check disabled (installed zod is 4.3.6), `@agent-platform/database` and `mongoose` stubbed, and `@marcbachmann/cel-js`, `intl-messageformat`, `chevrotain`, `fast-xml-parser`, `js-yaml`, `re2js`, `sanitize-html`, `saxes`, and `uuid` installed in the scratch folder. Command: `node validate.mjs <file>...` from `scratchpad/h`. The runtime was not started. All runtime claims come from source reading. Article ABL blocks were re-extracted from the draft by `scratchpad/h/check.py` and revalidated.

## Source files inspected

Line ranges are approximate. Re-check before citing a single line.

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts (1152-1215, 2580-3230, 6779-7560)` | Top-level GATHER named-block parser, FLOW step GATHER list, map and inline forms, field properties, `mask_config`, `semantics`, ATTACHMENTS, AWAIT_ATTACHMENT, SECURE_INPUT, boolean literal handling. |
| `packages/core/src/types/agent-based.ts (1486-1630)` | `GatherField`, `GatherFieldSemantics`, `GatherActivation`, `AttachmentFieldAST`. |
| `packages/core/src/parser/yaml-parser.ts (854-880)` | YAML surface: E175 on bad activation. |
| `packages/compiler/src/platform/ir/compiler.ts (2519-3010, 5773-6005)` | GATHER lowering, entity_ref merge, enum rule generation, FLOW step inheritance, strategy default, attachments defaults. |
| `packages/compiler/src/platform/constructs/utils.ts (304-640, 710-775)` | `checkGatherComplete`, activation, prompt building, `validateField`. |
| `packages/compiler/src/platform/ir/validate-field-refs.ts (385-390, 968-997, 1137-1245)` | `UNUSED_REQUIRED_GATHER_FIELD`, `INVALID_DEPENDS_ON_REF`, `CIRCULAR_DEPENDS_ON`, `UNDEFINED_CONDITION_VAR`. |
| `packages/compiler/src/platform/ir/validate-ir.ts (330-342, 1443, 2208-2270)` | `GATHER_VALIDATION_RULE_REQUIRED`, FLOW ON_INPUT warnings, `INVALID_AWAIT_ATTACHMENT`. |
| `packages/compiler/src/platform/security/sensitive-display.ts (13-45)` | Display renderer: redact, mask, replace. |
| `apps/runtime/src/services/execution/reasoning-executor.ts (3205, 11668-12856, 22937-23060, 23299, 27168-27300, 28490-28520)` | Pre-pass extraction, inline_gather tool, fallback, `GATHER_INCOMPLETE`, transient cleanup call. |
| `apps/runtime/src/services/execution/flow-step-executor.ts (1851-1960, 4110-4228, 7558-7632, 12520-12590, 16779-16920, 17237-17350, 19270-19402, 22322, 22846, 23025-23045, 24756-25460, 25581-25770)` | FLOW gather prompts, extraction scope, extract_only fail-closed, prior-turn inference and confirmation, retries, ON_INPUT, corrections, unit conversion, SECURE_INPUT. |
| `apps/runtime/src/services/execution/{gather-utils.ts, field-inference.ts, extraction-validation.ts, ner-strategy.ts, await-attachment-executor.ts, transient-cleanup.ts, response-boundary.ts, sensitive-trace-values.ts, types.ts}` | Extraction eligibility, inference prompt text, value normalization, strategy resolution, attachments, sensitive handling. |
| `apps/runtime/src/services/pii/tokenize-for-storage.ts (60-475), effective-pii-policy.ts (62-90)` | Vault tokenization and the project PII policy precedence. |
| `packages/shared/src/prompts/template-engine.ts, packages/compiler/src/platform/constructs/dual-evaluator.ts` | Template and condition behavior for list and range values. |
| `examples/ai4hc-payer-provider, examples/training-support-desk, examples/pci-secure-input-demo` | Shipped usage of extract_only, inline_gather, SECURE_INPUT. |
| `apps/runtime/src/__tests__/execution/{ablp-4891-prior-turn-gather.test.ts, flow-gather-oninput.test.ts, ablp-6109-sensitive-extraction-value-trace.test.ts}` | Runtime tests that pin inference, progressive extraction, and sensitive trace behavior. |
| `agent-platform/abl/reference/gather.mdx, flow.mdx, data-types-and-utilities.mdx (public reference cross-check)` | Cross-check only. No claim rests on it. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `infer: true` in FLOW step | yes | flow-step-executor 17237-17350; test ablp-4891 | covered |
| `infer` on reasoning agent | yes (limited effects) | gather-utils 36-55; utils 508-526 | covered |
| `infer_confidence` default 0.8, no range check | yes | 17313; harness k_conf_range | covered |
| `infer_confirm` default true | yes | 17325 | covered (link to 6.8) |
| Source: recent customer messages only | yes | 17275-17285 | covered |
| `conversation_history_window` default 2, max 10, 0 off | yes | 17275-17285; core 11433; harness infer.agent | covered |
| Max 3 fields per pass | yes | project-runtime-config 1246-1251 | covered |
| Unscored value accepted only if grounded | yes | 16779-16792 | covered |
| Runs once at step entry | yes | 24760-24790 | covered |
| Boolean literal fallbacks | yes | Harness u_bool_case, m_confirm_yes | covered |
| Project `inference.model_tier` | gap | No runtime reader found | not stated |
| Inference from tool results or memory | no | Negative search | covered (stated) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | flow-step-executor 17237-17350 | covered | Source reading only. Run a live trace before publication. |
| Required companion resources identified | Companions defined or marked project-local in the article | covered | none |
| Referenced variables have sources | Variable sources list in the article | covered | none |
| Fallback/failure/ambiguity behavior verified | Low confidence fallback, window 0 | covered | none |
| Customer verification path defined | Steps 1-5 | covered | none |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Trip_Intake) | full-document | parse + compile (w6/infer) | pass | none | kept |
| Block 2 (Support_Router_Intake) | full-document | parse + compile (r6b) | pass | none | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Added silent-fallback table from harness runs | 4 |
| Depth of conceptual explanation | 4 | Kept | 4 |
| Readability and usability | 4 | Kept | 4 |
| Coverage of examples | 4 | Added variations for each supported form | 4 |
| Search and discovery quality | 4 | Kept | 4 |
| Completeness of workflow and failure modes | 3 | Added failure and gap rows | 4 |
| Customer/partner self-service readiness | 4 | Kept | 4 |
| Scenario comprehensiveness | 3 | Added defaults and edge values | 4 |
| Article completeness | 4 | Kept | 4 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | See source table. Tests and shipped examples listed. No runtime test was executed. |
| Did I search synonyms and neighboring constructs? | pass | Searched `PASS`, `INPUT`, `CONTEXT`, `SUMMARY`, `HISTORY`, `memory_grants`, `granted_memory`, `ON_RETURN`, `RETURNS`, `last_n`, `summary_only`, `a2a`, `remote`. |
| Did I identify every supported authoring style, shorthand, alias, default, and fallback? | pass | Shorthand and `CONTEXT` forms, `last_N` shorthand, block `mode`/`count`, `EXPECT_RETURN` alias, retired `grant_memory`, defaults and fallbacks recorded in the variant map. |
| Did I distinguish optional helpers from required configuration? | pass | The article states which keys are optional and what the default is. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Alternatives are stated in the concept section and variations. |
| Could a customer build the scenario another supported way the article omits? | pass | Delegate and remote alternatives are covered or linked. |
| If asked 'are you not considering all scenarios?', what evidence would I show? | pass | The variant map above, with a code or harness reference per row. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Limits are stated up front. | Live-check the unscored-value rule. |
| Senior content writer | ready | Clear. | none |
| Product manager/customer enablement | ready | Prevents over-promising. | none |

## Known gaps and notes

- Inference runs through the normal extraction pipeline. A separate inference prompt exists only in unit tests.
- Runtime not executed.

Doc bugs for human review (gather.mdx 214-244): inference is described more broadly than the verified behavior.
