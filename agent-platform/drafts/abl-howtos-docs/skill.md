---
name: abl-howtos-docs
description: Use when creating, refreshing, auditing, or maintaining customer/partner-facing ABL HowTos documentation under agent-platform/drafts/abl-howtos-docs. The skill manages the L1/L2 topic inventory, performs comprehensive code-grounded scenario and variant discovery for each article, drafts conceptual and example-rich self-service HowTo articles, detects code changes that may impact existing articles, quality-scores drafts, and requires user review before updating published articles.
---

# ABL HowTos Docs

## Core Rule

Never use or cite repository prose docs outside `agent-platform/abl-reference/` as source material. Ground all technical claims in implementation code, tests, schemas, examples, and generated artifacts — not prose documentation.

Write articles as customer/partner-facing self-service documentation for customers, implementation partners, solution architects, and platform users who need to apply ABL patterns without reading source code. Keep inspected source paths and internal reasoning in the evidence file, not the article, unless the user explicitly asks for internal developer documentation.

Skip generic boilerplate sections (e.g. `Audience, prerequisites, and outcome`); fold prerequisite/outcome info into the opening or a short `Before you build` section only when truly needed. The article should read as a practical expert guide, not a template fill-in.

For architecture/design topics, explain the concept — what it is, why it exists, how the pieces relate, the decision model — before showing ABL. Examples should reinforce an already-understood concept, not introduce unexplained machinery.

## Topic Taxonomy and Search Terminology

Keep `topics.md` search-friendly and explicit. When adding or revising L1/L2 topics, use titles that name the exact platform surface instead of broad internal shorthand.

Pipeline topics must be differentiated by surface:

- `EXECUTION.pipeline` means the agent execution pipeline used for agent routing, classification, short-circuiting, model selection, thresholds, and fallbacks.
- `Knowledge Base ingestion pipeline` means the Knowledge Base indexing and ingestion path, including connector sync, extraction, chunking, enrichment, and indexing.
- `custom operational pipeline` or `Pipeline Engine` means a reusable operational pipeline with triggers, nodes, contracts, activity steps, run operations, redrive, cancellation, and analytics outputs.
- `workflow` means durable multi-step orchestration and long-running work, especially when the agent should invoke a workflow as a tool.

When a customer may confuse these surfaces, add or use a comparison article first, such as `choose-the-right-pipeline-type`, and make the article explain the decision boundary before documenting implementation steps. Do not let a title say only "pipeline" when the feature belongs to one of the surfaces above.

Use product-surface capitalization consistently in customer-searchable titles, such as `Knowledge Base`, `EXECUTION.pipeline`, `mTLS`, `Trace Dimensions`, and `SET _meta.*`.

Allowed sources:

- `agent-platform/drafts/abl-howtos-docs/topics.md`
- Existing HowTo articles under `agent-platform/drafts/abl-howtos-docs/articles/`
- ABL parser, AST, compiler IR, validators, runtime execution code, channel/runtime services, Studio API/UI code when relevant
- Tests that verify behavior
- ABL reference docs under `agent-platform/abl-reference/`
- Generated contracts or machine-readable schemas when they are produced by code

Disallowed sources:

- Existing `docs/` prose outside `agent-platform/drafts/abl-howtos-docs`
- Academy/module prose content
- Old reports, audits, plans, RFCs, reviews, or exploratory writeups

## Folder Contract

Use this structure:

```text
agent-platform/drafts/abl-howtos-docs/
  topics.md
  articles/
    <slug>.md
  reviews/
    <slug>-<YYYY-MM-DD>-review.md
    <slug>-<YYYY-MM-DD>-draft.md
  evidence/
    <slug>-<YYYY-MM-DD>-evidence.md
```

`topics.md` is the source of truth for L1/L2 topics. Do not invent article slugs when a topic already exists there. If a new topic is needed, add it to `topics.md` first and explain why.

Use feature-first file names for all dated HowTos working files: `<slug>-<YYYY-MM-DD>-<purpose>.md`. The slug or feature name must come first, followed by the date, followed by the file purpose such as `draft`, `review`, `evidence`, or `audit`. Do not create date-first files.

