# Evidence: validate-with-external-lookup-api

**Date:** 2026-11-20
**Topic:** 8.4 - How to validate values using an external lookup API
**Draft:** `agent-platform/drafts/abl-howtos-docs/reviews/validate-with-external-lookup-api-2026-11-20-draft.md`
**Release:** `hotfix_Artemis_1.10.1` (code repo read-only, branch head `856cf05a449`)
**Workflow:** New article. No prior draft or evidence.

## Validation harness

- Compile: `validateABL` bundled with esbuild (`node v.mjs <file>.abl`). Files use the prefix `84_`.
- Runtime: `resolveLookup` from `lookup-resolver.ts` bundled and run with a fake `fetch` (`p84.mjs`). Covers found, not found, HTTP 503, thrown error, circuit breaker, SSRF block.
- Not run: `validateWithLookupTables` (inside the large `flow-step-executor.ts`) and any live session. Its behavior comes from code reading and `lookup-fuzzy-confirmation.test.ts` and `post-extraction-lookup.test.ts`.

## Source files inspected

| File                                                                                                                    | Purpose                                                                                                                                                          |
| ----------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `apps/runtime/src/services/execution/lookup-resolver.ts`                                                                | `resolveLookup`: inline, collection, api. Cache (5 s api), circuit breaker (3 failures, 30 s), SSRF check, request shape, default timeout 5000 ms, `fuzzyMatch`. |
| `apps/runtime/src/services/execution/flow-step-executor.ts` (4440-4530, 21300-21390, 25595-25720)                       | `validateWithLookupTables`; FLOW post-extraction rejection and re-prompt; fuzzy confirmation and `_pending_fuzzy`.                                               |
| `apps/runtime/src/services/execution/reasoning-executor.ts` (7042-7110, 27912)                                          | `applyLookupValidationToExtractedValues` for the reasoning (global GATHER) path.                                                                                 |
| `apps/runtime/src/services/execution/lookup-table-merger.ts`                                                            | Agent plus project merge. Duplicate name throws `LookupTableConflictError`.                                                                                      |
| `apps/runtime/src/services/execution/llm-field-validator.ts`                                                            | LLM validation, fail-open on error and unparseable output.                                                                                                       |
| `packages/core/src/parser/agent-based-parser.ts` (15648-16040)                                                          | `LOOKUP_TABLES` parser, E480-E489, W480, sources, aliases `mongodb` and `http`, `headers` block.                                                                 |
| `packages/compiler/src/platform/ir/compiler.ts` (2027-2050)                                                             | Lowers to `ir.lookup_tables`. `fuzzy_threshold` default 0.85.                                                                                                    |
| `packages/compiler/src/platform/ir/validate-ir.ts` (4376-4392)                                                          | `AGENT_LOOKUP_TABLE_EXPERIMENTAL` warning.                                                                                                                       |
| `packages/compiler/src/platform/ir/project-runtime-config.ts` (1298-1430)                                               | Project `lookup_tables` mapping. Drops `headers`. Default `fuzzy_threshold` 0.8.                                                                                 |
| `apps/studio/src/components/settings/RuntimeConfigTab.tsx`, `packages/i18n/locales/en/studio.json` (12729-12751)        | Studio Lookup Tables section; "Project Canonical" and "Agent-local Experimental" labels.                                                                         |
| `apps/studio/src/app/api/projects/[id]/lookup-tables/[tableName]/{upload,entries}/route.ts`                             | Collection rows upload (CSV, JSON).                                                                                                                              |
| `apps/runtime/src/__tests__/{lookup-security,lookup-fuzzy-confirmation,post-extraction-lookup,lookup-resolver}.test.ts` | Tenant scoping, SSRF blocks, timeout, circuit breaker, fuzzy suggestion, rejection.                                                                              |
| `packages/core/src/parser/agent-based-parser.ts` (3881-4008)                                                            | CALL `ON_FAIL` block and inline forms.                                                                                                                           |
| `apps/studio/content/abl-reference/gather.mdx`                                                                          | Not used as a source.                                                                                                                                            |

## Scenario and variant map

