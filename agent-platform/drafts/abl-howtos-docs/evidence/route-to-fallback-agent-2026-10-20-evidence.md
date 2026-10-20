# Evidence: route-to-fallback-agent

**Date:** 2026-10-20
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-to-fallback-agent.md`
**Topic:** 3.5 - How to route unclear or unsupported requests to a fallback agent
**Workflow:** Refresh against `hotfix_Artemis_1.8.1` (previous refresh: `hotfix_Artemis_1.4.4`, evidence dated 2026-08-21)
**Verdict:** update-needed

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (~8150-8260, `HANDOFF_ON_RETURN_KEYS` ~1148) | `HANDOFF` keys. `RETURN` and `EXPECT_RETURN` both set `config.return`. `ON_RETURN` string or block with `ACTION`, `HANDLER`, `RESUME_WITH`, `MAP`, `SET`. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts` | `HANDOFF_ON_RETURN_ACTION_VALUES = ['continue', 'resume_intent']`. Default history `full`. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`resolveHandoffResumeIntentMessage` ~5602, `selectHandoffResumeIntentMessage` ~5630, `MAX_RESUME_INTENT_DEPTH = 1` ~6659, resume block ~6990-7130, `applyHandoffOnReturnEffects` ~6156) | Replay message by `RESUME_WITH`. Default `original_handoff_utterance`. One replay per return. `MAP` is child key to parent key. An empty returned value does not overwrite a resolved parent value. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (~4575-4700) | Replay hides the child that just returned (B4, B20b) and routes whose plain-session `WHEN` is false (B5v2). Adds the one-question tool for `ROLE: router`. |
| `apps/runtime/src/services/runtime-executor.ts` (~24794) | Deterministic pre-routing skipped for a replay. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`checkDeterministicRouting`) | A literal `true` route is skipped before the model reasons. |
| `apps/runtime/src/services/execution/types.ts` (`tryThreadReturn` ~6625) | A child with `returnExpected = false` is marked completed and does not return to a parent. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`executeComplete` ~27946) | `COMPLETE` sets the conversation phase to `complete`. |
| `apps/runtime/src/services/execution/agent-execution-role.ts` | No `BEHAVIOR` gives a supervisor with direct answers. Explicit `router` forces routing. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | Quoted plain-language `WHEN` is `semantic_deferred`. Uppercase operators and symbols are evaluated as expressions. |
| `packages/compiler/src/platform/ir/validate-ir.ts` and `validate-coordination-config.ts` | `UNDECLARED_INTENT_CATEGORY` when `INTENTS:` lacks a category used in a `WHEN`. `INVALID_ROUTING_TARGET` for missing targets. |
| Public reference `multi-agent-and-supervisor.mdx` ("Return expectations", `ON_RETURN` properties, `ESCALATE`) | Secondary cross-check. |

