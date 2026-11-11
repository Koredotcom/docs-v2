---
title: Artemis release notes
description: Stay up to date with the latest platform updates, new features, and enhancements.
rss: true
mode: center
---

<Update label="November 6, 2026" description="v1.9.2">

This release improves voice call control and agent configuration, with step-level barge-in overrides, configurable listening modes, per-channel speech streaming, per-agent model settings, and environment variables in MCP server configuration.

<p className="rn-heading">Agent builder experience</p>

<p className="rn-subtitle">Use environment variables in MCP server config</p>

MCP servers can now link to up to 20 project variable namespaces through the registration dialog or the Configuration tab. Server URLs, inline auth, and headers can use `{{env.NAME}}` and `{{config.NAME}}` variables, which adapt to the environment the tool runs in. These links are used during testing and discovery, are preserved on import, and prevent deletion of a namespace that is in use. Servers with no linked namespace behave as before. [Learn more →](/agent-platform/abl/reference/tools#variable-namespaces-and-placeholders)

```yaml wrap
Server URL: https://{{env.MCP_HOST}}/mcp
Header Authorization: Bearer {{env.MCP_TOKEN}}

# Both values come from the linked namespace for the selected environment.
```

<p className="rn-subtitle">Model settings in EXECUTION apply per agent</p>

When project model selection is enabled, the `reasoning_effort`, `verbosity`, `enable_thinking`, and `thinking_budget` settings declared in an agent’s `EXECUTION` block apply directly to that agent. Sampling parameters are also validated against catalog constraints, so unsupported options, such as penalties on reasoning models, are omitted automatically. Settings in `EXECUTION` override the agent’s Runtime-only model overrides panel, and Studio now shows this priority. Agents without custom `EXECUTION` settings behave as before. [Learn more →](/agent-platform/abl/reference/agent-declaration#authored-values-and-project-model-selection)

```yaml wrap
EXECUTION:
  reasoning_effort: "high"
  temperature: 0.2

# This agent runs with high reasoning effort, even when other agents share the same model.
```

<p className="rn-subtitle">CI/CD releases include behavior profiles</p>

A CI/CD release now compiles agents that use a behavior profile. The build now rebuilds behavior profiles and project tools from the exported tree.


<p className="rn-heading">Voice experience</p>

<p className="rn-subtitle">Set barge-in for a single step or output</p>

You can now configure step-level barge-in overrides, enabling callers to interrupt specific prompts even if barge-in is disabled globally for the channel or agent. To protect individual prompts while leaving a specific step open to interruptions, define `BARGE_IN: allow` within that step's `VOICE` block. Key updates to barge-in and streaming resolution include:

- **Per-output evaluation:** Barge-in and speech streaming settings are now evaluated independently for each output type, including welcome messages, templates, `GATHER` prompts, error handlers, event hooks, and no-input reprompts.
- **Handoff isolation:** An agent's barge-in settings no longer carry over to subsequent agents during a handoff.
- **Welcome prompt scoped:** The barge-in configuration set on the `ON_START` welcome applies exclusively to the welcome message. The initial speaking `FLOW` step retains its own designated configuration.
[Learn more →](/agent-platform/abl/reference/flow#voice-delivery-for-a-field)

```yaml wrap
CONVERSATION:
  listening:
    barge_in: disallow

FLOW:
  ask_score:
    RESPOND: "On a scale of 1 to 5, how was your call?"
    VOICE:
      BARGE_IN: allow

# Callers can interrupt ask_score. All other steps stay protected.
```

<p className="rn-subtitle">Choose how a voice channel listens</p>

KoreVG pipeline channels now support a configurable Listening mode. In Studio, go to **Deployments > Channels > your voice pipeline channel > Configuration > Speech**, and select **Background** or **Turn-taking**. An explicit channel mode takes precedence over the agent’s setting, and agents can set the mode with `CONVERSATION.listening.mode` instead. The mode stays fixed for the whole call.

- **Background mode:** The system actively listens while the agent is speaking, and the no-input timer automatically pauses whenever caller speech is detected.
- **Turn-taking mode:** A listener opens only after a prompt completes. Prompts are rendered as complete audio playback rather than streamed content.

If you pair Background with barge-in off, it behaves like a slower Turn-taking mode, and Studio and the compiler show a warning.
[Learn more →](/agent-platform/channels/voice#set-up-pipeline-voice-channel)

<p className="rn-subtitle">Turn speech streaming on or off per channel</p>

A new ‘Stream speech’ option in the Speech section is enabled by default for supported TTS providers. Disabling it turns off streaming for all connection outputs, regardless of agent configuration. Disabling barge-in no longer globally disables call streaming, and individual outputs can still use the `STREAMING` setting in their `VOICE` block. Buffered replies also no longer carry streaming behavior into subsequent responses.

<p className="rn-subtitle">Spoken lines are no longer dropped</p>

KoreVG pipeline voice now reliably delivers authored lines:

- **Initial greeting:** The `ON_START` welcome prompt is now captured in the transcript and plays even when paired with a speaking `FLOW` entry step.
- **Turn hooks:** Protected and buffered turns now execute `RESPOND` lines within `before_turn`, `after_turn`, and a child handoff's `before_agent` hooks.
- **Sequential responses:** A step's `RESPOND` statement preceding a `COMPLETE` `RESPOND` block is now fully voiced.

Each hook keeps its own voice policy, and the transcript still shows one logical reply. The agent now hears the caller right after a buffered welcome, so the caller’s first answer is no longer ignored.

<p className="rn-subtitle">Set voice prompts, retries, and timeout for surveys</p>

Voice surveys now have their own settings. In the survey template editor, you can set the spoken prompts (keypad instruction, wrong key, timeout, and error), the number of retries after a wrong key (0 to 3), and how long to wait for an answer (3 to 30 seconds). If no answer comes in time, the timeout prompt plays and the survey ends. In ABL, a `FEEDBACK` block can override these settings for one survey. The survey also no longer reads the rating back before the closing line. [Learn more →](/agent-platform/abl/reference/rich-content#referencing-a-survey-template)

```yaml wrap
RICH_CONTENT:
  FEEDBACK:
    FEEDBACK_TEMPLATE: Post_Call_CSAT
    voice_retries: 2
    voice_timeout: 10

# This survey allows two retries and waits 10 seconds for a key.
```

<p className="rn-subtitle">SECURE_INPUT steps run by default</p>

`SECURE_INPUT` steps now run by default unless `SECURE_INPUT_ENABLED` is set to `false`. Skipped steps generate a `secure_input_disabled` trace log. Additionally, values under three characters no longer match encoded forms to prevent masking consent keys, and 13- to 19-digit confirmation numbers are no longer suppressed.

<p className="rn-subtitle">Send custom User-to-User values in SIP transfers</p>

SIP transfer destinations now support custom values within the User-to-User header by appending `name=value` pairs directly after the `{{sip.user-to-user}}` placeholder. Parameter values accept literal tokens containing letters, numbers, `.`, `_`, or `-` (up to 64 characters), while `{{session.id}}` can be used to pass the platform session ID. [Learn more →](/agent-platform/abl/reference/tools#trusted-sip-transfer-destinations)

```yaml wrap
sip:421003@172.0.41.7:5060;user=phone?User-to-User={{sip.user-to-user}};x-art=Y;x-sessionId={{session.id}}

# The outbound header carries the inbound payload, x-art=Y, and the session ID.
```

<p className="rn-subtitle">Automatic cancellation of slow startup logic upon call termination</p>

During realtime voice sessions, any startup process running under `ON_START` terminates immediately if the call ends or disconnects. Pending tool executions and model requests are canceled, preventing provider sessions from initiating. Depending on the disconnection cause, sessions are categorized as failed (for released calls) or abandoned (when the caller socket drops). Additionally, KoreVG automatically responds with `session:reconnect` when it detects a dropped socket.


<p className="rn-heading">Insights</p>

<p className="rn-subtitle">Clearer labels for keypad entries</p>

Voice transcripts and traces now label a masked keypad turn as “[DTMF input: 1 digit, masked]”. The old label, “[DTMF digits: 1]”, showed how many keys the caller pressed, but it read as if the caller pressed 1. The agent still receives the digits exactly as the caller pressed them.


</Update>

<Update label="November 4, 2026" description="v1.9.1">

This release adds new ways to handle silent callers, including a hook, routing to a flow step, and one retry count for silence and wrong answers. Agents no longer see other agents’ tool results. It also adds SIP headers on the call-ending BYE, public APIs for managing workspace and project members and roles, and clearer tool-retry details in Traces.

<p className="rn-heading">Agent builder experience</p>

<p className="rn-subtitle">Choose which agent version to debug</p>

The Debug context popover in the chat view now has a This agent section. Use its Version field to choose whether to debug the working draft, a published version, or an active deployment of the agent. You can also add session metadata as JSON, which the agent reads as `_metadata`. Studio remembers your choice when you close and reopen the popover.

<p className="rn-subtitle">Each agent sees only its own tool results</p>

A tool result kept in session state is no longer added to a later agent's prompt just because it is still there. This covers results from an earlier agent and results kept through a `FLOW AS` alias. If the next agent needs the data, pass it explicitly in the handoff `CONTEXT`. Memory grants and prompts you write to read broad context keep working, and tools, conditions, and assignments can still use the stored results. If an agent you built relied on inherited results, review its handoffs.

<p className="rn-subtitle">Tool error handling: escalation and retry visibility</p>

When a tool call in a `FLOW` step fails under an `ON_ERROR` handler set to `THEN: ESCALATE`, the customer is now escalated after the retries run out. Reasoning agents already behaved this way. Traces now show every retry: the tool call’s card lists how many requests were sent and one row per attempt, including the first failure and its error code, each retry and its outcome, and any skipped retry with the reason.

```yaml wrap
FLOW:
  call_external:
    CALL: external_api
    ON_ERROR:
      tool_error:
        SUBTYPE: tool_timeout
        RETRY: 2
        THEN: ESCALATE

# After two retries, the customer is escalated instead of continuing to the next step.
```


<p className="rn-heading">Knowledge base</p>

<p className="rn-subtitle">Salesforce connectors support client credentials</p>

Auth profiles for the Salesforce Knowledge and Salesforce Standard connectors can now use the OAuth client credentials flow, letting a source sync without a signed-in user. Studio’s auth profile panel and the Salesforce setup wizards offer the new option.

<p className="rn-subtitle">All-content-type defaults and advanced filters for Confluence</p>

The Content filters picker for Confluence Server and Confluence Cloud now opens on “All content types,” so dates, rules, and CQL you enter apply to pages, blog posts, and attachments together. A warning appears if the selected types already hold different values. Confluence Server sources also now support advanced filters, as SharePoint sources do: add rules on space and other fields, group them with AND and OR, set dates, or enter a CQL override. Removed rules, dates, and CQL overrides are now cleared when you save, and excluded spaces are listed as excluded in the sync scope and dry run.


<p className="rn-heading">Voice experience</p>

<p className="rn-subtitle">Silence and wrong answers counted toward one limit</p>

A question step can now keep one retry count for both silence and wrong answers. Set the step’s `max_retries` to 0 and set `on_exhausted` to the step that counts misses. Each silence or wrong answer counts as one attempt, and the agent escalates when the shared count reaches its limit. Don’t set `exhausted_message` on the question step because it plays after every silence when `max_retries` is set to 0. This works on pipeline voice only.

Routing a silent caller with `on_exhausted` also works better. Attempts are no longer counted twice. The caller hears the expected prompt before any transfer or escalation. When a child agent starts after a silence finishes, control returns to the parent agent, and the configured `ON_RETURN` action continues the flow.

```yaml wrap
FLOW:
  account_retry:
    RESPOND: "What is your account number?"
    VOICE:
      ON_NO_INPUT:
        enabled: true
        max_retries: 0
        on_exhausted: account_failed

# Silence goes straight to account_failed, which counts it with wrong answers and escalates on the third miss.
```

<p className="rn-subtitle">Run a hook when a caller stays silent</p>

In addition to a step name or `ESCALATE`, `on_exhausted` now accepts a hook on pipeline voice. The hook works on agents with and without a `FLOW`. It can call a tool, set values, and hand off to another agent. The caller first hears your `exhausted_message`, if you set one. The hook can’t contain `RESPOND`, so put the final words in `exhausted_message`. On realtime voice and Twilio, the hook option acts as custom. Set it in ABL. Studio keeps the value when you save but has no form for it.

```yaml wrap
CONVERSATION:
  listening:
    on_no_input:
      on_exhausted: hook
      exhausted_message: "I still couldn't hear you."

HOOKS:
  on_no_input_exhausted:
    CALL: record_silence
      WITH:
        reason: "caller_silent"
    SET: transfer_reason = "Caller went silent"
    HANDOFF: Transfer_Desk

# When the retries run out, the agent records the silence and hands the call to Transfer_Desk.
```

<p className="rn-subtitle">Send SIP headers when your agent ends a call</p>

On pipeline voice, a `COMPLETE` condition’s `VOICE` block now accepts `sip_headers`, which go out on the SIP BYE that ends the call so the receiving contact center can route on them. Header names must be valid SIP tokens; values can use `{{variable}}` placeholders, and headers with empty values are not sent. The headers follow the project’s outbound SIP header policy. Every call that ends this way also carries a fixed `X-ArtemisReason` header (`TransferToAgent`, `NoInputFromuser`, or `BotHangup`) that tells the receiver why the platform released the call.

```yaml wrap
COMPLETE:
  - WHEN: issue_resolved
    RESPOND: "Thanks for calling, goodbye."
    VOICE:
      sip_headers:
        X-RouteType: hangup
        X-Disposition: "{{disposition}}"

# The BYE that ends the call carries both headers.
```

<p className="rn-heading">Insights</p>

<p className="rn-subtitle">More accurate voice call outcomes</p>

A call the platform ended because of its own failure is now reported as failed, not completed and contained. Failed calls appear in the session list, voice metrics, the outcome distribution, and the analytics API. A call transferred by releasing the SIP leg, such as a hand-back to Amazon Connect, is now recorded as escalated and transferred, not abandoned. Calls ended by the caller or the agent keep their outcomes.


<p className="rn-heading">Governance</p>

<p className="rn-subtitle">Manage members and roles with public APIs</p>

You can now manage workspace and project membership from your own systems using public APIs. With a workspace platform key created in Studio, your automation can add, update, and remove workspace and project members, list roles and projects, and run lifecycle actions on a member, such as suspend, reactivate, and reset MFA. Access is controlled by scopes. In Studio, the Members page now shows each member’s status and marks members managed through the API, and the Custom roles page shows which roles the API can assign.

```yaml wrap
POST /api/public/v1/workspaces/{workspaceId}/members/{memberId}/actions
{
  "action": "suspend",
  "reason": "Left the company"
}

# Suspends the member and revokes their sessions in this workspace.
```


</Update>


<Update label="October 31, 2026" description="v1.9.0">

This release expands the platform’s capabilities in agent building, knowledge retrieval, voice, digital channels, and governance. Key features include RAG eval suites, a Workbench for business users, a Freshservice connector, advanced relevance scoring for search, no-input call routing and keypad settings for voice, TLS for SIP trunks, and workspace-level multi-factor authentication.

<p className="rn-heading">Agent builder experience</p>

<p className="rn-subtitle">Supervisor acknowledges each request in a multi-part conversation</p>

When a customer asks for several things in one message, the supervisor now tells the customer which request it handles first and when it moves to the next. For example, a customer who asks to block a card and check a balance hears that the card is being blocked, then hears when the conversation moves on to the balance. The `multi_intent_sequential_start` and `multi_intent_sequential_transition` messages control these lines, and you can change them in the supervisor’s `MESSAGES` block or through localization. The lines add no extra model call.

<p className="rn-subtitle">Test knowledge-grounded agents with RAG eval suites</p>

You can now create evaluation suites that measure how well your agent's retrieval-augmented generation performs. In Eval Suites, select 'RAG Suite' to build a suite with evaluators for faithfulness, relevance, and completeness. Upload a test dataset, run the evaluation, and review per-sample results with full agent traces, retrieved contexts, and cost estimates. A score chart tracks how scores change across runs. [Learn more →](/agent-platform/evals#rag-evaluation-suites)

<p className="rn-subtitle">Choose what agents receive from uploaded files</p>

The project’s attachment settings now include a processing mode that controls what the agent gets for each uploaded file: Skip (file name only, nothing sent to the agent), Metadata Only (file details), or Read Attachment (file content). You can also turn off uploads for the whole project and set the maximum number of files per session. In the chat widget, an attachment badge shows the file count, and users can open the list, remove a file before sending, and view the upload limits in a tooltip. [Learn more →](/agent-platform/administration/agent-behavior-settings#attachments)

<p className="rn-subtitle">Let business users manage content in the Workbench</p>

The Workbench gives business users one place to manage approved content, settings, and approvals, such as updating an offers table and approving a pending task from the same page. Developers can publish Workbench pages that are editable views over Agent Tables, built from their table tools. The Workbench also brings Inbox tasks into one place, so non-developer users can review and edit table data, complete approvals, and enter data without builder access in Studio. A new Workbench Manager role gives this access for the projects a user is added to. The Workbench is available on request.

<p className="rn-subtitle">Create CI/CD releases with public API</p>

The public CI/CD API can now create a release from a project’s current content. For example, you can release, deploy, and promote a project moved by import and export through your pipeline. With a platform key, your automation can create the release and use the existing deploy, promote, and rollback APIs without signing in to Studio.

```yaml wrap
POST /api/cicd/v1/projects/{projectId}/releases
{
  "source": { "kind": "project_snapshot" }
}

# Creates a release from the project's current content. Deploy and promote it with the existing CI/CD APIs.
```


<p className="rn-heading">Knowledge and connectors</p>

<p className="rn-subtitle">Freshservice connector</p>

Freshservice is now supported as a knowledge base source for IT and support articles. Connect using a Freshservice URL and an auth profile API key, then select the workspaces, categories, and folders to sync. Unselected levels include all sub-items. It syncs published Solution articles (like SOPs and how-tos) while ignoring drafts and deleted items. You can also maintain Freshservice folder permissions for search results and set content sync schedules.

<p className="rn-subtitle">ServiceNow connector improvements</p>

The ServiceNow integration now works end to end from action tools and workflows. Attach File to Record accepts a file from an agent, a workflow step output, a link, or typed text. The Table and Record pickers support search across all tables and records, and auth profiles can use basic auth and OAuth. New Record and Updated Record triggers now catch every new or changed record, and Find Records returns large result sets with a clear limit. Existing tools and workflows keep working as before.

<p className="rn-subtitle">Higher-accuracy relevance scores in search</p>

Knowledge bases can now use relevance scores that better reflect how well each result matches the query. For example, a chunk that contains every word of the query scores higher than one that contains only one, and unrelated queries, such as “hi,” score low. This makes similarity thresholds easier to set. To turn it on, go to the knowledge base’s Index Configuration and set Relevance scoring to ‘Advance’. Classic remains the default, and existing knowledge bases don’t change. After you switch, review your similarity threshold. A useful hybrid threshold is about 0.5 to 0.6.

<p className="rn-subtitle">Find documents by their title</p>

Searches can now reach a document’s content through its title. Chunk embeddings include the document title, and a new keyword field matches single words from file-style titles, such as `Refund_Policy_2026.pdf`. Existing documents use the new embeddings after they’re re-embedded.


<p className="rn-heading">Voice experience</p>

<p className="rn-subtitle">Send silent callers to a step or a person</p>

You can now choose what happens when a caller stays silent through every retry. On pipeline voice, an agent or a `FLOW` step can route the call to a step or a person. Set `on_exhausted` to a step name, `ESCALATE`, `ESCALATE WITH REASON "..."`, or `COMPLETE`. For example, a step can send an SMS self-service link or hand the caller to a live agent. In Studio, choose Go to step or Escalate to a person under the agent’s No-Input Handling. The caller hears your `exhausted_message`, if you set one, and then the call moves to the target. A call can route up to ten times. If a route can’t run, the call plays the message and ends as before.
[Learn more →](/agent-platform/abl/reference/flow#step-level-no-input-caller-silence)

```yaml wrap
FLOW:
  ask_account:
    RESPOND: "What is your account number?"
    VOICE:
      ON_NO_INPUT:
        max_retries: 1
        on_exhausted: 'ESCALATE WITH REASON "Caller went silent"'
        exhausted_message: "I'll connect you with someone who can help."

# After the retries run out, the caller is transferred instead of disconnected.
```

<p className="rn-subtitle">Fillers that match the caller's language</p>

Custom filler and no-input prompts from the Prompt Library can now use placeholders such as `{{language}}`, `{{locale}}`, and `{{languageHint}}`, which hold the session’s active language. They can also use any value the active agent’s own prompt can see. For example, a French caller hears fillers in French when the agent replies in French. Generated and static fillers then match the agent’s answer language.

<p className="rn-subtitle">Keypad settings for projects, agents, and reasoning agents</p>

Callers who type a long number, such as an account or application ID, can now pause between key presses for as long as you allow. You can set how keypad digits are collected (minimum and maximum digits, finish key, and pause between key presses) once per project, agent, or behavior profile. For a project, use Settings > Runtime Config > Listening > Keypad input. For an agent or profile, use `CONVERSATION.listening.dtmf` or Behavior > Listening in Studio. Reasoning agents can also give a single field its own keypad settings: mark a top-level `GATHER` field `armable: true` and add a `DTMF:` block. The same levels can set speech settings, including a continuous speech window (`asr_timeout_ms`), so an address spoken in parts is kept as one answer. The most specific level wins: field, behavior profile, agent, then project. [**Learn more →**](/agent-platform/abl/reference/flow#field-level-keypad-settings-dtmf)

```yaml wrap
CONVERSATION:
  listening:
    dtmf:
      finishOnKey: "#"
      interDigitTimeoutMs: 5000

# Callers can pause up to 5 seconds between key presses across this agent.
```

<p className="rn-subtitle">TLS for SIP trunk connections</p>

You can now encrypt voice traffic between the platform and your carrier. A BYOC SIP connection’s termination settings include a Transport field with UDP, TCP, TLS, and TLS + SRTP options. TLS encrypts call signaling, and TLS + SRTP also encrypts the audio. The port defaults to 5061 for TLS. The carrier must present a certificate that the voice gateway trusts.


<p className="rn-heading">Digital experience</p>

<p className="rn-subtitle">Pass custom user details to the Agent Console on transfer</p>

Transfers to a human agent through CCAI can now send any customer details the agent needs, in addition to name, email, and phone. For example, the agent sees the customer’s CIF number and language as soon as they take over the chat. To send custom fields to the Agent Console’s User Info section, add `user_info` to an `ESCALATE` routing entry. [**Learn more →**](/agent-platform/abl/reference/multi-agent-and-supervisor#handoff-context-for-ccai)

```yaml wrap
ESCALATE:
  routing:
    user_info:
      Customer CIF: "{{customer_cif}}"
      Language: "{{session.languageDetection.language}}"
    user_info_in_custom_data: true

# The agent sees Customer CIF and Language in the Agent Console's User Info section.
```

<p className="rn-subtitle">See which human agent joined in the Web SDK</p>

When a chat is transferred to a human agent, the Web SDK now receives the agent’s information in its WebSocket events, so the chat window can show which agent joined. Credentials are always removed, and personal data is handled according to the project’s PII protection settings.
[Learn more →](/agent-platform/channels/web-sdk-channel#configure-the-channel)


<p className="rn-heading">Insights</p>

<p className="rn-subtitle">Custom labels for dashboard table columns</p>

Dashboard tables built on output items can now show business-friendly column headers, such as labeling the dimension `dim_pnr` as “Booking reference.” In the visual query builder’s Summarize stage, give each grouped dimension a display label. The label becomes the column header in tables, charts, and exports. Leave it blank to keep the original name.

<p className="rn-subtitle">Cache-write tokens in LLM usage</p>

LLM trace records now expose cache-write token usage alongside input, output, and cache-read tokens. Cost calculations and model benchmarking no longer treat cache writes as zero.


<p className="rn-heading">Governance</p>

<p className="rn-subtitle">Workspace-level multi-factor authentication</p>

Workspace owners and admins can require two-factor verification for members under Security & Compliance > MFA. Supported methods include Google Authenticator (TOTP) and Email OTP, alongside a default option. Members can configure a method and receive recovery codes upon their next sign-in, with settings managed under Account Security. Each workspace retains its own policy. This is an Enterprise feature.
[Learn more →](/agent-platform/administration/workspace-and-team#multi-factor-authentication)

<p className="rn-subtitle">More control over role permissions and feature visibility</p>

Role Management now has a permission for every project module in the left navigation, including project settings and each knowledge base area, such as Sources, Pipeline, and Knowledge Graph. Knowledge base screens, actions, search, and Preview SDK access follow the user’s project role, and workspace owners and admins keep full access. Admins can also choose what members see for features their role doesn’t cover: under Restricted feature visibility, set *Show as blocked* or *Hide completely* for each role.

<p className="rn-subtitle">Azure Managed HSM key versions and rotation</p>

For workspaces that use their own encryption keys in Azure Managed HSM, the platform now stores which key version protects each data key. When a key version expires, the platform moves to the latest version. The KMS settings show key health, the key versions in use, and re-wrap job status. A health bar warns when the current key version is disabled, expired, or not yet valid, and existing data stays readable.
[Learn more →](/agent-platform/administration/workspace-and-team#azure-managed-hsm)

<p className="rn-subtitle">Connect to services that use a private certificate authority</p>

The platform can now connect to services that use certificates from your own certificate authority, such as services on an internal network. Create a CA Certificate auth profile and select it as the TLS profile on API tools and MCP servers. The platform then trusts servers whose certificates are signed by your private CA.

</Update>


<Update label="October 28, 2026" description="v1.8.3">

This release expands the platform’s capabilities in agent building, voice, digital channels, and governance. Key features include language detection for customer messages, WhatsApp invitations during voice calls, configurable supervisor return thresholds, extra Genesys transfer headers, and Bitbucket Data Center support on private networks.

<p className="rn-heading">Agent builder experience</p>

<p className="rn-subtitle">Detect the language of each customer message</p>

Projects can now detect the language of every customer message and share the result with agents as `session.languageDetection`, including the language, confidence, and status. Turn it on in Runtime Config under the new Language detection section, where you can also set a confidence threshold, a minimum message length, and the allowed languages. Detection doesn’t change the conversation language on its own. An agent’s `before_turn` hook decides, using `WHEN` conditions with `SET_INTERACTION_LANGUAGE` or `CLEAR_INTERACTION_LANGUAGE`. The reply, the filler, and, on calls without a voice language profile, the voice then switch together. Session traces show the detection result under each customer message. The setting is off by default and can be turned on once the language detection service is available in your environment.
[Learn more →](/agent-platform/abl/reference/lifecycle-and-hooks#hooks)

```yaml wrap
HOOKS:
  before_turn:
    WHEN: session.languageDetection.status == "detected" AND session.languageDetection.confidence >= 0.85
      SET_INTERACTION_LANGUAGE: session.languageDetection.language

# Switches the reply language only when detection is confident. A low-confidence result leaves the language unchanged.
```

<p className="rn-subtitle">Control when callers return to the supervisor</p>

While a specialist is handling a conversation, the supervisor’s classifier checks whether the caller’s reply belongs to a different specialist. You can now set how confident it must be before the caller goes back to the supervisor. In ‘Runtime Config > Reasoning pipeline’, turn on ‘Custom Return Threshold’ and set the threshold. To leave unclear replies with the current specialist, turn on ‘Keep Ambiguous Replies With Specialist’. A supervisor can override both settings in its `EXECUTION` pipeline with `parentReturn`. The classifier also now judges the reply against the specialist’s own conversation, so callers are returned by mistake less often. 
[Learn more →](/agent-platform/abl/reference/multi-agent-and-supervisor#pipeline-options)

```yaml wrap
EXECUTION:
  pipeline:
    enabled: true
    parentReturn:
      minConfidence: 0.9
      ignoreAmbiguous: true

# The caller returns to this supervisor only when the classifier is at least 90% sure, and never on an ambiguous result.
```

<p className="rn-subtitle">Run session-end workflows for several agents</p>

The After Session Ends workflow trigger can now target more than one agent. Select the agents in the trigger’s Agents list. The workflow runs when a session owned by any of them ends, but not for sessions handled only by internal helper agents. Leave the list empty to run the workflow for any agent. Existing triggers keep their selected agent.
[Learn more →](/agent-platform/workflows#after-session-ends-trigger)


<p className="rn-heading">Voice experience</p>

<p className="rn-subtitle">Send continuity invitations over WhatsApp during a call</p>

During a voice call, an agent can now send the caller a WhatsApp message with tappable options, such as appointment slots, using the `offer_continuity` tool with `delivery: 'whatsapp'`. The message uses a WhatsApp template and goes through the project’s WhatsApp connection on Meta Cloud or Infobip. The caller’s tap or typed reply reaches the live call as input, on both pipeline and realtime voice. Replies that arrive after the invitation expires don’t reach the call, and the caller gets a message saying the request expired. Text typed on a web page that has joined a live pipeline voice call is also answered on the call.

<p className="rn-subtitle">More transfer headers for Genesys Audio Connector</p>

Escalations to Genesys through the Genesys Audio Connector can now send any extra headers your Genesys flow needs. Add them under `additional_headers` in `genesys_sip_headers`, and each one is sent as its own header with the transfer. Values can use `{{...}}` templates that are filled in from the session at transfer time, and a trigger’s headers override the routing defaults one by one. On `korevg_savg` transfers, the SIP BYE now also carries User-to-User Information (UUI), and transfer metadata is no longer limited in size.
[Learn more →](/agent-platform/abl/reference/multi-agent-and-supervisor#genesys-sip-transfer-headers)

```yaml wrap
ESCALATE:
  routing:
    connection: "genesys_prod"
    genesys_sip_headers:
      additional_headers:
        X-Interaction-Id: "{{interactionID}}"
        X-Brand: "{{brand}}"

# Each additional header is sent separately with the transfer, with its template filled in at transfer time.
```

<p className="rn-heading">Digital experience</p>

<p className="rn-subtitle">Let Genesys Architect announce escalations</p>

For Genesys Cloud Bot Connector, you can now leave the escalation message to Genesys Architect, such as to check business hours before telling the customer about the transfer. Set `escalation_format` to an empty string in the agent’s `MESSAGES`. A successful escalation then returns no reply messages, while still sending the escalation intent. The same applies when the response is replayed. If you leave the key out or set a message, escalations work as before.
[Learn more →](/agent-platform/abl/reference/lifecycle-and-hooks#messages)

```yaml wrap
MESSAGES:
  escalation_format: ""

# Genesys Architect plays its own transfer announcement. The escalation intent is still returned.
```

<p className="rn-subtitle">Connect Infobip through an API gateway</p>

Infobip WhatsApp connections can now authenticate with a custom header, for setups that route Infobip traffic through an API gateway such as Azure API Management. Choose Custom Header (API Gateway) as the Auth Type and enter the header name and value. The connection dialog now shows only the fields for the selected auth type. You can also add an optional inbound webhook secret, which lets the connection accept typed replies to WhatsApp continuity invitations.
[Learn more →](/agent-platform/channels/whatsapp#infobip-setup)


<p className="rn-heading">Governance</p>

<p className="rn-subtitle">Bitbucket Data Center on private networks and through your proxy</p>

Projects can now sync with a Bitbucket Data Center server on a private network, such as one you reach over VPN or a private link. Allow the host on the Basic auth profile used for the repository, and it can resolve to a private address for that profile’s repositories. If the server is behind a corporate proxy, add a Global rule for it in Settings > Account > Secrets > Proxy Configs. Git and API calls to the server then go through that proxy. When Studio can’t resolve the host, the error now says so, instead of reporting that the host isn’t allowed.

</Update>
