# Evidence: use-handoff-instead-of-delegate

**Date:** 2026-11-01
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/use-handoff-instead-of-delegate-2026-11-01-draft.md`
**Topic:** 4.1 - When to use HANDOFF instead of DELEGATE
**Workflow:** New article against `release_Artemis_1.9.0` (read-only). No prior article, draft, or evidence.

## Validation harness

`validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts`, bundled to `scratchpad/handoff-vs-delegate/validate.mjs`. The shared harness file was missing during the run, so a local copy was patched to skip the zod version check. Run from `/tmp`. Each example group validated as one project. Runtime was not started.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (`parseDelegateConfig` 8603, `parseHandoffConfig` 8780+, `HANDOFF_TOP_LEVEL_KEYS` 1430, `RETURN` and `EXPECT_RETURN` 8993) | Both return keys set `config.return`. Default `return: false`. `HISTORY` shorthand and block forms. `DELEGATE` keys: `WHEN`, `ENABLED_WHEN`, `PURPOSE`, `INPUT`, `RETURNS`, `USE_RESULT`, `TIMEOUT`, `ON_FAILURE`, `EXPERIENCE_MODE`, remote keys |
| `packages/core/src/types/agent-based.ts` (1865, 1893) | `HandoffHistoryMode` values |
| `packages/compiler/src/platform/ir/compiler.ts` (1359, 1743, 3894) | Only an orchestrator role declares `DELEGATE`. Handoffs lower to `routing.rules`. Delegates lower to `coordination.delegates` |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` (381-424, 426-500) | `DELEGATE_CHILD_HANDOFF_UNSUPPORTED`, `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` |
| `packages/compiler/src/platform/constructs/executors/delegate-executor.ts` | Self, cycle, depth, `WHEN`, registry checks |
| `apps/runtime/src/services/execution/routing-executor.ts` (`handleDelegate` 20172, `resolveDelegateOutputPolicy` 3199, `getUnsupportedDelegateWaitReason` 5381, `resolveHistoryStrategy` 28000, `MAX_DELEGATE_DEPTH` 7150) | Delegate output always suppressed, parent owns final answer. Interactive child fails with a message that names `HANDOFF`. History resolves route value, then project default, then default |
| `apps/runtime/src/services/execution/prompt-builder.ts` (5521-5870) | Tools `handoff_to_<Agent>` and `delegate_to_<Agent>` |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | `handoff_completed` outcome enum |
| `packages/shared-kernel/src/constants/trace-event-registry.ts` (141) | `delegate_start`, `delegate_complete` |
| `apps/runtime/src/__tests__/execution/handoff-delegate-return-semantics.test.ts`, `packages/compiler/src/__tests__/handoff-delegate-terminal-semantics.test.ts` | Terminal handoff gives ownership to the target. Returning delegate keeps the parent as response owner |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx`, `abl/how-to/switch-active-agent.mdx` | Reference cross-check and voice |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Permanent handoff (`RETURN: false`) to a customer-facing specialist | yes | Parser default `return: false`. Test "terminal HANDOFF RETURN:false gives response authority to the target". Block 1 to 3 compile clean | covered |
| Returnable handoff (`RETURN: true`) with `ON_RETURN` `MAP` | yes | Parser 8993. `validateReturnFieldMappings`. Block 4 and 5 clean | covered, detail linked to 4.5 |
| `EXPECT_RETURN` alias | yes | Parser 8997 | out of scope here, covered in 4.5 |
| `PASS`, `SUMMARY`, `HISTORY` (shorthand string, block `last_n`) | yes | Parser 9051. `resolveHistoryStrategy`. Block 6 to 8 clean | covered |
| Router role limits (`AGENT_ROUTER_REQUIRES_HANDOFF`, no `DELEGATE`) | yes | `compiler.ts` 1349-1370. Harness negative `n_router` | covered |
| Delegate child cannot ask the customer (compile and runtime) | yes | `validate-cross-agent.ts` 487. `getUnsupportedDelegateWaitReason`. Harness `n_noinput` | covered |
| Delegate child cannot hold a permanent handoff | yes | Harness negative `n_p` + `n_childhandoff` gives `DELEGATE_CHILD_HANDOFF_UNSUPPORTED` | covered |
| Hidden check then handoff | yes | Test "returning DELEGATE data can precede terminal HANDOFF". Draft 4.2 block 5 clean | linked to 4.2 |
| Hand back from a permanent child to the direct parent (1.9.0) | yes | `findCompletedPermanentHandoffParent`, `routing-executor.ts` 1897 | covered by link to switch-active-agent |
| Remote or A2A handoff | yes | Parser `LOCATION`, `ENDPOINT`, `PROTOCOL`, `ASYNC` | out of scope, stated in the article |
| `ON_FAILURE`, `ON_TIMEOUT`, `ENABLED_WHEN` on handoff | yes | Parser keys. Validators in `validate-coordination-config.ts` | out of scope, covered in 4.5 and 4.6 |
| Human escalation instead of handoff | yes | `ESCALATE` construct | out of scope, link to 4.3 |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | `handleDelegate` output policy. Handoff tests. `resolveHistoryStrategy` | covered | Runtime not started. Close-read of source and tests |
| Required companion resources identified | Every target agent has a stand-in block. `PASS` fields declared as `GATHER` in targets | covered | None |
| Referenced variables have sources | `customer`-style fields from `GATHER` or `MAP`. `policy_number` from supervisor `GATHER`. `date_of_birth` from `MAP` | covered | Harness `W801` and `MISSING_VARIABLE_PRODUCER_WARNING` fixed in examples |
| Fallback, failure, ambiguity behavior verified | Unmatched intent and stuck child in checklist and troubleshooting. Compile errors verified by harness | covered | Handoff `ON_FAILURE` detail deferred to 4.5 and 4.6 |
| Customer verification path defined | Trace events `handoff`, `handoff_completed`, `handoff_return_handler`. Absence of `delegate_start` | covered | Event field names taken from switch-active-agent evidence |
| Production readiness checklist included | Checklist section | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Blocks 1 to 3 (hub, billing, account) | full-document set | `validateABL`, one project | pass | none | kept |
| Blocks 4 and 5 (refill, identity) | full-document set | `validateABL`, one project | pass | none | kept |
| Blocks 6 to 8 (claims hub, auto, home) | full-document set | `validateABL`, one project | pass | none | kept |
| All 8 blocks in one project | n/a | `validateABL` | `E728` only | Two supervisors in one project. Artifact of the combined run. Groups pass alone | none |

Negative checks (not in the article as code): `n_noinput` gives `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED`. `n_router` gives `AGENT_ROUTER_REQUIRES_HANDOFF` and `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR`. `n_p` gives `DELEGATE_CHILD_HANDOFF_UNSUPPORTED`.

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Removed unverified evaluation-order claim. Added error codes from harness | 5 |
| Depth of conceptual explanation | 4 | Added comparison table before ABL | 5 |
| Readability and usability | 4 | Answer first. Short sentences | 4 |
| Coverage of examples | 4 | Added returnable and context-control variants | 4 |
| Search and discovery quality | 4 | Title and error codes in troubleshooting | 4 |
| Completeness of workflow and failure modes | 3 | Added stuck child, no match, compile errors | 4 |
| Customer/partner self-service readiness | 4 | No repo paths. Companion stand-ins | 4 |
| Scenario comprehensiveness | 4 | Scoped out remote and failure-policy rows with reasons | 4 |
| Article completeness | 5 | All template sections present | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, type, compiler, runtime, tests, examples? | pass | See source table |
| Searched synonyms and neighbors? | pass | `HANDOFF`, `routing`, `handoff_to_`, `delegate_to_`, `EXPECT_RETURN`, `RETURN`, `ESCALATE`, `ON_RETURN` |
| Every authoring style, alias, default? | pass | `RETURN` and `EXPECT_RETURN`, `HISTORY` forms, default `false` and `full` |
| Optional vs required separated? | pass | `PASS`, `HISTORY`, `ON_RETURN` marked optional |
| Preferred pattern not the only one? | pass | Both modes and `DELEGATE` stated as valid |
| Another supported way not mentioned? | pass | Remote handoff and human escalation named and scoped out |
| Evidence for "are you not considering all scenarios"? | pass | Variant map above |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Decision table matches compiler and runtime. Failure codes verified | None |
| Senior content writer | ready | Answer first. Short sentences. No dashes | None |
| Product manager/customer enablement | ready | Clear choice rules. Links to how-tos | None |

## Doc bugs and discrepancies for human review

| Item | Detail |
| ---- | ------ |
| Reference role table | `multi-agent-and-supervisor.mdx` says `assistant` can `DELEGATE`. The compiler rejects an explicit `assistant` role with `AGENT_RETURNED_WORK_REQUIRES_ORCHESTRATOR` (`compiler.ts` 1359) |
| Reference `EXPECT_RETURN` note | The reference calls `RETURN` the older keyword. The parser treats both the same with no deprecation warning |
| Reference evaluation order | The reference lists ESCALATE, HANDOFF, DELEGATE, COMPLETE order. Not verified in code. Not used in the article |
| Handoff history `auto` note | `resolveHistoryStrategy` uses the last messages count from a project default. The reference says 5. Not verified. Not stated in the article |
