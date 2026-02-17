# Taxonomy Builder Setup

Taxonomy Builder setup outlines a process for creating, organizing, and managing topic hierarchies to categorize and analyze customer conversations accurately, aligning with business structures and analytical needs.

## Prerequisites and Access Requirements

Before beginning taxonomy setup, make sure you have:

* **Full Conversation Intelligence Permissions**: Only users with complete Conversation Intelligence access can configure taxonomies.

* **Advanced Topic Discovery Enabled**: Taxonomy Builder requires the GenAI-powered topic discovery feature to be active in your application.

* **Business Structure Mapping**: A clear understanding of your organizational hierarchy and customer interaction types.

## Access Prerequisites

Before using Taxonomy Builder, make sure that you have the required permissions and system settings:

* Verify your permissions with your system administrator. 

* Confirm that your organization has Advanced Topic Discovery enabled.
 
* Request the necessary access if you require taxonomy configuration capabilities. 

    !!! Note

        * Users with view-only permissions can see configured taxonomies, but can’t modify taxonomies. 

        * Users can't access Taxonomy Builder if they do not meet the prerequisites.

## Interface Architecture

Navigate the taxonomy builder interface by using the hierarchical tree view and organizational tools. Understanding the interface layout ensures improved efficiency when creating and managing taxonomies.

## Access Taxonomy Builder

Navigate to **Quality AI > Configure > Taxonomy Builder**.   
<img src="../images/taxonomy-builder-overview.png" alt="Taxonomy Builder" title="Taxonomy Builder" style="border: 1px solid gray; zoom:100%;">  

### Main Interface Components

The Taxonomy Builder interface includes the following components:

#### Hierarchy Tree View

* Displays the full taxonomy in a collapsible tree.

* Shows L1, L2, and L3 topics.

* Uses indentation and color to represent relationships.

* Includes expand and collapse controls for parent topics.

#### Action Buttons

* **Add New Topic Level:** Create a new L1 or standalone L2.

* **Add Level 1**: Create a new Level 1 (L1) top-level topic.

* **Add Level 2**: Add a child topic under L1.

* **Add Standalone Level 2**: Create a Standalone Level 2 (L2) topic without assigning a Level 1 parent.

* **Add Level 3**: Add a child topic under L2.

* **Edit**: Update topic name or description.

* **Delete**: Remove a topic from the taxonomy.

#### Topic Information Display

Each topic shows:

* Topic name and level.

* Color coding and indentation.

* Quick actions (edit, delete).

* Number of child topics (if applicable).


#### Topic Hierarchy Levels and Visual Representation

Taxonomy Builder uses color coding and indentation to make topic relationships clear at a glance. 

| Level         | Topic Type or Classification      | Color  | Description                                                                                                                   | Parent–Child Relationship                                     |
| ------------- | --------------------------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- |
| Level 1 (L1)  | Strategic Business Classification | Purple | Represents broad business topic areas such as divisions, lines of business, or service areas aligned with executive strategy. | **Parent**: None (top-level topics)<br>**Child**: L2 topics           |
| Level 2 (L2)  | Product and Service Categories    | Blue   | Organizes products, services, or operational areas within a business domain.                                                  | **Parent**: L1 topic (or standalone)<br>**Child**: Can have L3 topics |
| Standalone L2 | Product and Service Categories    | Blue   | Provides flexible Level 2 topics without a Level 1 parent for organizations that don’t require a full three-level hierarchy.  | **Parent**: None <br>**Child**: Can have L3 topics                     |
| Level 3 (L3)  | Customer Contact Reasons          | Grey   | Captures specific customer contact reasons—granular issues that drive day-to-day agent activity and operational decisions.  | Parent: L2 topic <br>**Child**: None (leaf-level topics)           |

**Progressive Indentation**: Child topics nest directly under their parents, reinforcing the hierarchy across all levels without additional steps.

#### Adding Topics and Parent Assignment

Taxonomy Builder automatically assigns the correct parent when you add a topic:

* When you add an L2 topic from L1, the system assigns that L1 as the parent.

