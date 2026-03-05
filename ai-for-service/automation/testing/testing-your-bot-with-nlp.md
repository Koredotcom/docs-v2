[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Utterance Testing - NLP

To make sure your app responds to user utterances with related tasks, it is important that you test it with a variety of user inputs. Evaluating a app with a large sample of expected user inputs not only provides insights into its responses but also gives you a great opportunity to train it in interpreting diverse human expressions. 

You can perform all the training-related activities for a app from the _Utterance Testing_ module. We will use a sample _Travel Planning_ app to provide examples within this article.

## Testing the Assistant

Simply put, testing a app refers to checking if it can respond to a user utterance with the most relevant task. Given the flexibility of language, users will use a wide range of phrases to express the same intent.

For example, you can rephrase _I want to change my ticket from San Francisco to Los Angeles on Jan 1_ as _Please change my travel date. Can’t make it on Jan 1._ The trick is to train the app to map both of these utterances with the same intent.

The first step to start testing a app is to identify a representative sample of user utterances to test the responses. Look for sources of data that reflect real-world usage of the language, such as support chat logs, online communities, FAQ pages of relevant portals.


### How to test the App

Follow these steps:

1. Open the app that you want to test.
2. From the left menu click **Testing** > **Utterance Testing**.
3. In the case of a multiple intent model, you can select the **Intent Model** against which you want to test the utterance. The ML Engine will detect the intents only from the selected model.
4. In the **Type a user utterance** field, enter the utterance that you want to test. Example: _Book a flight_.
5. The result appears with a single, multiple, or no matching intents.

<img src="../images/utterance-testing-1-window.png" alt="Utterance Testing - Overview" title="Utterance Testing - Overview" style="border: 1px solid gray; zoom:50%;"/>

### Types of Test Results

When you test an utterance, the NLP engine tries to identify an intent using the following  engines and intent identification features:


* [Machine Learning](../natural-language/training/machine-learning-engine.md){:target="_blank"} engine, 
* [Fundamental Meaning](../natural-language/training/fundamental-meaning.md){:target="_blank"} engine,
* [Knowledge AI](../../automation/knowledge-ai/knowledge-ai-introduction.md){:target="_blank"}, including the [Knowledge Graph](../../automation/knowledge-ai/knowledge-graph-training.md){:target="_blank"} engine,
* [Ranking and Resolver](../natural-language/training/ranking-and-resolver.md){:target="_blank"}.


!!! note

    Utterance testing differs for Knowledge AI and Ranking and Resolver, depending on the NLP version, Ranking and Resolver version, and whether you are using the Few-Shot Knowledge Graph model.



### Utterance Match Classification

Test results are classified as either _Probable Matches_ or _Definitive Matches_, as follows;  
<img src="../images/utterence-testing-2-testing-matches.png" alt="Utterance Match Classification" title="Utterance Match Classification" style="border: 1px solid gray; zoom:50%;"/>


_Definitive Matches_ get high confidence scores and are assumed to be perfect matches for the user utterance. In published assistants, if user input matches with a single _Definitive Match_, the app directly executes the task. If the utterances match with multiple _Definitive Matches_, they are sent as options for the end-user to choose one.

On the other hand, _Probable Matches_ are intents that score reasonably well against the user input but do not inspire enough confidence to be termed as exact matches. Internally the system further classifies possible matches into good and unsure matches based on their scores. If the end-user utterances were generating possible matches in a published app, the app sends these matches as _“Did you mean?”_ suggestions for the end-user.

Below are the possible outcomes of a user utterance test:



* **Single Match (Possible or Definitive)**: The NLP engine finds a match for the user utterance with a single intent or task. The intent is displayed below the User Utterance field. If it is a correct match, you can move on to test the next utterance or you can also further train the task to improve its score. If it is an incorrect match, you can mark it as incorrect and select the appropriate intent.
* **Multiple Matches (Possible or Definitive or Both)**: NLP engine identifies multiple intents that match with the user utterance. From the results, select the radio button for the matching task and train it.  
<img src="../images/utterance-testing-3-utterancetesting-multiple.png" alt="Utterance Testing - Multiple Matches" title="Utterance Testing - Multiple Matches" style="border: 1px solid gray; zoom:50%;"/>


* **Unidentified Intent**: The user input did not match any task in any of the linked assistants. Select an intent and train it to match the user utterance.  
<img src="../images/utterance-testing-4-nointent-window.png" alt="Unidentified Intent" title="Unidentified Intent" style="border: 1px solid gray; zoom:50%;"/>



### Entity Match

During testing of the app, the matched entities are displayed. The entities from the utterance are processed in the following order:

* first NER and pattern entities 
* then the remaining entities.

Post v. 8.0 of the Platform, the details of how the entity is matched, and with what confidence scores are also displayed. The details include:

* **Identification Engine** – Machine Learning, Fundamental Meaning or Knowledge Graph;
* **Training Type** – match can be from NER, pattern training, entity name, system concept, etc. In case of pattern match, click the row to get the details for the same;
* **Confidence Score** identified by the ML engine using NER training (only when Conditional Random Field is selected as the NER model) 

<img src="../images/utterance-testing-5.png" alt="Entity Match" title="Entity Match" style="border: 1px solid gray; zoom:50%;"/>

### Analyzing the Test Results

When you test a user utterance, in addition to the matching intents you will also see an NLP Analysis box that provides a quick overview of the shortlisted intents, the NLP models using which they were shortlisted, corresponding scores, and the final winner.  
<img src="../images/utterance-testing-6-fm-en.png" alt="Fundamental Meaning tab" title="Fundamental Meaning tab" style="border: 1px solid gray; zoom:50%;"/>

Under the _Fundamental Meaning_ tab, you can see the scores of all the intents even if they aren’t shortlisted.

As mentioned above, the NLP engine uses Machine Learning, Fundamental Meaning, and Knowledge Graph (if any) models to match intents. If the NLP engine finds a single _Definitive Match_ through one of the underlying models, you will see the task as the matching intent. If the test identifies more than one definitive match, you will receive them as options to pick the right intent.

If the models shortlist more than one possible match, all the shortlisted intents are re-scored by the _Ranking and Resolver_ using the _Fundamental Meaning_ model to determine the final winner.

Sometimes, multiple _Possible Matches_ secure the same score even after the rescoring in which case they are presented as multiple matches to the developer to select one. You can click the tab with the name of the learning model in the NLP Analysis box to view the intent scores.

!!! note
    
    The NLP score is an absolute value and can only be used to compare against other tasks with the same input. Task scores cannot be compared across different utterances.

<img src="../images/utterance-testing-7-testing-mltc.png" alt="Machine Learning Model" title="Machine Learning Model" style="border: 1px solid gray; zoom:50%;"/>



From each model dialog, clicking the icon on the top right will display the configurations and thresholds in place for the corresponding engines.


#### ML Model

The ML model tries to match the user input with the task label and the training utterances of each task. If the user input consists of multiple sentences, each sentence is run separately against the task name as well as the task utterances.

Click on the Machine Learning Model button to open the Machine Learning Model section of NLP Analysis. This shows only the names of the tasks that secure a positive score. In general, the more the number of training utterances that you add to a task, the greater are its chances for discovery. For more information, read [Machine Learning](../natural-language/training/machine-learning-engine.md){:target="_blank"}.  
<img src="../images/utterance-testing-8-testing-ml.png" alt="Machine Learning Model - Intent Score" title="Machine Learning Model - Intent Score" style="border: 1px solid gray; zoom:50%;"/>



#### FM Model

Apart from the ML model, each task in the app is also scored against the user input using a comprehensive custom NLP algorithm that involves different combinations of task names, synonyms, and patterns. The Fundamental Meaning (FM) Model tab shows the analysis for all the intents in the app. Click the tab to view the scores of each task.
Clicking the **Processed Utterance** shows how the user utterance was analyzed and processed.



#### FM Scoring Model

From v. 7.2, the FM engine generates the model in two ways, depending upon the language of the app.

**Approach 1**: Supported for German and French languages.

The **word analysis** factors pertaining to Original Word, Universal Parts of Speech, Dependency Relation and Related Word are elaborated.

Next, the **score breakup** for each of the intents processed is displayed. Selecting a scored intent (matched or eliminated) displays the details of the scoring for each word. This includes the words from the utterance and score assigned to each based upon the dependency parsing.  
<img src="../images/utterance-testing-9-fm-de.png" alt="FM Scoring Model" title="FM Scoring Model" style="border: 1px solid gray; zoom:50%;"/>



**Approach 2**: Supported for languages, other than the ones mentioned above.

The **word analysis** factors pertaining to Original Word, Role in the sentence and Processed word (in case of spell correction) are elaborated.

Next, the **score breakup** for each of the intents processed is displayed. Selecting a scored intent (matched or eliminated) displays the details of the scoring for each word. The detailed breakdown is given below.  
<img src="../images/utterance-testing-10-fundamental-meaning.png" alt="FM Scoring Model - Score Breakup" title="FM Scoring Model - Score Breakup" style="border: 1px solid gray; zoom:50%;"/>



The other scoring methods are:

* **Words Matched**: The score given for the number of words in the user input that matched words in the task name or a trained utterance for the task.
* **Word Coverage**: The score given for the ratio of the words matched with that of the overall words in the task, including task name, field names, utterances, and synonyms.
* **Exact Words**: The score given for the number of words that matched exactly and not by synonyms.
* **Bonus**
    * **Sentence Structure**: Bonus for the sentence structure match to the user input.
    * **Word Position**: Score given to a word based on its position in a sentence Individual words towards the start of the sentence are given higher preference. Extra credit if the word is near to the sentence start.
    * **Order Bonus**: Bonus for the number of words in the same order as the task label.
    * **Role Bonus**: Bonus for the number of primary and secondary roles (subject/verb/object) matched.
    * **Spread Bonus**: Bonus for the difference between the position of first and last matched words in a pattern. The higher the difference, the greater the score.
* **Penalty**:
    * Penalty if there are several phrases before the task name or if there is a conjunction in the middle of the task label.  
    

#### Knowledge Graph

If the app includes a Knowledge Graph, the user utterances are processed to extract the terms and are mapped with the Knowledge Graph to fetch the relevant paths. All the paths containing more than a preset threshold of the number of terms get shortlisted for further screening. Path with 100% terms covered and having a similar FAQ in the path is considered a perfect match.

In case the utterance triggers a dialog (as per run a dialog option in KG), the same is displayed as _matched intent_ and _matched utterance_. You can further train the app as you would for an intent from ML or FM engine. [Know more about Knowledge Graph Training from here](../knowledge-ai/knowledge-graph-training.md){:target="_blank"}.  
<img src="../images/utterance-testing-11-testing-kg.png" alt="Knowledge Graph" title="Knowledge Graph" style="border: 1px solid gray; zoom:50%;"/>


#### Ranking and Resolver

Ranking and Resolver determines the final winner of the entire NLP computation. If either the ML model or the Knowledge Graph find a perfect match, the ranking and resolver doesn’t re-score the intent and presents it as a matched intent. Even if there are multiple perfect matches, they will be presented as options to the developers from which they can choose.

The Ranking and Resolver re-scores all the other good and unsure matches identified by the three models using the Fundamental Meaning model. After re-scoring, if the final score of an intent crosses a certain threshold, it too is considered as a match.

Selecting the Ranking and Resolver tab provides you with details on how the winning intent has been determined.

The ranking and details for each match can be viewed by selecting the matched utterance.  
<img src="../images/utterance-testing-13-rr-matched-utterance.png" alt="Ranking and Resolver" title="Ranking and Resolver" style="border: 1px solid gray; zoom:50%;"/>



#### RR Scoring Model

Depending upon the Bot language the scoring model can be:

* based on a mixture of word roles, sentence/word positions, and word order; or
* based on dependency parsing (supported for German and French languages)

The basis for **intent elimination** by Ranking & Resolver when the three engines return different definite/possible matches is as follows:

* Intents matched based upon entity values like date, number etc., by the Machine Learning Model are eliminated.
* All possible matches identified by any of the three engines are eliminated if a definitive match was found.
* Definitive match eliminated if another definitive match was found prior to this in the user utterance – case when the user utterance includes two intents. For example, “Book me a flight and then book a cab” would match “Book Flight” and “Book Cab” but “Book Cab” is eliminated over “Book Flight”.
* Intent pattern matches following a definitive intent match are eliminated. For example, user utterance “create a task to send an email” can match the intents “create task” and “send email”, in such cases the “send email” will be eliminated since it follows the intent “create task”
* Intents with scores below the minimum value set in the Threshold and Configurations section are eliminated.
* Definitive matches which match a Negative Pattern.
* Intents for which the pre-conditions, in case defined, are not met are eliminated.
* If the definitive match was from Knowledge Graph Engine by Search In Answer and there is another matched intent.



#### Ranking and Resolver v2

[Version 2 of the Ranking and Resolver](../natural-language/training/ranking-and-resolver.md){:target="_blank"} only ranks the scores of the definitive matches from ML and KG engines (not the FM engine) without intent rescoring to ensure the best intent identification accuracy.
If you enable Ranking and Resolver Version 2, your test results adjust as follows: 

The **Ranking & Resolver** window displays the following:

* The definitive intent that is matched based on ranking.
* The number of definitive and probable matches.
* The winning intent name and the ranking score.
* The other definitive intent(s), the reason for elimination, and the ranking score.
* The result, including the winning and eliminated intents.

<img src="../images/utterance-testing-14-rr-testing-window.png" alt="Ranking and Resolver V2" title="Ranking and Resolver V2" style="border: 1px solid gray; zoom:50%;"/>


The **NLP Analysis** page within the **NLP Insights** dashboard displays the following:

   * The given user utterance.
   * The flow of how the NLP models generated the rescored matching intents.
   * The flow of Version 2 of R&R, including the ranking, identification, and marking of the winning intent as the definitive match.
   * The identification and marking of the probable match.
  
<img src="../images/randr-window.png" alt="Ranking and Resolver V2 - Details" title="Ranking and Resolver V2 - Details" style="border: 1px solid gray; zoom:50%;"/>


### Training the Assistant

Training is how you enhance the performance of the NLP engine to prioritize one task or user intent over another based on the user input. You should test and, if needed, train your app for all possible user utterances and inputs.


#### Utterance-based Training

Below is the process we recommend you use for utterance training:

1. After you enter a User Utterance, depending on the test result do one of the following to open the training options:
    1. **For an unmatched intent**: From the **Select an Intent** drop-down list, select the intent that you want to match with the user utterance.
    2. **For multiple matched intents**: Select the radio button for the intent you want to match.
    3. **For a single matched intent**: Click the name of the matched intent.
2. The user utterance that you entered gets displayed in the field under the _ML Utterances_ section. To add the utterance to the intent, click **Save**. You can add as many utterances as you want, one after another. For more information, read [Machine Learning](../natural-language/training/machine-learning-engine.md){:target="_blank"}.
3. Under the _Intent Synonyms_ section, each word in the task name appears as a separate line item. Enter the synonyms for the words to optimize the NLP interpreter accuracy to recognize the correct task. For more information, read [Managing Synonyms](../natural-language/training/fundamental-meaning.md#manage-synonyms){:target="_blank"}.
4. Under the _Intent Patterns_ section, enter task patterns for the intent. For more information, read [Managing Patterns](../natural-language/training/fundamental-meaning.md#manage-patterns-and-rules){:target="_blank"}.
5. When you are done making the relevant training entries, click **Re-Run Utterance** to see if you have improved the intent to get a high confidence score. 

<img src="../images/utterance-testing-16-utterance-training.png" alt="Utterance-based Training" title="Utterance-based Training" style="border: 1px solid gray; zoom:50%;"/>



#### View Matched Training Data

The **Ranker and Resolver NLP Analysis** window lists the matched training data (ML utterances, intent synonyms, questions, patterns, and traits) that helped the ML, KG, or FM engine to identify the qualified intent during utterance testing. This crucial information is available in all the NLU languages of R&R V1 and V2, and helps understand why the given intent is qualified.

The system displays the matched training data for the following NLP engines and network models:


<table border="1">
  <tr>
   <td><strong>NLP ENGINE</strong>
   </td>
   <td><strong>SUPPORTED NETWORK MODELS</strong>
   </td>
   <td><strong>MATCHED TRAINING DATA</strong>
   </td>
  </tr>
  <tr>
   <td>Machine Learning
   </td>
   <td>Standard and Few-shot Model.
   </td>
   <td>Sample utterance for every intent qualified.
   </td>
  </tr>
  <tr>
   <td>Knowledge Graph
   </td>
   <td>Ontology and Few-shot Model.
   </td>
   <td>Questions/alternate questions of the qualified FAQs.
   </td>
  </tr>
  <tr>
   <td>Fundamental Meaning
   </td>
   <td>All Models
   </td>
   <td>Pattern for the qualified intents.
   </td>
  </tr>
</table>


For the intents qualified and eliminated in R&R, the system displays the elimination reason in addition to the matched utterance, processed utterance, and the winning intent.  
<img src="../images/elimination-reason.png" alt="Intents qualified and eliminated" title="Intents qualified and eliminated" style="border: 1px solid gray; zoom:50%;"/>



**Train with FAQ**

If you want the app to respond to user utterance with FAQs there are two ways to do it:

* set the terms, term configuration, or classes from the FAQ page, train the KG and retest the utterance.
* add the utterance as an alternate question to the selected FAQ from the Knowledge Graph page, train the KG and retest the utterance.
[Know more about Knowledge Graph Training](../../automation/knowledge-ai/knowledge-graph-training.md){:target="_blank"}.



**Mark an Incorrect Match**

When a user input matches an incorrect task, do the following to match it with the right intent:  
<img src="../images/utterance-testing-18-mark-incorrect-intent.png" alt="Mark an Incorrect Match" title="Mark an Incorrect Match" style="border: 1px solid gray; zoom:50%;"/>