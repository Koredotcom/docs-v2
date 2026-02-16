# Contact Center AI Metrics

| Metric | Source | Method/Formula | Definition | API Link and Parameter |
|--------|--------|----------------|------------|-------------------------|
| Client Call Volume | Interaction logs or session analytics. | Export session data via the Session Logs API or Analytics Dashboard. | NA | NA |
| Intent ID rate | NLU performance metrics in AI Agents analytics. | Use the Intent Recognition API or export Intent Analytics. | NA | NA |
| Fallout Disconnect Volume and Rate | Interaction events in the platform. | Query disconnection events using Session Events API, filter based on event reasons like “CX error.” | NA | NA |
| Successful Disconnect Volume and Disconnect Rate | Analytics Dashboard or Custom Reports. | Filter sessions where tasks were completed, but no agent escalation occurred. | NA | NA |
| Total Disconnect Volume and Disconnect Rate | Analytics on session drop-offs. | Analyze logs for session disconnections pre-queue assignment. | NA | NA |
| Agent Handoff Volume and Rate | Escalation data from the AI Agent’s configuration. | Extract handoff events via Agent Escalation API. | NA | NA |
| Calls Saved and Containment Rate | Containment metrics in analytics. | Use session IDs and timestamps to track sessions without subsequent escalations or callbacks. | NA | NA |
| Transfer Rate | Agent interaction logs. | Analyze events for warm/cold transfers. | NA | NA |
| Misroute Rate | Wrap-up codes or agent feedback in analytics. | Query session tags or agent logs via API. | NA | NA |
| Re-prompt Rate | AI Agent’s error handling logs | Count re-prompt events in session logs. | NA | NA |
| AI Agents AHT | Analytics Dashboard (Handle Time section). | Export handle time data via analytics API. | NA | NA |
| Client Experience Score | CSAT feedback module. | Fetch CSAT survey responses. | NA | NA |
| Task Completion Rate | Task Analytics | Query successful task completions via Task Execution Metrics API. | NA | NA |
| Average Handle Time (AHT)* | Agent analytics or reports. | Aggregate Talk Time, Hold Time, and After Call Work from session logs. | Total handle time of the conversation in seconds. | [Contact Volume API](../../apis/contact-center/contact-volume.md)-Parameter: CallVolumeUpdate.conversationHandleTime |
| Talk Time | Interaction logs. | Extract agent-client conversation durations. | Total talk time during the conversation in seconds. | [Contact Volume API](../../apis/contact-center/contact-volume.md)-Parameter: CallVolumeUpdate.conversationTalkTime |
| Hold Time | Interaction logs. | Query session logs for hold events. | Total hold duration in seconds during the call. | [Contact Volume API](../../apis/contact-center/contact-volume.md)-Parameter: CallVolumeUpdate.holdDuration |
| After Call Work (ACW) | Agent interaction reports. | Extract ACW time from agent session logs. | After-call work duration in seconds. | [Contact Volume API](../../apis/contact-center/contact-volume.md)-Parameter: CallVolumeUpdate.acwDuration |
| Net Calls Handled (NCH)* | Analytics Dashboard or custom agent reports. | Export total handled calls per agent. | NA | NA |
| Sample size | Control/test group assignment in the analytics. | Export agent metadata and session data. | NA | NA |
| Same Day Callback (SDCB) + 1  | Interaction logs with timestamps. | Identify callbacks using client IDs and timestamps. | NA | NA |
| Client Availability* | Agent activity logs. | Divide actual productive time by expected productive time. | NA | NA |
| FCR | Session interaction logs. | Analyze client interactions within 7-day windows. | NA | NA |
| Agent Satisfaction | Feedback from agent assist logs. | Extract agent feedback via Agent Assist Feedback API. | NA | NA |
| CSAT | Post-interaction surveys. | Fetch CSAT ratings via the survey response export feature. | NA | NA |
| Uptime | System health logs or monitoring tools. | Use AI Agents monitoring APIs or analytics for uptime tracking. | NA | NA |
| Latency | Session analytics or logs. | Extract latency data from interaction response times. | NA | NA |
| Usage Adoption | Agent activity logs. | Calculate percentage usage from augment feature access logs. | NA | NA |
| Model accuracy Score | NLU Model Performance Dashboard. | Export intent and entity accuracy metrics from analytics. | NA | NA |
| Total Conversations | Dashboard → Automations / Queues & Agents / Interactions Report / Total Volumes report / Queue Metrics Interval Report / Queue Metrics Summary Report / Call Details API / Call Volume API | NA | All conversations entering the Contact Center AI routing system fulfilling filters. | NA |
| Waiting | Dashboard → Queues & Agents | NA | All calls/chats currently waiting in queue. | NA |
| Ongoing | Dashboard → Queues & Agents | NA | All calls/chats currently interacting with agents. | NA |
| Idle | Dashboard → Queues & Agents | NA | All calls/chats where the customer has been silent for some time. | NA |
| Expired | Dashboard → Queues & Agents | NA | All calls/chats ended but disposition not yet set. | NA |
| Completed | Dashboard → Automations / Queues & Agents / Queue and Agent performance tables / Dashboard-Interactions / Interactions Report / Total Volumes Report / Queue Metrics Interval Report / Queue Metrics Summary Report / Agent Metrics Daily Report | NA | All calls/chats in completed state (closed by agent, abandoned, or terminated). | NA |
| Abandon Rate | Dashboard → Queues & Agents / Monitor tab-SLA / Queue Metrics Summary Report | (Number of conversations abandoned / Number of conversations closed) × 100 | All calls/chats entered queue but dropped prematurely. | NA |
| Queue Load | Dashboard → Queues & Agents | (Voice + Chat/3 + Messaging/8 + Email/10) × 100 / Available Agents | NA | NA |
| Resolved Rate | Dashboard → Queues & Agents | (Number of conversations closed with dispositions as Resolved / Number of conversations closed) × 100 | Calls/chats resolved successfully. | NA |
| Average Pick-up Time | Dashboard → Queues & Agents / My Dashboard | Sum(Time from ringing start to pickup) / Number of conversations answered | Average pickup time. | NA |
| Average Engagement Time | Dashboard → Queues & Agents / My Dashboard | Sum(Time from agent starts talking to call end) / Number of conversations answered | Average engagement time. | NA |
| Average Talk Time | Dashboard → Queues & Agents / My Dashboard / Queue Metrics Reports / Agent Metrics Reports / Call Volume API / Monitor tab | Average Engagement time – mute/hold time | Average talk time. | NA |
| Average Mute/Hold Time | Dashboard → Queues & Agents / My Dashboard | NA | Average mute/hold duration of agent. | NA |
| Average Speed to Answer (ASA) | Dashboard → Queues & Agents / My Dashboard / Queue performance tables / Queue Metrics Reports / Call Volume API / Monitor tab / Service levels | NA | Average time from queue entry to agent acceptance for answered conversations. | NA |
| Average First Response Time | Dashboard → Queues & Agents / My Dashboard / Agent Chat Metrics Report / Monitor tab | Sum(Time from acceptance to first greeting) / Number of answered conversations | Average first response time. | NA |
| Average Agent Response Time | Dashboard → Queues & Agents / My Dashboard / Monitor tab / Agent Chat Metrics Report | Sum(time taken by agent to respond to messages) / Number of responses (excluding first) | Average time taken by agent to respond to customer. | NA |
| Average Customer Response Time | Dashboard → Queues & Agents / My Dashboard | Sum(time taken by customer to respond to agent messages) / Number of responses (excluding first) | Average customer response time. | NA |
| Total Transfers | Dashboard → Queues & Agents / My Dashboard / Service levels / Monitor tab / Agent Metrics Reports / Call Volume API | NA | Number of all calls/chats transferred. | NA |
| Call Transfers | Dashboard → Queues & Agents / My Dashboard / Service levels / Monitor tab / Agent Metrics Reports / Call Volume API | NA | Number of voice calls transferred out. | NA |
| Chat Transfers | Dashboard → Queues & Agents / My Dashboard / Service levels / Monitor tab / Agent Metrics Reports / Call Volume API | NA | Number of chats transferred out. | NA |
| Skills in Queue (Live) | Dashboard → Queues & Agents | NA | Top 5 skills required by conversations in queue. | NA |
| Top Skills | Dashboard → Queues & Agents | NA | WordCloud of top 10 skills in use. | NA |
| Conversations by Disposition | Dashboard → Queues & Agents / Queue Disposition Report | NA | Shows conversations with dispositions. | NA |
| Average Satisfaction Rating | Dashboard → Queues & Agents / Agent performance tables / Reports | Sum(CSAT) / Number of CSAT responses | Average CSAT. | NA |
| Customer Satisfaction by Channel | Dashboard → Queues & Agents | NA | Displays CSAT by channel. | NA |
| Offered | Dashboard → Queues & Agents / Reports / APIs | NA | Conversations assigned to agent. | NA |
| Answered | Dashboard → Queues & Agents / Reports / APIs | NA | Conversations accepted by agent. | NA |
| Average Response Time | NA | Sum(time taken by agent to respond to customer) / Responses (excluding first) | Average agent response time. | NA |
| Unanswered | Agent chat metrics report / Dashboard → Queues & Agents | NA | Conversations assigned but not answered. | NA |
| Abandoned (with Agent) | Dashboard → Queues & Agents / Agent performance tables | Chat-user idle scenario / Voice-user ended conversation while agent on hold | Conversations abandoned while with agent. | NA |
| Transferred | Dashboard → Queues & Agents / Reports | NA | Conversations transferred to another agent/queue. | NA |
| Logged in | Dashboard → Queues & Agents / Agent performance tables | NA | Agent logged-in time within chosen interval. | NA |
| Closed / Hour | Dashboard → Queues & Agents / Reports | Number of conversations closed / Logged-in time | Conversations closed per hour. | NA |
| Incoming | Dashboard → Queues & Agents / Reports / APIs | NA | Number of conversations reaching queue. | NA |
| Voicemails | Dashboard → Queues & Agents / Reports | NA | Number of conversations going into voicemail. | NA |
| Terminated | Dashboard → Queues & Agents / Reports | NA | Number of conversations terminated by system. | NA |
| Start time | NA | NA | Timestamp when conversation started. | NA |
| Duration | NA | NA | Time between start and end of conversation. | NA |
| Accepted | Agent chat metrics report / Reports | NA | Chats accepted by agent. | NA |
| Not Accepted | Agent chat metrics / Reports | NA | Chats not answered/rejected by agent. | NA |
| Abandoned |
