# Evidence: map-child-agent-outputs

**Date:** 2026-11-08
**Topic:** 5.7 - How to map child-agent outputs back to parent-agent variables
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/map-child-agent-outputs-2026-11-08-draft.md`
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
| Handoff `ON_RETURN.MAP` child to parent | yes | Parser 9190-9215; harness r/ clean | covered |
| `ON_RETURN.SET` after MAP | yes | Parser 9218; harness r/ clean | covered |
| `action: continue` and `resume_intent` | yes | Compiler `compileOnReturnConfig`; routing-executor 6784-7095 | covered |
| Named handler | yes | Compiler `compileNamedReturnHandlers` | covered (link) |
| `UNKNOWN_HANDOFF_RETURN_FIELD` | yes | Harness bad map | covered |
| `HANDOFF_ON_RETURN_WITHOUT_RETURN` | yes | Harness NoReturn | covered |
| Non-writable target blocks all effects | yes | Existing published article evidence; `memory_error` 6698 | covered (link) |
| Empty value preserves parent value (`preservedMappedFields`) | yes | 6784-6804 | covered in debug article |
| Delegate `RETURNS` map form and schema form | yes | 28704-28800; published delegate article | covered (map form), link for schema form |
| Delegate `USE_RESULT` | yes | Parser 8814 | covered |
| Delegate missing returns fail | yes | Published delegate evidence | covered |
| Remote children | yes (resolved) | `handleRemoteHandoff` calls `finalizeRemoteReturn` with `responseOutput.returnValues` (routing-executor 16904, 17054); `extractA2AResponseOutput` reads a data part `returnValues` (27896-27960); `applyHandoffOnReturnEffects` MAP reads `options.returnValues[childKey]` (6783). Test `routing-remote-handoff.test.ts` 1395-1470 pins MAP and SET with `result.<key>` | covered (link to 5.8) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading and prior evidence | covered | Run live. |
| Required companion resources identified | Both agents defined | covered | none |
| Referenced variables have sources | Variable sources list | covered | none |
| Fallback/failure/ambiguity behavior verified | Missing field, unwritable target, no mapped delegate field | covered | none |
| Customer verification path defined | Steps 1-7 | covered | none |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Refill_Request_Agent) | full-document | parse + compile with companion (r/) | pass | none | kept. Earlier version warned `W801`. Fixed by mapping a gathered child field |
| Block 2 (Delivery_Agent) | full-document | parse + compile | pass | none | kept |
| Block 3 (DELEGATE RETURNS) | section-snippet | order-desk plus Refund_Checker | pass | none | kept |
| Block 4 (multi-field resume_intent) | illustrative-fragment | not validated alone | n/a | n/a | labeled as a fragment |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Ran the bad-map and no-return cases in the harness | 4 |
| Depth of conceptual explanation | 4 | Kept | 4 |
| Readability and usability | 4 | Kept | 4 |
| Coverage of examples | 4 | Added delegate and multi-field variants | 4 |
| Search and discovery quality | 4 | Kept | 4 |
| Completeness of workflow and failure modes | 4 | Kept | 4 |
| Customer/partner self-service readiness | 4 | Kept | 4 |
| Scenario comprehensiveness | 3 | Added remote gap | 4 |
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
| Senior platform architect | ready | Overlap with the published returnable and delegate articles is by link, not duplication. | none |
| Senior content writer | ready | Side-by-side table helps. | none |
| Product manager/customer enablement | ready | Clear choice guidance. | none |

## Known gaps and notes

- Resolved: remote MAP works through the A2A `returnValues` data part. An earlier draft said not to rely on it. That was wrong.
- The `ASYNC_TIMEOUT` reference error is resolved. See the 5.8 evidence.

Doc bug for human review: none for this topic.
