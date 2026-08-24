# HowTo Review: clarify-before-routing

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/clarify-before-routing.md`
**Topic:** 3.7 - How to ask a clarification question before routing
**Verdict:** update-needed

## Proposed changes

- Add an explicit warning about writing quoted fallback `WHEN` conditions: the runtime's quote-unwrapping check treats `and`/`or` case-**in**sensitively, but the downstream natural-language classifier treats `AND`/`OR`/`NOT` case-**sensitively** (uppercase only). The article's own fallback text (`"the clarified route topic is unsupported or still unclear"`) is written in safe lowercase and was traced end-to-end through the actual classifier code — it resolves correctly to semantic evaluation. But if a customer capitalizes those connector words in their own fallback text, it can get misclassified as a structured deterministic expression and fail. This is the single most valuable addition for this article, since writing exactly this kind of quoted condition is the article's whole subject.
- Correction to an earlier draft of this review: `HANDOFF` `WHEN` comparisons are **not** rewritten by the compiler into an `IS NOT SET OR ...` form — that rewriting (`autoGuardConstraint`) only applies to `CONSTRAINTS`/`REQUIRE`. `route_topic == "billing"` already handles an unset `route_topic` correctly on its own (it simply evaluates `false`).
- Note the current `HANDOFF` history default (`full` when omitted).
- Mark `customer_id` as a project-local assumption (companion-resource rule).
- Rename "Design choices" to "How it works", convert "Common mistakes" to a table, and add a "Troubleshooting" section (currently missing).

The article's core ABL (global `GATHER` + deterministic `WHEN` + quoted semantic fallback) is accurate and current — no syntax fix is needed, only the completeness/warning additions above.

## Evidence

| Claim                                                                                                 | Current evidence                                                                                                                                                                                                                                                                                                            | Impact                                                                                  |
| ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Quoted-condition classifier case-sensitivity asymmetry                                                | `apps/runtime/src/services/execution/routing-primitive-executor.ts` (`EXPRESSION_SHAPED_ROUTING_GUARD`, case-insensitive) vs `packages/compiler/src/platform/constructs/routing-condition-classifier.ts` (`isStructuredRoutingCondition`, case-sensitive AND/OR/NOT) — traced step-by-step against the article's exact text | Article's example is safe as written; customers writing their own text need the warning |
| `autoGuardConstraint` only applies to `CONSTRAINTS`/`REQUIRE`, never to `HANDOFF`/`SUPERVISOR` `WHEN` | `packages/compiler/src/platform/ir/compiler.ts:2414` (its single caller)                                                                                                                                                                                                                                                    | No article change; corrects an earlier draft                                            |
| HANDOFF history default changed `auto` → `full`                                                       | `packages/compiler/src/platform/contracts/contract-source-data.ts:3`, ABLP-3301                                                                                                                                                                                                                                             | Add note                                                                                |
| `customer_id` has no declared source                                                                  | No MEMORY/GATHER for it in the example                                                                                                                                                                                                                                                                                      | Mark as project-local assumption                                                        |
| Global `GATHER` is a current, valid top-level construct                                               | `packages/core/src/parser/agent-based-parser.ts:982` (valid sections list); `parser-gather-enhanced.test.ts`                                                                                                                                                                                                                | Confirms no syntax change needed                                                        |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/clarify-before-routing-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard (all criteria reach 4 or 5 after the changes proposed here).

## Proposed replacement article body

````markdown
# How to clarify before routing to a specialist agent

Use this when a request is short, ambiguous, overloaded, or missing the one field that determines ownership.

## Concept

Clarification is the right pattern when the supervisor has too little information to select a specialist. Instead of guessing, gather one routing field with a global `GATHER`, then use deterministic `HANDOFF` conditions over the clarified answer. Keep a quoted semantic fallback for answers that don't cleanly match any expected value.

One thing to get right when you write that fallback condition: keep it in ordinary lowercase sentence form. The runtime's classifier that decides whether a quoted `WHEN` string is natural language or a structured expression checks for `AND`/`OR`/`NOT` **case-sensitively** (uppercase only) in the step that ultimately matters, but an earlier quote-unwrapping check matches `and`/`or` case-**in**sensitively. In practice this means:

- Lowercase connector words in an ordinary sentence (like "the clarified route topic is unsupported **or** still unclear") work correctly and are treated as natural language.
- The same sentence with an uppercase `OR`/`AND`/`NOT` can be misclassified as a structured deterministic expression instead — and since ordinary English words aren't valid variable names, that misclassification will fail rather than degrade gracefully.

Write your fallback conditions the way this example does — as a plain, lowercase sentence — and you won't hit this.

## Minimal working example

```abl
SUPERVISOR: Clarify_Before_Routing_Supervisor
GOAL: "Collect one routing decision before selecting a specialist"

