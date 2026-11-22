# Evidence: create-field-dependencies

**Date:** 2026-11-20
**Topic:** 8.6 - How to make one field depend on another field
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/create-field-dependencies-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. Overlaps published `progressively-collect-fields`; this article links to it and adds chains, correction cascade, compile checks, and `satisfied_by`.

## Validation harness

`validateABL` bundled with esbuild in the scratchpad (same harness as 8.1). Files `86_a.abl`, `86_b.abl`, `86_c.abl`. No live session run.

## Source files inspected

| File                                                                                 | Purpose                                                                                                                                                                               |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/compiler/src/platform/ir/validate-field-refs.ts` (1258-1360, 455-480)      | `validateDependsOnRefs`: `INVALID_DEPENDS_ON_REF`, `CIRCULAR_DEPENDS_ON`; per block (top-level and each step).                                                                        |
| `packages/compiler/src/platform/constructs/utils.ts` (377-440, 495-560)              | Activation: every `depends_on` field has a value; `satisfied_by` provenance acceptance.                                                                                               |
| `apps/runtime/src/services/execution/correction-reconciler.ts`                       | `computeDependentFields` (transitive BFS over `depends_on`), `reconcileCorrections`; re-given dependent kept (M-5).                                                                   |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (13925-14090, 8150-8260) | `applyGatherCorrection`: commit, clear dependents, `correction_invalidation` and `correction` traces, rejected correction clears and re-asks. Pattern cascade for progressive fields. |
| `apps/runtime/src/services/execution/gather-correction-ack.ts`                       | Ack keys `gather_correction_applied`, `gather_correction_dependents_cleared`.                                                                                                         |
| `apps/runtime/src/services/execution/value-write-policy.ts` (85-148)                 | `satisfied_by` enforcement: `provenance_class_not_allowed`.                                                                                                                           |
| `apps/runtime/src/__tests__/execution/ablp-6872-correction-ack.test.ts`              | Pins: correction updates a field and clears the dependent (`tow_destination` undefined).                                                                                              |
| `packages/core/src/parser/agent-based-parser.ts` (7174, 7537)                        | `satisfied_by` parsing.                                                                                                                                                               |

## Scenario and variant map

| Scenario or variant                                      | Supported?        | Evidence                                                 | Article coverage                    |
| -------------------------------------------------------- | ----------------- | -------------------------------------------------------- | ----------------------------------- |
| `progressive` + `depends_on` gate                        | yes               | `utils.ts` 437                                           | covered, linked to 6.5              |
| `when:` condition gate                                   | yes               | harness 86_a                                             | covered, linked to 6.5              |
| Chain A→B→C                                              | yes               | harness 86_a; BFS in reconciler                          | covered                             |
| Correction clears dependents (FLOW, `CORRECTIONS: true`) | yes               | `applyGatherCorrection`; test ablp-6872                  | covered                             |
| Re-given dependent keeps new value                       | yes               | reconciler M-5                                           | covered                             |
| `when:`-gated field cleared on correction                | no                | reconciler follows `depends_on` only                     | stated                              |
| Dependents cleared in top-level GATHER                   | no / gap          | `reconcileCorrections` called only in flow-step-executor | stated as "does not clear"; not run |
| `INVALID_DEPENDS_ON_REF`, `CIRCULAR_DEPENDS_ON`          | yes               | harness 86_c                                             | covered                             |
| `depends_on` across blocks                               | no                | validator checks same block                              | covered                             |
| `satisfied_by` source rule                               | yes               | value-write-policy; harness 86_b                         | covered                             |
| Cross-field value comparison                             | no via depends_on | no code                                                  | pointed to 8.7                      |
| `depends_on` inheritance from top-level field into step  | gap               | not inspected                                            | out of scope                        |

## Example validation

| Article block                | Classification | Validation method    | Result               | Warnings or errors                              | Action        |
| ---------------------------- | -------------- | -------------------- | -------------------- | ----------------------------------------------- | ------------- |
| Delivery_Address_Collector   | full-document  | `validateABL` (86_a) | pass                 | none                                            | kept          |
| Refund_Approval_Intake       | full-document  | `validateABL` (86_b) | pass                 | none                                            | kept          |
| Cycle probe (not in article) | full-document  | 86_c                 | 2 errors as expected | `INVALID_DEPENDS_ON_REF`, `CIRCULAR_DEPENDS_ON` | evidence only |

## Operational readiness map

| Requirement                        | Evidence                               | Article coverage | Gap or action                          |
| ---------------------------------- | -------------------------------------- | ---------------- | -------------------------------------- |
| Runtime behavior verified          | Code and ablp-6872 test                | covered          | No live run of the verification steps. |
| Companion resources identified     | None needed                            | covered          | none                                   |
| Referenced variables have sources  | Lists under the example                | covered          | none                                   |
| Failure behavior verified          | Rejected correction clears and re-asks | covered          | none                                   |
| Customer verification path defined | 8-step script, trace events            | covered          | Steps 4-6 not run live.                |
| Production checklist               | yes                                    | covered          | none                                   |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                              | Final score |
| ------------------------------------------ | ------------- | ---------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Softened an unverified top-level GATHER claim. | 4           |
| Depth of conceptual explanation            | 4             | Mechanism table; no overlap with 6.5.          | 4           |
| Readability and usability                  | 4             | Answer first.                                  | 4           |
| Coverage of examples                       | 4             | Two validated full documents.                  | 4           |
| Search and discovery quality               | 4             | Title and troubleshooting wording.             | 4           |
| Completeness of workflow and failure modes | 4             | Mistakes, troubleshooting.                     | 4           |
| Customer/partner self-service readiness    | 4             | No repo paths.                                 | 4           |
| Scenario comprehensiveness                 | 4             | Gaps stated.                                   | 4           |
| Article completeness                       | 4             | All sections.                                  | 4           |

**Gate result:** pass

## Red-team coverage pass

| Question                                                        | Result | Evidence or correction                |
| --------------------------------------------------------------- | ------ | ------------------------------------- |
| Inspected parser, compiler, runtime, tests?                     | pass   | Source table.                         |
| Neighbors searched (`activation`, `satisfied_by`, corrections)? | pass   | Yes.                                  |
| Other build path?                                               | pass   | Constraints for value checks, linked. |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                     | Required improvements                                                |
| ----------------------------------- | ----------------- | --------------------------------------------- | -------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Correction cascade grounded in code and test. | Live-run the verification script; confirm top-level GATHER behavior. |
| Senior content writer               | ready             | Short, answer first.                          | none                                                                 |
| Product manager/customer enablement | ready             | Clear choice table.                           | Depends on article 8.7 existing for the constraints link.            |

## Known gaps

- Top-level GATHER non-clearing is inferred from call sites, not run.
- Ack default wording not quoted; not found in runtime code (only in the reference page).
- Links to `enforce-business-constraints` and `validate-fields-by-type` assume same-change publication.
