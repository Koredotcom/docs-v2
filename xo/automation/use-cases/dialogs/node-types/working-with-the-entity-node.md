# Entity Node

AI Agents need to extract relevant information from the user utterance to fulfill the intent.

Take a look at this sample utterance: _Book me a flight from LA to NYC on Sunday_. To act on this user intent, which is to book a flight ticket, the AI Agent should extract the entities such as the _source city_ (LA), _destination city_ (NYC), and _departure date_ (Sunday).

So, in a Dialog Task, for every critical data you want to get from a user utterance, you should create a corresponding entity node. You can add prompt messages to these nodes for users to input the required values.

The Platform supports ~30 [entity types](../entity-types.md){:target="_blank"} such as Address, Airport, Quantity, and so on. You can also define the entities as a selection from a list, free-form entry, file or image attachment from a user, or as regex expressions. You can also create custom regex and use these regex expressions as patterns to enable the masking of sensitive data contextually.

!!! Note

    You need to follow one entity node with several other entity nodes to collect a series of user inputs to complete a transaction, such as a username, location, amount, and due date, followed by a Webhook node to process a request to an API to complete an online transaction.


## Add the Node

Setting up an entity node in a dialog task involves the following steps:

1. Open the dialog task to add the **Entity** node.
2. Add the entity node in the designated place. For information on adding nodes, [Add a Node](../using-the-dialog-builder-tool.md){:target="_blank"}.
3. The Entity window is displayed with the **Component Properties** tab selected by default.

<img src="../images/entity-node-img1.png" alt="Entity node" title="Entity node" style="border:1px solid gray;zoom:70%;">

**Entity and Multilingual AI Agents:** If you add a new entity to a multilingual AI Agent, the platform adds the entity for all languages, as it follows a consistent flow definition across all languages. The flow definition includes the list of nodes, transitions between the nodes, and some essential properties of nodes like node id, node type, entity type, etc. However, language-specific properties, such as prompts, error messages, lists of synonyms, etc., must have separate values for each language.


## Configure the Node


### Component Properties

!!! Note

    The configurations you set up or modify in this section are reflected in all other dialog tasks that use this node.

1. On the **Component Properties** tab, enter a **Name** and **Display Name** for the entity node. Entity names cannot include spaces.
2. From the **Type** drop-down list, select an entity type depending on the expected user input. For example, if you want the user to type the departure date, select **Date** from the drop-down. The platform does the basic validation based upon the Type selected.  
The **Entity Type** provides the NLP Interpreter with the expected type of data from a user utterance to enhance recognition and system performance. For more information, refer to [Entity Types](../entity-types.md){:target="_blank"}.
3. Based on the Type selected, you can set the Entity as **Multi-item**, allowing the user multiple selections. If enabled, the AI Agent should expect multiple items from the user for this entity separated by a comma (,), semicolon (;), or ‘and’.
4. Under the **User Prompt** section, enter the prompt message that you want the user to see for this entity. For example, _Enter the Departure Date_.
    1. You can enter channel-specific messages for user prompts using the **Manage** link. For more information, refer to [Using the Prompt Editor](../prompt-editor.md){:target="_blank"}.
    2. You can override the user prompt for this particular instance. To override,
        * Click the **Settings** icon on the right.
        * Enable the **Override for this instance** toggle. Once you enable this option, you can enter the user prompt for this particular instance. Disabling this option would delete the instance-specific prompt and revert it to the component property.

5. Under the **Error Prompts** section, review the default error message, and if required, you can modify the error messages displayed for this entity.
    1. To manage the error messages, click **Manage** link. For more information, refer to [User Prompts](../prompt-editor.md){:target="_blank"}.
    2. You can override the user prompt for this particular instance. To override,
        * Click the **Settings** icon on the right.
        * Enable the **Override for this instance** toggle. Once you enable this option, you can enter the user prompt for this particular instance. Disabling this option would delete the instance-specific prompt and revert it to the component property.
    
    3. You can also reorder the error messages. To reorder,  
        * Click the **Settings** icon on the right.
        * Enable the **Present Prompts in the Order of Retries** toggle. Once you enable this option, the handlebar icon would be visible before each error     prompt message. You can use this to re-order the messages so that they will be displayed in that sequence.  
            
            <img src="../images/entity-node-img2.png" alt="Entity node - Reorder error messages" title="Entity node - Reorder Error messages" style="border:1px solid gray;zoom:70%;">