* When you add an L3 topic from L2, the system assigns that L2 as the parent.

* You can create standalone L2 topics without assigning a parent.

This ensures consistent hierarchy and faster topic creation.

### Topics 

Create and organize conversation topics using a structured three-level hierarchy. The topic interface provides visual tools to create, edit, and manage complex taxonomical relationships efficiently.

#### Topics Hierarchy Levels

The system supports three distinct hierarchical levels for topic organization:

* **L1 (Top Level)**: Top-level (Parent) categories representing broad business areas.

* **L2 (Second Level)**: Child categories under L1, organizing products, services, or operational areas.

* **L3 (Third Level)**: Sub-child categories under L2, capturing specific customer contact reasons. 

* **Standalone L2**: You can add standalone L2 topics independently without requiring an L1 parent, providing flexibility in your taxonomy structure.

### Topics Creation	

This lets you create topics at different hierarchy levels. When you add a topic from an existing node, the system automatically assigns the correct parent context. It eliminates manual parent selection for the most common workflows.

#### Add New Level 1 Topic

1. Select **Add New Topic Level** in the taxonomy interface.   
<img src="../images/add-new-topics.png" alt="Add New Topic" title="Add New Topic" style="border: 1px solid gray; zoom:100%;">  

2. Select **Level 1** (L1).   
<img src="../images/select-a-topic-level.png" alt="Add New Topic Level" title="Add New Topic Level" style="border: 1px solid gray; zoom:60%;">  

3. Enter the required fields:

    * **Name**: Required, max 50 characters.

    * **Description**: Required, max 250 characters.

5. Select **Create** to add the new level to your taxonomy.   
    <img src="../images/add-new-topic-level.png" alt="Level 1" title="Level 1" style="border: 1px solid gray; zoom:45%;"> 

#### Add New Level 2 Topic (L2)

1. Select the + **Add Level 2** button under the desired Level 1 (L1) topic.

    !!! Note

        When you initiate creation from an existing L1 node, the slide-out automatically preselects that L1 as the parent category to streamline the process.  

2. Enter the following fields:

    * **Name** (required, up to 50 characters)

    * **Description** (required, up to 250 characters)

    * **Parent Category** (choose one):

        * Assign to a new Level 1 parent category.
        
        * Keep the preselected L1 parent (if created from an existing L1).

        * Set as Standalone Level 2 category (no L1 parent).

4. Select **Create** to add the new topic to your taxonomy.    
<img src="../images/add-l2.png" alt="Add Level 2" title="Add Level 2" style="border: 1px solid gray; zoom:70%;"> 

#### Add Standalone Level 2 Topic (L2)

1. Select **Add New Topic Level** in the taxonomy interface.

1. Select the **Standalone Level 2**.

1. Enter a name (up to 50 characters).

1. Enter a brief description (up to 250 characters).

1. Select **Create** to save the standalone Level 2 topic.

    !!! Note

        Standalone Level 2 topics support flexible taxonomy structures without requiring a full three-level hierarchy.

#### Add New Level 3 Topic (L3)

1. Select the + **Add Level 3** under the desired L2 (L2) topic.    
<img src="../images/add-level-3-item.png" alt="Add Level 3" title="Add Level 3" style="border: 1px solid gray; zoom:100%;"> 

    !!! Note

        The system preselects the L2 parent from which you initiated the action. 

2. Enter the following fields:

    * **Name** (required, up to 50 characters).

    * **Description** (required, up to 250 characters).

3. Check the resolution detection option to track successful or unsuccessful outcomes (enabled by default). 

4. Select **Create** to add the topic to your taxonomy.

### Resolution Tracking

By default, the system enables resolution detection for L3 topics. Disable this option for informational topics that don't require resolution tracking, such as balance inquiries, rate information requests, or general knowledge questions.

#### Edit Existing Topic Level

Edit existing topics to update their names, descriptions, or hierarchy placement within your taxonomy.

1. Locate the level you want to modify in the taxonomy tree.

1. Select the **Edit** option.    
<img src="../images/edit-topic.png" alt="Edit Existing Topic Level" title="Edit Existing Topic Level" style="border: 1px solid gray; zoom:100%;">  

