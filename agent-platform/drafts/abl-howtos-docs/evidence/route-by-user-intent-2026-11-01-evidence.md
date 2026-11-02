# Evidence: route-by-user-intent

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-by-user-intent.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/route-by-user-intent-2026-11-01-review.md`
**Topic:** 3.1 - How to route conversations based on user intent
**Workflow:** Refresh against `release_Artemis_1.9.0`. The previous scan used `hotfix_Artemis_1.8.1` (evidence 2026-10-20).
**Verdict:** update-needed (small, additive)

## Validation harness

Harness: `node .../scratchpad/harness/validate.mjs <files>`, run from `/tmp`. It calls `validateABL` over the files as one project (parse, compile, cross-agent validation). Scratch files live in `.../scratchpad/s31s32/` (`a/`, `a_snip/`, `b/`, `b_snip/`, `neg/`). Runtime evaluators were checked with `.../scratchpad/s31s32/ev.mjs` (`evaluateConditionDual`) and `cls.mjs` (`isNaturalLanguageRoutingHint`). Runtime services were not started. The code repo was not modified and no branch was switched (`release_Artemis_1.9.0`, HEAD `9b7b268cc61`).

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/condition-quotes.ts` (new in 1.9.0 vs 1.8.1) | `maskConditionLineComments`, `isCommentOnlyCondition`, `unwrapWholeQuotedCondition`. `//` outside literals is a comment. |
| `packages/compiler/src/platform/ir/compiler.ts` (`compileAgentToIR` near 1727 and the comment-only loop, routing block near 1740) | Comment-only `WHEN` or `ENABLED_WHEN` throws `FIELD_REQUIRED`. `priority: idx + 1`. `PRIORITY` not copied. |
| `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` | Expression markers for quoted phrases: uppercase `AND`, `OR`, `NOT`, symbols, `IS SET` (case-insensitive), `contains` and friends, `word(`, ` in [`. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | Comment masking. Comment-only `WHEN` gives `missing_data`. Outcome kinds unchanged. |
| `apps/runtime/src/services/pipeline/routing-resolver.ts`, `null-safe-eval.ts` | Priority sort, first true `WHEN`, `pipeline_routing_resolve` event. `null-safe-eval.ts` changed only for held namespaces (ABLP-4499). |
| `apps/runtime/src/services/execution/routing-executor.ts` (`handleHandoff` guard near 10780, `findSoleMatchingOtherHandoff` 8528, cycle check near 10890, `checkHandoffConditions` near 26200, `handleHandoffFailure` 29169, `resolveHistoryStrategy` 28000, return merge near 14850, `resolveHandoffOnReturnBehavior` 4067, `MAX_RESUME_INTENT_DEPTH` 7176) | Guard, refusal, first match after return, failure actions, history, map allowlist, resume depth. |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | New `handoff_completed` record (ABLP-6764). |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`buildPerAgentTools` 5530, `buildHandoffDescription` 5640) | One action per target, `[Priority N]`, `Use when:`, ENABLED_WHEN filter before de-duplication. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`evaluateParentSupervisorRoutePrecheck` 5710, `evaluateParentSupervisorRouteAfterClassifier`, `detectParentSupervisorRoute` 6137), `runtime-executor.ts` near 16622, `pipeline/config.ts`, `pipeline/types.ts` | Active returning child reroute to the supervisor. New `parentReturn` settings (`minConfidence`, `ignoreAmbiguous`). `digression` event with `action: return_to_parent`. |
| `apps/runtime/src/services/execution/route-admission/select.ts`, `routing-availability.ts`, `routing-availability-trace.ts` | `ENABLED_WHEN` applies to pipeline, return, and model paths. Trace `skipped: availability`. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`, auto fallback 5. |
| `apps/runtime/src/services/runtime-executor.ts` near 8892 | `session` namespace: caller data, then caller context, then platform fields. |

Tests and examples: `packages/compiler/src/__tests__/routing-default-agent.test.ts`, `apps/runtime/src/__tests__/execution/parent-supervisor-route-classifier-path.wiring.test.ts`, `ablp-6547-parent-return-confidence.test.ts` (names only), `examples/travel/agents/traveldesk_supervisor.agent.abl`.

## Drift analysis (1.8.1 to 1.9.0)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| `//` comments in `WHEN` | New. `condition-quotes.ts` is new. Comment-only `WHEN` fails compile (`WHEN is required`). Trailing `//` comment compiles and evaluates. | Added one sentence and a troubleshooting row. |
| `handoff_completed` | New (ABLP-6764). One record per attempt, with `outcome`, `durationMs`, `cause`, `code`. | Added to verification and checklist. |
| Parent return settings | `parentReturn.minConfidence` and `ignoreAmbiguous` are new in 1.9.0. The reroute itself exists in 1.8.1. | Added a short paragraph and a troubleshooting row. Linked to the pipeline configuration article. |
| `ON_RETURN` `map` | Comment in code: an explicit map is an allowlist. Unmapped child fields do not leak. | Added "only the mapped fields return". |
| `resume_intent` | Depth limit 1, trace `resume_intent` with `reasonCode: resume_intent_depth_limit`. Present in 1.8.1 too, not documented. | Added one sentence. |
| Cycle refusal | `Handoff cycle detected` for an agent in the active chain. The waiting RETURN parent is exempt. Present in 1.8.1, not documented. | Added one sentence. |
| `ON_FAILURE` | Refused `WHEN` returns directly and does not call `handleHandoffFailure`. | Added one sentence. |
| Quoted phrase classifier | Markers are broader than the article said (`IS SET`, `word(`). | Reworded one sentence. |
| `PRIORITY`, `ROUTING:`, history default, `map` direction, depth 10, validator codes | Unchanged. Harness re-run confirms. | None. |
| `routing-executor.ts` size | 27.7k to 29.7k lines. | All claims re-verified. |

