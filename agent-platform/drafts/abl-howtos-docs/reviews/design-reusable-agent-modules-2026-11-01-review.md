# HowTo Review: design-reusable-agent-modules

**Date:** 2026-11-01
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/design-reusable-agent-modules.md`
**Topic:** 1.9 - How to design reusable agents and modules for large projects
**Verdict:** update-needed

## Proposed changes

- Refine the `HISTORY` table. `auto` uses the handoff `SUMMARY` when one is declared, and otherwise the last 5 messages.
- Add the `HISTORY` block form (`MODE:` and `COUNT:`) and a warning that an unrecognized value is ignored without a message.
- Add a short `RETURN: true` and `ON_RETURN` paragraph to "Shared specialist agent". The contract registry now marks `ON_RETURN` as wired.
- Add import-time dependency validation to the behavior profile variation and the manifest variation: a missing handoff or delegate target, a missing profile, and a cycle.
- Say that `USE BEHAVIOR_PROFILE:` belongs at the agent level (the parser now warns `W498` inside a flow step).
- Say that a module release can also carry workflows and knowledge assets.
- Add one verification step, one common mistake row, and one troubleshooting row for `HISTORY`.
- Keep every other section. All four `abl` blocks pass on 1.9.0. Module release behavior is unchanged in 1.9.0.

### Deletions

| Deleted text | Reason |
| ------------ | ------ |
| "The summary when that is safe, and otherwise a bounded amount of raw history." | Replaced with the exact `auto` rule from `resolveHistoryStrategy`. |
| "The release contains agents and tools. Its contract lists them." | Extended, not removed. Now names workflows and knowledge assets. |

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| `auto` uses the summary when declared, else last 5 | `resolveHistoryStrategy`, `DEFAULT_AUTO_HANDOFF_HISTORY_FALLBACK_LAST_N = 5` | Table row refined. |
| `HISTORY` block form works. Unknown values are dropped silently. | Parser, `compileHistoryStrategy`, harness IR | New text and rows. |
| `ON_RETURN` is wired | `abl-contract-registry.ts` diff, harness `retsup.abl` | New paragraph. |
| Import validation checks missing targets, profiles, cycles | `dependency-graph.ts`, `circular-detector.ts`, `import-validator.ts` | New sentences. |
| Module release logic unchanged | `git diff --stat` on `module-release/`: zod wrapper only | No module text change besides workflows and assets. |
| `E720`, `W721`, `INVALID_HANDOFF_TARGET` unchanged | `validate-cross-agent.ts` no diff. Harness. | No change. |
| Example validation | Evidence file, Example validation section | Blocks 1 to 4 pass, no warnings. |

## Scores and gates

Minimum final score 4. Gate result pass. Red-team verdict pass. All three personas ready. Details are in the evidence file.

## Items for human review

- Unrecognized `HISTORY` values give no diagnostic. Consider a compiler warning.
- The `ON_RETURN` paragraph is brief by design.
- Studio terms for module import (alias, release, contract) remain unverified.
- Mounted-name runtime resolution is verified at validation level only.

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/design-reusable-agent-modules.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/design-reusable-agent-modules-2026-11-01-evidence.md`

## Proposed article text

The text below replaces the article in full.

---

# How to design reusable agents and modules for large projects

Use this pattern when a project has many assistants, specialists, tools, and workflows that need to be composed without duplicating responsibilities or creating routing ambiguity.

## Concept

Reusable design in ABL starts with stable agent boundaries. A reusable agent owns a business capability, has a clear goal, accepts a predictable context package, and can be called from more than one supervisor or entry point.

Do not make reuse mean "one giant shared agent." Reuse works best when specialists are small enough to be reliable but broad enough to represent a durable business capability, such as product advice, order status, billing disputes, identity verification, or appointment scheduling.

Reuse happens at four levels. Pick the smallest level that solves the problem.

| Level | Reuse what | How |
| ----- | ---------- | --- |
| Inside one project | A specialist agent | Several supervisors hand off to the same agent |
| Inside one project | Behavior rules | One standalone behavior profile attached to several agents with `USE BEHAVIOR_PROFILE:` |
| Inside one project | Tool implementations | Project Tools, with signatures declared in each agent |
| Across projects | A set of agents and tools | A module release that other projects import |

For tools, validation rejects the removed `FROM ... USE` and `USE TOOL:` syntax in agent files with error `E720`. Keep agent files focused on agent behavior. Declare tool signatures in the agent and manage tool implementations in Project Tools.

## Minimal working example