1. The **Edit Topic Level** modal displays with the current topic information.

1. Update the following fields in the modal window:
    
    * **Topic Level**: Read-only field showing the current hierarchy level (Level 1, Level 2, or Level 3).

    * **Name**: Maximum 50 characters. The counter displays current character usage (for example, 23/50).

    **Description**: Maximum 250 characters. The counter displays current character usage (for example, 13/250).
    
    * **Reorganize Topic**: Move the topic to a new parent category.

    * **Change Level**: Update the topic hierarchy level if needed.

1. Select the **Reorganize Topic** checkbox to move the topic to a new parent category.

1. Choose options like Standalone Level 2 or Level 1 to update the hierarchy. The system automatically moves all related child topics with the parent topic.      
<img src="../images/edit-reorganise-topic-level.png" alt="Edit Existing Topic Hierarchy" title="Edit Existing Topic Hierarchy" style="border: 1px solid gray; zoom:100%;">  
  
6. Select **Save** to confirm your changes.

    !!! Note

        Character counters update in real-time as you type. You can’t save the topic if you exceed the character limits. 

#### Reorganize Topics

Use the reorganization feature to move topics to different parent categories or change their hierarchy level.

To reorganize a topic, do the following:

1. In the **Edit Topic Level** modal, check the **Reorganize Topic** checkbox.

1. The **Change Level** dropdown appears with available hierarchy options based on the `What You Can Do` rules.

1. Select the new parent category or hierarchy level from the available options.

1. Review the explanatory text before move: `Choose a new parent category (L1) for the selected item. All the related items are moved and restructured under this new category.`

1. Select **Save** to confirm your changes.

1. Select **Cancel** to discard changes.

    !!! Note 
       
        When you reorganize a topic: 
        
        * All child topics move automatically with the parent topic.
        
        * Parent-child relationships remain intact.

        * The system validates vs. duplicate names in the destination location.

        * The system may ask for confirmation when moving topics that affect multiple items.

Review the impact before reorganizing topics that contain substantial conversation history.

!!! warning

    Reorganizing topics affects your taxonomy structure and may impact:

    * Existing conversation classifications under this topic.

    * Reports and dashboards that reference this topic's hierarchy path.

    * Filters and saved views that use the current topic location.

    * Historical data analysis that depends on topic organization.
    
#### Delete Topics

Remove topics from your taxonomy when are no longer needed or create any error. This includes safeguards to prevent accidental data loss and clearly explains the impact of removing topics at different hierarchy levels.

To delete topics, do the following:

1. Type the topic name to confirm deletion (for L1 and L2 deletions in the taxonomy tree). Or,

1. Locate the topic you want to delete. 

1. Select the Delete. 

1. A warning pop-up appears to review the deletion confirmation dialog, including:
        
    1. Topic name and level.

    1. The number of child topics deleted (if applicable).

    1. Warning about conversation classification impact.
    
1. For L1 and L2 deletions: Type the topic name to confirm deletion.

1. Select **Delete** to proceed, or **Cancel** to abort.

#### Topic Deletion Effects

 When you delete topics at different levels in the taxonomy, the system applies specific behaviors for each level to maintain data integrity and preserve parent–child relationships.

**What Happens in Level 1 (L1) Deletion**:

* Deleting an L1 topic removes the entire branch under it, including all associated L2 and L3 subcategories.

* This action deletes all nested child topics, accurately removing the whole hierarchy under that parent.

* The system removes the entire hierarchy under that parent.

**Example**: Deleting `Retail Banking` (L1) removes all L2 topics, such as `Credit Cards`, `Checking Accounts` and all their L3 subtopics.

!!! warning

    * The system removes this classification from all conversations under this L1 topic and its child topics.

    * The system keeps historical data but removes all references to deleted topics. 

    * Reports and dashboards may display gaps in the historical data.

<img src="../images/topic-level-deletion1.png" alt="Level 1 Topic Deletion" title="Level 1 Topic Deletion" style="border: 1px solid gray; zoom:100%;"> 


