# HowTos Content Quality Audit

**Date:** 2026-06-26  
**Scope:** Drafts for topics 1.1 through 1.4 under `agent-platform/drafts/abl-howtos-docs/reviews/`  
**Verdict:** refresh needed before customer/partner review

## Review method

- Inspected the current HowTos skill rules.
- Reviewed all four draft articles for structure, concept clarity, terminology, and example quality.
- Extracted every fenced `abl` block from the four drafts.
- Validated complete examples through the built parser/compiler path using `packages/core/dist/index.js` and `packages/compiler/dist/index.js`.
- Validated section snippets where possible by wrapping them in a minimal `AGENT:` or `SUPERVISOR:` harness.
- Checked specific concerns for plain-language `WHEN` conditions and `AGENTS:`.

## Findings

| Severity | Finding                                                                                          | Evidence                                                                                                                                                                                                                           | Required fix                                                                                                                                           |
| -------- | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Critical | The prior quality gate was insufficient because examples were not required to parse and compile. | The drafts were marked as passing, but validation found one full-document compile error, many unaddressed compile warnings, and unlabeled fragments.                                                                               | The skill now requires an Example Validation Gate. Existing drafts must be refreshed under that gate.                                                  |
| High     | The articles use template-like sections that do not help these guides.                           | `Audience, prerequisites, and outcome` appears before concept explanation in topics 1.2, 1.3, and 1.4. Topic 1.1 has a similar `Before you start` section.                                                                         | Remove generic audience/prerequisite/outcome sections. Keep only concise setup details when necessary.                                                 |
| High     | Concept explanation is too late in the supervisor routing guide.                                 | The earlier supervisor draft jumped from intro to minimal example before explaining supervisor, specialist agent, routing, `AGENTS:`, and `HANDOFF`. The refreshed draft is `design-supervisor-routing-agent-2026-06-26-draft.md`. | Add a concept-first section before examples: what a supervisor is, what specialists are, why routing exists, and what constructs are executable.       |
| High     | Plain-language `WHEN` works better when quoted.                                                  | `WHEN: user is asking about billing` parses and compiles, but emits undefined-variable warnings for each word. `WHEN: "user is asking about billing"` parses and compiles without warnings.                                        | Use quoted natural-language `WHEN` text in customer examples, or explain warnings if unquoted text is intentional.                                     |
| High     | One full-document example has compile errors.                                                    | `choose-reasoning-agent-or-flow` block 2, `AGENT: Repair_And_Warranty`, references `TEMPLATE(warranty_status)` and `TEMPLATE(repair_estimate)` without defining those templates in the snippet.                                    | Either include the missing `TEMPLATES:` definitions or replace template calls with inline responses.                                                   |
| Medium   | Several full examples compile with warnings that are not disclosed or fixed.                     | Examples produce warnings such as missing tool parameter descriptions, undeclared intent category, undefined session variables, and variables without population sources.                                                          | Fix examples where possible. If a warning is acceptable for a shortened example, record it in evidence and state that the sample is abbreviated.       |
| Medium   | Some fenced `abl` blocks are fragments but are not labeled as snippets.                          | Context-only blocks in the supervisor routing guide and isolated `LIMITATIONS:` / `GATHER:` blocks in the responsibilities guide are not valid standalone ABL files.                                                               | Label snippets explicitly, or wrap them in complete examples. Do not present fragments as runnable examples.                                           |
| Medium   | `AGENTS:` is valid but easy to misunderstand.                                                    | Parser accepts `AGENTS:` roster entries, but compiler derives executable routing targets from `HANDOFF`, not from `AGENTS:` alone.                                                                                                 | Explain `AGENTS:` as an optional readable roster/validation surface before showing it in examples. Keep `HANDOFF` as the executable routing construct. |

## Validation summary

| Draft                                | Full examples                                                                | Compile errors                                                                                    | Notable warnings or gaps                                                                                                                         |
| ------------------------------------ | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `choose-reasoning-agent-or-flow`     | 3 full, 1 wrapped step                                                       | 1 full example has compile errors; wrapped deterministic step has expected missing-context errors | Missing template definitions; warnings on shortened examples.                                                                                    |
| `choose-single-agent-or-specialists` | 5 full                                                                       | 0                                                                                                 | Multiple warnings on missing tool parameter descriptions and session variables with no population source.                                        |
| `design-supervisor-routing-agent`    | 3 full, 4 wrapped snippets, 4 fragments                                      | 0                                                                                                 | Unquoted plain-language `WHEN` produces many warnings; several context snippets are fragments.                                                   |
| `define-agent-responsibilities`      | 4 full, 4 wrapped snippets, 2 section snippets requiring stronger harnessing | 0                                                                                                 | Tool parameter description warnings; isolated `LIMITATIONS:` and `GATHER:` snippets were not complete enough to validate as standalone sections. |

## Specific answers

### Does quoted plain-language `WHEN` work?

Yes. The parser keeps the quoted text, and the compiler does not emit undefined-variable warnings for the quoted condition. Unquoted natural-language `WHEN` also parses, but it compiles with undefined-variable warnings because words are interpreted as variable references.

Recommended customer-facing style:

```abl
WHEN: "user is asking about payment status, unpaid balance, invoice due date, or how to pay"
```

### Is `AGENTS:` valid?

Yes, `AGENTS:` is valid parser syntax for supervisor rosters. It is not the executable routing mechanism. Executable routing comes from `HANDOFF` entries, and compiled `available_agents` is derived from handoff targets.

## Recommended refresh plan

1. Update the skill rules so future articles require concept-first structure and example validation. Completed in this audit.
2. Refresh topic 1.3 first because it has the most visible issues in the screenshots.
3. Replace generic setup sections with a concept-first section.
4. Validate every code block and record results in evidence.
5. Fix or label every warning, fragment, and abbreviated example.
6. Rescore all four drafts only after parser/compiler validation passes.
