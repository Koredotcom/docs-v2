# Settings

The **Settings** lets you make app-level changes to **Conversation Intelligence**.

The Settings has the following three sections:

* Conversation Intelligence

* Quality AI General Settings

* Language Settings

## Conversation Intelligence

This extracts valuable insights from customer interactions across various communication channels. It captures information from spoken and written conversations, matches the information with structured metadata about the interaction, and analyzes emotions and feelings to understand customers' desires, needs, opinions, and expectations.

## Access Settings - Conversation Intelligence

Navigate to **Quality AI** > **CONFIGURE** > **Settings** > **Conversation Intelligence**.  
<img src="../settings/images/default-settings.png" alt="Settings" title="Settings" style="border: 1px solid gray; zoom:80%;"/>

### Conversation Intelligence Dashboard

The Conversation Intelligence Dashboard displays post-interaction analytics and is a powerful tool designed to provide insights and operational information following customer interactions. 

For more information about the Conversation Intelligence Dashboard, see [Conversation Intelligence](../analyze/conversation-intelligence.md).

!!! Note

    The role permissions in the Settings are defined based on the user or agent roles. Users cannot view all the Conversation Intelligence Dashboard overview details if the Conversation Intelligence Settings are not defined by the admin.

Steps to enable the Conversation Intelligence:

1. Expand the **Conversation Intelligence** collapse icon to view the **Conversation Intelligence Dashboard**.  
<img src="../settings/images/converse-intelligence.png" alt="Conversation Intelligence Dashboard" title="Conversation Intelligence Dashboard" style="border: 1px solid gray; zoom:80%;"/>

2. Enable the **Conversation Intelligence Dashboard** toggle to set the **Script adherence configuration** details.  
<img src="../settings/conversation-intelligence/images/converse-intelligence-dashboard.png" alt="Conversation Intelligence Dashboard Toggle" title="Conversation Intelligence Dashboard Toggle" style="border: 1px solid gray; zoom:80%;"/>

    !!! Note
    
        By enabling this option, you can view the Conversation Intelligence feature displayed under the Analyze section.

### Interaction Level Resolution Detection Methods

This Setting defines how the system determines contact-level resolution across all conversations. Select the method that aligns with your quality standards and reporting needs. The system controls how resolution is calculated, while Taxonomy Builder defines success and failure criteria for topics.

#### Method 1: Topic-Based Resolution (Strict)
The Taxonomy Builder integrates with Conversation Intelligence settings at the application level. These settings control conversation analysis and resolution detection. The system evaluates resolution using AND logic across all L3 topics discussed in a conversation. A contact is marked as resolved only when every topic is successfully resolved.

**Use this method when:**

* Weight primary and secondary issues differently.
* Agent performance based on the main customer need.
* Prevent minor mentions from affecting resolution metrics.
* Configure resolution logic in Taxonomy Builder.

**Example**: If the system resolves a customer’s payment issue but not a casual rewards question, it still marks the contact as resolved.

**Configuration Flow**

1. Navigate to **Settings > Conversation Intelligence**.
1. Select the **Topic-based Resolution (Strict)** radio button.
1. Select **Save** to apply the setting change.

No Resolution configuration appears in Taxonomy Builder, and no further setup is required.

#### Method 2: Overall Contact Level Resolution (Holistic Resolution Assessment)

The system uses an LLM-based holistic assessment to determine whether it resolved the customer’s primary reason for contact, even if minor secondary issues remain. The system evaluates overall resolution independently of individual topic outcomes.

**Use this method when:**

* Weight primary and secondary issues differently.
* Reflect agent performance based on the main customer need.
* Prevent minor mentions from affecting resolution metrics.
* Configure resolution logic in Taxonomy Builder.

**Example**:

If the system resolves a customer’s payment issue but not a casual rewards question, it marks the contact as resolved.

**Configuration Flow**

