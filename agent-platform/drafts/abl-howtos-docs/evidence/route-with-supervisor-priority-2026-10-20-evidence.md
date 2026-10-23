# Evidence: route-with-supervisor-priority

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-with-supervisor-priority.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/route-with-supervisor-priority-2026-10-20-review.md`
**Topic:** 3.2 - How to route conversations using supervisor priority rules
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. The previous refresh used `hotfix_Artemis_1.4.4`. The 2026-08-21 evidence ran no harness.
**Verdict:** update-needed

## Validation harness

Same harness as the 3.1 evidence (`.../scratchpad/s3/`): `validateABL` over multi-file projects, plus the runtime evaluators on sample contexts. Gate sequences were checked by calling `nullSafeEvaluateCondition` on each route `WHEN` for five session states, which mirrors `resolveRouting`. The code repo was not modified. Runtime services were not started.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/compiler/src/platform/ir/compiler.ts` (routing block near 1590) | `priority: idx + 1`. The authored `PRIORITY:` is not compiled. |
| `packages/core/src/parser/agent-based-parser.ts` (`parseHandoffConfig`) | `PRIORITY` parsed to `config.priority`. `MAP` child key to parent key. |
| `apps/runtime/src/services/pipeline/routing-resolver.ts` | Priority-sorted first true `WHEN`. Null-safe evaluation. |
| `apps/runtime/src/services/execution/routing-executor.ts` (guard near 10100, `checkHandoffConditions` near 24830, return merge near 13990, `findSoleMatchingOtherHandoff`, `buildBlockedRoutingPrimitiveMessage`) | Model path guard, refusal message, ordered check after a return, `map` merge. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | Outcome kinds. Conjunct handling for model-selected calls (`modelSelectedSemanticGuardPreservesDeterministicRequirements`). |
| `apps/runtime/src/services/execution/prompt-builder.ts` | `[Priority N]` text, one action per target, tool order. |
| `apps/runtime/src/services/execution/routing-availability.ts`, `routing-availability-snapshot.ts` | `ENABLED_WHEN` semantics: missing value means disabled. Memoized by referenced values. |
| `packages/compiler/src/platform/ir/validate-authored-gate-facts.ts` | Gate fact definition and `GATE_FACT_MODEL_WRITABLE`. Not triggered by the article example. |
| `apps/runtime/src/services/execution/model-writer-return-admission.ts` | Returned values into protected targets. Applies only when the session declares explicit model writers. |
| `apps/runtime/src/services/runtime-executor.ts` (`initialData`) | `session.identityTier`, caller data in `session.*`. |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (secondary) | Cross-check. |

