# Evidence: combine-reasoning-and-flow-steps

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/combine-reasoning-and-flow-steps.md`
**Topic:** 1.5 - How to combine reasoning steps with deterministic FLOW steps
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                                    | Purpose                                                                                                                                                                                                                                     |
| ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/types/agent-based.ts:18-22,1896`                                                     | Confirms the article's core claim — "Do not use the old `MODE:` pattern" — is accurate: `@deprecated MODE is deleted from ABL. Execution style is derived from [REASONING per step]`, retained only for backward-compatible deserialization |
| `packages/core/src/parser/agent-based-parser.ts:475` (`// mode is no longer set — deprecated`)          | Corroborates the deprecation from the parser side                                                                                                                                                                                           |
| `packages/core/src/parser/agent-based-parser.ts` (`case 'REASONING'`, `EXIT_WHEN`, `MAX_TURNS`, `THEN`) | Confirms all FLOW-step fields used in the example are current (same evidence base as topic 1.1)                                                                                                                                             |

This article has no `SUPERVISOR`, `HANDOFF`, `DELEGATE`, or `MEMORY` block, so none of the confirmed drift items from this refresh batch apply.

## Scenario and variant map

| Scenario or variant                                             | Supported?                                                        | Evidence                                           | Article coverage                                |
| --------------------------------------------------------------- | ----------------------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------- |
| Deterministic step (`REASONING: false`) with GATHER/SET/THEN    | yes                                                               | Confirmed current                                  | Covered                                         |
| Reasoning step (`REASONING: true`) with GOAL/THEN               | yes                                                               | Confirmed current                                  | Covered                                         |
| Legacy agent-level `MODE:` pattern                              | confirmed deleted/deprecated                                      | `agent-based.ts:18-22`                             | Article correctly tells customers not to use it |
| Reason-first, collect-first, reason-after-tool-result orderings | yes, all structurally equivalent uses of the same step primitives | n/a — compositional, not a distinct syntax variant | Covered                                         |

## Operational readiness map

| Requirement                                  | Evidence                                                             | Article coverage | Gap or action    |
| -------------------------------------------- | -------------------------------------------------------------------- | ---------------- | ---------------- |
| Runtime behavior verified                    | REASONING/GATHER/SET/THEN all confirmed current                      | Covered          | None             |
| Required companion resources identified      | Single-agent example, no external targets required                   | Covered          | None             |
| Referenced variables have sources            | `policy_id`, `claim_type` gathered; `claim_summary` set from them    | Covered          | None             |
| Fallback/failure/ambiguity behavior verified | n/a — conceptual pattern article, not a routing/failure-path article | n/a              | Correctly scoped |
| Customer verification path defined           | Concrete verification steps referencing trace step enter/exit events | Covered          | None             |
| Production readiness checklist included      | Present and specific                                                 | Covered          | None             |

## Example validation

| Article block                                                           | Classification | Validation method                                                   | Result | Warnings or errors | Action     |
| ----------------------------------------------------------------------- | -------------- | ------------------------------------------------------------------- | ------ | ------------------ | ---------- |
| Block 1 (single agent, 4-step flow alternating reasoning/deterministic) | full-document  | Close reading against parser source — no runnable harness available | pass   | None found         | Keep as-is |

**Validation limitation:** No runnable parse/compile harness was available in this session.

## Known drift analysis (2026-06-26 to 2026-08-21)

No drift affecting this article was found. It has no exposure to HANDOFF, DELEGATE, MEMORY, or guard-condition constructs, and its central claim about `MODE:` deprecation was independently re-confirmed against current type definitions.

## Red-team coverage pass

| Question                                                                   | Result | Evidence or correction                                          |
| -------------------------------------------------------------------------- | ------ | --------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime, tests, examples?            | pass   | agent-based-parser.ts, agent-based.ts type deprecation comments |
| Did I search synonyms/neighboring constructs?                              | pass   | REASONING, MODE, FLOW, EXIT_WHEN, MAX_TURNS                     |
| Did I identify every supported authoring style/shorthand/default/fallback? | pass   | Confirmed MODE is truly deleted, not just discouraged           |
| Did I distinguish optional vs required sections?                           | pass   | N/A - all fields in this article are used purposefully          |
| Did I explain reasoning-layer guidance where supported?                    | pass   | Both reasoning steps have clear, bounded goals                  |
| Did I avoid making a preferred pattern sound like the only pattern?        | pass   | Three ordering variations presented as equally valid            |
| Could a customer build this another code-supported way not mentioned?      | pass   | No gap found                                                    |
| If asked "are you not considering all scenarios?" what would I show?       | —      | MODE deprecation evidence above                                 |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict | Strengths                                                                                                        | Required improvements |
| ----------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------------- | --------------------- |
| Senior platform architect           | ready   | Correctly and specifically calls out the MODE deprecation, which was independently re-verified as still accurate | None blocking         |
| Senior content writer               | ready   | Clear "how it works" narrative walking through each step's purpose                                               | None blocking         |
| Product manager/customer enablement | ready   | Practical variations section covers real design choices                                                          | None blocking         |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made | Final score |
| ------------------------------------------ | ------------- | ----------------- | ----------- |
| Grounding in the code                      | 5             | None needed       | 5           |
| Depth of conceptual explanation            | 5             | None needed       | 5           |
| Readability and usability                  | 5             | None needed       | 5           |
| Coverage of examples                       | 4             | None needed       | 4           |
| Search and discovery quality               | 5             | None needed       | 5           |
| Completeness of workflow and failure modes | 4             | None needed       | 4           |
| Customer/partner self-service readiness    | 5             | None needed       | 5           |
| Scenario comprehensiveness                 | 4             | None needed       | 4           |
| Article completeness                       | 5             | None needed       | 5           |

**Gate result:** pass — no changes required
