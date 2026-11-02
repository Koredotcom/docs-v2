# Evidence: route-users-from-welcome

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/route-users-from-welcome.md`
**Topic:** 2.5 - How to route users from the welcome experience to the right agent
**Workflow:** Refresh against `release_Artemis_1.9.0` (previous scan: `hotfix_Artemis_1.8.1`, evidence dated 2026-10-20)
**Verdict:** update-needed (small additions)

## Source files inspected

Read first: `evidence/route-users-from-welcome-2026-10-20-evidence.md`. All paths are under `/Users/Prabhat.Singh/Documents/GitHub/artimus-bitbucket-src/abl-platform`. The branch `release_Artemis_1.9.0` does not descend from `hotfix_Artemis_1.8.1`, so the diff only located files. Every claim was re-read in 1.9.0.

| File | Purpose |
| ---- | ------- |
| `packages/core/src/parser/on-start-do-block.ts` | Branch `DO:` supports `SET`, `CALL`, `HANDOFF`, `SET_INTERACTION_LANGUAGE`, `CLEAR_INTERACTION_LANGUAGE`. Other keys give `W381`. Unchanged from 1.8.1. |
| `packages/core/src/parser/agent-based-parser.ts` (`parseOnStart`, `parseOnStartBranches`, `parseOnStartBranchDoBlock`, `parseOnStartHandoff`) | `W380` to `W385`, `E380`. First top-level `HANDOFF:` wins (`W382`). Re-read, no behavior change for routing. |
| `packages/compiler/src/platform/ir/on-start-diagnostics.ts` | `ON_START_HANDOFF_ACTIVATED`, `ON_START_BRANCH_DO_ACTIVATED`, `ON_START_HANDOFF_UNREACHABLE`, `ON_START_DELEGATE_WITH_HANDOFF`, `ON_START_HANDOFF_TARGET_INVALID`. All warnings. Unchanged. |
| `packages/compiler/src/platform/ir/validate-ir.ts` (`reportAsOnStartDoWarnings`) | Invalid `SET` or `CALL` in a branch `DO:` reports `ON_START_DO_ACTION_INVALID` as a warning. |
| `apps/runtime/src/services/execution/on-start-handoff.ts` | `selectOnStartList`, `buildOnStartRunOverrides` (`callFailurePolicy: stop`, `failurePresentation: on_failure_only`), `classifyOnStartOutcome`, `splitOnStartLanguagePreparation`. 1.9.0 adds `executionFailureFallback` pass-through (ABLP-5739 follow-up). No change to outcome classes. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (`runOnStartList`, `executeOnStart`) | Order: SET, CALL, language, branch selection, language preparation, welcome, list. Eager and lazy start. Realtime skip. |
| `apps/runtime/src/services/execution/deterministic-handoff.ts`, `lifecycle-dispatcher.ts` | Lazy start handoff on the first turn. 1.9.0 adds the failure-fallback field and a `cancelled` turn outcome. No impact on the article. |
| `apps/runtime/src/services/execution/routing-availability-dispatch.ts`, `customer-visible-fallbacks.ts` | `on_start` is an authored availability route. No `ON_FAILURE` gives "That option is not available right now." |
| `apps/runtime/src/services/execution/execution-failure-fallback.ts` | New in 1.9.0 (ABLP-5739). Platform failure line resolves from `MESSAGES` key `max_iterations`. Start handoff with `ON_FAILURE: RESPOND` and no text still shows nothing (test below). |
| `apps/runtime/src/services/runtime-executor.ts` (`resolveActionEventTurnInput`, `initialData`) | Button press with no text becomes input (`action_value`, else `action_id`). Caller data under `session.*`. |
| `apps/runtime/src/__tests__/execution/on-start-handoff-runtime.test.ts` | Identical to 1.8.1. Re-read blocks: ON_FAILURE cases (lines 320-470), DISABLED_CASES (1622-1662), model-only `WHEN` under a branch (1895-1990), lazy `WHEN` sees first message (1541). |
| `apps/runtime/src/__tests__/execution/flow-initialization-handoff.test.ts` | Identical to 1.8.1. Route `WHEN` not evaluated during startup flow transitions. |
| `packages/compiler/src/platform/contracts/contract-source-data.ts:3` | `DEFAULT_HANDOFF_HISTORY_STRATEGY = 'full'`. |
| `agent-platform/abl/reference/lifecycle-and-hooks.mdx` ("Start-time HANDOFF") | Allowed reference. Matches code except the target-invalid severity (see doc bugs). |

## Drift analysis (1.8.1 to 1.9.0)

| Area | Change in 1.9.0 | Impact on article |
| ---- | --------------- | ----------------- |
| Start handoff outcome and trace (`dsl_on_start_handoff`) | None. Same six outcomes. | None. |
| `on-start-handoff.ts`, `deterministic-handoff.ts` | `executionFailureFallback` field added (ABLP-5739). Carries the platform failure line when a failed route has no authored text. | None for start. Test "a setup failure presents only ON_FAILURE" confirms a bare `RESPOND` shows nothing at start. Step `DO:` handoffs keep the generic line. |
| Hotfix-only 1.8.1 backports | Commits on 1.8.1 not in 1.9.0 touched other areas (ABLP-6411 private copies, ABLP-6129 revert). `ABLP-6129` (session-variable handoff) is reverted in 1.9.0 (commit `a987ef91358`). | The article never described ABLP-6129. No published claim depends on a hotfix-only backport. |
| Gaps found in the 2026-10-20 article (present in 1.8.1 and 1.9.0) | Lazy start: a top-level route `WHEN` can read the first message. A branch-selected handoff ignores a `WHEN` only a model can decide. `ENABLED_WHEN` off with no `ON_FAILURE` shows the default line. | Added to concept, variation, checklist, verification, troubleshooting. |
| Existing examples | All eight blocks still compile with the same warnings. | None. |

## Scenario and variant map

| Scenario or variant | Supported? | Evidence | Article coverage |
| ------------------- | ---------- | -------- | ---------------- |
| Branch `IF` on start data with `DO: - HANDOFF` | yes | Parser, IR, test "a matched branch hands off after its welcome" | covered (minimal example) |
| `ELSE` branch with `DO: - HANDOFF` as fallback | yes | Harness compile, `ON_START_BRANCH_DO_ACTIVATED` | covered |
| Top-level `HANDOFF:` when no branch matched | yes | `selectOnStartList`, test "the top-level handoff runs only when no branch matched" | covered (variation) |
| Top-level `HANDOFF:` gated by route `WHEN` on start data | yes | Test "a top-level handoff gated by the route WHEN is decided by the start data" | covered (variation) |
| Top-level route `WHEN` reads the first message on a lazy start | yes | Test "on a lazy start the route WHEN sees the first message" | covered (new sentence) |
| Route `WHEN` only a model could judge, top-level | yes, never met | Test "a top-level handoff whose WHEN only a model could judge is not met" | covered |
| Route `WHEN` only a model could judge, branch-selected | yes, does not block | Tests under `describe.each(['legacy','machine'])` at lines 1895-1990 | covered (new bullet) |
| Eager start | yes | Test eager block | covered |
| Lazy start | yes | Test lazy block | covered |
| Realtime speech-to-speech | yes, handoff skipped | `buildOnStartCapabilities`, `skipped_mode` | covered |
| Remote (A2A) target | yes, refused | Test "a remote (A2A) target is refused" | covered (mistakes) |
| Route `WHEN` false | yes, silent | Test "a WHEN-blocked handoff keeps its blocked diagnostic" | covered |
| `ENABLED_WHEN` off, no `ON_FAILURE` | yes, default line "That option is not available right now." | `DISABLED_CASES`, `customer-visible-fallbacks.ts` | covered (new) |
| `ENABLED_WHEN` off, `ON_FAILURE` `RESPOND` text or `CONTINUE` | yes | `DISABLED_CASES` | covered (new) |
| `ON_FAILURE` bare `RESPOND` at start | yes, shows nothing | Test ON_FAILURE_CASES "respond without a message" | covered (new) |
| `ON_FAILURE` `ESCALATE` | yes | Test ON_FAILURE_CASES | covered (checklist) |
| Failed branch `CALL` stops the list | yes | Test "a failed list CALL stops the list before the handoff" | covered |
| Menu choice: flow `GATHER` plus route `WHEN` | yes | `flow-initialization-handoff.test.ts`, harness compile | covered (variation) |
| Button press becomes turn input | yes | `resolveActionEventTurnInput` | covered |
| Step-level `ON_ACTION` with `HANDOFF` | yes | fixture `action-handoff-parent.abl` | out of scope: button-action topic |
| Specialist `ON_START` | no, never runs | One caller of `executeOnStart` | covered |
| Route stays active after start | yes | Test "a route WHEN on start data stays a routing rule" | covered |
| Start-only route (branch `IF`, route without `WHEN`) | yes | Test "a branch IF with a route without WHEN makes the handoff start-only" | covered |
| `DELEGATE` at start | yes, not a route | `ON_START_DELEGATE_WITH_HANDOFF` | out of scope |
| Language directive in a branch `DO:` before `HANDOFF` | yes | `splitOnStartLanguagePreparation` | out of scope: topic 2.6 |

## Operational readiness map

| Requirement | Evidence | Article coverage | Gap or action |
| ----------- | -------- | ---------------- | ------------- |
| Runtime behavior verified | Code reading and repository tests named above. No end-to-end run. | covered | State in open questions. |
| Required companion resources identified | Every target agent is defined. `entry_topic` and `page_name` are stated as caller data. | covered | None. |
| Referenced variables have sources | `session.entry_topic`, `session.page_name`: caller data. `startup_choice`: flow `GATHER`. | covered | None. |
| Fallback, failure, ambiguity behavior verified | ELSE fallback, blocked, refused, remote, realtime, call failed, `ENABLED_WHEN` off, bare `RESPOND`. | covered | None. |
| Customer verification path defined | Steps 1-6 with trace names. | covered | None. |
| Production readiness checklist included | Present. | covered | None. |

## Example validation

Harness: `validate.mjs` (`validateABL` from `packages/compiler/src/platform/ir/validate-ir.ts` at 1.9.0), run from `/tmp`. Routing documents validate with their companions in one compilation. Scratch files are under `scratchpad/t25f/`.

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1 `Welcome_Router_Agent` (with blocks 2-4) | full-document | `validateABL` with companions | pass | 3 x `ON_START_BRANCH_DO_ACTIVATED` (intentional, informational) | kept |
| Blocks 2-4 `Claims_Agent`, `Billing_Agent`, `General_Service_Agent` | full-document | `validateABL` | pass | none | kept |
| Block 5 `Welcome_Menu_Agent` (with blocks 3, 6) | full-document | `validateABL` with companions | pass | none | kept |
| Block 6 `Returns_Agent` | full-document | `validateABL` | pass | none | kept |
| Block 7 `Sales_Router_Agent` (with block 8) | full-document | `validateABL` with companion | pass | `ON_START_HANDOFF_ACTIVATED` (intentional, informational) | kept |
| Block 8 `Sales_Agent` | full-document | `validateABL` | pass | none | kept |

Negative controls: an undeclared start target gives `ON_START_HANDOFF_TARGET_INVALID` as a warning with zero errors. An `ENABLED_WHEN` route with `ON_FAILURE` gives `ENABLED_WHEN_ALL_DISABLED_RISK` when it is the only route. The article does not carry that example for this reason.

## Red-team coverage pass

| Question | Result | Evidence or correction |
| -------- | ------ | ---------------------- |
| Inspected parser, types, compiler, runtime, tests, examples? | pass | See source table. |
| Searched synonyms and neighboring constructs? | pass | `HANDOFF`, `DO`, `ON_FAILURE`, `ENABLED_WHEN`, `availability_refused`, `executionFailureFallback`, `splitOnStartLanguagePreparation`, `deterministic`. |
| Identified every authoring style, alias, default, fallback? | pass | Branch DO, top-level handoff, route `WHEN`, lazy `WHEN` on first message, menu, button. |
| Distinguished optional from required sections? | pass | Route in `HANDOFF:` required. `ON_FAILURE`, `PASS` optional. |
| Explained reasoning-layer guidance? | pass | Model-only `WHEN` is never met at top level, and does not block a branch handoff. |
| Avoided making a preferred pattern the only pattern? | pass | Three signals table. |
| Could a customer build this another supported way? | pass | `ON_ACTION` handoff, supervisor routing. Scoped out. |
| Evidence if asked "are you not considering all scenarios?" | n/a | Variant map and test names. |

**Coverage verdict:** pass

## Persona simulation review

| Persona | Verdict | Strengths | Required improvements |
| ------- | ------- | --------- | --------------------- |
| Senior platform architect | ready | Failure policy now complete: false `WHEN`, `ENABLED_WHEN` off, bare `RESPOND`. Lazy `WHEN` and branch rule explicit. | None. |
| Senior content writer | ready | Signal table first. Short sentences. No dashes. | None. |
| Product manager/customer enablement | ready | Fallback agent in the example. Verification steps 1-6. Checklist covers default line. | None. |

## Quality scorecard

| Criterion | Initial score | Improvements made | Final score |
| --------- | ------------- | ----------------- | ----------- |
| Grounding in the code | 4 | Re-read all claims in 1.9.0. Added test-backed failure rules. | 5 |
| Depth of conceptual explanation | 4 | Lazy `WHEN` and branch model-only `WHEN` rules. | 5 |
| Readability and usability | 5 | Additions are one bullet or row each. | 5 |
| Coverage of examples | 4 | Existing blocks re-validated. | 5 |
| Search and discovery quality | 4 | Added the default failure line as a searchable symptom. | 4 |
| Completeness of workflow and failure modes | 4 | Added `ENABLED_WHEN` off and bare `RESPOND`. | 5 |
| Customer/partner self-service readiness | 4 | No repo paths. | 4 |
| Scenario comprehensiveness | 4 | Every `yes` row covered or scoped out. | 4 |
| Article completeness | 5 | All template sections present. | 5 |

**Gate result:** pass (minimum 4)

## Doc discrepancies for human review

1. Reference vs code: `lifecycle-and-hooks.mdx` calls an undeclared start-handoff target a compile error. Harness on 1.9.0 shows `ON_START_HANDOFF_TARGET_INVALID` as a warning with zero errors. The article says "warns".
2. Published `.mdx` vs `articles/` draft: the `.mdx` has frontmatter, a back badge, `yaml` code fences (`expandable=true` on blocks 1 and 5), and no `## Related HowTos` section. The draft keeps Related HowTos. Body text is otherwise identical.
3. The earlier defects (example 2 with `THEN: COMPLETE`, duplicate `GATHER`) are already fixed in both copies.
4. Other published routing articles (2.1, 2.2, 2.7, 2.8, 3.x) may still carry the "first step ends with `THEN: COMPLETE`" pattern. Review them.
5. The reference calls browser caller data unverified. The article repeats it. Confirm the bootstrap endpoint name before adding a link.

## Open questions

- No end-to-end runtime run. Claims rely on code, repository tests, and compile validation.
- Enum `GATHER` retry after invalid text is verified at compile level only.
- The `input contains "sales"` form for lazy `WHEN` comes from a test fixture. Confirm customer-facing wording for `input`.
- Confirm customer-facing wording for caller data (SDK `callerData` or custom attributes).