1. Navigate to **Settings > Conversation Intelligence**.
1. Select the **Overall Contact Level Resolution (Holistic Resolution Assessment)** radio button.
1. Select **Save** to apply the setting change.
1. The system automatically applies **AND logic** and requires resolution for all L3 topics.
1. Navigate to **Quality AI > Configure > Taxonomy Builder**.
1. Navigate to the **Resolution** tab.
1. Configure the **Successful**, **Unsuccessful**, and **Overall Resolution** descriptions.
1. **Save** the configuration to apply the custom LLM prompts.

    !!! Note

        * This app-level setting applies to all taxonomies and conversations.
        * Review each option against your customer experience goals before making a selection.
        * Changing the resolution method in Settings affects.
            * All taxonomies in your organization
            * All queues and agents.
            * Historical data interpretation (calculations may change for existing conversations).
            * Real-time dashboards and reports.
            * Agent performance metrics.
            * Quality assurance workflows.
    <img src="../settings/conversation-intelligence/images/interaction-level-resolution-detection-method.png" alt="Interaction Level Detection Method" title="Interaction Level Detection Method" style="border: 1px solid gray; zoom:80%;"/>

#### Settings vs. Taxonomy Configuration

**Settings (Application Level)**

* Defines the global interaction-level resolution detection method.
* Applies across the entire organization.
* Requires administrator permissions.
* Takes effect immediately and system-wide.

**Taxonomy Builder (Taxonomy Level)**

* Defines individual topic structures and classifications.
* Configures topic-specific resolution criteria (L3 only).
* Manages contact-level resolution descriptions (available when Overall Contact Level Resolution is enabled).
* Supports version-controlled changes.

#### Disable Conversation Intelligence

Steps to disable the Conversation Intelligence dashboard:

1. Toggle off the **Conversation Intelligence Dashboard**.     
<img src="../settings/images/disable-conversation-intelligence.png" alt="Disable Conversation Intelligence" title="Disable Conversation Intelligence" style="border: 1px solid gray; zoom:60%;">

    !!! Note
    
        The Conversation Intelligence dashboard is not be visible to users throughout the application if the admin has disabled Conversation Intelligence. If it is enabled, then the user can view the insights on contact center efficiency, agent efficacy, and customer experience.

2. Select **Confirm** to disable the entire Conversation Intelligence application. The following screen appears.  
<img src="../settings/images/confirm-conversation-intelligence.png" alt="Confirm Disable Converstion Intelligence" title="Confirm Disable Conversation Intelligence" style="border: 1px solid gray; zoom:60%;">

3. Select **Save** to save the settings.

### Script Adherence Configuration

This lets you add and define a set of dynamic messages or scripts for the user or agent. By default, the script adherence widget uses a default generic script to check for adherence, using this app level configuration, the user can set custom messages for each step of the script to visualize adherence to the custom message instead of the default script message.

Steps to enable the Script Adherence configuration:

1. Expand the **Conversation Intelligence** collapse icon, and enable the **Conversation Intelligence Dashboard** toggle key and **Script adherence configuration**.  
    <img src="../settings/images/script-adherence.png" alt="Script Adherence Toggle" title="Script Adherence Toggle" style="border: 1px solid gray; zoom:60%;">

2. Define the scripts for the following attributes to check the agent adherence. 

    * **Attribute**: Shows script steps like Greeting, Branding, and so on, where you can add custom messages.

    * **Action**: Enables you to enter messages for the agent by toggling the action button.

        By default, the action button is disabled but the user can enter the custom message for any of the desired attributes.
    
        Upon enabling, the system checks for adherence to the configured messages of the script adherence section of conversation intelligence instead of the default messages.

    * **Message**: Allows you to define specified attribute messages for the agent or user. You can add more than one message for the user for the same attribute and delete the defined messages.
    <img src="../settings/conversation-intelligence/images/conv-warning-message.png" alt="Script Adherence Toggle" title="Script Adherence Toggle" style="border: 1px solid gray; zoom:60%;">
    
        !!! Note

            If you are enabling this message box, you must enter a message in the corresponding attribute warning message box. You need to save and proceed before moving on to the next attribute message. A warning message appears if you fail to enter a message for the corresponding attribute. 

    * **Save**: Allows you to save the defined messages.

        At the agent account level, the agent can only check the following options defined by the supervisor or app owner or administrator in the **Settings**:

        * In the **Conversation Intelligence** Dashboard, the agent can check the post-interaction analytics, such as brand tags, greetings, questions, emotions, interactions, and so on. 

        * In the **Script Adherence** configuration, the agent can visualize the specific messages or scripts that are defined by the supervisor or app owner or administrator.  

