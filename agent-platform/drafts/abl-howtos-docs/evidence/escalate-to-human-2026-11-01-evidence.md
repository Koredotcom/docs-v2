# Evidence: escalate-to-human

**Date:** 2026-11-01
**Article:** none yet. New topic.
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/escalate-to-human-2026-11-01-draft.md`
**Topic:** 4.3 - When to escalate a conversation to a human
**Workflow:** Article Creation Workflow against `release_Artemis_1.9.0`. No prior article, draft, or evidence.
**Verdict:** draft ready for review

## Validation harness

`validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`) from the code repo source on `release_Artemis_1.9.0`. The earlier harness folder was empty at the start of this run, so the harness was rebuilt: `scratchpad/harness/run.sh` loads the TypeScript source through `tsx` with an ESM resolver hook. The hook maps workspace packages to `src`, stubs the database package, and skips the zod version pin. It calls the same `validateABL`. Scratch files are in `scratchpad/escalate-complete/` (files `e*.abl`, `n1.abl`, `a*.abl`, `art43/b*.abl`). The code repo stayed read-only. Runtime services were not started. Runtime behavior comes from source reading and existing tests.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/types/agent-based.ts` (1735, 1857, 1954-2035) | `EscalateTrigger`, `EscalateRouting`, `EscalateRoutingEntry`, `EscalateConfig`, constraint and failure action types |
| `packages/core/src/parser/agent-based-parser.ts` (`parseEscalate` 9348, `parseEscalateRouting` 9637, `parseEscalateTrigger` 9740, header regexes 9854-9881, constraint `ON_FAIL` block 8495-8520, step `ON_EXHAUSTED` 3316) | Section grammar. Uppercase `WHEN`, `REASON`, `PRIORITY`, `TAGS`, `SET`. Routing as mapping or list. Warnings W350 to W357 |
| `packages/core/src/parser/yaml-parser.ts` (1618-1760) | YAML form parity for `ESCALATE` |
| `packages/compiler/src/platform/ir/schema.ts` (3195-3460, 3505) | `EscalationConfig`, `EscalationRouting*`, `ErrorHandler.then` |
| `packages/compiler/src/platform/ir/compiler.ts` (2383, 3954-3980, 4355-4580, 5010) | `__escalate__` tool only when triggers exist. Routing compile. `parseErrorThen` drops reason and priority |
| `packages/compiler/src/platform/ir/escalation-routing.ts`, `escalation-routing-validation.ts` | Entry normalization. Diagnostics for defaults, prompt-only `when`, SIP, `user_info` |
| `packages/compiler/src/platform/ir/validate-ir.ts` (2031-2040) | `ESCALATE` and `ESCALATE WITH REASON` are terminal flow targets |
| `packages/compiler/src/platform/constructs/deterministic-condition.ts` | Deterministic versus prompt-only rule |
| `packages/compiler/src/platform/constants.ts` (142, 400-403) | Default `escalation_format`. Reason length 5 to 500 |
| `apps/runtime/src/services/execution/routing-executor.ts` (`evaluateEscalationTriggers` 21209, `handleEscalate` 21357, `handleEscalateOnce` 21419-23260, constants 7300-7400, `hasUnmatchedDeterministicEscalationTrigger` 27103, `filterEscalationContext` 27132, handoff failure 29260, delegate failure 28959) | Trigger loop, validation, routing selection, task creation, transfer, failure handling, suspension |
| `apps/runtime/src/services/execution/types.ts` (7014 `tryThreadReturn`) | Handoff timeout `escalate` marks the parent only |
| `apps/runtime/src/services/execution/escalation-routing-select.ts` | `system.*` context for routing `when`. First match. No default means no entry |
| `apps/runtime/src/services/execution/escalation-template-renderer.ts`, `packages/shared/src/prompts/prompt-catalog.ts` (76, 172, 300, 802) | Confirmation precedence. Built-in per channel templates. Model escalation instruction |
| `apps/runtime/src/services/execution/escalation-trigger-utils.ts` | Deterministic classification shared with realtime voice |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (1049, 8738-8996, 12483, 20192, 22095-22155) | Terminal target parse. Full escalation versus `ESCALATION_NOT_CONFIGURED`. `MAX_ATTEMPTS` and `ON_EXHAUSTED`. Validation handler escalate |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (14635, 20955-20985, 22237, 29556) | Trigger check before the model. Opt-in recheck after tools. `ON_ERROR` escalate. Model `__escalate__` call |
| `apps/runtime/src/services/execution/constraint-checker.ts` (160-235, 1391) | Constraint escalate and `ON_EXHAUSTED` set state only |
| `apps/runtime/src/services/execution/prompt-builder.ts` (2466, 5142-5180) | Model sees `REASON` and `PRIORITY`. Escalate tool schema |
| `apps/runtime/src/services/runtime-executor.ts` (21315, 32870) | Waiting message while a suspension is active. `resolveEscalation` |
| `apps/runtime/src/services/execution/trace-helpers.ts` (520-566) | Decision event kinds emitted at standard verbosity |
| `apps/runtime/src/routes/agent-transfer-sessions.ts` (170) | `post_agent` default `end` |
| Tests: `execution/__tests__/runtime-control-flow-safety.test.ts` (669), `__tests__/execution/flow-terminal-transition-matrix.test.ts`, `__tests__/execution/runtime-flow-semantics-matrix.test.ts` (17404), `__tests__/execution/constraint-max-repeats.test.ts` | Behavior of model refusal, flow terminal, `ON_EXHAUSTED`, `MAX_REPEATS` |
| Examples: `examples/banknexus/agents/BankNexus_Supervisor.agent.abl`, `examples/travel/agents/authentication.agent.abl`, `examples/flow-test/agents/hotel_booking.agent.abl` | Supervisor `ESCALATE`, constraint `ESCALATE` |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx`, `memory-and-constraints.mdx` | Public reference cross-check only |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Agent-level `ESCALATE:` trigger, deterministic `WHEN` | yes | `parseEscalateTrigger`. `evaluateEscalationTriggers` 21209. Harness `e1` clean | covered |
| Agent-level trigger, prompt-only `WHEN` (model decides) | yes | `isDeterministicCondition`. `reasoning-executor.ts` 29556. Harness `e4` clean | covered |
| Mixed deterministic and prompt-only triggers | yes, with a refusal rule | `hasUnmatchedDeterministicEscalationTrigger` 27103. Test `runtime-control-flow-safety.test.ts` 669 | covered (mistake row) |
| Trigger `PRIORITY` label or number, `TAGS`, `SET`, `GENESYS_SIP_HEADERS` | yes | Parser 9740. Numeric map 7375. `n1` warns W351 on `urgent` | covered (priority, SET). `TAGS` and SIP headers out of scope: provider detail |
| `CONSTRAINTS` `ON_FAIL: ESCALATE` | yes, marking only | `constraint-checker.ts` 1391. `handleEscalate` has 3 callers only | covered |
| Constraint block `MAX_REPEATS` and `ON_EXHAUSTED: ESCALATE` | yes, marking only | `constraint-checker.ts` 160-235. Test `constraint-max-repeats.test.ts`. Harness `e7` clean | covered |
| Flow terminal `THEN: ESCALATE` | yes | `parseFlowTerminalTarget` 1049. `handleTerminalFlowTarget` 8900. Harness `e2` clean | covered |
| Flow terminal `ESCALATE WITH REASON "..." PRIORITY level` | yes | Same. Test `flow-terminal-transition-matrix.test.ts` | covered |
| Step `MAX_ATTEMPTS` with `ON_EXHAUSTED: ESCALATE ...` | yes | `transitionIfStepAttemptsExhausted` 12483. Test `runtime-flow-semantics-matrix.test.ts` 17404. Harness `e3` clean | covered |
| `ON_INPUT` branch `THEN: ESCALATE ...` | yes | Test matrix "ON_INPUT matching branch reaches ESCALATE". Harness `e2` | covered |
| `ON_ERROR` `THEN: ESCALATE` | yes, no transfer | `reasoning-executor.ts` 22237. `flow-step-executor.ts` 22135. `parseErrorThen` drops reason | covered (table row) |
| `HANDOFF` and `DELEGATE` `ON_FAILURE: escalate` | yes, no transfer | `routing-executor.ts` 29260, 28959 | covered (table row) |
| Handoff timeout `escalate` | yes, marks parent | `types.ts` 7014 | out of scope: handoff timeout belongs to the handoff articles |
| Guardrail action `escalate` | yes, no transfer | `flow-step-executor.ts` 17874. `reasoning-executor.ts` 22536 | out of scope: guardrails article. Named as "marking" class only in the evidence |
| Supervisor-level `ESCALATE:` | yes | Example `BankNexus_Supervisor`. Prompt catalog 76. Harness `e8` + `e8b` clean | covered |
| Specialist reads its own block | yes (active thread IR) | `session.agentIR` in `handleEscalateOnce` | covered |
| Routing `connection`, `queue`, `skills`, `priority`, `post_agent`, `voice` | yes | Schema 3366-3425. `handleEscalateOnce` 22286-22330 | covered |
| Routing list with `id`, `when`, default last | yes | `escalation-routing-validation.ts`. Select 100+. Harness `e5` clean. `n1` shows two errors | covered |
| Advanced routing keys (`named_agents`, `agent_matching_conditions`, `flow_policy`, `provider_config`, `genesys_sip_headers`, `metadata`, `user_info`) | yes | Schema 3366-3400 | out of scope: provider specific. `user_info` and context belong to 4.9 |
| Custom voice routing (`call_transfer_type: custom`) | yes, notification only | `handleEscalateOnce` custom path | out of scope: voice integration. Not mixed with `connection` |
| No `connection` and no project default | yes | `handleEscalateOnce` "No agent-transfer routing configured". `a2` compiles clean | covered |
| Routing list with no match | yes, fails closed | `routingListNoMatch` | covered |
| Transfer failure | yes | `handleEscalateOnce` failure branches. Failed trigger suppression 21262 | covered |
| Agent-transfer subsystem offline | yes | `handleEscalateOnce` else branch ("falling back to HITL only") | covered |
| `on_human_complete` pause and waiting message | yes | `requiresPersistedPause`. `runtime-executor.ts` 21315 | covered by link to 4.10 |
| `context_for_human` payload | yes | `filterEscalationContext` 27132 | covered by link to 4.9 (one example field only) |
| `CONNECTOR_ACTION` ITSM | yes | Parser 9396. `handleEscalateOnce` connector task | out of scope: 4.9 |
| `EXECUTION.escalation_recheck_after_tools` | yes | `reasoning-executor.ts` 20955-20985. Harness `e9` clean | covered |
| Confirmation message precedence and `escalation_format` | yes | `escalation-template-renderer.ts`. Harness `m1` clean | covered |
| Voice silent announcement setting | yes | `shouldAnnounceHumanEscalation` 3181 | covered (one sentence) |
| Model-initiated escalation guards (already in progress) | yes | `handleEscalateOnce` `ESCALATION_ALREADY_IN_PROGRESS` | covered (troubleshooting) |
| Realtime voice pre-model intercept for `input` triggers | yes | `escalation-trigger-utils.ts` | out of scope: voice runtime detail |
| Studio-only or legacy YAML `escalate:` | yes (YAML parser parity) | `yaml-parser.ts` 1618 | out of scope: ABL line form only |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `handleEscalateOnce` read end to end. Callers of `handleEscalate`: deterministic trigger, model tool, flow terminal | covered | Runtime not started. Behavior is source read plus tests |
| Required companion resources identified | Connection `genesys`, queue, skills, `claims_sip` marked project-local. `Billing_Agent` stub shown | covered | None |
| Referenced variables have sources | `dispute_amount`, `claim_amount`, `refund_amount`, `service_choice`, `name_matches` are `GATHER` fields. `failed_lookups` is flagged as written by a tool in a project | covered | `e9` uses `GATHER` as a syntax harness. Stated in the article |
| Fallback, failure, ambiguity behavior verified | No routing, no match, failed transfer, offline subsystem, refusal codes | covered | None |
| Customer verification path defined | Trace decision kinds at standard verbosity. Sample inputs 750 and 200 | covered | None |
| Production readiness checklist included | Section present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Billing_Agent` (minimal) | full-document | `validateABL` via harness (`art43/b1.abl`) | pass | none | kept |
| Block 2 `Account_Help_Agent` | full-document | harness `art43/b2.abl` | pass | none | kept |
| Block 3 `Service_Picker_Agent` | full-document | harness `art43/b3.abl` | pass | none | kept |
| Block 4 `Returns_Agent` | full-document | harness `art43/b4.abl` | pass | none | kept |
| Block 5 `Claims_Agent` | full-document | harness `art43/b5.abl` | pass | none | kept |
| Blocks 6 and 7 supervisor and `Billing_Agent` stub | full-document (validated as one project) | harness `art43/b6.abl art43/b7.abl` | pass | none | kept |
| Block 8 `Refund_Agent` | full-document | harness `art43/b8.abl` | pass | none | kept |
| Block 9 `Identity_Agent` | full-document | harness `art43/b9.abl` | pass | none | kept |
| Block 10 `Lookup_Agent` | full-document (syntax harness, labeled) | harness `art43/b10.abl` | pass | none | kept |
| Block 11 `Billing_Agent` with `MESSAGES` | full-document | harness `art43/b11.abl` | pass | none | kept |
| Negative probe `n1.abl` | not in article | harness | 2 errors, 3 warnings as the article states | `ESCALATE_ROUTING_DEFAULT_NOT_LAST`, `ESCALATE_ROUTING_WHEN_PROMPT_ONLY`, W351, W355, W357 | used for mistake rows |
| Probe `a2.abl` (no routing) | not in article | harness | compiles clean | `UNDEFINED_CONDITION_VAR` only | confirms no compile gate on routing |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Re-read `handleEscalateOnce`, checked every construct against its caller. Removed the claim that `hasAgentTransfer` is true for a project default connection. Corrected the confirmation text to the channel templates | 5 |
| Depth of conceptual explanation | 4 | Added the construct table with the transfer versus marking split, trigger types, routing, and no-connection behavior before the first ABL | 5 |
| Readability and usability | 3 | Short tables, one idea per sentence, answer first. Removed an unverified sentence on session behavior | 4 |
| Coverage of examples | 3 | Added flow, attempts, prompt-only, routing list, supervisor, constraint, repeats, recheck, message variants. All validated | 5 |
| Search and discovery quality | 4 | Headings use `ESCALATE`, `routing`, `human agent`, trace event names | 4 |
| Completeness of workflow and failure modes | 3 | Added no-routing, no-match, failure, offline, refusal codes, and troubleshooting rows | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Companion resources named. Checklist added | 4 |
| Scenario comprehensiveness | 3 | Covered every `yes` row or scoped it out with a reason | 4 |
| Article completeness | 4 | All template sections present | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | See source table |
| Did I search synonyms and neighbors? | pass | Searched `ESCALATE`, `escalation`, `escalat`, `handleEscalate`, `isEscalated`, `on_failure`, `on_exhausted`, `HITL`, `HumanTask`, `routing` |
| Did I find every authoring style, shorthand, alias, default, fallback? | pass | Uppercase triggers only, routing mapping or list, lowercase `when` in entries, flow terminal forms, constraint inline and block forms. W355 documents the lowercase trigger trap |
| Did I separate optional helpers from required config? | pass | `routing` is required for a live transfer, not for compile. Stated |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Model sees `REASON` and `PRIORITY`, not `WHEN` |
| Did I avoid making one pattern sound like the only one? | pass | Three full-escalation paths and two marking classes are listed |
| Could a customer build the scenario another supported way? | pass | Guardrail escalate and handoff timeout escalate exist and are scoped out with reasons |
| What evidence for "are you not considering all scenarios"? | pass | Variant map above, plus the three call sites of `handleEscalate` |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Separates transfer paths from marking-only paths with code evidence. Covers no-connection and failure behavior. Trace names match code | None. Runtime was not started, so behavior rests on source and tests |
| Senior content writer | ready | Answer first. Tables carry the decisions. Sentences are short. No repo paths | Article is long for a one-page target. Template sections drive the length |
| Product manager/customer enablement | ready | Decision table, go-live checklist, and troubleshooting by symptom. Warns about the silent no-connection case | None |