#### Level 2 (L2) Deletion

* Deleting an L2 topic removes that L2 topic along with all its Level 3 (L3) child subcategories.

* This lets you remove a specific category without affecting broader parent topics. The parent L1 topic remains intact.

* The system removes all references to deleted topics.

* All related reports and dashboards may show gaps in historical data.

**Example**: Deleting `Credit Cards` (L2) under `Retail Banking` (L1) removes `Payment Issues`, `Reward Inquiries` and other L3 topics, but keeps `Checking Accounts` and other L2 siblings.

!!! warning

    * Conversations lose this classification when you delete this L2 topic and its children.

    * L1 parent remains functional with other L2 children.

<img src="../images/topic-level-deletion.png" alt="Level 2 Topic Deletion" title="Level 2 Topic Deletion" style="border: 1px solid gray; zoom:100%;"> 

#### Standalone Level 2 (L2) Deletion

* Deleting a standalone L2 topic removes it along with its child L3 topics.

* Since it has no L1 parent, the parent L1 topic remains intact. Only the standalone 

* Deleting the L2 topic also affects its child topics.

* L1 parent remains functional with other L2 children.

* This supports flexible taxonomy structures without a strict three-level hierarchy.

**Example**: Deleting `Technical Support` (Standalone L2) removes `Password Reset`, `Software Installation` and other L3 topics.

!!! warning

    * L1 parent remains functional with other L2 children.

    * This supports flexible taxonomy structures without a strict three-level hierarchy.    
<img src="../images/topic-level-deletion4.png" alt="Level 2 Standalone Topic Deletion" title="Level 2 Standalone Topic Deletion" style="border: 1px solid gray; zoom:100%;"> 

#### Level 3 (L3) Deletion

* Deleting an L3 topic removes only the specific subcategory without impacting any parent topics.

* No impact on parent topics (L2 or L1).

* No impact on sibling L3 topics.

**Example**: Deleting `Reward Points Withdrawal` (L3) under `Credit Cards` (L2) removes only that specific topic.

!!! warning

    Minimal taxonomy impact with isolated deletion.

<img src="../images/topic-level-deletion3.png" alt="Level 3 Topic Deletion" title="Level 3 Topic Deletion" style="border: 1px solid gray; zoom:100%;"> 

### Organizing Your Taxonomy

Use the drag or move functionality to restructure topics within your hierarchy while maintaining parent–child relationships and data integrity.

**Drag Functionality**

* Drag intents to new positions within the hierarchy.

* The system highlights drop zones when they're valid.

*Invalid operations are clearly indicated.

* Preview the new structure before confirming.

* Hover over the info (ⓘ) icon for guidance.
<img src="../images/topics-structure.png" alt="Information Instruction" title="Information Instruction" style="border: 1px solid gray; zoom:100%;"> 

### Interactive Guidance and Movement Rules

Tooltips guide you through the topic reorganization process.

Hover over the Information icon (ⓘ) to view:

* Allowed movements between L1, L2, and L3.

* Restricted actions that protect taxonomy integrity.

* Parent–child relationship constraints.

* Color and indentation legends.

* Valid and invalid drop zone behavior.

#### Permitted Topic Movements (What you can do)

Topic level determines what movements you can perform. 		
	
| Topic Level             | You Can Move or Change To                                                                                                             | Example                                                                                                                                                                                                                                                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Level 3 (L3)            | - Move within the same L1 parent to a different L2<br>- Move under a different L1 parent as an L2<br>- Promote to a different Level 2 | **Move within same L1:**<br>L1: Billing → L2: Invoices → L2: Payments<br>**Move under different L1:**<br>Original: L1: Billing → L2: Refunds<br>After the move: L1: Account Management → L2: Refunds                                                                                   |
| Level 2 (L2)            | - Move under a different Level 1 parent<br>- Promote to Level 1<br>- Change to Standalone Level 2                                     | **Different L1:**<br>Before: Billing (L1) → Refunds (L2)<br>After: Account Management (L1) → Refunds (L2)<br>**Level 1 promotion:**<br>Before: Billing (L1) → Refunds (L2)<br>After: Refunds (L1)<br>**Standalone L2:**<br>Technical Support (Standalone L2) → Password Reset (L3) |
| Standalone Level 2      | - Exists without a Level 1 parent<br>- Can have L3 child topics                                                                       | **Example:** Technical Support (Standalone L2) → Password Reset (L3)                                                                                                                                                                                                               |
| Level 2 under a Level 1 | - Standard L2 topic explicitly associated with a Level 1                                                                              | **Example:** Account Management (L1) → Profile Updates (L2)                                                                                                                                                                   |