| Scenario or variant                                                          | Supported?               | Evidence                                                                             | Article coverage         |
| ---------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------ | ------------------------ |
| `semantics: lookup` with a project table                                     | yes                      | `mergeLookupTables`; `validateWithLookupTables`                                      | covered                  |
| `inline` source, case handling, exact match                                  | yes                      | `resolveInlineLookup`; harness `lax` returns `LAX`                                   | covered                  |
| `inline` and `collection` fuzzy confirmation                                 | yes                      | `fuzzyMatch`; harness `LX` returns `LAX` with similarity 0.67; `_pending_fuzzy` path | covered, deferred to 8.5 |
| `collection` source with `table_name`                                        | yes                      | resolver; Studio upload routes                                                       | covered (brief)          |
| `api` source: GET with `value` and `field`, JSON `found` and `matched_value` | yes                      | resolver; harness spy printed the URL                                                | covered                  |
| `api` `matched_value` auto-applied without confirmation; no fuzzy for api    | yes                      | `validateWithLookupTables`: `similarity` undefined goes to the auto-apply branch     | covered                  |
| `api` timeout, `timeout_ms`, default 5000                                    | yes                      | resolver; test "times out"                                                           | covered                  |
| `api` HTTP error, thrown error, invalid JSON                                 | yes                      | harness: 503 gives `API HTTP 503`, thrown gives `API lookup failed`                  | covered                  |
| Circuit breaker: 3 failures, 30 s                                            | yes                      | harness printed `circuit breaker open`                                               | covered                  |
| SSRF block (localhost, RFC 1918, metadata)                                   | yes                      | harness; `lookup-security.test.ts`                                                   | covered                  |
| 5-second API cache                                                           | yes                      | `API_CACHE_TTL_MS`                                                                   | covered                  |
| Lookup error shown as "not a valid value"                                    | yes                      | `validateWithLookupTables`: `!found` includes errors                                 | covered                  |
| Sensitive field: value-free message, near match is a miss                    | yes                      | `validateWithLookupTables` (ABLP-6109)                                               | covered (one line)       |
| Project tables carry no custom `headers`; agent-local do                     | yes                      | `mapProjectRuntimeConfigDocumentToIR` omits `headers`; parser reads `headers`        | covered. See G3          |
| Agent-local `LOOKUP_TABLES`                                                  | yes, experimental        | `AGENT_LOOKUP_TABLE_EXPERIMENTAL`; harness 84_b                                      | covered                  |
| Duplicate table name in agent and project                                    | yes                      | `LookupTableConflictError`                                                           | covered. See G2          |
| Unknown table name in `semantics: lookup`                                    | yes, silent skip         | harness 84_a compiles clean; `validateWithLookupTables`: `if (!table) continue`      | covered as mistake       |
| Tool `CALL` in FLOW with `ON_RESULT` and `ON_FAIL`                           | yes                      | harness 84_c; parser 3881                                                            | covered                  |
| Reasoning agent calls a tool by goal guidance                                | yes, model-led           | harness 84_d; no runtime enforcement found                                           | covered with warning     |
| `validation_process: LLM`                                                    | yes, fail-open           | `llm-field-validator.ts` 223, 395, 411; harness 84_e                                 | covered                  |
| `validation_process: CODE`                                                   | gap                      | see 8.1 G2                                                                           | not covered              |
| Several matches from an API                                                  | no                       | Response contract is single `found` and `matched_value`                              | covered as limit         |
| Tool timeout value and tool retry policy                                     | gap                      | not read                                                                             | not covered              |
| Tool `ON_FAIL` fires on timeout and blocked call                             | gap (code read, not run) | parser; flow-step-executor ABLP-6979 comments                                        | stated generally         |

## Example validation

| Article block                  | Classification        | Validation method              | Result              | Warnings or errors                | Action                                                       |
| ------------------------------ | --------------------- | ------------------------------ | ------------------- | --------------------------------- | ------------------------------------------------------------ |
| Store_Return_Intake            | full-document         | `validateABL` (84_a)           | pass                | none                              | kept; table defined as project-local assumption              |
| Runtime Config `lookup_tables` | illustrative-fragment | not applicable (not ABL)       | labeled in article  | none                              | kept; field names from `mapProjectRuntimeConfigDocumentToIR` |
| API request and response       | illustrative-fragment | resolver harness               | request URL matches | none                              | kept                                                         |
| Order_Status_Agent             | full-document         | `validateABL` (84_c)           | pass                | none                              | kept; `find_order` marked project-local                      |
| Claim_Intake_Reasoning         | full-document         | `validateABL` (84_d)           | pass                | none                              | kept; `check_policy` defined in `TOOLS`                      |
| LLM snippet                    | section-snippet       | wrapped in Reason_Check (84_e) | pass                | none                              | kept                                                         |
| Airport_Pickup                 | full-document         | `validateABL` (84_b)           | pass                | `AGENT_LOOKUP_TABLE_EXPERIMENTAL` | kept; warning intentional and explained in the article       |

## Operational readiness map