Keep evidence files in `evidence/` from the first code scan, even when the article is still waiting for user review. The `reviews/` folder is only for human-reviewable article drafts and proposed update reviews. The approval gate protects published article changes under `articles/`; it does not require evidence files to be staged in `reviews/`.

## Cursor Contract

Maintain the `Maintenance cursor` section in `topics.md`.

Use `Run cursor` for resumable multi-article work:

- Set `Run ID` to `<scope-slug>-<YYYY-MM-DD>` when starting a create/refresh run so the cursor sorts by topic or scope before date.
- Set `Scope` to the requested scope, such as `all`, `L1:13`, or a specific topic slug.
- Set `Status` to `running`, `paused`, `complete`, or `blocked`.
- Set `Next topic ID` before starting each article so an interrupted run can resume from the right point.
- Update `Last updated` whenever a topic finishes, blocks, or enters review.

Use `Article cursor` for per-topic state:

- Add a row when work starts on a topic.
- Keep one row per topic ID.
- Update `Status` after every meaningful transition: `drafting`, `review_pending`, `published`, `refresh_needed`, or `blocked`.
- Update `Last code scan` after code exploration.
- Update `Last draft/review` after creating a draft or refresh review.
- Update `Last published` only after publishing to `articles/`.
- Keep `Article path`, `Evidence path`, and `Resume notes` current.
- Remove the placeholder `_none_` row after the first real article cursor row is added.

When resuming, read the cursor before scanning code. Continue from `Next topic ID` unless the user names a different topic or scope.

## Scenario Discovery Gate

Run this gate before drafting or refreshing any article. Do not rely on one example, one parser branch, or one preferred pattern as proof of completeness.

For the topic being documented, create an evidence-backed scenario map that answers:

- What user goal or enterprise scenario is being solved?
- What ABL constructs can solve it?
- What syntax variants does the parser accept?
- What typed AST fields exist for the construct?
- How does the compiler lower each variant into IR?
- How does runtime/prompt/tool execution use the lowered data?
- What validators, warnings, defaults, ordering rules, fallbacks, or compatibility paths affect behavior?
- What examples or tests show real usage?
- What adjacent choices must the customer make next?
- What is unsupported, ambiguous, legacy-only, or intentionally out of scope?

Mandatory variant discovery paths:

- Parser entry points and section parsers, including shorthand forms and legacy aliases.
- Type definitions for the AST and IR surfaces.
- Compiler lowering and validation/preflight code.
- Runtime execution, prompt-building, tool-building, routing, state, trace, or channel paths that consume the lowered data.
- Tests and examples that use the construct in different ways.

Record the scenario map in the evidence file before writing the article. If fewer than two variants are found, explicitly record why the feature appears to have only one supported authoring path. If a likely variant is not confirmed in code, mark it as a gap instead of omitting it silently.

Use this table in every evidence file:

```markdown
## Scenario and variant map

| Scenario or variant | Supported? | Evidence                     | Article coverage             |
| ------------------- | ---------- | ---------------------------- | ---------------------------- |
| <variant>           | yes/no/gap | <code/test/example evidence> | covered/out of scope/blocked |
```

The article cannot pass the quality gate unless every `yes` row is covered or explicitly scoped out with a customer-facing reason.

## Operational Self-Service Gate

Run this gate after scenario discovery and before drafting. A compile-valid example is not sufficient. The article must help a customer build, run, verify, and troubleshoot the scenario in a real project.

This gate defines three rules referenced by name throughout the rest of this skill:

- **Operationally meaningful**: an example does more than parse/compile — it reflects a real, runnable, verifiable outcome a customer could reproduce in a project, not just valid syntax.
- **Companion-resource rule**: every target agent, tool, workflow, auth profile, memory field, context variable, or knowledge base the article references is either defined nearby or explicitly marked as a project-local assumption, and every referenced variable's source is stated (`PASS` field, interpolation field, gathered field, memory field, tool output, intent field, or context value).
- **Failure-path behaviors**: completion, fallback, no-match, multi-match, timeout, failure, and escalation behavior.

For every article, verify and record in the evidence file:

- Runtime semantics for the constructs the article teaches, not only parser/compiler syntax.
- Companion-resource rule compliance for every referenced resource and variable.
- How failure-path behaviors work when relevant.
- Whether examples are operationally meaningful, project-local assumptions, or intentionally partial.
- How a customer can verify the behavior through validation, a sample utterance or test case, trace/debug output, expected tool/handoff/delegate selection, expected context passing, and expected final response.
- What must be true before production use, including route distinctness, fallback path, target existence, permissions/data access, escalation path, traceability, and monitoring.

Use this table in every evidence file:

```markdown
## Operational readiness map

| Requirement                                  | Evidence                     | Article coverage             | Gap or action |
| -------------------------------------------- | ---------------------------- | ---------------------------- | ------------- |
| Runtime behavior verified                    | <code/test/runtime evidence> | covered/blocked              | <gap>         |
| Required companion resources identified      | <evidence>                   | covered/blocked              | <gap>         |
| Referenced variables have sources            | <evidence>                   | covered/blocked              | <gap>         |
| Fallback/failure/ambiguity behavior verified | <evidence>                   | covered/out of scope/blocked | <gap>         |
| Customer verification path defined           | <evidence>                   | covered/blocked              | <gap>         |
| Production readiness checklist included      | <evidence>                   | covered/blocked              | <gap>         |
```

The article cannot pass the quality gate when:

- A full-document example compiles but is not operationally meaningful.
- A supervisor/handoff example violates the companion-resource rule.
- A decision variable is set or referenced but never used in the example outcome.
- A routing article omits failure-path behaviors unless code evidence proves the surface does not support them and the article says so.
- Customer-facing verification only says "parse and compile"; that belongs in evidence, not the article body.

## Article Creation Workflow

For each requested article:

1. Locate the topic in `topics.md` and capture its ID, title, L1 category, and slug.
2. Update `Run cursor` and `Article cursor` before exploration:
   - Set the run to `running`.
   - Set the article status to `drafting`.
   - Set `Next topic ID` to the current topic ID.
3. Search implementation code with `rg`, starting from likely source areas:
   - `packages/core/src/types/`
   - `packages/core/src/parser/`
   - `packages/compiler/src/platform/ir/`
   - `packages/compiler/src/platform/constructs/`
   - `apps/runtime/src/services/`
   - `apps/runtime/src/routes/`
   - `apps/studio/src/`
   - `packages/*/src/__tests__/`
   - `apps/*/src/__tests__/`
   - `examples/`
4. Read the actual source before making syntax or behavior claims. Verify signatures, supported properties, defaults, runtime behavior, and validation constraints.
5. Run the Scenario Discovery Gate and write the scenario/variant map in the evidence file.
6. Update `Last code scan` in the article cursor after exploration.
7. Find realistic examples in `examples/` or tests. If no example exists, create examples from verified syntax only and call out the evidence path.
8. Run the Example Validation Gate for every fenced `abl` block before scoring the article.
9. Run the Operational Self-Service Gate and record the operational readiness map in the evidence file.
10. Draft the article as a HowTo:

- Start with the user goal.
- Explain the core concept and decision point before the first substantial example.
- Avoid generic audience/prerequisite/outcome sections unless the topic truly needs one.
- Give the minimal working ABL example after the concept is clear.
- Make examples operationally meaningful, per the Operational Self-Service Gate.
- Follow the companion-resource rule for every referenced agent/tool/workflow/variable.
- Include common variations.
- Include failure modes and troubleshooting.
- Include customer-facing verification steps that describe how to validate behavior in a project.
- Include a production-readiness checklist when the topic affects routing, tools, external systems, memory, knowledge, auth, or enterprise deployment.
- Link to related HowTos only when those files exist or are in the same planned update.

11. Include as many verified examples as the source evidence supports:

- One minimal example
- One realistic enterprise example when available
- Common variations for every supported variant in the scenario map
- Troubleshooting or failure examples when behavior is verified

