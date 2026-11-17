# Evidence: preserve-context-for-remote-agents

**Date:** 2026-11-08
**Topic:** 5.8 - How to preserve context when calling remote agents
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/preserve-context-for-remote-agents-2026-11-08-draft.md`
**Release:** `hotfix_Artemis_1.9.2` (code repo read-only, branch head `cf1f637c7ed`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

`validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts` bundled with esbuild into `scratchpad/h/validate.mjs`. Workspace packages resolve to `packages/*/src`. The bundle needed three local patches: the zod version pin check disabled (installed zod is 4.3.6), `@agent-platform/database` and `mongoose` stubbed, and `@marcbachmann/cel-js`, `intl-messageformat`, `chevrotain`, `fast-xml-parser`, `js-yaml`, `re2js`, `sanitize-html`, `saxes`, and `uuid` installed in the scratch folder. Command: `node validate.mjs <file>...` from `scratchpad/h`. The runtime was not started. All runtime claims come from source reading. Article ABL blocks were re-extracted from the draft by `scratchpad/h/check.py` and revalidated.

## Source files inspected

Line ranges are approximate. Re-check before citing a single line.

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts (1420-1460, 8330-8400, 8760-8830, 9015-9390)` | HANDOFF key sets, `CONTEXT:` block (`pass`, `set`, `summary`, `grant_memory` E322, `memory_grants`, `history`), shorthand `PASS`/`SUMMARY`/`HISTORY`, `ON_RETURN` block, `MAP`, `SET`, remote keys (`LOCATION`, `ENDPOINT`, `PROTOCOL`, `ASYNC`, `TIMEOUT`), DELEGATE `INPUT`/`PASS`, `RETURNS`, `MEMORY_GRANTS`, `SUMMARY` as `PURPOSE`, `parseHandoffHistoryBlock` (E330, E331). |
| `packages/core/src/types/agent-based.ts (1895-2010)` | `HandoffHistoryMode`, `HandoffContext`, `HandoffOnReturnConfig`, `HandoffConfig`, `DelegateConfig`. |
| `packages/compiler/src/platform/ir/compiler.ts (3905-3990, 4021, 4786-4830)` | `resolvePassFields` (type and description from session memory), `compileOnReturnConfig`, `compileHistoryStrategy` (positive count only, `last_N` shorthand). |
| `packages/compiler/src/platform/ir/validate-coordination-config.ts (300-420)` | `HANDOFF_SUMMARY_ONLY_WITHOUT_SUMMARY`, memory grant validation, retired `grant_memory` shorthand. |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts (315-480), validate-field-refs.ts (495-520), validate-ir.ts (1575-1610, 1950-2020)` | `UNKNOWN_HANDOFF_RETURN_FIELD`, `UNKNOWN_DELEGATE_RETURN_FIELD`, delegate gather/input checks, `INERT_PERSISTENT_MEMORY_DECLARATION`, remote targets skipped. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts (3-4)` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`, `DEFAULT_AUTO_HANDOFF_HISTORY_FALLBACK_LAST_N = 5`. |
| `apps/runtime/src/services/execution/routing-executor.ts (1620-1740, 2455, 2600-2790, 3123-3180, 3444-3860, 5050-5160, 6784-7095, 12174-12720, 13250-13480, 16434-16760, 20500-20640, 28080-28260, 28704-28800)` | Seed of passed fields, SET at route time, context assembly order, memory grant resolution, remote handoff projection, A2A mode resolution, history resolution, return handler and `mappedFields`, delegate `INPUT` and `RETURNS`, waiting-thread resume. |
| `apps/runtime/src/services/execution/types.ts (590-660, 4762, 4940-5130, 5334)` | Authorized prompt keys, `AUTHORED_HANDOFF_SUMMARY_KEY`, continuity keys, sensitive-gather exclusion, `buildHandoffConversationHistory`, `tokenizeThreadContextForStorage`. |
| `apps/runtime/src/services/execution/tool-activity-history.ts (941-965)` | `takeRecentToolActivityHistory`: atomic units, never splits a tool pair. |
| `apps/runtime/src/services/execution/memory-scope-runtime.ts (375-449, 600-770)` | `granted_memory` namespace, read-only enforcement. |
| `apps/runtime/src/services/execution/prompt-builder.ts (3205-3235, 5690-5760)` | Prompt authorization of activation keys, typed `PASS` tool properties. |
| `apps/runtime/src/services/execution/a2a-invocation-envelope.ts (637-664)` | `a2a_invocation_envelope` trace summary (`contextKeys`). |
| `examples/banknexus/agents/*.abl, examples/retirement-service-demo/agents/retirement_supervisor.agent.abl` | Shipped `memory_grants` and `execution_tree` usage. |
| `packages/core/src/__tests__/parser-handoff-enhanced.test.ts (725-760), delegate-memory-grants-matrix.test.ts` | Remote handoff parse; delegate `MEMORY_GRANTS`. |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx (public reference cross-check)` | Cross-check only. No claim rests on it. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Remote handoff authoring (`LOCATION`, `ENDPOINT`, `PROTOCOL`) | yes | Parser 9122-9140; test 725-760; harness x/ clean | covered |
| Bounded context projection | yes | Runtime 12643-12690, `projectHandoffContext` 3520 | covered |
| Control paths `handoff_from`, `intent` | yes | 12690 | covered |
| History selection for remote | yes | 16480-16495 | covered |
| Message and envelope layout | yes | 16690-16745 | covered |
| `a2a_invocation_envelope` `contextKeys` | yes | a2a-invocation-envelope.ts 637 | covered |
| Provenance and grants in envelope | yes | 12644-12690 | covered |
| `ASYNC: true` plus `TIMEOUT` seconds | yes | Parser 9190; routing-executor 17873; harness x/async clean | covered |
| Async prerequisites fail the handoff | yes | `resolveCurrentA2AHandoffMode` 3135-3170 | covered |
| `ASYNC_TIMEOUT` key | no (text ABL) | Not in the text parser. Harness: `ASYNC_TIMEOUT: 3600` compiles clean and is ignored, so the wait defaults to 300 s (routing-executor 17871). YAML parser reads `async_timeout` (yaml-parser 1537) | resolved: reference page fixed |
| Permanent remote handoff | yes | `returnExpected` branch 16520 | covered |
| Remote `DELEGATE` | no at run time | Remote registry entries have `ir: null` (session-agent-registry 99); `executeDelegate` refuses a target with no IR and runs `handleDelegateFailure` (20536). Resolved: confirmed unsupported | covered (stated) |
| Remote `MAP` population | yes (resolved) | A2A data part `returnValues` (27896); `finalizeRemoteReturn` (16387); test `routing-remote-handoff.test.ts` 1395-1470 and the `it.each` on task artifact data and direct message data | covered |
| Credential enrichment from registry | yes | 11040 `enrichWithRegistryAuth` | covered (one clause) |
| SSRF check | yes | 12216-12232 `remote_target_unsafe` | covered |
| Outbound redaction of history | no | `applyInputPIIRedactionToMessagesAsync` runs only in reasoning-executor model calls (11659, 14980). `handleRemoteHandoff` copies `conversationHistory` unredacted. Resolved: confirmed not redacted | covered |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading | covered | Test against a partner sandbox. |
| Required companion resources identified | Partner endpoint marked project-local | covered | none |
| Referenced variables have sources | Variable sources list | covered | none |
| Fallback/failure/ambiguity behavior verified | `ON_FAILURE`, async prerequisites, unsafe target | covered | none |
| Customer verification path defined | Steps 1-7 | covered | Step 6 needs partner logs. |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Intake_Hub) | full-document | parse + compile (x/) | pass | none | kept. The remote target needs no companion file |
| Block 2 (HISTORY none remote) | section-snippet | swapped into hub | pass | none | kept |
| Block 3 (ASYNC lines) | illustrative-fragment | validated inside x/async | pass | none | labeled as a fragment |
| Block 4 (MAP from remote reply) | section-snippet | x/map.agent.abl | pass | none | kept |
| Block 5 (partner data part) | illustrative-fragment | JSON, not ABL | n/a | n/a | labeled as the partner's side |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Read the remote branch and the async resolver, not only the parser | 4 |
| Depth of conceptual explanation | 4 | Kept | 4 |
| Readability and usability | 4 | Kept | 4 |
| Coverage of examples | 4 | Added permanent, async, and grant variants | 4 |
| Search and discovery quality | 4 | Kept | 4 |
| Completeness of workflow and failure modes | 4 | Added async failure and unsafe target | 4 |
| Customer/partner self-service readiness | 4 | Kept | 4 |
| Scenario comprehensiveness | 3 | Added delegate and MAP limits | 4 |
| Article completeness | 4 | Kept | 4 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | See source table. Tests and shipped examples listed. No runtime test was executed. |
| Did I search synonyms and neighboring constructs? | pass | Searched `PASS`, `INPUT`, `CONTEXT`, `SUMMARY`, `HISTORY`, `memory_grants`, `granted_memory`, `ON_RETURN`, `RETURNS`, `last_n`, `summary_only`, `a2a`, `remote`. |
| Did I identify every supported authoring style, shorthand, alias, default, and fallback? | pass | Shorthand and `CONTEXT` forms, `last_N` shorthand, block `mode`/`count`, `EXPECT_RETURN` alias, retired `grant_memory`, defaults and fallbacks recorded in the variant map. |
| Did I distinguish optional helpers from required configuration? | pass | The article states which keys are optional and what the default is. |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Alternatives are stated in the concept section and variations. |
| Could a customer build the scenario another supported way the article omits? | pass | Delegate and remote alternatives are covered or linked. |
| If asked 'are you not considering all scenarios?', what evidence would I show? | pass | The variant map above, with a code or harness reference per row. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Remote branch details match code. Gaps stated as limits. | Test with a real A2A partner. |
| Senior content writer | ready | Controlled-export framing is clear. | none |
| Product manager/customer enablement | ready | Checklist covers agreements and credentials. | none |

## Known gaps and notes

- Doc bug to escalate: `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` shows `ASYNC_TIMEOUT: 3600`. The 1.9.2 parser has no such key. It reads `TIMEOUT`.
- Outbound history redaction was not found. Escalate to engineering if redaction is expected.
- Remote delegate is unsupported. Remote MAP works with a `returnValues` data part. An earlier draft of this article and of 5.7 said otherwise. Both are corrected.

Doc bug for human review: see first note.
