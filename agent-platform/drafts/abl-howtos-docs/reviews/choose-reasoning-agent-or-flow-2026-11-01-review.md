# HowTo Review: choose-reasoning-agent-or-flow

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-reasoning-agent-or-flow.md`
**Topic:** 1.1 - How to choose between a reasoning agent and a FLOW-based agent
**Verdict:** update-needed

## Proposed changes

- Add `EXIT_WHEN: always` to the "one pass" row of the exit table. The runtime decides it without asking the model to write state.
- Add a sentence on the fallback message when `MAX_TURNS` ends without answer text. The text is "I was unable to complete the response. Please try again." An agent `MESSAGES` entry with the key `max_iterations` replaces it. This is new in 1.9.0 (ABLP-5739).
- Add `CONTEXT_UPDATES` rules: `false`, `[]`, and an exact field list. The list form is new in 1.9.0 (ABLP-6070). Each listed field must exist under `MEMORY.session`. The step must be `REASONING: true`.
- State that a step without `GOAL` uses the agent goal.
- State that reasoning steps use the agent `PERSONA`, `LIMITATIONS`, and matched behavior profiles. Warn that step-level `PERSONA` and `USE BEHAVIOR_PROFILE` are ignored and give warning `W498`. This is new in 1.9.0 (ABLP-6016).
- Add one mistake row for step-level `PERSONA` or `USE BEHAVIOR_PROFILE`.
- Add troubleshooting rows for `REASONING_CONTEXT_UPDATES_INVALID`, a step that never exits because `CONTEXT_UPDATES` blocks the write, `W498`, `W217`, and `W218`. `W217` and `W218` are new in 1.9.0 (ABLP-6463).
- Add `always` to the "exits after one answer" troubleshooting row.
- Keep all three examples unchanged. All three validate with zero errors and zero warnings on 1.9.0.
- Deleted content: none.

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| `EXIT_WHEN` is an expression over session values, evaluated after each reasoning pass | `flow-step-executor.ts` near line 24114 calls `nullSafeEvaluateCondition(exit_when, session.data.values)`. A quoted phrase still evaluates to true (`evaluateConditionDual`, harness run) | No change to the exit rule or the mistake row |
| `EXIT_WHEN: always` is decided by the runtime in one pass | Comment and guard near line 23842 of `flow-step-executor.ts`. `evaluateConditionDual("always")` returns true | Added to the exit table |
| The model sees the exit instruction only when the expression reads a model-writable session variable | `flow-step-executor.ts` near lines 23846 to 23866 | Backs the `CONTEXT_UPDATES` note |
| `CONTEXT_UPDATES` accepts a boolean or an exact field list. An `EXIT_WHEN` field is not added to the list automatically | Parser case near line 3994 of `agent-based-parser.ts`. `resolveReasoningContextWritePolicy`. Public reference `flow.mdx` lines 167 to 200. Harness: list with undeclared field gives `REASONING_CONTEXT_UPDATES_INVALID`. Declared field compiles | New note and troubleshooting rows |
| `MAX_TURNS` is an iteration cap, minimum 1, default 10 | `reasoning-executor.ts` line 11071 to 11074. `compiler.ts` line 5657 | No change |
| A loop that ends without text returns the `max_iterations` message | `reasoning-executor.ts` near line 22358. `execution-failure-fallback.ts`. `constants.ts` line 148. Harness: `MESSAGES: max_iterations` compiles clean | Added one sentence |
| `MAX_ATTEMPTS` and `ON_EXHAUSTED` must be set together | `validate-ir.ts` lines 2125 to 2152. Harness error `INVALID_FLOW_STEP_ATTEMPT_CONTRACT` | No change |
| One attempt is charged per customer message for a reasoning step | `flow-step-executor.ts` near line 24208 (`reasoningAttemptedStepsThisTurn`) | No change |
| `REASONING` is required on every step | Registry `E200` message "Step 'x' must declare REASONING: true or REASONING: false." | No change. The message now ends with a period |
| Step `PERSONA` and `USE BEHAVIOR_PROFILE` are ignored with `W498` | Registry `W498`. Harness run gave `W498` | Added warning and mistake row |
| A duplicate `EXIT_WHEN` gives `W218` | Harness run gave `W218` | Added troubleshooting row |
| `UNUSED_REQUIRED_GATHER_FIELD` is still the warning for an unconsumed required field | `validate-field-refs.ts` line 1147 | No change |
| Trace types `reasoning_zone_enter`, `reasoning_zone_exit`, `flow_step_attempts_exhausted` exist | `flow-step-executor.ts` lines 12506, 23473, 23988, 24140 | No change |

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/choose-reasoning-agent-or-flow.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/choose-reasoning-agent-or-flow-2026-11-01-evidence.md`