## Hotfix backport check

The published articles (2026-10-20) were written against `hotfix_Artemis_1.8.1`. Release 1.9.0 does not descend from it (merge base `15eeb40ef77`). Every article claim was re-verified against 1.9.0 source and the harness.

| Behavior in published article | Present in 1.9.0? | Evidence |
| ----------------------------- | ----------------- | -------- |
| `UNDECLARED_INTENT_CATEGORY`, `ENABLED_WHEN_SEMANTIC_REFERENCE`, `GATE_FACT_MODEL_WRITABLE`, `ENABLED_WHEN_ALL_DISABLED_RISK`, `ENABLED_WHEN_SHADOWED_BY_UNCONDITIONAL_ENTRY` | yes | `git grep` finds the same files in both refs. Harness emits `UNDECLARED_INTENT_CATEGORY` (`neg/n_undeclared.abl`) and `ENABLED_WHEN_SEMANTIC_REFERENCE` (`neg/n_enabled_intent.abl`). |
| Route admission and availability (`route-admission/`, `routing-availability.ts`) | yes | `route-admission/select.ts`, `routing-availability.ts` present. Diff since 1.8.1 is 4 small files. |
| `handoff_condition_check` with `reasonCode: handoff_condition_blocked` | yes | `routing-executor.ts` near 10828. |
| `findSoleMatchingOtherHandoff` refusal hint | yes | `routing-executor.ts` near 8528 and 10863. |
| Refusal facts from 1.8.x hotfix commits (ABLP-5947 trace refused handoffs, structured failure details) | yes | `failure: { cause: 'when_blocked', code: 'condition_false' }` near 10880. `handoff_failure` carries `phase`, `action`. |
| `resume_intent` depth limit (`MAX_RESUME_INTENT_DEPTH = 1`) | yes, both refs | `routing-executor.ts` near 7176. |

No article claim depends on a hotfix-only behavior that 1.9.0 lacks. The 32 hotfix-only commits that touch routing files are voice, S2S, fan-out, and clarification fixes. None changes the behavior these articles teach.

## Known 1.9.0 facts check

| Fact | Used by these articles? | Result |
| ---- | ----------------------- | ------ |
| `//` outside quotes is a comment in `WHEN` and `ENABLED_WHEN`. A comment-only condition fails to compile (`condition-quotes.ts`). | Yes. Both articles teach `WHEN`. | Verified. `neg/n_comment_only.abl` gives `AGENT_COMPILATION_FAILED: WHEN is required`. `neg/n_comment_trail.abl` and `neg/n_en_comment.abl` compile. Source: `compiler.ts` `compileAgentToIR` loop over `doc.handoff` and `doc.delegate`. Added one sentence and one troubleshooting row to both. |
| `handoff_completed` trace event with `outcome` and `durationMs`. | Yes. Verification sections. | Verified in `handoff-completion-record.ts` and `routing-executor.ts` near 10057 and 10095. Outcomes: `success`, `rejected`, `blocked`, `error`, `timeout`. Added to verification and checklist. |
| `ON_RETURN` is wired. | Yes. Both articles use `ON_RETURN`. | Verified. `resolveHandoffOnReturnBehavior` (near 4067), map merge near 14850, `MAX_RESUME_INTENT_DEPTH`. |
| `LIMITATIONS` scope | No. | Not used. |
| `!= ""` guard does not skip a call. | No. | Not used. The gates use `!= true`, `== true`, and `session.identityTier`. |

