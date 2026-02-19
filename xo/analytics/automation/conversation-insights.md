# Conversation Insights

Once an AI Agent is published, it is important to understand and analyze its performance platform provides various dashboards; one of them being NLP Insights that captures details like Intent Found, Intent Not Found, Unhandled Utterances, and so on. However, to categorize the utterances as True Positives (TP), True Negatives (TN), False Positives (FP), and False Negatives (FN), you need to go through all the utterances across multiple tabs in NLP Insights. There could be millions of utterances that a AI Agents designer needs to review, which could be tedious and time-consuming.

**To view the Conversation Insights dashboard, follow the steps**: 

1.  Click **Analytics** on the left navigation pane. The Analytics panel is displayed with the list of reports.

    <img src="../images/conversation-insights-dashboards.png" alt="Conversation Insights Dashboards" title="Conversation Insights Dashboards" style="border: 1px solid gray; zoom:60%;">

2. Click the **Conversation Insights dashboard** under the **Automation** section of the **Analytics** panel. The **Conversation Insights dashboard** is displayed on the right side of the page.
3. Select appropriate filters on the dashboard and click **Apply**.

The Conversation Insights in the Platform groups the utterances in a cluster, based on their semantic meaning and provides a name to each of these groups, which avoids the need to analyze all the utterances of the cluster. Based on the utterances that are identified or unidentified, these cluster groups can be part of one or more intents. Below is a snapshot of where intents and utterance groups are plotted in a treemap. For more information on TP, TN, FP, and FN scenarios, see Appendix.


<img src="../images/conversation-insights-1.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">


!!! note

    The Kore.ai platform groups together all the similar utterances to form a cluster and gives a name to each created cluster. Conversation Insights allows the AI Agents designers to identify FPs, and FNs, create new intents, and perform many more actions. Cluster labeling is crucial in decision-making in such scenarios.


The utterances in the platform are grouped using an algorithm to create clusters. The most frequently occurring **subject-verb-object** is identified to create a label for the cluster.

For example, In the utterance “_When will I get my ATM Card_?” verb = get: subject = card; object = atm, and the cluster label is created accordingly.


## Clustering Views

In Conversation Insights, the relationship between intents and clusters is represented visually in two different ways:



* Treemap View
* Grid View


### Treemap View

The default view of Conversation Insights is the treemap view. A treemap is a visual method for displaying hierarchical data that uses nested rectangles that represent the branches of a tree diagram. It shows the relationship between intents and clusters.


<img src="../images/conversation-insights-2.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">



Using the Maximize icon you can view the insights in full-screen mode if required. The toggle next to it can be used to choose the cluster view either as a treemap or grid.

Each rectangle that represents an intent with clusters has an area proportional to the count of utterances it contains and the Expand icon provides the ability to view the widget on a full screen with **Zoom in** and **Zoom out** capabilities.


<img src="../images/conversation-insights-3.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">


All the **Identified** and **Unidentified** intents are displayed as rectangles. In a treemap, the intents form the outer rectangle. In this example **card not working, get a physical card,** and so on are the intents displayed as outer rectangles.
Each intent consists of one or more clusters, also represented as rectangles.

!!! note

    Hovering on an individual cluster highlights the cluster wherever it is available in all intents. In the following screenshot, you can see the tooltip displaying the information and the cluster working_card_time is highlighted in all the intents.


<img src="../images/conversation-insights-4.png" alt="Conversation Insights" title="Returning Users" style="border: 1px solid gray; zoom:60%;">



The tooltip displays the following information:

* Total utterances of the cluster
* Utterances count of the cluster across various intents

On clicking any cluster, you navigate to the **Cluster View** page and view all the intents and utterances the cluster is a part of. To understand more about the actions that can be performed here, see Utterance Validation. 

<img src="../images/conversation-insights-5.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">

#### Display More Intents and Clusters

