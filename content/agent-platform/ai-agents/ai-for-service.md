# AI for Service with Agent Platform

AI for Service is a no-code virtual assistant builder that delivers personalized, multilingual conversations across channels. The Platform offers comprehensive end-to-end development, deployment, and advanced multi-agent orchestration for scalable agentic applications at the enterprise level.

The Platform works seamlessly with AI for Service to create a powerful, unified solution for service scenarios. By deploying agentic apps through AI for Service, organizations gain the combined advantages of AI for Service's conversation optimization capabilities and the Platform's sophisticated multi-agent orchestration. AI for Service's channel management, conversation analytics, and journey optimization perfectly complement the Platform's agentic capabilities, creating an end-to-end solution that automates complex service interactions and continuously optimizes them based on real-time performance data. Organizations leveraging both platforms together can rapidly deploy intelligent service solutions that evolve and improve over time, driving higher customer satisfaction while reducing operational costs.


## Prerequisites

* AI for Service and Agent Platform applications must be in the same workspace for connection.
* Set up the relevant channel flows (for example, chat and voice) in AI for Service.


## Integrate an Agentic App with AI for Service App

Users can create or select an existing app and configure it using the **Automation Node** within an Experience Flow of the desired communication channel in AI for Service.

**Steps**:

1. Navigate to the **Start Flows** in the AI for Service application.

    For every interaction across a channel, a welcome flow is designed that defines the end-to-end customer experience for each communication channel. Go to the welcome flow of the desired communication channel.  ![alt_text](./images/integration/xo/flows.png "XO Flows")


2. Add an **Automation Node.**

    Open the flow designer and drag and drop an automation node at an appropriate point in the flow. 

3. **Configure the Automation Node.**

    Open the settings for the Automation Node. Under Autonomy Level for Automation AI, select **Full Autonomy.** This setting enables integration with the Agentic Apps in the same workspace as that of AI for Service. The Agentic Apps offer fully autonomous AI Agents that adapt dynamically to the user's interactions.  ![alt_text](./images/integration/xo/autonomy.png "Autonomy")


    Provide the following Agentic App Configurations:

    1. **Agentic App**: Select the app to be integrated that will handle all the interactions on the given communication channel. The dropdown lists all the existing Agentic Apps in the same workspace. You can also create an Agentic App from scratch. 
    2. **Environment**: Select the Environment of your Agentic App to be used for end-user interactions. Once the flow is published, the selected environment is used in the published mode. However, the tests are always run against the Draft Environment of the selected application. 
    3. **Real-time Voice Interactions**: Enable this to support two-way real-time voice streaming via the [Voice Gateway](https://docs.kore.ai/xo/channels/voice-gateway/configure-voice-gateway/){:target="_blank"}. This feature uses multi-modal AI models for intelligent voice interactions. When real-time voice interaction is enabled, Voice Gateway uses the underlying models configured in the Agentic App to add voice capabilities to the application. Refer to [this](https://docs.kore.ai/xo/flows/node-types/automation/){:target="_blank"} for other configurations of the node.
    4. **Metadata**: Metadata fields allow you to pass additional information to the Agentic app in the form of key-value pairs. You can pass static or dynamic information using context variables through the Metadata key-value pairs. Within the agentic app, this information is stored in the system memory, sessionMeta, as a metadata field which can be accessed within agent prompts and tools. Click on **Add** to add a new metadata field. Provide the key and its static or dynamic value.   
    
    For instance, consider that the user name is passed to the Platform as shown below. 
    ![alt_text](images/integration/xo/metadata.png "Metadata")
    
    The same can be accessed in the prompts and code tools as `{{[memory.sessionMeta.metadata.name](memory.sessionMeta.metadata.name)}}`. 
    
    Refer to [this](agentic-apps/memory-stores.md) to learn more about accessing memory stores. 


    Refer to [this ](https://docs.kore.ai/xo/flows/node-types/automation/)for other node configurations. 


### Handling Agent Transfer Event from Agent Platform

Context sharing from the the Platform to AI for Service occurs when specific events get triggered. These event-driven handoffs are managed through the Automation Node in AI for Service, which facilitates the integration between the two platforms.

When an agent transfer event is triggered, the system passes control, along with relevant context data, from the the Platform back to AI for Service. This ensures a seamless user experience, allowing AI for Service to continue the interaction based on the defined flow and transferred context.

![alt_text](images/integration/xo/agent-transfer-event.png "Agent Transfer")


To process these agent transfer requests, set up the **Agent Transfer connection configuration for the automation node**. When agent handoff event is triggered from the Platform, the request, along with the LLM collected and system defined parameters, is delegated to the automation node. The automation node then routes the request to the appropriate node as defined by its connection rules.

![alt_text](images/integration/xo/agent-trasfer-node.png "Agent Transfer Node")


**Important Notes:**

* The Agentic App configuration is applied **globally across all Automation Nodes within the selected flow**. Changes to the configuration will affect all nodes in the same flow. Automation Nodes in any other flows aren't affected. 

* When using the **Test** functionality in the flow designer, the execution will always refer to the **Draft** version of the selected Agentic App, irrespective of the environment selected. 

* Real-time voice feature is available only when the  [Voice Gateway](https://docs.kore.ai/xo/channels/voice-gateway/configure-voice-gateway/) is enabled. 

* Real-time voice interactions require voice support to be enabled in the associated Agentic App. [Learn more](./../ai-agents/agentic-apps/settings/app-configurations.md).
