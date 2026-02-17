# Agent Real-time Coaching

Contact center agents often handle high call volumes and complex conversations, making it difficult to consistently meet customer expectations without the right support, guidance, and tools. The **Real-Time Agent Coaching** feature helps supervisors support agents by analyzing utterances and speech patterns during calls.

You can configure triggers—such as specific utterances and speech patterns—for Agent AI to provide real-time coaching, including on-screen hints, nudges, or manager notifications. You can track triggered utterances, review their frequency over time, and assess how well agents follow recommended actions. You can also analyze speech patterns—such as cross talk, dead air, and speaking speed—to help agents improve communication.

This guide is meant for the Contact Center supervisors and explains everything about the Real-time Agent Coaching feature, including rules, triggers, and actions.

## Rules

Rules are a combination of triggers and actions to solve an issue. Each rule is an independent entity that you can edit, delete, tag, untag, enable, or disable. For easy identification, you can label all relevant rules with the same tag. You can use multiple tags for one rule and one tag for multiple rules. Real-time Agent Coaching has two types of rules:

* **Pre-built**: Pre-existing coaching options that come with Agent Coaching.
* **New rules**: New rules you can create based on your requirements.

Currently, the pre-built rules section has two rules – None Intent and Price Objection.

### None Intent

The None Intent rule contains utterances that are used to prevent false positives during intent identification. By using these utterances, you can train the system to differentiate between a positive (trained) and a false-positive (wrong, untrained, ambiguous) utterance. For example, an utterance “I need help with my account” is a positive intent and the system has to act accordingly, but the utterance “It is too expensive” is a false-positive intent wherein the system should not take any action.

This rule is enabled by default, and you can’t disable or delete it. You can, however, add more utterances to make this rule more effective.

#### Adding None Intent Utterances

You can add utterances in two ways:

* **AI Assist**: You can take assistance from AI to generate and add more none intent utterances based on the utterances of your selected rules.
* **Input Utterances Manually**: You can manually enter and save none intent utterances.

##### Steps to add none intent utterances

1. Sign in to **XO Platform**.
2. Click **AgentAssist** > **Experience** > **Agent Coaching**.
3. Click the **edit** button against a **Pre-built, None Intent** rule under **Actions**.
    <img src="../agent-coaching-images/edit-none-intent-rule-1.png" alt="edit-none-intent-rule" title="edit-none-intent-rule" style="border: 1px solid gray; zoom:80%;">
4. Click **Add Utterance(s)**.
5. Select **AI Assist** or **Input Utterances Manually**.
    Follow these steps if you select **AI Assist**:
    1. Select **AI Assist**.
    
        !!! note

            To avail the **AI Assist** feature, enable **OpenAI** in the **App Settings** > **Generative AI Tools**, and enable **Generating Opposite…** in the **Co-Pilots** section.

    2. Select rules, as required, from the **Add Rules** list and click **Add**.
      <img src="../agent-coaching-images/select-none-intent-rules-2.png" alt="select-none-intent-rules" title="select-none-intent-rules" style="border: 1px solid gray; zoom:80%;">
       
    3. All added rules are displayed on the left, and the AI starts searching for more utterances that are similar in meaning to the utterances of your selected rules.
    
    4. Select utterances, as required, and then click **Add Selected**.
    
    5. Click **Save** to complete the process.

Follow these steps if you select **Input Utterances Manually**:

1. Select **Input Utterances Manually**.
2. Enter your utterance in the **Utterances** field and press the **Enter** key.
    <img src="../agent-coaching-images/add-utterances-manually-3.png" alt="add-utterances-manually" title="add-utterances-manually" style="border: 1px solid gray; zoom:80%;"> 
Following this step, you can add multiple utterances.
3. Click **Save**.
    
    The new utterance gets added to the list of utterances.

### Price Objection

This is a predefined rule with conditions and actions that come with Agent Coaching. You can customize the conditions and actions, but can’t edit or delete the rule name. However, you can disable this rule, if needed. It contains a customer’s price objection utterance and defines the actions agents should take in response. The predefined conditions and actions are:

* **Condition (When)**: Price objection utterance by customer
* **Actions (Then do)**:
    * Alert Type: Hint Agent
    * Alert Title: Price Objection identified
    * Alert Body: Please reassure the customer and offer discounts
    * Alert Display: Doesn’t auto close
    * Alert Adherence: “Ok, Got it”
* **Assigned to**: All Agents

The following screenshot displays the **Price Objection** rule:

<img src="../agent-coaching-images/price-objection-identification-4.png" alt="price-objection-identification" title="price-objection-identification" style="border: 1px solid gray; zoom:80%;">