On the Conversation Insights page, the number of intents to be displayed is adjusted using pagination,  in the **Intents per page** drop-down in the treemap view. You can select the intents that can be viewed per page here as per the requirement. Click **Next** to view the intents on the next page.

!!! note

    If you select 10 'Intents per page' in the navigation bar, then the top 10 intents are displayed on the first page. Users can click the Next button to view the next set of 10 intents. The platform also shows the total number of pages in the navigation bar.


<img src="../images/conversation-insights-6.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">



### Grid View

In the grid view, you can view all the intent and cluster details in a tabular format. This view is helpful when there is a large number of intents in the AI Agents, and you can easily navigate through different intents and clusters.

The details **Intent Name, Cluster Count**, and **Utterance Count** are displayed as shown in the following screenshot.

<img src="../images/conversation-insights-7.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">


Expand the Intent Name to see more details as follows:

* **Clusters**: The clusters available for the specific intent.
* **Utterance Count**: The utterance count of each cluster.
* **Details**: The availability of the cluster in other intents of the AI Agents.

<img src="../images/conversation-insights-8.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">


!!! note

    You can click the toggle to go back to the treemap view.

<img src="../images/conversation-insights-9.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">



On clicking the **Available in #other intents** link under **Details**, a pop-up is displayed with all the Intent details the cluster is a part of, and the number of utterances across each intent, for that cluster.


#### Cluster View



Click the **View Details** link corresponding to the cluster name to go to the **Cluster View** page.


<img src="../images/conversation-insights-10.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">


The **Cluster View** page displays all the intents and utterances for that cluster. By default, the platform displays the utterances for the intent selected on the Conversation Insights page. To understand more about the actions that can be performed here, see Utterance Validation.


<img src="../images/conversation-insights-11.png" alt="Conversation Insights" title="Conversation Insights" style="border: 1px solid gray; zoom:60%;">


#### Intent View


Click the **View Details** link corresponding to each intent, to go to the **Intent View** page.


<img src="../images/intent-view.png" alt="Intent View" title="Intent View" style="border: 1px solid gray; zoom:60%;">



The **Intent View** page displays all the available clusters, utterances, and other details as shown in the following image. By default, the platform displays all the utterances for the cluster with the maximum number of utterances. You can select any cluster within an intent to view the utterances and take necessary actions.

<img src="../images/intent-view-1.png" alt="Intent View" title="Intent View" style="border: 1px solid gray; zoom:60%;">


!!! note

    The number across the Intent Name and Cluster Names represents the number of utterances.


## Utterance Validation

The utterances grouped in the clusters can be validated and trained for an existing intent or a new intent, based on the requirements. Training the utterances and discovering new intents improves the performance of your AI Agents.


Click any Utterance displayed in the grid on the **Intent View** or **Cluster View** pages.

The utterance details, NLP Analysis, and Chat History with user profile and conversation sessions are displayed the same as in NLP Insights.


<img src="../images/utterance-validation.png" alt="Utterance Validation" title="Utterance Validation" style="border: 1px solid gray; zoom:60%;">



### Train the Utterances

This section describes the steps to be followed, to train the utterances grouped in a cluster.


Click the cluster in the treemap view or the grid view, to display all the intents and utterances the cluster is a part of.


!!! note

    All the utterances that are part of the clicked Cluster-Intent pair are displayed. You can select one or all the utterances of the cluster, to initiate the training. You can also go to the intent view by clicking View Details across the intent name from the grid view of the clusters. See Grid View for more information.


<img src="../images/train-the-utterance.png" alt="Train The Utterance" title="Train The Utterance" style="border: 1px solid gray; zoom:60%;">


The identified utterances belong to any of the following categories:



* **Identified as Incorrect Intents** (False Positives)
* **Unidentified due to insufficient training** (False Negatives)
* **Unidentified since the intent was not created** (You can add a new intent here)

See Appendix to understand more about FP, FN, TP, TN scenarios.


