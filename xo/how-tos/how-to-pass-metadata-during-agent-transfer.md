# How to Pass Meta-information During Agent Transfer

As part of your AI Agent design, you can choose the scenarios where you want to hand off the conversation to human agents. As part of this hand-off, it is important to pass the current conversation context to the Agent Hand-off / CCaaS system. This information can be used in the CCaaS system to set the requisite skills, routing rules, and so on.

The Platform offers an extensible framework for handling agent transfer conversations. Within this framework, you can pass any additional metadata you want to share with the agent. This capability allows agents to access supplementary information about the user’s details or queries in advance, enabling them to handle the conversation more efficiently.


## How this works

* The Platform has introduced a new agent metadata object. This metadata object is currently supported for ServiceNow and Genesys agent integrations, with each integration having its own dedicated metadata object. The naming conventions for these metadata objects are as follows:
    * [ServiceNow Agent](../app-settings/integrations/agents/servicenow/configuring-the-servicenow-agent-utah-and-vancouver.md): “ServiceNowMetaData”
    * [Genesys Agent](../app-settings/integrations/agents/configuring-the-genesys-agent.md): “GenesysMetaData”
* The Platform offers a built-in utility function called “agentUtils.setMetaInfo” to facilitate the exchange of additional information with the agent metadata context object. Developers are expected to leverage this function to set any supplementary data they wish to share with the agent.
* This function can be utilized anywhere the platform allows the definition of JavaScript code, providing developers with flexibility in integrating custom metadata at various points within the conversational flow.

