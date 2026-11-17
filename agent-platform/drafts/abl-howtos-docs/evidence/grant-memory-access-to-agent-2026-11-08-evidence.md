# Evidence: grant-memory-access-to-agent

**Date:** 2026-11-08
**Topic:** 5.6 - How to grant another agent access to memory
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/grant-memory-access-to-agent-2026-11-08-draft.md`
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
| Handoff `CONTEXT.memory_grants` with `path` and `access` | yes | Parser 9064-9071; harness m/ clean | covered |
| Delegate `MEMORY_GRANTS` | yes | Parser 8800; harness m2/orch clean | covered |
| `access` default read | yes | Runtime `resolveConfiguredMemoryGrants` | covered |
| Session memory path grant | yes | Validator 345; harness m2/hub clean | covered |
| User or project persistent path grant | yes | Runtime `resolveCoordinationMemoryGrants` fact stores | covered |
| `execution_tree.` prefix and readwrite | yes | Validator 357-375; harness m2/hub clean | covered |
| Undeclared path error | yes | Harness: `INVALID_HANDOFF_MEMORY_GRANT` | covered |
| Readwrite on non-execution-tree error | yes | Harness: `INVALID_HANDOFF_MEMORY_GRANT_ACCESS` | covered |
| Retired `grant_memory` | yes (E322) | Harness hubl | covered |
| Grant on route without `CONTEXT` block | no | No `MEMORY_GRANTS` case in the route-level switch | covered (mistake) |
| Value lookup order and default value | yes | Runtime 3727-3772 | covered |
| `granted_memory.<path>` namespace and read-only refusal | yes | memory-scope-runtime 375-449, 748-760 | covered |
| PII tokenization of grants | yes | Runtime 3774-3800 | covered |
| Target must declare path | no (resolved) | `cross-agent-memory-policy.test.ts` 163-326: `Auth_Agent` and `Billing_Agent` declare no memory. The readwrite target writes `SET: granted_memory.workflow.auth_token`, and the read target prompt contains `## Granted Memory` with the value. `refreshExecutionTreeProjection` (memory-scope-runtime 125) projects only paths the agent declares, so a bare-path read needs a declaration, but `granted_memory.<path>` does not | covered |
| Remote grants | yes | Runtime 12676-12690 | covered (link in 5.8) |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading | covered | Run live with a stored value. |
| Required companion resources identified | Router and Statement_Agent | covered | none |
| Referenced variables have sources | `workflow.customer_id` set in ON_START (stand-in, marked) | covered | none |
| Fallback/failure/ambiguity behavior verified | Missing value attaches nothing; read-only refusal | covered | none |
| Customer verification path defined | Steps 1-6 | covered | Step 5 is behavioral and untested at runtime. |
| Production readiness checklist included | Yes | covered | none |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (Account_Hub) | full-document | parse + compile with companion | pass | none | kept |
| Block 2 (Statement_Agent) | full-document | parse + compile (m3/) | pass | none | kept. Rewritten without a target declaration, which removed the earlier `INERT_PERSISTENT_MEMORY_DECLARATION` warning |
| Block 3 (user and session grants) | section-snippet | m2/hub with Profile_Agent | pass | same target warning only | kept |
| Block 4 (Verify_Agent) | full-document | parse + compile with readwrite hub (m3/hubw) | pass | none | kept. Added to show `SET: granted_memory.<path>` |
| Block 5 (readwrite grant list) | illustrative-fragment | not validated alone | n/a | n/a | labeled as a fragment of a grant list |
| Block 6 (DELEGATE MEMORY_GRANTS) | section-snippet | m2/orch with Refund_Checker | pass | none | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Documented both compile errors from harness runs | 4 |
| Depth of conceptual explanation | 4 | Kept | 4 |
| Readability and usability | 4 | Kept | 4 |
| Coverage of examples | 4 | Added user, session, execution_tree and delegate variants | 4 |
| Search and discovery quality | 4 | Kept | 4 |
| Completeness of workflow and failure modes | 4 | Kept | 4 |
| Customer/partner self-service readiness | 4 | Kept | 4 |
| Scenario comprehensiveness | 3 | Added lookup order and namespace | 4 |
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
| Senior platform architect | ready | Compile rules match harness. Lookup order matches code. | Confirm target-side declaration requirement with engineering. |
| Senior content writer | ready | Table of kinds and access is clear. | none |
| Product manager/customer enablement | ready | Good go-live checklist. | none |

## Known gaps and notes

- Resolved: the target does not need to declare the granted path. See the variant map.
- A write to a read grant is not caught at compile time. The runtime refuses it (`granted_memory_read_only`).

Doc bug for human review: the public reference says the target 'cannot read or write the parent's persistent variables' without grants. Consistent with code.
