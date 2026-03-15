# Performance Analytics






The Performance Analytics page provides comprehensive insights into LLM performance across models, features, and requests. By analyzing success rates, token consumption, and response times, organizations can track accuracy, manage costs, and ensure system reliability. These analytics enable data-driven decisions for optimization and enhanced user experience through granular evaluation.

To access the report, go to **Analytics** > **Gen AI Analytics** > **Performance Analytics**. You can also access this report from the dashboard by selecting a model or feature in its corresponding widget.

<img src="../images/performance-analytics.png" alt="GenAI Dashboard" title="GenAI Dashboard" style="border: 1px solid gray; zoom:70%;">


Users can apply filters at the top of the page by module, model, feature, and date range to focus on specific interactions and drill down into targeted performance metrics.

**Field Description**

You can sort the data alphabetically or by values in ascending or descending order. Click on any record to view detailed model performance metrics, including request trends, token consumption patterns, and latency analysis.

<img src="../images/performance-analytics-details.png" alt="GenAI Dashboard" title="GenAI Dashboard" style="border: 1px solid gray; zoom:70%;">

|Fields                  | Description  |
|---------------------------|---------|
| Model                    | The Large Language Model to which the request was made.     |
| Feature                  | The Platform feature making calls to the LLM models.  |
| Requests                 | Total number of LLM calls made for that model–feature combination.     |
| Successful Requests      | Number of LLM calls that executed without errors.     |
| Failed Requests          | Number of LLM calls that encountered errors. Together with successful requests, provides an execution breakdown to monitor system reliability.  |
| Total Tokens             | Combined token count for request and response.   |
| Request Tokens           | Request tokens for a Language Model (LLM) are the individual parts of input text, like words or punctuation, given to the model to create a response. These tokens form the basis for the model’s understanding. |
| Response Tokens          | Response tokens for a Large Language Model (LLM) are the pieces of generated output, like words or punctuation, showing the model’s response. These tokens form the structured output of the model.            |
| Avg. Tokens per Request  | Average token consumption for each request. |
| Avg. Tokens per Response | Average token consumption for each response. |
| Average Response Time    | The mean time taken by the model to return a response.|
| Median Latency           | Median processing time, useful for understanding response consistency.   |



