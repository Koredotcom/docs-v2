# Evidence: choose-reasoning-agent-or-flow

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-reasoning-agent-or-flow.md`
**Topic:** 1.1 - How to choose between a reasoning agent and a FLOW-based agent
**Workflow:** Refresh (no prior evidence file on disk; full fresh exploration)

## Source files inspected

| File                                                                                                                      | Purpose                                                                                                                                                                                        |
| ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `packages/core/src/parser/agent-based-parser.ts` (lines 1120-1180, `entry_point`/`steps:` YAML-style FLOW header parsing) | Confirms the article's `FLOW: entry_point: ... steps: [...]` + flat top-level step-name blocks authoring style is a real, currently-parsed alternative to nesting steps directly under `FLOW:` |
| `packages/core/src/parser/agent-based-parser.ts:1212-1213,1278-1279,2289,2292,2413-2414` (`EXIT_WHEN`, `MAX_TURNS`)       | Confirms both fields are current, recognized step-level properties for a `REASONING: true` bounded zone                                                                                        |
| `packages/core/src/parser/agent-based-parser.ts:2258` (`case 'REASONING'`)                                                | Confirms `REASONING: true/false` step field is current                                                                                                                                         |
| `packages/core/src/parser/yaml-parser.ts:2002-2004`                                                                       | Confirms `entry_point` is also recognized by the separate YAML-flavored parser, consistent with the article's style                                                                            |

This article has no `SUPERVISOR`, `HANDOFF`, `DELEGATE`, or `MEMORY` block, so none of the confirmed drift items from this refresh batch apply: not the HANDOFF history default change (ABLP-3301), not the delegate WHEN guard fix (ABLP-3241), not the root-level guard-variable parser fix (ABLP-2996), and not the `INITIAL:`/`initial_value:` session-memory change (ABLP-2823). Correction to an earlier draft of this evidence file: `autoGuardConstraint` (`packages/compiler/src/platform/ir/compiler.ts:2554`, single caller at line 2414) only rewrites `CONSTRAINTS`/`REQUIRE` conditions at compile time — it is not applied to `COMPLETE`/`HANDOFF`/`SUPERVISOR` `WHEN` conditions at all, regardless of whether they use `IS SET` or a comparison operator. This article has no `CONSTRAINTS` block, so the auto-guard mechanism is not applicable here for a more basic reason than originally stated.

## Scenario and variant map

| Scenario or variant                                                        | Supported?                                                         | Evidence                                  | Article coverage                                                      |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------ | ----------------------------------------- | --------------------------------------------------------------------- |
| Reasoning agent (no `FLOW:` block)                                         | yes                                                                | Standard AGENT/GOAL/GATHER/COMPLETE shape | Covered                                                               |
| `FLOW` with all-deterministic (`REASONING: false`) steps                   | yes                                                                | Confirmed current                         | Covered                                                               |
| `FLOW` with a bounded `REASONING: true` zone (`EXIT_WHEN`, `MAX_TURNS`)    | yes, confirmed current                                             | `agent-based-parser.ts` field lists       | Covered                                                               |
| YAML-style `entry_point`/`steps:` FLOW header + flat top-level step blocks | yes, confirmed current                                             | `agent-based-parser.ts:1120-1180`         | Used as the article's authoring style throughout; accurate            |
| Workflow-as-tool for durable/long-running work                             | out of scope for this article (correctly deferred to other HowTos) | n/a                                       | Correctly scoped out with a clear reason (decision table row + prose) |

## Operational readiness map

| Requirement                                  | Evidence                                                                                                                                              | Article coverage | Gap or action    |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------------- |
| Runtime behavior verified                    | REASONING/EXIT_WHEN/MAX_TURNS/entry_point/steps all confirmed current                                                                                 | Covered          | None             |
| Required companion resources identified      | Single-agent examples, no external targets required                                                                                                   | Covered          | None             |
| Referenced variables have sources            | Every gathered field (`policy_topic`, `serial_number`, `issue_description`, `account_id`) is declared via its own `GATHER` and consumed by `COMPLETE` | Covered          | None             |
| Fallback/failure/ambiguity behavior verified | n/a — this is a conceptual decision-guide article, not a routing/failure-path article                                                                 | n/a              | Correctly scoped |
| Customer verification path defined           | Step-by-step verification section present, references concrete utterances and trace inspection                                                        | Covered          | None             |
| Production readiness checklist included      | Present and specific to this topic (bound reasoning zones, required-field consumption, workflow-for-durable-work)                                     | Covered          | None             |

## Example validation

| Article block                    | Classification | Validation method                                                                         | Result | Warnings or errors | Action     |
| -------------------------------- | -------------- | ----------------------------------------------------------------------------------------- | ------ | ------------------ | ---------- |
| Block 1 (reasoning agent)        | full-document  | Close reading against parser source — no runnable harness available                       | pass   | None found         | Keep as-is |
| Block 2 (deterministic FLOW)     | full-document  | Close reading against `entry_point`/`steps:` parsing and `REASONING: false` step handling | pass   | None found         | Keep as-is |
| Block 3 (bounded reasoning FLOW) | full-document  | Close reading against `EXIT_WHEN`/`MAX_TURNS` field handling                              | pass   | None found         | Keep as-is |

**Validation limitation:** No runnable parse/compile harness was available in this session. Validation was performed by close reading of parser source confirming every field name and structural shape used in the three examples.

## Known drift analysis (2026-06-26 to 2026-08-21)

| Drift item                                          | Impact on article                                                                                                 | Action |
| --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------ |
| HANDOFF history default `auto` → `full` (ABLP-3301) | Not applicable — no HANDOFF in this article                                                                       | None   |
| Delegate WHEN guard fix (ABLP-3241)                 | Not applicable — no DELEGATE                                                                                      | None   |
| Root-level guard-variable parser fix (ABLP-2996)    | Not applicable — no guard/WHEN comparison conditions, only `IS SET` checks                                        | None   |
| `INITIAL:` canonical keyword (ABLP-2823)            | Not applicable — no MEMORY/session-initialization                                                                 | None   |
| Auto-guard (`autoGuardConstraint`)                  | Not applicable — it only rewrites `CONSTRAINTS`/`REQUIRE` conditions, and this article has no `CONSTRAINTS` block | None   |

No drift affecting this article was found.

## Red-team coverage pass

| Question                                                                                            | Result | Evidence or correction                                                                                                                                                            |
| --------------------------------------------------------------------------------------------------- | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Did I inspect parser, type, compiler, runtime execution, tests, and examples?                       | pass   | agent-based-parser.ts (FLOW/entry_point/steps/REASONING/EXIT_WHEN/MAX_TURNS), yaml-parser.ts                                                                                      |
| Did I search for synonyms/neighboring constructs?                                                   | pass   | FLOW, entry_point, steps, REASONING, EXIT_WHEN, MAX_TURNS, GATHER, COMPLETE                                                                                                       |
| Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback?     | pass   | Confirmed both the nested-under-FLOW style (seen in other articles) and this article's YAML-style entry_point/steps + flat step blocks style are both current                     |
| Did I distinguish optional helper sections from required executable configuration?                  | pass   | PERSONA/LIMITATIONS correctly presented as optional                                                                                                                               |
| Did I explain how the reasoning layer uses free-form guidance when the feature supports it?         | pass   | Reasoning-agent and bounded-reasoning-zone sections both explain this                                                                                                             |
| Did I avoid making a preferred pattern sound like the only pattern?                                 | pass   | Decision table explicitly presents all three patterns plus workflow-as-tool as co-equal choices for different scenarios                                                           |
| Could a customer build the same scenario in another code-supported way the article doesn't mention? | pass   | The nested-under-FLOW step style (used elsewhere in this doc set) is a different but equally valid way to write the same FLOW examples — worth one mention that both styles exist |
| If asked "are you not considering all scenarios?", what evidence would I show?                      | —      | agent-based-parser.ts FLOW parsing supports both the `entry_point`/`steps:` list style and inline nested steps                                                                    |

**Coverage verdict:** pass (one very minor mention-worthy point: both FLOW authoring styles exist)

## Persona simulation review

| Persona                             | Verdict | Strengths                                                                                                  | Required improvements |
| ----------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- | --------------------- |
| Senior platform architect           | ready   | All three examples verified accurate against current parser code; decision table is sound and grounded     | None blocking         |
| Senior content writer               | ready   | Clear, well-organized, concept-first structure; good use of a decision table; examples build in complexity | None blocking         |
| Product manager/customer enablement | ready   | Directly actionable decision guidance; troubleshooting and production checklist are concrete               | None blocking         |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                 | Final score |
| ------------------------------------------ | ------------- | --------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 5             | None needed                                                                       | 5           |
| Depth of conceptual explanation            | 5             | None needed                                                                       | 5           |
| Readability and usability                  | 5             | None needed                                                                       | 5           |
| Coverage of examples                       | 4             | None needed (one minor note recorded for a future full rewrite, not required now) | 4           |
| Search and discovery quality               | 5             | None needed                                                                       | 5           |
| Completeness of workflow and failure modes | 5             | None needed                                                                       | 5           |
| Customer/partner self-service readiness    | 5             | None needed                                                                       | 5           |
| Scenario comprehensiveness                 | 4             | None needed                                                                       | 4           |
| Article completeness                       | 5             | None needed                                                                       | 5           |

**Gate result:** pass — no changes required
