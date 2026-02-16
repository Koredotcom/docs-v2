
# Automation AI - API Rate Limits

The Platform enforces rolling rate limits to restrict the number of API requests a user, application, or service can make within a dynamic timeframe. It helps prevent a single user or service from consuming disproportionate resources that could degrade the service for others.

Requests are monitored against both sixty-second and one-hour limits. As long as neither limit is exceeded, the application can continue making requests. However, if the one-hour limit is breached, all further requests are blocked, even if the sixty-second limit is still within bounds.

When a rate limit is exceeded, subsequent requests will fail with one of the following error messages:

* Minute-based Limit: “_You've exceeded the per-minute rate limit. Please wait for sometime before retrying_.”

* Hour-based Limit: “_You've exceeded the hourly rate limit. Please wait for sometime before retrying_.”

## API Rate Limit Matrix


<table>
  <tr>
   <td><strong>ENFORCEMENT LEVEL</strong>
   </td>
   <td><strong>RATE LIMIT</strong>
   </td>
   <td><strong>API LIST</strong>
   </td>
  </tr>
  <tr>
   <td>bot
   </td>
   <td>60 per minute<br>
<br>
1800 per hour
   </td>
   <td>Bot Definition APIs<br> <a href="../upload-file/" target="_blank">Upload File</a>, <a href="../import-bot-as-new-bot/" target="_blank">Import Bot as a New Bot</a>, <a href="../import-bot-into-an-existing-bot/" target="_blank">Import Bot into an Existing Bot</a>,<a href="../import-bot-functions/" target="_blank">Import Bot Functions</a>, <a href="../install-sample-bot/" target="_blank">Install Sample Bot</a>, <a href="../bot-export/" target="_blank">Bot Export</a>, <a href="../channel-enablement/" target="_blank">Enable Channel</a>,<a href="../add-enable-new-language/" target="_blank">Add and Enable a New Language</a>, <a href="../enable-existing-language/" target="_blank">Enable an existing Language</a>, <a href="../disable-existing-language/" target="_blank">Disable an existing Language</a>, <a href="../language-updation/" target="_blank">Update a Language Configuration</a>, <a href="../publish-bot/" target="_blank">Publish Bot</a>, <a href="../bot-variables-import/" target="_blank">Bot Variables Import</a>,<a href="../batch-test-execution/" target="_blank">Batch Test Execution</a>, <a href="../get-batch-test-suites/" target="_blank">Get Batch Test Suites</a>, <a href="../export-batch-test-suite/" target="_blank">Export Batch Test Suite</a>, <a href="../import-batch-test-suite/" target="_blank">ImportBatch Test Suite</a>, <a href="../delete-batch-test-suite/" target="_blank">Delete Batch Test Suite</a>, <a href="../delete-batch-test-suite-execution/" target="_blank">Delete Batch Test Suite Execution</a>,<a href="../create-conversation-test-suite/" target="_blank">Create (Import) a Conversation Test Suite</a>, <a href="../execute-test-suite/" target="_blank">Conversation Test Suite Execution</a>,and <a href="../delete-test-suite/" target="_blank">Delete Conversation Test Suite</a>
<br><br>
NLP Training APIs<br><a href="../import-ml-utterances/" target="_blank">ML Utterances Import</a>, <a href="../ml-utterances-train/" target="_blank">ML Utterance Train</a>, <a href="../ml-utterances-export/" target="_blank">ML Utterances Export</a>, <a href="../faq-training/" target="_blank">FAQ Training</a>, <a href="../extract-kg-from-file-url/" target="_blank">Extraction from file or URL</a>, <a href="../get-kg-extraction-history/" target="_blank">Get Extractions History</a>, <a href="../get-kg-extraction-questions/" target="_blank">Get Extraction Question</a>, <a href="../get-knowledge-tasks/" target="_blank">Get Knowledge Tasks</a>, <a href="../add-questions-to-knowledgegraph/" target="_blank">Add Questions from Extraction</a>, <a href="../get-faqs-from-knowledge-task/" target="_blank">Get FAQs</a>, and <a href="../update-nlp-configurations/" target="_blank">Update NLP Configurations</a>
<br><br>
Analytics APIs<br><a href="../find-intent/" target="_blank">Find Intent</a>, <a href="../conversation-history/" target="_blank">Conversation History</a>, <a href="../conversation-summary/" target="_blank">Conversation Summary</a>, <a href="../fetch-feedback-survey-scores/" target="_blank">Feedback Analytics</a>, <a href="../fetch-debug-logs/" target="_blank">Debug Logs</a>, <a href="../get-change-logs/" target="_blank">Get ChangeLogs</a>, <a href="../get-sessions-history/" target="_blank">Sessions History</a>, <a href="../get-dashboard-widget-data/" target="_blank">Get Dashboard Widget Data</a>, <a href="../get-analytics/" target="_blank">Get Analytics</a>, <a href="../user-engagement-trend/" target="_blank">User Engagement Trend</a>, and <a href="../conversation-details-and-summary/" target="_blank">Conversation Details and Summary</a>
   </td>
  </tr>
  <tr>
   <td>request_id
   </td>
   <td>60 per minute<br>