#### Topic Conversion Options

When you move or promote a topic, you must confirm before converting it to preserve hierarchy integrity.

**Make as L1**

Select a topic to convert it into a Level 1 (L1) topic.

* The topic becomes a top-level business category.

* It no longer has a parent.

* Any existing child topics move with it and remain intact.

**Make Standalone L2**

Select a topic to convert it into a Standalone Level 2 (L2) topic.

* The topic remains a Level 2.

* It doesn't belong to any Level 1.

* Child topics remain unchanged.         
<img src="../images/l2-topic-conversion.png" alt="Topic Conversation" title="Topic Conversation" style="border: 1px solid gray; zoom:70%;"> 

#### Restricted Topic Movements (What you can’t do)

To maintain structural integrity, Taxonomy Builder prevents you from performing these actions:

| Topic Level        | Restricted Actions                                   |
| ------------------ | ---------------------------------------------------- |
| Level 1 (L1)       | You can’t move Level 1 or Level 2 topics to Level 3. |
| Level 2 (L2)       | You can’t move standalone Level 2 topics to Level 1. |
| Standalone Level 2 | You can’t move standalone Level 2 topics to Level 3. |


#### Important Considerations and Restrictions

**Important Considerations**:

* Moving a parent topic automatically moves all its children.

* The system validates vs. duplicate names in the destination location.

* The system requires confirmation before completing any move operation.

**Moving Parent Topics**:

* When you move a parent topic, all child topics move automatically.

* Moves all L2 topics under an L1 parent and L3 topics under an L2 parent.

* Maintains parent-child relationships.

* Requires confirmation before completing. You can't undo this operation after confirmation, verify the new structure in the preview before confirming.

**Duplicate Names Restriction**:

* The system prevents duplicate topic names within the same hierarchy level and parent.

* If you attempt to move or create a topic with a name that exists in the destination:

    * Displays an error message.
    
    * Blocks the operation.

    * Requires you to rename one of the topics before proceeding.

* Make sure that all unique topics names are within each parent category.

    !!! Note 

        When you reorganize a topic:        

        * The system validates against duplicate names in the destination location.

        * You may require a confirmation for moves that affect multiple topics.

#### Confirmation Before Saving Taxonomy Changes

When you save taxonomy changes, a confirmation dialog appears to save the topic level with a new name. 

**Dialog Components**: Provide a descriptive name for the version or update to help track changes in version management.

**Available Actions**

**Discard Changes**: 

* Discards all unsaved changes.
    
* Revert to the previous taxonomy state without applying any modifications.

* Use this if you want to review changes again before saving.

**Save and Proceed**: 

* Confirm and save the taxonomy changes, 
        
* Apply changes to the system. 

* Create a new version in the version history.
       
* Deploy changes for use in conversation analysis.


!!! Note

    Changes take effect only after confirmation, ensuring controlled version management.


!!! warning

    When you select Save and Proceed:

    * Changes are immediately deployed to production.

    * The system classifies the future conversations using the new taxonomy.

    * You can't undo this action (though you can create another version reverting changes).

    * Historical conversations retain their original classifications.
<img src="../images/save-taxonomy-changes.png" alt="Taxonomy Changes" title="Taxonomy Changes" style="border: 1px solid gray; zoom:70%;"> 


#### Reset or Revert Changes Confirmation Dialog

This confirmation dialog appears when you try to undo unsaved taxonomy changes. It clearly warns you that discarding all recent, unsaved modifications discards those changes and restores the taxonomy to its last saved version, helping you avoid accidental loss of work.