GATHER:
  route_topic:
    TYPE: string
    PROMPT: "What do you need help with: billing, technical support, cancellation, or something else?"
    REQUIRED: true

HANDOFF:
  - TO: Billing_Agent
    WHEN: route_topic == "billing"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, route_topic]
      summary: "Customer clarified that this is a billing request."

  - TO: Technical_Support_Agent
    WHEN: route_topic == "technical support"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, route_topic]
      summary: "Customer clarified that this is a technical support request."

  - TO: General_Service_Agent
    WHEN: "the clarified route topic is unsupported or still unclear"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, route_topic]
      summary: "Customer still needs triage."

AGENT: Billing_Agent
GOAL: "Resolve billing requests"

AGENT: Technical_Support_Agent
GOAL: "Resolve technical support requests"

AGENT: General_Service_Agent
GOAL: "Clarify and route unsupported requests"
```
````

`customer_id` is passed as context with no declared source in this example — treat it as a project-local assumption (typically populated from authentication) and declare it via `MEMORY` in your actual project.

## How it works

- The top-level `GATHER` runs before any `HANDOFF` is evaluated — the supervisor asks its one clarification question and waits for `route_topic` before routing.
- The two deterministic routes compare `route_topic` against expected values directly. If `route_topic` somehow weren't set yet, the comparison would simply evaluate `false` — no error, and the trace shows your literal authored condition text.
- The fallback route's quoted condition is evaluated by the runtime's semantic-routing classifier, not a deterministic expression evaluator — which is exactly why the lowercase-wording rule above matters.
- Since `HISTORY` is omitted from every `HANDOFF`, each specialist now receives the full conversation history by default (the current platform default).

## Common variations

- Global gather before any specialist route (shown above).
- A fallback agent gathers clarification itself and returns to the supervisor (see the fallback-routing HowTo) instead of resolving directly in the supervisor's own `GATHER`.
- Multi-intent disambiguation when several valid routes are detected in one message, instead of a single missing-field clarification.

## Verification

- Parse and compile the ABL and confirm there are no parser or compiler errors/warnings.
- Test at least one matching utterance for each specialist route, plus an utterance that should hit the fallback (something outside billing/technical support).
- Deliberately test with an answer containing the word "or"/"and" in lowercase to confirm the fallback still classifies correctly; avoid ever writing an uppercase `AND`/`OR`/`NOT` into a quoted fallback condition.
- Inspect the trace for the selected target and the evaluated condition (matches your literal authored text for the deterministic routes).

## Production readiness checklist

- The gathered field asks for exactly the one value needed to route — nothing more.
- Deterministic conditions use declared, gathered, tool-result, runtime, or returned fields.
- Semantic fallback conditions are quoted, written as ordinary lowercase sentences, and never contain a capitalized `AND`/`OR`/`NOT`.
- Fallback behavior is explicit and does not hide missing intent coverage.
- Any variable assumed to already exist (like `customer_id` above) has a real declared source in your project.

## Common mistakes

| Mistake                                                                  | Why it happens                                              | How to avoid it                                                |
| ------------------------------------------------------------------------ | ----------------------------------------------------------- | -------------------------------------------------------------- |
| Asking for a long form when one routing question is enough               | Over-collecting "just in case"                              | Gather only the field that actually determines ownership       |
| Clarifying again after handoff when the supervisor already owns routing  | Duplicated logic between supervisor and child               | Keep clarification at the level that owns the routing decision |
| Forgetting a fallback for answers outside the expected values            | Assuming users will match one of the listed options exactly | Always include a quoted semantic fallback route                |
| Writing an uppercase `AND`/`OR`/`NOT` inside a quoted fallback condition | Reads naturally to a human author                           | Keep quoted fallback text in ordinary lowercase sentence form  |

## Troubleshooting

| Symptom                                                                            | Likely cause                                                                                            | What to check                                                                |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| The fallback route behaves unpredictably or seems to error                         | Uppercase `AND`/`OR`/`NOT` inside the quoted fallback text got misclassified as a structured expression | Rewrite the fallback condition in ordinary lowercase sentence form           |
| The supervisor never routes even after the user answers the clarification question | `route_topic` value doesn't exactly match any deterministic condition's literal string                  | Check the actual gathered value against the exact strings compared in `WHEN` |
| Child agent has more/less conversation context than expected                       | `HISTORY` omitted; current default (`full`) applied                                                     | Set an explicit `HISTORY` strategy if bounded/summary history is intended    |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route unclear requests to a fallback agent
- How to handle users with multiple intents in one message

```

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/clarify-before-routing.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/clarify-before-routing-2026-08-21-evidence.md` (already current)
```
