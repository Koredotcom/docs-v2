# Evidence: parallel-multi-intent-fan-out (topic 4.8)

Date: 2026-11-01. Target: Artemis 1.9.0 (release_Artemis_1.9.0, read-only). Draft: reviews/parallel-multi-intent-fan-out-2026-11-01-draft.md.

## Finding

No parallel DELEGATE syntax exists. Parser keys for DELEGATE are WHEN, ENABLED_WHEN, PURPOSE, INPUT, RETURNS, MEMORY_GRANTS, USE_RESULT, TIMEOUT, ON_FAILURE, EXPERIENCE_MODE, LOCATION, ENDPOINT, PROTOCOL. Parallel execution is multi-intent fan-out (`__fan_out__`, handleFanOut). The article says so and documents delegate-specific behavior.

## Source files inspected

- apps/runtime/src/services/execution/routing-executor.ts (handleFanOut, handleAsyncFanOut entry, deduplicateFanOutTasks, formatFanOutToolResult, DEFAULT_MAX_CONCURRENT_FAN_OUT_CALLS, fanOutSemaphore, ExecutionPlan parallel, onPartialFailure continue, executeUnit, storeFanOutResultOnThread, adoptChildEscalation)
- apps/runtime/src/services/execution/reasoning-executor.ts (planRoutingToolCalls, parallel_handoffs_to_fan_out, SYSTEM_TOOL_FAN_OUT branch, recursive fan-out guard)
- apps/runtime/src/services/execution/prompt-builder.ts (per-agent delegate_to_ tools; parallelizable false hint on __delegate__)
- apps/runtime/src/services/execution/flow-step-executor.ts (comment: flow mode cannot fan out)
- packages/compiler/src/platform/constants.ts (FAN_OUT_MIN_TASKS 2, FAN_OUT_MAX_TASKS 5)
- packages/core/src/types/agent-based.ts (MultiIntentConfig defaults)
- packages/shared-kernel/src/constants/trace-event-registry.ts (fan_out_* events)
- packages/compiler/src/platform/ir/compiler.ts (__delegate__ tool, role check)
- Existing published article handle-multiple-intents.mdx for defaults of MULTI_INTENT (cross-checked, not used as source for new claims).

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| --- | --- | --- | --- |
| Declarative parallel flag on DELEGATE | no | parseDelegateConfig keys | covered (stated) |
| Supervisor several routing calls converted to fan-out | yes | reasoning-executor parallel_handoffs_to_fan_out | covered |
| Fan-out to delegate-kind targets | yes | handleFanOut resumeKind and admitPlannedRoute routingAction | covered |
| MULTI_INTENT strategy parallel | yes | MultiIntentConfig | covered |
| strategy sequential (dependent) | yes | executeSequentialMultiIntentPlan | covered as variation |
| auto never fans out | yes | existing article, strategy table | covered |
| Classifier path max_intents, confidence | yes | MultiIntentConfig | covered |
| Concurrency cap | yes | DEFAULT_MAX_CONCURRENT_FAN_OUT_CALLS 10, maxConcurrentFanOutCalls | covered |
| Per branch timeout | yes | timeoutMs config or 30000; plan timeout x2 | covered |
| Partial failure continue | yes | onPartialFailure continue; results status | covered |
| Merge/aggregation | yes | formatFanOutToolResult, model synthesis | covered |
| Ordering guarantee | no documented | results pushed by settle order | covered (stated not contract) |
| RETURNS/USE_RESULT/ON_FAILURE in branches | no | no mapDelegateReturns call between lines 23541 and 26100 of routing-executor | covered |
| Dedup of same target | yes | deduplicateFanOutTasks | covered |
| Nested fan-out blocked | yes | reasoning-executor guard | covered |
| Concurrent fan-out per session blocked | yes | _activeFanOutSessions | covered |
| Remote targets need async infra | yes | handleFanOut remote partition | covered |
| Flow-driven parallel delegates | no | flow comment, one DO action at a time | covered |
| Tool tasks in fan-out | yes | executeToolTask | gap: not covered, not delegate related |
| FAN_OUT_MIN/MAX_TASKS enforcement | gap | constants imported in prompt-builder but no enforcement found | not stated in article |
| Trace events | yes | fan_out_start, fan_out_child_created, fan_out_task_complete, fan_out_complete, decision parallel_handoffs_to_fan_out | covered |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| --- | --- | --- | --- |
| Runtime behavior verified | handleFanOut read in sections | covered | Not run end to end |
| Required companion resources identified | Specialists defined, tools marked project-local | covered | none |
| Referenced variables have sources | order_id from supervisor GATHER | covered | none |
| Fallback/failure/ambiguity behavior verified | partial failure, refusal, escalation | covered | none |
| Customer verification path defined | trace events and utterance | covered | none |
| Production readiness checklist included | yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| --- | --- | --- | --- | --- | --- |
| Block 1 Care_Supervisor | full-document | validateABL with Refund_Checker and Shipping_Checker | pass | none | kept |
| Block 2 Refund_Checker | full-document | same project | pass | none | kept |
| Block 3 Shipping_Checker | full-document | same project | pass | none | kept |
| Block 4 MULTI_INTENT sequential | section-snippet | substituted into Care_Supervisor full file | pass | none | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --- | --- | --- | --- |
| Grounding in the code | 4 | Stated absent features explicitly | 4 |
| Depth of conceptual explanation | 4 | Comparison table single vs parallel | 5 |
| Readability and usability | 4 | Short sections | 4 |
| Coverage of examples | 4 | Added sequential variation | 4 |
| Search and discovery quality | 4 | Title and troubleshooting terms | 4 |
| Completeness of workflow and failure modes | 4 | Partial failure, escalation, timeout | 4 |
| Customer/partner self-service readiness | 4 | No repo paths | 4 |
| Scenario comprehensiveness | 4 | Remote, flow, nested | 4 |
| Article completeness | 5 | Template sections present | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| --- | --- | --- |
| Inspected all layers? | pass | Listed above |
| Neighbor constructs searched (fan_out, __delegate__, Promise.allSettled, multi-intent)? | pass | Yes |
| Every authoring style? | pass | Only MULTI_INTENT plus supervisor model calls |
| Optional vs required separated? | pass | strategy parallel opt-in |
| Reasoning guidance explained? | pass | Supervisor model chooses calls |
| Another way to go parallel? | pass | Tool tasks in fan-out exist; out of scope |
| Evidence for "not all scenarios"? | pass | Variant map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| --- | --- | --- | --- |
| Senior platform architect | ready | Honest scope, limits, partial failure | Engineering to confirm RETURNS not applied in branches |
| Senior content writer | ready | Clear comparison table | none |
| Product manager/customer enablement | ready | Stops the search for a PARALLEL key | none |

## Doc bugs and discrepancies for human review

1. The topic title implies a parallel DELEGATE feature. None exists. Consider retitling to "How to run multiple specialists in parallel with multi-intent fan-out".
2. FAN_OUT_MIN_TASKS (2) and FAN_OUT_MAX_TASKS (5) are defined but no enforcement was found. The existing handle-multiple-intents article gives max_intents instead.
3. __delegate__ tool hint says parallelizable false, while multiple delegate_to_ calls in one turn can still fan out.

## Known gaps and uncertainty

- Not run end to end. Whether a delegate-kind branch applies RETURNS is inferred from absence of mapDelegateReturns in the fan-out code. Confirm with engineering.
- Per-branch timeout read as ctx.config.timeoutMs (30s default); production override path not traced.
- Result order not verified.
