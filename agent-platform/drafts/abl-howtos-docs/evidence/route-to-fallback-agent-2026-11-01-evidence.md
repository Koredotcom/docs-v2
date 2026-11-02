# Evidence: route-to-fallback-agent

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-to-fallback-agent.md`
**Published copy:** `agent-platform/abl/how-to/route-to-fallback-agent.mdx`
**Topic:** 3.5 - How to route unclear or unsupported requests to a fallback agent
**Workflow:** Refresh against `release_Artemis_1.9.0` (previous scan: `hotfix_Artemis_1.8.1`, evidence dated 2026-10-20)
**Verdict:** update-needed

`release_Artemis_1.9.0` does not descend from `hotfix_Artemis_1.8.1`. The diff only located files. Every claim in the article was re-read in the 1.9.0 source. No behavior in the article came from a 1.8.x hotfix backport that is missing in 1.9.0.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`HANDOFF` keys, `ON_RETURN`) | `RETURN` and `EXPECT_RETURN` both set the return flag. `ON_RETURN` string or block. Harness compile of both forms. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`dispatchHandoffOnReturnBehavior` 7450, `selectHandoffResumeIntentMessage`, `MAX_RESUME_INTENT_DEPTH = 1` at 7177, depth check 7590, `applyHandoffOnReturnEffects`, `checkDeterministicRouting` 26820) | Replay source, one replay, `MAP` rules, `true` routes skipped by deterministic routing. `selectHandoffResumeIntentMessage` is identical to 1.8.1. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`resolveResumeReplayHiddenRouteAgents` 4420, route surface 4987 to 5030, router clarification tool) | Replay hides only a child whose latest thread is not `completed`. Replay hides a route whose plain-session `WHEN` is false. Router role gets the one-question tool. |
| `apps/runtime/src/services/execution/types.ts` (`tryThreadReturn` 7014) | A returning child is marked `completed`. `returnExpected = false` child does not return. |
| `apps/runtime/src/services/execution/routing-executor.ts` (~14700) | A `return_to_parent` action sets the child status to `waiting`, not `completed`. |
| `apps/runtime/src/services/runtime-executor.ts` (~26555) | Deterministic pre-routing is skipped for a replay. |
| `apps/runtime/src/services/execution/routing-primitive-executor.ts` | New in 1.9.0: line comments (`//`) outside quotes are masked. A comment-only condition is a missing-data outcome. Quoted plain-language text still `semantic_deferred`. |
| `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` | `isNaturalLanguageRoutingHint`. |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | New in 1.9.0: `handoff_completed` with `outcome`, `cause`, `durationMs`. |
| `apps/runtime/src/services/execution/agent-execution-role.ts` | No `BEHAVIOR` gives a supervisor with direct answers. Explicit `router` forces routing. Only the IR version check changed. |
| `packages/compiler/src/platform/ir/validate-ir.ts`, `validate-coordination-config.ts` | `UNDECLARED_INTENT_CATEGORY`, `INVALID_ROUTING_TARGET`. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts`, `routing-executor.ts` (~28011) | Default `HANDOFF` history `full`. Project default can override. |
| `apps/runtime/src/services/execution/on-start-handoff.ts` | `executionFailureFallback` applies to `ON_START` handoffs only. Not part of this article. |
| `apps/runtime/src/services/pipeline/config.ts`, `types.ts`, `flow-step-executor.ts` (~5640 to 5780) | `EXECUTION.pipeline.parentReturn` (`minConfidence`, `ignoreAmbiguous`) controls a `RETURN: true` specialist that hands the caller back to the supervisor when the pipeline classifier sees another specialist's intent. It sits on the gather-interrupt path. |
| Public reference `multi-agent-and-supervisor.mdx` | Secondary cross-check only. |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change | Impact on article |
| ---- | ------ | ----------------- |
| `//` comments in `WHEN` | New. A `//` outside quotes is a comment. A `WHEN` with only a comment fails to compile (`WHEN is required`, `AGENT_COMPILATION_FAILED`). A `//` inside quotes is text (harness: URL in the quoted fallback compiles). | One sentence in Concept. The example uses quoted text, so it is unaffected. |
| `handoff_completed` trace event | New. One record per handoff attempt with `outcome` and `durationMs`. | Added to Verification. |
| Replay hides the returned child | Same code as 1.8.1. The 1.8.1 article overstated it. Only a child that returned without finishing (status not `completed`) is hidden. A child that finished with `COMPLETE` stays offered. | Article bullet corrected. New troubleshooting row. |
| Forwarded return message | Same code as 1.8.1. With no `RESUME_WITH`, a `__return_to_parent__` message is replayed instead of the original message. The 1.8.1 article did not say it. | One sentence added. |
| Replay depth limit | Same code. A second return inside a replay does not replay again. Trace `resume_intent` carries `reasonCode` `resume_intent_depth_limit`. | Bullet and trace note added. |
| `ON_RETURN` wiring | Confirmed wired. `resume_intent` and `continue` actions, `RESUME_WITH`, `MAP`. | None. |
| `EXECUTION.pipeline.parentReturn` | New setting. It governs a different return: a specialist mid-conversation returning the caller to the supervisor on another intent. | Not added. Out of scope. Flagged for review. |
| `executionFailureFallback` in `on-start-handoff.ts` | New. It covers `ON_START` handoff failure text. | Not relevant. |
| Governed multi-intent (`routing-executor.ts` ~2,170 changed lines) | Governed plans are off by default. The article does not depend on them. | None. |
| `HANDOFF` history default | Still `full`. | None. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Fallback returns, supervisor replays the clarification | yes | `RESUME_WITH: latest_child_user_utterance`, `selectHandoffResumeIntentMessage` | covered (minimal example) |
| Fallback returns, supervisor replays the original message (default) | yes | `selectHandoffResumeIntentMessage` | covered |
| Fallback returns a `__return_to_parent__` message, no `RESUME_WITH` | yes | `forwarded_return_message` branch | covered (one sentence) |
| `ON_RETURN: "resume_intent"` string form | yes | Harness compile, parser | covered |
| `RESUME_WITH` other values (`latest_session_user_utterance`, `forwarded_return_message`) | yes | `selectHandoffResumeIntentMessage`, harness compile of `latest_session_user_utterance` | out of scope: same mechanism, customer rarely needs it |
| `MAP` child value to parent variable | yes | `applyHandoffOnReturnEffects` | covered (variation) |
| `ON_RETURN` `SET`, `HANDLER`, `CLEAR`, `RETURN_HANDLERS` | yes | Parser keys | out of scope: return handlers are a separate topic |
| `ON_RETURN` action `continue` | yes | `resolveHandoffOnReturnBehavior` | out of scope: resumes the parent flow, not routing |
| Fallback does not return (`RETURN: false`) | yes | `tryThreadReturn` | covered |
| Always-available `WHEN: true` route | yes | `checkDeterministicRouting` skips it. Harness compile. | covered (variation) |
| Router role asks one question when no route fits | yes | `prompt-builder.ts` clarification tool. Harness compile of `ROLE: router`. | covered (concept) |
| Supervisor without `BEHAVIOR` answers directly | yes | `agent-execution-role.ts` | covered |
| Quoted plain-language `WHEN` with `//` comment rules | yes | `routing-primitive-executor.ts`, harness | covered (one sentence) |
| Escalate to a person | yes, with a human-agent connection and `routing` block | Reference, earlier batches | covered (variation, checklist) |
| Replay hides a returned child that did not finish | yes | `resolveResumeReplayHiddenRouteAgents` | covered (corrected bullet) |
| Replay hides routes with a false plain-session `WHEN` | yes | `prompt-builder.ts` B5v2 | covered (bullet) |
| Specialist returns to supervisor on another intent (`parentReturn`) | yes | `flow-step-executor.ts` precheck | out of scope: separate topic, pipeline must be on |
| Repeated clarification count | gap | `_clarification_count` increment not verified | out of scope |
| Remote (A2A) fallback target | yes | `HANDOFF` `LOCATION`, `ENDPOINT` | out of scope |
| Fallback on a flow-agent supervisor | yes | `ON_INPUT` `ELSE` | out of scope: flow topic |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading of the replay, hide, depth, and MAP paths. Harness evaluation of `WHEN` classification. No end-to-end session run. | covered | State in open questions. |
| Required companion resources identified | Specialists and triage agent defined in the article. | covered | None. |
| Referenced variables have sources | `clarified_request` and `area` are gathered by the fallback. `clarified_area` is declared in the supervisor `MEMORY`. | covered | None. |
| Fallback, failure, ambiguity behavior verified | Replay rules, hide rule, depth limit, no-return fallback, direct-answer supervisor. | covered | None. |
| Customer verification path defined | Six steps and four trace events. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: `validate.mjs` (`validateABL`) over the 1.9.0 source copy, run from `/tmp`. Scratch files under `scratchpad/t35/` and `scratchpad/t35p/`. Blocks extracted by script.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Fallback_Routing_Supervisor` | full-document (with blocks 2 to 4) | `validateABL` with companions | pass | none | kept |
| Block 2 `Fallback_Triage_Agent` | full-document | `validateABL` | pass | none | kept |
| Blocks 3 and 4 stand-in specialists | full-document | `validateABL` | pass | none | kept |
| Block 5 `Mapped_Fallback_Supervisor` | full-document (with blocks 6, 3, 4) | `validateABL` | pass | none | kept |
| Block 6 enum triage agent | full-document | `validateABL` | pass | none | kept |
| Block 7 `WHEN: true` route | section-snippet | Block 1 with its fallback entry replaced, plus companions | pass | none | kept |

Extra 1.9.0 checks, all against Block 1 plus companions:

| Variant | Result |
| ------- | ------ |
| `BEHAVIOR: ROLE: router` added | 0 errors, 0 warnings |
| `ON_RETURN: "resume_intent"` string form | 0 errors, 0 warnings |
| `RESUME_WITH: latest_session_user_utterance` | 0 errors, 0 warnings |
| `EXPECT_RETURN: true` instead of `RETURN: true` | 0 errors, 0 warnings |
| `intent.category == "biling"` typo | warning `UNDECLARED_INTENT_CATEGORY` |
| `WHEN: intent.category == "billing" // billing route` | compiles |
| `WHEN: // billing route` (comment only) | error `AGENT_COMPILATION_FAILED`, `WHEN is required` |
| Fallback `WHEN` text containing `https://example.com` | compiles (the `//` is inside quotes) |

