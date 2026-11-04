# Evidence: returnable-agent-handoff

**Date:** 2026-11-01
**Topic:** 4.5 - How to transfer control to another agent and return later
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/returnable-agent-handoff-2026-11-01-draft.md`
**Release:** `release_Artemis_1.9.0` (code repo read-only)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

`validateABL` bundle copied to `scratchpad/hr/validate.mjs` (zod version pin patched to 4.3.6, mongoose stubbed). Helper `scratchpad/v.sh <dir> <files>` runs it from `/tmp`. Scratch files in `scratchpad/handoff-return/`. Runtime services were not started. Runtime claims come from source reading.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (8728-9125, 9188-9260, 11055-11110, 1434) | `- TO:` entry parser. `RETURN` and `EXPECT_RETURN` set `config.return = value === 'true'`. Default `return: false`. `ON_RETURN` string and block forms. `HISTORY` modes. `ON_FAILURE` string. |
| `packages/core/src/types/agent-based.ts` (1883-1951) | `HandoffConfig`, `HandoffContext`, `HandoffOnReturnConfig`, `ReturnHandlerDefinition`. |
| `packages/compiler/src/platform/ir/compiler.ts` (3825-3990, 4643-4730) | Lowering of handoffs, `on_return`, `RETURN_HANDLERS`, failure handling (`continue`, `escalate`, `respond`), history strategy (`last_N` shorthand). |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` (300-370) | `UNKNOWN_HANDOFF_RETURN_FIELD`, only when `return` is true. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`, auto fallback last 5. |
| `apps/runtime/src/services/execution/routing-executor.ts` (1885-1960, 4060-4100, 5990-6050, 6498-6900, 7177, 7591-7640, 10035-10110, 10300-10560, 12815-12840, 28000-28030, 29169-29290) | Waiting parent, ancestry and cycle refusal, `ON_RETURN` resolution, `MAP`/`SET` application, resume depth 1, `resume_with` values, `handoff_completed` wrapper, failure policy. |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | `outcome` classification, `cause`, `code`, `durationMs`, `siblingIntentMs`. |
| `apps/runtime/src/services/execution/types.ts` (7085-7140) | Return unwind and handoff timeout path. |
| `apps/runtime/src/services/runtime-executor.ts` (700-770) | No `ON_RETURN` plus forwarded message replays. |
| `apps/runtime/src/services/execution/prompt-builder.ts` (5180-5216) | Built-in `__return_to_parent__` tool offered to a child with `returnExpected` and a parent. |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (3330-3395) | Child returns to parent when a parent supervisor route is detected. |
| `apps/runtime/src/services/pipeline/config.ts`, `types.ts` | `parentReturn` resolution and default `ignoreAmbiguous: false`. |
| `apps/runtime/src/__tests__/route-admission/handoff-machine.test.ts` (570-690) | Completed-parent hand-back behavior. |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` | Public reference cross-check. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `RETURN: true` gate with `MAP` | yes | Parser, `applyHandoffOnReturnEffects`, block 1 pass | covered |
| `RETURN` default false | yes | Parser `return: false`, harness v_default | covered |
| `EXPECT_RETURN` alias | yes | Parser 8997, harness v_continue | covered |
| Non-lowercase `true` reads false | yes | Harness c4, c5 (`HANDOFF_ON_RETURN_WITHOUT_RETURN`) | covered (mistake) |
| `ON_RETURN` `continue` with `MAP` and `SET` | yes | Harness v_continue clean | covered |
| `ON_RETURN` `resume_intent`, one-level replay | yes | `MAX_RESUME_INTENT_DEPTH = 1`, trace `resume_intent_depth_limit` | covered |
| `resume_with` four values | yes | `resolveHandoffResumeIntentMessage`, harness v_context2 | covered |
| Unknown `action` runs `continue` | yes | `resolveHandoffOnReturnBehavior`, harness v_unknown warning | covered |
| Named `RETURN_HANDLERS` and `handler` | yes | Harness v_str clean | covered |
| Handler `RESPOND` with `RESUME_INTENT` | no | Harness v_handler error `HANDOFF_ON_RETURN_ACTION_AND_HANDLER` | covered (mistake) |
| `ON_RETURN` string form | yes | Parser 9005, harness v_str (W801 without `MAP`) | partly covered (handler form) |
| Return via `COMPLETE` | yes | `types.ts` unwind, routing-executor 14699 | covered |
| Return via built-in return action | yes | `prompt-builder.ts` 5186, `runtime-executor.ts` 718 | covered |
| Child hands back to waiting parent by `HANDOFF` | yes | `findTargetInLiveReturnAncestry`, harness v_cycle_child clean | covered |
| Cycle refusal (`recursion`) | yes | routing-executor 10335, 10525 | covered |
| `parentReturn` pipeline settings | yes | Parser 11061, `config.ts`, harness v_parent clean | covered |
| `MAP` unknown child field | yes (error) | Harness v_badmap | covered |
| `MAP` skipped when child value missing, non-writable target voids all effects | yes | routing-executor 6664-6740 | covered |
| `PASS`, `SUMMARY`, `HISTORY`, `CONTEXT` block, lowercase keys | yes | Parser 8890-9060, reference warning | covered |
| `HISTORY` bad value falls back to full | yes | Harness c6 clean, `compileHistoryStrategy` returns undefined | covered |
| `ON_FAILURE` `continue`, `ESCALATE`, `RESPOND` | yes | `compileFailureHandling`, `handleHandoffFailure` | covered |
| `WHEN` `//` comment, `!= ""` | yes | Harness c1, c3 (compile clean) | covered |
| `handoff_completed` outcomes | yes | `handoff-completion-record.ts` | covered |
| Handoff `TIMEOUT` and `ON_TIMEOUT` for local child | gap | Parser maps `TIMEOUT` to `asyncTimeout` only. `handoffConfig.timeout` has no authoring path. Runtime reads it at 12832 | out of scope, flagged |
| Remote and async targets | yes | Parser `REMOTE`, `ASYNC` | out of scope: external agent topics |
| `EXPERIENCE_MODE` | yes | Parser 9015 | out of scope |
| `memory_grants` | yes | Parser | out of scope: context-passing topic |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading of waiting parent, `MAP`, replay, cycle refusal | covered | Not run live |
| Required companion resources identified | Supervisor, child, stand-in `Offer_Agent` all defined | covered | None |
| Referenced variables have sources | `annual_income` from child `GATHER` via `MAP`. `income_note` from `SET` | covered | None |
| Fallback/failure/ambiguity behavior verified | `ON_FAILURE`, `handoff_completed` outcomes, cycle, waiting target, unwritable target | covered | Timeout outcome not authorable, flagged |
| Customer verification path defined | Five steps with trace events | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (supervisor, child, stand-in) | full-document set | `v.sh` on sup, inc, off | pass | none | kept |
| Block 2 (`continue`, `SET`) | section-snippet | v_continue with child and offer | pass | none | kept |
| Block 3 (`CONTEXT`, `last_n`, `RESUME_WITH`) | section-snippet | v_context2 | pass | none | kept |
| Block 4 (handler) | section-snippet | v_str | pass | none | kept |
| Block 5 (child hand-back) | section-snippet | v_cycle_child as child | pass | none | kept |
| Block 6 (`parentReturn`) | section-snippet | v_parent | pass | none | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Removed unverified "target must exist" claim | 5 |
| Depth of conceptual explanation | 4 | Added return paths and `ON_RETURN` tables | 5 |
| Readability and usability | 4 | Tables for keys and outcomes | 4 |
| Coverage of examples | 4 | Six validated blocks | 5 |
| Search and discovery quality | 4 | Error and event names in tables | 4 |
| Completeness of workflow and failure modes | 4 | Outcome table, troubleshooting rows | 4 |
| Customer/partner self-service readiness | 4 | No repo paths | 4 |
| Scenario comprehensiveness | 4 | All yes rows covered or scoped out | 4 |
| Article completeness | 5 | Template sections present | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Parser, types, compiler, runtime, tests, examples inspected | pass | Source list above |
| Synonyms and neighbors searched | pass | `EXPECT_RETURN`, `return_to_parent`, `ON_RETURN`, `RETURN_HANDLERS`, `parentReturn` |
| Every authoring style, alias, default covered | pass | Alias, default, string and block `ON_RETURN`, shorthand and `CONTEXT` |
| Optional helpers vs required config separated | pass | `ON_RETURN` is optional |
| Preferred pattern not the only one | pass | `continue`, `resume_intent`, handler variants |
| Other code-supported ways | pass | Remote, memory grants scoped out with reason |
| Evidence if challenged | pass | Variant map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Cycle, writability, replay depth covered | None |
| Senior content writer | ready | Short sentences, tables, concept first | None |
| Product manager/customer enablement | ready | Verification steps, checklist, troubleshooting | None |

## Doc bugs and discrepancies for human review

- Public reference lists `ASYNC_TIMEOUT` for `HANDOFF`. The parser handles `TIMEOUT` only.
- Public reference marks `WHEN` and `CONTEXT` as required. A route without `WHEN` compiles clean.
- `parentReturn` is not in the public reference. The article documents it from code.
- `handoff_completed` `outcome: timeout` has no authored path for a local child. The article does not promise a timeout setting.
- Prior article `switch-active-agent` covers a similar gate. This article links to it and does not repeat the `customer_id` example.
