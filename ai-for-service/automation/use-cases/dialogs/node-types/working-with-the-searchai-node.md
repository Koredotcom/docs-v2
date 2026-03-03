# Search AI Node

The **Search AI Node** is used to incorporate search functionality within a dialog task. It leverages **Search AI** to perform searches on the ingested content, enabling the AI Agent to return relevant and contextual responses. By allowing the configuration of meta filters and search rules, this node enhances the precision, relevance, and effectiveness of the conversational AI Agents experience.

**Key Features of the Search AI Node:**

* **Seamless Integration with Search:** Effortlessly embed search capabilities into your dialog tasks using Search AI.
* **Custom Search Parameters:** Easily configure search parameters and filters, and set up workflows that redirect to search.
* **Meta Filters:** Define meta filters to narrow the search scope based on specific topics, document categories, or tags, ensuring more relevant results.
* **Intent-Specific Search:** Scope searches to specific intents, reducing intent collisions and improving AI response accuracy.

## Using Search AI Nodes in Automation Workflows

A **Search AI node** can be placed in the automation workflows when there is a need to retrieve contextually relevant information from large content sources like documents, FAQs, or third-party applications to execute the next step in the automation. It can also be used as a fallback mechanism when the regular automation is not able to find any matching intent. 

For example, in IT support automation workflows, a dialog flow can be defined to handle application-specific error queries. When a known error is detected, the workflow checks the real-time health status of the corresponding application and provides guided troubleshooting steps. If the issue persists beyond these predefined actions, the workflow can fall back to a Search AI node, which retrieves relevant documentation and highlights potential causes of failure or resolutions from internal knowledge sources. This enhances the automation’s ability to provide contextual support even for complex or edge-case scenarios, which can be challenging to add to the dialog flow. 

## Adding the Node

1. Go to **Automation** > **Dialogs** and select the task to which you want to add the **Search AI Node**.
2. Click **GenAI** and then click **Search AI Node**. Alternatively, you can drag and drop the **Search AI Node** to the required location on the canvas. For more information on adding nodes, see [add a node](../navigating-dialog-tasks.md#add-node-to-dialog).


## Configuring the Node

 

### Component Properties


!!! Note

    Changes made in this section apply to all dialog tasks using this node.


**Name:** Unique name used to identify the node.

**Display Name:** Name displayed on the node. 

**Search Configuration**: Choose how the search query is formulated:

* **Last User Input:** Uses the user's most recent message as the search query (default).
* **Custom:** Enables you to specify static text or dynamic variables to create a more tailored and controlled search query. For example, you can pass a variable as the search input using the following format:

    ```javascript
    {{context.entities.nodename}}
    ```

**Filters:** Define rules to search from the content in the SearchAI that are qualified by the filter. By narrowing the search scope, you ensure more relevant responses and reduce noise from unrelated content. To add a new filter, 

1. Click **+ Add Filter**.
2. Provide the following:
    * **Field**: Specify the name of the field you want to filter by. The content indexed in Search AI is stored in a JSON structure, where the content and its metadata are organized under different fields. To apply a filter using one of these fields, ensure that the Field Name exactly matches the corresponding field name in the ingested content. For example, to filter results from uploaded documents, use "sourceType": "file". Similarly, to filter based on the document title, use "recordTitle" as the field. To view available field names and their structure, navigate to the [Chunk Viewer](../../../../searchai/chunk-browser.md) in the Search AI app and inspect the content in JSON format. 

    * **Condition:** Choose from supported operators like contains, equals to, and exists.
    * **Field Value:** Enter a static value or dynamic variable as the value of the field. 

3. Use **AND**/**OR** logic to combine multiple filters and select specific content. 

**Results Configuration**: Configure how the results should be rendered:

* **Generate Answer**:
    * **Present Response to User:** This option is selected by default. It displays the response directly to the user. By default, a standard response template is used for search responses. You can modify the response by clicking **Manage Responses**. 
    * **Store Response in Context Object**: If selected, the user can access the entire payload in the context object “context.SearchAINode.nodename” and modify it later in subsequent nodes.

        !!! note

            If you implement the Search AI feedback mechanism using SearchAINode, ensure that the searchRequestId is included in the channel response. This is handled automatically when the response is presented directly to the user. However, if the SearchAINode response is saved in context and later rendered using a custom template, you must explicitly include the searchRequestId in the response. For instance, if you are using a custom template, add the searchRequestID as shown below.

    ```json
    const searchResponse = context.SearchAINode.SearchAINode;

    const answer = searchResponse.response.answer;
    const answer_payload = searchResponse.response.answer_payload

    // Create the new template format
    const reshaped = {
      type: "template",
      payload: {
        answer: answer,
        answer_payload: answer_payload,
        text: "<search-api-answer>",
        template_type: "answerTemplate",
        chunk_result: {},
        searchRequestId: searchResponse.searchRequestId // Mandatory for implementing feedback
      },
    }

    print(JSON.stringify(reshaped));
    ```

* **Return Qualified Chunks**: This option allows the user to receive only the chunks of data that meet the specified criteria.  
* In the **Variable Namespaces** section, associate the variable namespaces to execute this node and its transitions. This option is visible only when the app has the variable namespace enabled. You can go with the task-level settings or customize them for this node. For more information, refer to [Managing Namespaces](../../../../app-settings/managing-namespace.md).
 
### Instance Properties

The settings in the Instance Properties tab are specific to the current dialog task and do not reflect in other dialog tasks that use this node.

**Advanced Controls**

* **Timeout**  - The maximum wait time for the service call made to Search AI to respond. The timeout range can be any value between **1 Second** to **60 Seconds.** The default value is 20 Seconds.
* **Timeout error handling**: Choose how the app should respond when the timeout occurs.
* **Close the Task and trigger Task Execution Failure Event**, or
* **Continue with the task and transition to this node**; select the node to which the service call can transition in the flow.

**Custom Tags**: Add tags to build custom profiles of your AI Agent’s conversations. [Click here for more](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md).

### Connections Properties


To set up node connection conditions, please follow the steps outlined in [Adding IF-Else Conditions to Node Connections.](../node-connections/nodes-conditions.md) These settings apply only to this instance and will not affect other uses of the node. This setting are available only if this is the last node in a sequence.

 **Connection Path Options**

1. **Not Connected:** No next node defined. 
2. **End of Dialog:** Ends the current dialog.
3. **Return to Flow:** Ends the dialog task and resumes the Flow Builder at the next node.

    Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context. There are two deflection types: ‘ Automation’ and ‘Agent Transfer’. Deflect to Chat works only with Voice Gateway Channels (Phone number or SIP Transfer).  
    !["Deflect to Chat](images/deflect-to-chat1.png "Deflect to Chat")



## Related Links

* [Use Agent Node and Search AI to Generate Answers](../../../../how-tos/use-agentnode-and-searchai-to-generate-answers.md)