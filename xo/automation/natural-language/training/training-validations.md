[ :octicons-arrow-left-24: Back to NLP Topics](../../../nlp-topics.md)

# Training Validations

NLP models play a significant role in providing natural conversational experiences for your customers and employees. 

Improving the accuracy of the NLP models is a continuous journey and requires fine-tuning, as you add new use cases to your app. 

The Platform proactively validates the NLP training provided to the app and provides recommendations to improve the model. 

This article explains the available validations, how to view these validations, and how to validate the NLU Model.

## Goal-Driven Training Validations

The ML engine enables you to identify issues proactively in the training phase itself with the following set of recommendations: 

* **Untrained Intents** – Notifies about intents that are not trained with any utterances so that you can add the required training. 
* **Inadequate training utterances** – Notifies the intents with insufficient training utterances so that you can add more utterances to them. 
* **Utterance does not qualify any intent (false negative)** – Notifies about an utterance for which the NLP model cannot predict any intent. For example, an utterance added to Intent A is expected to predict Intent A. Whereas in some cases the model won’t be able to predict neither the trained Intent A nor any other Intents within the model. Proactively identifying such cases helps you rectify the utterance and enhance the model for prediction. 
* **Utterance predicts wrong intent (false positive)** – Identifies utterances that predict intents other than the trained intent. For example, when you add an utterance similar to utterances from another intent, the model could predict a different intent rather than the intent it is trained to. Knowing this would help you to rectify the utterance and improve the model prediction.
* **Utterance predicts intent with low confidence**– Notifies about the utterances that have low confidence scores. With this recommendation, you can identify and fix such utterances to improve the confidence score during the app creation phase.
* **Incorrect Patterns**– Notifies about the patterns that do not follow the right syntax along with the error. You can resolve such incorrect patterns to improve intent identification. In addition, the Platform now supports the following Non-CS languages for Virtual Assistant conversations:
    * **Polish**: Support for stop words and entity detection improvements for _Number_, _City_, _Country_, _Person_, _Date_, _Time_, _Zip Code_, _Address_, and _LoV Enumerated_.
    * **Japanese**: Support for stop words and improvements in entity detection, intent patterns, sub-intents, and synonyms.
    * **Arabic**: Support for stop words and improvements in phone number entity detection.
    * **Hinglish (Hindi + English)**: The support for this dual language combination is newly introduced.
* **Wrong Entity Annotations**– Notifies wrongly annotated entities. For example, in the utterance _‘I want to travel to Hyderabad on Sunday 2pm’,_. the _Travel Date_ (Date type) entity is annotated with value _‘2PM’ (Time value)_. The platform checks for such wrong annotations and notifies the issue against the utterance, which helps to re-annotate the entity with the right values and improve entity recognition.
* **Short Utterance**– Notifies about the utterances whose word count is lesser than or equal to two. It helps you to follow best practices for the length of utterances, which depicts an actual end-user query and further improves the model’s accuracy.

## How to View NLU Training Validations

1. On the app, click **Natural Language** > **Training.**
2. In the **Intents** tab, you can see the set of recommendations for the Intents and ML utterances.
<img src="../images/intent-recommendations-window.png" alt="intent recommendations" title="intent recommendations" style="border: 1px solid gray; zoom:75%;">
 
!!!note

    The errors and warnings in this screen are examples. The ML validations vary based on the error or waning recommendation as explained in the Goal-Based NLU Training Validations section above.

<ol start="3"><li>Hover over the validation options and view the following recommendations:</li>

Hover on the <b>Error</b> icon to view the recommendations to resolve the error.

<img src="../images/hover-over-error-icon-window.png" alt="hover over error icon" title="hover over error icon" style="border: 1px solid gray; zoom:75%;">

<div class="admonition warning">
<p class="admonition-title">Important</p>
<p>An Error is displayed when the intent has a definite problem that impacts the app’s accuracy or intent score. Errors are high severity problems.Hover on the <b>Warning</b> icon and follow the instructions in the warning to enhance the training for ML utterances.</p></div>

<img src="../images/training-warning-window.png" alt="training warning" title="training warning" style="border: 1px solid gray; zoom:75%;"></ol>
 
!!!note

    A warning is displayed when the issue impact the app’s accuracy and it can be resolved. Warnings are less severe problems when compared to errors.

<ol start="4"><li>Once you click on the Intent with error or warning, hover over the <b>Bulb</b> icon to view the summary of error or warning messages as illustrated below:</li>

<img src="../images/view-error-summary-window.png" alt="view error summary" title="view error summary" style="border: 1px solid gray; zoom:75%;"></ol>

## How to Use the NLU Validate Model

The NLU Validate Model provides the options to view the training module’s recommendations summary, refresh the recommendations, and view the **Confusions Matrix**, and **K-fold Cross Validation reports**.

The **Validate Model** helps you follow the best practices and quickly attain NLP accuracy for your Virtual Assistants.

### Recommendations Summary

