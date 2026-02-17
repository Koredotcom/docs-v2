# Answer Insights

**Answer Insights**  offers comprehensive analytics for each query-answer interaction within the Search AI application. This feature provides an intuitive interface, allowing users to view and analyze data related to answer performance.

**Key Features**

* Detailed Analytics: Understand user behavior and spot common query patterns.
* Answer Feedback: Collect and analyze feedback to assess the quality of your responses.
* Debugging: Use insights to troubleshoot problems and improve application performance.
* Continuous Improvement: Identify areas for enhancement to ensure more accurate and relevant responses.

Answer Insights enables organizations to optimize the performance and user satisfaction of their Search AI application. It helps improve the overall user experience by providing visibility into how well answers are performing, supports data-driven decisions for content improvement, and allows the application to be refined in response to evolving user needs.

To view, go to the **Analytics** page and select **Answer Insights**. 


![Answer Insights](images/new-answer-insights.png "Answer Insights")

This report captures the following key metrics:

* **Queries**: Displays the specific questions or search terms submitted by users.
* **Answer Count**: Indicates the number of times a query received a response.
* **Timestamp**: Records the date and time when the query was made.
* **Feedback**: Records the positive or negative feedback received on the answer. If an answer gets a mix of both, the majority sentiment is displayed. For example, if an answer receives 20 feedback responses, with 16 being positive, the feedback is shown in green with a count of 16. 

It helps administrators and content managers evaluate the effectiveness of the application in addressing user needs by identifying popular queries and the response rate.

You can also the analysis using the following features:

* **Search**: Quickly locate specific queries by entering keywords.
* **Sort**: Arrange queries based on query count or answer count like most asked, least asked, most answered and least answered. 
* **Filter**: Narrow down results based on query time, enabling focused insights for specific timeframes. You can select preset time intervals like this week, this month, etc or you can provide custom dates for filtering. Note that the custom date range cannot exceed 30 days. 

![Answer Insights](images/insights-search-sort.png "Filter Queries")

## Detailed information on each Query

For every query, you can access detailed insights, including the generated answer and retrieved chunks. This helps assess the application's response accuracy and behavior.

Click on a query record to see a list of answers generated each time the query was posted.

![Answer Insights](images/answer-summary.png "Answer Details")

Click on any answer record to view additional details. The information is displayed in three tabs:

**Overview**: Displays the query, the generated answer, and metadata such as when and how the query was posted. It also shows the feedback given by the user on the answer. 

![Answer Insights](images/detailed-answer.png "Answer Details")

**Retrieved Chunks**: Lists the relevant retrieved chunks, the top chunks sent to the LLM for answer generation, and the specific chunks used in the final response. This helps evaluate retrieval accuracy.

![Answer Insights](images/chunks.png "Retrieved Chunks")

**Request and Response**: Shows the response in JSON format. 

![Answer Insights](images/response.png "Answer Insights")

To view all the above details in JSON format, click the **JSON View** link in the top-right corner.
