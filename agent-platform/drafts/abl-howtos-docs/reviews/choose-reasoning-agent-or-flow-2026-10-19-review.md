# HowTo Review: choose-reasoning-agent-or-flow

**Date:** 2026-10-19
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/choose-reasoning-agent-or-flow.md`
**Topic:** 1.1 - How to choose between a reasoning agent and a FLOW-based agent
**Verdict:** update-needed

## Proposed changes

- Fix the bounded-reasoning example. The old `EXIT_WHEN` was a quoted plain-language phrase. The runtime evaluates `EXIT_WHEN` as an expression, so the phrase counts as true and the step exits after its first reasoning pass. The new example gathers `support_path` in the step and exits on `support_path IS SET`.
- Correct the `MAX_TURNS` meaning. It caps model and tool iterations for one customer message (default 10). It does not cap how many times the agent asks the customer. The article now bounds customer turns with `MAX_ATTEMPTS` plus `ON_EXHAUSTED`.
- Add a new section, "How a reasoning step exits", with the exit rules, the failure path, and the `REASONING` requirement.
- Add a short note that step definitions can sit at the top level or indented under `FLOW:`.
- State that every step must declare `REASONING`.
- Label the reasoning-agent example as a partial example and say what to add for a real outcome.
- Update verification, production checklist, mistakes, and troubleshooting for the exit and attempt rules.
- Add a Related HowTos section that lists existing articles.
- Leave the reasoning-agent example and the warranty flow example unchanged.

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| `EXIT_WHEN` is an expression, not plain language | `flow-step-executor.ts` calls `nullSafeEvaluateCondition(exit_when, session values)`. A quoted phrase evaluates to a non-empty string, which is true (harness run, see evidence file) | Old example 3 never waited for "clear enough". Fixed |
| `MAX_TURNS` is an iteration cap per message | `maxIterations: step.reasoning_zone.max_turns` passed to the reasoning executor. Compiler default `max_turns: step.maxTurns ?? 10` | Article wording corrected |
| `MAX_ATTEMPTS` and `ON_EXHAUSTED` bound customer turns in a reasoning step | `transitionIfStepAttemptsExhausted` with `attemptKind: 'reasoning_turn'`. Compiler error `INVALID_FLOW_STEP_ATTEMPT_CONTRACT` when only one is set | New failure path added |
| `REASONING` is required on every step | Parser error "Step 'x' must declare REASONING: true or REASONING: false" (harness run) | Stated in the article |
| Both FLOW layouts compile to the same IR | Harness run of flat and nested layouts | Authoring note added |
| `UNUSED_REQUIRED_GATHER_FIELD` is the warning for an unconsumed required field | Harness run | Troubleshooting row names the code |

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
| The step has `THEN` and no `EXIT_WHEN`            | `THEN`                        | The step runs one reasoning pass per entry, then moves on.                                      |
| The customer replies too many times without exit  | `MAX_ATTEMPTS` + `ON_EXHAUSTED` | The flow moves to the `ON_EXHAUSTED` step. Set both settings together or the compile fails.   |
| The model uses its iteration budget in one message | `MAX_TURNS`                   | The model stops its tool loop for that message. The default is 10. The limit does not count customer replies. |

Write `EXIT_WHEN` as an expression over session values, such as `support_path IS SET` or `response_presented == true`. The reasoning model writes the values the expression reads, or a `GATHER` field in the same step collects them. Do not write a plain-language phrase. The runtime does not judge phrases, and a quoted phrase counts as true, so the step exits after its first pass.

Give each reasoning step its own `GOAL`. The step uses that goal, not the agent goal.

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
| Using agent flow for durable work                      | Flow is visible and convenient, but not meant for long waits.   | Use workflow-as-tool for durable orchestration.                                    |

## Troubleshooting

| Symptom                                           | Likely cause                                                                          | What to check                                                                                         |
| ------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| Warning `UNUSED_REQUIRED_GATHER_FIELD`            | The required field is never consumed.                                                 | Reference it in completion, memory, a tool input, handoff, delegate, or next-step logic.              |
| A reasoning step keeps asking questions           | `EXIT_WHEN` never becomes true, or no attempt limit exists.                           | Check that the step sets the value `EXIT_WHEN` reads. Add `MAX_ATTEMPTS` and `ON_EXHAUSTED`.           |
| A reasoning step exits after one answer           | `EXIT_WHEN` is missing, or it is a plain-language phrase that counts as true.         | Replace the phrase with an expression over a session value.                                           |
| Compile error `INVALID_FLOW_STEP_ATTEMPT_CONTRACT` | The step sets only one of `MAX_ATTEMPTS` and `ON_EXHAUSTED`.                          | Set both.                                                                                             |
| Parse error "must declare REASONING"              | A step has no `REASONING` line.                                                       | Add `REASONING: true` or `REASONING: false`.                                                          |
| The flow is hard to maintain                      | Too many business paths are in one agent.                                             | Split into specialists or move durable work to a workflow.                                            |

## Related HowTos

- How to combine reasoning steps with deterministic FLOW steps
- How to decide whether to build one agent or multiple specialist agents
- How to define clear responsibilities for each enterprise agent
