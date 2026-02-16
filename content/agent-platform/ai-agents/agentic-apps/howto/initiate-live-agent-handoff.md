# Initiate a Live Agent Handoff from Agentic Apps

The Agent Handoff Event in Agentic Apps enables smooth transfer of conversations from an AI agent to a live agent when required. This feature is particularly useful in scenarios where user queries require personalized support or the user explicitly asks for assistance.

The Agent Handoff event in the Platform can initiate live agent handoff only via the AI for Service platform. This event-driven handoff is managed through the Automation Node in AI for Service, which facilitates the integration between the two platforms. When the Agent Handoff Event is triggered, the Platform sends required information to the specified automation node within the AI for Service Platform's flows. The automation node subsequently processes the agent transfer request in accordance with the transfer connection rules established for the node.

This document provides step-by-step instructions for configuring and invoking a live-agent handoff using the Automation Node in the AI for Service app. 

!!! note
    Although this document focuses on invoking a live agent via AI for Service, the same configuration can also be used to trigger other conversational agents or workflows via the AI for Service app.


## Prerequisites

* Both AI for Service and the Platform applications must be in the same workspace.
* The relevant channel flows (for example, chat, voice) must be set up in AI for Service.
* [Integrate AI for Service and the Platform using the Automation Node](../../ai-for-service.md#integrate-an-agentic-app-with-ai-for-service-app).


## Setting up Live Agent Transfer in the Agent Platform App

1. Navigate to the Events page. 
2. Configure the Agent Handoff Event. 
3. Update the description of the event to describe when this event should be invoked. There is a default description that configures the event to trigger whenever human intervention is required—either when the user explicitly requests it or when the available agents and tools can't fulfill the request. 
4. Set the status to enabled.
5. Configure the parameters to be sent to the Automation Node in AI for Service during handoff. 

[Find more details here](../settings//events.md#agent-handoff-event).


## Handling Agent Transfer Requests in AI for Service

When an agent transfer event is triggered, the Platform passes control and relevant context data to the AI for Service app. To process these agent transfer requests, set up the Agent Transfer connection configuration for the automation node. When the Platform triggers the agent handoff event, the request, along with AI-collected and system-defined parameters, is delegated to the automation node. The automation node then routes the request to the appropriate node as defined by its connection rules. Configure an Agent Transfer Node to transfer the communications from the AI Agent to a live agent. [Learn More](https://docs.kore.ai/xo/automation/use-cases/dialogs/node-types/working-with-the-agent-transfer-node/).
