# Generative AI Dashboard



The new GenAI Dashboard gives you comprehensive visibility into LLM token usage and performance across AI for Service. You can track token consumption, request volume, and median latency by module, model, and feature, with detailed breakdowns available in the Performance Analytics section. These insights help organizations monitor feature adoption, manage infrastructure costs, optimize AI capabilities, and make informed scaling decisions.

### Token Data Collection

The Platform automatically captures usage data for pre-built models (OpenAI, Azure OpenAI, and Anthropic) regardless of the prompts used. For custom models and Amazon Bedrock models, you must map the Request and Response Token Keys in the custom prompts to enable tracking. Without this mapping, the Platform cannot calculate consumption, which may result in unmonitored usage and unexpected costs.

To access the dashboard, go to **Analytics** > **Gen AI Analytics** > **Overview**. 

<img src="../images/genai-dashboard.gif" alt="GenAI Dashboard" title="GenAI Dashboard" style="border: 1px solid gray; zoom:70%;">




### Filters

Users can apply filters at the top of the page by module, model, feature, and date range to focus on specific interactions and drill down into targeted performance metrics.


### Metrics

The following key metrics are displayed:



* **Total Tokens Used**: The total number of tokens consumed in requests and responses tokens during the selected period.
* **Total Requests**: The total number of LLM calls made during the selected period.
* **Success Rate**: The percentage of LLM requests that succeed.
* **Average Latency**: The average response time for LLM requests.


### Requests Widget

A line chart displays Total Requests, Successful Requests, and Failed Requests over time. This visualization helps you identify demand spikes, monitor system stability, and troubleshoot request failures.


### Token Consumption Widget

A line chart displays token usage trends over time, including Total Tokens, Request Tokens, and Response Tokens. This visualization helps you monitor consumption patterns, manage costs, and optimize prompt and response design for efficiency.


### Models Widget

A pie chart displays language model usage by Total Requests, Token Consumption, and Median Latency. This visualization helps you understand which models are used most frequently to optimize resource allocation. Click a model to view its record in the Performance Analytics section. 




### Features Widget

A pie chart displays feature usage across LLM interactions, broken down by Total Requests, Token Consumption, and Median Latency. This visualization shows how different LLM-powered features are utilized. Click a feature to view its record in the Performance Analytics section. 




