# Evidence: route-with-supervisor-priority

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-with-supervisor-priority.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/route-with-supervisor-priority-2026-11-01-review.md`
**Topic:** 3.2 - How to route conversations using supervisor priority rules
**Workflow:** Refresh against `release_Artemis_1.9.0`. The previous scan used `hotfix_Artemis_1.8.1` (evidence 2026-10-20).
**Verdict:** update-needed (small, additive)

## Validation harness

Harness: `node .../scratchpad/harness/validate.mjs <files>`, run from `/tmp`. It calls `validateABL` over the files as one project (parse, compile, cross-agent validation). Scratch files live in `.../scratchpad/s31s32/` (`a/`, `a_snip/`, `b/`, `b_snip/`, `neg/`). Runtime evaluators were checked with `.../scratchpad/s31s32/ev.mjs` (`evaluateConditionDual`) and `cls.mjs` (`isNaturalLanguageRoutingHint`). Runtime services were not started. The code repo was not modified and no branch was switched (`release_Artemis_1.9.0`, HEAD `9b7b268cc61`).

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/compiler/src/platform/ir/compiler.ts` (routing block near 1740, comment-only loop in `compileAgentToIR`) | `priority: idx + 1`. `PRIORITY` not compiled. Comment-only `WHEN` or `ENABLED_WHEN` throws `FIELD_REQUIRED`. |
| `packages/core/src/parser/condition-quotes.ts` | `//` comment masking (new vs 1.8.1). |
| `apps/runtime/src/services/pipeline/routing-resolver.ts`, `null-safe-eval.ts` | Priority sort, first true `WHEN`, missing-value semantics. |
| `apps/runtime/src/services/execution/routing-executor.ts` (guard near 10780, refusal near 10863, `checkHandoffConditions` near 26200, return merge near 14636 and 14870, `handleHandoffFailure` 29169) | Model path guard, refusal naming the open route, ordered check after return, `map` allowlist. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | Outcome kinds. Comment masking. |
| `apps/runtime/src/services/execution/route-admission/select.ts`, `surface.ts`, `routing-availability.ts`, `routing-availability-trace.ts`, `routing-availability-dispatch.ts` | `ENABLED_WHEN` on model tools, pipeline selector, return selector, and refusal. `skipped: availability`. Per-target aggregation. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`buildPerAgentTools`) | `[Priority N]`, one action per target, `ENABLED_WHEN` filter before de-duplication. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (5710, 5860 to 5990, 6137) | Active returning child reroute: `resolveRouting` over the supervisor routes in order. A match on the current agent is `same_agent` and gives no reroute. |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | `handoff_completed` (new). |
| `packages/compiler/src/platform/ir/validate-authored-gate-facts.ts` | `GATE_FACT_MODEL_WRITABLE`. Not triggered by the example (harness clean). |
| `apps/runtime/src/services/execution/model-writer-return-admission.ts` | Returned values into protected targets. Applies only with explicit session model writers. |
| `apps/runtime/src/services/runtime-executor.ts` near 8892, `personalization-context.ts` | `session.*` holds caller data first, then caller context, then platform fields. `identityTier` is not in the reserved key list. |

## Drift analysis (1.8.1 to 1.9.0)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| `//` comments in conditions | New. Comment-only `WHEN` or `ENABLED_WHEN` fails compile. | One sentence and one troubleshooting row. |
| `handoff_completed` | New. | Verification step 8 and a checklist item. |
| Parent return settings | New `parentReturn`. Reroute exists in 1.8.1. For the gate, `resolveRouting` over ordered routes keeps the customer with the gate agent. | One paragraph in How it works. Verification step 9. |
| `ENABLED_WHEN` scope | In 1.8.1 and 1.9.0, `select.ts` applies it to the pipeline, return, and model paths. The old article said it removes the route from model choices only. | Variation extended. Troubleshooting row extended. |
| `ENABLED_WHEN` aggregation | Per target. An entry without `enabled_when` is enabled. Any true entry enables the target. Rule and handoff mirrors count as one target. | One sentence added. |
| `ON_RETURN` `map` allowlist | Unmapped child fields do not return. | One sentence added to How it works. |
| Returned empty value | `shouldPreserveResolvedReturnValue`: an empty return does not overwrite a resolved parent value. | Not added. Recorded as an open question. |
| `PRIORITY`, gate facts, missing-value table, `map` direction, validator codes | Unchanged. `ev.mjs` and harness confirm. | None. |

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