**When It Appears**:

* When you have made changes to your taxonomy (adding, editing, moving, or deleting topics).

* When you attempt to move to another screen or close without saving.

* Making changes to your taxonomy hierarchy enables the **Reset Changes** and **Save Versions** buttons. Saving your changes disables the buttons automatically.

**Actions**:

**Reset Changes**: 

* Select the **Reset Changes** button that triggers a confirmation pop-up titled **Revert Changes**. 

* The warning message states that the action discards all recent changes and restores the taxonomy to its last saved state.

**Save Version**: 

* Select the **Save Version** button to save your current changes and update the taxonomy to the latest version. 

* This action preserves all recent edits so you can continue working from this saved state later.

* **Cancel**: Select **Cancel** to close the pop-up and keep your recent changes.

* **Confirm**: Select **Confirm** to proceed and revert the taxonomy, discarding all unsaved changes.

!!! Note

    This action affects only unsaved changes. Previously saved versions remain unchanged.
<img src="../images/revert-changes.png" alt="Revert Changes" title="Revert Changes" style="border: 1px solid gray; zoom:70%;"> 


### Resolution Configuration

Define success criteria and outcome measurements for your conversation topics and customer interactions. Configure resolution tracking to monitor the effectiveness of customer service interactions and identify opportunities for improvement.   
<img src="../images/resolution.png" alt="Resolution Configuration" title="Resolution Configuration" style="border: 1px solid gray; zoom:100%;">  

### Configuring Holistic Resolution Assessment

When you select Holistic Resolution Assessment, the Resolution Configuration tab displays additional options.

1. Navigate to Taxonomy Builder > Resolution Configuration tab.

1. Locate the **Contact-Level Resolution** section.

1. Customize the prompt descriptions that guide the LLM to evaluate resolution.

**Successful Resolution Description**

Define what constitutes a successfully resolved contact for your organization. Include the following criteria:

* Address the primary contact reason

* Satisfy the customer's main concern

* Complete necessary follow-up actions

**Unsuccessful Resolution Description**:

Define what constitutes an unresolved contact. Include these criteria:

* Leave the primary issue unaddressed

* Record customer dissatisfaction with the outcome

* Escalate or schedule a required callback

    !!! Note

        These custom descriptions ensure the LLM evaluates contacts according to your organization’s quality standards and resolution expectations.

#### Setting Up Resolution Detection

Navigate to the **Resolution Configuration** tab to define success criteria for your topics.

Available Resolution Types:

* **Successful**: Positive outcomes for the identified topic.

* **Unsuccessful**: Negative or incomplete outcomes.

* **Overall Resolutions**: Evaluates whether the customer’s primary reason for contact is fully addressed and closed by the end of the interaction, regardless of individual topic outcomes.

Customizing Resolution Definitions:

1. Select the resolution type (Successful/Unsuccessful).

2. Edit the default description to match your business requirements.

3. Include the following in descriptions:
    
    * Conversation type (sales/support)
    
    * Specific topics identified
    
    * Your organization's success criteria

        !!! Note

            Default descriptions are provided based on conversation type and identified topics to streamline initial setup.

### Version Management

Implement systematic version control to track taxonomy changes and maintain historical data integrity. Version management ensures seamless updates while preserving analytical continuity across different taxonomy iterations.

#### Saving and Managing Versions

Save the version after making changes to your taxonomy to impact runtime analytics.

Access **Version History** from the **Topic Discovery** dashboard:

* View the current version plus the three most recent previous versions.

* Previous versions display data only up to their respective update dates.

### Organizing Your Taxonomy

#### Move and Arrange Functionality

* Drag topics to new positions within the hierarchy.

* Highlight drop zones when valid.

* Invalid operations are clearly indicated.

* Preview the new structure before confirming changes.

**Level Changes**: You can move topics between different levels (for example, L2 to L1, L2 to L3) while maintaining their child relationships.

**Important Considerations**:

* Moving a parent topic automatically moves all its children.

* The system detects duplicate names in the destination location.