The Recommendations Summary is available when validating your model. This feature gives insights into the problem areas, errors, warnings for the intents that are building blocks for your app’s training, and recommendations on corrective actions for better NLU accuracy.

To view the Recommendations Summary, follow the steps below:

1. Navigate to **Natural Language** and click the **Training** option on the left menu.
2. On the **Training** page, click the **Validate Model** button.
<img src="../images/validate-model-click-window.png" alt="click validate model" title="click validate model" style="border: 1px solid gray; zoom:75%;">

3. The recommendations summary slider appears with the list of issues and the recommended actions to fix them.

<img src="../images/recommendations-summary-slider-window.png" alt="recommendations summary slider" title="recommendations summary slider" style="border: 1px solid gray; zoom:75%;">
 
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>All the recommendations are listed under the <b>All</b> tab. Under the <b>Error</b> and <b>Warning</b> tabs, you can view recommendations specific to errors and warnings specifically.</p></div>

### Understanding the Recommendations

In the recommendation message, _5 intents have Patterns with invalid syntax_, 5 is the count of the intents with the issue – patterns with invalid syntax. The intent count is displayed first for any recommendation, followed by the issue type. When you fix an issue based on the recommendation, the training model updates, and the platform automatically triggers a background task to refresh the recommendations summary.

!!!note

    If the training model is updated with all the modifications, the platform automatically triggers a background task to refresh recommendations without explicitly informing the users.

### Filter the Recommendations

Previously, for example, when an issue titled “_5 Intents have utterances with low confidence score_” was displayed, there was to identify the intents immediately. The user had to move the cursor against each intent in the list to identify the ones causing training issues.

The Platform now provides a **Filter** option in the training module to quickly identify intents and training data with issues and fix them. When applied to the recommendations list, the filter groups all the related issues and displays them in the **Training** panel to give you a focused view of all the open training issues.

To filter the recommendations summary issue, follow the steps below:

1. Hover over the desired issue on the recommendations summary slider and click the **Filter** button.

    <img src="../images/hover-over-issue.png" alt="hover over issue" title="hover over issue" style="border: 1px solid gray; zoom:75%;">

2. In the **Training** panel, all the intents with the issue type are listed. For example, if the user selects ‘_43 Intents have no utterances_‘, the platform filters out those 43 intents from the list of all intents. A note on the filter applied displays on the panel, and an option to reset the applied filter is available as shown below:

<img src="../images/training-panel-information.png" alt="training panel information" title="training panel information" style="border: 1px solid gray; zoom:75%;">

3. Click the **+Utterance**, **+Pattern**, or **+Rule** link for an intent issue type to add the relevant values for training.
4. Enter the values in the relevant textbox and click enter under the **Intent summary** window’s **Utterance/Pattern/Rule** tab. The **Intent Summary** window displays the context to resolve the filtered issue.

    <img src="../images/intent-summary-window.png" alt="intent summary window" title="intent summary window" style="border: 1px solid gray; zoom:75%;">

5. The **utterance/pattern/rule** is created successfully and mapped to the intent.
<img src="../images/intent-mapping.png" alt="intent mapping" title="intent mapping" style="border: 1px solid gray; zoom:75%;">

6. Once you resolve an intent type issue, the system updates (decrements) the issues’ count and the error indicator (red dot) on the **Recommendation Summary** panel.
<img src="../images/recommendation-summary-panel.png" alt="recommendation summary panel" title="recommendation summary panel" style="border: 1px solid gray; zoom:75%;">

7. Similarly, the system updates the **Error** and **Warning** counts if an error or warning is resolved.

<div class="admonition note">
<p class="admonition-title">Important Considerations</p>
<p><ul><li>The user can filter only one recommendation at a time.</li>
<li>When a filter is selected, it applies to the <i>Intent training</i>, <i>utterance</i>, <i>rule</i>, and <i>pattern-level</i> recommendations for the selected intent type.</li></ul></p></div>

### Reset the Intent Recommendation Filter

With the **CLEAR FILTER** option, you can clear or reset a filter selection for an **intent type** issue. Once the filter is reset, an unfiltered view of all the intent names and intent types (errors and warnings) with all the training data (Utterances, Patterns, Negative Patterns, etc.) is displayed.

To reset the **intents recommendation** filter, follow the steps below:

1. Click the **CLEAR FILTER** link under the **Training** > **Intents** tab.
<img src="../images/intent-clear-filter.png" alt="clear intent filter" title="clear intent filter" style="border: 1px solid gray; zoom:75%;">

2. All the intent type entries are displayed without filtering the data.

 
### Refreshing Recommendations

In the recommendation summary, you can refresh recommendations as explained in the previous section in some of the scenarios like:

* **Modify training data:** When the training data is modified, you can check for new recommendations.

* **Implement recommendations:** When a recommendation is implemented, you can verify if it is resolved.

* **Add new training data:** When new intents or utterances are added, you can check for new recommendations.

