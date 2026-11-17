# Evidence: minimize-agent-context

**Date:** 2026-11-08
**Topic:** 5.5 - How to minimize context for privacy and compliance
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/minimize-agent-context-2026-11-08-draft.md`
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
| History control | yes | See 5.3 | covered |
| Field control through PASS and authorized prompt keys | yes | types.ts 626-651; prompt-builder 3205 | covered |
| Automatic keys `conversationSummary`, `user`, `gender`, `location` | yes | types.ts 609 | covered |
| Other non-gathered session values copied into target data | yes | `extractSessionMetadata` 3641 | covered |
| Memory grants as an exposure | yes | See 5.6 | covered (link) |
| `SENSITIVE: true` on GATHER and sensitive child exclusion | yes | Parser 3050; types.ts 4762, 5075 | covered |
| `MODEL_VISIBLE: false` on session memory | yes | Parser 7835-7940; model-context.ts 300-360; harness p/ clean | covered |
| PII tokenization at the thread boundary | yes | types.ts 5334; public PII reference | covered (conditional on project setting) |
| Model-supplied read-only context dropped | yes | routing-executor 3560-3590 | covered |
| Remote targets | yes | See 5.8 | covered (link) |
| Delegate receives no messages | yes | 20549 | covered |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading | covered | Run live traces with PII protection on and off. |
| Required companion resources identified | Router and specialist defined | covered | none |
| Referenced variables have sources | `internal_risk_score` set in ON_START (stand-in, marked) | covered | none |
| Fallback/failure/ambiguity behavior verified | Defaults stated | covered | none |
| Customer verification path defined | Steps 1-7 | covered | Step 7 depends on project PII settings. |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Payments_Hub) | full-document | parse + compile with companion (p/) | pass | none | kept. Earlier versions warned `W801` and `UNUSED_REQUIRED_GATHER_FIELD`. Fixed with an `ON_START` stand-in and a COMPLETE condition |
| Block 2 (Card_Dispute_Agent) | full-document | parse + compile | pass | none | kept |
| Block 3 (summary_only variation) | section-snippet | swapped into hub | pass | none | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Separated what crosses the boundary into four rows | 4 |
| Depth of conceptual explanation | 4 | Kept | 4 |
| Readability and usability | 4 | Kept | 4 |
| Coverage of examples | 4 | Added model-visible and sensitive-field example | 4 |
| Search and discovery quality | 4 | Kept | 4 |
| Completeness of workflow and failure modes | 4 | Kept | 4 |
| Customer/partner self-service readiness | 4 | Kept | 4 |
| Scenario comprehensiveness | 3 | Added automatic keys and PII tokenization conditions | 4 |
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
| Senior platform architect | ready | Controls map to code. Conditional PII claim is worded as conditional. | Test PII behavior live. |
| Senior content writer | ready | Boundary framing is clear. | none |
| Product manager/customer enablement | ready | Checklist suits compliance review. | none |

## Known gaps and notes

- The statement that other copied values do not reach the prompt unless authorized rests on `collectActivationPromptAuthorizedKeys` and `buildAuthorizedPromptValues`. The final prompt assembly was not run.
- The article does not claim compliance certification.

Doc bug for human review: none.