!!! note

    The utterances that are categorized as Identified as Incorrect Intents or Unidentified due to insufficient training are mainly due to insufficient or incorrect training.


The following steps explain how to train a single utterance or bulk utterances.



1. Click the **Train** button available across the utterance to initiate the training.
2. You may also select multiple utterances for bulk training and choose an option from the **Train** drop-down as shown in the following screenshot. 

    <img src="../images/train-the-utterance-1.png" alt="Train The Utterance" title="Train The Utterance" style="border: 1px solid gray; zoom:60%;">

    !!! note

        NLP Analysis and the Utterance testing panels are displayed the same as in the NLP Insights. The training process is the same as the utterance training in the NLP insights.

    <img src="../images/train-the-utterance-2.png" alt="Train The Utterance" title="Train The Utterance" style="border: 1px solid gray; zoom:60%;">

3. Select a matching intent from the **Selected Intent** drop-down and click **Save** to initiate the training.
You can also add Intent synonyms, patterns, and traits as required. The following message is displayed if the task is already published. Click **Upgrade** to change the task status to Development, to make the changes.

    <img src="../images/train-the-utterance-3.png" alt="Train The Utterance" title="Train The Utterance" style="border: 1px solid gray; zoom:65%;">


A message, **Utterance Uploaded Successfully** is displayed.

!!! note
    
    You can also click Re-Run Utterance if you want to train the utterance again.


<img src="../images/train-the-utterance-4.png" alt="Train The Utterance" title="Train The Utterance" style="border: 1px solid gray; zoom:60%;">


!!! note

    In the bulk utterance training, you select multiple utterances from the displayed list and train them for the existing intents by selecting an option from the Train drop-down or add new intents by selecting an option from the Add Intent drop-down. The steps followed are the same as in single utterance training.



Add Existing Intent

The following steps explain how to add an existing intent to an utterance or multiple utterances using the **Train** drop-down.

1. To map an existing Dialog Task or FAQ, click the **Train** drop-down. (See step 2 under Train the Utterances).
2. Click the **Dialog Task** option to choose the matching intent for the selected utterance.

    <img src="../images/add-existing-intent.png" alt="Add Existing Intent" title="Add Existing Intent" style="border: 1px solid gray; zoom:60%;">


3. Click the button **Add Utterances** to add the intent for the utterances. Click **Yes, Mark as Reviewed** if you want to change the status of the trained utterances to Reviewed, or else click **No**. 

    <img src="../images/add-existing-intent-1.png" alt="Add Existing Intent" title="Add Existing Intent" style="border: 1px solid gray; zoom:60%;">


4. Click the **FAQ** option from the **Train** drop-down to add the matching FAQ for the selected utterance. 

    <img src="../images/add-existing-intent-2.png" alt="Add Existing Intent" title="Add Existing Intent" style="border: 1px solid gray; zoom:60%;">

5. Upon adding the FAQ successfully, a message is displayed as shown below. Click **Yes, Mark as Reviewed** if you want to change the status of the trained utterances to Reviewed, or else click **No**.
 

Add New Intent 

In a scenario where the utterances cannot be mapped to any of the existing intents, you have to create a new intent. 


 **Follow these steps to add a new intent for the utterance**:

1. To create a new Dialog Task or FAQ for that utterance, click the **Add Intent** drop-down.

    <img src="../images/add-new-intent.png" alt="Add New Intent" title="Add New Intent" style="border: 1px solid gray; zoom:60%;">


2. Click the **Dialog Task** option to create a new intent for the selected utterance.
3. The **Create Dialog** panel is displayed. Enter the required details and click **Proceed** to add the new intent for the utterance.

    <img src="../images/add-new-intent-1.png" alt="Add New Intent" title="Add New Intent" style="border: 1px solid gray; zoom:60%;">