Diff against the 2026-10-20 map: no row removed or changed. Rows marked new are added.

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Position sets priority | yes | `compiler.ts` 1747. | covered |
| `PRIORITY:` field | no (ignored) | `neg/n_routing_ph.abl` compiles clean, IR uses position. | covered |
| Pipeline path, first true `WHEN` | yes | `resolveRouting`. | covered |
| Model path with `WHEN` guard | yes | `routing-executor.ts` near 10780. | covered |
| Protected route repeats the gate fact | yes | `ev.mjs`: missing consent makes `consent_recorded == true AND ...` false. | covered |
| Return path first match | yes | `checkHandoffConditions`. | covered |
| Gate holds while the gate child is active (new) | yes | `evaluateParentSupervisorRouteAfterClassifier` uses `resolveRouting`. `finalizeParentSupervisorRoute` returns no route for the current agent. | covered (paragraph, verification step 9) |
| Consent gate with child agent, `map`, `resume_intent` | yes | Harness clean (`b/blk1..7`). | covered |
| Gate on `session.identityTier` | yes | `b_snip/s8`. `ev.mjs`: missing key gives `!= 2` true. | covered (variation) |
| `ENABLED_WHEN` to hide a route | yes | `b_snip/s9`. `neg/n_enabled_intent.abl`: `ENABLED_WHEN_SEMANTIC_REFERENCE`. | covered (variation, extended) |
| `ENABLED_WHEN` on pipeline and return paths (new coverage) | yes | `select.ts`, `reasoning-executor.ts` 1008, `routing-availability-trace.ts`. | covered |
| `ENABLED_WHEN` duplicate-target aggregation (new coverage) | yes | `routing-availability.ts` header comment and `entryEnabled`. | covered |
| `action: continue` versus `resume_intent` | yes | `resolveHandoffOnReturnBehavior`. | covered |
| Quoted-phrase gate | yes, but unsafe | `ev.mjs`: quoted phrase is `true`. | covered (warning) |
| `WHEN: true` fallback | yes | Harness clean. | covered |
| `ON_FAILURE` on the gate | yes | `handleHandoffFailure`. | covered |
| History on a gate agent | yes | Harness clean. | covered (one sentence) |
| `//` comment in `WHEN` (new) | yes | `neg/n_comment_trail.abl`, `n_en_comment.abl`, `n_comment_only.abl`. | covered |
| Fraud or compliance threshold gate (`amount > N`) | yes | `nullSafeEvaluateCondition`. | out of scope: needs a value source |
| `ESCALATE` as a gate | yes | Parser. | out of scope: escalation topic |
| `DELEGATE` gates | yes | Parser. | out of scope |
| Gate fact protected as read-only | yes | `GATE_FACT_MODEL_WRITABLE` only for facts a step or `REQUIRE` reads. | out of scope: see open questions |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `ev.mjs` evaluator cases for five states. Guard, return, reroute, availability close-read. | covered | Not run end to end. |
| Required companion resources identified | Seven-file project. `Sign_In_Agent` named in the variation (validated in `b_snip/s8`). | covered | None. |
| Referenced variables have sources | `consent_recorded`: child `GATHER` and `map`. `session.customer_tier`: caller data, labeled a project assumption. `session.identityTier`: platform. | covered | Caller data can set any `session.*` key that is not reserved. See open questions. |
| Fallback/failure/ambiguity behavior verified | `Triage_Agent`, `ON_FAILURE`, refusal text, decline path flagged, `blocked` outcome. | covered | The example agent has no decline exit. The checklist says so. |
| Customer verification path defined | Nine steps with trace event names. | covered | None. |
| Production readiness checklist included | Nine items. | covered | None. |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 7 (supervisor, `Consent_Agent`, five stand-ins) | full-document set | `validate.mjs b/blk1..7.abl` as one project | pass | none | kept |
| Block 8 (identity tier gate) | section-snippet | Supervisor with consent gate, snippet entries, fallback, `b_snip/s8_*` | pass | none | kept |
| Block 9 (`ENABLED_WHEN`) | section-snippet | Same method, `b_snip/s9_*` | pass | none | kept |

All nine fenced blocks in the proposed article are byte-identical to the 2026-10-20 blocks. A first harness run of blocks 8 and 9 without the consent gate entry gave `W801` for `consent_recorded`. That was a harness gap, not an article problem. The rerun with the gate entry is clean.