<br>
1800 per hour
   </td>
   <td>Bot Definition Status APIs<br><a href="../bot-import-status/" target="_blank">Bot Import Status</a>, <a href="../bot-export-status/" target="_blank">Bot Export Status</a>, <a href="../bot-publish-status/" target="_blank">Bot Publish Status</a>, <a href="../batch-test-execution-status/" target="_blank">Batch Test Execution Status</a>, <a href="../get-conversation-test-suite-creation-status/" target="_blank">Conversation Test Suite Creation Status</a>, and <a href="../get-test-suite-execution-status/" target="_blank">Conversation Test Suite Execution Status</a>
<br><br>
NLP Training Status APIs<br><a href="../ml-utterances-import-status/" target="_blank">ML Utterances Import Status</a>, <a href="../ml-utterances-train-status/" target="_blank">ML Utterance Train Status</a>, <a href="../ml-utterances-export-status/" target="_blank">ML Utterances Export Status</a>, and <a href="../faq-training-status/" target="_blank">FAQ Training Status</a>
   </td>
  </tr>
  <tr>
   <td>account
   </td>
   <td>60 per minute<br>
<br>
1800 per hour
   </td>
   <td>Admin APIs<br><a href="../get-bots/" target="_blank">Get Bots</a>, <a href="../import-roles/" target="_blank">Import Roles</a>, <a href="../get-roles/" target="_blank">Get Roles</a>, <a href="../get-user-roles-details/" target="_blank">Get User Roles Details</a>, <a href="../get-groups/" target="_blank">Get Groups</a>, <a href="../export-roles/" target="_blank">Export Roles</a>, <a href="../assign-bt-roles/" target="_blank">Assign BT Roles</a>, <a href="../assign-admin-roles/" target="_blank">Assign Admin Roles</a>, <a href="../update-user-access/" target="_blank">Update User Access</a>, <a href="../create-users/" target="_blank">Create Users</a>, <a href="../get-user-information/" target="_blank">Get Users Information</a>, <a href="../update-user/" target="_blank">Update User</a>, <a href="../delete-users/" target="_blank">Remove Users from Account</a>, <a href="../delete-customer-data/" target="_blank">Delete Customer Data</a>, <a href="../delete-customer-data-status/" target="_blank">Delete Customer Data Status API</a>, and <a href="../get-admin-console-audit-logs/" target="_blank">Get Admin Console Audit Logs</a>
   </td>
  </tr>
  <tr>
   <td>bot
   </td>
   <td>600 per minute<br>
<br>
18000 per hour
   </td>
   <td>Bot Definition Notification APIs<br><a href="../proactive-notifications/" target="_blank">Proactive Notification</a>, <a href="../proactive-notifications-status/" target="_blank">Proactive Notification Status</a>
   </td>
  </tr>
  <tr>
   <td>account+table
   </td>
   <td>600 per minute<br>
<br>
18000 per hour
   </td>
   <td>Data access APIs<br><a href="../data-insert/" target="_blank">Insert Data</a>, <a href="../bulk-data-insert/" target="_blank">Insert Bulk Data</a>, <a href="../data-update/" target="_blank">Update Data</a>, <a href="../data-delete/" target="_blank">Delete Data</a>, <a href="../query-table-data/" target="_blank">Get Table Data</a>, and <a href="../query-data-table-view/" target="_blank">Get View Data</a>
   </td>
  </tr>
</table>


## Best Practices

* Spread out calls evenly to avoid traffic spikes.
* Use filters to limit the data response size and avoid calls that request overlapping data.
* When the limit has been reached, stop making API calls. Wait for the specific time period to pass. Alternatively, implement a backoff strategy where your application automatically reduces its request frequency and retries failed requests after a calculated delay.

Need a higher or custom rolling Rate Limit? [Contact support](https://support.kore.ai/){:target="_blank"}.