12. Save the proposed article draft under `agent-platform/drafts/abl-howtos-docs/reviews/<slug>-<date>-draft.md`, not under `articles/`.
13. Record draft evidence in `agent-platform/drafts/abl-howtos-docs/evidence/<slug>-<date>-evidence.md` with source files inspected, tests/examples inspected, supported syntax/properties confirmed, scenario/variant map, operational readiness map, example validation results, and known gaps or ambiguous behavior.
14. Run the quality scoring gate before presenting the draft. If any criterion scores below 4, improve the article and evidence, then rescore. Do not conclude until every criterion is at least 4, or mark the article `blocked` if the missing quality cannot be achieved from code evidence.
15. Run the Red-Team Coverage Pass before presenting the draft.
16. Run the Persona Simulation Review before presenting the draft.
17. Record the quality scorecard and improvement loop in the evidence file.
18. Update the article cursor to `review_pending`, set `Last draft/review`, set `Evidence path` to `agent-platform/drafts/abl-howtos-docs/evidence/<slug>-<date>-evidence.md`, and set the review draft path in `Resume notes`.
19. Present the draft, evidence summary, final scorecard, variant map summary, operational readiness summary, example validation summary, persona review summary, and any remaining gaps to the user for review.
20. Wait for explicit user approval before publishing the article to `agent-platform/drafts/abl-howtos-docs/articles/<slug>.md`.
21. After approval and publication, update the article cursor to `published`, update `Last published`, and set `Article path` and `Evidence path`.
22. Run formatting on changed Markdown files before finishing.

## Article Template

Use this structure for article files:

````markdown
# <Search-friendly article title>

Use this pattern when <specific customer scenario>.

## Concept

<Explain the platform concept, why it exists, how the pieces relate, and how to decide whether to use it.>

## Minimal working example

```abl
<small complete example>
```

## How it works

<Conceptual explanation grounded in source behavior.>

## Common variations

### <Variation title>

```abl
<example>
```

## Verification

- <Customer-facing steps to validate syntax and behavior>
- <Sample utterances or test cases>
- <Expected route/tool/handoff/delegate selection>
- <Expected context passed or state changed>
- <Trace/debug output to inspect, when available>

## Production readiness checklist

- <Required target agents, tools, workflows, data, permissions, auth, memory, or knowledge resources>
- <Fallback or escalation path>
- <Test coverage for success, no-match, ambiguous, failure, and timeout paths>
- <Monitoring or trace checks>

## Common mistakes

| Mistake | Why it happens | How to avoid it |
| ------- | -------------- | --------------- |
| ...     | ...            | ...             |

## Troubleshooting

| Symptom | Likely cause | What to check |
| ------- | ------------ | ------------- |
| ...     | ...          | ...           |

## Related HowTos

- <Only existing or same-change article links>
````

## Quality Scoring Gate

Score every draft, refresh review, and proposed article update on a 1-5 scale before presenting it to the user. The pass threshold is 4 or higher for every criterion.

The score is invalid unless the evidence file contains all three: a completed Scenario and Variant Map, completed Example Validation results, and a completed Operational Readiness Map. Missing any one caps these criteria at 3 until fixed:

| Missing from evidence file | Criteria capped at 3                                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Scenario and Variant Map    | Grounding in the code, Coverage of examples, Completeness of workflow and failure modes, Scenario comprehensiveness, Article completeness    |
| Example validation results  | Grounding in the code, Coverage of examples, Customer/partner self-service readiness, Scenario comprehensiveness, Article completeness       |
| Operational Readiness Map   | Grounding in the code, Coverage of examples, Completeness of workflow and failure modes, Customer/partner self-service readiness, Scenario comprehensiveness, Article completeness |

