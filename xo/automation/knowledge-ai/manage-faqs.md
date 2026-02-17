[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Manage Knowledge Graph

FAQs allow you to add question-answer sets to your Knowledge Graph and map them to related ontology terms. This feature improves intent recognition and increases the performance of your VA.

!!! Warning "Important"

    * The **Manage KG** option is available for enterprise accounts only.
    * Limited to 50k FAQs across 20k nodes to avoid performance issues.

The Few-Shot Knowledge Graph supports all features explained in this document, except the following:

* Adding the root term or node without an ontology structure. However, you can create one to improve intent detection.

* When switching from Ontology Graph, existing default terms stay until updated. After updating, they become organizer terms and can be set as mandatory.

* Lemmatization using Parts of Speech Search is unavailable for answer and contextual paths qualification. See the [Knowledge Graph Types Comparison Table](./knowledge-graph-overview.md#compare-knowledge-graph-types){:target="_blank"} for a detailed list of supported features.

* Path Level and Knowledge Graph Synonyms are supported only for mandatory terms and tags.

## Add FAQs

Step to add an FAQ:

1. Go to **Automation AI** > **Knowledge AI** > **FAQs** > **Manage KG**. 
2. Click **Add Intent** on the top-right.
<img src="../images/add-faq-intent.png" alt="add faq intent" title="add faq intent" style="border: 1px solid gray; zoom:75%;">

3. On the **Intent** window, select **FAQ**.
4. In the **Add Question** field, enter the question that describes the user’s query.
5. (Optional) If there are alternatives to the same question, add them in the **+ Alternate Question** field. Repeat the step for all the alternative questions you want to add.
6. (Optional) Use patterns to define the FAQs. This can be done by preceding the pattern with || (two vertical bars) in the alternate question field. The Platform marks these as patterns and evaluates them accordingly.
7. (Optional) Add terms that enable the Knowledge Graph Engine to identify questions more effectively.
8. (Optional) Enter a **Display Name** to represent the FAQ to the end-users.
9. In the **Bot Response** field, add the default responses when the user asks the FAQ.
10. (Optional) If there are alternate responses, add them in the **+ Alternate Response** field. Repeat the step for all the alternative responses you want to add.
11. If you want to add condition-based responses for the FAQ, enable the **Conditional Response** toggle and provide the details. Learn more about [conditional responses](../knowledge-ai/manage-faqs.md#faq-conditional-responses). 
12. (Optional) Add a **Reference Id**. This field is used to reference any external content used as a source for this FAQ.
13. (Optional) Enable or disable the **Intent Status** for the FAQ intents. The Knowledge Graph does not use the disabled FAQ intents. These intents do not participate in the intent recognition process during testing and end-user interaction.  
<img src="../images/add-faq-form.gif" alt="add faq form" title="add faq form" style="border: 1px solid gray; zoom:75%;">

As you enter these questions, consider terms you can further add to your FAQ hierarchy. [Learn more](knowledge-graph-terminology.md).

## Manage Default Responses

You can compose a simple or complex channel-specific reply for the FAQ Response. The editor is like any other prompt editor on the Platform, such as messages for dialog nodes. [Learn more](../use-cases/dialogs/prompt-editor.md#prompt-editor){:target="_blank"}.

You can add channel-specific responses to questions in your Knowledge Graph. By creating varying responses with different language and formatting options, you can leverage the dynamic responses on the selected channels. 

To add a channel-specific response, select the channel from the channels list before typing the response.

!!! Note

    Add at least one response for All Channels, which will be triggered in the absence of a channel-specific response.

### Handling Lengthy Responses and Improving Readability

Sometimes, the FAQ responses are lengthy or may include nice-to-have information along with the primary response. To improve the readability of such responses, you can do one of the following:

* Split information into easy-to-read chunks that go as separate messages in a sequence by clicking **Add Extended Response** on the top-right of the **Bot Response** window.

* Select **Add Alternate Response** if your question has multiple answers. Repeat the step for all the alternative responses you want to add. At runtime, the Platform picks one response at random.

## Add FAQs from an Existing Source

When the Knowledge Graph you are trying to build is large and complex, it's important to have all the FAQs in one place and Import or Extract them as required. 

Adding FAQs from an existing source is the most effective implementation method. The different ways to accomplish this include:

* Use the Knowledge Graph Generator to generate a Knowledge Graph from an FAQ list and import it to your VA. [Learn more](generate-a-knowledge-graph.md){:target="_blank"}.
* Select the **Import** option to import a Knowledge Graph exported from another VA. [Learn more](import-and-export-knowledge-graph.md#import){:target="_blank"}.
* Leverage an existing list of Q&As from **Knowledge Extraction** to populate the Questions and Responses. [Learn more](knowledge-extraction.md){:target="_blank"}.

## Move FAQs Between Nodes

You can move one or more Questions and Response sets between nodes in your Knowledge Graph.

Steps to move FAQs between nodes:

1. On the Knowledge Graph, click the node name from which you want to move the FAQ. The intents associated with the node are displayed on the right pane.

2. Identify the FAQ you want to move and select the checkbox next to it. You can select multiple items.

3. Drag the FAQ and drop it on the relevant node. The node is highlighted, and the FAQ is displayed on the right pane of the node.  
<img src="../images/move-faq-to-new-node.gif" alt="move faq between nodes demo" title="move faq between nodes demo" style="border: 1px solid gray; zoom:75%;">

## Edit FAQs and Responses

Steps to edit FAQs and responses:

1. From the nodes hierarchy, select the relevant term. FAQs associated with the term appear on the right pane.
3. Hover over the intent or response and click the **Edit** icon.
4. Make changes and click **Save**.
5. To delete the question, click the **Bin** icon.

   <img src="../images/edit-delete-faq-responses.png" alt="edit or delete faq responses" title="edit or delete faq responses" style="border: 1px solid gray; zoom:75%;">

You can also select multiple intents to delete them in bulk.

<img src="../images/delete-multiple-intents.png" alt="delete selected intents" title="delete selected intents" style="border: 1px solid gray; zoom:75%;">

## FAQ Conditional Responses

The feature lets you define rules for different responses to FAQs depending on specific conditions. It helps you handle complex scenarios while giving users more relevant, context-aware answers.

### How Conditional Responses Work

When the conditional responses are present, it works as follows:

1. The Platform identifies the appropriate FAQ using the regular process based on the selected model, training, and alternate questions.
2. Once the FAQ is identified, the conditions are evaluated in the order they're defined.
3. If a condition is met, its corresponding response is selected.
4. If no conditions are met, the default response is used.
5. Channel-specific responses take priority for both conditional and default responses.

      * Channel-specific priority: If a matching condition has a response for the user's channel, use that response first. For example, for MS Teams users, the MS Teams response is used over the "All Channels" response.

      * "All Channels" fallback: If no channel-specific response exists, use the "All Channels" response. For example, MS Teams users get the "All Channels" response when only the Slack and "All Channels" options exist.
        
      * Condition skipping: If responses exist only for other channels, skip to the next condition. For example, skip responses that are meant only for Slack and Twitter. If no conditions match, deliver the default response.
        
      * Default response selection: For default responses, first attempt to select a channel-specific response. If none is available, deliver the default "All Channels" response.


!!! example "Example Scenarios"

      Let's consider an FAQ about shipping options for an e-commerce platform. The condition will be based on the customer's location, a simple variable that can be easily compared using the "Equals To" operator.

      **Conditions and Responses**

      Condition: Customer Location Equals To "United States"

      * Web: "We offer free standard shipping on orders over $50 within the United States. Express shipping is available for $15."
      *   Mobile: "Free shipping on $50+ orders in the US. Express: $15. Tap for details."

      Condition: Customer Location Equals To "Canada"

      * Web: "We offer flat-rate shipping to Canada for $10. Free shipping is available on orders over $100."
      * Mobile: "Canada shipping: $10 flat rate. Free on $100+ orders. Tap for info."

      Condition: Customer Location Equals To "United Kingdom"

      * Web: "Shipping to the UK is £5 for standard delivery. Free shipping on orders over £75."
      * Mobile: "UK shipping: £5 standard. Free on £75+ orders. Tap for options."

      Default (No condition met):

      * Web: "International shipping rates vary. Please check our shipping page for detailed information on rates and delivery times."
      * Mobile: "International shipping rates vary. Tap here for your location's rates and times."
      * All Channels: "Shipping options depend on your location. Please contact our customer service for specific shipping information."

      **Scenarios**

      Let's see how the responses are selected in different scenarios:

      Scenario 1: Customer from the United States accessing using Web

      * Condition "Customer Location Equals To United States" is satisfied for the Web.
      * Selected Response: "We offer free standard shipping on orders over $50 within the United States. Express shipping is available for $15."

      Scenario 2: Customer from Canada accessing using Mobile

      * Condition "Customer Location Equals To Canada" is satisfied for Mobile.
      * Selected Response: "Canada shipping: $10 flat rate. Free on $100+ orders. Tap for info."

      Scenario 3: Customer from the United Kingdom accessing using Web

      * Condition "Customer Location Equals To United Kingdom" is satisfied for the Web.
      * Selected Response: "Shipping to the UK is £5 for standard delivery. Free shipping on orders over £75."

      Scenario 4: Customer from France accessing using Mobile

      * Channel-specific and "All Channels" conditions are not satisfied.
      * Selected Response (default): "International shipping rates vary. Tap here for your location's rates and times."


### Best Practices 

When setting up conditional responses:

* Identify important factors like location, customer type, products, and services.

* Create specific conditions for these factors.

* Order your conditions from most to least specific.

* Use ‘AND’ for specific scenarios and ‘OR’ for broader ones.

* Always set a default response.

* Create only a few conditions or nested rules; too many conditions can make the graph overly complex and difficult to manage.

* When using variables from the context object to define the conditional responses, use only ‘BotUserSession’ variables (context.session.BotUserSession), as they will be available across the session between the user and the AI Agent.

* Create context, environment, or content variables before using them in conditional responses.

* Save and train the FAQ after changes; publish to update the end channel.


### Limitations 

* Maximum 10 conditions per FAQ.
* Maximum 10 nested rules per condition.

### Setting Up Conditional Responses 

Steps to set up conditional responses:

1. Navigate to the FAQ management section in your dashboard. 
2. Select the FAQ you want to enhance with conditional responses. 
3. Toggle to enable the **Conditional Response** switch.  
<img src="../images/conditional-response.png" alt="conditional-response" title="conditional-response" style="border: 1px solid gray; zoom:75%;">

4. Define conditions based on content, context, and environmental variables. The condition must be defined properly without any discontinuation.  
For example: `context.session.Usercontext.emailID Equals To xxx@xmail.com`
5. Select an appropriate operator from the dropdown list: Exists, Does Not Exist, Equals To, or Not Equals To. 
6. Enter the value to compare against. 
7. To add multiple rules to a condition, choose AND/OR logic.
8. Under each condition, enter your response text in the **Then Response** section.
9. Optionally, specify channel-specific variations of the response by selecting the channel from the dropdown menu of **All Channels.**

!!! note "Notes"

    * New apps use the Few-Shot model; imported apps may use the Ontology model. Check the model in **NLU Config** > **Knowledge Graph** > **KG Type**.
    
    * Enabling conditional responses removes extended responses. Disabling conditional response permanently deletes conditional response data.
    
    * Exporting the Knowledge Graph as JSON includes conditional responses; exporting as CSV does not.
