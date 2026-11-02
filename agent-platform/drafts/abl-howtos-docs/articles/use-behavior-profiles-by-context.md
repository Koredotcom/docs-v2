# How to use behavior profiles to change agent behavior by context

Use behavior profiles when the same agent keeps its core responsibility but changes style, constraints, tools, gathering behavior, or channel handling for a specific context.

## Concept

A behavior profile is conditional behavior layered onto an agent. Each profile has a name, a `PRIORITY`, a `WHEN` condition, and one or more behavior changes.

Use a profile for context-sensitive adaptation, not to change the agent's core job. If the responsibility changes, create another agent. If only the delivery mode or handling style changes, use a profile.

Profiles come in two forms:

| Form       | Where you write it                                              | Sections allowed                                                                                                |
| ---------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Inline     | Inside the agent file                                           | `PRIORITY`, `WHEN`, `INSTRUCTIONS`, `CONVERSATION`                                                              |
| Standalone | In its own profile file, attached with `USE BEHAVIOR_PROFILE:` | `PRIORITY`, `WHEN`, `INSTRUCTIONS`, `CONVERSATION`, `CONSTRAINTS`, `RESPONSE`, `VOICE`, `TOOLS`, `GATHER`, `FLOW` |

Use inline profiles when the behavior belongs to one agent and only changes instructions. Use standalone profiles when several agents share a rule, or when the profile changes voice, response limits, tools, gathering, or flow.

## Minimal working example

This agent has two inline profiles. `recovery_mode` reads the interaction sentiment and the caller identity. `concise_mode` reads the channel name.

```abl
AGENT: Support_Assistant
GOAL: "Resolve support questions with behavior matched to customer context"
PERSONA: "Helpful support assistant"

BEHAVIOR_PROFILE: recovery_mode
PRIORITY: 10
WHEN: interaction.sentiment_label == "frustrated" OR caller.is_authenticated == false
INSTRUCTIONS: |
  Acknowledge the customer's prior effort before asking for more information.
  Keep the next step concrete and do not list more than two actions.

BEHAVIOR_PROFILE: concise_mode
PRIORITY: 3
WHEN: channel.name == "twilio_sms"
INSTRUCTIONS: "Use short plain-text responses suitable for SMS."
```