| Requirement                                  | Evidence                                                                 | Article coverage | Gap or action                                                        |
| -------------------------------------------- | ------------------------------------------------------------------------ | ---------------- | -------------------------------------------------------------------- |
| Runtime behavior verified                    | Resolver run with fake fetch; `validateWithLookupTables` read plus tests | covered          | No live session. Run one against a real endpoint before publication. |
| Required companion resources identified      | Table, endpoint, and tool marked project-local                           | covered          | none                                                                 |
| Referenced variables have sources            | "Variable sources" under each full example                               | covered          | none                                                                 |
| Fallback/failure/ambiguity behavior verified | Failure table; harness results                                           | covered          | Tool-step `ON_FAIL` on timeout not run.                              |
| Customer verification path defined           | Utterance table, trace events                                            | covered          | Event names read from code, not seen in a live trace.                |
| Production readiness checklist included      | Yes                                                                      | covered          | none                                                                 |

## Quality scorecard

| Criterion                                  | Initial score | Improvements made                                                                                                                      | Final score |
| ------------------------------------------ | ------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| Grounding in the code                      | 4             | Corrected fuzzy claim for `api` tables after reading `validateWithLookupTables`. Softened session-failure wording to "conflict error". | 4           |
| Depth of conceptual explanation            | 4             | Added the four-method decision table.                                                                                                  | 4           |
| Readability and usability                  | 4             | Failure table, verification table.                                                                                                     | 4           |
| Coverage of examples                       | 4             | Five validated blocks.                                                                                                                 | 4           |
| Search and discovery quality               | 4             | Customer wording in headings and troubleshooting.                                                                                      | 4           |
| Completeness of workflow and failure modes | 4             | Down, timeout, miss, multi-match, cache, circuit.                                                                                      | 4           |
| Customer/partner self-service readiness    | 4             | No repo paths in the article.                                                                                                          | 4           |
| Scenario comprehensiveness                 | 4             | `CODE`, tool timeouts, and real-world endpoint auth recorded as gaps.                                                                  | 4           |
| Article completeness                       | 4             | All template sections present.                                                                                                         | 4           |

**Gate result:** pass, with gaps G1-G5 for the reviewer.

## Red-team coverage pass

| Question                                                                                                      | Result | Evidence or correction                                                              |
| ------------------------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------- |
| Inspected parser, type, compiler, runtime, tests, examples?                                                   | pass   | Source table. No `examples/` use of `LOOKUP_TABLES` found.                          |
| Searched neighbors (`semantics.lookup`, `LOOKUP_TABLES`, `validate`, tools, `ON_FAIL`, `validation_process`)? | pass   | Done.                                                                               |
| Every authoring style covered?                                                                                | pass   | Project table, agent table, inline, collection, api, tool, reasoning tool, LLM.     |
| Optional versus required separated?                                                                           | pass   | Lookup is optional on top of `type`.                                                |
| Reasoning guidance explained?                                                                                 | pass   | Reasoning-agent variation and its limit.                                            |
| Preferred pattern presented as only one?                                                                      | pass   | Four methods compared.                                                              |
| Another build path missed?                                                                                    | pass   | `ENTITIES` with lookup semantics belongs to the entities article. Not covered here. |
| Evidence if asked "Are you not considering all scenarios?"                                                    | pass   | Variant map.                                                                        |

**Coverage verdict:** pass

## Persona simulation review

| Persona                             | Verdict           | Strengths                                                       | Required improvements                                                                               |
| ----------------------------------- | ----------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Senior platform architect           | needs-improvement | Real resolver outputs; honest fail-closed and no-header limits. | Confirm G3 with product. Run a live session against a real endpoint.                                |
| Senior content writer               | ready             | Table-led, answer first.                                        | none                                                                                                |
| Product manager/customer enablement | needs-improvement | Decision table and failure table help partners choose.          | Decide how partners authenticate a lookup endpoint (G3). Today the options are a gateway or a tool. |

Residual items need product decisions or a live run, not more code reading.

## Known gaps and ambiguity (needs user decision)

- **G1. Absolute URLs.** The draft uses `https://stores.example.com/lookup` as a placeholder. Review per project rule.
- **G2. Duplicate name.** `LookupTableConflictError` is thrown by `mergeLookupTables`. What the customer sees was not traced.
- **G3. No auth header for project-level API tables.** The project mapper drops `headers`, and the Studio form shows no header field. Agent-local tables accept `headers:`. Confirm whether this is intended before the article tells partners to use a gateway or a tool.
- **G4. Unknown table name is silent.** `semantics: lookup: <typo>` compiles with no diagnostic and skips validation. Confirm whether a compile warning is planned.
- **G5. Reference-page claims not used.** `abl-reference/gather.mdx` was not consulted.
