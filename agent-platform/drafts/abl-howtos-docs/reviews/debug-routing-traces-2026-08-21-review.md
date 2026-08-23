# HowTo Review: debug-routing-traces

**Date:** 2026-08-21
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/debug-routing-traces.md`
**Topic:** 3.9 - How to debug routing decisions in traces
**Verdict:** update-needed

## Proposed changes

- Fix an invalid interpolation path in the example: `session.interaction.current.channel` does not exist (the runtime's `interaction.current` object exposes only `language`, `locale`, `timezone`, `source`, `confidence`). Replace with `session.channel`, which is a confirmed, system-populated session field.
- Add the actual trace data shape for `handoff_condition_check` (condition, result, evaluatedContext, target, whenOutcome, reasonCode) with a concrete example instead of only naming the event.
- Correction to an earlier draft of this review: the trace's `condition` field for a `HANDOFF`/`SUPERVISOR` `WHEN` shows the literal authored text, unmodified — the compiler's `autoGuardConstraint` rewriting only applies to `CONSTRAINTS`/`REQUIRE` conditions, never to routing conditions. No "expanded guard" note is needed for this article.
- Add two previously-omitted trace events relevant to debugging: `route_condition_unresolved` (a condition references an unset variable) and `handoff_condition_suppressed` (a flow-return suppressed an otherwise-matching condition).
- Enumerate the actual `multi_intent_*` event names instead of a glob reference: `multi_intent_dispatch`, `multi_intent_plan_built`, `multi_intent_queued`, `multi_intent_target_resolved`, `multi_intent_sequential` (+ `multi_intent_sequential_task_start`/`_task_complete`/`_executed`), `multi_intent_parallel`.
- Add `handoff_context_pass_resolved`, `handoff_context_set_applied`, and `handoff_return_handler` trace events, which are directly relevant to "inspect ... context values ... and returned child fields" (already promised by the article but not backed by named events).
- Mention trace verbosity levels (minimal/standard/verbose/debug) since they control which of the above events are visible — a customer looking for `handoff_condition_check` at `minimal` verbosity may not find it.
- Note that `_meta.*` SET is supported beyond `ON_START` — also in flow steps, lifecycle hooks, `ON_ERROR`, and `ESCALATE` triggers — so the article doesn't imply `ON_START` is the only place to set trace dimensions.
- Note the current default `HANDOFF` history behavior (`HISTORY` omitted → `full`, changed from `auto` since this article was first drafted) so a reader correlating trace fields to declared context doesn't assume the old default.
- Convert "Common mistakes" from a bullet list to the required table format, and add the "Troubleshooting" section, which was missing entirely.
- Mark `customer_id`, `account_id`, `issue_summary`, `conversation_summary` as project-local assumptions (companion-resource rule) since the example doesn't declare them via `MEMORY`/`GATHER`.
- Rename "Design choices" to "How it works" to match the article template and reduce ambiguity flagged in persona review.

## Evidence

| Claim                                                                                                                                                                     | Current evidence                                                                                                                                                                                                                                                                       | Impact                                                                                                       |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `session.interaction.current.channel` is not a valid path                                                                                                                 | `apps/runtime/src/__tests__/execution/interaction-context-session-state.test.ts` types `interaction.current` as `{ language, locale, timezone, source, confidence }` — no `channel` field                                                                                              | Example's first `SET` line is likely a dead/undefined interpolation; corrected to `session.channel`          |
| `session.channel` is a valid, system-populated field                                                                                                                      | `apps/runtime/src/__tests__/store-factory.test.ts:359`, `apps/runtime/src/__tests__/platform.e2e.test.ts:268`, `apps/runtime/src/services/runtime-executor.ts` (`preserveSessionChannelNamespaceForPersistence`, session `channel` derived from `callerContext.channel`/`channelType`) | Safe, evidence-backed replacement                                                                            |
| `handoff_condition_check` trace shape                                                                                                                                     | `apps/runtime/src/__tests__/routing/routing-conditions.test.ts` (condition, result, evaluatedContext, target, whenOutcome); `apps/runtime/src/__tests__/execution/runtime-flow-semantics-matrix.test.ts` (sourceAgent, targetAgent, result, currentStep, source)                       | Article previously named the event with no data shape; now shown                                             |
| `autoGuardConstraint` only applies to `CONSTRAINTS`/`REQUIRE`, never to `HANDOFF`/`SUPERVISOR` `WHEN`                                                                     | `packages/compiler/src/platform/ir/compiler.ts:2414` (its single caller)                                                                                                                                                                                                               | No article change; corrects an earlier draft that wrongly claimed routing conditions get rewritten in traces |
| `route_condition_unresolved`, `handoff_condition_suppressed`, `handoff_context_pass_resolved`, `handoff_context_set_applied`, `handoff_return_handler` trace events exist | `apps/runtime/src/services/execution/routing-executor.ts` (~lines 4720, 14685); `packages/shared-kernel/src/constants/trace-event-registry.ts` (ENGINE_TRACE_EVENT_TYPES ~122-133)                                                                                                     | Article omitted these entirely; they're exactly the kind of event a customer debugging routing needs         |
| `_meta.*` SET works beyond `ON_START`                                                                                                                                     | `packages/compiler/src/__tests__/ir/meta-set-surfaces-ir.test.ts` (flow steps, hooks, ON_ERROR, ESCALATE triggers)                                                                                                                                                                     | Article only demonstrated `ON_START`, implying it's the only surface                                         |
| Trace verbosity levels exist (minimal/standard/verbose/debug)                                                                                                             | `apps/runtime/src/services/execution/trace-helpers.ts`                                                                                                                                                                                                                                 | Article never mentioned that event visibility depends on verbosity                                           |
| Default `HANDOFF` history changed `auto` → `full` when `HISTORY` is omitted                                                                                               | `packages/compiler/src/platform/contracts/contract-source-data.ts:3` (`DEFAULT_HANDOFF_HISTORY_STRATEGY`), ABLP-3301                                                                                                                                                                   | Article's HANDOFF examples omit `HISTORY`; reader should know current default                                |
| `customer_id`, `account_id`, `issue_summary`, `conversation_summary` are undeclared                                                                                       | Article's `CONTEXT.pass` lists these with no `MEMORY`/`GATHER` declaration anywhere in the example                                                                                                                                                                                     | Companion-resource rule violation; flagged as project-local assumption                                       |

## Full evidence file

See `agent-platform/drafts/abl-howtos-docs/evidence/debug-routing-traces-2026-08-21-evidence.md` for the complete Scenario and variant map, Operational readiness map, Example validation, Red-team coverage pass, Persona simulation review, and Quality scorecard (all criteria reach 4 after the changes proposed here).

## Proposed replacement article body

````markdown
# How to debug routing decisions in traces

Use this when support, QA, or partners need to understand why a user went to one specialist instead of another, or why a route silently fell through to fallback.

## Concept

Every `HANDOFF` decision, whether deterministic (`WHEN: intent.category == "billing"`) or semantic (`WHEN: "the request is about billing"`), produces a trace event describing what was evaluated and why a target was or wasn't selected. The runtime does not just log "routed to Billing_Agent" — it records the condition it evaluated, the context available at evaluation time, the outcome, and (for temporary child agents) what came back through `ON_RETURN`.

One thing surprises people the first time they read a routing trace: **not every routing event is visible at every trace verbosity level.** The runtime supports `minimal`, `standard`, `verbose`, and `debug` verbosity. If you're not seeing an event you expect (like `handoff_condition_check` for a route that _didn't_ match), raise verbosity before assuming the event doesn't exist.

## Minimal working example

```abl
SUPERVISOR: Traceable_Routing_Supervisor
GOAL: "Make routing decisions easy to inspect in traces"

