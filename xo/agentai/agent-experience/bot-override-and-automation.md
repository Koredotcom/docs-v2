# App Override and Automation

While using the agent desktop, agents can access the Agent AI app, which helps answer customer queries based on customer context and intents. After the intent is identified, you can start the automation that the app suggests.

## App Override

During the execution of automation, there might be an occurrence where the app does not understand the customer inputs, which would lead to a “try again” error. 

If the error occurs multiple times, the agent (being aware of the input format) can intervene to correct the input.

### Steps to override App inputs

1. Below the automation step, click **Override Input**.  
<img src="../bot-override-and-automation-images/override-input-1.png" alt="override-input" title="override-input" style="border: 1px solid gray; zoom:80%;">

2. The **Type to continue** box is displayed. Enter the required value in the box.  
<img src="../bot-override-and-automation-images/type-to-continue-box-2.png" alt="type-to-continue-box" title="type-to-continue-box" style="border: 1px solid gray; zoom:80%;">

The path is corrected, and the control gets back to the user. 
To provide a better experience to the customer, you can intervene and correct the app’s path.

## Terminate Automation

The terminate automation option allows you to stop ongoing automation anytime. There can be multiple reasons to terminate an automation: 

* Accidental automation clicks.
* Unexpected behavior.
* Customer doesn’t want to proceed with the intent anymore. 

### Steps to terminate an automation

1. On the **Assist**/**My AI Agent (Bot)** tab, next to the automation step, click **Terminate**. A confirmation pop-up message appears.
2. Click **Yes, Terminate** to stop the running task.  
<img src="../bot-override-and-automation-images/terminate-dialog-task-3.png" alt="terminate-dialog-task" title="terminate-dialog-task" style="border: 1px solid gray; zoom:80%;">

## Sentiment Analysis

A single agent may serve multiple customers at a given time. It would mean switching back and forth continuously. In spite of transitions, sentiment analysis allows agents to detect the customer’s sentiment instantly.

The app continuously assesses the customer’s sentiment based on their messages and lets you know it in real-time.

The customer sentiment is placed at the top-right corner of the widget.  
<img src="../bot-override-and-automation-images/sentiment-analysis-4.png" alt="sentiment-analysis" title="sentiment-analysis" style="border: 1px solid gray; zoom:80%;">

## Search or Ask a question

The search function allows you to search for FAQs/automations directly from the app. You can identify automations behind an intent by asking the app using the search bar. In addition to being easily accessible, the search bar also lets you look up information concurrently with a customer conversation. The search bar is placed at the bottom of the Agent AI widget and is easily accessible to agents.

### Steps for searching/asking a question

1. In the **Ask a question** search bar, type the question you want to ask the app.
2. Press the **Enter** key on the keyboard. Agent AI shows related search results. You can use the search results to respond to the customer.  
<img src="../bot-override-and-automation-images/ask-a-question-5.png" alt="ask-a-question" title="ask-a-question" style="border: 1px solid gray; zoom:80%;">

## Run Automation with Agent’s Input

There are two ways to run automations:

* Customer Inputs  
* Agent Inputs (App override)

Automation with the customer inputs feature introduces the capability where agents give the inputs to the app allowing the agents to have control of the entire automation process. The agents can run this automation in parallel and provide the customer with the final results.

### Steps to run an automation

* Run button: For Dialog Tasks. Click to run a configured Dialog Task.
* Click the ellipsis, and click **Run with agent’s input**. The automation starts on the **My AI Agent (Bot)** tab. The automation is a parallel session dedicated to the agent and won’t impact customer interaction.

The **Run with Agent’s input** feature allows an agent to run automation independently and helps agents retrieve information directly and give the final result to the customer, thereby decreasing the AHT drastically.  
<img src="../bot-override-and-automation-images/run-with-agent&apos;s-input-6.png" alt="run-with-agent&apos;s-input" title="run-with-agent&apos;s-input" style="border: 1px solid gray; zoom:80%;">