For information on rule functionalities, refer to the section [Create, Publish, Edit, Delete, and Disable Rules](#create-publish-edit-delete-and-disable-rules).

## Create, Publish, Edit, Delete, and Disable Rules

This section explains how to create, tag, publish, edit, delete, and disable rules.

### Creating a New Rule

From time to time, depending on newer or different situations, you can create new rules to help agents with newer issues. This section explains the steps to create a new rule.

#### Steps to create a new rule:

1. Sign in to **XO Platform**.
2. Click **AgentAssist** > **Experience** > **Agent Coaching**.
3. Click **+New Rule**.
4. Enter a name for the new rule in the **Name** field.
5. Enter a short description about the rule in the **Description** field.  
   To read how to form a rule description, hover over the “i” button beside the **Description** field.  
   <img src="../agent-coaching-images/rule-description-criterion-5.png" alt="rule-description-criterion" title="rule-description-criterion" style="border: 1px solid gray; zoom:40%;">  
   Rule description should be concise and include keywords and conditions. It trains the AI for real-time assistance. 

6. Enter a tag in the **Tag** field and then press the **Enter** key to add the tag.
7. Click **Voice** or **Live Chat** or both in the **Channels** field.
    1. **Voice**: Choose **Voice** if you want this rule to take input utterance only through the voice (voice calls) medium.
    2. **Live Chat**: Choose **Live Chat** if you want this rule to take input utterance only through the live chat (text messages) medium.
    3. **Both**: Choose both **Voice** and **Live Chat** if you want this rule to take input utterance through both these mediums.

8. Click **Apply** to complete the rule creation process:  
   <img src="../agent-coaching-images/completing-rule-creation-process-6.png" alt="completing-rule-creation-process" title="completing-rule-creation-process" style="border: 1px solid gray; zoom:40%;">  
   A message shows up to confirm a new rule creation.

9. Click **+Add a trigger** under **When…** to add a trigger condition for the rule. For more information, refer to the [Agent Coaching Rule Triggers When...](#agent-coaching-rule-triggers-when) section.

10. Click **+Add an action** under **Then do…** to add an action for the rule. For more info, refer to the [Agent Real time Coaching Actions Then do...](#agent-real-time-coaching-actions-then-do) section.

11. Click **Add agents, groups** under **Assign this to…** to add agents or groups you want to assign this rule to. For more info, refer to the [Assign This to](#assign-this-to) section.

12. Click **Save**.

### Editing a Rule

You can add to or change an existing rule based on the requirements.

#### Steps to edit a rule

1. Sign in to **XO Platform**.
2. Click **AgentAssist** > **Experience** > **Agent Coaching**.
3. Locate the rule you want to edit–either from the displayed list or by partially entering the rule name in the **Search** box.
    1. As you enter the rule name in the **Search** box, matching rule names appear on the screen.
4. Click the **edit** button beside a rule name that you want to edit.

    !!! note

        Co-editing a rule is not allowed–if you edit a rule, it’s locked, and no one else can edit or delete it simultaneously. AgentAssist will notify you if you attempt to co-edit a rule. If a rule is locked for editing, but the user has not performed any editing for 15 minutes or left the Rules Configuration screen, AgentAssist unlocks the rule for editing by another user.

### Deleting a Rule

You can delete a rule due to irrelevance or other reasons. AgentAssist lets you delete an existing rule with the click of a button.

#### Steps to delete a rule

1. Go to the **AgentAssist** > **Experience** > **Agent Coaching** main page.
2. Click the **delete** button beside a rule name that you want to delete.
3. Click **Yes** in the confirmation popup window.

### Disabling a Rule

If you don’t want to use a rule temporarily, you can disable it.

#### Steps to disable a rule

1. Go to the **AgentAssist** > **Experience** > **Agent Coaching** main page.
2. In the **Enabled** column, use the toggle to disable or enable a rule.
    1. The **Configuration has been Saved** message appears on the screen.

## Agent Coaching Rule Triggers (When…)

Trigger setting is essential to rule creation. You can’t have a rule without a trigger. Triggers define the conditions for a rule to come into effect. This section explains how to set up triggers for new rules. The available triggers are:

* Utterance Triggers
* Speech Analysis Triggers
* Gen AI Utterances

### Utterance Triggers

Utterances are inputs from customers and agents. In Utterance Triggers, you set up conditions like input from customers or agents, the number of times the input came, and the time frame within which the input came to set off the trigger.

#### Steps to set up Utterance Triggers

1. Go to the rule trigger creation page. For help, refer to [Steps to create a new rule](#steps-to-create-a-new-rule). 
2. Under **When**, click the **+ Add a trigger** button.
3. Select **Utterance**.  
   <img src="../agent-coaching-images/select-utterance.png" alt="select-utterance" title="select-utterance" style="border: 1px solid gray; zoom:80%;"> 

4. Click **{select person}**.
5. Select either **Agent** or **Customer**.
6. Click **{set utterances}**.
7. Enter an utterance that the user (customer or agent) may use in the **Utterances** box.
8. Select the utterance you have entered.
    * There may be other matching utterances the AI suggests:
9. Select the **AI-suggested utterances**, as required.

    !!! note

        AI suggests utterances that match with what you have entered based on conversation history. It also shows the appearance percentage of utterances.

10. Click **Add**. (The appearance of this button is based on the number of utterances entered by you plus the number of AI-suggested utterances you have selected. In this example, it’s 1+3. So, it’s displayed as Add 4.)

    <img src="../agent-coaching-images/manually-added-and-ai-suggested-utterances-7.png" alt="manually-added-and-ai-suggested-utterances" title="manually-added-and-ai-suggested-utterances" style="border: 1px solid gray; zoom:80%;">

11. Click **Okay**.
12. Click **Save**.

    !!! note

        Before clicking the **Save** button, you can delete any utterance you would have added by mistake or think is irrelevant.

    * The following screen appears:
      <img src="../agent-coaching-images/saving-and-removing-utterances-8.png" alt="saving-and-removing-utterances" title="saving-and-removing-utterances" style="border: 1px solid gray; zoom:80%;">

13. Click **1 time** to select the number of times any of these utterances appear. The default selection is **1 time**. For example, a customer may use any of these utterances once by mistake and to be sure, you want the customer to use them twice or thrice. You need to select **2 times** or **3 times** for such situations.

    <img src="../agent-coaching-images/trigger-based-on-times-of-utterance-appearance-9.png" alt="trigger-based-on-times-of-utterance-appearance" title="trigger-based-on-times-of-utterance-appearance" style="border: 1px solid gray; zoom:80%;">

14. Click the default time frame, in conversation, to change it if you want to select other options.
    <img src="../agent-coaching-images/trigger-based-on-utterance-time-frame-10.png" alt="trigger-based-on-utterance-timeframe" title="trigger-based-on-utterance-timeframe" style="border: 1px solid gray; zoom:80%;"> 

    1. If you select **Anytime in conversation**, the following screen appears:
        <img src="../agent-coaching-images/utterance-trigger-any-time-in-conversation-11.png" alt="utterance-trigger-any-time-in-conversation" title="utterance-trigger-any-time-in-conversation" style="border: 1px solid gray; zoom:80%;"> 
    2. If you select **By time**, the following screen appears:
        <img src="../agent-coaching-images/utterance-trigger-by-time-12.png" alt="utterance-trigger-by-time" title="utterance-trigger-by-time" style="border: 1px solid gray; zoom:80%;">

        From the dropdown, select **first** or **within** and enter the time in seconds.

    3. If you select **By number of messages**, the following screen appears:
        <img src="../agent-coaching-images/utterance-trigger-by-number-of-messages-13.png" alt="utterance-trigger-by-number-of-messages" title="utterance-trigger-by-number-of-messages" style="border: 1px solid gray; zoom:80%;">

        From the dropdown, select **first** or **within** and enter a number in the messages field.

15. Press the **Enter** key to complete the process.

### Speech Analysis Triggers

This feature analyzes the speech pattern or event of both the customer and the agent and provides real-time feedback and coaching to improve customer-agent conversation quality. This section explains the steps to set up the Speech Analysis Triggers feature.

#### Steps to set up Speech Analysis Triggers

1. Select **Speech Analysis** after clicking **When**> **+Add a trigger**.
2. Click **{speech type}** and select a type for analysis.
    <img src="../agent-coaching-images/speech-type-trigger-15.png" alt="speech-type-trigger" title="speech-type-trigger" style="border: 1px solid gray; zoom:80%;"> 
    * If you select **Cross Talk**, the following screen appears:
      <img src="../agent-coaching-images/cross-talk-speech-type-trigger-16.png" alt="cross-talk-speech-type-trigger" title="cross-talk-speech-type-trigger" style="border: 1px solid gray; zoom:80%;">
        1. Click **30** to enter the duration in seconds–30 seconds is the default value.
        2. Enter the duration in seconds and then press the **Enter** key.
            <img src="../agent-coaching-images/cross-talk-duration-trigger-17.png" alt="cross-talk-duration-trigger" title="cross-talk-duration-trigger" style="border: 1px solid gray; zoom:80%;">
        3. Click **1 time** to update the number of times crosstalk happened in a conversation.
            <img src="../agent-coaching-images/cross-talk-frequency-trigger-18.png" alt="cross-talk-frequency-trigger" title="cross-talk-frequency-trigger" style="border: 1px solid gray; zoom:80%;">
        4. Click to select the number of times, as required.
        5. Click **in conversation** to update when crosstalk happened; **in conversation** is the default value.
        <img src="../agent-coaching-images/cross-talk-timing-trigger-19.png" alt="free text" title="free text" style="border: 1px solid gray; zoom:80%;">
            1. If you select **Anytime in conversation**, the following screen appears:
            <img src="../agent-coaching-images/cross-talk-anytime-in-conversation-trigger-20.png" alt="cross-talk-anytime-in-conversation-trigger" title="cross-talk-anytime-in-conversation-trigger" style="border: 1px solid gray; zoom:80%;">
            2. If you select **By time**, the following screen appears:
            <img src="../agent-coaching-images/cross-talk-by-time-trigger-21.png" alt="cross-talk-by-time-trigger" title="cross-talk-by-time-trigger" style="border: 1px solid gray; zoom:80%;">
                1. From the dropdown, select **first** or **within**, and enter the time in seconds.
                2. Press the **Enter** key to save the new values.
                
                    !!! note

                        If the configured crosstalk time duration is less than the selected conversation time period or if the trigger setup is incomplete, a validation error is displayed, as highlighted in the screenshot. 

    * If you select **Dead Air**, the following screen appears:  
      <img src="../agent-coaching-images/dead-air-trigger-22.png" alt="dead-air-trigger" title="dead-air-trigger" style="border: 1px solid gray; zoom:80%;">  

        1. Click **30** to enter the duration in seconds, and then press the **Enter** key to save it.  
           <img src="../agent-coaching-images/dead-air-duration-trigger-23.png" alt="dead-air-duration-trigger" title="dead-air-duration-trigger" style="border: 1px solid gray; zoom:80%;">
        2. Click **{select person}** to select the user.  
           <img src="../agent-coaching-images/dead-air-source-trigger-24.png" alt="dead-air-source-trigger" title="dead-air-source-trigger" style="border: 1px solid gray; zoom:80%;">
        3. Click **1 time** to select the frequency. 

        4. Click **In conversation** to select a time frame. 
           <img src="../agent-coaching-images/dead-air-timing-trigger-25.png" alt="dead-air-timing-trigger" title="dead-air-timing-trigger" style="border: 1px solid gray; zoom:80%;"> 

            1. From the dropdown list, select **first** or **within** and enter the time in seconds.

            2. Press the **Enter** key to save the new values.
           
            !!! note

                A validation error is displayed, as highlighted in the screenshot, either if the configured Dead Air duration is lesser than the selected conversation time period or if the trigger setup is incomplete.

    * If you select **Speech Speed**, the following screen appears:
      <img src="../agent-coaching-images/speech-speed-trigger-26.png" alt="speech-speed-trigger" title="speech-speed-trigger" style="border: 1px solid gray; zoom:80%;">
        1. Click **{select person}** to select either Agent or Customer.  
           <img src="../agent-coaching-images/speech-speed-source-trigger-27.png" alt="speech-speed-source-trigger" title="speech-speed-source-trigger" style="border: 1px solid gray; zoom:80%;">
        2. Click **180** to enter words per minute–**180 words per minute** is the default value.
        3. Enter the number of words per minute and then press the **Enter** key to save it. 
        4. Click **1 time** to select the frequency.
        5. Click **In conversation** to select a time frame.

    * If you select **Talk Ratio**, the following screen appears:  
      <img src="../agent-coaching-images/talk-ratio-trigger-28.png" alt="talk-ratio-trigger" title="talk-ratio-trigger" style="border: 1px solid gray; zoom:80%;">  
        1. Click **{Comparator}** to select a value comparison.  
           <img src="../agent-coaching-images/talk-ratio-comparator-trigger-29.png" alt="talk-ratio-comparator-trigger" title="talk-ratio-comparator-trigger" style="border: 1px solid gray; zoom:80%;">
            1. If you select **Less than** or **Greater than**, a screen similar to the following appears:  
               <img src="../agent-coaching-images/talk-ratio-less-than-trigger-30.png" alt="talk-ratio-less-than-trigger" title="talk-ratio-less-than-trigger" style="border: 1px solid gray; zoom:80%;">
            2. If you select **In between**, the following screen appears:  
               <img src="../agent-coaching-images/talk-ratio-comparator-in-between-trigger-31.png" alt="talk-ratio-comparator-in-between-trigger" title="talk-ratio-comparator-in-between-trigger" style="border: 1px solid gray; zoom:80%;">
        2. Click **{Value}** to enter a percentage value.  
           <img src="../agent-coaching-images/talk-ratio-comparator-in-between-percentage-32.png" alt="talk-ratio-comparator-in-between-percentage" title="talk-ratio-comparator-in-between-percentage" style="border: 1px solid gray; zoom:80%;">

            If you have selected **In between**, you must enter the values twice and click the **tick** mark, as highlighted in the following screenshot:  
            <img src="../agent-coaching-images/talk-ratio-comparator-in-between-percentage-33.png" alt="talk-ratio-comparator-in-between-percentage" title="talk-ratio-comparator-in-between-percentage" style="border: 1px solid gray; zoom:80%;">

        3. Click **in conversation** to select a time duration. By default, **Anytime in conversation** is selected.
           <img src="../agent-coaching-images/talk-ratio-comparator-in-between-percentage-duration-34.png" alt="talk-ratio-comparator-in-between-percentage-duration" title="talk-ratio-comparator-in-between-percentage-duration" style="border: 1px solid gray; zoom:80%;">

            1. Click **By time** to indicate a selected time frame for talk ratio measurement.

            2. Enter time in minutes and press the **Enter** key.  
               <img src="../agent-coaching-images/talk-ratio-in-between-by-time-35.png" alt="talk-ratio-in-between-by-time" title="talk-ratio-in-between-by-time" style="border: 1px solid gray; zoom:80%;">

### Gen AI Utterances

This feature analyzes real-time customer-agent conversations to trigger rules. Here, you can configure AI-powered prompts as triggers. When a customer or agent responds with an utterance that matches a configured prompt, the rule gets triggered. This section explains the steps to set up the Gen AI Utterances feature.

#### Steps to set up Gen AI Utterances

1. Select **Gen AI Utterances** after clicking **When…** > **+Add a Trigger**.
2. Click **{select person}**, and select **Agent** or **Customer**.
3. Click {**set prompt}** to enter a prompt to match the user’s (customer or agent) response in the **Enter Prompt** box.  
   <img src="../agent-coaching-images/enter-prompt-box.png" alt="enter-prompt" title="enter-prompt" style="border: 1px solid gray; zoom:80%;">

4. Click the **tick** mark to save the prompt.
5. Click **1 time** to select the frequency.
6. Click **In conversation** to select a time frame.

**Coaching Rule:**
<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Rule Name
   </td>
   <td>The name of the new rule and the users it has been assigned to.
   </td>
  </tr>
  <tr>
   <td>Actions
   </td>
   <td>Edit or delete a rule.
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>A short description of the rule.
   </td>
  </tr>
  <tr>
   <td>Tags
   </td>
   <td>Name of the tags a rule has been tagged with.
   </td>
  </tr>
  <tr>
   <td>Channels
   </td>
   <td>Communication channels through which rules are applied. Valid values are:
<ul>

<li>Voice

<li>Chat
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Last Updated
   </td>
   <td>Time and date when a rule was last updated.
   </td>
  </tr>
  <tr>
   <td>Status
   </td>
   <td>Current status of a rule. Valid values are:
<ul>

<li>Enable

<li>Disable
</li>
</ul>
   </td>
  </tr>
</table>

**Speech Type**:
<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td>Cross Talk
   </td>
   <td>When the talks between the agent and the customer cross each other.
   </td>
  </tr>
  <tr>
   <td>Dead Air
   </td>
   <td>No talk/silence either by the customer or the agent.
<p>
Valid values to choose from:
<ul>

<li>Anytime in conversation: Select it to configure the dead air period as anytime during a conversation.

<li>By time: Select it to choose the exact time frame when dead air was noticed. Valid values are:

<li>First: Select and enter the time frame as first (variable) seconds of conversation.

<li>Within: Select and enter the time frame as within (variable) seconds anytime during the conversation. 
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Speech Speed
   </td>
   <td>Number of words per minute during a session – either by the agent or the customer.
   </td>
  </tr>
  <tr>
   <td>Talk Ratio
   </td>
   <td>Agent to customer talk ratio – proportion of speaking time by an agent compared to a customer. By default, it can be identified only once. Here is a list of scenarios for different talk ratio ranges:
<ul>

<li>Equal to 50% for 1 Time in Conversation: Both the agent and the customer contribute equally to the conversation. A balanced conversation where both parties are actively engaged and sharing information, questions, and responses.

<li>&lt;20% for 4 Times By Time in the first 30 seconds: The agent speaks less than the customer for four instances within the first 30 seconds of the conversation. It could be due to the agent allowing the customer to express their concerns or issues before providing assistance or solutions.

<li>Less than or equal to 60% for 1 Time By Time within 30 seconds: The agent’s speaking time is limited to 60% or less of the conversation time within the first 30 seconds. This might occur when the agent is actively listening to the customer’s initial query or complaint, gathering relevant information, and demonstrating empathy before engaging in a more detailed conversation.

<li>Between 20% and 40% for 1 Time Any Time in Conversation: A balanced conversation, where the agent speaks for a moderate portion of the conversation (20% to 40%) while allowing the customer to express their needs and concerns.

<li>Between 20% and 40% for 4 Times By Time in the first 30 seconds: For four instances within the first 30 seconds, the agent maintains a talk ratio of 20% to 40%, giving the customer ample space to explain their issue or query before responding.

<li>Between 20% and 40% for 1 Time By Time within 30 seconds: The agent maintains a balanced talk ratio (20% to 40%) within the first 30 seconds of the conversation, showing attentiveness and understanding of the customer’s initial statements.
</li>
</ul>
   </td>
  </tr>
</table>

### And/Or Condition

AgentAssist allows you to add multiple rule triggers. It lets you set different conditions like combining multiple rules or choosing one or a set of rules against another or a different set of rules. You can even choose or combine rules from different trigger types like Utterance and Speech Analysis triggers.

#### Steps to select And/Or condition

1. Click **+Add a trigger** in the rule trigger creation page to create a new trigger.
2. Click **+Add a trigger** again to create a new rule trigger.
3. Select **And** or **Or**.  
   <img src="../agent-coaching-images/and-or-condition-36.png" alt="and-or-condition" title="and-or-condition" style="border: 1px solid gray; zoom:80%;">
   
    !!! note

        For creating multiple rule triggers, it is mandatory to choose **And** or **Or**. When you choose “And,” the rule triggers add up. When you choose “Or,” the rule triggers set to either of the rules. Here’s an example of this functionality:

    <img src="../agent-coaching-images/and-or-condition-explanation-37.png" alt="and-or-condition-explanation" title="and-or-condition-explanation" style="border: 1px solid gray; zoom:80%;">

The **And** condition ensures that rule triggers **1** and **2** are combined, and the **Or** condition ensures that either the combination of the first two rule triggers (**1+2**) or the third rule trigger (**3**) becomes applicable.

## Agent Real-time Coaching Actions (Then do…)

After setting up rule triggers, you must set up actions for those triggers. Here, you configure what actions AgentAssist should take if the conditions you set up are met. You can set up three different actions: 

* Nudge Agent

* Hint Agent

* Email Manager

You can also set up adherence, which is like an acknowledgment, to ensure the agent has followed the instructions.

### Add Adherence

The Add Adherence feature lets you know the agent’s adherence to the instructions in the form of nudges and hints. Later, you can use this acknowledgment to measure agent performance in the Dashboard. This feature is applicable only for the Nudge and Hint Agent actions. 

#### Add Adherence Types

You have two types of adherences to choose from:

* **Acknowledge Pressed**: Choosing this option sends an acknowledgment that the agent understood your instructions. The agent doesn’t need to take any other action except acknowledging your message. An example would be a compliment to the agent for a job well done. The following screenshot is displayed when this option is used:
<img src="../agent-coaching-images/adherence-acknowledge-pressed-38.png" alt="adherence-acknowledge-pressed" title="adherence-acknowledge-presse3d" style="border: 1px solid gray; zoom:80%;"> 

* **Utterance**: Choosing this option sends an acknowledgment that the agent will take further action within a specified time frame during a session. An example would be when you ask the agent to offer a discount to the customer, and the agent acknowledges that they will perform this action within the next few messages, a few minutes, or anytime during the session. The following screenshot is displayed when this option is selected:
<img src="../agent-coaching-images/adherence-utterance-39.png" alt="adherence-utterance" title="adherence-utterance" style="border: 1px solid gray; zoom:80%;"> 

For practical examples of this feature, refer to steps 7-8 of [Steps to set up the Nudge Agent actions](#steps-to-set-up-the-nudge-agent-actions).

### Nudge Agent

The Nudge Agent actions are the small messages that pop up on the agent’s screen while communicating with customers. These are disappearing messages that stay on the agent’s screen for five seconds. Agents can close these messages anytime after their appearance. Through these messages, you either compliment the agents for a good job or direct them to take other appropriate actions to serve the customers in the best way possible. You can use Gen AI to generate nudge messages based on your prompt. Here are the four nudges to select from:

* Positive

* Neutral

* Alert

* Critical

#### Steps to set up the Nudge Agent actions

1. Go to the rule action setup page.
2. Click **+ Add an action** under the **Then do…** section.
   <img src="../agent-coaching-images/then-do-add-an-action-40.png" alt="then-do-add-an-action" title="then-do-add-an-action" style="border: 1px solid gray; zoom:80%;"> 
3. Click the **Nudge Agent** option in the **Choose an Action** window.
   <img src="../agent-coaching-images/then-do-nudge-agent-41.png" alt="then-do-nudge-agent" title="then-do-nudge-agent" style="border: 1px solid gray; zoom:80%;"> 

4. Click **{Choose}** to select one of the sentiment messages, as displayed in the following screen:
   <img src="../agent-coaching-images/then-do-nudge-type-42.png" alt="then-do-nudge-type" title="then-do-nudge-type" style="border: 1px solid gray; zoom:80%;"> 

5. Click **{Choose}** to enter a message, as displayed in the following screenshot:  
   <img src="../agent-coaching-images/enter-nudge-message.png" alt="nudge-message" title="nudge-message" style="border: 1px solid gray; zoom:80%;"> 
    1. Select the **Use Gen AI Output** option to enter a Gen AI-powered nudge message that generates messages based on your prompt.
    2. Add a fallback nudge message that shows up, if Gen AI fails to generate a nudge message based on your prompt.  
    <img src="../agent-coaching-images/genai-nudge-message-fallback-message.png" alt="genai-nudge-message-fallback-message" title="genai-nudge-message-fallback-message" style="border: 1px solid gray; zoom:80%;">
6. Click the **tick** mark to save it.
7. Click **+Add Adherence** to set an adherence for the agent.
   <img src="../agent-coaching-images/nudge-add-adherence-44.png" alt="nudge-add-adherence" title="nudge-add-adherence" style="border: 1px solid gray; zoom:80%;"> 
8. Select **Utterance** in the **Choose a Trigger** window.
   <img src="../agent-coaching-images/choose-a-trigger-utterance-45.png" alt="choose-a-trigger-utterance" title="choose-a-trigger-utterance" style="border: 1px solid gray; zoom:80%;">
9. Click **{set utterances}** to enter the agent’s utterance.
   <img src="../agent-coaching-images/then-do-nudge-agent-utterance-46.png" alt="then-do-nudge-agent-utterance" title="then-do-nudge-agent-utterance" style="border: 1px solid gray; zoom:80%;"> 

10. Type and select the utterance. You can select similar utterances from the **Utterances** list.
    <img src="../agent-coaching-images/then-do-nudge-agent-utterance-selection-47.png" alt="then-do-nudge-agent-utterance-selection" title="then-do-nudge-agent-utterance-selection" style="border: 1px solid gray; zoom:80%;">
11. Click **Add** > **Save**.
    <img src="../agent-coaching-images/then-do-nudge-add-agent-utterance-48.png" alt="then-do-nudge-add-agent-utterance" title="then-do-nudge-add-agent-utterance" style="border: 1px solid gray; zoom:80%;">
12. Click **Anytime** on the next screen to select one of the options.
    <img src="../agent-coaching-images/adherence-agent-utterance-anytime-49.png" alt="adherence-agent-utterance-anytime" title="adherence-agent-utterance-anytime" style="border: 1px solid gray; zoom:80%;">

    * If you select **Within next (n) messages**, the following screen appears:
      <img src="../agent-coaching-images/adherence-agent-utterance-within-next-messages-50.png" alt="adherence-agent-utterance-within-next-messages" title="adherence-agent-utterance-within-next-messages" style="border: 1px solid gray; zoom:80%;"> 

      You can change the number of messages, as required, by clicking the highlighted area. If you select **Within next (n) minutes**, the following screen appears:
      <img src="../agent-coaching-images/adherence-within-next-minutes-51.png" alt="adherence-within-next-minutes" title="adherence-within-next-minutes" style="border: 1px solid gray; zoom:80%;"> 

      You can change the time in minutes, as required, by clicking the highlighted area.
      The agent gets screens similar to the following on their system for:

      1. Positive Nudges  
         <img src="../agent-coaching-images/positive-nudge-in-widget-52.png" alt="positive-nudge-in-widget" title="positive-nudge-in-widget" style="border: 1px solid gray; zoom:80%;">

      2. Neutral Nudges  
         <img src="../agent-coaching-images/neutral-nudge-widget-53.png" alt="neutral-nudge-widget" title="neutral-nudge-widget" style="border: 1px solid gray; zoom:80%;">

      3. Alert Nudges  
         <img src="../agent-coaching-images/alert-nudge-widget-54.png" alt="warning-nudge-widget" title="warning-nudge-widget" style="border: 1px solid gray; zoom:80%;">

      4. Critical Nudges  
         <img src="../agent-coaching-images/critical-nudge-widget-55.png" alt="critical-nudge-widget" title="critical-nudge-widget" style="border: 1px solid gray; zoom:80%;">

### Hint Agent

The Hint Agent actions are small pop-up messages that advise agents to take further action. They appear on the agent’s screen while communicating with the customers and may or may not auto-close, based on how you set them. Through these messages, you also compliment the agents for a good job. You can use Gen AI to generate the title and message body based on your prompt. Here are the four hint types that you can choose from:

* Positive

* Neutral

* Warning

* Critical

#### Steps to set up the Hint Agent actions

1. Go to the rule action setup page.
2. Click **+ Add an action** under the **Then do…** section.
3. Click the **Hint Agent** option in the **Choose an Action** window.
<img src="../agent-coaching-images/then-do-hint-agent-56.png" alt="then-do-hint-agent" title="then-do-hint-agent" style="border: 1px solid gray; zoom:80%;"> 
4. Click **{Choose}** and select one of the message types, as highlighted in the following screenshot:
<img src="../agent-coaching-images/then-do-hint-type-57.png" alt="then-do-hint-type" title="then-do-hint-type" style="border: 1px solid gray; zoom:80%;"> 
5. Click **{Choose}** to enter the title of your message. 
Select the **Use Gen AI Output** option to:
        1. Enter a Gen AI-powered title, which generates titles based on your prompt.  
           <img src="../agent-coaching-images/hint-message-title.png" alt="hint-message-title" title="hint-message-title" style="border: 1px solid gray; zoom:80%;">
        2. Enter a fallback title (up to 42 characters) that appears, if Gen AI fails to generate a title.  
           <img src="../agent-coaching-images/genai-hint-fallback-title.png" alt="genai-hint-fallback-title" title="genai-hint-fallback-title" style="border: 1px solid gray; zoom:80%;">
6. Click the **tick** mark after entering the title.
7. Click **{Choose}** to enter the body of your message.  
   Select the **Gen AI Output** option to:
        1. Enter a Gen AI-powered message body, which generates a message based on this prompt.
        2. Enter a fallback message body (up to 300 characters) that appears, if Gen AI fails to generate a message based on your prompt.  
           <img src="../agent-coaching-images/genai-hint-message-fallback-message.png" alt="genai-hint-message-fallback-message" title="genai-hint-message-fallback-message" style="border: 1px solid gray; zoom:80%;">
8. Click the **tick** mark after entering the body of your message.
9. Click **{Choose}** to select the display option of your message, as highlighted in the following screenshot:
<img src="../agent-coaching-images/then-do-hint-agent-message-display-option-60.png" alt="then-do-hint-agent-message-display-option" title="then-do-hint-agent-message-display-option" style="border: 1px solid gray; zoom:80%;">
    1. If you select **Auto Close**, the following screen displays:
    <img src="../agent-coaching-images/hint-agent-message-auto-close-61.png" alt="hint-agent-message-auto-close" title="hint-agent-message-auto-close" style="border: 1px solid gray; zoom:80%;">
     Click the default value of **5 seconds** to update it, as required. After entering the value, press the **Enter** key to update the new entry.
    2. If you select **Does not auto close**, the following screen displays:
    <img src="../agent-coaching-images/hint-agent-message-does-not-auto-close-62.png" alt="hint-agent-message-does-not-auto-close" title="hint-agent-message-does-not-auto-close" style="border: 1px solid gray; zoom:80%;">

10. Click **+Add Adherence** to set up agent adherence of the rule action.
<img src="../agent-coaching-images/hint-agent-adherence-63.png" alt="hint-agent-adherence" title="hint-agent-adherence" style="border: 1px solid gray; zoom:80%;">

11. Select an adherence trigger:
    <img src="../agent-coaching-images/hint-agent-add-adherence-64.png" alt="hint-agent-add-adherence" title="hint-agent-add-adherence" style="border: 1px solid gray; zoom:80%;">
    
    1. If you select **Acknowledge Pressed**, the following screen is displayed:
       <img src="../agent-coaching-images/add-adherence-acknowledge-pressed-65.png" alt="add-adherence-acknowledge-pressed" title="add-adherence-acknowledge-pressed" style="border: 1px solid gray; zoom:80%;">
    2. If you select **Utterance**, follow steps 9-12 of [Steps to set up the Nudge Agent actions](#steps-to-set-up-the-nudge-agent-actions) to complete the process.

The agent gets screens similar to the following on their system for:

* Positive Hints

<img src="../agent-coaching-images/positive-hints-widget-66.png" alt="positive-hints-widget" title="positive-hints-widget" style="border: 1px solid gray; zoom:80%;">

* Neutral Hints

<img src="../agent-coaching-images/neutral-hint-widget-67.png" alt="neutral-hint-widget" title="neutral-hint-widget" style="border: 1px solid gray; zoom:80%;"> 

* Warning Hints

<img src="../agent-coaching-images/warning-hint-widget-68.png" alt="warning-hint-widget" title="warning-hint-widget" style="border: 1px solid gray; zoom:80%;">

* Critical Hints

<img src="../agent-coaching-images/critical-hint-widget-69.png" alt="critical-hint-widget" title="critical-hint-widget" style="border: 1px solid gray; zoom:80%;"> 

### Email Manager

This feature lets you set a push notification alert to the manager’s desktop. You can set who should receive this notification and customize the title and the body of the message. It applies to the customer’s actions, such as using profanity or too many cross-talks. Instead of nudges and hints, the system can send an alert notification to the manager in these situations.

#### Steps to set up the Email Manager action

1. Go to the rule action setup page.
2. Click **+ Add an action** under the **Then do…** section.
3. Click the **Email Manager** option in the **Choose an Action** window.
<img src="../agent-coaching-images/then-do-email-manager-70.png" alt="then-do-email-manager" title="then-do-email-manager" style="border: 1px solid gray; zoom:80%;">

4. Click **{select people}** to enter the email address of one or multiple managers who should receive the notification.
<img src="../agent-coaching-images/email-manager-selection-71.png" alt="email-manager-selection" title="email-manager-selection" style="border: 1px solid gray; zoom:80%;">

5. Enter the email addresses, and then click the **tick** mark to save them.

    !!! note

        Use commas to separate multiple email addresses. 
6. Click **{set subject}** to enter a subject for your notification.
<img src="../agent-coaching-images/email-notification-subject-72.png" alt="email-notification-subject" title="email-notification-subject" style="border: 1px solid gray; zoom:80%;">
7. Click the **tick** mark to save it.
8. Click **{set body}** to enter the body of the notification.
<img src="../agent-coaching-images/email-message-body-73.png" alt="email-message-body" title="email-message-body" style="border: 1px solid gray; zoom:80%;"> 
9. Enter the notification content and then click the **tick** mark to save it.

## Assign This To

This feature lets you assign the rule to the intended agents or groups. Currently, by default, this feature is assigned for all agents.

### Steps to assign rules to agents or groups

1. Go to the rule action setup page. For help, refer to steps 1 and 2 of [Steps to create a new rule](#steps-to-create-a-new-rule).
2. Click **+Add agents, groups** under the **Assign this to…** section.
The following screen shows the default selection of **All Agents**:
<img src="../agent-coaching-images/assign-this-to-all-agents-74.png" alt="assign-this-to-all-agents" title="assign-this-to-all-agents" style="border: 1px solid gray; zoom:80%;">
3. Click **Save** from the top-right corner of the screen.
<img src="../agent-coaching-images/saving-a-coaching-rule-75.png" alt="saving-a-coaching-rule" title="saving-a-coaching-rule" style="border: 1px solid gray; zoom:80%;"> 

The new rule appears under the group for which you created it.
<img src="../agent-coaching-images/new-coaching-rule-in-the-list-76.png" alt="new-coaching-rule-in-the-list" title="new-coaching-rule-in-the-list" style="border: 1px solid gray; zoom:80%;"> 
