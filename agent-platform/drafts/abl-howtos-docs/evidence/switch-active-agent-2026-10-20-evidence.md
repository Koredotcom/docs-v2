# Evidence: switch-active-agent

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/switch-active-agent.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/switch-active-agent-2026-10-20-review.md`
**Topic:** 3.8 - How to switch the active agent during a conversation
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. The previous evidence is `evidence/switch-active-agent-2026-08-21-evidence.md` (against `hotfix_Artemis_1.4.4`).
**Verdict:** update-needed

## Validation harness

`validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`) bundled with `esbuild` from the code repo source into a scratchpad folder outside the repo (`.../scratchpad/w389/out.mjs`, reused from the earlier `w2728` bundle). It runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators over a project. A second bundle (`outr.mjs`) exports `evaluateRoutingPrimitiveWhen` and `isNaturalLanguageRoutingHint` from `apps/runtime/src/services/execution/routing-primitive-executor.ts` and `routing-condition-classifier.ts`. Both ran with zero changes to the code repo and no branch switch (repo stays on `hotfix_Artemis_1.8.1`). Runtime services were not started. Runtime behavior is close-read from source and from existing tests.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/routing-executor.ts` (`runHandoff` 11426-11490, 12140-12175, 13340-13360) | `RETURN: true` sets the parent thread `waiting` and pushes it on `threadStack`. `RETURN: false` sets the parent `completed`. The `handoff` trace has `returnExpected` and `reasonCode: handoff_return_expected` or `handoff_permanent` |
| `routing-executor.ts` (`applyHandoffOnReturnEffects` 6180-6540, `resumeIntent` 6960-7120, 5560-5700, `MAX_RESUME_INTENT_DEPTH = 1` at 6660) | `MAP` is child key to parent key. `handoff_return_handler` data (`mappedFields`, `setFields`, `clearedFields`). `resume_intent` data. Replay message selection and `resumeWith` values |
| `apps/runtime/src/services/execution/deterministic-handoff.ts` (new in 1.8.1) and `routing-executor.ts` `checkDeterministicRouting` (25470-25620) | A deterministic rule such as `customer_id IS NOT SET` routes before the model runs. `deterministic_routing` trace |
| `apps/runtime/src/services/execution/prompt-builder.ts` (4546-4610) | A `resume_intent` replay skips deterministic pre-routing. The model selects the route. Rules whose `WHEN` is false are hidden on replay |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | Harness `cond2.mjs`: `is_authenticated != true` gives `deterministic_pass` when unset or false. `customer_id != ""` gives `deterministic_pass` when unset. `IS SET` and `IS NOT SET` behave as named |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (3067-3140) | A `RETURN: true` child that is collecting input can return to the parent when the parent owns the new intent (`digression` with `return_to_parent`) |
| `packages/core/src/parser/agent-based-parser.ts` (8195-8240), `packages/core/src/types/agent-based.ts` (1795-1830) | `ON_RETURN` keys `ACTION`, `HANDLER`, `RESUME_WITH`, `MAP`, `SET`. `HandoffOnReturnConfig.resumeWith` values |
| `packages/compiler/src/platform/contracts/contract-source-data.ts` | `HANDOFF_ON_RETURN_ACTION_VALUES = ['continue', 'resume_intent']`. History default `full` |
| `packages/compiler/src/platform/ir/validate-ir.ts` (1739-1840) | `REQUIRED_TOOL_PARAM_WITHOUT_STRUCTURED_SOURCE` accepts only agent-level `GATHER`, `PASS`, or a non-model default source |
| Compiler diagnostics (harness) | `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` (error) and `UNKNOWN_HANDOFF_RETURN_FIELD` (error) |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (417-540, 617-690) | Public reference cross-check |

