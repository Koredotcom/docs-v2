---
title: Artemis release notes
description: Stay up to date with the latest platform updates, new features, and enhancements.
rss: true
sidebarTitle: Recent product updates
---

## November 2026

<a id="v-1-10-1"></a>

<Badge color="green"> <b>v1.10.1</b>, November 20, 2026 </Badge>

This release brings AWS IAM access key support for external agents and configurable tool result caching. The Google Drive connector now supports shared drives, and bar charts in agent responses have new axis and label options. Sessions also include a full conversation export and detail page refinements.


<p className="rn-heading">Agent builder experience</p>

<p className="rn-title">External agents: AWS IAM access keys support</p>

External agents can now use an `aws_iam` profile with access keys, in addition to assuming a role. Assume role stays the default and the recommended mode. Use access keys where the runtime has no AWS workload identity. The runtime signs every A2A call with the stored keys, including agent card, send, stream, get task, cancel, handoff, and test connection requests. Connection verification tests credentials directly via `STS GetCallerIdentity`, and error codes provide detailed troubleshooting diagnostics without exposing sensitive secrets. [Learn more →](/agent-platform/external-agent#register-an-external-agent)

<p className="rn-title">Dynamic parameters in UCP agent profile URIs</p>

The agent profile URI that an MCP server sends in Universal Commerce Protocol (UCP) mode can now contain `{{input.X}}` placeholders. Add each name under Parameters with a default value. Studio lists and imports tools with the default profile. At runtime, the values a call sends replace the defaults. A missing value, or a result that is not an http(s) URL, fails before the connection opens. [Learn more →](/agent-platform/tools/mcp#configure-connection-settings)

<p className="rn-title">Tool result caching controls</p>

Studio now highlights cached tool calls and their age in the chat Debug panel and Sessions page. A new Result Caching section on the project tool page lets you toggle caching, map it to variables, set cache duration, and assign write tools to trigger cache invalidation. Failed calls and results are not cached.

You can configure `cacheable` and `cache_ttl_ms` via environment or configuration variables, allowing dynamic runtime updates across environments without republishing. [Learn more →](/agent-platform/abl/reference/tools#set-caching-with-variables)

```yaml wrap
cacheable: {{env.ORDERS_CACHE_ENABLED}}
cache_ttl_ms: {{config.ORDERS_CACHE_TTL_MS}}

# Caches only on calls where ORDERS_CACHE_ENABLED reads true. The lifetime comes from ORDERS_CACHE_TTL_MS.
```

<p className="rn-heading">Knowledge base</p>

<p className="rn-title">Google Drive shared drives and advanced filters</p>

The Google Drive connector now supports shared drives. Pick a shared drive in the connector wizard, add shared-with-me folder IDs as extra folder roots, and narrow what syncs with the new advanced filters. The same options are available in the connector settings panel.


<p className="rn-heading">Digital experience</p>

<p className="rn-title">More options for bar charts in rich content</p>

Bar charts in agent responses now feature four new configuration settings: `x_axis_title` and `y_axis_title` for custom axis labels, `show_values` to display data values above each bar, and `tilt_labels` to slant overlapping X-axis labels. All four are off by default, so existing charts don’t change. Charts with 10 or more bars now stay inside the chart card and scroll horizontally. [Learn more →](/agent-platform/abl/reference/rich-content#chart-properties)

```yaml wrap
CHART:
  type: bar
  title: "Launches by risk"
  x_axis_title: "Risk"
  y_axis_title: "Launches"
  show_values: true
  data:
    - label: "Low"
      value: 18

# Each bar shows its value, and both axes carry a title.
```

<p className="rn-heading">Insights</p>

<p className="rn-title">Full conversation export from Sessions</p>

The Conversation menu in Sessions now includes a Copy conversation action. It exports the entire conversation as plain text (up to a limit of 10,000 messages). The exported text opens with metadata identifying the agent, channel, and timestamp. Individual messages follow the `[time] Speaker: text` format, with human agent responses designated as Live agent. Elements such as lists, tables, buttons, and carousels are converted into plain text, while stored PII redaction markers are fully preserved.

<p className="rn-title">Sessions detail page refinements</p>

Timing bars for each turn now use one shared time scale, so you can compare how long turns and steps took. Bulk expand and collapse shortcuts now work on collapsed turn groups. Additionally, past recordings remain accessible for playback even after recording capture has been disabled.

<p className="rn-heading">Governance</p>

<p className="rn-title">Storage overview of Agent Tables for platform admins</p>

A new read-only Agent Tables page in the admin console under Operations allows platform administrators to monitor storage usage across tenants. The page displays table counts, sizes, placement, and tenant-specific detail views, as well as the execution status of the most recent TTL reaper run. Row data remains excluded.


---


<a id="v-1-10-0"></a>

<Badge color="green"> <b>v1.10.0</b>, November 15, 2026 </Badge>

This release brings parallel tool calls for FLOW steps, a redesigned Sessions detail page, GPT-Live full-duplex voice, caller hold handling, and alerts for evals. New projects get better prompt caching, and the ABL compiler now flags configuration keys that have no effect. Behavior profiles can be assigned to many agents at once, and Studio supports new guardrail providers.

<p className="rn-heading">Agent builder experience</p>

<p className="rn-title">Parallel tool calls in FLOW agents</p>

A deterministic `FLOW` step can now run multiple read-only tool calls at the same time. Add a `PARALLEL:` block and list the calls. Only read-only tools are allowed: HTTP GET or tools that declare `effect: read_only`. The step waits until all calls finish and saves each result in its own variable, then routes through `ON_SUCCESS`, `ON_PARTIAL`, or `ON_FAILURE`. You can also use `FOR_EACH` to iterate over a list, `AFTER` to set dependencies between calls, and `MAX_CONCURRENCY` to limit how many calls run at once. [Learn more →](/agent-platform/abl/reference/flow#parallel)

```yaml wrap
PARALLEL:
  - CALL: get_account_info
    WITH:
      account_id: account_id
    AS: account
  - CALL: get_limit_info
    WITH:
      account_id: account_id
    AS: limits

# Both lookups run together. The step routes once, after the slower call finishes.
```

<p className="rn-title">Bulk agent behavior assignment and step-level profile support</p>

You can now assign a behavior profile to many agents at once using the new Assign Agents tab. In ABL, setting `APPLIES_TO: all_agents` on a standalone profile applies it to every agent. A `FLOW` reasoning step can also use its own behavior profile and persona, so one step can speak differently from the rest of the agent. Project import now warns you before it overwrites a profile, and the session IR view shows the profile that was applied.

<p className="rn-title">Hand off before a reasoning call</p>

Routing state can now be updated directly by a before-turn pre-hook. Immediately after the pre-hook executes, the runtime evaluates handoff conditions; if a match occurs, the agent initiates an immediate handoff, bypassing the turn's reasoning LLM call entirely.

<p className="rn-title">Improved Prompt Caching</p>

New projects now use prompt version `v2`, which places static tool definitions before per-session content so providers can reuse a cached prompt prefix. This lowers cost and time to first token, and `FLOW` reasoning steps now reuse the cache across turns. Projects created earlier stay on `v1` until you change them. You can set the version in Studio (Runtime Config → Prompt building) or with `EXECUTION.prompt_version`. For OpenAI and Azure models, you can also set `prompt_cache_key` (`true`, `false`, or a name suffix) and `prompt_cache_retention` (`in_memory` or `24h`). [Learn more →](/agent-platform/abl/reference/agent-declaration#provider-prompt-caching)

```yaml wrap
EXECUTION:
  prompt_version: v2
  prompt_cache_key: true
  prompt_cache_retention: 24h

# This agent uses the v2 cache layout. OpenAI and Azure reuse the cached prompt prefix for up to 24 hours.
```

<p className="rn-title">Updated FLOW runtime behavior</p>

The following `FLOW` updates change how agents run:

- `TRANSFORM`: Step-level `TRANSFORM` statements with `MAP` or `FILTER` operations now populate their output variable. [Learn more →](/agent-platform/abl/reference/flow#transform)
- `CALL`: Passing an empty string to a required tool parameter through `CALL` now produces a visible error, instead of failing silently.
- `GATHER`: Regex `VALIDATE` rules on `ENTITY_REF` fields no longer fail valid inputs. [Learn more →](/agent-platform/abl/reference/flow#voice-delivery-for-a-field)

<p className="rn-title">Pick an environment when you test a tool</p>

The Test tool panel now has an environment selector. Run a test with variables set to Dev, Staging, or Production. The choice applies to that run only. The request-body diagnostic now shows the body that was sent, not a substituted copy. [Learn more →](/agent-platform/tools/http#step-3-testing-the-tool)

<p className="rn-title">Strict validation for configuration keys</p>

The ABL compiler now actively flags invalid configuration keys—including unknown, misspelled, incorrectly cased, or ineffective entries—as explicit warnings or compilation errors. Configurations that previously produced silent no-ops may now fail to compile or trigger warnings. Ensure all key names are updated, or unneeded keys are removed.

<p className="rn-title">Agent context support in Playground</p>

An Agent Context field has been added to the Debug context popover in the Playground. The agent evaluates this input for the duration of the debug session. [Learn more →](/agent-platform/create-agents#debug-panel)

<p className="rn-title">Eval suite alert notifications</p>

You can now configure alert rules directly on an eval suite. When a run shows a performance regression compared to the preceding run, an alert is triggered, and failure notices, including the reason, are sent to the inbox. Each alert rule has an Edit button. Regression notes also state the suite’s tolerance threshold and link to its configuration settings. [Learn more →](/agent-platform/evals#alerts)

<p className="rn-title">Scripted values for simulated users</p>

An eval scenario or persona can now include scripted values and instructions for the simulated user, such as a PIN or customer ID. The simulated user states the exact value when the agent asks for it. [Learn more →](/agent-platform/evals#scenarios)

<p className="rn-title">Measure text agent latency in eval suites</p>

Text eval suites now include four Code Check evaluators for first and average response time, including time to first token. Set a ‘Max ms’ budget for each evaluator, and it passes when the measured time is within budget and fails otherwise. Use them to catch slow responses and track latency alongside answer quality. [Learn more →](/agent-platform/evals#code-check-evaluators)

<p className="rn-title">Descriptions and a Type filter for eval suites</p>

Each eval suite can now have a description, and the full text shows in a tooltip when it is truncated. The Eval Suites list shows each suite’s kind as an icon and has a Type filter.

<p className="rn-title">Synchronized agent version tracking with Git sync</p>

Agent version history is now maintained consistently across Git operations by assigning a persistent key to each agent and tracking version changes within `abl.lock`. Before removing history files during a push, the system displays a preview and enforces a deletion threshold. Additionally, renaming or deleting an agent no longer leaves residual orphan files during push or clone operations, and a dedicated CLI command is now available to clear orphaned version files.

<p className="rn-title">Dynamic parameters in MCP server URLs</p>

MCP server URLs now support `{{input.X}}` parameters, each with a required default value. Instead of creating duplicate configs and tool imports for separate regional or environment servers, you can now insert `{{input.<name>}}` placeholders into the URL, such as `https://{{input.region}}.example.com/mcp`. A single agent session can pass different values per call to target different servers. Omitted parameters use their default, and Studio uses the default URL to test connections, discover tools, and run imports.

<p className="rn-title">Export and import environment variables</p>

The Environment page now has a Copy as JSON action, letting you back up variables or reuse them in other projects and environments. A secret you import without a value is created unset and shows a warning, and the list shows which variables have a value. Import now handles duplicate keys, edited values, and deleted entries correctly. [Learn more →](/agent-platform/administration/workspace-and-team#import-or-export-environment-variables)

<p className="rn-title">Microsoft Foundry hosted agents</p>

You can now publish a new version of a live Microsoft Foundry hosted agent from Studio.

<p className="rn-heading">Knowledge base</p>

<p className="rn-title">Searchable text from embedded images</p>

HTML ingestion now detects Base64-encoded images and extracts their content, so it becomes searchable. Encoded image data is no longer indexed as text. [Learn more →](/agent-platform/knowledge#images-in-search-results)

<p className="rn-title">Turn off automatic sync for a connector</p>

A connector's automatic sync can now be turned off. A migration sets the sync state for existing connectors. Check each connector's sync mode after you update.

<p className="rn-title">Recrawl failed pages</p>

You can now recrawl only the pages that failed in a web source, instead of crawling the whole source again. [Learn more →](/agent-platform/knowledge#recrawl-failed-pages)

<p className="rn-title">Client Credentials authentication profiles</p>

The OAuth 2.0 Client Credentials setup form now includes all required token URL fields, including the Databricks workspace host, Confluence Data Center base URL, Salesforce My Domain URL, and ServiceNow Instance URL.

<p className="rn-heading">Voice experience</p>

<p className="rn-title">GPT-Live full-duplex voice</p>

A KoreVG voice channel can now use GPT-Live-1 from the OpenAI model catalog. Select OpenAI Realtime as the channel provider, then pick the GPT-Live connection. Callers get full-duplex conversations with smooth interruption handling, tool use, and agent handoff. On the channel, you can choose the voice; Marin is the default. You can also set an optional acknowledgment delay of 0 to 800 ms and the orchestration mode: Runtime owned, or Responses with Runtime checks.
[Learn more →](/agent-platform/channels/voice#configure-the-realtime-llm-voice-channel)

<p className="rn-title">Caller hold handling</p>

Agents can now detect when a caller goes on hold. During the hold, the agent stays silent and pauses listening. When the caller returns, the agent resumes listening and picks up its response where it left off. To configure this, go to Runtime Config > Caller hold in Studio and set the maximum single hold duration (0:30 to 60:00, default 10:00) and the total hold time per call (default 30:00). When a limit is exceeded, the agent can end the call, transfer it, or trigger `on_caller_hold_limit`. The feature is on by default for new projects, and an admin must turn it on for existing projects. [Learn more →](/agent-platform/abl/reference/lifecycle-and-hooks#on_caller_hold_limit)

```yaml wrap
HOOKS:
  on_caller_hold_limit:
    SET: transfer_reason = "Caller stayed on hold past the limit"
    HANDOFF: Transfer_Desk

# When a hold reaches its limit, the agent hands off to Transfer_Desk.
```

<p className="rn-title">Project-wide default for silence exhaustion</p>

Studio now lets you define a project-level default action when a caller remains silent across all retry attempts, including terminating the call, transferring to a person, or handing off to an agent. This default setting can still be overridden at the individual agent or step level using `on_exhausted`. [Learn more →](/agent-platform/administration/general-settings#voice-no-input-defaults)

<p className="rn-title">Keypad passcodes stay out of the model</p>

A one-time passcode typed on the keypad is now kept out of the model, or the platform enables `SECURE_INPUT` for the step. `SECURE_INPUT` also works for DTMF-only collection, honors its delivery timeout, and delivers values through the tool’s body and header template. Spoken numbers that mix single digits with words such as “eleven” are no longer added up. Re-test keypad and OTP flows, and check that transcripts and traces stay redacted.

<p className="rn-title">Keypad prompts and input appear in transcripts</p>

Keypad gather steps (`ivr_digit_input`) now show their prompt and masked input in the session transcript and trace. The `#` key is now captured as input and is no longer treated as no input. A voice survey now asks again when the caller presses an out-of-range key.

<p className="rn-title">SIP and carrier connection settings</p>

A SIP termination URI can now hold comma-separated IP addresses, and a BYOC channel supports multiple SIP gateway IPs and CIDRs. All configured SIPREC recording servers are forwarded to the voice gateway. Outbound sessions now show the SIP Call-ID in the SIP Ladder.
[Learn more →](/agent-platform/channels/voice)

<p className="rn-heading">Digital experience</p>

<p className="rn-title">Channel User ID in Sessions</p>

The platform now keeps one channel-based user identifier for each session. Sessions shows a Channel User ID column and a filter for it. The value is encrypted at rest.

<p className="rn-title">Adaptive Card templates and Copilot setup in Microsoft Teams</p>

The Teams channel now supports Adaptive Card templates, such as a user profile card. The Teams channel setup also includes the Copilot custom engine configuration.

<p className="rn-title">Web SDK events for human agent chats</p>

The Web SDK now sends events when the user closes the chat, when a human agent connects, and when a chat transfers between human agents, so your chat window can react.

<p className="rn-title">Updates to agent transfer connectors</p>

The complete transfer lifecycle is now supported for Zendesk chat escalations via Sunshine Conversations. Additionally, the conversation transcript now records responses from the Genesys Bot Connector, including the platform session ID in its parameters. For the webhook channel, `ESCALATE` routing metadata is now included in the transfer request's agent transfer settings alongside session-level tags. Note that CCAI routing keys will not be overridden by custom keys.

<p className="rn-heading">Insights</p>

<p className="rn-title">Redesigned Sessions detail page</p>

The Sessions detail page is rebuilt for investigation. A trace continues after you refresh the page. You get recording controls, token metrics, and an inspector that fits narrow screens. Realtime voice sessions show readable steps, with one row per turn and a turn outline. You can open archived and past-retention sessions, and the page stays usable when one read is slow or fails. The open session refreshes during a live call, and you can also refresh it yourself.

<p className="rn-title">Correct Source and Channel values in Sessions</p>

The Source, Channel Type, and Channel columns in Sessions now show the actual values, and test traffic is separate from real traffic. You can filter by a single WhatsApp number or voice connection.

<p className="rn-title">Voice turn quality measures</p>

Voice quality now measures first sound, answer time, and wording for each caller turn on pipeline and realtime voice. On OpenAI realtime calls, LLM and tool traces now group under the correct turn.

<p className="rn-heading">Governance</p>

<p className="rn-title">New guardrail providers</p>

You can now add Azure Content Safety as a guardrail provider. Studio also supports a custom HTTP provider type, with response content mappings, so you can call your own moderation service. [Learn more →](/agent-platform/administration/ai-configuration#guardrail-providers)

<p className="rn-title">Expanded support for Gemini and GPT models</p>

Credential forms now include Vertex AI as a supported provider, with service-account credential authentication. The model catalog also includes Gemini 3.1 through 3.8 and Gemini 4 on Vertex AI, along with the GPT-5.6 series on Azure OpenAI.
[Learn more →](/agent-platform/supported-models#supported-ai-models)

<p className="rn-heading">APIs and SDK</p>

<p className="rn-title">Voice analytics in the Sessions API</p>

Public Sessions API rows now include `voice` and `contactCenter` objects with per-call voice quality and contact-center details. Check the OpenAPI document before you use the new fields.

<p className="rn-title">Find voice conversations by call ID</p>

Voice sessions now save the external call ID and the KoreVG `callSid`, both indexed. The public Conversation History API (`GET` and `POST`) accepts `externalCallIds` and `callSids` filters.

<p className="rn-title">More detail in the Traces API</p>

The tool call event now carries the response headers of an HTTP tool, masked where needed, and the tool call card in Studio shows them. HTTP calls that workflows make now appear in the `/traces` API. Use this data to match Artemis traces with your API gateway records.

---

<a id="v-1-9-3"></a>

<Badge color="green"> <b>v1.9.3</b>, November 11, 2026 </Badge>

This release brings per-step Execution settings for Flow reasoning steps and an Answer Pending Question First option for active specialists. Reasoning turns and PII-protected replies are faster, and voice call endings now carry correlation headers on the SIP BYE. Studio now warns at publish about conditions that will not run, and SharePoint site members can retrieve documents they can open.

<p className="rn-heading">Agent builder experience</p>

<p className="rn-title">Set model options for a single FLOW reasoning step</p>

A `FLOW` step with `REASONING: true` can now include its own `EXECUTION:` block, so that a specific step can use a faster model or lower reasoning effort than the rest of the agent. In this block, you can set the model, reasoning effort, token limits, temperature, and tool timeouts for that step. Any setting you leave out uses the agent-level `EXECUTION` value. [Learn more →](/agent-platform/abl/reference/flow#per-step-execution)

```yaml wrap
present:
  REASONING: true
  EXECUTION:
    reasoning_effort: none
    max_tokens: 400

# This step runs with no reasoning and a 400 token cap. Other steps keep the agent's settings.
```

<p className="rn-title">Reasoning steps exit without an extra model call</p>

If an undeclared key is included in a `__set_context__` that satisfies `EXIT_WHEN`, the step now exits immediately instead of triggering a second model call. Undeclared keys are still recorded in `rejected_keys` and traces, and receive correction feedback if the exit condition is unmet.

<p className="rn-title">Keep valid answers with the active specialist</p>

You can now turn on the ‘Answer Pending Question First’ option in Studio (Runtime Config → Reasoning Pipeline), or set `parentReturn.answerFirst: true` in a supervisor’s `EXECUTION: pipeline` block. With it on, an active specialist handles the caller’s reply before the platform checks for a topic switch. For flow specialists, a reply that gives valid answers to all pending fields stays in the flow, and other replies still go through the topic-switch check. For reasoning specialists, the specialist handles the reply and must hand out-of-scope requests back to the supervisor with `__return_to_parent__`. This setting is off by default. [Learn more →](/agent-platform/abl/reference/multi-agent-and-supervisor#parent-return-options)

```yaml wrap
EXECUTION:
  pipeline:
    enabled: true
    parentReturn:
      answerFirst: true

# Each reply goes to the active specialist before any topic check.
```

<p className="rn-title">ABL Expression, Limit, and Error Handling Refinements</p>

Updates impacting ABL runtime execution and publish-time diagnostics:

- **Post-publish compiler warnings:** Publishing in Studio now alerts you to unexecutable logic, such as `WHEN` conditions exceeding roughly 4,000 characters or `matches_pattern` expressions longer than 500 characters.
- **Evaluation of missing paths:** Within `CALL WITH`, `PROCESS`, and `TRANSFORM MAP`, executing `IS SET` on a missing path returns false. Unevaluated values are omitted, with diagnostic traces explicitly indicating the omission.
- **Step-level `ON_ERROR` enhancements:** Model request timeouts before provider response are now classified as model timeouts, triggering `llm_error` logic and `RETRY` mechanisms. Saving step handlers in Studio preserves existing `SET` statements and additional `SUBTYPES`.

<p className="rn-title">Arch MCP updates</p>

MCP clients can now perform guarded updates to a project's runtime configuration (fillers, language detection, and voice latency profiles) using the new `update_runtime_config` action. The access token now renews before it expires, so calls no longer fail with a 401 error during active sessions. Additionally, alignment with the ABL reference standard ensures that `create_tool` generates synchronous workflow tools by default.

<p className="rn-heading">Voice experience</p>

<p className="rn-title">Enhanced call termination tracing and completeness</p>

- **SIP BYE correlation headers:** When a KoreVG call concludes via `COMPLETE`, the BYE request now includes `x-session-id`, `x-project-id`, `x-tenant-id`, and associated call metadata—matching transfer behavior to restore post-call contact center lookup capabilities. [Learn more →](/agent-platform/abl/reference/multi-agent-and-supervisor#sip-headers-on-the-closing-bye-voice)
- **Conversation transcript retention:** Final utterances spoken immediately before disconnection (such as no-input exhaustion prompts) are now fully captured across Conversation logs, history, and trace exports.
- **Pre-disconnect queue suppression:** Executing a `COMPLETE` action at the root agent prevents queued requests from being re-offered right before session termination, ensuring previously handled requests are not repeated.

<p className="rn-heading">Knowledge and connectors</p>

<p className="rn-title">SharePoint site members can retrieve documents</p>

Permission-aware SharePoint connectors now resolve site-group access for Office documents, so site members get answers from documents they can open. Recrawl existing documents to refresh their permissions.

<p className="rn-heading">Governance</p>

<p className="rn-title">Streaming output responses with active PII redaction</p>

Projects configured for output PII redaction can now stream the initial PII-safe portion of a reply as it is generated by enabling the ‘Stream responses while redacting’ option (Project → Govern → PII). Text requiring verification is buffered; if PII is detected, streaming halts and the full reply is redacted before the remainder is transmitted. This feature is disabled by default. [Learn more →](/agent-platform/pii-protection)
