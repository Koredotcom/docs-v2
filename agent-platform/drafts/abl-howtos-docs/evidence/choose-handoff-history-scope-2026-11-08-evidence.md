# Evidence: choose-handoff-history-scope

**Date:** 2026-11-08
**Topic:** 5.3 - How to pass full, recent, or no conversation history
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/choose-handoff-history-scope-2026-11-08-draft.md`
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
| `HISTORY: full` | yes | Harness h3 clean; runtime 13451 | covered |
| `HISTORY: none` | yes | Harness h3 clean | covered |
| `HISTORY: last_N` shorthand | yes | `compileHistoryStrategy` 4813-4830; harness H_ctx_last, c3 | covered |
| Block `mode: last_n` plus `count` | yes | Parser `parseHandoffHistoryBlock`; harness h3 | covered |
| `last_0` | yes (empty window) | Compiler returns `{last_n: 0}`; `takeRecentToolActivityHistory` returns [] | covered |
| `mode: last_n` without count | yes (error E331) | Harness H_block_nocount | covered |
| Bad block mode | yes (error E330) | Harness H_block_bad | covered |
| Bad one-line value | yes (silent fallback to full) | Harness c3 `HISTORY: recent` clean; compiler returns undefined | covered |
| `last_n` one-line without count, or `count: 0` | yes (silent fallback to full) | Harness H_lastn_scalar, H_block_zero clean; compiler 4803 | covered |
| Case and quote tolerance | yes | Harness H_upper, H_quoted clean | covered |
| `CONTEXT.history` form | yes | Parser 9072; harness H_ctx_last | covered |
| Count in messages; atomic tool units | yes | `tool-activity-history.ts` 941 | covered |
| `full` adds promoted descendant customer turns; excludes sensitive-gather children | yes | `buildHandoffConversationHistory` 5035 | covered |
| Waiting child resume keeps own history | yes | Runtime 13396-13440 | covered |
| Return projection follows strategy | yes | types.ts 4973-5005 | covered |
| Remote targets | yes | Runtime 16480-16495 | covered (link to 5.8) |
| Project-level default | gap | `coordination_defaults` has no ABL surface found | one clause |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading 13396-13480, 4940-5130 | covered | Run a live trace. |
| Required companion resources identified | Router and three specialists defined | covered | none |
| Referenced variables have sources | Variable sources list | covered | none |
| Fallback/failure/ambiguity behavior verified | Compiler fallback table from harness | covered | none |
| Customer verification path defined | Behavioral questions plus first model call in trace | covered | No trace field reports copied message count. The article uses behavior and the model call. |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Retail_Hub) | full-document | parse + compile with companions | pass | none | kept |
| Blocks 2-4 (specialists) | full-document | parse + compile | pass | none | kept |
| Block 5 (CONTEXT history last_3) | section-snippet | swapped into hub | pass | none | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Added fallback table from harness, not only parser reading | 4 |
| Depth of conceptual explanation | 4 | Kept | 4 |
| Readability and usability | 4 | Kept | 4 |
| Coverage of examples | 4 | Added CONTEXT form and summary pairing | 4 |
| Search and discovery quality | 4 | Kept | 4 |
| Completeness of workflow and failure modes | 3 | Added waiting-child and return effects | 4 |
| Customer/partner self-service readiness | 4 | Kept | 4 |
| Scenario comprehensiveness | 3 | Added edge values and promoted-turn behavior | 4 |
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
| Senior platform architect | ready | Fallback rows verified by harness. Message-unit counting matches code. | Add a live check that `last_n` windows behave as stated. |
| Senior content writer | ready | Table of compiler results is clear. | none |
| Product manager/customer enablement | ready | Helps pick a window. | none |

## Known gaps and notes

- No trace event reports the number of copied messages. `__handoff_history_length` exists in thread state only.
- `count: 0` falling back to `full` is a compiler behavior (`compileHistoryStrategy`). Resolved: contract tests pin it. `compiler-output-contract.test.ts` (4164-4170, 4312-4319) compiles `{mode: 'last_n', count: 0}` to `history: undefined`, so the route uses the default. The article describes this behavior correctly.

Doc bug for human review: the earlier published routing articles say the default is `full`. This agrees with code. No conflict.