## Doc bugs and discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Reference says `ESCALATE` always transfers | `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` line 849 and `memory-and-constraints.mdx` line 610 describe escalation as a human transfer. Constraint, `ON_EXHAUSTED`, `ON_ERROR`, and handoff or delegate failure escalations do not call the transfer path. Verified: `handleEscalate` has three callers (trigger, model tool, flow terminal) |
| Reference note on `ON_ERROR` | Line 902 tells authors to use `THEN: ESCALATE with REASON "..."` in `ON_ERROR`. The compiler drops the reason and priority (`parseErrorThen`). The handler does not transfer |
| Flow terminal `PRIORITY` | `parseFlowTerminalTarget` accepts any letters. `handleEscalateOnce` accepts only `low`, `medium`, `high`, `critical`. A test uses `urgent` only on an agent with no `ESCALATE:` block, which hides the error |
| Reference on routing lists and the project default | The reference says list routing never falls back to the project default connection. In code that is true for no-match. A matched entry with no `connection` appears to use the same project default lookup as the single form. Needs a runtime check |
| Mixed trigger types | A deterministic trigger blocks the model escalate action while none matches. The model prompt still says escalate if the user repeatedly asks. Possible product bug |
| Free text with lowercase `in` | `isDeterministicCondition` treats the word `in` as an operator. Plain-language triggers can silently become deterministic |
| `hasAgentTransfer` in `escalation_triggered` | It reflects `routing.connection` only. A transfer through the project default shows `false` |

## Uncertainty

- Runtime was not started. Statements on provider transfers, the human task queue, and post-transfer message forwarding come from source.
- The statement that each agent reads its own `ESCALATE:` block rests on `session.agentIR` being the active thread IR.
- Whether a matched list entry without `connection` falls back to the project default is not confirmed.