When you click the **Refresh** icon, a timestamp of the last refresh is displayed along with the refreshed recommendations list. The timestamp is updated with every refresh.

<img src="../images/recommendation-timestamp.png" alt="recommendation timestamp" title="recommendation timestamp" style="border: 1px solid gray; zoom:75%;">

If there are untrained utterances in the training model, the platform provides you with the following options:

### Train and Regenerate

This option allows you to train the model with untrained utterances, and then triggers a background task to generate recommendations from the latest model.

The following steps explain the **Train & Generate** usage with an example.

1. Click any intent and add a new utterance.
<img src="../images/add-utterance-to-intent.png" alt="add utterance to intent" title="add utterance to intent" style="border: 1px solid gray; zoom:75%;">

2. Once the utterance is added, go to the main page and click the **Refresh** icon to refresh the recommendations. The following pop-up is displayed when there are untrained utterances.
<img src="../images/untrained-data-pop-up.png" alt="untrained data pop up" title="untrained data pop up" style="border: 1px solid gray; zoom:75%;">

3. Click the **Train & Regenerate** button to train the utterances and regenerate the recommendations.
4. A message about training initiation is displayed.<img src="../images/training-initiation-message.png" alt="training initiation message" title="training initiation message" style="border: 1px solid gray; zoom:75%;">

5. Once training and regeneration of recommendations is completed, the status is displayed in the status docker.

    <img src="../images/training-and-regeneration-status.png" alt="training and regeneration status" title="training and regeneration status" style="border: 1px solid gray; zoom:75%;">
 
#### Regenerate

Click the **Regenerate** button in the displayed pop-up if you want to trigger a background task that generates recommendations from the current model.
<img src="../images/click-regenerate-button.png" alt="click regenerate" title="click regenerate" style="border: 1px solid gray; zoom:75%;">
 
<div class="admonition note">
<p class="admonition-title">Note</p>
<p>While performing the refresh, you cannot trigger the task again. If you click the <b>Refresh</b> icon when the model is being trained, recommendations from the latest Validate model are generated only once the training is completed.</p></div>

<ol start="6"><li><p>When you click the <b>Refresh</b> icon, the recommendations summary is refreshed and the count of recommendations is either increased, or decreased, or the recommendations are updated based on the latest results.</p>

<p>For example, if new utterances are added to the intent, a new recommendation may get added to the summary list. Similarly, if a recommendation is implemented, the count of recommendations decreases. In a recommendation like <i>13 intents have very short utterances, if 2 intents are fixed, then the recommendation is updated to 11 intents have very short utterances</i>.</p>

<img src="../images/recommendation-information.png" alt="recommendation information" title="recommendation information" style="border: 1px solid gray; zoom:75%;"></li></ol>

### NLU Validation Options

Next to the **Validate Model**, there is a drop-down with options to select either the **Confusion matrix** or **K-fold Cross Validations**.

<img src="../images/nlu-validation-options.png" alt="nlu validation options" title="nlu validation options" style="border: 1px solid gray; zoom:75%;">

You can also click the **Go** button to access Confusion Matrix and K-fold Cross Validation reports.

<img src="../images/click-go-button.png" alt="click go button" title="click go button" style="border: 1px solid gray; zoom:75%;">

#### Confusion Matrix

Confusion Matrix is useful in describing the performance of a classification model (or classifier) on a set of test data for which the true values are known. The graph generated by the confusion matrix presents an at-a-glance view of the performance of your trained utterances against the app’s tasks. To learn more, see the Confusion Matrix section in [Model Validation](model-validation.md){:target="_blank"}.

The following screenshot shows the confusion matrix report.
<img src="../images/confusion-matrix-report.png" alt="confusion matrix report" title="confusion matrix report" style="border: 1px solid gray; zoom:75%;">

If no data is available in the Confusion Matrix, you click the **Generate** button to create a report.

Whenever the Validate model is updated, you can click the **Re-Run Model** to generate the latest matrix. Once you rerun the model, the platform prompts you to either [Train and Regenerate](#train-and-regenerate){:target="_blank"} the recommendations if the model has unsaved changes or [Regenerate](#regenerate){:target="_blank"} the recommendations if the model is up to date.

Whenever you [Train and Regenerate](#train-and-regenerate){:target="_blank"} the recommendations, the matrix will also be regenerated. Similarly, whenever you regenerate the matrix, the recommendations are updated too.

#### K-Fold Cross Validation

K-Fold Cross-Validation is a resampling procedure used to evaluate machine learning models on a limited data sample. The technique involves partitioning the data into subsets, training the data on a subset, and using the other subsets to evaluate the model’s performance. To learn more, see the K-Fold Cross Validation section in [Model Validation](model-validation.md){:target="_blank"}.

The following screenshot shows the K-Fold Cross-Validation report.

<img src="../images/k-fold-cross-validation.png" alt="k-fold cross validation" title="k-fold cross validation" style="border: 1px solid gray; zoom:75%;">