## Runtime semantics checks (harness, real compiler functions)

| Check | Result |
| ----- | ------ |
| Quoted fallback text with plain lowercase words, including ", or" | `isNaturalLanguageRoutingHint` true (semantic) |
| Quoted text with uppercase `OR` or `AND` | not a hint. Evaluated as an expression. `the request is vague OR unsupported` evaluates to false (CEL fails, legacy fallback) |
| `intent.category == "billing" OR clarified_area == "billing"` with only `clarified_area = billing` | true |
| `clarified_area == "billing"` with `technical_support` | false |
| `MAX_RESUME_INTENT_DEPTH` | 1 (source constant) |

The runtime executor modules could not load in the harness because of missing optional packages. Replay, hide, and depth behavior comes from source reading.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `ON_RETURN`, `resume_intent`, `RESUME_WITH`, `MAP`, `RETURN`, `COMPLETE`, `ESCALATE`, `router`, `WHEN: true`, `fallback`, `parentReturn`, `handoff_completed`, `executionFailureFallback`. |
| Identified every authoring style, alias, default, fallback? | pass | String and block `ON_RETURN`, `RETURN` and `EXPECT_RETURN`, default replay source, forwarded return message. |
| Distinguished optional from required sections? | pass | `ON_RETURN` and `MAP` are optional. |
| Explained reasoning-layer guidance? | pass | Plain-language route is model guidance. Router role forces a route. |
| Avoided making a preferred pattern the only pattern? | pass | Outcome table and four variations. |
| Could a customer build this another supported way? | pass | Return handlers, flow `ELSE` routing, and `parentReturn` exist. Scoped out. |
| Evidence if asked "are you not considering all scenarios?" | n/a | Variant map. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Replay source, hide rule with its exact scope, depth limit, `MAP` direction, no-return behavior are explicit. | None. |
| Senior content writer | ready | Outcome table first, short bullets, one table for mistakes. | None. |
| Product manager/customer enablement | ready | Six verification steps, direct-answer caveat, escalation caveat, new trace events. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Corrected the replay hide claim. Added forwarded return message and depth limit. | 5 |
| Depth of conceptual explanation | 4 | Hide scope and comment rule explained. | 5 |
| Readability and usability | 4 | Bullets stay short. | 5 |
| Coverage of examples | 4 | All blocks validated on 1.9.0. | 5 |
| Search and discovery quality | 4 | Added `handoff_completed` and `resume_intent_depth_limit` terms. | 4 |
| Completeness of workflow and failure modes | 4 | New troubleshooting row for a repeated triage visit. | 5 |
| Customer/partner self-service readiness | 4 | No internal paths in the article. | 4 |
| Scenario comprehensiveness | 4 | `parentReturn` scoped out with a reason. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. 1.8.1 article defect: the article said the supervisor does not offer the fallback again during the replay. The code hides only a child that returned without finishing. A fallback that ends with `COMPLETE` stays offered. The proposed text corrects this.
2. Behavior to confirm: with the example fallback (`COMPLETE`, then replay), a vague answer to the triage question can route to the fallback again. The second return does not replay. Product may want a stronger loop guard.
3. Convention: the reference says `EXPECT_RETURN` is primary and `RETURN` is the alias. The parser treats both the same. The articles use `RETURN`.
4. Public reference vs code: the reference describes `resume_intent` as re-running routing against the original intent. That is only the default. `RESUME_WITH` and a forwarded return message change the replayed text.
5. Cross-article: the "multiple intents" article (3.6) says a `RETURN: true` specialist must finish for the next queued request to start. A fallback in a multi-request plan follows the same rule. No conflict found.
6. `EXECUTION.pipeline.parentReturn` affects when a `RETURN: true` fallback in the middle of its question hands the caller back. No HowTo covers it. Consider a topic or a mention in the pipeline articles.
7. Published copy differs from the draft in format only: the `.mdx` has frontmatter, a back badge, `yaml` fences, and no Related HowTos section. Text is otherwise identical.

## Open questions

- No end-to-end session run. Replay, hide, and depth rules come from source reading.
- Whether `_clarification_count` counts fallback visits. Not verified.
- Whether `COMPLETE` with `WHEN: true` fires on the activation turn of a `RETURN: false` child. The article only says "end with a COMPLETE condition".