The platform does not detect sentiment. Your integration supplies `interaction.sentiment_label` in the interaction context or in session or message metadata. See [What a `WHEN` condition can read](#what-a-when-condition-can-read). Without that value, `recovery_mode` applies only to callers who are not authenticated.

## How it works

The runtime checks the `WHEN` condition of every attached profile at session start and again on each turn. A profile applies while its condition is true. Several profiles can apply at the same time.

The runtime applies active profiles from the lowest to the highest `PRIORITY`. When two profiles set the same field, the higher number wins. The merge rules depend on the section:

| Section                    | When several profiles are active                                      |
| -------------------------- | --------------------------------------------------------------------- |
| `INSTRUCTIONS`, `CONSTRAINTS` | The runtime adds the text from every active profile.               |
| `TOOLS`                    | Hidden tools and added tools accumulate.                              |
| `RESPONSE`, `VOICE`        | The higher priority profile wins for each field.                      |
| `GATHER`                   | Field overrides stack. The higher priority wins on the same property. |
| `FLOW`                     | Skipped steps accumulate. The higher priority wins on step overrides. |
| `CONVERSATION`             | The runtime merges it with the agent's conversation behavior and drops settings that the channel does not support. |

Active profile instructions and constraints also reach `REASONING: true` steps in a `FLOW`. A flow step has no profile slot of its own. `USE BEHAVIOR_PROFILE:` on a step is ignored and raises warning `W498`. Attach the profile to the agent.

`PRIORITY` must be a whole number of 0 or more. Two profiles attached to the same agent with `USE BEHAVIOR_PROFILE:` cannot share a priority. Give inline profiles unique priorities too.

### What a `WHEN` condition can read

| Value                                                                     | Example                                    | Notes                                                                                         |
| ------------------------------------------------------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------- |
| `channel.name`                                                            | `channel.name == "voice"`                  | Channel type of the session, such as `web_chat`, `voice`, `twilio_sms`, `whatsapp`, `slack`, `email`. Voice variants use their own names, such as `voice_twilio`. |
| `channel.region`, `.provider`, `.number_type`, `.tags`                    | `channel.region == "us"`                   | Channel connection settings. Each is an empty string when the connection does not set it.      |
| `channel.capabilities.streaming`, `.media`, `.threading`, `.interactive` | `channel.capabilities.interactive == true` | Boolean values derived from the channel type.                                                 |
| `caller.identity_tier`, `caller.is_authenticated`, `caller.customer_id`, `caller.verification_method` | `caller.is_authenticated == true` | Caller identity from the session. `identity_tier` is a number. `is_authenticated` is true when the tier is above 0. |
| `session.is_new`, `session.language`, `session.turn_count`                | `session.turn_count > 5`                   | Session metadata.                                                                             |
| `interaction.sentiment_label`, `.sentiment_score`, `.emotion_label`, `.turn_topic` | `interaction.sentiment_label == "frustrated"` | Your integration supplies these values in the interaction context or in session or message metadata. They are an empty string or 0 when not supplied. |
| `env.deployment_region`                                                   | `env.deployment_region == "eu"`            | Region of the deployment.                                                                     |

A `WHEN` condition reads only the values in this table. It cannot read session variables, `MEMORY` fields, or tool results. A profile cannot branch on other values in this release.

Use `AND`, `OR`, and `NOT`, or `&&`, `||`, and `!`. Use `==` and `!=`. `===` and `!==` fail compilation. Write `WHEN: true` for a profile that always applies.

A condition that names anything outside the table fails when the runtime evaluates it. The runtime skips the profile for that turn and logs a warning. The agent keeps its base behavior.

## Standalone profile example

A standalone profile lives in its own file. Attach it to each agent that needs it with `USE BEHAVIOR_PROFILE:`.

```abl
BEHAVIOR_PROFILE: voice_support_mode
PRIORITY: 8
WHEN: channel.name == "voice"
INSTRUCTIONS: |
  Speak in short sentences and confirm important identifiers one digit group at a time.

VOICE:
  provider: elevenlabs
  speed: 0.95
```

```abl
AGENT: Voice_Support_Assistant
GOAL: "Resolve support questions on voice channels"
PERSONA: "Clear phone support assistant"

USE BEHAVIOR_PROFILE: voice_support_mode
```

`VOICE` accepts `provider`, `voice_id`, `speed`, `pace`, `temperature`, `ssml`, `instructions`, `plain_text`, and turn detection settings. `channel.name == "voice"` matches only the `voice` channel. Use another condition, such as `channel.name == "voice_twilio"`, for the voice channel variants your project uses.

## Common variations

### Recovery mode

Use a high-priority recovery profile for frustrated users. Read the signal from `interaction.sentiment_label`, `interaction.sentiment_score`, or `interaction.emotion_label`. Your integration supplies these values.

### Channel mode

Use channel profiles for SMS, voice, WhatsApp, or web when response length, formatting, or speech pacing changes. Match on `channel.name`.

### Enterprise customer mode

Use caller profiles when verified or high-trust callers need a different tone, faster escalation, or more formal explanations. Match on `caller.identity_tier`, `caller.is_authenticated`, or `caller.verification_method`.

### Always-on profile

Use `WHEN: true` for a profile that applies on every turn, for example a shared response style that several agents attach.

### Response limits and hidden tools

A standalone profile can add constraints, limit response size, and hide tools. The agent must declare every hidden tool. An unknown tool name fails compilation with `PROFILE_UNKNOWN_TOOL`.

```abl
BEHAVIOR_PROFILE: whatsapp_compact
PRIORITY: 15
WHEN: channel.name == "whatsapp"
INSTRUCTIONS: "Keep replies short and avoid markdown tables."

CONSTRAINTS:
  - "Never send more than three options in one reply."

RESPONSE:
  max_buttons: 3
  max_response_length: 500

TOOLS:
  HIDE: [show_carousel]
```

This profile assumes that the agent declares a `show_carousel` tool and runs `USE BEHAVIOR_PROFILE: whatsapp_compact`.

## Verification

- Validate the project. Confirm that no `PROFILE_*`, `E105`, `E131`, or `E132` errors appear.
- Start one session that matches each `WHEN` condition and one that does not. Test on the real channel, especially voice and SMS.
- For interaction values, send the sentiment in the session interaction context or message metadata. Confirm that the profile applies.
- Inspect the `profile_resolution` trace event on each turn. `evaluatedProfiles` lists every attached profile and `matchedProfiles` lists the ones that applied.
- Look for the `behavior_profile_applied` trace event when the set of active profiles changes. It shows added tools, hidden tools, and voice overrides.
- Make two profiles match at once. Confirm that instructions from both apply and that the higher priority wins on `RESPONSE` and `VOICE` fields.
- For a `FLOW` agent, confirm that a matched profile instruction shapes the reply of a `REASONING: true` step.

## Production readiness checklist

- Every profile has a `PRIORITY` that is a whole number of 0 or more.
- Every profile has a `WHEN` condition.
- Priorities are unique on each agent.
- Every `WHEN` condition reads only values from the table in [What a `WHEN` condition can read](#what-a-when-condition-can-read).
- Your integration supplies every `interaction.*` value that a condition uses, and a test proves it.
- Every tool a profile hides is declared by the agent.
- Shared standalone profiles are versioned and reviewed, because changing one can affect many agents.
- Tests cover overlapping profiles, no-match behavior, and channel-specific response constraints.

## Common mistakes

| Mistake                                       | Why it happens                                             | How to avoid it                                                            |
| --------------------------------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------- |
| Using profiles as hidden agents               | The profile starts changing the job, not the behavior      | Split into another agent when responsibility changes                       |
| Writing `channel == "sms"`                    | `channel` looks like a string                              | Use `channel.name == "twilio_sms"`                                         |
| Putting `VOICE` or `TOOLS` in an inline profile | Inline profiles look like standalone profiles            | Move the profile to a standalone file                                      |
| Missing `PRIORITY` or `WHEN`                  | The profile looks like a simple instruction block          | Add both fields to every behavior profile                                  |
| Two attached profiles with the same priority  | Priorities are copied between profiles                     | Give each profile a unique number                                          |
| Reading a session variable in `WHEN`          | Other conditions in ABL read session variables             | Use only the values in the table                                           |
| Expecting only one profile to apply           | Priority looks like a winner-takes-all rule                | Plan for every matching profile to apply and merge                         |
| Writing `USE BEHAVIOR_PROFILE:` on a flow step | A step looks like a place for step-level behavior         | Attach the profile to the agent                                            |

## Troubleshooting

| Symptom                                      | Likely cause                                              | What to check                                                       |
| -------------------------------------------- | --------------------------------------------------------- | ------------------------------------------------------------------- |
| Profile never applies                        | `WHEN` reads a name outside the table, or uses `channel` as a string | Check the trace for `profile_resolution`. Use `channel.name`. Remove session variables from the condition. |
| Profile never applies on one voice channel   | `channel.name` is a voice variant                         | Compare the session channel name with the `WHEN` value              |
| `interaction.*` condition never matches      | The integration does not send the value                   | Send the value in the interaction context or metadata and check the trace |
| Wrong value wins for a response or voice field | Priority order is wrong                                 | Compare the priorities of all matching profiles                     |
| `PROFILE_PRIORITY_CONFLICT`                  | Two attached profiles share a priority                    | Change one priority                                                 |
| `PROFILE_UNKNOWN_TOOL`                       | The profile hides a tool the agent does not declare       | Add the tool to the agent or fix the name                           |
| `PROFILE_INVALID_WHEN`                       | The condition uses `===` or another unsupported operator  | Use `==`                                                            |
| `E105` unknown section `VOICE:` in an agent file | An inline profile contains a standalone-only section  | Move the profile to a standalone file                               |
| `E131` or `E132`                             | The profile has no `PRIORITY` or no `WHEN`                | Add the missing line                                                |
| `W498` on a flow step                        | `USE BEHAVIOR_PROFILE:` sits inside a step                | Move the line to the agent level                                    |
| Shared behavior changed unexpectedly         | A standalone profile is reused                            | Find all agents that use the profile before editing                 |

## Related HowTos

- How to write effective agent goals, personas, instructions, and limitations
- How to design channel-specific welcome experiences