## Proposed article text

The full proposed article follows. Copy it to `articles/choose-reasoning-agent-or-flow.md` after approval.

---

# How to choose between a reasoning agent and a FLOW-based agent

Use this guide when you decide whether an agent should be goal-driven and flexible, step-driven and predictable, or a mix of both.

## Concept

An ABL agent runs without a `FLOW:` block or with one.

A reasoning agent has an `AGENT`, a `GOAL`, optional persona or limitations, optional tools, optional gathered fields, and completion rules. There is no `FLOW:`, so the reasoning layer chooses the next best action inside the boundaries you define.

A FLOW-based agent adds a `FLOW:` block and named steps. The flow owns the conversation path. Every step must declare `REASONING: false` for a deterministic step or `REASONING: true` for a bounded reasoning area. A step with neither fails to parse.

Use a reasoning agent when the work fits a business goal and the conversation can adapt. Use a flow when the order of operations, checkpoints, or troubleshooting path must be explicit. Use a workflow tool, not an agent flow, for long waits, polling, scheduled work, or multi-hour orchestration.

## Decision guide

| Scenario                                                 | Use                                          | Why                                                                                |
| -------------------------------------------------------- | -------------------------------------------- | ---------------------------------------------------------------------------------- |
| Flexible Q&A, policy explanation, broad triage           | Reasoning agent                              | The agent can choose how to answer from the goal, tools, limitations, and context. |
| Required intake or compliance sequence                   | `FLOW` with `REASONING: false` steps         | Each field, prompt, response, and next step is explicit.                           |
| Scripted process with one conversational decision        | `FLOW` with a bounded `REASONING: true` step | The flow owns the process while the reasoning step handles interpretation.         |
| Durable approval, polling, callback, scheduled follow-up | Workflow tool                                | Long-running state belongs outside the stateless agent flow.                       |

## Minimal working example: reasoning agent

This example is a single agent file. It shows the shape of a reasoning agent: a goal, limits, one required field, and a completion rule. It is intentionally partial. The agent finishes as soon as it knows the policy topic. For a real outcome, add the tools or knowledge sources that answer the question, and tie the completion rule to their result.

```abl
AGENT: Policy_QA_Agent
GOAL: "Explain employee policies and identify when HR must handle the request"

PERSONA: |
  Clear, concise HR policy assistant.
  Explains policy rules and next steps without approving exceptions.

LIMITATIONS:
  - "Cannot approve policy exceptions"
  - "Cannot change employee records"

GATHER:
  policy_topic:
    prompt: "Which policy do you need help with?"
    type: string
    required: true

COMPLETE:
  - WHEN: policy_topic IS SET
    RESPOND: "I can explain the {{policy_topic}} policy and tell you when HR must review the request."
```

Use this shape when there is no required path beyond collecting the information needed to answer safely. Avoid `WHEN: true` as a normal completion rule. It completes the agent before the customer outcome exists.

## Working example: deterministic FLOW for required intake

This example is a single agent file. It collects warranty information in a fixed order, then completes only after the required fields are present.

```abl
AGENT: Warranty_Intake_Agent
GOAL: "Collect warranty intake details in a fixed order"

FLOW:
  entry_point: collect_serial
  steps:
    - collect_serial
    - collect_issue
    - complete_request

collect_serial:
  REASONING: false
  GATHER:
    - serial_number:
        prompt: "What is the device serial number?"
        type: string
        required: true
  THEN: collect_issue

collect_issue:
  REASONING: false
  GATHER:
    - issue_description:
        prompt: "What problem are you seeing?"
        type: string
        required: true
  THEN: complete_request

complete_request:
  REASONING: false
  RESPOND: "Thanks. I have the serial number and issue description."
  THEN: complete

COMPLETE:
  - WHEN: serial_number IS SET AND issue_description IS SET
    RESPOND: "Warranty intake is ready for {{serial_number}}: {{issue_description}}."
```

A step with required `GATHER` fields stays active until those fields have values. Use this shape when the customer must not skip required fields or when operations teams need to inspect the exact path a conversation followed.

Step definitions can sit at the top level, as above, or indented under `FLOW:`. Both layouts compile to the same flow.

## Working example: bounded reasoning inside a FLOW

This example is a single agent file. The reasoning step decides whether the request is a billing or a technical issue. The rest of the process stays explicit.