* Require confirmation before completing any move operation.

## Use Case Example - Banking Sector

Implement a taxonomy structure for financial services using real-world banking scenarios and customer interaction patterns. This example demonstrates the practical application of hierarchical topic organization in a complex, regulated industry environment.

### Phase 1: Business Structure Analysis and Planning

**Organizational Mapping Exercise**: Document your current business structure. For a regional bank, this strategic framework includes:

**L1 Strategic Categories**:

* Retail Banking (individual customer services)

* Commercial Banking (business customer services)

* Mortgage Services (specialized lending division)

* Investment Services (wealth management and advisory)

**L2 Tactical Breakdown Under Retail Banking**:

* Checking Accounts (daily banking transactions and account management)

* Savings Products (savings accounts, CDs, money market accounts)

* Personal Loans (unsecured lending products)

* Credit Cards (revolving credit products and services)

**L3 Operational Details Under Credit Cards**:

* New Applications (application process, approval status, documentation)

* Payment Issues (payment processing, due dates, payment methods)

* Balance Transfers (transfer requests, promotions, processing)

* Account Cancellations (closure requests, retention efforts, final processing)

* Reward Inquiries (points balance, redemption, program questions)

### Phase 2: Topic Creation and Configuration

**Creating L1 Topics**:

1. Select **Add Topic** and select L1 level.

2. Enter a clear, business-aligned name (for example, "Retail Banking").

3. Write a description: "All customer interactions related to individual banking services, including personal accounts, loans, and credit products. Covers day-to-day banking needs for retail customers rather than business or commercial services."

**Expanding to L2 Topics**:

1. Select the parent L1 topic when creating L2 entries.

2. Use product-specific naming (for example, "Credit Cards" rather than generic "Card Services").

3. Include specific scope in descriptions: "Credit card-related inquiries, including new applications, existing account management, payment processing, rewards programs, and account modifications. Excludes debit card issues, which fall under checking accounts."

**Detailed L3 Configuration**:

1. Select an appropriate L2 parent.

2. Use action-oriented naming that reflects customer topic (for example, "Payment Issues" vs. "Payments").

3. Describe when a customer encounters problems making credit card payments, including failed online payments, payment processing delays, payment method changes, or autopay setup issues. Include phrases such as 'payment won't go through,' 'card got declined for payment,' or 'need to change payment method.

4. Configure resolution tracking based on interaction type.

### Phase 3: Resolution Configuration Strategy

**Enable Response-Driven Interactions**:

* **Service Requests**: Account changes, product applications, cancellations.

* **Problem Resolution**: Technical issues, billing disputes, service restoration.

* **Transaction Support**: Payment assistance, transfer issues, and account access problems.

**Skip for Informational Interactions**:

* **Balance Inquiries**: Simple information requests with no follow-up needed.

* **Rate Information**: Interest rate questions, fee schedules, and general product info.

* **Confirmation Calls**: Appointment confirmations, payment confirmations, routine notifications.

**Custom Resolution Definitions Example**: For "Payment Issues" L3 topic:

* **Successful**: "You completed the customer's payment, or you resolved the payment issue during the call. You fixed the payment processing error, set up an alternative payment method, or corrected a technical issue preventing payment."

* **Unsuccessful**: "The customer can't complete payment or the payment issue remains unresolved. Technical problems persist, you can't update the payment method, or the issue requires escalation or a follow-up call."

### Phase 4: Version Management and Deployment

**Creating New Versions**: All taxonomy modifications exist as drafts until you explicitly create a new version. This prevents accidental impacts to ongoing conversation analysis and gives you complete control over when changes take effect.

**Version Deployment Process**:

1. Complete all desired taxonomy modifications.

2. Review changes in the preview mode.

3. Create a new version with a descriptive name and a change summary.

4. The system automatically applies the new taxonomy to future conversation analysis.

5. Historical data remains classified under previous taxonomy versions.

This technical implementation approach ensures your Taxonomy Builder deployment aligns with business objectives while maintaining the flexibility to evolve with organizational needs and customer interaction patterns.