## Scenario and variant map

Diff against the 2026-10-20 map: no row removed, no row changed from yes to no. Three behaviors added (rows marked new).

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `INTENTS:` declared categories with `intent.category == "x"` | yes | Harness clean (`a/blk1`). | covered |
| Inferred categories when `INTENTS:` is absent | yes | `compileIntentClassification`. | covered (one sentence) |
| Pipeline path (classifier, first true `WHEN` by position) | yes | `routing-resolver.ts`. | covered |
| Model-selected path with `WHEN` guard | yes | `routing-executor.ts` near 10780. | covered |
| First-match check after a child returns | yes | `checkHandoffConditions`, `selectedReason: 'first_match'`. | covered |
| Quoted plain-language `WHEN` | yes | `cls.mjs`: `semantic` hint true for lowercase phrases. | covered (variation) |
| Quoted phrase is always true in the pipeline | yes | `ev.mjs`: `"the customer asks about a refund"` gives `true`. | covered |
| `WHEN: true` fallback and `default_agent` | yes | IR `default_agent`. | covered |
| Nested `CONTEXT:` and sibling `PASS`/`SUMMARY`/`HISTORY` | yes | Harness clean (`a_snip/s6`, `s7`). | covered |
| `PASS` value sources | yes | `resolveHandoffPassFieldValue`: parent data, then current turn input for input-type names. | covered |
| History `full`, `auto`, `none`, `summary_only`, `last_n` block | yes | `resolveHistoryStrategy`. | covered |
| Inline `history: { mode: last_n, count: 6 }` | no (ignored) | `neg/n_inline_hist.abl` compiles clean. | covered (gotcha) |
| `EXPECT_RETURN` and `RETURN` alias | yes | Parser. | covered |
| `ON_RETURN` `action`, `map` | yes | `neg/n_mapreverse.abl`: `UNKNOWN_HANDOFF_RETURN_FIELD`. | covered |
| `ON_RETURN` `map` is an allowlist (new wording) | yes | `routing-executor.ts` near 14636 and 14870. | covered |
| `resume_intent` replay depth limit (new) | yes | `MAX_RESUME_INTENT_DEPTH = 1`. | covered |
| Active returning child reroute to supervisor, `parentReturn` (new) | yes | `flow-step-executor.ts` 5710 and 6137. | covered (short paragraph, defers to pipeline article) |
| `ON_RETURN` default merge without `map` | yes | near 14636 (`hasExplicitReturnMap` false path). | covered |
| `ON_RETURN` `handler`, `resume_with`, `set` | yes | Parser, IR `resume_with`. | out of scope: return handling topic |
| `PRIORITY:` | no (parsed, discarded) | `neg/n_routing_ph.abl` compiles clean. `compiler.ts` 1747. | covered (not supported) |
| `ON_FAILURE` `CONTINUE`, `ESCALATE`, `RESPOND` | yes | `handleHandoffFailure` 29169. | covered |
| Bare quoted `ON_FAILURE` | no | `neg/n_bare_fail.abl`: `INVALID_HANDOFF_FAILURE_ACTION`. | covered |
| `ROUTING:` section | no | `neg/n_routing_section.abl`: `E104`. | covered |
| `//` comment in `WHEN` (new) | yes | `neg/n_comment_trail.abl`, `n_comment_only.abl`. | covered |
| Handoff cycle refusal (new coverage) | yes | `routing-executor.ts` near 10890. | covered |
| `ENABLED_WHEN` | yes | Harness. | out of scope: covered in 3.2 and 3.3 |
| `MULTI_INTENT`, `DELEGATE`, remote targets, `memory_grants`, `CONTEXT.set` | yes | Parser. | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Evaluator runs (`ev.mjs`, `cls.mjs`). Guard, return, failure, history code close-read. | covered | Not run end to end. |
| Required companion resources identified | Five-file project. Stand-ins labeled. `Verification_Agent` with `GATHER verified` validated in `a_snip/s8`. | covered | The article snippet does not show `Verification_Agent`. The text says the child must gather `verified`. |
| Referenced variables have sources | `customer_id`, `account_id`: `PASS` rules. `verification_result`: return `map`. `session.identityTier`: platform. | covered | None. |
| Fallback/failure/ambiguity behavior verified | `WHEN: true`, `ON_FAILURE`, refusal, `handoff_completed` outcomes, depth and cycle limits. | covered | None. |
| Customer verification path defined | Seven steps with trace event names. | covered | None. |
| Production readiness checklist included | Ten items. | covered | None. |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 5 (supervisor and four stand-ins) | full-document set | `validate.mjs a/blk1..5.abl` as one project | pass | none | kept |
| Block 6 (`history`) | section-snippet | Supervisor harness with fallback, `a_snip/s6_*` | pass | none | kept |
| Block 7 (sibling keys) | section-snippet | `a_snip/s7_*` | pass | none | kept |
| Block 8 (`ON_RETURN`, with `Verification_Agent` that gathers `verified`) | section-snippet | `a_snip/s8_*` | pass | none | kept |
| Block 9 (specific before general, `session.identityTier`) | section-snippet | `a_snip/s9_*` | pass | none | kept |
| Block 10 (quoted route) | section-snippet | `a_snip/s10_*` | pass | none | kept |
| Block 11 (`ON_FAILURE: RESPOND`) | section-snippet | `a_snip/s11_*` | pass | none | kept |