6. Toggle [Rephrase Responses](../../../../generative-ai-tools/genai-features.md) to rewrite AI Agent replies using AI based on conversation, context, and user emotions. [Learn more](../../../../generative-ai-tools/genai-features.md#change-settings-for-a-pre-built-model).  
<img src="../images/re-responses.png" alt="Rephrase Responses" title="Rephrase Responses" style="border:1px solid gray;zoom:70%;">

7. Under **Redaction of PII Data**, you can configure how the value of this entity is presented if it is identified as PII data and used in defining any messages or responses:

    * De-identify PII data while presenting it to the user: The entity’s redacted value is used in prompts and messages.
    * Use the original value of the PII data while presenting it to the user: The entity’s original value is used in prompts and messages. (This is helpful when you need user confirmation on the original values of the PII data.)
 
    !!! note
        
        These options only affect the respective instance during runtime or live interaction. PII data is always redacted/masked in chat history and internal logs, irrespective of the option selected here.


    * De-identify PII data while presenting it to the user: The entity’s redacted value is shown in prompts and messages.
    * Use the original value of the PII data while presenting it to the user: The entity’s original value is shown in prompts and messages.
 
8. You can enable the **Sensitive Entity** option to  transient an entity, and redact, replace, or mask sensitive data input at the entity node level. This setting helps you secure sensitive data input during the conversation.
    
    <img src="../images/entity-node-img3.png" alt="Entity node - Sensitive entity" title="Entity node - Sensitive entity" style="border:1px solid gray;zoom:70%;">
 
    By default, this setting is disabled. Once you **Enable** the **Sensitive Entity** setting, you can do the following:

    1. Select the Transient Entity checkbox to clear redacted data upon session closure and avoid persisting it in the platform. 
    In the conversation history, **data_purge** is displayed instead of the non-persistent data.  
        <img src="../images/transient-entity.png" alt="transient-entity" title="transient-entity" style="border:1px solid gray;zoom:70%;">

    2. Enter a regular expression(regex) to identify the sensitive data using the custom regex pattern. To add a regex pattern, click **+Add Pattern**. For example, add the regex `[a-zA-Z]{3}[-]\d{4}` pattern to validate user input and return a sample response as: `{"regex":"NLP-1234"}`. For more information, see [write regular expressions](https://www.geeksforgeeks.org/write-regular-expressions/){:target="_blank"} and [custom entity type](../entity-types.md#custom){:target="_blank"} articles.
        
        <img src="../images/entity-node-img4.png" alt="Entity node - Add Regex pattern" title="Entity node - Add Regex pattern" style="border:1px solid gray;zoom:70%;">

    3. Select one of the following options about how you want to display the sensitive data to unauthorized users:
        * **Redaction** – Redact the sensitive data with a unique random alphanumeric value.
        * **Replacement** – Replace the data with a static value that you enter in the Sensitive Entity settings.
        * **Mask with character** – Mask the first few and last few characters of the sensitive data with ‘+’ or ‘#’ symbols.

    For more information, see the [Redacting Personally Identifiable Information ](../../../../app-settings/advanced-settings/pii-data-masking.md){:target="_blank"} article.

9. In the **Variable Namespaces** section, associate the Variable Namespaces to execute this node and its transitions. This option is visible only when the Variable Namespace is enabled for the AI Agent. You can go with the task level settings or customize it for this node. For more information, refer to [Managing Namespace](../../../../app-settings/managing-namespace.md){:target="_blank"}.


### Instance Properties

Use the Instance Properties to determine whether to make the entity value mandatory as well as to choose if you want to consider values from previous user utterances to capture entities.

!!! Note

    The settings in the Instance Properties tab are specific to the current dialog task and do not reflect in the other dialog tasks that use this entity node.

1. On the Entity window, click the **Instance Properties** tab.
2. Under the **User Input** section, select one of the following options:
    * **Mandatory**: This entity is required, and users must provide a valid entry before proceeding with the dialog flow. A prompt is displayed for the user to resolve in case ambiguous values for the entity are detected in the user utterance.
        * **Allowed Retries**: Set the maximum number of times (1-5, default is 5) a user is prompted for a valid input.  
        **How it works**: When a user provides an invalid input (e.g., entering an email address instead of a zip code), the Platform re-prompts them for correct input. If the Allowed Retries is 5, the user receives up to 5 total prompts to provide a valid input. After all prompts are exhausted without a valid input, the "Behavior on Exceeding Retries" flow is initiated.
        * **Voice channel exception**: For voice channels, when user input doesn't match the entity type AND a Node Grammar is defined, the Platform applies the retry count set for "No Match" under Voice Call Properties instead of the "Allowed Retries" setting under Instance Properties.
        * **Behavior on Exceeding Retries**: Define what happens when all retry attempts are exhausted by selecting either End of Dialog or Transition to a Node. This creates a Connection Rule called "Behavior on Exceeding Retries." You can customize the message displayed when retries are exceeded from the Standard Responses. [Read more here](../../../intelligence/conversation-management/standard-responses.md){:target="_blank"}.

    * **Optional**: The user is prompted only once for this entity and the system proceeds with any input provided by the user. In case ambiguous values for these optional entities are detected in the User Utterance, then a resolution prompt is displayed allowing the user to pick the correct value.  
    You can set a value under the **Default Value** field. This value would be assigned to this entity when the task execution reaches this entity and the user does not provide any value when prompted, and if no value is available from previous utterances.
    * **Hidden**: If enabled, the AI Agent will not prompt for the entity value. The value would be considered if explicitly provided by the user in previous utterances.  
    You can set a value under the **Default Value** field. This value would be assigned to this entity when the task execution reaches this entity and no value is available from previous utterances.

3. **User Input Correction** (v7.3) can be used to define whether the user input needs to be auto-corrected. This option is available only for string type entities. The two options are listed below:
    * **Auto-correct user input** is the default setting. The platform builds a custom dictionary for each AI Agent to include all synonyms, task names, pattern words, and small talk utterance words on top of a standard dictionary. This feature is not supported in all languages, [Click here for details](../../../../app-settings/language-management/multi-lingual-bot-behavior.md){:target="_blank"}.
    * **Do not auto-correct user input:** To ensure backward compatibility, the following settings are applied to existing AI Agents:

        <table border="1">
        <tr>
        <td>
        <strong>OLD STATE (ENTITY EXTRACTION)</strong>
        </td>
        <td><strong>NEW STATE (USER INPUT CORRECTION)</strong>
        </td>
        </tr>
        <tr>
        <td>Evaluate unused text from previous utterances.
        </td>
        <td>Do not auto-correct user input.
        </td>
        </tr>
        <tr>
        <td>Evaluate unused text and text used for extracting entities from previous utterances.
        </td>
        <td>Do not auto-correct user input.
        </td>
        </tr>
        <tr>
        <td>Do not evaluate previous utterances and explicitly prompt the user – Do not auto-correct [Enabled].
        </td>
        <td>Do not auto-correct user input.
        </td>
        </tr>
        <tr>
        <td>Do not evaluate previous utterances and explicitly prompt the user – Do not auto-correct [Disabled].
        </td>
        <td>Auto-correct user input.
        </td>
        </tr>
        </table>

4. Under the **Entity Extraction** section, select one of these options:
    * **Evaluate the unused text from the previous utterance**: When this option is selected, the entity uses the text that was not used by any other entity in the dialog so far. This is the default option.
    * **Evaluate unused text and text used for extracting entities from previous utterances**: Select this option if you want to reuse an entity value extracted by another entity node in the dialog.
    * **Do not evaluate previous utterances and explicitly prompt the user**: Select this option if you want the AI Agent to ignore the previous user utterances and explicitly prompt the user to provide value for the entity.

5. Further, you can restrict the platform from reusing the input provided for this entity to extract any other entities by selecting the **Do not reuse** option.
6. Under the **Entity Rules** section, you can configure rules to validate the user input.
7. Use the **Add Rules** button to enter a JSON structure for the validation and entity extraction rules. [Refer here for the details on entity rules](../entity-rules.md){:target="_blank"}.
8. In **Advanced Controls** set up these options:
    * **Intent Detection** (Applies only to _String_ and _Description_ entities): Select one of these options to determine the course of action if the AI Agent encounters an entity as a part of the user entry for the _String_ or _Description_ entities:
        * **Accept input as entity value and discard intent detected**: The AI Agent captures the user entry as a string or description and ignores the intent.
        * **Prefer user input as intent and proceed with Hold & Resume settings**: The user input is considered for intent detection and the proceeds according to the _Hold & Resume_ settings.
        * **Ask the user how to proceed**: Allow the user to specify if they meant intent or entity.
    
    * **Interruptions Behavior**: To define the interruption handling at this node. You can select from the below options:
        * **Use the task level ‘Interruptions Behavior’ setting**: The AI Agent refers to the **Interruptions Behavior** settings set at the dialog task level.
        * **Customize for this node:** You can customize the **Interruptions Behavior** settings for this node by selecting this option and configuring it . You can choose whether to allow interruptions or not, or whether to allow the end user to select the behavior. You can further customize Hold and Resume behavior. Read the [Interruption Handling and Context Switching](../../../intelligence/conversation-management/manage-interruptions.md){:target="_blank"} article for more information.
    * **Analytics-Containment Type:** Select one of the below options to determine how to treat user-abandoned conversations.
        * **Use task-level default settings:** This refers to the Containment Type settings set at the dialog level.
        * **Customize for this node:** You can customize the Containment Type for this node by selecting this option. You can choose whether to Self Service or Drop-off in case of user-abandoned conversations.
    
    * **Precedence** (Applies to all Entity types except _String_ and _Description): When the user’s input for an entity consists of a valid value for the entity and another intent, you can control the experience by choosing between **Intent over Entity** or **Entity over Intent** options. For example, if a Flight Booking AI Agent prompts for the destination and the user enters, _Bangalore, how’s the weather there?_ you get to define how the  AI Agent responds in such cases; pick the entity and add the intent to the Follow-up Intents stack or go ahead with the intent first based upon the **Interruptions Behavior** settings.

        !!! Note

            When a user input results in an ambiguous entity value and an intent, you can customize how the AI Agent should respond by configuring the setting – **Precedence for Intents with Ambiguous Entities**. [Learn more](../../../natural-language/nlu-configurations/engine-tuning.md){:target="_blank"}.
    
    * **Custom Tags**: This is where you can define tags to build custom profiles of your AI Agent conversations. [Click here to learn more](../../../../analytics/automation/custom-dashboard/custom-meta-tags.md){:target="_blank"}.


#### The User Input Flow

When a user is prompted for input, the following is the process performed by the Platform:

* If the user responds with a valid value, then the entity populates with that value and the dialog flow continues.
* If ambiguous values are identified in the user response, then an ambiguity resolution prompt is displayed.
* If the user responds with an invalid utterance i.e. an utterance that does not contain a valid input for the ambiguity resolution, then:
    * If the given value is valid for the entity (any possible value for the entity), it is used for the entity and the conversation is continued.
    * If the given value is not valid for the entity and if the value triggers any task intent, faq, or small talk, then:
        * The intent is executed as per hold and resume settings and when (and if) the dialog (containing the entity) is resumed, the user is prompted for the entity value.
        * If the value does not trigger any task intent, faq, or small talk, the entity is left blank and the conversation is continued from the entity’s transitions.

* If the user exceeds the retry limit, the behavior defined for exceeding retries would be triggered. Note that if this is a child task and the behavior is set to end the dialog then the parent task would also be terminated.

    <img src="../images/entity-instance-properties-exceed-retry-behavior.gif" alt="Entity node - Behavior on exceeding retry count" title="Entity node - Behavior on exceeding retry count" style="border:1px solid gray;zoom:70%;">


### NLP Properties

1. On the **NLP Properties** tab, under the **Suggested Synonyms for {entity name}** section, enter synonyms for your entity. Click **Enter** after each entry to save it. For more information, refer to [Managing Synonyms](../../../natural-language/training/fundamental-meaning.md#manage-synonyms){:target="_blank"}.
2. Under the **Suggested Patterns for {entity name}** section, click **+ Add Pattern** to add new patterns for your entity. The **Patterns** field is displayed. For more information, refer to [Managing Patterns](../../../natural-language/training/fundamental-meaning.md#navigate-to-the-patterns-tab){:target="_blank"}.
3. Under the **Manage Context** section, in the **Context Output** field, define the context tags to be set in the context when this entity populates.
4. You can select **Auto emits the entity values captured** option as part of the Context Object. ([Click here to learn more about Context Management](../../../intelligence/context-management.md){:target="_blank"})

    <img src="../images/entity-node-img6.png" alt="Entity node - NLP Properties" title="Entity node - NLP Properties" style="border:1px solid gray;zoom:70%;">


### IVR Properties

You can use this tab to define the input mode, grammar, prompts, and call behavior parameters for this node to use in IVR Channel. You can define this at the node level. [Click here for details](../../../../channels/IVR-integration.md#configure-dialog-node-ivr-properties){:target="_blank"}.

<img src="../images/entity-ivr-properties.gif" alt="Entity node - IVR Properties" title="Entity node - IVR Properties" style="border:1px solid gray;zoom:70%;">


### Connections Properties

!!! Note

    If the node is at the bottom in the sequence, then only the connection property is visible.

From the node’s **Connections** tab, you can determine which node in the dialog task to execute next. You can write the conditional statements based on the values of any Entity or Context Objects in the dialog task, or you can use intents for transitions.

!!! Note

    These conditions are applicable only for this instance and will not affect the node when being used in any other dialog.

To set up component connection conditions, please follow the steps outlined in [Adding IF-Else Conditions to Node Connections](../node-connections/nodes-conditions.md){:target="_blank"}.

If you want to delete a condition, hover over it and click the bin icon at its top right. Keep in mind that deleted conditions cannot be restored.

<img src="../images/entity-node-img7.png" alt="Entity node - Connection Properties" title="Entity node - Connection Properties" style="border:1px solid gray;zoom:70%;">

The Connection Path property offers three default variants:

1. Not Connected - No specific next node is defined
2. End of Dialog - Explicitly ends the current dialog
3. Return to Flow - Terminates the Dialog Task and returns control to the Flow Builder. The Flow Builder resumes from the next node.
    * Enable the **Deflect to Chat** option to create conversation flows that transition from voice to chat-based interactions within the same context.
    It has two deflection types - ‘ Automation’ and ‘Agent Transfer’.  
    <img src="../images/deflect-to-chat1.png" alt="Deflect to Chat" title="Deflect to Chat" style="border:1px solid gray;zoom:70%;">


!!! Note

    Deflect to Chat works only with Kore Voice Gateway Channels (Phone number or SIP Transfer).


#### Related Links

1. [Supported Entity Types](../entity-types.md){:target="_blank"}
2. [Supported Company Names](../entity-types.md#company-name-or-organization-name){:target="_blank"}
3. [Supported Time Zones](../entity-types.md#time-zone){:target="_blank"}
4. [Supported Colors](../entity-types.md#color){:target="_blank"}
6. [Entity Rules](../entity-rules.md){:target="_blank"}