| Criterion                                  | Score 4-5 means                                                                                                                        |
| ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| Grounding in the code                      | Every claim traces to code/tests/schemas/examples for every covered variant, per the Scenario Discovery Gate; unsupported claims are removed or flagged as gaps. |
| Depth of conceptual explanation            | Concept, decision model, rationale, and how runtime/compiler behavior affects the scenario are explained before examples, per the Core Rule. |
| Readability and usability                  | Scans easily, starts with the user goal, skips generic template sections, keeps examples close to their explanation.                    |
| Coverage of examples                       | Minimal and realistic examples are operationally meaningful; every scenario-map variant is covered or scoped out with a reason; troubleshooting examples are verified. |
| Search and discovery quality               | Title, headings, tables, and troubleshooting text use customer-searchable language per Topic Taxonomy.                                  |
| Completeness of workflow and failure modes | Every scenario-map path is covered: when to use it, when not to, how to verify it, failure-path behaviors, what to check next.          |
| Customer/partner self-service readiness    | Shareable externally; explains scenario/business context before internals; no internal repo paths or engineering-only language; no unnecessary boilerplate; evidence stays in the evidence file. |
| Scenario comprehensiveness                 | Covers every code-supported variant, decision point, constraint, default, boundary, and known gap from the scenario map, without scope creep. |
| Article completeness                       | Contains every required component from the Article Template.                                                                            |

Use this loop:

1. Score the current draft.
2. Check automatic fail conditions:
   - Any Scenario Discovery Gate or Operational Self-Service Gate failure condition listed in those sections (this covers missing/incomplete variant coverage, companion-resource rule violations, missing failure-path behaviors, and non-behavioral verification).
   - Any Example Validation Gate failure (parse/compile errors, unjustified warnings, or an unlabeled/unvalidated snippet).
   - The article relies on a single example while code supports multiple authoring paths.
   - The article documents parser syntax but not compiler/runtime behavior where runtime behavior matters.
   - The article treats an optional pattern as required.
   - The article starts with generic template sections instead of explaining the concept when the topic is conceptual or architectural.
3. If any automatic fail condition is present, assign 3 or lower to the affected criteria, improve the article and evidence, then rescore.
4. If every score is 4 or 5, record the scorecard in the evidence file and continue.
5. If any score is 1-3, identify concrete improvements, update the draft and evidence, then rescore.
6. Repeat until all scores are at least 4.
7. If a score cannot reach 4 without unsupported claims or invented examples, mark the article `blocked`, record the missing evidence, and ask the user for the missing implementation source or approval to narrow the article.

Record scorecards in the evidence file:

```markdown
## Quality scorecard

| Criterion                                  | Initial score | Improvements made | Final score |
| ------------------------------------------ | ------------- | ----------------- | ----------- |
| Grounding in the code                      |               |                   |             |
| Depth of conceptual explanation            |               |                   |             |
| Readability and usability                  |               |                   |             |
| Coverage of examples                       |               |                   |             |
| Search and discovery quality               |               |                   |             |
| Completeness of workflow and failure modes |               |                   |             |
| Customer/partner self-service readiness    |               |                   |             |
| Scenario comprehensiveness                 |               |                   |             |
| Article completeness                       |               |                   |             |

**Gate result:** pass | blocked
```

## Example Validation Gate

Every fenced `abl` block must be classified and validated before the quality gate can pass.

Use these classifications:

- `full-document`: a complete `AGENT:`, `SUPERVISOR:`, tool, workflow, or other complete ABL file that a customer should be able to copy and validate.
- `section-snippet`: a partial section such as `HANDOFF:`, `DELEGATE:`, `INTENTS:`, `MEMORY:`, `CONTEXT:`, `FLOW:`, `GOAL:`, or `GATHER:` that is shown to explain a focused construct.
- `illustrative-fragment`: a fragment that is intentionally not valid alone. Use this sparingly and label it clearly in the article.

Validation rules:

- Full-document examples must parse and compile with zero errors.
- Full-document compiler warnings must be fixed unless the warning is intentional and explained in the evidence file.
- Full-document examples must also satisfy the operationally-meaningful and companion-resource rules from the Operational Self-Service Gate.
- Section snippets must be validated by wrapping them in the smallest realistic `AGENT:` or `SUPERVISOR:` harness that exercises the section syntax.
- Snippets that cannot be harness-validated must be labeled as illustrative fragments in the article and must not be presented as copy-paste runnable.
- If a text condition is intended as semantic routing guidance, validate both parser and compiler behavior. Prefer quoted natural-language `WHEN` text when unquoted text compiles with undefined-variable warnings.
- Record the exact validation command or harness, block number, result, warnings, and follow-up action in the evidence file.