All 11 fenced blocks in the proposed article are byte-identical to the 2026-10-20 article blocks. Negative probes (`neg/`): `E104`, `UNKNOWN_HANDOFF_RETURN_FIELD`, `HANDOFF_ON_RETURN_WITHOUT_RETURN`, `INVALID_HANDOFF_FAILURE_ACTION`, `UNDECLARED_INTENT_CATEGORY`, `ENABLED_WHEN_SEMANTIC_REFERENCE`, `UNDEFINED_CONDITION_VAR` (unquoted phrase), `AGENT_COMPILATION_FAILED` (comment-only `WHEN`) all behave as the article states.

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified every claim against 1.9.0. Corrected classifier marker sentence. | 5 |
| Depth of conceptual explanation | 4 | Added reroute, allowlist, replay depth. | 5 |
| Readability and usability | 4 | Short additive sentences. No new sections. | 4 |
| Coverage of examples | 4 | Blocks unchanged and re-validated. | 4 |
| Search and discovery quality | 4 | Added `handoff_completed`, `WHEN is required`, `digression`. | 5 |
| Completeness of workflow and failure modes | 4 | Added cycle, `blocked` outcome, refusal versus `ON_FAILURE`. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. | 4 |
| Scenario comprehensiveness | 4 | New rows covered. | 4 |
| Article completeness | 5 | Template sections present. | 5 |

**Gate result:** pass (minimum score 4)

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, types, compiler, runtime, tests, and examples? | pass | Source table. |
| Did I search synonyms and neighboring constructs? | pass | `HANDOFF`, `routing`, `condition`, `intent`, `handoff_to_`, `delegate`, `PRIORITY`, `ENABLED_WHEN`, `ON_RETURN`, `resume_intent`, `parentReturn`, `handoff_completed`, `digression`. |
| Did I identify every authoring style, shorthand, alias, default, and fallback? | pass | Nested and sibling context, `RETURN` alias, history forms, `WHEN: true`, default merge. |
| Did I separate optional helpers from executable configuration? | pass | `INTENTS:` optional, `HANDOFF:` executable. |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Condition styles and path tables. |
| Did I avoid making one pattern the only pattern? | pass | Three condition styles, two context forms, three paths. |
| Could a customer build the scenario another supported way? | pass | Pipeline-only, quoted routes, `DELEGATE`, `MULTI_INTENT` named or scoped out. |
| What evidence shows all scenarios are considered? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Three paths, guard, allowlist, replay limit, reroute, outcome events. Examples validated. | None blocking. End-to-end run not done. |
| Senior content writer | ready | Concept first, tables, short sentences, no dashes. | None. |
| Product manager/customer enablement | ready | Named trace events, error messages, checklist. | None. |

## Documentation discrepancies for human review

- Published `.mdx` `agent-platform/abl/how-to/route-by-user-intent.mdx` matches the `articles/` draft except frontmatter, the back badge, `yaml` fence labels instead of `abl`, and the missing "Related HowTos" section. No content drift.
- Public reference `multi-agent-and-supervisor.mdx` still documents `ROUTING:` and HANDOFF `PRIORITY` ordering. The parser rejects `ROUTING:` (`E104`). The compiler ignores `PRIORITY`. (Carried from 2026-10-20, not re-read in full this run.)
- `parentReturn` is documented in the draft `configure-agent-execution-pipeline.md`. This article now links to it by title. The published `.mdx` set does not have a "Related HowTos" section, so the link needs a manual check after publishing.
- `resolveHistoryStrategy` returns a raw `last_n` for `auto` when a caller forces raw history (`forceRawHistoryOnAuto`). The article describes only the summary-or-last-5 rule.

## Open questions

- Does the pipeline-on reroute run for supervisors that use only the model path? Close-read only.
- `ON_FAILURE: ESCALATE` delivery to a person was not traced (carried over).
- Should `PRIORITY:` produce a warning? Engineering decision (carried over).
