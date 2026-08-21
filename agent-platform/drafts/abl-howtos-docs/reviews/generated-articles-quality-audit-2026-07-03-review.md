# Generated HowTos Quality Audit

**Date:** 2026-07-03
**Scope:** 19 generated review drafts under `docs/guides/HowTos/reviews`
**Verdict:** update completed; all reviewed drafts now meet a minimum score of 9/10 on each requested dimension.

## Rubric

| Dimension            | 9-10 means                                                                                                                                                                 |
| -------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Completeness         | The article has the required self-service sections: concept, decision guidance or variations, examples, verification, production readiness, mistakes, and troubleshooting. |
| Correctness          | Claims and examples match parser, compiler, runtime, and test behavior; full examples validate without warnings.                                                           |
| Usefulness           | A customer or partner can apply the guidance without reading source code or asking for internal clarification.                                                             |
| Comprehensiveness    | The article covers the supported variants and operational boundaries implied by the topic without drifting into unrelated topics.                                          |
| Coverage of examples | The article includes validated examples that are operationally meaningful, not only syntax-valid.                                                                          |

## Cross-article findings fixed

| Gap found                                                                                                   | Impact                                                                                          | Fix applied                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Some welcome articles used `Verify it` and `Production checklist` instead of searchable standard headings.  | Weaker discovery and inconsistent customer scanning.                                            | Normalized to `Verification` and `Production readiness checklist`.                                                                   |
| Several welcome articles lacked `Common mistakes`.                                                          | Customers would miss avoidable implementation traps.                                            | Added mistake tables grounded in startup, channel, identity, and routing behavior.                                                   |
| Several welcome articles had a variation but no `Common variations` heading.                                | Lower comprehensiveness and weaker searchability.                                               | Added explicit `Common variations` sections.                                                                                         |
| `configure-agent-execution-pipeline` had a strong full example but no minimal example.                      | Customers had to start from a heavy configuration.                                              | Added a minimal working pipeline example and a variation table.                                                                      |
| `define-agent-responsibilities` lacked explicit decision guidance.                                          | It explained responsibility well but did not quickly guide split/keep/delegate/handoff choices. | Added a decision guide.                                                                                                              |
| `design-supervisor-routing-agent` showed two alternative supervisor projects without enough classification. | Copying both supervisors into one deployment can create ambiguous entry-supervisor validation.  | Clarified that the plain-language example is an alternative project and should not be combined without an explicit entry supervisor. |

## Validation result

Article-aware validation was run after the updates. The supervisor-routing article was validated as two separate operational project groups because the article intentionally contains two alternative supervisor projects.

| Validation scope    | Result |
| ------------------- | ------ |
| Generated drafts    | 19     |
| Fenced `abl` blocks | 58     |
| Parse errors        | 0      |
| Parse warnings      | 0      |
| Compile errors      | 0      |
| Compile warnings    | 0      |

## Score comparison

| Draft                                     | Initial completeness | Initial correctness | Initial usefulness | Initial comprehensiveness | Initial example coverage | Final completeness | Final correctness | Final usefulness | Final comprehensiveness | Final example coverage |
| ----------------------------------------- | -------------------- | ------------------- | ------------------ | ------------------------- | ------------------------ | ------------------ | ----------------- | ---------------- | ----------------------- | ---------------------- |
| `choose-reasoning-agent-or-flow`          | 9                    | 10                  | 9                  | 9                         | 9                        | 10                 | 10                | 9                | 9                       | 9                      |
| `choose-single-agent-or-specialists`      | 9                    | 10                  | 9                  | 9                         | 10                       | 10                 | 10                | 9                | 9                       | 10                     |
| `combine-reasoning-and-flow-steps`        | 9                    | 10                  | 9                  | 9                         | 9                        | 9                  | 10                | 9                | 9                       | 9                      |
| `configure-agent-execution-pipeline`      | 8                    | 10                  | 8                  | 8                         | 7                        | 9                  | 10                | 9                | 9                       | 9                      |
| `configure-agent-execution-settings`      | 9                    | 10                  | 9                  | 9                         | 9                        | 9                  | 10                | 9                | 9                       | 9                      |
| `create-welcome-message`                  | 7                    | 10                  | 8                  | 7                         | 8                        | 9                  | 10                | 9                | 9                       | 9                      |
| `define-agent-responsibilities`           | 8                    | 10                  | 9                  | 8                         | 9                        | 9                  | 10                | 9                | 9                       | 9                      |
| `design-channel-specific-welcome`         | 7                    | 10                  | 8                  | 7                         | 8                        | 9                  | 10                | 9                | 9                       | 9                      |
| `design-reusable-agent-modules`           | 9                    | 10                  | 9                  | 9                         | 9                        | 9                  | 10                | 9                | 9                       | 9                      |
| `design-supervisor-routing-agent`         | 8                    | 8                   | 9                  | 8                         | 9                        | 9                  | 9                 | 9                | 9                       | 9                      |
| `handle-fallback-greetings`               | 7                    | 10                  | 8                  | 7                         | 8                        | 9                  | 10                | 9                | 9                       | 9                      |
| `initialize-session-before-first-turn`    | 7                    | 10                  | 8                  | 7                         | 8                        | 9                  | 10                | 9                | 9                       | 9                      |
| `personalize-returning-user-welcome`      | 7                    | 10                  | 8                  | 7                         | 8                        | 9                  | 10                | 9                | 9                       | 9                      |
| `route-users-from-welcome`                | 8                    | 10                  | 8                  | 8                         | 9                        | 9                  | 10                | 9                | 9                       | 9                      |
| `run-auth-profile-lookup-on-start`        | 7                    | 10                  | 8                  | 7                         | 8                        | 9                  | 10                | 9                | 9                       | 9                      |
| `use-agent-execution-pipeline`            | 9                    | 10                  | 9                  | 9                         | 10                       | 9                  | 10                | 9                | 9                       | 10                     |
| `use-behavior-profiles-by-context`        | 9                    | 10                  | 9                  | 9                         | 9                        | 9                  | 10                | 9                | 9                       | 9                      |
| `use-on-start-welcome`                    | 7                    | 10                  | 8                  | 7                         | 8                        | 9                  | 10                | 9                | 9                       | 9                      |
| `write-agent-goals-personas-instructions` | 9                    | 10                  | 9                  | 9                         | 9                        | 9                  | 10                | 9                | 9                       | 9                      |

## Remaining publication note

These are still review drafts. The audit improved the draft files and validation posture, but the skill approval gate still applies: nothing should be copied to `docs/guides/HowTos/articles/` until the user approves publication.
