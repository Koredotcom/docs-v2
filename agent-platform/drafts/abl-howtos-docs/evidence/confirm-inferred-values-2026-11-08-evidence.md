# Evidence: confirm-inferred-values

**Date:** 2026-11-08
**Topic:** 6.8 - How to confirm inferred values before using them
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/confirm-inferred-values-2026-11-08-draft.md`
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
| `infer_confirm: true` holds values as pending | yes | flow-step-executor 24785-24815 | covered |
| `infer_confirm: false` writes directly | yes | 17327-17336 | covered |
| Mixed fields in one step | yes | 17322-17345 | covered |
| Accept, decline, defer outcomes | yes | 19270-19380; test ablp-4891 | covered |
| Correction after decline | yes | 19395-19402 | covered |
| Action IDs `inference_confirmation.*` | yes | 19270-19380 | covered |
| Fixed prompt wording | yes (no authoring option found) | field-inference 140-155 | covered |
| Trace events `inference_*` | yes | Report and test | covered |
| Pending values hidden from conditions | yes | `_pending_inferences` storage | covered |
| `satisfied_by: [user_input]` rejecting an accepted confirmation | yes (resolved) | Accept path writes with source `inference_confirmation` (flow-step-executor 19314); `classifyProvenanceSource` returns `unknown` (value-write-policy 232-250), `classifySatisfactionClass` returns `system` (177-188); the write is rejected with `provenance_class_not_allowed` (88-100); `applySessionAssignment` returns `applied: false` (session-assignment-executor 750-790), so `inference_accepted` lists no fields. Not run end to end | covered |
| Reasoning agents apply confirmation | no | No readers outside FLOW | covered (stated) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | flow-step-executor 19270-19402 | covered | Source reading only. Run a live trace before publication. |
| Required companion resources identified | Companions defined or marked project-local in the article | covered | none |
| Referenced variables have sources | Variable sources list in the article | covered | none |
| Fallback/failure/ambiguity behavior verified | Decline, defer, unclear | covered | none |
| Customer verification path defined | Steps 1-7 | covered | none |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Trip_Intake) | full-document | parse + compile (r6b ex_infer_confirm_flow) | pass | none | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Added the three-outcome table | 4 |
| Depth of conceptual explanation | 4 | Kept | 4 |
| Readability and usability | 4 | Kept | 4 |
| Coverage of examples | 3 | Added mixed and custom-step variations | 4 |
| Search and discovery quality | 4 | Kept | 4 |
| Completeness of workflow and failure modes | 4 | Kept | 4 |
| Customer/partner self-service readiness | 4 | Kept | 4 |
| Scenario comprehensiveness | 3 | Added correction after decline | 4 |
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
| Senior platform architect | ready | Outcome table is the right spine. | none |
| Senior content writer | ready | Short. | none |
| Product manager/customer enablement | ready | Clear default warning. | none |

## Known gaps and notes

- Resolved by code reading: `satisfied_by` without `system` rejects an accepted confirmation. The article warns about it.
- Confirmation prompt wording can differ slightly from the sample in the article.

Doc bug for human review: none.
