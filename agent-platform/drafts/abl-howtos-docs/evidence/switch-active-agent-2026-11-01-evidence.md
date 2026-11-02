# Evidence: switch-active-agent

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/switch-active-agent.md`
**Review:** `agent-platform/drafts/abl-howtos-docs/reviews/switch-active-agent-2026-11-01-review.md`
**Topic:** 3.8 - How to switch the active agent during a conversation
**Workflow:** Refresh against `release_Artemis_1.9.0`. Previous evidence: `evidence/switch-active-agent-2026-10-20-evidence.md` (against `hotfix_Artemis_1.8.1`).
**Verdict:** update-needed

## Validation harness

`validateABL` (`packages/compiler/src/platform/ir/validate-ir.ts`) from the code repo source on `release_Artemis_1.9.0`, run through `scratchpad/harness/validate.mjs` from `/tmp`. A second script (`harness/ir.mjs`) compiles to IR and prints `execution_policy` and `routing.direct_response_allowed`. The code repo stays read-only on `release_Artemis_1.9.0`. Runtime services were not started. Runtime behavior is close-read from source and tests. Hotfix comparison used `git grep` on `hotfix_Artemis_1.8.1`, because the 1.9.0 branch does not descend from it.

## Source files inspected

| File | Purpose |
| ---- | ------- |
| `apps/runtime/src/services/execution/routing-executor.ts` (`handleHandoff` 10035+, `findCompletedPermanentHandoffParent` 1897, `resolveHandoffAncestorResume` 2059, 10328-10520) | `RETURN: true` parks the parent as waiting. `RETURN: false` completes it. New in 1.9.0: a completed permanent direct parent is a valid hand-back target |
| `routing-executor.ts` (`resolveHandoffOnReturnBehavior` 4070-4100, `resolveHandoffResumeIntentMessage` 5990-6050, `MAX_RESUME_INTENT_DEPTH = 1` at 7177, depth-limit trace 7591-7640) | `ON_RETURN` action resolution. Unknown action runs as `continue`. `resumeWith` values. Replay depth limit |
| `apps/runtime/src/services/execution/route-admission/handoff-machine.ts` and `__tests__/route-admission/handoff-machine.test.ts` (579-680) | Completed-parent hand-back: needs route authority, observes `ENABLED_WHEN`, stays cycle-blocked when authority is invalid or already unwound |
| `apps/runtime/src/services/execution/handoff-completion-record.ts`, `routing-executor.ts` (10046-10075) | `handoff_completed` record: `outcome` is success, rejected, blocked, error, or timeout. Has `durationMs` |
| `apps/runtime/src/services/execution/deterministic-handoff.ts` | Deterministic pre-routing. 1.9.0 adds `executionFailureFallback` pass-through (ABLP-5739 follow-up) on failure |
| `apps/runtime/src/services/execution/prompt-builder.ts` (4990-5030) | Replay turn hides returned children and routes with a deterministically false `WHEN`. Hides nothing for `intent` routes |
| `packages/core/src/parser/agent-based-parser.ts` (9000-9060, 1429), `packages/core/src/types/agent-based.ts` (1900) | `ON_RETURN` keys `ACTION`, `HANDLER`, `RESUME_WITH`, `MAP`, `SET`. `resumeWith` union |
| `packages/compiler/src/platform/contracts/contract-source-data.ts` | `HANDOFF_ON_RETURN_ACTION_VALUES = ['continue', 'resume_intent']` |
| Compiler diagnostics (harness) | `UNSUPPORTED_HANDOFF_ON_RETURN_ACTION` (warning), `UNKNOWN_HANDOFF_RETURN_FIELD`, `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` (7 references outside tests) |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (8795-8830) | Flow-transition routing unchanged |
| `packages/core/src/parser/agent-based-parser.ts` (11061-11108), `apps/runtime/src/services/pipeline/config.ts` (116) | `EXECUTION.pipeline.parentReturn` (`minConfidence`, `ignoreAmbiguous`) controls specialist return to supervisor on a changed topic |
| `agent-platform/abl/reference/multi-agent-and-supervisor.mdx` | Public reference cross-check |

## Drift analysis (1.8.1 to 1.9.0)

| Item | Finding | Impact |
| ---- | ------- | ------ |
| `RETURN: false` "no return path exists" | `completedPermanentParent` has 0 references in 1.8.1 and 17 in 1.9.0. A specialist with its own `HANDOFF` to the direct, completed parent can hand back. Needs valid route authority and an enabled supervisor. Older ancestors stay cycle-blocked | Concept table wording changed. New variation with a validated snippet |
| `ON_RETURN` | Wired. `continue` and `resume_intent` only. An unknown `action` compiles with `UNSUPPORTED_HANDOFF_ON_RETURN_ACTION` (harness `z`) and runs as `continue` | One sentence added |
| `resume_with` | Harness `w`: `resume_with: latest_child_user_utterance` compiles clean. Same four values. Default `original_handoff_utterance`. Depth limit 1 with trace `reasonCode: resume_intent_depth_limit` | No change |
| `handoff_completed` | New terminal record per attempt with `outcome` and `durationMs` | Added to verification step 3 |
| `EXECUTION.pipeline.parentReturn` | Controls specialist return to the supervisor when the topic changes. Not needed for the gate | Out of scope. Listed in map |
| `executionFailureFallback` | Project-supplied failure line when a handoff fails. 122 references in 1.9.0, 0 in 1.8.1 | Not in the article. The gate has no failure-line content. Noted for human review |
| Hotfix backport check | All trace names, diagnostics, and `resume_intent` behavior in the article exist in 1.9.0. Nothing in the article is hotfix-only | No removal |
| Route `WHEN` comments | `//` is a comment. Comment-only `WHEN` fails to compile. The example conditions have no comments | No change in article body. See the 3.7 article |
| ABLP-6271 tests | Governed offer replies. Not handoff switching | No impact |
| Deterministic pre-routing | Same rule `customer_id IS NOT SET`. `routing-primitive-executor.ts` condition outcomes: harness results from the 1.8.1 run stay valid (file changed by refactor only) | No change |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Permanent switch (`RETURN: false`) | yes | `handleHandoff`, validation block 1 | covered |
| Permanent specialist hands back to the direct parent supervisor | yes (new in 1.9.0) | `findCompletedPermanentHandoffParent` 1897, `handoff-machine.test.ts` 579-680. Harness `h` clean | covered (new variation) |
| Temporary child (`RETURN: true`) with `ON_RETURN` `MAP` | yes | `applyHandoffOnReturnEffects` | covered |
| Gate with `IS NOT SET` on a `MEMORY` variable | yes | Validation block 1 | covered (minimal example) |
| Gate with `!= true` on a flag | yes | Harness `h2` | covered (variation) |
| `ON_RETURN` `resume_intent` and `RESUME_WITH` values | yes | `resolveHandoffResumeIntentMessage`. Harness `w` clean | covered |
| `ON_RETURN` `continue` and unknown action | yes | `resolveHandoffOnReturnBehavior`. Harness `z` warning | covered |
| `DELEGATE` for a gate | no | `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED` | covered as mistake |
| Specialist switches again through its own `HANDOFF` | yes | `handleHandoff` reads the active thread handoffs | covered (one sentence) |
| Child returns to parent when the user changes topic (`return_to_parent`, `parentReturn`) | yes (for `RETURN: true` children) | `reasoning-executor.ts`, `config.ts` | out of scope: return handling topic |
| Handoff `TIMEOUT` and `ON_TIMEOUT` | yes | `handoff_completed` `outcome: timeout` | out of scope: not needed for the gate |
| Remote agent targets | yes | Parser `REMOTE` | out of scope: external agent topic |
| `ESCALATE` to a person | yes | Design article | out of scope |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Thread lifecycle, `MAP`, replay, deterministic pre-routing, hand-back guard read in source and `handoff-machine.test.ts` | covered | Close-read, not run |
| Required companion resources identified | Supervisor, lookup agent, two stand-in specialists defined. `customer_id` declared in `MEMORY` and populated by the `MAP` return. The hand-back snippet names `Account_Supervisor` from block 1 | covered | None |
| Referenced variables have sources | `customer_id`: gathered by the child, mapped to the supervisor | covered | None |
| Fallback, failure, ambiguity behavior verified | Unknown request, unanswered gate, replay limit, refused hand-back | covered | Unknown-request behavior depends on the model |
| Customer verification path defined | Five steps with `handoff`, `handoff_return_handler`, `resume_intent`, `handoff_completed` | covered | None |
| Production readiness checklist included | Present | covered | None |

## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 (supervisor + 4 agents) | full-document set | `validate.mjs` on four documents split at `SUPERVISOR:`/`AGENT:` lines | pass | none | kept |
| Block 2 (flag `HANDOFF` entry) | section-snippet | Replaces the first `HANDOFF` entry. Child `Authentication_Agent` declares `is_authenticated` in `MEMORY` (`t38/h2-*.abl`) | pass for the supervisor | The harness child alone reports `W801` and `UNUSED_REQUIRED_GATHER_FIELD`. The child is not shown in the article | kept |
| Block 3 (hand-back `HANDOFF`) | section-snippet | Appended to `Account_Service_Agent` in the block 1 project (`t38/p/v-*.abl`) | pass | none | added |

Negative checks (not in article body): bogus `action` gives warning `UNSUPPORTED_HANDOFF_ON_RETURN_ACTION`. Earlier run: `DELEGATE` to a gathering child gives `DELEGATE_CHILD_GATHER_INPUT_UNMAPPED`.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Did I inspect parser, type, compiler, runtime, tests, and examples? | pass | Source table |
| Did I search for synonyms and neighboring constructs? | pass | `completedPermanentParent`, `handoff_completed`, `parentReturn`, `ON_RETURN`, `RESUME_WITH`, `return_to_parent`, `executionFailureFallback`, `DELEGATE` |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback? | pass | `RETURN` versus `EXPECT_RETURN`, string `ON_RETURN`, named handlers, `resume_with` values |
| Did I distinguish optional helpers from required executable config? | pass | `MEMORY` needed for clean compile. `INTENTS:` optional |
| Did I explain how the reasoning layer uses free-form guidance? | pass | Step 5 and the hand-back note on quoted `WHEN` |
| Did I avoid making a preferred pattern sound like the only pattern? | pass | Permanent, temporary, flag, `resume_with`, hand-back |
| Could a customer build the scenario another supported way? | pass | `RETURN_HANDLERS`, `return_to_parent`, `parentReturn` scoped out |
| If asked "are you not considering all scenarios?", what evidence would I show? | pass | Scenario map |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Thread lifecycle, `MAP` direction, replay limits, hand-back guard, compile diagnostics | Runtime test for the hand-back path is open |
| Senior content writer | ready | Concept table, numbered mechanism, short sentences | None |
| Product manager/customer enablement | ready | Real gate, flag guidance, verification with trace fields, hand-back explained | None |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 3 | Corrected the `RETURN: false` claim that is stale on 1.9.0. Verified `ON_RETURN` and `handoff_completed` | 5 |
| Depth of conceptual explanation | 4 | Added hand-back rules | 4 |
| Readability and usability | 5 | Kept structure | 5 |
| Coverage of examples | 4 | Added validated hand-back snippet | 4 |
| Search and discovery quality | 4 | Added `UNSUPPORTED_HANDOFF_ON_RETURN_ACTION`, `handoff_completed`, `handoff_authority_denied` | 4 |
| Completeness of workflow and failure modes | 4 | Added refused hand-back troubleshooting row | 4 |
| Customer/partner self-service readiness | 4 | No repo paths in article | 4 |
| Scenario comprehensiveness | 3 | Added hand-back variant | 4 |
| Article completeness | 5 | All template sections present | 5 |

**Gate result:** pass (minimum score 4)

## Documentation discrepancies for human review

- The published `agent-platform/abl/how-to/switch-active-agent.mdx` says no return path exists for `RETURN: false`. That is true on 1.8.1 and wrong on 1.9.0.
- Published page differs from the draft only in frontmatter, the back badge, `yaml` code fences, and a missing Related HowTos section. The body matches.
- 1.9.0 child started by a `RETURN: false` handoff can hand back to its completed parent. Other articles that say "`RETURN: false` ends the thread with no way back" (design, return handling, fallback) need the same check.
- `executionFailureFallback` (project-supplied failure line for failed handoffs) has no HowTo. Consider a topic.
- Public reference documents `ON_RETURN.map` in lowercase and `EXPECT_RETURN` as primary. Both parse. Unchanged from the last run.

## Open questions

- Runtime test needed: the hand-back path end to end (permanent specialist, hand-back, supervisor `ENABLED_WHEN`).
- Runtime test needed: the full gate loop on 1.9.0.
- Does `ON_RETURN: continue` leave the supervisor idle until the next customer message? Not verified.
