# Evidence: choose-single-agent-or-specialists

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-single-agent-or-specialists.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/choose-single-agent-or-specialists-2026-10-19-review.md`
**Topic:** 1.2 - How to decide whether to build one agent or multiple specialist agents
**Workflow:** Refresh against `hotfix_Artemis_1.8.1`. The previous refresh used `hotfix_Artemis_1.4.4`.
**Verdict:** update-needed

## Validation harness

A real parse and compile harness was built in the session scratchpad, outside the code repo. It copies `packages/core`, `packages/compiler`, and the imported workspace packages, transpiles TypeScript with `esbuild` in a Node loader, and calls `validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`). That runs `parseAgentBasedABL`, `compileABLtoIR`, and the IR validators over a set of files as one project. A deliberately broken project produced errors and warnings, so the harness reports problems. The code repo was not modified and no branch was switched. Runtime services were not started, so runtime behavior is close-read.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseHandoffConfig` near line 8080 to 8290, `parseDelegateConfig` near 7793, `parseAgentsSection`, top-level section dispatch near line 1806) | HANDOFF and DELEGATE fields, `RETURN` and `EXPECT_RETURN` aliases, `PASS` and `SUMMARY` shorthand, `AGENTS:` handling |
| `packages/core/src/types/agent-based.ts` (`HandoffContext`, `HandoffHistoryMode`) | Typed fields, history values |
| `packages/compiler/src/platform/ir/compiler.ts` (routing block near line 1590, delegate and handoff lowering near line 3585, `compileFailureHandling`, role checks near line 1195) | IR lowering and compile errors |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` (`validateDelegateChildrenDoNotRequireUnmappedGatherInput`) | Delegate child rule |
| `packages/compiler/src/platform/ir/delegate-result-contract.ts` | `USE_RESULT` key rule, `RETURNS` schema or mapping |
| `packages/compiler/src/platform/contracts/abl-contract-registry.ts`, `contract-source-data.ts` | History default `full`, `handoff.machine-targets` note |
| `apps/runtime/src/services/execution/routing-executor.ts` (`resolveHistoryStrategy`, delegate execution near lines 19200 to 19960, `handleDelegateFailure` near 27500, `parseTimeout`) | History resolution, delegate result mapping, failure policy, timeout |
| `apps/runtime/src/services/execution/agent-lookup.ts` (`parseTimeoutString`) | Accepted `TIMEOUT` format |
| `apps/runtime/src/services/execution/prompt-builder.ts` (`buildHandoffDescription`, `buildHandoffInputSchema`, escalate and return actions near line 4713) | How handoffs, `PASS`, `ESCALATE`, and `RETURN: true` reach the model |
| `apps/runtime/src/services/execution/agent-execution-role.ts` | Role resolution |
| `examples/device-care-support/agents/*.agent.abl` | Real supervisor, `Live_Agent` with `ESCALATE`, handoff `CONTEXT` form |

Tests inspected: `packages/compiler/src/__tests__/ir/enabled-when-validation.test.ts` (header), `constraint-control-flow.test.ts`.

## Drift analysis (1.4.4 to 1.8.1)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| HANDOFF history default | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'` is unchanged since 1.4.4. 1.8.1 adds a project-level override (`coordination_defaults.defaultHistoryStrategy`) in `resolveHistoryStrategy` | Article note rewritten. The word "now" removed |
| `ENABLED_WHEN` on HANDOFF and DELEGATE | New in 1.8.1 (parser keyword absent in 1.4.4) | Covered in topic 1.3. Mentioned there only |
| Route admission | Large runtime refactor (`route-admission/surface.ts`, `routing-availability.ts`). `WHEN` is enforced when the model calls the routing action | Article states that `WHEN` is checked before the transfer |
| `HANDOFF` targets machine agents only | Compatibility note exists in both versions | `Live_Agent` stub replaced |
| `AGENTS:` discarded | `parseAgentsSection(state)` result unused in both versions | Previous evidence called it "recognized roster-only". Wording corrected |
| Delegate `USE_RESULT` | `resolveDelegateUseResultMemoryKey` exists in both versions. Prose value is never read as an instruction | Doc bug missed earlier. Example fixed |
| Delegate `TIMEOUT` quoting | `parseTimeoutString` regex has no quote handling in either version | Doc bug missed earlier. Example fixed |
| Delegate child rule and role rule | `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` and `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR` exist in both versions | Added to article |
| Size of change | `routing-executor.ts` +15901 lines, `prompt-builder.ts` +3163, `compiler.ts` +1984 | Claims re-verified against current code |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Single agent owns the outcome | yes | Harness clean | covered |
| Supervisor plus specialists with `HANDOFF`, `RETURN` true or false | yes | Harness project set clean. `RETURN` and `EXPECT_RETURN` both set `config.return` | covered |
| `PASS` and `SUMMARY` shorthand outside `CONTEXT:` | yes | Parser switch cases for `PASS` and `SUMMARY` | covered |
| `CONTEXT:` block with `pass:` and `summary:` | yes | Parser `inContext` branch. `device-care-support` example uses it | out of scope: a second authoring form for the same data. The article keeps the shorthand |
| `AGENTS:` roster | yes (ignored) | `parseAgentsSection` returns void. Missing agent name compiles clean | covered, wording corrected |
| Human takeover through an agent with `ESCALATE` | yes | Harness clean. Prompt builder adds the escalate action when `coordination.escalation` exists | covered |
| `DELEGATE` with `PASS`, `RETURNS`, `TIMEOUT`, `ON_FAILURE` | yes | Harness clean. IR shows each field | covered |
| `DELEGATE` `USE_RESULT` as a variable name | yes | `resolveDelegateUseResultMemoryKey`. Harness `bm3` clean | covered |
| `DELEGATE` child that needs customer input | no (compile error) | `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` (harness) | covered |
| `router` supervisor with `DELEGATE` | no (compile error) | `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR` (harness) | covered |
| Remote handoff and delegate (`LOCATION`, `ENDPOINT`, `PROTOCOL`, `ASYNC`) | yes | Parser cases | out of scope: external agents are a separate topic |
| `ON_RETURN` actions (`continue`, `resume_intent`) and `RETURN_HANDLERS` | yes | `HANDOFF_ON_RETURN_ACTION_VALUES`, parser | out of scope: covered by return-handling topics |
| `HISTORY` modes `auto`, `none`, `summary_only`, `full`, `last_n` | yes | `HandoffHistoryMode`, `resolveHistoryStrategy` | covered (one sentence) |
| `ENABLED_WHEN` route availability | yes | `routing-availability.ts` | out of scope here, covered in topic 1.3 |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Routing action construction, `PASS` inputs, history resolution, delegate mapping and failure read in `prompt-builder.ts` and `routing-executor.ts` | covered | Close-read, not run |
| Required companion resources identified | All three specialists, `Live_Agent`, `Booking_Manager`, and `Fee_Calculator` are defined. Human-agent transfer is labeled a project assumption | covered | Transfer setup details are outside this article |
| Referenced variables have sources | `customer_id` and `booking_id` are gathered or passed. `quoted_fee` comes from `RETURNS`. `total_fee` comes from `SET` | covered | The `$25` fee is labeled a stand-in |
| Fallback, failure, ambiguity behavior verified | `human_help` route, `ON_FAILURE` with `RESPOND`, `RETURNS` contract failure, timeout | covered | None |
| Customer verification path defined | Seven steps with utterances and trace event names | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Order_Status_Agent) | full-document | `validateABL` harness | pass | none | kept |
| Blocks 2 to 5 (supervisor plus three agents) | full-document set | `validateABL` harness, files validated together | pass | none | block 5 (`Live_Agent`) rewritten |
| Blocks 6 and 7 (Booking_Manager plus Fee_Calculator) | full-document set | `validateABL` harness, files validated together | pass | none | both rewritten |
| Old blocks 6 and 7 | full-document set | `validateABL` harness | pass | none. Compiles clean but `TIMEOUT` is ignored and `USE_RESULT` is inert | replaced |

Command: `node --import ./reg.mjs val.mjs <review file> all`. Result: all sets zero errors, zero warnings.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | See source table |
| Did I search for synonyms and neighboring constructs? | pass | `HANDOFF`, `DELEGATE`, `AGENTS`, `ESCALATE`, `RETURN`, `EXPECT_RETURN`, `ON_RETURN`, `handoff_to_`, `delegate_to_`, `ROLE` |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback? | pass | Aliases, `CONTEXT` form, history default, delegate failure default `continue` |
| Did I distinguish optional helper sections from required executable configuration? | pass | `AGENTS:` is ignored, `HANDOFF` is executable |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Delegate `WHEN` text and handoff `WHEN` are model guidance. `PASS` fields are typed inputs |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Decision table keeps both designs |
| Could a customer build the scenario another supported way? | pass | `CONTEXT:` form, remote agents, and `ON_RETURN` are named in the scenario map |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Delegate rules and failure behavior match compiler and runtime. Human path uses `ESCALATE` | None blocking. Human transfer configuration is a project assumption |
| Senior content writer | ready | Decision table, short bullets, no dashes | None |
| Product manager/customer enablement | ready | Clear handoff versus delegate rule with compile error names, verification steps, production checklist | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Fixed `USE_RESULT`, `TIMEOUT`, `AGENTS:`, and `Live_Agent` claims against code and harness runs | 5 |
| Depth of conceptual explanation | 4 | Added what `PASS` and `RETURN: true` do at runtime | 5 |
| Readability and usability | 4 | Bullets for delegate rules and settings | 5 |
| Coverage of examples | 3 | Delegate example now consumes its inputs and result. `Live_Agent` reaches a person | 4 |
| Search and discovery quality | 4 | Error codes in troubleshooting | 5 |
| Completeness of workflow and failure modes | 3 | Added delegate failure, timeout, and human escalation checks | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Stand-ins labeled | 5 |
| Scenario comprehensiveness | 4 | Added history modes and failure forms. Remote and `ON_RETURN` scoped out | 4 |
| Article completeness | 4 | Added Related HowTos | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- The `examples/flow-test/agents/hotel_booking.agent.abl` file in the code repo uses a quoted `TIMEOUT: "10s"`. The runtime ignores it. This is a possible product bug or a parser gap. Raise it with engineering.
- The compiler accepts `USE_RESULT` text with spaces and gives no warning, although the runtime ignores it.
- `AGENTS:` accepts agent names that do not exist and gives no warning.
- Published page `agent-platform/abl/how-to/choose-single-agent-or-specialists.mdx` will need the same changes after approval.
- Decide whether the "human transfer configuration" statement needs a link to the escalation documentation page.

## Open questions

- Resolved from the public reference (2026-10-19). Public reference `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (ESCALATE section, lines 825-1110): delivery needs a `routing` block (`connection`, `queue`, `skills`, `priority`, `post_agent`). A conditional `routing` list with no matching entry fails closed. The article now states the human-agent connection and `routing` block prerequisite and links to the ESCALATE reference. Per-channel connector setup remains a project assumption.
- Does a supervisor `GATHER` with `required: true` ever block routing? The runtime skips a separate extraction pass while routing actions exist (`planned_with_routing_tool` in `reasoning-executor.ts`). The article avoids relying on it.


## Post-publication correction (2026-10-20)

- `ENABLED_WHEN: channel.name == "voice"` disables the route. Availability reads the thread's `data.values` (`routing-availability-snapshot.ts`), where only `session.channel` exists (`runtime-executor.ts` initialData). Tested with the real `resolveRoutingAvailability`: `channel.name` gives `enabled_when_missing_data` unless a `channel` object is present; `session.channel == "voice"` enables only on exactly `voice`; `session.channel IN ["voice","voice_twilio"]` enables both. Article and `.mdx` page now use `session.channel`.
- `handoff_context_pass_resolved` fires only when a `PASS` field is a current-turn input name (`request`, `message`, `utterance`, and similar) in `routing-executor.ts`. It never fires for `customer_id`. Article and `.mdx` verification steps now use the `handoff` event `context` and `handoff_context_seed` `seededFields` and `remainingWaitingFields`.