ON_START:
  SET:
    _meta.entry_channel = session.channel
    _meta.routing_version = "support-router-v3"

INTENTS:
  billing: "Billing and payment requests."
  technical_support: "Product troubleshooting requests."

HANDOFF:
  - TO: Billing_Agent
    WHEN: intent.category == "billing"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, account_id, conversation_summary]
      summary: "Traceable billing route."

  - TO: Technical_Support_Agent
    WHEN: intent.category == "technical_support"
    EXPECT_RETURN: false
    CONTEXT:
      pass: [customer_id, issue_summary, conversation_summary]
      summary: "Traceable technical support route."

  - TO: Fallback_Triage_Agent
    WHEN: "the request does not clearly match billing or technical support"
    EXPECT_RETURN: true
    CONTEXT:
      pass: [customer_id, conversation_summary]
      summary: "Traceable fallback route."
    ON_RETURN:
      action: resume_intent

AGENT: Billing_Agent
GOAL: "Resolve billing requests"

AGENT: Technical_Support_Agent
GOAL: "Resolve technical support requests"

AGENT: Fallback_Triage_Agent
GOAL: "Clarify unclear requests"
```
````

`customer_id`, `account_id`, `issue_summary`, and `conversation_summary` are shown as passed context fields; declare them via `MEMORY` or populate them via `GATHER`/tool results in your actual project — this example assumes they already exist as project-local session values.

## How it works

- The supervisor keeps ownership until a `HANDOFF` condition matches, evaluated in authored order.
- Each evaluated condition emits `handoff_condition_check` with a shape similar to:

  ```json
  {
    "event": "handoff_condition_check",
    "condition": "intent.category == \"billing\"",
    "result": false,
    "evaluatedContext": { "intent.category": "technical_support" },
    "target": "Billing_Agent",
    "whenOutcome": "deterministic_no_match"
  }
  ```

  For a matched deterministic route, the runtime also emits `deterministic_routing` and `deterministic_handoff`; for a matched semantic (quoted natural-language) `WHEN`, `whenOutcome` reflects the semantic evaluation path instead.

- If a condition references a variable that is not yet set anywhere in scope, the runtime emits `route_condition_unresolved` instead of silently treating it as a non-match — check for this event before concluding "the condition just didn't match."
- If a flow-level return suppresses a condition that would otherwise have matched (for example, the conversation is mid-flow and routing is intentionally deferred), the runtime emits `handoff_condition_suppressed`.
- Once a target is selected, `handoff_context_pass_resolved` records what the resolved `CONTEXT.pass` values actually were, and `handoff_context_set_applied` records any `CONTEXT.set` writes applied to the child.
- When `EXPECT_RETURN: true` is used (as in the fallback route above), the child's return path emits `handoff_return_handler`, and `ON_RETURN.action: resume_intent` produces a `resume_intent` trace entry showing what intent processing resumed with.
- Remember: since `HISTORY` is omitted from every `HANDOFF` above, each child receives the full conversation history by default (the platform default when `HISTORY` is unset). Set `HISTORY: auto` or another explicit strategy if you want bounded/summary history instead, and expect the trace's history-related fields to reflect whichever strategy is in effect.
- `_meta.*` values (like `_meta.entry_channel` above) are not routing logic — they're custom trace dimensions for filtering/grouping in dashboards. You can `SET _meta.*` in `ON_START`, in flow steps, in lifecycle hooks, and in `ON_ERROR`/`ESCALATE` triggers, not only at conversation start.

## Common variations

### Debugging a semantic (natural-language) condition

Quoted `WHEN` text like `WHEN: "the request does not clearly match billing or technical support"` produces the same `handoff_condition_check` event, but `whenOutcome` distinguishes the semantic evaluation path from a deterministic one. There's no separate event name to search for — filter on `whenOutcome` instead.

### Debugging multiple intents in one message

Multi-intent routing emits its own event family instead of a single glob: `multi_intent_plan_built` (the queue was constructed), `multi_intent_target_resolved` (a queue entry resolved to a target agent), `multi_intent_queued` (an entry queued for later processing), `multi_intent_sequential` plus `multi_intent_sequential_task_start`/`_task_complete`/`_executed` (sequential processing), and `multi_intent_parallel` (parallel processing). Search for the specific event you expect rather than a wildcard.

### Debugging trace visibility

If an event you expect isn't showing up, check the trace verbosity setting first (`minimal`/`standard`/`verbose`/`debug`) before assuming the routing logic is wrong — some events only appear at `verbose` or `debug`.

## Verification

- Parse and compile the ABL and confirm there are no parser or compiler errors/warnings.
- Test at least one matching utterance for each deterministic route, one for the semantic fallback, and one that should trigger `route_condition_unresolved` (reference a variable you know is unset).
- Inspect the trace for: the selected `target`, the `condition` actually evaluated (matches your literal authored text), `evaluatedContext`, and — for `EXPECT_RETURN: true` routes — the `handoff_return_handler` and `resume_intent` entries.
- Raise trace verbosity to `verbose` or `debug` if an expected event isn't appearing.

## Production readiness checklist

- Every specialist route has a clear owner and a concise context summary.
- Deterministic conditions use declared, gathered, tool-result, runtime, or returned fields.
- Semantic conditions are quoted as natural-language `WHEN` text.
- Temporary child agents (`EXPECT_RETURN: true`) produce every field mapped in `ON_RETURN`, verified via `handoff_return_handler`/`resume_intent` traces.
- Fallback behavior is explicit and does not hide missing intent coverage — confirm via `route_condition_unresolved` and `handoff_condition_suppressed` that nothing is silently falling through.
- `_meta.*` dimensions are stable, low-cardinality values (not raw user text), set consistently across the surfaces where routing decisions can occur (not just `ON_START`).
- Trace verbosity is set appropriately for the environment (higher in staging/debugging, tuned for volume/cost in production).

## Common mistakes

| Mistake                                                             | Why it happens                                                                       | How to avoid it                                                                                                      |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Only checking `handoff_condition_check` for the matched route       | Skipped candidates are just as diagnostic when a route unexpectedly loses to another | Inspect all `handoff_condition_check` entries in the turn, not just the one that matched                             |
| Setting `_meta.*` only in `ON_START`                                | The article/example historically only showed `ON_START`                              | Also set `_meta.*` in flow steps, hooks, or `ON_ERROR`/`ESCALATE` when the dimension should reflect later-turn state |
| Setting high-cardinality `_meta.*` values (e.g. raw user utterance) | Seems convenient for debugging one session                                           | Use stable, low-cardinality values; high-cardinality dimensions break dashboard aggregation                          |
| Not finding an expected trace event                                 | Trace verbosity is below the level that surfaces it                                  | Raise verbosity to `verbose`/`debug` before concluding the event doesn't fire                                        |

## Troubleshooting

| Symptom                                                                                         | Likely cause                                                                                                                                    | What to check                                                                                                                 |
| ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| A route you expect to match never fires, and there's no `handoff_condition_check` for it at all | Trace verbosity is too low, or the flow suppressed the condition before it was ever evaluated                                                   | Raise verbosity; check for a `handoff_condition_suppressed` entry                                                             |
| A condition evaluates to a non-match even though the variable looks set in your test            | The variable is a different path than the condition references, or it's unset at evaluation time                                                | Look for `route_condition_unresolved`; confirm the variable's actual path via `evaluatedContext` in `handoff_condition_check` |
| A temporary child agent's fields never make it back to the parent                               | Missing or mismatched `ON_RETURN` field mapping                                                                                                 | Inspect `handoff_return_handler` for the actual returned payload shape                                                        |
| Child agent has less/more conversation context than expected                                    | `HISTORY` was omitted and the platform default (`full`) applied, or an explicit strategy elsewhere in the project differs from what you assumed | Check `HISTORY`/`CONTEXT.history` on the `HANDOFF`; confirm against the current platform default                              |

## Related HowTos

- How to design a supervisor that routes users to specialist agents
- How to route conversations based on user intent
- How to handle users with multiple intents in one message

```

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/debug-routing-traces.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/debug-routing-traces-2026-08-21-evidence.md` (already current)
```