```abl
AGENT: Support_Intake_Agent
GOAL: "Identify the support path, collect the account, and prepare the next action"

FLOW:
  entry_point: understand_request
  steps:
    - understand_request
    - collect_account
    - finish_intake
    - handle_unclear

understand_request:
  REASONING: true
  GOAL: "Work out whether the request is a billing issue or a technical issue"
  GATHER:
    - support_path:
        prompt: "Is this a billing issue or a technical issue?"
        type: string
        options: ["billing", "technical"]
        required: true
  EXIT_WHEN: support_path IS SET
  MAX_TURNS: 3
  MAX_ATTEMPTS: 3
  ON_EXHAUSTED: handle_unclear
  THEN: collect_account

collect_account:
  REASONING: false
  GATHER:
    - account_id:
        prompt: "What account should I use for this request?"
        type: string
        required: true
  THEN: finish_intake

finish_intake:
  REASONING: false
  RESPOND: "I have account {{account_id}} on the {{support_path}} path."
  THEN: complete

handle_unclear:
  REASONING: false
  RESPOND: "I could not tell which path fits. A support agent will follow up."
  THEN: complete

COMPLETE:
  - WHEN: account_id IS SET AND support_path IS SET
    RESPOND: "Support intake is ready for account {{account_id}} on the {{support_path}} path."
```

Use this shape when only one part of the process needs interpretation. Keep the reasoning step narrow. Give it an exit expression and an attempt limit. The `handle_unclear` step is the failure path. Replace its text with your own escalation or follow-up step.

## How a reasoning step exits

A `REASONING: true` step runs until one of these events happens.

| Event                                             | Setting                       | Result                                                                                          |
| ------------------------------------------------- | ----------------------------- | ----------------------------------------------------------------------------------------------- |
| The exit expression becomes true                  | `EXIT_WHEN`                   | The flow moves to the `THEN` step.                                                              |
| The step has `THEN` and no `EXIT_WHEN`, or `EXIT_WHEN: always` | `THEN`           | The step runs one reasoning pass per entry, then moves on.                                      |
| The customer replies too many times without exit  | `MAX_ATTEMPTS` + `ON_EXHAUSTED` | The flow moves to the `ON_EXHAUSTED` step. Set both settings together or the compile fails.   |
| The model uses its iteration budget in one message | `MAX_TURNS`                   | The model stops its tool loop for that message. The default is 10. The limit does not count customer replies. |

If the model reaches `MAX_TURNS` without answer text, the customer hears "I was unable to complete the response. Please try again." Replace this text with a `max_iterations` entry in the agent `MESSAGES` section.

Write `EXIT_WHEN` as an expression over session values, such as `support_path IS SET` or `response_presented == true`. The reasoning model writes the values the expression reads, or a `GATHER` field in the same step collects them. Do not write a plain-language phrase. The runtime does not judge phrases, and a quoted phrase counts as true, so the step exits after its first pass.

By default the reasoning model can write any session value to satisfy `EXIT_WHEN`. `CONTEXT_UPDATES` limits this:

- `CONTEXT_UPDATES: false` or `[]` blocks model writes. `EXIT_WHEN` must then read values that a `GATHER` field, a tool, or a `SET` produces.
- `CONTEXT_UPDATES: [support_path]` lets the model write only the listed fields. Declare each listed field under `MEMORY.session`. The list does not add an `EXIT_WHEN` field automatically. Use the list only on a `REASONING: true` step. Otherwise the compile fails with `REASONING_CONTEXT_UPDATES_INVALID`.

Give each reasoning step its own `GOAL`. The step uses that goal, not the agent goal. A step without `GOAL` uses the agent goal. Every reasoning step also uses the agent `PERSONA`, `LIMITATIONS`, and matched behavior profiles. Do not write `PERSONA` or `USE BEHAVIOR_PROFILE` inside a step. The compiler ignores them and reports warning `W498`.

## Verification

1. Validate the agent file.
2. Run a sample utterance for the reasoning-agent example: "Can you explain the parental leave policy?"
3. Run the warranty flow with a serial number and issue description. Confirm the prompts happen in order and completion waits until both fields are present.
4. Run the bounded-reasoning flow with "I need help with a billing issue." Confirm the step sets `support_path` and the flow asks for `account_id`.
5. Run the same flow with three replies that never state a path, such as "hello". Confirm the flow reaches `handle_unclear`.
6. Inspect the trace for the active step name, `reasoning_zone_enter`, `reasoning_zone_exit`, `flow_step_attempts_exhausted`, gathered fields, and the final completion response.