```abl
SUPERVISOR: Commerce_Supervisor
GOAL: "Route shopping requests to reusable commerce specialists"
PERSONA: "Concise commerce routing supervisor"

HANDOFF:
  - TO: Product_Advisor
    WHEN: "The user asks for product recommendations, comparisons, or availability"
    PASS: [customer_id, locale]
    SUMMARY: "User needs shopping advice"
  - TO: Order_Status_Agent
    WHEN: "The user asks about an existing order, delivery, or return status"
    PASS: [customer_id, order_id]
    SUMMARY: "User needs order status help"
```

```abl
AGENT: Product_Advisor
GOAL: "Help customers compare products and choose the best option"
PERSONA: "Practical shopping advisor"
```

```abl
AGENT: Order_Status_Agent
GOAL: "Help customers understand order, delivery, and return status"
PERSONA: "Precise order support specialist"
```

This example assumes that your project sets `customer_id` and `locale` in the session before the handoff and gathers `order_id` earlier in the conversation. The example does not declare those sources, so add them to your supervisor.

Each handoff target must exist in the same compilation. Validate the three files together. The supervisor alone fails with `INVALID_HANDOFF_TARGET`.

## How it works

The supervisor is reusable because it routes to stable capability agents. The specialist agents are reusable because they describe their responsibility without depending on one specific entry point. The `PASS` fields are the integration contract between the supervisor and specialists.

In a large project, keep the reusable boundary visible in three places: the agent goal, the routing condition, and the context package. If those three disagree, reuse becomes fragile.

When a handoff omits `HISTORY`, the specialist receives the full conversation history. This is the platform default. Set `HISTORY` to change it:

| Value | Specialist receives |
| ----- | ------------------- |
| `full` | The full conversation history (default). |
| `summary_only` | The handoff `SUMMARY` and no raw history. Use it only when the summary carries what the specialist needs. |
| `last_N`, for example `last_5` | A bounded slice of the most recent history, sized by N. |
| `none` | No history. |
| `auto` | The handoff `SUMMARY` when the handoff declares one. Otherwise the last 5 messages. |

You can also write `HISTORY` as a block with `MODE:` and `COUNT:`. Use `MODE: last_n` with `COUNT: 3` for the same result as `last_3`. A `HISTORY` value that the compiler does not recognize, such as `lastfive`, raises no message. The handoff then uses the default `full`. Check the value against the table.

## Common variations

### Shared specialist agent

Use one specialist from several supervisors when the business capability is truly the same. For example, `Order_Status_Agent` can serve commerce chat, WhatsApp, and voice entry points if the required context is consistent.

A supervisor can set `RETURN: true` on the handoff so control comes back after the specialist finishes. `ON_RETURN` sets how the supervisor resumes. It accepts a built-in action or a named return handler, and it can map child fields to parent fields. Each supervisor that shares the specialist sets its own `ON_RETURN`.

### Channel-specific wrapper

Use a thin channel-specific supervisor when routing or welcome behavior differs by channel, while the underlying specialists remain shared.

### Shared behavior profile

Use a standalone behavior profile when several agents share the same channel or customer-context rule. Attach it with `USE BEHAVIOR_PROFILE:` in each agent, at the agent level and not inside a flow step. Changing the profile changes every agent that uses it. Project import validation reports a used profile that the archive does not contain. See the behavior profiles article for the details.

### Remote specialist

A handoff can target an agent that runs outside the project. Add `LOCATION: REMOTE`, an `ENDPOINT`, and a `PROTOCOL` to the `HANDOFF` entry. Use this when another team or system owns the specialist.

### Project manifest composition

The project manifest (`project.json`) lists the agents, the entry agent, the tools, and the behavior profiles. For each agent it can record the file path, `owner`, `ownerTeam`, description, and version. It also records the handoff and delegate references between agents. Keep agent names stable, because handoff targets depend on them. Project import validation reports a missing handoff or delegate target, a missing behavior profile, and a cycle of handoffs or delegates.

### Shared tool implementations

Manage reusable tool implementations in Project Tools. The agent declares only the tool signature. The Project Tool is the authority for the implementation. If an agent signature differs from the Project Tool, compilation raises warning `W721` with the changed fields. Implementation properties inside an agent `TOOLS` section raise an `E720` warning.

### Modules shared across projects

Use a module when another project needs your agents or tools. One project publishes a module release. Other projects import a release under an alias.

