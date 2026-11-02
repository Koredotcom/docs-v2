# Evidence: choose-single-agent-or-specialists

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-single-agent-or-specialists.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/choose-single-agent-or-specialists-2026-11-01-review.md`
**Topic:** 1.2 - How to decide whether to build one agent or multiple specialist agents
**Workflow:** Refresh against `release_Artemis_1.9.0`. The previous scan used `hotfix_Artemis_1.8.1`.
**Verdict:** update-needed

## Validation harness

The harness is the scratchpad validator from the 2026-10-19 run. It calls `validateABL` on a copy of `release_Artemis_1.9.0` code. It runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators over a set of files as one project. Command: `node harness/validate.mjs a.abl [b.abl ...]` from `/tmp`. Scratch files are in `scratchpad/topic-1-2/`. The code repo was not modified and no branch was switched. Runtime services were not started, so runtime behavior is close-read.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseAgentsSection` line 14556, call at line 2095, `HANDOFF_ON_RETURN_KEYS` line 1429) | `AGENTS:` handling, `ON_RETURN` keys |
| `packages/core/src/types/agent-based.ts` | Handoff and delegate types. No handoff or delegate change since 1.8.1 |
| `packages/compiler/src/platform/ir/compiler.ts` (`resolvePassFields` line 3831, `compileOnReturnConfig`, role check line 1363) | `PASS` typing, `ON_RETURN` lowering, router role error |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` (line 491) | Delegate child rule |
| `packages/compiler/src/platform/ir/delegate-result-contract.ts` (line 50) | `USE_RESULT` key rule |
| `packages/compiler/src/platform/contracts/abl-contract-registry.ts`, `contract-source-data.ts` | History default `full`. `handoff.on_return` now wired |
| `apps/runtime/src/services/execution/routing-executor.ts` (`resolveHistoryStrategy` 28000, `resolveHandoffOnReturnBehavior` 4067, delegate failure 28924, handoff event 12140, completion record 10057, seed event 1713) | History, return behavior, failure policy, trace events |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | `handoff_completed` outcomes |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`buildHandoffInputSchema` 5664, `handoffRequiresRouteIntent` 5812) | How `PASS` and `intent.` reach the model |
| `apps/runtime/src/services/execution/route-admission/` (`handoff-machine.ts`, `guard-stage.ts`) | `WHEN` guard before transfer |
| `apps/runtime/src/services/execution/agent-lookup.ts` (`parseTimeoutString`) | `TIMEOUT` format |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (HANDOFF, `ON_RETURN`, ESCALATE at line 847) | Public reference, allowed source |
| `examples/device-care-support/agents/*.agent.abl` | Supervisor, `Live_Agent`, `CONTEXT` form (unchanged) |

## Drift analysis (1.8.1 to 1.9.0)

Size of change: `routing-executor.ts` 2174 lines, `prompt-builder.ts` 585, `compiler.ts` 896. No diff in `validate-cross-agent.ts` or `delegate-result-contract.ts`. The parser and types show no new HANDOFF or DELEGATE keys. The registry shows no new handoff or delegate validation codes.

| Item | Finding | Impact |
| ---- | ------- | ------ |
| `handoff_completed` trace event | New. One terminal record per handoff attempt with `outcome`, `durationMs`, `handoffId`, `decisionId` (ABLP-6764) | Added to verification |
| `ON_RETURN` support status | Registry changed from partial to wired. No runtime change (ABLP-4958). An unknown action performs `continue` | One sentence added |
| Classifier intent for handoff guards | A pipeline short-circuit handoff now refreshes the current classifier intent before the `WHEN` guard (ABLP-6834) | Supports `intent.category` guards in the example. No change |
| Route admission refactor | `route-admission/` state machines. `WHEN` still enforced before transfer | No change |
| `PASS` typing | Unchanged. The old article omitted the source of the type | Sentence corrected |
| History default | `full`. Project default override still applies | No change |
| Delegate rules, `USE_RESULT`, `TIMEOUT` parsing, `ON_FAILURE` default | Unchanged | No change |
| Delegate failure text | The `respond` policy without authored text now resolves a localizable platform line (`max_iterations` key, ABLP-5739) | No change. Article example has authored text |
| Queued multi-intent and multi-intent handoff paths | Large runtime change (ABLP-6512, ABLP-5790, ABLP-3293) | Belongs to topic 1.8 (multiple intents) |
| Handoff language and CCAI data (ABLP-6046) | Transfer-time language and custom data contract for SmartAssist handoff | Out of scope. External handoff topic |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Single agent owns the outcome | yes | Block 1 clean on 1.9.0 | covered |
| Supervisor plus specialists with `HANDOFF`, `RETURN` true or false | yes | Blocks 2 to 5 clean as one project. `RETURN` and `EXPECT_RETURN` both set return | covered. Public reference prefers `EXPECT_RETURN`. See discrepancies |
| `PASS` and `SUMMARY` shorthand outside `CONTEXT:` | yes | Parser cases | covered |
| `CONTEXT:` block with `pass:` and `summary:` | yes | Parser `inContext` branch. `device-care-support` example | out of scope: a second authoring form for the same data |
| `AGENTS:` roster | yes (ignored) | `parseAgentsSection` returns void | covered |
| Human takeover through an agent with `ESCALATE` | yes | Block 5 clean. Reference ESCALATE section | covered |
| `DELEGATE` with `PASS`, `RETURNS`, `TIMEOUT`, `ON_FAILURE` | yes | Blocks 6 and 7 clean | covered |
| `DELEGATE` `USE_RESULT` as a variable name | yes | `resolveDelegateUseResultMemoryKey` | covered |
| `DELEGATE` child that needs customer input | no (compile error) | `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` | covered |
| `router` supervisor with `DELEGATE` | no (compile error) | `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR` | covered |
| `WHEN` on `intent.category` adds an `intent` routing input | yes | `handoffRequiresRouteIntent` | covered (new) |
| `ON_RETURN` with `continue` or `resume_intent` | yes | `resolveHandoffOnReturnBehavior`. Harness `sup_onreturn` clean | covered, one sentence (new) |
| Remote handoff and delegate (`LOCATION`, `ENDPOINT`, `PROTOCOL`, `ASYNC`) | yes | Parser cases | out of scope: external agents topic |
| `RETURN_HANDLERS`, `ON_RETURN` `map`, `set`, `resume_with`, `handler` | yes | `compileOnReturnConfig` | out of scope: return-handling topics |
| `HISTORY` modes `auto`, `none`, `summary_only`, `full`, `last_n` | yes | `resolveHistoryStrategy` | covered (one sentence) |
| `ENABLED_WHEN` route availability | yes | `routing-availability.ts` | out of scope: topic 1.3 |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Routing action construction, `PASS` inputs, history, delegate mapping, failure policy, and `ON_RETURN` read in `prompt-builder.ts` and `routing-executor.ts` | covered | Close-read, not run |
| Required companion resources identified | Supervisor, three specialists, `Live_Agent`, `Booking_Manager`, `Fee_Calculator` all defined. Human-agent transfer is a project assumption | covered | Transfer setup is outside this article |
| Referenced variables have sources | `customer_id` and `booking_id` come from `GATHER`. `quoted_fee` comes from `RETURNS`. `total_fee` comes from `SET`. The `$25` fee is labeled a stand-in | covered | None |
| Fallback/failure/ambiguity behavior verified | `human_help` route, delegate `ON_FAILURE` with `RESPOND`, `RETURNS` contract failure, timeout, `handoff_completed` outcomes | covered | None |
| Customer verification path defined | Seven steps with utterances and trace event names | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Order_Status_Agent) | full-document | `validateABL` harness, 1.9.0 | pass | none | kept |
| Blocks 2 to 5 (supervisor, account, order, live agent) | full-document set | `validateABL` harness, four files as one project | pass | none | kept |
| Blocks 6 and 7 (Booking_Manager, Fee_Calculator) | full-document set | `validateABL` harness, two files as one project | pass | none | kept |

Command: `cd /tmp; node <scratchpad>/harness/validate.mjs <files from scratchpad/topic-1-2/>`. Result: three sets, zero errors, zero warnings. Extra probe: supervisor with `ON_RETURN: action: resume_intent` plus the three specialists, zero errors, zero warnings. The article adds no new code block.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Source table above |
| Did I search for synonyms and neighboring constructs? | pass | `HANDOFF`, `DELEGATE`, `AGENTS`, `ESCALATE`, `RETURN`, `EXPECT_RETURN`, `ON_RETURN`, `handoff_to_`, `delegate_to_`, `ROLE`, `intent.`, `handoff_completed` |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback? | pass | Aliases, `CONTEXT` form, history default, delegate failure default `continue`, `ON_RETURN` fallback to `continue` |
| Did I distinguish optional helper sections from required executable configuration? | pass | `AGENTS:` ignored, `HANDOFF` executable |
| Did I explain how the reasoning layer uses free-form guidance? | pass | `WHEN` text and `intent` input guide the model. `PASS` fields are inputs |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Decision table keeps both designs |
| Could a customer build the scenario another supported way? | pass | `CONTEXT:` form, remote agents, `RETURN_HANDLERS` named in the scenario map |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | `PASS` typing, intent input, return behavior, and trace events match code. Delegate rules match compiler | None blocking. Runtime is close-read, not run |
| Senior content writer | ready | Decision table, short bullets, no dashes | None |
| Product manager/customer enablement | ready | Handoff versus delegate rule, error codes, seven verification steps, production checklist | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-verified all claims on 1.9.0. Fixed the `PASS` type source | 5 |
| Depth of conceptual explanation | 4 | Added the `intent` input and `ON_RETURN` choice | 5 |
| Readability and usability | 5 | Kept structure. New text is short sentences | 5 |
| Coverage of examples | 4 | Probe validated `ON_RETURN`. Existing blocks pass | 4 |
| Search and discovery quality | 4 | Added `handoff_completed` and `ON_RETURN` terms | 5 |
| Completeness of workflow and failure modes | 4 | Added `handoff_completed` outcomes to verification | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Stand-ins labeled | 5 |
| Scenario comprehensiveness | 4 | Added `intent` input and `ON_RETURN`. Remote and `RETURN_HANDLERS` scoped out | 4 |
| Article completeness | 5 | All template parts present | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- The public reference (`multi-agent-and-supervisor.mdx`, lines 434 and 442) names `EXPECT_RETURN` as the primary keyword and `RETURN` as the older alias. This article and its examples use `RETURN`. Both parse. Decide whether to switch the article to `EXPECT_RETURN`.
- The public reference (same file, line 31) describes `AGENTS:` as declaring agents available for routing, with file path, alias, and capabilities. The parser discards `AGENTS:` in 1.9.0 (`agent-based-parser.ts` line 2095). The article says the platform ignores it. Confirm with engineering which statement is right.
- Carried over: `examples/flow-test/agents/hotel_booking.agent.abl` uses a quoted `TIMEOUT: "10s"` that the runtime ignores. The compiler accepts `USE_RESULT` text with spaces and `AGENTS:` names that do not exist, with no warning.
- The published `.mdx` page for this topic needs the same changes after approval.

## Open questions

- The delegate timeout default is 30 seconds in the code paths read, but `this.ctx.config.timeoutMs` can override it (`routing-executor.ts` line 20285). The article states 30 seconds. Confirm the runtime config default with engineering.
- Does a supervisor `GATHER` with `required: true` block routing? The article avoids relying on it. Carried over.
