# Evidence: terminal-agent-handoff

**Date:** 2026-11-01
**Topic:** 4.6 - How to transfer control permanently to another agent
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/terminal-agent-handoff-2026-11-01-draft.md`
**Release:** `release_Artemis_1.9.0` (code repo read-only)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

Same harness as 4.5: `scratchpad/hr/validate.mjs` through `scratchpad/v.sh`. Scratch files in `scratchpad/handoff-terminal/`. Runtime not started.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/agent-based-parser.ts` (8728-9125, 9188-9260) | Entry parser, default `return: false`, shorthand `PASS`/`SUMMARY`/`HISTORY`, `CONTEXT` lowercase keys, `ENABLED_WHEN`, `PRIORITY`, `ON_FAILURE`. |
| `packages/compiler/src/platform/ir/compiler.ts` (3900-3960, 4643-4730) | Lowering, failure handling, history strategy, `on_failure_authored` for `ENABLED_WHEN` entries. |
| `packages/compiler/src/platform/ir/validate-cross-agent.ts` (570-630) | `INVALID_HANDOFF_TARGET`: `TO` must be an agent in the project or a remote target. |
| `apps/runtime/src/services/execution/routing-executor.ts` (1885-1960, 10300-10560, 13575-13600, 11595-11660, 12140-12160, 28000-28030, 29169-29290) | `findCompletedPermanentHandoffParent`, cycle refusal, parent completion for `RETURN: false`, availability refusal and `ON_FAILURE`, `handoff_permanent` reason code, history default, failure policy. |
| `apps/runtime/src/services/execution/route-admission/handoff-machine.ts` and its test (570-690) | Hand-back needs route authority, observes `ENABLED_WHEN`, stays blocked if unwound. |
| `apps/runtime/src/services/execution/handoff-completion-record.ts` | `outcome` classification. |
| `examples/retail/agents/retail_supervisor.agent.abl`, `live_agent.agent.abl` | Real use: permanent route to a `Live_Agent` that holds an `ESCALATE` section. |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` | Reference cross-check: hand-back note, `ENABLED_WHEN`, history warnings. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| `RETURN: false` explicit | yes | Parser, block 1 pass | covered |
| Default (no `RETURN`) is permanent | yes | Parser `return: false`, harness nowhen clean | covered |
| `EXPECT_RETURN: false` alias | yes | Parser 8997 | covered |
| Ownership move, caller thread ends | yes | routing-executor 13575, `types.ts` | covered |
| `ON_RETURN` on permanent route | no effect | Harness v_false_onreturn warning `HANDOFF_ON_RETURN_WITHOUT_RETURN` | covered (mistake) |
| Hand-back to completed direct parent (1.9.0) | yes | `findCompletedPermanentHandoffParent` 1897, handoff-machine tests | covered |
| Hand-back blocked: older ancestor, unwound, invalid authority | yes | Same tests | covered |
| Hand-back observes `ENABLED_WHEN` | yes | handoff-machine test 612 | covered |
| FLOW child hand-back only while FLOW live | yes | Reference note | covered |
| `ENABLED_WHEN` on supervisor to specialist route | yes | Harness block 1 clean | covered |
| `ENABLED_WHEN` all routes conditional warning | yes | Harness disp3 `ENABLED_WHEN_ALL_DISABLED_RISK` | covered |
| Terminal handoff to human: agent with `ESCALATE` | yes | Retail example, `ESCALATE` validated | covered |
| Terminal handoff to a person by name | no | `INVALID_HANDOFF_TARGET` | covered (mistake) |
| `ON_FAILURE: ESCALATE` | yes | `handleHandoffFailure` escalate branch | covered |
| `ON_FAILURE: RESPOND` and `continue` default | yes | `compileFailureHandling` | covered |
| `PASS`, `SUMMARY`, `HISTORY` shorthand and `CONTEXT` | yes | Harness v_short clean, block 1 | covered |
| `HISTORY` modes and defaults, bad value falls back | yes | `contract-source-data.ts`, harness c6 | covered |
| `PRIORITY` ordering | yes | Parser, reference | covered |
| `WHEN` `//` comment, `IS SET`, `!= ""` | yes | Harness c1, c3 | covered |
| `WHEN` omitted compiles | yes | Harness nowhen clean | covered (no warning stated) |
| `handoff_completed` outcomes | yes | `handoff-completion-record.ts` | covered |
| Remote, async targets | yes | Parser | out of scope: external agent topics |
| `EXPERIENCE_MODE: human_escalation` | yes | Parser `normalizeCustomerExperienceMode` | out of scope: presentation only |
| `memory_grants` | yes | Parser | out of scope: context-passing topic |
| Route-scoped `CONTEXT set` | yes | Parser, harness: does not clear `W801` | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Source reading of ownership move, hand-back guard, availability refusal | covered | Not run live |
| Required companion resources identified | Supervisor, `Disputes_Agent`, `Live_Agent` defined | covered | None |
| Referenced variables have sources | `charge_id` from `GATHER`. `customer_id` stated as a project-local assumption | covered | Assumption flagged for review |
| Fallback/failure/ambiguity behavior verified | `ON_FAILURE`, blocked, rejected, no-match, two-match priority | covered | Model decides quoted `WHEN` |
| Customer verification path defined | Seven steps with trace events | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (supervisor, two agents, `Live_Agent`) | full-document set | `v.sh` on sup2, disp2, live | pass | none | kept |
| Block 2 (shorthand, `last_n`) | section-snippet | v_short with disp2 | pass | none | kept |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Removed unverified no-`WHEN` claim and wrong `ENABLED_WHEN` reading | 5 |
| Depth of conceptual explanation | 4 | Ownership steps, settings table, hand-back rules | 5 |
| Readability and usability | 4 | Tables, short sentences | 4 |
| Coverage of examples | 4 | Full set plus shorthand block | 4 |
| Search and discovery quality | 4 | Event and code names | 4 |
| Completeness of workflow and failure modes | 4 | Outcome table, troubleshooting | 4 |
| Customer/partner self-service readiness | 4 | No repo paths | 4 |
| Scenario comprehensiveness | 4 | All yes rows covered or scoped out | 4 |
| Article completeness | 5 | Template sections present | 5 |

**Gate result:** pass

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Parser, types, compiler, runtime, tests, examples inspected | pass | Source list |
| Synonyms and neighbors searched | pass | `EXPECT_RETURN`, `completedPermanentParent`, `Live_Agent`, `ESCALATE`, `ENABLED_WHEN` |
| Every authoring style, alias, default covered | pass | Alias, default, shorthand, `CONTEXT` |
| Optional vs required config separated | pass | `WHEN` omission stated |
| Preferred pattern not the only one | pass | Three human paths |
| Other code-supported ways | pass | Remote, grants scoped out |
| Evidence if challenged | pass | Variant map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Hand-back rules and refusal causes | None |
| Senior content writer | ready | Concept first, tables | None |
| Product manager/customer enablement | ready | Human path guidance, checklist | None |

## Doc bugs and discrepancies for human review

- A `HANDOFF` cannot target a person. The topic brief mentions a human channel target. The article documents agent-with-`ESCALATE`, `ON_FAILURE: ESCALATE`, and specialist `ESCALATE`.
- `customer_id` in the example is a project-local assumption. Route-scoped `CONTEXT set` does not satisfy the `W801` population check.
- Reference marks `WHEN` required. It compiles without one.
- Hand-back behavior for a model-chosen quoted `WHEN` depends on the model.