## Drift analysis (1.4.4 to 1.8.1)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| Route admission, availability | New in 1.8.1. | `ENABLED_WHEN` variation added. Guard behavior explained. |
| `ENABLED_WHEN` checks | `ENABLED_WHEN_SEMANTIC_REFERENCE`, `ENABLED_WHEN_ALL_DISABLED_RISK`, `ENABLED_WHEN_SHADOWED_BY_UNCONDITIONAL_ENTRY` new in 1.8.1. | Named in the variation and troubleshooting. |
| Authored gate facts | `validate-authored-gate-facts.ts` is new in 1.8.1. A fact that a reasoning step or `REQUIRE` reads and a return `map` writes must not be model-writable. | The old example asked the customer "Is the customer authenticated?". Replaced with consent and `session.identityTier`. |
| `PRIORITY:` | Parsed, never compiled, in both versions. | The old `PRIORITY: 0` and `PRIORITY: 10` variation was wrong. Removed. |
| Gate evaluation | The old article said gates are "always checked before" other routes. The model path has no pre-model gate check. The pipeline path and the return path do. | Concept rewritten. Gate fact repeated in protected routes. |
| `map` direction | Child to parent in both versions. The old example `is_authenticated: auth_result` and `compliance_cleared: review_result` were reversed for the stated intent. | Examples corrected. |
| Quoted gate | A quoted phrase is true in the pipeline evaluator. The old VIP route sat second and would capture every classified message. | Replaced with an expression. |
| Duplicate target | Two entries for `Support_Agent`. The prompt builder keeps one action per target and takes the first entry. | Fallback uses a different target. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Position sets priority | yes | IR rules show 1..n (harness). | covered |
| `PRIORITY:` field | no (ignored) | IR identical with and without it (harness `t1`). | covered |
| Pipeline path, first true `WHEN` | yes | `resolveRouting`. Gate sequence tests A to E. | covered |
| Model path with `WHEN` guard | yes | `routing-executor.ts` guard. Conjunct logic. | covered |
| Protected route repeats the gate fact | yes | Evaluator: consent missing makes `consent_recorded == true` false. | covered |
| Return path first match | yes | `checkHandoffConditions`. | covered |
| Consent gate with child agent, `map`, `resume_intent` | yes | Harness clean. | covered |
| Gate on `session.identityTier` | yes | Evaluator and harness clean. | covered (variation) |
| `ENABLED_WHEN` to hide a route | yes | Harness clean. `ENABLED_WHEN_SEMANTIC_REFERENCE` error (harness `n1`). | covered (variation) |
| `action: continue` versus `resume_intent` | yes | `resolveHandoffOnReturnBehavior`. | covered |
| Quoted-phrase gate | yes, but unsafe | True in `nullSafeEvaluateCondition`. | covered (warning) |
| `WHEN: true` fallback | yes | Harness clean. | covered |
| `ON_FAILURE` on the gate | yes | `handleHandoffFailure`. Harness clean. | covered |
| History on a gate agent | yes | Harness clean. | covered (one sentence) |
| Fraud or compliance threshold gate (`amount > N`) | yes | Evaluator: numeric compare works with a value. | out of scope: needs a value source. Rule "any session value works" is in the concept. |
| `ESCALATE` as a gate | yes | Parser. | out of scope: escalation topic |
| `DELEGATE` gates | yes | Parser. | out of scope |
| Gate fact protected as read-only | yes | `GATE_FACT_MODEL_WRITABLE` only for facts that a step or `REQUIRE` reads. | out of scope: not needed for the example. See open questions. |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Evaluator sequence for five states. Guard and return paths close-read. | covered | Not run end to end. |
| Required companion resources identified | Seven-file project: supervisor, `Consent_Agent`, five stand-ins. `Sign_In_Agent` named in the variation. | covered | None. |
| Referenced variables have sources | `consent_recorded`: child `GATHER` and `map`. `session.customer_tier`: caller data, labeled a project assumption. `session.identityTier`: platform. | covered | None. |
| Fallback/failure/ambiguity behavior verified | `Triage_Agent` fallback, `ON_FAILURE` on the gate, refusal message, decline path flagged. | covered | The example agent has no decline exit. The checklist says so. |
| Customer verification path defined | Seven steps with trace event names. | covered | None. |
| Production readiness checklist included | Eight items. | covered | None. |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 7 (supervisor, `Consent_Agent`, five stand-ins) | full-document set | `validateABL` harness, validated together (`chk.py`) | pass | none | rewritten. The old example was one block with six documents and a gate that asked the customer to confirm their own authentication. |
| Block 8 (identity tier gate) | section-snippet | Entries replaced in the supervisor, project validated with `Sign_In_Agent` | pass | none | new |
| Block 9 (`ENABLED_WHEN`) | section-snippet | Same method | pass | none | new |

Gate sequence (`nullSafeEvaluateCondition`, routes in authored order, first true wins):

| Session state | First true route |
| ------------- | ---------------- |
| No consent, billing intent | `Consent_Agent` |
| Consent false, billing intent | `Consent_Agent` |
| Consent true, billing intent | `Billing_Agent` |
| Consent true, platinum, escalation intent | `Priority_Care_Agent` |
| Consent true, standard tier, escalation intent | `Triage_Agent` |

Missing-value behavior (`evaluateRoutingPrimitiveWhen`): `consent_recorded != true` with no value is `deterministic_pass`. `customer_id IS SET` with no value is `deterministic_fail`. `intent.category == "billing" AND consent_recorded == true` with consent missing is `deterministic_fail`, so the model path refuses the route.

## Lessons check