Evaluator cases (`ev.mjs`, `evaluateConditionDual`):

| Condition | Context | Result |
| --------- | ------- | ------ |
| `consent_recorded != true` | no value | true |
| `consent_recorded == true` | no value | false |
| `consent_recorded IS SET` | no value | false |
| `consent_recorded == true AND intent.category == "billing"` | no value | false |
| same | `consent_recorded: true` | true |
| `session.identityTier != 2` | `session` without the key | true |
| `session.customer_tier == "platinum" AND intent.category == "escalation"` | `session` without the key | false |
| `"the customer asks about a refund"` | any | true |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified against 1.9.0. Corrected the `ENABLED_WHEN` scope statement. | 5 |
| Depth of conceptual explanation | 4 | Added reroute behavior and `ENABLED_WHEN` aggregation. | 5 |
| Readability and usability | 4 | Short additive sentences. | 4 |
| Coverage of examples | 4 | Blocks unchanged and re-validated. | 4 |
| Search and discovery quality | 4 | Added `handoff_completed`, `skipped: availability`, `WHEN is required`. | 5 |
| Completeness of workflow and failure modes | 4 | Added refusal outcome, availability skip, reroute check. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. | 4 |
| Scenario comprehensiveness | 4 | New rows covered. | 4 |
| Article completeness | 5 | Template sections present. | 5 |

**Gate result:** pass (minimum score 4)

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, types, compiler, runtime, tests, and examples? | pass | Source table. |
| Did I search synonyms and neighboring constructs? | pass | `priority`, `gate`, `ENABLED_WHEN`, `REQUIRE`, `resume_intent`, `first_match`, `identityTier`, `parentReturn`, `handoff_completed`, `digression`. |
| Did I identify every authoring style, alias, default, and fallback? | pass | Position priority, ignored `PRIORITY`, `WHEN: true`, `action` values, `//` comments. |
| Did I separate helpers from executable configuration? | pass | `INTENTS:` and `MEMORY:` are helpers. `HANDOFF:` executes. |
| Did I explain how the reasoning layer uses guidance? | pass | Model path rule and `[Priority N]`. |
| Did I avoid making one pattern the only one? | pass | Consent, platform identity, `ENABLED_WHEN`. |
| Could a customer build a gate another supported way? | pass | Flow-step gates, `ESCALATE`, constraints are out of scope and named. |
| What evidence shows all scenarios are considered? | pass | Scenario map above. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Gate rules by path, `ENABLED_WHEN` on every path, allowlist return, outcome events. | None blocking. Reroute check is code-read only. |
| Senior content writer | ready | Concept, example, then variations. Short sentences. | None. |
| Product manager/customer enablement | ready | Decline path flagged. Nine verification steps with trace fields. | None. |

## Documentation discrepancies for human review

- Published `.mdx` `agent-platform/abl/how-to/route-with-supervisor-priority.mdx` matches the `articles/` draft except frontmatter, the back badge, `yaml` fence labels, and the missing "Related HowTos" section. No content drift.
- Public reference says HANDOFF `PRIORITY` orders evaluation and shows `PRIORITY: 0` in the syntax sample. The compiler ignores it (carried from 2026-10-20).
- Public reference says `ENABLED_WHEN` is "evaluated once before any turn". The code memoizes by referenced values (carried).
- The published 1.3 article uses `ENABLED_WHEN: channel.name == "voice"`. Availability reads session values, so `channel.name` reads a missing value. Use `session.channel` (carried, not re-checked).
- The 3.1 article now says `ENABLED_WHEN` is out of scope and points to 3.2 and 3.3. This article now states that `ENABLED_WHEN` applies on all paths. Check that 3.3 does not say "model choices only".

## Open questions

- Should the gate fact be read-only so the model cannot write it? `GATE_FACT_MODEL_WRITABLE` fires only for facts a reasoning step or `REQUIRE` reads (carried).
- Caller data can seed `session.<key>` unless the key is reserved. `identityTier` is not reserved. Caller context overrides it only when the channel sets it. Confirm with engineering that a browser caller cannot set `identityTier` on a channel that omits it.
- An empty returned value does not overwrite a resolved parent value (`shouldPreserveResolvedReturnValue`). A child that completes with an empty `consent_recorded` therefore keeps the parent value. Not documented.
- The reroute check in step 9 is code-read, with the pipeline classifier path only. Not run end to end.
- Does `resume_intent` replay the original utterance after a consent return on every channel? Close-read only (carried).