4. Click **Yes, Mark as Reviewed** if you want to change the status of the trained utterances to Reviewed, or else click **No**.

    <img src="../images/add-new-intent-2.png" alt="Add New Intent" title="Add New Intent" style="border: 1px solid gray; zoom:60%;">


5. Click the **FAQ** option listed in the **Add Intent** drop-down to add a new FAQ for the selected utterance.

    <img src="../images/add-new-intent-3.png" alt="Add New Intent" title="Add New Intent" style="border: 1px solid gray; zoom:60%;">


6. Click **Yes, Mark as Reviewed** if you want to change the status of the trained utterances to Reviewed, or else click **No**.

    <img src="../images/add-new-intent-4.png" alt="Add New Intent" title="Add New Intent" style="border: 1px solid gray; zoom:60%;">



Status Review

The status of all the utterances is **Yet to review** by default. You can change the status of an individual utterance from **Yet to Review** to **Reviewed** and vice versa.

!!! note

    You can also use the Status drop-down provided in the top right corner of the page to change the status of one or more selected utterances.


<img src="../images/status-review.png" alt="Status Review" title="Status Review" style="border: 1px solid gray; zoom:60%;">



Click any utterance from the list to display the **Details, NLP Analysis**, and **Chat History** panel shown in the following screenshot.

<img src="../images/status-review-1.png" alt="Status Review" title="Status Review" style="border: 1px solid gray; zoom:60%;">



Dataset Filters

Once an AI Agent is published, the platform provides an option to filter the datasets on the Conversation Insights dashboard, to analyze the data of the multiple conversations.
On the dashboard, various filter criteria like **Date, Conversation Type**, **Conversation Status**, and in **More Filters** drop-down **Intent Type, Utterance Status**, and so on are available for filtering.

<img src="../images/data-set-filters.png" alt="Data Set Filters" title="Data Set Filters" style="border: 1px solid gray; zoom:60%;">


To Know more about the filter criteria, their descriptions, and the availability matrix, see Analytics Dashboard Filters.

Appendix

This section provides more details about TP, TN, FP, and FN scenarios with examples:

**True Positive**

True Positives (TP) refer to instances where the AI Agents correctly identifies the intent of an utterance. For example, if the user says “What’s the weather today?”, and the AI Agents correctly identifies the intent as “get_weather”, this would be a True Positive.
In this example the intent is correctly mapped to **Check Balance**, hence it is a true positive.


<img src="../images/true-positive.png" alt="True Positive" title="True Positive" style="border: 1px solid gray; zoom:80%;"/>



**True Negative**

True Negatives (TN) refer to instances where the AI Agents correctly identifies that an utterance did not match any of the defined intents. For example, if the user says “I’m not sure what you mean”, and the AI Agents correctly identifies that this does not match any of the defined intents, this would be a True Negative.
In the following example, the user utterance “Extremely Likely” did not match with any defined intent and is categorized as Unidentified intent.


<img src="../images/true-negative.png" alt="True Negative" title="True Negative" style="border: 1px solid gray; zoom:80%;"/>



**False Positive**

False Positives (FP) refer to instances where the AI Agents incorrectly identifies the intent of an utterance. For example, if the user provides his bank account name, and the AI Agents incorrectly identifies the intent as “Close Account”, this would be a False Positive.


<img src="../images/false-positive.png" alt="False Positive" title="False Positive" style="border: 1px solid gray; zoom:80%;"/>



**False Negative**

False Negatives (FN) refer to instances where the AI Agents incorrectly identifies that an utterance did not match any of the defined intents. For example, if the user says “What’s the weather today?”, and the AI Agents incorrectly identifies that this does not match any of the defined intents, this would be a False Negative.
In this example, the “create account” utterance is wrongly mapped as an Unidentified intent and hence would be False Negative.


<img src="../images/false-negative.png" alt="False Negative" title="False Negative" style="border: 1px solid gray; zoom:80%;"/>

