# Test and Debug

The following sections describe how you can test and debug your AI Agent to validate the working of External NLU.


## Test

After completing the steps in [Adapter Configuration](external-nlu-adapters.md#adapter-configuration){:target="_blank"} and [enabling the API](dialogflow-engine.md#enable-the-dialogflow-api){:target="_blank"}, to check if the intent identification is done by External NLU adapter or not, you can follow these steps:



1. Go to your App and click **Test**.
2. Enter a user utterance which matches the intent entered in the Dialogflow Essentials page.
3. In the **Debug Log** panel of the user conversation, you can see a message that, **intent identified using External NLU is initiated**.  
<img src="../images/external-nlu-test-and-debug-img1.png" alt="Debug Log - intent identified using External NLU is initiated" title="Debug Log - intent identified using External NLU is initiated" style="border: 1px solid gray;zoom:50%;"/>

You can also analyze the **Debug Log, NL Analysis,** and **Session Context & Variables** to understand the intent detection mechanism.


### Debug Log

If the external NLU is enabled, the Debug Log displays whether the intent is detected by External NLU or not before the ‘**Intent node initiated**’ debug log entry. In case of call failure, an error response is displayed in the debug log entry.

This is displayed only if an external NLU is enabled. If the API call fails, it is also indicated in the debug log statement.

* Intent detected by the External NLU engine is always marked as a Definitive Match.  
<img src="../images/external-nlu-test-and-debug-img2.png" alt="Intent detected by the External NLU engine" title="Intent detected by the External NLU engine" style="border: 1px solid gray;zoom:50%;"/>

    If intent is not detected by the External NLU engine, it is tracked in Debug Log.

* Hover over the information icon to view the K-Traceid and X-Traceid for each user interaction. The K-Traceid helps track and debug activities. The X-Traceid is a unique identifier for each message, included in the platform logs.  
<img src="../images/ktrace.png" alt="K-Traceid and X-Traceid" title="K-Traceid and X-Traceid" style="border: 1px solid gray;zoom:50%;"/>


* Hover over the information icon to view the K-Traceid and X-Traceid for each user interaction. The K-Traceid helps track and debug activities. The X-Traceid is a unique identifier for each message, included in the platform logs.  
<img src="../images/ktrace.png" alt="K-Traceid and X-Traceid" title="K-Traceid and X-Traceid" style="border: 1px solid gray;zoom:50%;"/>


* Under **Session Context & Variables**, you can see the variables for intents and entities in detail as shown in the following screenshots.  
<img src="../images/external-nlu-test-and-debug-img3.png" alt="Session Context & Variables" title="Session Context & Variables" style="border: 1px solid gray;zoom:50%;"/>  
  
    <img src="../images/external-nlu-test-and-debug-img4.png" alt="Custom Variables" title="Custom Variables" style="border: 1px solid gray;zoom:50%;"/>

### NLP Analysis

By using **NL analysis**, you can see whether the intent was identified or not by an external NLU engine. This works from all the workflows that provide the NLP analysis. For example – [Talk to Bot](#test), [Utterance Testing](#utterance-testing), [Batch Testing](#batch-testing), [Health and Monitoring](#health-and-monitoring), and [NLP Insights](#nlp-insights).

See the following sections to understand more details.
 


## Utterance Testing

[Utterance Testing](../../../automation/testing/testing-your-bot-with-nlp.md)
 also provides NLP Analysis. The **Matched Intents** and **Fields/Entities** tables that provide an easy way to update training data like synonyms, patterns, etc are not displayed if the Intent is identified on the external NLU engine.

* If the intent is detected by an external engine, the utterance is not sent to the Kore.ai NLP engine.  
<img src="../images/external-nlu-test-and-debug-img5.png" alt="Intent is detected by an external engine" title="Intent is detected by an external engine" style="border: 1px solid gray;zoom:50%;"/>

* Click the **View Response** link to view the API response in the JSON format, received from the external NLU engine in both cases of whether intent is detected or not detected by the external NLU.  
<img src="../images/external-nlu-test-and-debug-img6.png" alt="View the API response in the JSON format" title="View the API response in the JSON format" style="border: 1px solid gray;zoom:50%;"/>

* If the intent is not detected by the external engine, the Kore.ai NLU engine acts as a fallback. So, in this case, the NLP analysis shows the analysis of intent detection results from our three engines along with the ranking and resolver. For more information, see [Ranking and Resolver](../../../automation/natural-language/training/ranking-and-resolver.md){:target="_blank"}.  
<img src="../images/external-nlu-test-and-debug-img7.png" alt="Intent is not detected by an external engine" title="Intent is not detected by an external engine" style="border: 1px solid gray;zoom:50%;"/>

* If the intent is detected by the external engine but cannot be mapped to any intent on the platform, even then the Kore.ai NLU engine acts as a fallback. In this case, the NLP analysis displays a relevant message along with the API response containing the detected Intents and parameters.  
<img src="../images/external-nlu-test-and-debug-img8.png" alt="Intent detected by external engine but cannot be mapped to any intent on platform" title="Intent detected by external engine but cannot be mapped to any intent on platform" style="border: 1px solid gray;zoom:50%;"/>


## Batch Testing

The test case result for True positive, False Positive, True Negative, and False Negative(TP, FP, TN, FN) scenarios is generated based on the net outcome of a combined result of External NLU and Kore.ai NLU engine.

For example, irrespective of whether the expected intent is detected by the External NLU or Kore.ai engine, the test result is TP. If the net result is a wrong intent identified, the test result should be FP. In case of no intent detected by any of the engines, it is classified as TN, when no intent was expected but some intent was detected, then it is FN.

!!! note
    
    There is no common base to compare the scores of all the engines, hence scores sent by the external NLU are not considered.


For any intent detected by the external NLU, it should be considered that the thresholds have been met and in the ‘**Matched Intent Score**’ column, this is indicated as _ExtNLU (without any score against it)_ in place of ML, FM, or KG scores. This can be viewed in the downloaded CSV under NLU of Batch Testing. To know more, see [Batch Testing](../../../automation/testing/regression-testing/batch-testing.md){:target="_blank"}.

<img src="../images/external-nlu-test-and-debug-img9.png" alt="ExtNLU Matched intent score" title="ExtNLU Matched intent score" style="border: 1px solid gray;zoom:50%;"/>

If the ExtNLU returns multiple intents, the thresholds met for all those intents are considered and accordingly the test result is concluded.


## Health and Monitoring

In Health and Monitoring go to **Test Cases > Detailed Analysis** to see the Intents and Entities identified by External NLU, without any scores. The Traits engine is not dependent on the external NLU.

!!! note
    
    If the external NLU is enabled, some of the recommendations may not be relevant because they are for the Kore.ai NLU engines. The recommendations are displayed based on the training done on the Kore.ai Platform.

<img src="../images/external-nlu-test-and-debug-img10.png" alt="Intents and Entities identified by External NLU" title="Intents and Entities identified by External NLU" style="border: 1px solid gray;zoom:50%;"/>

For more information, see [Health and Monitoring](../../../automation/testing/regression-testing/health-and-monitoring/virtual-assistants-health-and-monitoring.md){:target="_blank"}.


## NLP Insights

NLP Insights have Intent Identified, Intent Not Identified utterances and their NLP analysis details captured. You can view the details of all the failed External NLU API calls in the debug logs of NLP Insights.

<img src="../images/external-nlu-test-and-debug-img11.png" alt="Failed External NLU API calls" title="Failed External NLU API calls" style="border: 1px solid gray;zoom:50%;"/>

For more information, see [NLP Insights](../../../analytics/automation/nlp-insights.md){:target="_blank"}.


## Conversation Behavior

This list describes the conversation behavior while using external NLU adapter:

* When an intent is identified by the external engine, the corresponding task on the Kore.ai Platform is triggered based on the name mapping.
* Quality of the **intent, entity**, or **FAQ** detection depends on the training and capabilities of the external engine
* All the other conversation flow behaviors are handled by the Platform. For e.g.:

    * Re-prompts, error prompts, message responses, widgets, supported channels, channel-specific experience customizations, authorization for service calls, alerts, small talk
    * Language Detection
    * Sentiment Analysis
    * Traits identification
    * Decisions to scan for sub-intent, follow-up intents
    * Interruption handling as per settings
    * Entity over Intent or Intent over Entity as per settings
    * PII Masking/Redaction
    * Execution of all the nodes of a Dialogue Task
    * Context Object construction
    * Response messages and fulfillment
    * Logical flows

    !!! note

        Information like the response messages and fulfillment from the external engine is ignored.


* When external NLU is enabled, in the interruption handling only one behavior, “**Switch to a new task without any notification to the user and discard the current task**”, is supported. To know more information, see [Interruption Management Settings](../../../automation/intelligence/conversation-management/manage-interruptions.md){:target="_blank"}.
* If the external NLU API returns an error or the API cannot be reached, a fallback intent gets activated with the standard response as, _Error in continuing the conversation due to incorrect bot definition._ To know more information, see [Standard Responses](../../../automation/intelligence/conversation-management/default-conversations.md#standard-responses){:target="_blank"}.

    !!! note

        The Intent and entity mapping work based on a case insensitive comparison of the names defined on the two platforms.

* For the entity identification to work properly, it is recommended to define the entity nodes in the same sequence on the Platform and the external engine.
* If the external NLU fails to detect the entity, then as a fallback, an attempt is made to detect the same on the Kore.ai NLP engine.


## Follow-up and Sub-Intents Identification

* If all the required parameters are available in the context, the Follow-up intent scope gets activated on the External NLU. Once the follow-up intent scope gets active on the Platform, the utterance is sent to External NLU for intent identification.
* Similarly, when the scope for sub-intent is active on the Kore.ai Platform, the utterances should be sent to the external NLU for intent detection along with the parent intent context.