| Lesson | Result |
| ------ | ------ |
| 1. Bare quoted `WHEN` is truthy | Applied. Gate rule and mistake row. |
| 2. Channel values | Not used here. |
| 3. Quoted `TIMEOUT` | Not used. |
| 4. History default `full` | One sentence in the variations. |
| 5. `ESCALATE` | Not used. |
| 6. Settings compiled, not only parsed | `PRIORITY` is parsed only. Applied. |
| 7. Trace events emitted | `handoff_condition_check` (with `reasonCode: handoff_condition_blocked`) and `pipeline_routing_resolve` are emitted. |
| 8. `!=` on missing, `IS SET` | Applied. Table of missing-value behavior. |
| 9. `AGENTS:` discarded | Not used. |
| 10. `COMPLETE WHEN: true` stubs | The consent child completes on a real condition. Stand-ins have a goal only. |
| 11. Entry flow `THEN: COMPLETE` | Not applicable. |
| 12. `ENABLED_WHEN` | Covered. |
| 13. Delegate child input | Not applicable. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Removed the "gates always first" claim, the `PRIORITY` variation, the reversed `map` examples. Added guard and path facts. | 5 |
| Depth of conceptual explanation | 3 | Three rules, path table, gate facts, missing-value table. | 5 |
| Readability and usability | 4 | Sample routing table, short sections. | 4 |
| Coverage of examples | 2 | Consent project, identity tier, `ENABLED_WHEN`. All validated. | 4 |
| Search and discovery quality | 4 | Codes in troubleshooting. | 5 |
| Completeness of workflow and failure modes | 3 | `ON_FAILURE`, decline path, fallback, refusal message. | 4 |
| Customer/partner self-service readiness | 3 | Companion resources defined, assumptions labeled. | 4 |
| Scenario comprehensiveness | 3 | All `yes` rows covered or scoped out. | 4 |
| Article completeness | 4 | Template sections present. | 5 |

**Gate result:** pass (minimum score 4)

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, types, compiler, runtime, tests, and examples? | pass | See source table. `examples/travel` uses `user.is_authenticated` gates. |
| Did I search synonyms and neighboring constructs? | pass | `priority`, `gate`, `ENABLED_WHEN`, `REQUIRE`, `resume_intent`, `first_match`, `identityTier`. |
| Did I identify every authoring style, alias, default, and fallback? | pass | Position priority, ignored `PRIORITY`, `WHEN: true`, `action` values. |
| Did I separate helpers from executable configuration? | pass | `INTENTS:` and `MEMORY:` are helpers. `HANDOFF:` executes. |
| Did I explain how the reasoning layer uses guidance? | pass | Model path rule and `[Priority N]`. |
| Did I avoid making one pattern the only one? | pass | Consent, platform identity, `ENABLED_WHEN`. |
| Could a customer build a gate another supported way? | pass | Flow-step gates, `ESCALATE`, constraints are out of scope and named in the scenario map. |
| What evidence shows all scenarios are considered? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Explains why the model path needs the gate fact in each route. Sequence tests. Safe gate facts. | None blocking. End-to-end run not done. |
| Senior content writer | ready | Concept, example, then variations. Short sentences. | None. |
| Product manager/customer enablement | ready | Decline path flagged. Verification steps with trace fields. | None. |

## Documentation discrepancies for human review

- Public reference says HANDOFF `PRIORITY` orders evaluation (lines 432 and 1288) and shows `PRIORITY: 0` in the HANDOFF syntax sample (line 405). The compiler ignores it.
- Public reference says `ENABLED_WHEN` is "evaluated once before any turn". The code memoizes by the referenced values and recomputes when they change (`routing-availability-snapshot.ts`).
- Public reference `ON_RETURN` sample uses `user.is_authenticated == false` and `map: user_id: auth_result.user_id`. The `user.*` and nested `auth_result.*` forms were not verified here.
- The published 1.3 article uses `ENABLED_WHEN: channel.name == "voice"`. Availability reads session values. `channel.name` is not in them, so the condition reads a missing value and disables the route. Use `session.channel`.
- Published page `agent-platform/abl/how-to/route-with-supervisor-priority.mdx` needs the same changes after approval.

## Open questions

- Should the gate fact be declared read-only so the model cannot write it? The example avoids the case. `GATE_FACT_MODEL_WRITABLE` fires only for facts that a reasoning step or `REQUIRE` reads. Confirm with engineering that a `HANDOFF` `WHEN` alone does not need it.
- Does `resume_intent` replay the original utterance after a `consent` return on every channel? Close-read only.
- The pipeline-on path was not run.
