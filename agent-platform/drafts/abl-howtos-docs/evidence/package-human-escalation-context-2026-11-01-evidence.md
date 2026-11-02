# Evidence: package-human-escalation-context

**Date:** 2026-11-01
**Article draft:** `agent-platform/drafts/abl-howtos-docs/reviews/package-human-escalation-context-2026-11-01-draft.md`
**Topic:** 4.9 - How to package context for human escalation
**Workflow:** Article Creation Workflow, new topic, against `release_Artemis_1.9.0` (read-only)
**Verdict:** review_pending (all gates pass)

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/types/agent-based.ts` (1954-2035) | `EscalateTrigger`, `EscalateContextItem` (name, template, include), `EscalateRouting`, `EscalateRoutingEntry`, `EscalateConfig`. |
| `packages/core/src/parser/agent-based-parser.ts` (`parseEscalate` ~9347, `ESCALATE_CONTEXT_KEY_VALUE_ITEM`, `parseOnHumanComplete` 9920) | Text form: a `context_for_human` item is `{ name }` only. A key/value item emits `W357`. Routing as map or list. |
| `packages/core/src/parser/yaml-parser.ts` (`parseEscalateContext` 1766) | YAML form reads `name`, `template`, `include`. |
| `packages/core/src/diagnostics/registry.data.ts` | `W350`-`W359`, `E350`, routing diagnostics. |
| `packages/compiler/src/platform/ir/compiler.ts` (3956-3985, 2383) | Lowering: `context_for_human: contextForHuman.map(c => c.name)` (template and include are dropped). `__escalate__` tool exists only with at least one trigger. Tool parameters are `reason` and `priority`. |
| `packages/compiler/src/platform/ir/schema.ts` (3313-3450) | `EscalationConfig`, `EscalationRoutingCommon` (`post_agent: 'return' | 'end'`), `routing_entries`. |
| `packages/compiler/src/platform/ir/escalation-routing.ts`, `escalation-routing-validation.ts` | One normalization point for routing entries. Codes `ESCALATE_ROUTING_*` (default not last, multiple defaults, digital entry needs connection, voice entry needs voice, `WHEN` prompt-only, `user_info` not map, non-scalar, sensitive reference, copy without `user_info`). |
| `packages/compiler/src/platform/constants.ts` (400-403) | Reason length 5 to 500. |
| `apps/runtime/src/services/execution/routing-executor.ts` (`handleEscalate` 21357, `handleEscalateOnce` 21419-23350, `filterEscalationContext` 27132, `buildEscalationTransferMetadata` 1087, `resolveEscalationQueueTemplate` 1075, `normalizeEscalationTriggerPriority` 7375, `hasUnmatchedDeterministicEscalationTrigger` 27103, trigger path 21285) | Full escalation sequence. Context goes to HumanTask, `escalation` trace, ITSM call. Not in `adapter.execute` payload. History filter. Metadata merge and reserved keys. Failure paths. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (8916) | Flow step ESCALATE: default reason, `ESCALATION_NOT_CONFIGURED` only sets flag. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (29556) | Model `__escalate__` call path. |
| `apps/runtime/src/services/execution/escalation-routing-select.ts` | First-match routing entry, `system.*` context, fail closed. |
| `apps/runtime/src/services/agent-transfer/transfer-routing-context.ts` | Contact card, identity hints, interaction context, session context snapshot. |
| `apps/runtime/src/services/agent-transfer/handoff-context-assembly.ts`, `packages/agent-transfer/src/handoff-context/{builder,limits,reserved-keys,types}.ts` | `user_info` opt-in (Kore adapter only), limits (30 keys, 64 B key, 384 B value, 16384 B total), reserved keys, `[protected]` for vault tokens, PII suspected scan, drop reasons, `customData.artemis`. |
| `packages/agent-transfer/src/types.ts` (`TransferPayload`), `adapters/*` | Payload fields. Adapters present: kore (SmartAssist), genesys, five9, salesforce, servicenow, amazon-connect. All receive `conversationHistory`. |
| `packages/agent-transfer/src/tools/transfer-to-agent.ts`, `apps/runtime/src/services/execution/transfer-tool-executor.ts` | Separate `transfer_to_agent` project tool path. Not part of ESCALATE. Recorded as a gap. |
| `apps/runtime/src/services/escalation/resolution-handler.ts`, `apps/runtime/src/services/escalation-bridge.ts` | HumanTask lifecycle. |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | Read for trace vocabulary only. |
| `examples/device-care-support/agents/live_agent.agent.abl`, `examples/banknexus/agents/fund_transfer.agent.abl`, `examples/travel/agents/refund_processor.agent.abl` | Real usage of triggers, `context_for_human`, `on_human_complete`. |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` (ESCALATE) | Allowed secondary source. Cross-checked. Two claims in it conflict with code (see discrepancies). |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Deterministic trigger (`WHEN` condition) starts escalation with `REASON`, `PRIORITY`, `TAGS`, `SET` | yes | `routing-executor.ts` 21285-21345 (`source: deterministic_trigger`) | covered (minimal example). `TAGS` shown. `SET` out of scope: it assigns session values and does not shape the package. |
| Quoted-sentence trigger, model calls `__escalate__` with reason and priority | yes | `compiler.ts` 2383, `reasoning-executor.ts` 29556, `handleEscalateOnce` reason and priority validation | covered (variation) |
| Model escalation rejected when a code-evaluable trigger exists and none matches | yes | `hasUnmatchedDeterministicEscalationTrigger`, `ESCALATION_TRIGGER_NOT_MATCHED` | covered (variation and troubleshooting) |
| Flow step `THEN: ESCALATE` | yes | `flow-step-executor.ts` 8916, default reason string, `ESCALATION_NOT_CONFIGURED` flag-only path | covered (variation) |
| `ON_FAILURE: ESCALATE` on `HANDOFF`, `ON_FAIL: escalate` on `DELEGATE` | yes, flag only | `handleHandoffFailure` 29165 and `handleDelegateFailure` 28876 set `isEscalated` and reason. No call to `handleEscalate`. | covered (common mistake) |
| Reason length 5 to 500, shorten over 500, reject under 5 | yes | `handleEscalateOnce` | covered |
| Priority words and numeric mapping (<=0 critical, 1 high, 2 medium, 3+ low), default medium, `W351` | yes | `normalizeEscalationTriggerPriority`, `parseEscalationPriorityInput` | covered |
| `context_for_human` plain names | yes | parser, compiler 3968, `filterEscalationContext` | covered |
| `context_for_human` structured `NAME`/`TEMPLATE`/`INCLUDE` | no (text form), partial (YAML form parses, compiler drops all but name) | `neg_ctx.abl` gives `W357`. Compiler 3968. | covered as a mistake. Reference doc conflicts. |
| `conversation_history` / `conversation_summary` as special names | no | No code reads them. `filterEscalationContext` only looks up `session.data.values`. | covered (rule and mistake) |
| Empty `context_for_human` fallback (agent name, turn count) | yes | `filterEscalationContext` | covered |
| Missing listed variable trace | yes | `escalation_context_missing` event | covered |
| Context destinations: HumanTask context, `escalation` trace, `CONNECTOR_ACTION` input; not desk payload | yes | `escalationContext` used at 21942, 22014, 23279 only | covered (concept table) |
| Conversation history sent to desk, internal messages filtered, role `assistant` becomes `agent` | yes | `adapter.execute` call 23100-23125 | covered |
| Per-provider history display | yes, provider-owned | adapters (kore history strategy, others) | covered by one sentence ("each desk integration decides"). Per-provider detail out of scope: provider-specific. |
| Contact card and context snapshot from session | yes | `transfer-routing-context.ts` | covered (table) |
| `routing` single map: `connection`, `queue`, `skills`, `priority`, `post_agent` | yes | `compileEscalationRouting`, schema, `handleEscalateOnce` | covered |
| `routing` list with `when`, `id`, first match, fail closed, one default last | yes | `escalation-routing-select.ts`, validation codes, `routingListNoMatch` | covered (variation) |
| `routing.metadata` templates, reserved keys, SmartAssist system keys skipped | yes | `buildEscalationTransferMetadata`, `resolveHandoffMetadataTemplates` | covered |
| `routing.queue` template | yes | `resolveEscalationQueueTemplate` | covered |
| `routing.user_info`, `user_info_in_custom_data` (SmartAssist only) | yes | `isHandoffContextOptedIn`, adapter name `kore` check, builder limits | covered (variation) |
| `named_agents`, `agent_matching_conditions`, `sub_type`, `provider_config`, `flow_policy` | yes, provider-defined | `handleEscalateOnce` normalizers | covered by pointer to the reference. Shape is integration-defined. |
| Voice: `routing.voice` (sip, pstn, custom), SAVG, SIP headers | yes | `handleEscalateOnce` voice branches, `ESCALATION_VOICE_NOT_CONFIGURED` | covered by one variation plus pointer. Details out of scope: voice transfer is a separate topic. |
| `CONNECTOR_ACTION` ITSM call | yes | routing-executor 23240-23350: fire and forget, 30 s, ticket id and URL stored | covered (variation) |
| PII: vault token copied in context and metadata, `[protected]` in `user_info`, `W` sensitive reference warning | yes | `tokenize-for-storage.ts`, `handoff-context-assembly.ts`, `ESCALATE_ROUTING_USER_INFO_SENSITIVE_REFERENCE` (harness `neg_sensitive.abl`) | covered |
| HumanTask created with 24 hour due date | yes | routing-executor 21915-21960 | covered (concept) |
| Failure behavior: bad connection or adapter missing still returns success without transfer; adapter failure resets flags and cancels task | yes | routing-executor 22790-22850, 23140-23195 | covered (checklist, troubleshooting) |
| Duplicate escalation guard | yes | `ESCALATION_ALREADY_IN_PROGRESS` | covered (troubleshooting) |
| `transfer_to_agent` project tool | yes, separate surface | `transfer-tool-executor.ts` | gap: no ABL authoring surface confirmed. Not covered. |
| `escalation_recheck_after_tools` setting | yes | schema 1730 | out of scope: it controls when triggers re-run, owned by 4.3 |
| Redacted summary or LLM summary for chat | no for ESCALATE path | `conversationSummaryForAgentTransfer` is not set in the ESCALATE `adapter.execute` call | covered by omission. The article states history only. |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `handleEscalateOnce` read end to end. Adapter payload read. Transfer envelope read. | covered | Per-desk rendering not verifiable from this repo. |
| Required companion resources identified | Every example uses `support_desk` or a named connection as a stated project-local assumption. `create_servicenow_incident` stated as assumption. | covered | None. |
| Referenced variables have sources | Every variable in `context_for_human`, `metadata`, `user_info` comes from a `GATHER` field. Validated with zero warnings. | covered | None. |
| Fallback/failure/ambiguity behavior verified | No match in a routing list, bad connection, desk rejection, voice not configured, in-flight duplicate, invalid reason or priority. | covered | `escalation_routing_no_match` text covered. |
| Customer verification path defined | Nine verification steps using trace events `escalation`, `escalation_triggered`, `agent_transfer_initiated`, `escalation_routing_check`, `handoff_context_*`. | covered | None. |
| Production readiness checklist included | Eight items. | covered | None. |

## Example validation

Harness: `node .../scratchpad/hr/validate.mjs <files>` run from `/tmp` (the helper `v.sh` wraps it). The path named in the brief (`harness/validate.mjs`) does not exist. `hr/validate.mjs` is the built harness. Scratch folder: `scratchpad/human-escalation-context/`.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (`Billing_Dispute_Agent`) | full-document | `v.sh human-escalation-context min` | pass | none | kept |
| Block 2 (`Support_Dispute_Agent`, routing list) | full-document | `routes` | pass | none | kept |
| Block 3 (`Claims_Agent`, `user_info`) | full-document | `smart` | pass | none (first draft warned W801 for unsourced variables. Fixed with `GATHER`.) | kept |
| Block 4 (`Fraud_Review_Agent`, flow step) | full-document | `flow` | pass | none (first draft misused flow syntax. Rewritten with `ON_RESULT`.) | kept |
| Block 5 (`Policy_Agent`, quoted trigger) | full-document | `model` | pass | none (first draft warned `UNUSED_REQUIRED_GATHER_FIELD`. Field made optional.) | kept |
| Block 6 (`Incident_Agent`, `CONNECTOR_ACTION`) | full-document | `itsm` | pass | none | kept |
| Negative: sensitive field in `user_info` | n/a (evidence only) | `neg_sensitive` | warning `ESCALATE_ROUTING_USER_INFO_SENSITIVE_REFERENCE` | as expected | confirms article claim |
| Negative: `NAME:` context item | n/a | `neg_ctx` | warning `W357` | as expected | confirms article claim |
| Negative: `PRIORITY: urgent` | n/a | `neg_nopriority` | warning `W351` | as expected | confirms article claim |

Block text in the draft matches the validated scratch files byte for byte (checked with a script).

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Removed claims that `context_for_human` reaches the desk after finding `escalationContext` is not in the adapter payload. Added the failure-path facts. | 5 |
| Depth of conceptual explanation | 4 | Added the source-to-destination table before any ABL. | 5 |
| Readability and usability | 4 | Short sentences. Tables for lookups. Answer first. | 4 |
| Coverage of examples | 4 | Six validated full documents. Negative cases proved by harness. | 5 |
| Search and discovery quality | 4 | Titles and symptoms use `context_for_human`, `routing.metadata`, `user_info`, `[HUMAN AGENT]`, error codes. | 5 |
| Completeness of workflow and failure modes | 4 | Added no-connection, bad connection, desk rejection, routing no match, in-flight duplicate. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. Project-local assumptions stated. | 4 |
| Scenario comprehensiveness | 4 | Every `yes` row covered or scoped out with a reason. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, types, compiler, runtime, tests, and examples? | pass | See source list. Unit tests were not run. Behavior was read from source and probed with the harness. |
| Did I search synonyms and neighboring constructs? | pass | Searched `ESCALATE`, `escalat`, `context_for_human`, `post_agent`, `on_human_complete`, `transfer_to_agent`, `handoff context`, `HumanTask`. |
| Did I identify every authoring style and legacy alias? | pass | Text form vs YAML form for context items. Map vs list routing. camelCase aliases noted in the reference. |
| Did I separate optional helpers from required config? | pass | Article says routing is required for a person. Everything else is optional. |
| Did I explain how the model uses free-form guidance? | pass | Quoted-sentence trigger variation. |
| Did I avoid making one pattern sound like the only one? | pass | Four ways to start an escalation. Two routing shapes. Three delivery paths. |
| Could a customer build this another way the article misses? | fix-needed, then accepted | The `transfer_to_agent` tool. Recorded as a gap. Not confirmed as an ABL authoring surface. |
| Exact evidence if asked "are you not considering all scenarios"? | pass | Variant map above with line references. |

**Coverage verdict:** pass (one recorded gap)

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Destination table matches the code. Failure paths that silently skip the transfer are stated. | None. |
| Senior content writer | ready | Answer-first opening. Concept before ABL. Tables for lookups. No dashes. | None. |
| Product manager/customer enablement | ready | Verification steps use trace events a partner can find. Checklist is actionable. | None. |

## Doc bugs and discrepancies for human review

1. The ESCALATE reference shows `context_for_human` items `NAME`, `TEMPLATE`, `INCLUDE` and the name `conversation_history`. In `.abl` text form the first gives `W357` and the compiler keeps only the item name. No code gives `conversation_history` a meaning.
2. The reference says `context_for_human` goes in the "escalation package" the human sees at the desk. The chat transfer payload does not carry it. It reaches the task record, the trace, and the connector action.
3. `ON_FAILURE: ESCALATE` (handoff) and `ON_FAIL: escalate` (delegate) only set the escalated flag. The reference describes "Trigger human escalation."
4. Several failure paths return success with no transfer (connection not found, adapter not registered, auth init failure). The customer still sees the escalation message.
5. The task brief names `harness/validate.mjs`. The working harness is `hr/validate.mjs`.

## Uncertainty

- How each desk renders history and metadata.
- Whether the ITSM connector action receives raw or tokenized PII. The code passes the stored value.
- Voice transfer details were not traced end to end.