## Drift analysis (1.4.4 to 1.8.1)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| Replay hides the returned child | New in 1.8.1 (`prompt-builder.ts` B4, B20b, B5v2). Absent in 1.4.4. | The loop concern in the old article ("the fallback bounces back") no longer applies. New bullet. |
| `ON_RETURN` replay source | `RESUME_WITH` existed in 1.4.4. The old article never used it. | The published example replayed the original vague message, so it did not route differently. Now uses `latest_child_user_utterance`. |
| `UNDECLARED_INTENT_CATEGORY` | New in 1.8.1. | Troubleshooting row. |
| Execution role and direct answers | A supervisor without `BEHAVIOR` can answer directly. | The "fallback" is guidance, not a guarantee. New concept paragraph and troubleshooting row. |
| `HANDOFF` history default | Still `full`. | One bullet kept. |
| `ESCALATE` | Reaches a person only with a human-agent connection and a `routing` block (confirmed in batch 1). | New variation with the caveat. |
| Parent `MEMORY` | The old example declared `MEMORY` and `GATHER` under the fallback child, while the text said the supervisor declared them. | Fixed in the `MAP` variation. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Fallback returns, supervisor replays the clarification | yes | `RESUME_WITH: latest_child_user_utterance`, IR dump `resume_with` | covered (minimal example) |
| Fallback returns, supervisor replays the original message (default) | yes | `selectHandoffResumeIntentMessage` | covered (explained) |
| `ON_RETURN: "resume_intent"` string form | yes | Parser, IR dump (`on_return: "resume_intent"`) | covered |
| `MAP` child value to a parent variable | yes | `applyHandoffOnReturnEffects`, IR dump | covered (variation) |
| `ON_RETURN` `SET`, `HANDLER`, `CLEAR`, `RETURN_HANDLERS` | yes | Parser keys, reference | out of scope: return handlers are a separate topic |
| `ON_RETURN` action `continue` | yes | `HANDOFF_ON_RETURN_ACTION_VALUES` | out of scope: it resumes the parent flow, not routing |
| Fallback does not return (`RETURN: false`) | yes | `tryThreadReturn` | covered (variation and mistake) |
| Always-available `WHEN: true` route | yes | `checkDeterministicRouting` skips it. Harness compile. | covered (variation) |
| Router role asks one question when no route fits | yes | `prompt-builder.ts` clarification tool | covered (concept) |
| Escalate to a person | yes, with a human-agent connection and `routing` block | Batch 1 lesson, reference | covered (variation, checklist) |
| Repeated clarification count and limit | gap | `_clarification_count` is initialized in `initializeAllMemory`. Its increment was not verified. | out of scope |
| Remote (A2A) fallback target | yes | `HANDOFF` `LOCATION`, `ENDPOINT` | out of scope |
| Fallback on a flow-agent supervisor | yes | `ON_INPUT` `ELSE` | out of scope: belongs to a flow topic |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading and real runtime functions in a harness. No end-to-end session run. | covered | State in open questions. |
| Required companion resources identified | Specialists and triage agent defined. | covered | None. |
| Referenced variables have sources | `clarified_request` and `area` are gathered by the fallback. `clarified_area` is declared in the supervisor `MEMORY`. Unsourced `customer_id`, `account_id`, `issue_summary`, and `conversation_summary` removed. | covered | None. |
| Fallback, failure, ambiguity behavior verified | Replay rules, hidden fallback during replay, no-return fallback, direct-answer supervisor. | covered | None. |
| Customer verification path defined | Six steps and three trace events. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: esbuild bundle of `validateABL`, built in the scratchpad under `w3/`. Blocks extracted by script. Negative control: the supervisor with only one specialist reports `INVALID_ROUTING_TARGET` errors for the missing agents.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Fallback_Routing_Supervisor` | full-document (with blocks 2 to 4) | `validateABL` with companions | pass | none | changed (`RESUME_WITH`, no unsourced `PASS`, `RETURN: false` for specialists) |
| Block 2 `Fallback_Triage_Agent` | full-document | `validateABL` | pass | none | changed (own `GATHER`, own `COMPLETE`) |
| Blocks 3 and 4 stand-in specialists | full-document | `validateABL` | pass | none | kept |
| Block 5 `Mapped_Fallback_Supervisor` | full-document (with blocks 6, 3, 4) | `validateABL` with companions | pass | none | new |
| Block 6 enum triage agent | full-document | `validateABL` | pass | none | new |
| Block 7 `WHEN: true` route | section-snippet | Block 1 with its fallback entry replaced, plus companions | pass | none | new |

Extra checks: `ON_RETURN: "resume_intent"` compiles (`on_return` is the string). A typo `"biling"` in a `WHEN` gives `UNDECLARED_INTENT_CATEGORY`. A supervisor with `ROLE: router` compiles with no diagnostics. Removing the `MEMORY` block from the `MAP` supervisor also compiles with no diagnostic, so the declaration is advice and not enforced.

## Runtime semantics checks (harness, real runtime functions)

| Check | Result |
| ----- | ------ |
| Quoted fallback text with plain lowercase words, including ", or" | `semantic_deferred` |
| Quoted text with uppercase `OR` or `AND` | `deterministic_fail` (evaluated as an expression) |
| `intent.category == "billing"` with no intent state | `semantic_deferred` |
| `intent.category == "billing"` with `intent.category = billing` | `deterministic_pass` |
| `clarified_area == "billing"` with no value, `billing`, `technical_support` | fail, pass, fail |
| `intent.category == "billing" OR clarified_area == "billing"` with only `clarified_area = billing` | `deterministic_pass` (so the value keeps matching on later supervisor turns) |
| `clarified_intent IS SET` flat, with no value and with a value | `deterministic_fail`, `deterministic_pass` |
| `MAX_RESUME_INTENT_DEPTH` | 1 |

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `ON_RETURN`, `resume_intent`, `RESUME_WITH`, `MAP`, `RETURN`, `COMPLETE`, `ESCALATE`, `router`, `WHEN: true`, `fallback`, `default_agent`. |
| Identified every authoring style, alias, default, fallback? | pass | String and block `ON_RETURN`, `RETURN` and `EXPECT_RETURN`, default replay source. |
| Distinguished optional from required sections? | pass | `ON_RETURN` and `MAP` are optional. The target route must exist in `HANDOFF`. |
| Explained reasoning-layer guidance? | pass | Plain-language route is model guidance. Router role forces a route. |
| Avoided making a preferred pattern the only pattern? | pass | Table of outcomes and four variations. |
| Could a customer build this another supported way? | pass | Return handlers and flow `ELSE` routing exist. Scoped out. |
| Evidence if asked "are you not considering all scenarios?" | n/a | Variant map and harness table. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Replay source, hidden fallback during replay, one-replay limit, `MAP` direction, no-return behavior are explicit and code-backed. | None. |
| Senior content writer | ready | Outcome table first, example, short bullets. | None. |
| Product manager/customer enablement | ready | Six verification steps, direct-answer caveat, escalation caveat. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 2 | Replay behavior and `RESUME_WITH` verified. Unsourced context removed. | 5 |
| Depth of conceptual explanation | 3 | Outcome table, router role, replay rules. | 5 |
| Readability and usability | 4 | Shorter bullets, one table. | 5 |
| Coverage of examples | 2 | New example that routes differently after the return. `MAP` example with a parent route that reads it. | 5 |
| Search and discovery quality | 4 | Kept fallback, unsupported, unclear language. | 4 |
| Completeness of workflow and failure modes | 3 | No-return fallback, direct-answer supervisor, `MAP` failure. | 5 |
| Customer/partner self-service readiness | 3 | Stand-in agents defined. Variable sources stated. | 4 |
| Scenario comprehensiveness | 3 | `MAP`, `WHEN: true`, no-return, escalation. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. Old article defect: the example's `MEMORY`, `GATHER`, and `COMPLETE` sat under `Fallback_Triage_Agent`, but the text said the supervisor declared `clarified_intent`. No route read `clarified_intent`, so the mapped value changed nothing.
2. Old article defect: `ON_RETURN` with `resume_intent` and no `RESUME_WITH` replays the original vague message. The example would route the same way again.
3. Public reference vs HowTos: the reference says `EXPECT_RETURN` is primary and `RETURN` is an alias. The old article used `EXPECT_RETURN`. The parser treats both the same. The new examples use `RETURN`, like the refreshed 1.x and 2.x articles. The reference says new agents should use `EXPECT_RETURN`. Decide one convention.
4. Public reference vs code: the reference describes `resume_intent` as "re-run routing against the original user intent". That matches the default only. With `RESUME_WITH` the replay uses another utterance. The reference lists `resume_with` values, so no conflict, but the sentence is incomplete.
5. Code behavior to confirm: a route condition that reads a `MAP`ped variable keeps matching on later turns because the value stays in the session. Product may want a reset mechanism. The parser has no `CLEAR` key in `ON_RETURN` (only `RETURN_HANDLERS` has `CLEAR`).
6. The route `WHEN` for `MAP` mixes an `intent.category` check and a session check with `OR`. The deterministic pre-router would route on `clarified_area` alone on any later supervisor turn. The article says to use it with `RETURN: false` specialists. Confirm this is acceptable guidance.

## Open questions

- No end-to-end session run. The replay, hide, and depth rules are read from code and tests, not executed.
- `_clarification_count` exists as a built-in counter. If it counts fallback visits, a limit could drive an escalation route. Not verified.
- Whether `COMPLETE` with `WHEN: true` fires on the activation turn of a `RETURN: false` child. The article only says "end with a COMPLETE condition".