Use this table in every evidence file:

```markdown
## Example validation

| Article block | Classification | Validation method | Result | Warnings or errors | Action |
| ------------- | -------------- | ----------------- | ------ | ------------------ | ------ |
| Block 1       | full-document  | parse + compile   | pass   | none               | kept   |
```

## Red-Team Coverage Pass

Run this pass after the quality scorecard and before presenting the draft. The pass is a skeptical review whose job is to find what the author missed.

Answer these questions in the evidence file:

- Did I inspect parser, type, compiler, runtime/prompt/tool execution, tests, and examples for this topic?
- Did I search for synonyms and neighboring constructs, not only the first construct name? For example, for routing search `HANDOFF`, `routing`, `condition`, `intent`, `prompt`, `handoff_to_`, and `delegate`.
- Did I identify every supported authoring style, shorthand, legacy alias, default, and fallback?
- Did I distinguish optional helper sections from required executable configuration?
- Did I explain how the reasoning layer uses free-form guidance when the feature supports it?
- Did I avoid making a preferred pattern sound like the only pattern?
- Could a customer build the same scenario in another code-supported way that the article does not mention?
- If the user asked, "Are you not considering all scenarios?", what exact evidence would I show?

Record the result:

```markdown
## Red-team coverage pass

| Question | Result          | Evidence or correction |
| -------- | --------------- | ---------------------- |
| ...      | pass/fix-needed | ...                    |

**Coverage verdict:** pass | fix-needed | blocked
```

Do not present the article as review-ready while the coverage verdict is `fix-needed`.

## Persona Simulation Review

Run this review after the red-team pass and before presenting the draft. Read only the draft article body for this pass, then record simulated feedback in the evidence file from these personas:

- Senior platform architect who cares about runtime correctness, operational completeness, edge cases, and whether examples can actually run in a project.
- Senior content writer who cares about clarity, sequence, searchability, scannability, conceptual explanation, and whether the article reads like a customer guide instead of an internal validation report.
- Product manager or customer enablement lead who cares about self-service usefulness, decision guidance, go-live readiness, customer confusion, and whether the article helps partners implement without escalation.

Each persona must produce:

- Verdict: ready, needs-improvement, or blocked.
- Top strengths.
- Top gaps.
- Required changes before customer publication.

Use this table in every evidence file:

```markdown
## Persona simulation review

| Persona                             | Verdict                         | Strengths | Required improvements |
| ----------------------------------- | ------------------------------- | --------- | --------------------- |
| Senior platform architect           | ready/needs-improvement/blocked | ...       | ...                   |
| Senior content writer               | ready/needs-improvement/blocked | ...       | ...                   |
| Product manager/customer enablement | ready/needs-improvement/blocked | ...       | ...                   |
```

If any persona verdict is `needs-improvement` or `blocked`, update the article and evidence, then rerun the quality scorecard and persona review. Do not present the draft as review-ready until every persona is `ready` or until a remaining gap is explicitly recorded as blocked by missing implementation evidence.

## Refresh Workflow

Use this when the user asks to rerun, refresh, audit, or detect documentation drift. It runs the same gates as the Article Creation Workflow against an *existing* article and the *current* code. Differences from that workflow only:

1. Identify scope (single slug, L1 category, or all HowTos), read `Run cursor` to decide resume vs. new run, and update `Run cursor`/`Article cursor` before each article as in Article Creation Workflow step 2.
2. For each article, read its evidence file first. If evidence is missing, set article status to `refresh_needed` and create a review that requests fresh exploration instead of continuing this workflow.
3. Re-run code exploration starting from the original evidence's source list plus fresh `rg` searches for renamed/newly added constructs. When available, also inspect `git diff`, `git log`, or a changed-file list supplied by the user to focus the impact analysis.
4. Re-run the Scenario Discovery Gate and Operational Self-Service Gate, then diff the new scenario/variant map against the old one: new/removed/deprecated variants, changed defaults, changed parser syntax, changed compiler lowering, changed runtime/prompt/tool behavior, and example/test coverage added or removed. Update `Last code scan` in the article cursor.
5. Compare current code behavior with the published article (syntax, defaults, runtime behavior, tests/examples, removed/renamed/newly-supported features, new gotchas or verification paths) and record the diffed scenario/variant map, operational readiness map, and this impact analysis in a refreshed evidence file at `agent-platform/drafts/abl-howtos-docs/evidence/<slug>-<date>-evidence.md`.
6. Create a proposed update at `agent-platform/drafts/abl-howtos-docs/reviews/<slug>-<date>-review.md` using the Review File Format. Do not touch the published article yet.
7. Run the Quality Scoring Gate, Red-Team Coverage Pass, and Persona Simulation Review against the proposed update, exactly as in Article Creation Workflow steps 14-17, improving and rescoring until all pass.
8. Update the article cursor to `review_pending` if a change is proposed, `published` if no change is needed, or `blocked` if evidence is insufficient.
9. Present the review summary (slug, proposed changes, evidence, variant map diff, operational readiness summary, final scorecard, persona review summary, risk level, files that would change) and wait for explicit user approval before applying article changes.
10. After approval, update the article, set the article cursor to `published`, update `Last published`, and run formatting. When the requested scope completes, set `Run cursor` status to `complete` and `Next topic ID` to `_none_`.

## Review Feedback Loop

When user review identifies a missed supported scenario, variant, default, or runtime behavior:

1. Treat the finding as a skill failure, not merely an article typo.
2. Re-open the evidence and add the missing parser/type/compiler/runtime/example proof.
3. Update the scenario/variant map and mark the original gap.
4. Rescore the affected quality criteria with initial scores low enough to reflect the miss.
5. Update the article or review draft.
6. If the miss reveals a reusable process gap, update this skill before continuing with more articles.

## Approval Gate

Never update files under `agent-platform/drafts/abl-howtos-docs/articles/` as part of creation or refresh unless one of these is true:

- The user explicitly approved a specific review/draft in the current conversation.
- The user explicitly asked to publish directly and named the topic or slug.

When approval is missing, stop after creating the draft/review files and summarize what is ready for review.

## Review File Format

```markdown
# HowTo Review: <slug>

**Date:** <YYYY-MM-DD>
**Article:** `agent-platform/drafts/abl-howtos-docs/articles/<slug>.md`
**Topic:** <ID> - <title>
**Verdict:** no-change | update-needed | article-missing | evidence-missing

## Proposed changes

- <change>

## Evidence

| Claim | Current evidence | Impact |
| ----- | ---------------- | ------ |
| ...   | ...              | ...    |

## Files to update after approval

- `agent-platform/drafts/abl-howtos-docs/articles/<slug>.md`
- `agent-platform/drafts/abl-howtos-docs/evidence/<slug>-<date>-evidence.md`
```

## Quality Bar

- Every article must be code-grounded.
- Every article must be scenario-complete, not example-complete. A good example is not enough if code supports other meaningful ways to solve the same customer scenario.
- Every example must be operationally meaningful (Operational Self-Service Gate).
- Every article must pass the quality scoring gate with all criteria at 4 or 5 before it is presented as ready for review.
- Every customer-facing article must be self-service ready for customers and partners; keep source-inspection evidence out of the article body and in the evidence file.
- Customer-facing verification must describe how to prove behavior, not just that syntax validates.
- Every code example must use verified ABL syntax.
- Routing, handoff, delegate, workflow, tool, memory, auth, knowledge, and external-system topics must follow the companion-resource rule, cover failure-path behaviors, and include production-readiness checks.
- Prefer multiple realistic examples over abstract explanations, and include every useful verified variation that improves customer discovery.
- Never make a preferred or most common pattern sound like the only supported pattern. State when alternatives are also supported.
- If a feature can be authored declaratively, structurally, and through reasoning-guidance text, cover all supported modes or explicitly explain why one is out of scope.
- Keep the first example small enough to scan.
- Separate conceptual explanation from procedural steps.
- Include troubleshooting for likely customer search queries.
- Avoid documenting features that only appear in prose or design notes.
- If behavior is ambiguous in code, state the ambiguity in the review/evidence file and ask before publishing.