## Production readiness checklist

- Use a reasoning agent only when goal, limitations, tools, and completion rules are enough to bound behavior.
- Use flow steps for required collection, compliance prompts, or processes support teams must inspect.
- Give every `REASONING: true` step a `GOAL`, an `EXIT_WHEN` expression on a value the step sets, and a `MAX_ATTEMPTS` plus `ON_EXHAUSTED` failure path.
- Point `ON_EXHAUSTED` at a step that escalates or hands the customer to a person.
- Make every required gathered field feed completion, memory, a tool call, handoff, delegate, or another known consumer.
- Move long waits, polling, scheduled callbacks, and multi-hour orchestration into a workflow tool.

## Common mistakes

| Mistake                                                | Why it happens                                                  | How to avoid it                                                                    |
| ------------------------------------------------------ | --------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| Using `FLOW` for every conversation                    | Builders want control even when a goal is enough.               | Start with a reasoning agent when the outcome is flexible and low-risk.            |
| Using `WHEN: true` as the main completion rule         | It completes the agent before the customer outcome exists.      | Complete on meaningful fields, tool results, or final state.                       |
| Writing `EXIT_WHEN` as a plain-language phrase         | It reads like guidance for the model.                           | Write an expression such as `support_path IS SET` and have the step set that value. |
| Treating `MAX_TURNS` as a customer-turn limit          | The name suggests conversation turns.                           | Use `MAX_ATTEMPTS` with `ON_EXHAUSTED` to limit customer replies.                  |
| Leaving out `REASONING` on a step                      | Builders expect a default.                                      | Declare `REASONING: true` or `REASONING: false` on every step.                     |
| Writing `PERSONA` or `USE BEHAVIOR_PROFILE` inside a step | Builders expect a different persona per step.                | Set persona and profiles at agent level. Use step `GOAL` or `STEP_CONSTRAINTS` for step-specific instructions. |
| Using agent flow for durable work                      | Flow is visible and convenient, but not meant for long waits.   | Use workflow-as-tool for durable orchestration.                                    |

## Troubleshooting

| Symptom                                           | Likely cause                                                                          | What to check                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Warning `UNUSED_REQUIRED_GATHER_FIELD`            | The required field is never consumed.                                                 | Reference it in completion, memory, a tool input, handoff, delegate, or next-step logic.              |
| A reasoning step keeps asking questions           | `EXIT_WHEN` never becomes true, or no attempt limit exists.                           | Check that the step sets the value `EXIT_WHEN` reads. Add `MAX_ATTEMPTS` and `ON_EXHAUSTED`.           |
| A reasoning step exits after one answer           | `EXIT_WHEN` is missing, is `always`, or is a plain-language phrase that counts as true. | Replace the phrase with an expression over a session value.                                         |
| A reasoning step never reaches its exit           | `CONTEXT_UPDATES` blocks the model from writing the value `EXIT_WHEN` reads.          | Add the field to the `CONTEXT_UPDATES` list, or collect it with `GATHER`.                             |
| Compile error `REASONING_CONTEXT_UPDATES_INVALID` | `CONTEXT_UPDATES` lists a field missing from `MEMORY.session`, or the step is `REASONING: false`. | Declare each listed field under `MEMORY.session`. Use the list on `REASONING: true` steps only. |
| Warning `W498`                                    | A step has `PERSONA` or `USE BEHAVIOR_PROFILE`.                                       | Move it to agent level.                                                                               |
| Warning `W218`                                    | A step sets one property twice, such as `EXIT_WHEN`. Only one value applies.          | Keep one value per property in each step.                                                             |
| Warning `W217`                                    | A step header has the wrong indentation or a comment after the colon.                 | Write the header as a bare `name:` at column 0 or two spaces under `FLOW:`.                           |
| Compile error `INVALID_FLOW_STEP_ATTEMPT_CONTRACT` | The step sets only one of `MAX_ATTEMPTS` and `ON_EXHAUSTED`.                          | Set both.                                                                                             |
| Parse error "must declare REASONING"              | A step has no `REASONING` line.                                                       | Add `REASONING: true` or `REASONING: false`.                                                          |
| The flow is hard to maintain                      | Too many business paths are in one agent.                                             | Split into specialists or move durable work to a workflow.                                            |

## Related HowTos

- How to combine reasoning steps with deterministic FLOW steps
- How to decide whether to build one agent or multiple specialist agents
- How to define clear responsibilities for each enterprise agent