## Drift analysis (1.4.4 to 1.8.1)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| Ownership rule | Old text said ownership changes only through `HANDOFF` or `DELEGATE`. `DELEGATE` never changes the active agent (the caller stays active, the child runs in its own scope). | Corrected |
| `DELEGATE` as a gate alternative | Old text called `DELEGATE` an alternative for the temporary gate. A delegate child with a required `GATHER` field fails with `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` (present in 1.4.4 and 1.8.1, 13 versus 15 references) | Corrected. Added to mistakes and troubleshooting |
| Gate example | Old child gathered `is_authenticated` by asking the customer "Is the customer authenticated?". That lets the customer approve themselves. | Replaced with a `customer_id` gate. Flag variation keeps `is_authenticated != true` and tells readers to set it from a verification result |
| `MAP` validation | `UNKNOWN_HANDOFF_RETURN_FIELD` is an error when the child does not declare or set the mapped field. 53 references in 1.4.4 and 283 in 1.8.1 | Added to the flag variation |
| `resume_intent` | Default replay message is the original handoff utterance. Depth limit is 1. 1.8.1 adds `resumeWith` selection and a depth-limit trace | New variation and troubleshooting row |
| Deterministic pre-routing | `deterministic-handoff.ts` is new in 1.8.1. The rule `customer_id IS NOT SET` routes before the model | "How it works" step 1 |
| Trace names | `handoff_return_handler` fires only when something was mapped, cleared, set, or emitted. `handoff` carries `reasonCode` | Verification steps use these fields |
| History default | `full`. Project default override exists | One sentence |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Permanent switch (`RETURN: false`) | yes | `runHandoff` 12144-12160 | covered |
| Temporary child (`RETURN: true`) with `ON_RETURN` `MAP` | yes | `applyHandoffOnReturnEffects` | covered |
| Gate with `IS NOT SET` on a `MEMORY` variable | yes | Harness `s3` clean | covered (minimal example) |
| Gate with `!= true` on a flag | yes | Harness `s10` clean. `cond2.mjs` | covered (variation) |
| `ON_RETURN` `resume_intent` and `RESUME_WITH` values | yes | `selectHandoffResumeIntentMessage`. Harness `s6` clean | covered |
| `ON_RETURN` `continue` | yes | Harness `s7` clean | covered (one sentence) |
| `DELEGATE` for a gate | no (compile error for a gathering child) | Harness `s4` error | covered as mistake |
| Specialist switches again through its own `HANDOFF` | yes | `runHandoff` reads `ir.coordination.handoffs` of the active thread agent | covered (one sentence). No example |
| Child returns to parent by itself when the user changes topic (`return_to_parent`) | yes (for `RETURN: true` children) | `executeParentSupervisorGatherInterrupt` | out of scope: return handling topic |
| Handoff `TIMEOUT` and `ON_TIMEOUT` for a waiting parent | yes | `handoffTimeoutMs`, `handoff_timeout` trace | out of scope: not needed for the gate. Not verified end to end |
| Remote agent targets | yes | Parser `REMOTE` | out of scope: external agent topic |
| `ESCALATE` to a person | yes | Design article | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Thread lifecycle, `MAP`, replay, deterministic pre-routing read in source | covered | Close-read, not run |
| Required companion resources identified | Supervisor, lookup agent, two stand-in specialists defined. `customer_id` declared in `MEMORY` and populated by the `MAP` return (no `W801`) | covered | None |
| Referenced variables have sources | `customer_id`: gathered by the child, mapped to the supervisor | covered | None |
| Fallback, failure, ambiguity behavior verified | Unknown request, unanswered gate, replay limit | covered | Unknown-request behavior depends on the model (supervisor can answer directly) |
| Customer verification path defined | Five steps with `handoff`, `handoff_return_handler`, `resume_intent` fields | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (supervisor + 4 agents) | full-document set | `node val.mjs --split v/switch-active-agent-1.abl` | pass | none | kept |
| Block 2 (flag `HANDOFF` entry) | section-snippet | Replaces the first `HANDOFF` entry in a project whose child `Authentication_Agent` sets `is_authenticated` from a tool result (`v/switch-2-harness.abl`) | pass | none | kept |

Negative checks (not in the article body): `s4` (`DELEGATE` to a gathering child) gives error `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED`. `s8` (`MAP` of a field the child lacks) gives error `UNKNOWN_HANDOFF_RETURN_FIELD`.

The harness child for block 2 uses an agent-level `GATHER` plus a `FLOW` `CALL` step. It is not shown in the article, because its runtime behavior is not verified. The article states the requirement in prose.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Source table |
| Did I search for synonyms and neighboring constructs? | pass | `HANDOFF`, `returnExpected`, `threadStack`, `resume_intent`, `return_to_parent`, `DELEGATE`, `ON_RETURN`, `RESUME_WITH` |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback? | pass | `RETURN` versus `EXPECT_RETURN`, string `ON_RETURN`, `RETURN_HANDLERS` (named handler), `resumeWith` values | 
| Did I distinguish optional helpers from required executable config? | pass | `MEMORY` declaration needed for clean compile. `INTENTS:` optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Step 5 notes the model picks the replayed route |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Permanent, temporary, flag, `resume_with` |
| Could a customer build the scenario another supported way? | pass | Named `RETURN_HANDLERS` and `return_to_parent` as out of scope in this map | 
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Thread lifecycle, `MAP` direction, replay limits, compile errors named | None blocking |
| Senior content writer | ready | Concept table, numbered mechanism, short sentences | None |
| Product manager/customer enablement | ready | Real gate (customer ID), flag guidance, verification with trace fields | Replacement of the old authentication example is flagged for review |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Corrected ownership and `DELEGATE` claims. Verified evaluator behavior with the harness | 5 |
| Depth of conceptual explanation | 3 | Table of `RETURN` settings and replay mechanism | 4 |
| Readability and usability | 4 | Numbered flow | 5 |
| Coverage of examples | 3 | New operationally meaningful gate. Flag snippet validated | 4 |
| Search and discovery quality | 4 | Error codes in mistakes and troubleshooting | 4 |
| Completeness of workflow and failure modes | 3 | Unanswered gate, replay limit, unknown request | 4 |
| Customer/partner self-service readiness | 3 | No repo paths. Stand-ins labeled | 4 |
| Scenario comprehensiveness | 3 | `resume_with`, `continue`, flag gate | 4 |
| Article completeness | 4 | All template sections | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- The old example had the customer answer "Is the customer authenticated?". The new example collects `customer_id` instead. Confirm this change of example is acceptable.
- The old Related HowTos list named "How to pass specific fields between agents". No such file exists in `articles/`. Removed.
- Public reference documents `ON_RETURN.map` in lowercase and `EXPECT_RETURN` as primary. This article uses `RETURN` and `MAP` like the refreshed 1.x and 2.x articles. Both parse.
- Public reference says `ENABLED_WHEN` is "decided once before any turn is understood" (lines 431, 744). The runtime builds an availability snapshot per decision (`getRoutingAvailabilitySnapshot`). No conflict for this article. Noted for the reference owner.
- Published page `agent-platform/abl/how-to/switch-active-agent.mdx` needs the same change after approval.

## Open questions

- Runtime test needed: the full gate loop (deterministic route to the gate, child return, `MAP`, `resume_intent`, permanent switch) on 1.8.1.
- Does `ON_RETURN: continue` leave the supervisor idle until the next customer message? Not verified. The article says only that no replay happens.