- What a release provides. The release contains agents and tools, and it can carry workflows and knowledge assets. Its contract lists them. The workflow and knowledge articles cover those assets.
- What a release requires. The contract lists every environment variable (`{{env.KEY}}`), auth profile, connector, MCP server, and config key (`{{config.KEY}}`) that the agents and tools use. The importing project must supply them.
- Mounted names. The importing project refers to a module agent as `alias__AgentName`. Use a double underscore. For example, an import with the alias `orders` exposes `orders__Order_Status_Agent`.
- Config values. The importing project sets non-secret config keys that the contract declares. A key that the contract does not declare cannot be set. Secret keys cannot be set as overrides.
- Peer modules. A module can require other modules without bundling them. The importing project must import each required module at a compatible version that provides the symbols the module uses. The version rule is exact (`3` or `=3`) or minimum (`>=2`). Import is blocked until the peers are present.
- Release selection. The importing project selects a release by version or by environment.
- Upgrades. An upgrade preview compares contracts. Removed agents or tools and new required prerequisites count as breaking changes. Added agents and tools, and removed prerequisites, do not.
- Publish safety. Publishing blocks HTTP tools that use literal credentials. Use an auth profile or a `{{env.KEY}}` or `{{config.KEY}}` template instead.

A supervisor in the importing project hands off to a module agent by its mounted name:

```abl
HANDOFF:
  - TO: orders__Order_Status_Agent
    WHEN: "The user asks about an existing order, delivery, or return status"
    PASS: [customer_id, order_id]
    SUMMARY: "User needs order status help"
```

This snippet assumes that the project imported a module under the alias `orders` and that the module release provides `Order_Status_Agent`.

## Verification

- Validate the full project group, not only one agent file.
- Confirm every handoff target exists in the same project or in an imported module.
- Test each reusable specialist from every entry point that can route to it.
- Confirm every `PASS` field has a source before handoff.
- Check the history each specialist receives. Ask a question that depends on an earlier message and confirm the answer matches your `HISTORY` setting.
- Inspect traces to prove the active agent changes to the intended specialist.
- For a module import, confirm that every required environment variable, auth profile, connector, MCP server, config key, and peer module exists in the importing project.
- Before you upgrade a module release, read the contract diff. Fix every breaking change first.

## Production readiness checklist

- Agent names are stable and unique.
- Each reusable agent has one durable business capability.
- Handoff context is minimal, explicit, and privacy-reviewed.
- Each handoff sets `HISTORY` on purpose when the specialist should not see the full history.
- Shared specialists have tests from each supervisor or channel entry point.
- Tool signatures match Project Tools. No `W721` warnings remain.
- Tool bindings and permissions are configured in Project Tools.
- Ownership is clear for shared modules so one team does not break another team's entry point.
- Module releases use auth profiles or templates, never literal credentials.
- Consumers of a module release pin a version, or use an environment selector that you control.

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| Reusing an agent with a vague goal | It feels flexible | Define a durable business capability |
| Passing too much context | Teams want reuse to be easy | Pass only fields the specialist needs |
| Misspelling a `HISTORY` value | The compiler ignores unknown values without a message | Use `full`, `summary_only`, `last_N`, `none`, or `auto` |
| Depending on removed tool import syntax | Older examples may still show it | Use Project Tools and declare signatures in the agent |
| Sharing specialists without shared tests | The first entry point works | Test every supervisor and channel that can call the specialist |
| Removing a module agent in a new release | The agent looks unused | Check the contract diff. A removed agent is a breaking change. |
| Writing the module alias with one underscore | The separator looks optional | Use `alias__AgentName` with two underscores |
| Hard-coding credentials in a module tool | It works in the author's project | Use an auth profile or a template |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| `INVALID_HANDOFF_TARGET`: target does not exist in this compilation | Agent name mismatch, missing project asset, or a file validated alone | Compare `TO:` targets with project agent names. Validate all agents together. |
| Handoff to `alias__Agent` fails validation | The module is not imported, or the alias differs | Compare the alias with the import. The message lists the known agents. |
| Specialist receives more or less history than expected | A `HISTORY` value is misspelled and the handoff uses `full` | Compare the value with the `HISTORY` table |
| Specialist gives entry-point-specific answers | Its goal or persona includes one channel or journey | Rewrite it around the reusable capability |
| A shared change breaks another flow | No owner or compatibility test for the module | Add cross-entry tests before changing shared specialists |
| `E720` on a tool line | Removed import syntax or implementation properties in the agent | Move the implementation to Project Tools |
| `W721` signature differs from project tool | The agent signature changed after the tool was set up | Update the agent signature or the Project Tool |
| Module import is blocked | A required peer module is missing, at an incompatible version, or lacks a symbol the module uses. A config override names an undeclared or secret key. | Read the peer requirements and the contract config keys, then fix the import |
| Module publish is blocked | A tool uses a literal credential | Switch to an auth profile or a template |

## Related HowTos

- How to decide whether to build one agent or multiple specialist agents
- How to design a supervisor that routes users to specialist agents
- How to use behavior profiles to change agent behavior by context
