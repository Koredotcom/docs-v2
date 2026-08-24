# ABL HowTos Topic Inventory

This file is the source of truth for the ABL HowTos section. Each L2 item is an article candidate with a search-friendly title, stable topic ID, and suggested slug.

## Maintenance cursor

Use this cursor to resume interrupted HowTos work. The skill updates these tables whenever it creates drafts, reviews articles, publishes articles, refreshes evidence, or stops mid-run.

### Run cursor

| Run ID                                      | Scope                                       | Status   | Started    | Last updated | Next topic ID | Notes                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| ------------------------------------------- | ------------------------------------------- | -------- | ---------- | ------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| accuracy-refresh-1-2-3-2026-08-21           | 1.1-1.11, 2.1-2.8, 3.1-3.9 accuracy refresh | complete | 2026-08-21 | 2026-08-21   | _none_        | All 28 articles across topics 1-3 refreshed against current hotfix_Artemis_1.4.4 code (no prior evidence existed, so each ran full fresh exploration per the Refresh Workflow's missing-evidence fallback). 10 verdict `no-change`, 18 verdict `update-needed`. Confirmed real drift: HANDOFF history default `auto`->`full` (ABLP-3301), a delegate WHEN guard double-validation fix (ABLP-3241), a root-level guard-variable parser fix (ABLP-2996, confirmed NOT wired into HANDOFF runtime evaluation), and a quoted-NL AND/OR/NOT case-sensitivity gotcha. Found and fixed 4 real bugs: `session.interaction.current.channel` (does not exist) in 3 welcome articles, and a risky `!= ""` identity guard in one. Corrected an internal auto-guard misconception (autoGuardConstraint only applies to CONSTRAINTS, never HANDOFF/SUPERVISOR WHEN) across several files before it reached any article. All 28 articles are now published: 25 approved and published in the first pass; the remaining 3 (route-with-supervisor-priority, route-by-role-channel-language-state, handle-multiple-intents) were held back pending manual review, had their evidence files rescored to close the quality-gate loop (including a Related HowTos accuracy fix) per user request, then approved and published. |
| routing-orchestration-batch-2026-07-04      | 3.1-3.9 routing and orchestration           | complete | 2026-07-04 | 2026-07-04   | 4.1           | Created nine review drafts and evidence files for routing, fallback, multi-intent, active-agent switching, and trace debugging.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| generated-articles-quality-audit-2026-07-03 | 19 generated review drafts                  | complete | 2026-07-03 | 2026-07-03   | _none_        | Deep critique completed; all generated drafts now score at least 9/10 on completeness, correctness, usefulness, comprehensiveness, and examples.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| all-howtos-generation-2026-07-03            | all                                         | paused   | 2026-07-03 | 2026-07-04   | 4.1           | Full-corpus generation in progress; completed review drafts and evidence for topics 1.10-1.11, 2.1-2.8, and 3.1-3.9. Resume at handoff/delegate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| agent-architecture-next-five-2026-06-26     | 1.5-1.9 agent architecture                  | complete | 2026-06-26 | 2026-06-26   | _none_        | Created five review drafts and evidence files for reasoning/FLOW, instructions, behavior profiles, execution settings, and reusable modules.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| operational-self-service-refresh-2026-06-26 | 1.1-1.4 agent architecture                  | complete | 2026-06-26 | 2026-06-26   | _none_        | Updated four drafts under the operational self-service gate with project-level examples, verification, production readiness, and persona review.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| howtos-filename-convention-2026-06-26       | HowTos file naming convention               | complete | 2026-06-26 | 2026-06-26   | _none_        | Updated the skill and existing HowTos working files to feature-first naming.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| rebuild-existing-drafts-2026-06-26          | 1.1-1.4 agent architecture                  | complete | 2026-06-26 | 2026-06-26   | _none_        | Rebuilt four drafts under updated skill: concept-first content, warning-free examples, evidence files, and scorecards.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| content-quality-audit-2026-06-26            | 1.1-1.4 draft quality and validation        | complete | 2026-06-26 | 2026-06-26   | _none_        | Audit found concept-first, boilerplate, and example-validation gaps; drafts require refresh before customer review.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| agent-architecture-refresh-2026-06-26       | 1.1-1.4 agent architecture                  | complete | 2026-06-26 | 2026-06-26   | _none_        | Refreshed evidence under updated scenario/variant map, red-team coverage, and quality gates; drafts remain waiting for review.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| supervisor-routing-refresh-2026-06-26       | 1.3 design-supervisor-routing-agent         | paused   | 2026-06-26 | 2026-06-26   | _none_        | Refreshed draft to cover intent category, structured condition, and plain-language routing styles.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| agent-architecture-batch-2026-06-25         | 1.2-1.4 agent architecture                  | paused   | 2026-06-25 | 2026-06-25   | _none_        | Drafts for topics 1.2, 1.3, and 1.4 passed the quality gate and are waiting for user review.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| choose-reasoning-agent-or-flow-2026-06-25   | 1.1 choose-reasoning-agent-or-flow          | paused   | 2026-06-25 | 2026-06-25   | 1.1           | Draft passed the expanded quality gate, including comprehensiveness and completeness.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

### Article cursor

Add one row per topic after work starts on that topic. If a topic is absent from this table, no article work has started yet.

| ID   | Slug                                    | Status    | Last code scan | Last draft/review | Last published | Article path                                                                                | Evidence path                                                                                                   | Resume notes                                                                                                                                                                                                                                                                               |
| ---- | --------------------------------------- | --------- | -------------- | ----------------- | -------------- | ------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 1.1  | choose-reasoning-agent-or-flow          | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/choose-reasoning-agent-or-flow.md`          | `agent-platform/drafts/abl-howtos-docs/evidence/choose-reasoning-agent-or-flow-2026-08-21-evidence.md`          | Refreshed 2026-08-21, verdict no-change (no HANDOFF/DELEGATE/MEMORY exposure). Review at `reviews/choose-reasoning-agent-or-flow-2026-08-21-review.md`.                                                                                                                                    |
| 1.2  | choose-single-agent-or-specialists      | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/choose-single-agent-or-specialists.md`      | `agent-platform/drafts/abl-howtos-docs/evidence/choose-single-agent-or-specialists-2026-08-21-evidence.md`      | Refreshed 2026-08-21, verdict update-needed (HANDOFF history default note only). Review at `reviews/choose-single-agent-or-specialists-2026-08-21-review.md`.                                                                                                                              |
| 1.3  | design-supervisor-routing-agent         | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/design-supervisor-routing-agent.md`         | `agent-platform/drafts/abl-howtos-docs/evidence/design-supervisor-routing-agent-2026-08-21-evidence.md`         | Refreshed 2026-08-21, verdict update-needed (HANDOFF history default note only). Review at `reviews/design-supervisor-routing-agent-2026-08-21-review.md`.                                                                                                                                 |
| 1.4  | define-agent-responsibilities           | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/define-agent-responsibilities.md`           | `agent-platform/drafts/abl-howtos-docs/evidence/define-agent-responsibilities-2026-08-21-evidence.md`           | Refreshed 2026-08-21, verdict update-needed (HANDOFF history default note only). Review at `reviews/define-agent-responsibilities-2026-08-21-review.md`.                                                                                                                                   |
| 1.5  | combine-reasoning-and-flow-steps        | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/combine-reasoning-and-flow-steps.md`        | `agent-platform/drafts/abl-howtos-docs/evidence/combine-reasoning-and-flow-steps-2026-08-21-evidence.md`        | Refreshed 2026-08-21, verdict no-change (MODE deprecation claim re-verified accurate).                                                                                                                                                                                                     |
| 1.6  | write-agent-goals-personas-instructions | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/write-agent-goals-personas-instructions.md` | `agent-platform/drafts/abl-howtos-docs/evidence/write-agent-goals-personas-instructions-2026-08-21-evidence.md` | Refreshed 2026-08-21, verdict update-needed (HANDOFF history default note only).                                                                                                                                                                                                           |
| 1.7  | use-behavior-profiles-by-context        | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/use-behavior-profiles-by-context.md`        | `agent-platform/drafts/abl-howtos-docs/evidence/use-behavior-profiles-by-context-2026-08-21-evidence.md`        | Refreshed 2026-08-21, verdict no-change (PRIORITY/WHEN/CEL evaluation re-verified accurate).                                                                                                                                                                                               |
| 1.8  | configure-agent-execution-settings      | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-settings.md`      | `agent-platform/drafts/abl-howtos-docs/evidence/configure-agent-execution-settings-2026-08-21-evidence.md`      | Refreshed 2026-08-21, verdict no-change (every EXECUTION field, incl. camelCase forms, re-verified against parser).                                                                                                                                                                        |
| 1.9  | design-reusable-agent-modules           | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/design-reusable-agent-modules.md`           | `agent-platform/drafts/abl-howtos-docs/evidence/design-reusable-agent-modules-2026-08-21-evidence.md`           | Refreshed 2026-08-21, verdict update-needed (HANDOFF history default note only).                                                                                                                                                                                                           |
| 1.10 | use-agent-execution-pipeline            | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/use-agent-execution-pipeline.md`            | `agent-platform/drafts/abl-howtos-docs/evidence/use-agent-execution-pipeline-2026-08-21-evidence.md`            | Refreshed 2026-08-21, verdict update-needed (HANDOFF history default note only).                                                                                                                                                                                                           |
| 1.11 | configure-agent-execution-pipeline      | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/configure-agent-execution-pipeline.md`      | `agent-platform/drafts/abl-howtos-docs/evidence/configure-agent-execution-pipeline-2026-08-21-evidence.md`      | Refreshed 2026-08-21, verdict update-needed (HANDOFF history default note only).                                                                                                                                                                                                           |
| 2.1  | create-welcome-message                  | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/create-welcome-message.md`                  | `agent-platform/drafts/abl-howtos-docs/evidence/create-welcome-message-2026-08-21-evidence.md`                  | Refreshed 2026-08-21, verdict no-change (dsl_on_start/dsl_respond trace names and BUTTON syntax re-verified).                                                                                                                                                                              |
| 2.2  | use-on-start-welcome                    | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/use-on-start-welcome.md`                    | `agent-platform/drafts/abl-howtos-docs/evidence/use-on-start-welcome-2026-08-21-evidence.md`                    | Refreshed 2026-08-21, verdict update-needed: bug found -- `session.interaction.current.channel` does not exist; fixed to `session.channel`.                                                                                                                                                |
| 2.3  | personalize-returning-user-welcome      | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/personalize-returning-user-welcome.md`      | `agent-platform/drafts/abl-howtos-docs/evidence/personalize-returning-user-welcome-2026-08-21-evidence.md`      | Refreshed 2026-08-21, verdict no-change (CALL-failure-continues behavior re-verified exactly accurate).                                                                                                                                                                                    |
| 2.4  | run-auth-profile-lookup-on-start        | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/run-auth-profile-lookup-on-start.md`        | `agent-platform/drafts/abl-howtos-docs/evidence/run-auth-profile-lookup-on-start-2026-08-21-evidence.md`        | Refreshed 2026-08-21, verdict update-needed: risk-based fix -- `session.account_id != ""` is not a proven unset-guard here; changed to `IS SET`.                                                                                                                                           |
| 2.5  | route-users-from-welcome                | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/route-users-from-welcome.md`                | `agent-platform/drafts/abl-howtos-docs/evidence/route-users-from-welcome-2026-08-21-evidence.md`                | Refreshed 2026-08-21, verdict update-needed (HANDOFF history default note; clarified dual top-level+flow-step GATHER).                                                                                                                                                                     |
| 2.6  | initialize-session-before-first-turn    | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/initialize-session-before-first-turn.md`    | `agent-platform/drafts/abl-howtos-docs/evidence/initialize-session-before-first-turn-2026-08-21-evidence.md`    | Refreshed 2026-08-21, verdict update-needed: same session.interaction.current.channel bug as 2.2, fixed to session.channel.                                                                                                                                                                |
| 2.7  | design-channel-specific-welcome         | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/design-channel-specific-welcome.md`         | `agent-platform/drafts/abl-howtos-docs/evidence/design-channel-specific-welcome-2026-08-21-evidence.md`         | Refreshed 2026-08-21, verdict update-needed: same channel-path bug, here breaking the voice/text branch selection; fixed to session.channel.                                                                                                                                               |
| 2.8  | handle-fallback-greetings               | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/handle-fallback-greetings.md`               | `agent-platform/drafts/abl-howtos-docs/evidence/handle-fallback-greetings-2026-08-21-evidence.md`               | Refreshed 2026-08-21, verdict no-change (top-level-RESPOND-as-BRANCHES-fallback behavior re-verified exactly accurate).                                                                                                                                                                    |
| 3.1  | route-by-user-intent                    | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/route-by-user-intent.md`                    | `agent-platform/drafts/abl-howtos-docs/evidence/route-by-user-intent-2026-08-21-evidence.md`                    | Refreshed 2026-08-21, verdict update-needed: HANDOFF history default now `full` (was `auto`), missing MEMORY declarations for passed variables, undocumented history strategies, missing ON_FAILURE fallback. Review at `reviews/route-by-user-intent-2026-08-21-review.md`.               |
| 3.2  | route-with-supervisor-priority          | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/route-with-supervisor-priority.md`          | `agent-platform/drafts/abl-howtos-docs/evidence/route-with-supervisor-priority-2026-08-21-evidence.md`          | Refreshed 2026-08-21, verdict update-needed. Review at `reviews/route-with-supervisor-priority-2026-08-21-review.md`.                                                                                                                                                                      |
| 3.3  | route-by-role-channel-language-state    | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/route-by-role-channel-language-state.md`    | `agent-platform/drafts/abl-howtos-docs/evidence/route-by-role-channel-language-state-2026-08-21-evidence.md`    | Refreshed 2026-08-21, verdict update-needed. Review at `reviews/route-by-role-channel-language-state-2026-08-21-review.md`.                                                                                                                                                                |
| 3.4  | route-by-tool-result-or-memory          | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/route-by-tool-result-or-memory.md`          | `agent-platform/drafts/abl-howtos-docs/evidence/route-by-tool-result-or-memory-2026-08-21-evidence.md`          | Refreshed 2026-08-21, verdict update-needed: auto-guard behavior, HANDOFF history default, and quoted-NL AND/OR/NOT wording gotcha added. Review at `reviews/route-by-tool-result-or-memory-2026-08-21-review.md`.                                                                         |
| 3.5  | route-to-fallback-agent                 | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/route-to-fallback-agent.md`                 | `agent-platform/drafts/abl-howtos-docs/evidence/route-to-fallback-agent-2026-08-21-evidence.md`                 | Refreshed 2026-08-21, verdict update-needed. Core ON_RETURN/MAP/resume_intent pattern confirmed still accurate. Review at `reviews/route-to-fallback-agent-2026-08-21-review.md`.                                                                                                          |
| 3.6  | handle-multiple-intents                 | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/handle-multiple-intents.md`                 | `agent-platform/drafts/abl-howtos-docs/evidence/handle-multiple-intents-2026-08-21-evidence.md`                 | Refreshed 2026-08-21, verdict update-needed. Review at `reviews/handle-multiple-intents-2026-08-21-review.md`.                                                                                                                                                                             |
| 3.7  | clarify-before-routing                  | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/clarify-before-routing.md`                  | `agent-platform/drafts/abl-howtos-docs/evidence/clarify-before-routing-2026-08-21-evidence.md`                  | Refreshed 2026-08-21, verdict update-needed: quoted-NL AND/OR/NOT case-sensitivity gotcha documented. Review at `reviews/clarify-before-routing-2026-08-21-review.md`.                                                                                                                     |
| 3.8  | switch-active-agent                     | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/switch-active-agent.md`                     | `agent-platform/drafts/abl-howtos-docs/evidence/switch-active-agent-2026-08-21-evidence.md`                     | Refreshed 2026-08-21, verdict update-needed. Confirmed root-level guard-variable parser fix (ABLP-2996) does not affect this article's runtime WHEN evaluation. Review at `reviews/switch-active-agent-2026-08-21-review.md`.                                                              |
| 3.9  | debug-routing-traces                    | published | 2026-08-21     | 2026-08-21        | 2026-08-21     | `agent-platform/drafts/abl-howtos-docs/articles/debug-routing-traces.md`                    | `agent-platform/drafts/abl-howtos-docs/evidence/debug-routing-traces-2026-08-21-evidence.md`                    | Refreshed 2026-08-21, verdict update-needed: several trace event names/fields were undocumented (route_condition_unresolved, handoff_condition_suppressed, etc.), invalid `session.interaction.current.channel` path fixed. Review at `reviews/debug-routing-traces-2026-08-21-review.md`. |

Allowed article statuses:

- `not_started` - no article work has started.
- `drafting` - code exploration or article drafting is in progress.
- `review_pending` - a draft or refresh review exists and is waiting for user approval.
- `published` - article and canonical evidence are up to date as of the recorded scan.
- `refresh_needed` - code changes or missing evidence indicate the article needs review.
- `blocked` - work cannot continue without user input or missing implementation evidence.

## 1. Agent architecture and design

| ID   | Article title                                                                         | Suggested slug                          |
| ---- | ------------------------------------------------------------------------------------- | --------------------------------------- |
| 1.1  | How to choose between a reasoning agent and a FLOW-based agent                        | choose-reasoning-agent-or-flow          |
| 1.2  | How to decide whether to build one agent or multiple specialist agents                | choose-single-agent-or-specialists      |
| 1.3  | How to design a supervisor that routes users to specialist agents                     | design-supervisor-routing-agent         |
| 1.4  | How to define clear responsibilities for each enterprise agent                        | define-agent-responsibilities           |
| 1.5  | How to combine reasoning steps with deterministic FLOW steps                          | combine-reasoning-and-flow-steps        |
| 1.6  | How to write effective agent goals, personas, instructions, and limitations           | write-agent-goals-personas-instructions |
| 1.7  | How to use behavior profiles to change agent behavior by context                      | use-behavior-profiles-by-context        |
| 1.8  | How to configure model, timeout, and execution settings for an agent                  | configure-agent-execution-settings      |
| 1.9  | How to design reusable agents and modules for large projects                          | design-reusable-agent-modules           |
| 1.10 | How to use EXECUTION.pipeline for agent routing, classification, and short-circuiting | use-agent-execution-pipeline            |
| 1.11 | How to configure EXECUTION.pipeline models, modes, thresholds, and fallbacks          | configure-agent-execution-pipeline      |

## 2. Conversation entry and welcome experience

| ID  | Article title                                                     | Suggested slug                       |
| --- | ----------------------------------------------------------------- | ------------------------------------ |
| 2.1 | How to create a welcome message for a new conversation            | create-welcome-message               |
| 2.2 | How to use ON_START to greet users before the first message       | use-on-start-welcome                 |
| 2.3 | How to personalize a welcome message for returning users          | personalize-returning-user-welcome   |
| 2.4 | How to run an authentication or profile lookup during welcome     | run-auth-profile-lookup-on-start     |
| 2.5 | How to route users from the welcome experience to the right agent | route-users-from-welcome             |
| 2.6 | How to initialize session variables before the first user turn    | initialize-session-before-first-turn |
| 2.7 | How to design channel-specific welcome experiences                | design-channel-specific-welcome      |
| 2.8 | How to handle empty-state and fallback greetings                  | handle-fallback-greetings            |

## 3. Routing and multi-agent orchestration

| ID  | Article title                                                     | Suggested slug                       |
| --- | ----------------------------------------------------------------- | ------------------------------------ |
| 3.1 | How to route conversations based on user intent                   | route-by-user-intent                 |
| 3.2 | How to route conversations using supervisor priority rules        | route-with-supervisor-priority       |
| 3.3 | How to route users by role, channel, language, or session state   | route-by-role-channel-language-state |
| 3.4 | How to route conversations based on tool results or memory values | route-by-tool-result-or-memory       |
| 3.5 | How to route unclear requests to a fallback agent                 | route-to-fallback-agent              |
| 3.6 | How to handle users with multiple intents in one message          | handle-multiple-intents              |
| 3.7 | How to ask a clarification question before routing                | clarify-before-routing               |
| 3.8 | How to switch the active agent during a conversation              | switch-active-agent                  |
| 3.9 | How to debug routing decisions in traces                          | debug-routing-traces                 |

## 4. Handoff, delegate, escalate, and complete

| ID   | Article title                                              | Suggested slug                    |
| ---- | ---------------------------------------------------------- | --------------------------------- |
| 4.1  | When to use HANDOFF instead of DELEGATE                    | use-handoff-instead-of-delegate   |
| 4.2  | When to use DELEGATE instead of HANDOFF                    | use-delegate-instead-of-handoff   |
| 4.3  | When to escalate a conversation to a human                 | escalate-to-human                 |
| 4.4  | How to end a conversation with COMPLETE                    | end-conversation-with-complete    |
| 4.5  | How to transfer control to another agent and return later  | returnable-agent-handoff          |
| 4.6  | How to transfer control permanently to another agent       | terminal-agent-handoff            |
| 4.7  | How to call a sub-agent and map its result back            | delegate-and-map-result           |
| 4.8  | How to run multiple delegated agents in parallel           | parallel-agent-delegation         |
| 4.9  | How to package context for human escalation                | package-human-escalation-context  |
| 4.10 | How to resume after a child agent or human agent completes | resume-after-child-or-human-agent |

## 5. Context passing between agents

| ID  | Article title                                                 | Suggested slug                     |
| --- | ------------------------------------------------------------- | ---------------------------------- |
| 5.1 | How to pass specific fields between agents                    | pass-fields-between-agents         |
| 5.2 | How to pass a conversation summary during handoff             | pass-summary-during-handoff        |
| 5.3 | How to pass full, recent, or no conversation history          | choose-handoff-history-scope       |
| 5.4 | How to choose the right history strategy for handoff          | choose-handoff-history-strategy    |
| 5.5 | How to minimize context for privacy and compliance            | minimize-agent-context             |
| 5.6 | How to grant another agent access to memory                   | grant-memory-access-to-agent       |
| 5.7 | How to map child-agent outputs back to parent-agent variables | map-child-agent-outputs            |
| 5.8 | How to preserve context when calling remote agents            | preserve-context-for-remote-agents |
| 5.9 | How to debug missing or incorrect context after handoff       | debug-handoff-context              |

## 6. Data collection and entity gathering

| ID   | Article title                                                | Suggested slug                       |
| ---- | ------------------------------------------------------------ | ------------------------------------ |
| 6.1  | How to collect information with global GATHER                | collect-with-global-gather           |
| 6.2  | How to collect information inside a FLOW step                | collect-with-flow-gather             |
| 6.3  | How to collect required and optional fields from users       | collect-required-and-optional-fields |
| 6.4  | How to collect multiple fields across a natural conversation | collect-multiple-fields-naturally    |
| 6.5  | How to progressively collect fields only when needed         | progressively-collect-fields         |
| 6.6  | How to silently extract values without asking the user       | silently-extract-values              |
| 6.7  | How to infer values from conversation context                | infer-values-from-context            |
| 6.8  | How to confirm inferred values before using them             | confirm-inferred-values              |
| 6.9  | How to collect sensitive or PII fields safely                | collect-sensitive-pii-fields         |
| 6.10 | How to collect lists, ranges, preferences, and attachments   | collect-complex-field-shapes         |

## 7. Entities, NLU, and intent understanding

| ID   | Article title                                                      | Suggested slug                  |
| ---- | ------------------------------------------------------------------ | ------------------------------- |
| 7.1  | How to define reusable entities for structured extraction          | define-reusable-entities        |
| 7.2  | How to use enum entities with synonyms                             | use-enum-entities-with-synonyms |
| 7.3  | How to extract pattern-based values like IDs and phone numbers     | extract-pattern-based-values    |
| 7.4  | How to extract dates, numbers, locations, and free text            | extract-common-entity-types     |
| 7.5  | How to normalize user language into canonical values               | normalize-user-language         |
| 7.6  | How to define intents with examples and keyword patterns           | define-intents-with-examples    |
| 7.7  | How to use scoped sub-intents inside a flow step                   | use-scoped-sub-intents          |
| 7.8  | How to handle digressions without losing the current flow          | handle-flow-digressions         |
| 7.9  | How to detect multiple intents in one user message                 | detect-multiple-intents         |
| 7.10 | How to improve intent matching with domain glossary and embeddings | improve-intent-matching         |

## 8. Validation and business rules

| ID   | Article title                                         | Suggested slug                    |
| ---- | ----------------------------------------------------- | --------------------------------- |
| 8.1  | How to validate collected fields by type              | validate-fields-by-type           |
| 8.2  | How to validate fields with enums and allowed values  | validate-fields-with-enums        |
| 8.3  | How to validate fields with regex or custom patterns  | validate-fields-with-regex        |
| 8.4  | How to validate values using an external lookup API   | validate-with-external-lookup-api |
| 8.5  | How to use fuzzy matching for misspelled user input   | use-fuzzy-matching                |
| 8.6  | How to make one field depend on another field         | create-field-dependencies         |
| 8.7  | How to enforce business rules with constraints        | enforce-business-constraints      |
| 8.8  | How to block tool calls when required data is missing | block-tool-calls-with-constraints |
| 8.9  | How to show recovery prompts when validation fails    | recover-from-validation-failures  |
| 8.10 | How to choose between constraints and guardrails      | choose-constraints-or-guardrails  |

## 9. Flow control and deterministic conversation design

| ID   | Article title                                                      | Suggested slug                  |
| ---- | ------------------------------------------------------------------ | ------------------------------- |
| 9.1  | How to create a deterministic conversation with FLOW               | create-deterministic-flow       |
| 9.2  | How to define step order and entry points in a flow                | define-flow-steps-and-entry     |
| 9.3  | How to use REASONING false for predictable steps                   | use-deterministic-flow-steps    |
| 9.4  | How to use REASONING true for flexible reasoning zones             | use-reasoning-zones-in-flow     |
| 9.5  | How to branch on user input with ON_INPUT                          | branch-with-on-input            |
| 9.6  | How to handle tool success and failure with ON_SUCCESS and ON_FAIL | handle-tool-success-and-failure |
| 9.7  | How to branch on tool results with ON_RESULT                       | branch-with-on-result           |
| 9.8  | How to set, clear, and transform session variables in a flow       | manage-flow-variables           |
| 9.9  | How to handle digressions and resume the original flow             | resume-after-flow-digression    |
| 9.10 | How to limit retries and recover from exhausted attempts           | limit-flow-retries              |

## 10. Memory and state management

| ID    | Article title                                                     | Suggested slug                 |
| ----- | ----------------------------------------------------------------- | ------------------------------ |
| 10.1  | How to use session memory during a conversation                   | use-session-memory             |
| 10.2  | How to use persistent memory across conversations                 | use-persistent-memory          |
| 10.3  | How to store user-scoped and project-scoped memory                | use-memory-scopes              |
| 10.4  | How to initialize and reset memory variables                      | initialize-and-reset-memory    |
| 10.5  | How to remember facts after a successful interaction              | remember-facts-after-success   |
| 10.6  | How to recall memory when a new session starts                    | recall-memory-on-session-start |
| 10.7  | How to inject recalled memory into the agent context              | inject-recalled-memory         |
| 10.8  | How to expire stored facts with TTL                               | expire-memory-with-ttl         |
| 10.9  | How to protect sensitive memory paths                             | protect-sensitive-memory       |
| 10.10 | How to manage conversation history windows and context compaction | manage-history-and-compaction  |

## 11. Tools and external system integration

| ID    | Article title                                                      | Suggested slug                     |
| ----- | ------------------------------------------------------------------ | ---------------------------------- |
| 11.1  | How to connect an agent to an HTTP API tool                        | connect-http-api-tool              |
| 11.2  | How to connect an agent to MCP tools                               | connect-mcp-tools                  |
| 11.3  | How to use Lambda and sandbox tools                                | use-lambda-and-sandbox-tools       |
| 11.4  | How to define shared tools in tools.abl files                      | define-shared-tool-files           |
| 11.5  | How to design tool parameters and return values                    | design-tool-parameters-and-returns |
| 11.6  | How to map tool results into session variables                     | map-tool-results                   |
| 11.7  | How to require confirmation before side-effecting tools            | require-tool-confirmation          |
| 11.8  | How to use auth profiles and just-in-time authentication for tools | use-tool-auth-profiles             |
| 11.9  | How to handle tool retries, timeouts, and failures                 | handle-tool-failures               |
| 11.10 | How to inspect tool calls in traces                                | inspect-tool-traces                |

## 12. Workflow as a tool

| ID    | Article title                                                 | Suggested slug                  |
| ----- | ------------------------------------------------------------- | ------------------------------- |
| 12.1  | When to use a workflow as an agent tool                       | use-workflow-as-tool            |
| 12.2  | How to call a long-running workflow from an agent             | call-long-running-workflow      |
| 12.3  | How to use workflows for approvals, waits, and scheduled work | use-workflows-for-durable-work  |
| 12.4  | How to bind a workflow trigger to a tool                      | bind-workflow-trigger-to-tool   |
| 12.5  | How to map agent inputs into workflow inputs                  | map-agent-inputs-to-workflow    |
| 12.6  | How to map workflow outputs back to the agent                 | map-workflow-outputs-to-agent   |
| 12.7  | How to handle workflow errors and timeouts                    | handle-workflow-tool-errors     |
| 12.8  | How to version workflow tools safely                          | version-workflow-tools          |
| 12.9  | How to verify workflow deployment readiness                   | verify-workflow-readiness       |
| 12.10 | How to observe workflow tool execution                        | observe-workflow-tool-execution |

## 13. Knowledge bases and retrieval

| ID    | Article title                                                  | Suggested slug                    |
| ----- | -------------------------------------------------------------- | --------------------------------- |
| 13.1  | When to use a knowledge base for an agent                      | use-knowledge-base-for-agent      |
| 13.2  | How to connect a knowledge base as an agent tool               | connect-knowledge-base-tool       |
| 13.3  | How to use SearchAI-generated knowledge base tools             | use-searchai-kb-tools             |
| 13.4  | How to choose hybrid, vector, or keyword search                | choose-search-strategy            |
| 13.5  | How to reformulate user questions for better retrieval         | reformulate-queries-for-retrieval |
| 13.6  | How to use fallback search tools when a KB is unavailable      | use-kb-fallback-tools             |
| 13.7  | How to return answers with citations and source attribution    | return-cited-kb-answers           |
| 13.8  | How to enforce permission-aware knowledge retrieval            | enforce-permission-aware-search   |
| 13.9  | How to tune chunking, ranking, and retrieval quality           | tune-retrieval-quality            |
| 13.10 | How to troubleshoot knowledge base indexing and search results | troubleshoot-kb-indexing-search   |

## 14. External agents and A2A

| ID    | Article title                                        | Suggested slug                         |
| ----- | ---------------------------------------------------- | -------------------------------------- |
| 14.1  | When to connect to an external agent                 | connect-external-agent                 |
| 14.2  | How to hand off to a remote A2A agent                | handoff-to-remote-a2a-agent            |
| 14.3  | How to call external agents synchronously            | call-external-agent-synchronously      |
| 14.4  | How to stream responses from an external A2A agent   | stream-external-a2a-responses          |
| 14.5  | How to use async A2A callbacks for long-running work | use-async-a2a-callbacks                |
| 14.6  | How to configure remote agent cards and endpoints    | configure-remote-agent-card            |
| 14.7  | How to pass bounded history to an external agent     | pass-bounded-history-to-external-agent |
| 14.8  | How to authenticate remote agent calls               | authenticate-remote-agent-calls        |
| 14.9  | How to exchange files with external agents           | exchange-files-with-external-agents    |
| 14.10 | How to debug remote A2A handoff failures             | debug-remote-a2a-handoff               |

## 15. Response design, templates, and rich content

| ID    | Article title                                                            | Suggested slug                       |
| ----- | ------------------------------------------------------------------------ | ------------------------------------ |
| 15.1  | How to create reusable named response templates                          | create-named-response-templates      |
| 15.2  | How to use template interpolation with session variables                 | use-template-interpolation           |
| 15.3  | How to generate structured templates for enterprise responses            | generate-structured-templates        |
| 15.4  | How to return markdown, tables, lists, charts, and forms                 | return-rich-content                  |
| 15.5  | How to add quick replies and action buttons                              | add-quick-replies-and-actions        |
| 15.6  | How to handle user clicks with ON_ACTION                                 | handle-on-action-clicks              |
| 15.7  | How to create channel-native responses for Slack, WhatsApp, or web       | create-channel-native-responses      |
| 15.8  | How to define fallback text for channels that cannot render rich content | define-rich-content-fallbacks        |
| 15.9  | How to validate template references and missing variables                | validate-template-references         |
| 15.10 | How to design response templates for accessibility and clarity           | design-accessible-response-templates |

## 16. Channel and modality experience

| ID    | Article title                                                     | Suggested slug                      |
| ----- | ----------------------------------------------------------------- | ----------------------------------- |
| 16.1  | How to design conversations for Web SDK chat                      | design-web-sdk-conversations        |
| 16.2  | How to design conversations for REST or WebSocket sessions        | design-rest-websocket-conversations |
| 16.3  | How to design conversations for A2A channel sessions              | design-a2a-channel-conversations    |
| 16.4  | How to adapt rich content by channel capability                   | adapt-rich-content-by-channel       |
| 16.5  | How to handle file and attachment support by channel              | handle-channel-attachments          |
| 16.6  | How to design WhatsApp-style interactive conversations            | design-whatsapp-style-conversations |
| 16.7  | How to configure channel-specific fallbacks                       | configure-channel-fallbacks         |
| 16.8  | How to use behavior profiles for different channels               | use-channel-behavior-profiles       |
| 16.9  | How to support multimodal and file-based inputs                   | support-multimodal-inputs           |
| 16.10 | How to show waiting and status messages while an agent is working | show-waiting-status-messages        |

## 17. Voice and realtime conversations

| ID   | Article title                                           | Suggested slug                 |
| ---- | ------------------------------------------------------- | ------------------------------ |
| 17.1 | How to write voice-friendly agent responses             | write-voice-friendly-responses |
| 17.2 | How to use SSML and voice-specific response settings    | use-ssml-and-voice-settings    |
| 17.3 | How to configure speaking style, tone, and pace         | configure-voice-speaking-style |
| 17.4 | How to handle barge-in, pauses, and unclear audio       | handle-voice-turn-taking       |
| 17.5 | How to read back numbers, codes, and critical details   | read-back-critical-details     |
| 17.6 | How to phrase handoffs in a voice conversation          | phrase-voice-handoffs          |
| 17.7 | How to design low-latency voice flows                   | design-low-latency-voice-flows |
| 17.8 | How to define fallback behavior for voice failures      | define-voice-fallbacks         |
| 17.9 | How to observe and troubleshoot realtime voice behavior | troubleshoot-realtime-voice    |

## 18. Safety, compliance, and guardrails

| ID    | Article title                                             | Suggested slug             |
| ----- | --------------------------------------------------------- | -------------------------- |
| 18.1  | How to add input guardrails to block unsafe user messages | add-input-guardrails       |
| 18.2  | How to add output guardrails to protect agent responses   | add-output-guardrails      |
| 18.3  | How to guard tool inputs and tool outputs                 | guard-tool-inputs-outputs  |
| 18.4  | How to guard handoff context before transfer              | guard-handoff-context      |
| 18.5  | How to redact or mask PII in conversations                | redact-mask-pii            |
| 18.6  | How to use provider-based safety checks                   | use-provider-safety-checks |
| 18.7  | How to use LLM-based safety checks                        | use-llm-safety-checks      |
| 18.8  | How to re-ask, fix, filter, or block unsafe content       | handle-unsafe-content      |
| 18.9  | How to escalate safety risks to a human                   | escalate-safety-risks      |
| 18.10 | How to audit safety decisions in traces                   | audit-safety-traces        |

## 19. Authentication, authorization, and identity

| ID    | Article title                                                          | Suggested slug                         |
| ----- | ---------------------------------------------------------------------- | -------------------------------------- |
| 19.1  | How to support anonymous and authenticated users                       | support-anonymous-authenticated-users  |
| 19.2  | How to require identity verification before sensitive actions          | require-identity-verification          |
| 19.3  | How to enforce tool-level identity requirements                        | enforce-tool-identity-requirements     |
| 19.4  | How to use auth profiles for external tools                            | use-auth-profiles                      |
| 19.5  | How to trigger just-in-time authentication during a conversation       | trigger-just-in-time-auth              |
| 19.6  | How to use OAuth-backed tools safely                                   | use-oauth-backed-tools                 |
| 19.7  | How to preserve tenant, project, and user isolation                    | preserve-resource-isolation            |
| 19.8  | How to pass identity context during handoff                            | pass-identity-context                  |
| 19.9  | How to combine identity checks with permission-aware search            | combine-identity-and-permission-search |
| 19.10 | How to configure mTLS auth profiles for tools and connectors           | configure-mtls-auth-profiles           |
| 19.11 | How to validate and troubleshoot mTLS certificates and HTTPS endpoints | troubleshoot-mtls-auth-profiles        |

## 20. Error handling and resilience

| ID   | Article title                                                | Suggested slug                   |
| ---- | ------------------------------------------------------------ | -------------------------------- |
| 20.1 | How to define agent-level error handling                     | define-agent-error-handling      |
| 20.2 | How to override errors at a specific flow step               | override-step-error-handling     |
| 20.3 | How to handle tool timeouts and tool failures                | handle-tool-timeouts-failures    |
| 20.4 | How to handle LLM, routing, and agent-unavailable errors     | handle-runtime-agent-errors      |
| 20.5 | How to retry failed operations with backoff                  | retry-with-backoff               |
| 20.6 | How to choose between continue, retry, handoff, and escalate | choose-error-recovery-action     |
| 20.7 | How to design fallback agents and fallback tools             | design-fallback-agents-tools     |
| 20.8 | How to recover gracefully when a system is unavailable       | recover-from-system-unavailable  |
| 20.9 | How to troubleshoot errors using runtime traces              | troubleshoot-with-runtime-traces |

## 21. Observability, testing, and evaluation

| ID    | Article title                                                            | Suggested slug                  |
| ----- | ------------------------------------------------------------------------ | ------------------------------- |
| 21.1  | How to read traces for agent execution                                   | read-agent-execution-traces     |
| 21.2  | How to inspect routing, handoff, and delegate traces                     | inspect-orchestration-traces    |
| 21.3  | How to inspect GATHER and FLOW step traces                               | inspect-gather-flow-traces      |
| 21.4  | How to inspect tool call and tool result traces                          | inspect-tool-call-traces        |
| 21.5  | How to inspect memory read and write traces                              | inspect-memory-traces           |
| 21.6  | How to inspect guardrail and safety traces                               | inspect-guardrail-traces        |
| 21.7  | How to write manual test scenarios for conversations                     | write-manual-conversation-tests |
| 21.8  | How to write E2E tests for agent workflows                               | write-agent-e2e-tests           |
| 21.9  | How to create eval cases for routing and response quality                | create-agent-eval-cases         |
| 21.10 | How to debug retrieval quality, latency, and cost                        | debug-quality-latency-cost      |
| 21.11 | How to add custom trace dimensions with SET \_meta.\*                    | add-custom-trace-dimensions     |
| 21.12 | How to build custom dashboards from trace dimensions                     | build-custom-trace-dashboards   |
| 21.13 | How to choose safe trace dimensions without high-cardinality or PII risk | govern-trace-dimensions         |

## 22. Deployment, packaging, and lifecycle

| ID    | Article title                                                          | Suggested slug                |
| ----- | ---------------------------------------------------------------------- | ----------------------------- |
| 22.1  | How to structure an ABL project for import and deployment              | structure-abl-project         |
| 22.2  | How to import and export agents, tools, workflows, and knowledge bases | import-export-project-assets  |
| 22.3  | How to configure environment and project variables                     | configure-project-environment |
| 22.4  | How to validate tool bindings before deployment                        | validate-tool-bindings        |
| 22.5  | How to validate workflow bindings before deployment                    | validate-workflow-bindings    |
| 22.6  | How to provision knowledge bases for a deployed agent                  | provision-knowledge-bases     |
| 22.7  | How to version agents and workflows safely                             | version-agents-workflows      |
| 22.8  | How to publish, roll back, and promote deployments                     | publish-rollback-promote      |
| 22.9  | How to prepare an enterprise agent for production readiness            | prepare-production-readiness  |
| 22.10 | How to create operational runbooks for deployed agents                 | create-agent-runbooks         |

## 23. Enterprise conversation patterns

| ID    | Article title                                              | Suggested slug                        |
| ----- | ---------------------------------------------------------- | ------------------------------------- |
| 23.1  | How to build a customer support triage agent               | build-customer-support-triage         |
| 23.2  | How to build an authenticated account-servicing agent      | build-account-servicing-agent         |
| 23.3  | How to build order tracking, returns, and refund flows     | build-order-return-refund-flows       |
| 23.4  | How to build claims, appeals, and case-management flows    | build-claims-appeals-case-flows       |
| 23.5  | How to build appointment booking and scheduling flows      | build-appointment-scheduling-flows    |
| 23.6  | How to build loan, application, or intake workflows        | build-application-intake-workflows    |
| 23.7  | How to build payment, transfer, and approval flows         | build-payment-transfer-approval-flows |
| 23.8  | How to build policy Q&A over enterprise knowledge bases    | build-policy-qa-agent                 |
| 23.9  | How to build internal HR, IT, and employee helpdesk agents | build-employee-helpdesk-agents        |
| 23.10 | How to build compliance, fraud, and risk review agents     | build-compliance-risk-review-agents   |
| 23.11 | How to build multilingual support agents                   | build-multilingual-support-agents     |
| 23.12 | How to build voice IVR replacement agents                  | build-voice-ivr-replacement-agent     |
| 23.13 | How to build human-agent assist experiences                | build-human-agent-assist              |
| 23.14 | How to build external-agent collaboration workflows        | build-external-agent-collaboration    |

## 24. Knowledge Base connector setup and ingestion pipelines

| ID   | Article title                                                                                                      | Suggested slug                          |
| ---- | ------------------------------------------------------------------------------------------------------------------ | --------------------------------------- |
| 24.1 | How to complete a Knowledge Base connector setup from auth to first sync                                           | complete-kb-connector-setup             |
| 24.2 | How to verify connector authentication, permissions, and mTLS readiness for Knowledge Bases                        | verify-kb-connector-auth-permissions    |
| 24.3 | When to use Knowledge Base ingestion pipelines instead of default indexing                                         | use-kb-ingestion-pipelines              |
| 24.4 | How to choose and configure a Knowledge Base ingestion pipeline for extraction, chunking, enrichment, and indexing | configure-kb-ingestion-pipeline         |
| 24.5 | How to monitor and troubleshoot Knowledge Base connector sync and ingestion pipeline runs                          | troubleshoot-kb-connector-pipeline-runs |

## 25. Custom operational pipelines and Pipeline Engine operations

| ID   | Article title                                                                                                             | Suggested slug                    |
| ---- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| 25.1 | How to choose between EXECUTION.pipeline, Knowledge Base ingestion pipelines, custom operational pipelines, and workflows | choose-the-right-pipeline-type    |
| 25.2 | When to create a custom operational pipeline instead of an agent, tool, or workflow                                       | choose-custom-pipeline            |
| 25.3 | How to create a custom operational pipeline from a template or blank graph                                                | create-custom-pipeline            |
| 25.4 | How to configure custom pipeline triggers, nodes, contracts, and activity steps                                           | configure-custom-pipeline-graph   |
| 25.5 | How to test, activate, deactivate, and clone custom operational pipelines                                                 | operate-custom-pipelines          |
| 25.6 | How to redrive, cancel, and troubleshoot custom operational pipeline runs                                                 | troubleshoot-custom-pipeline-runs |
| 25.7 | How to use custom operational pipeline results in analytics and dashboards                                                | use-custom-pipeline-results       |
