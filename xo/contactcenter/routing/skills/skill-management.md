# Skills

The **Skills** feature helps set up organizational classifications to route calls or chats to an agent based on the agent’s specialization, department, vertical, customer segment, and other categories. Examples of agent skills may include:

* **Languages** – Agents can speak different languages, such as English, Hindi, Spanish, etc. Language is considered a default skill that every agent must have.
* **Customer Interactions** – Agents are trained for retention, up-selling/cross-selling, or other related skills.

## The Skills Live Board

You can reach the Skills Live Board by going to **Contact Center** > **ROUTING** > **Skills**.
<img src="../images/skills-page.png" alt="Skills Page" title="Skills Page" style="border: 1px solid gray; zoom:80%;"/>

The Skills section is organized by Skill Groups. Click a group to expand it and display the skills assigned to that group. You can use the **Search** field to find skills or skill groups by name.

### Add a Skill

Before adding a skill, you need a skill group. See [Skill Groups](#skill-groups) for details. Contact Center AI comes pre-configured with a Default Skill Group to which you can add skills.

To add skills to a skill group, follow these steps:

1. Click the respective skill group to get the drill-down view of associated **Skills**;
2. Click the **+ New Skill** button.  
<img src="../images/new-skill-button.png" alt="New Skill Button" title="New Skill Button" style="border: 1px solid gray; zoom:70%;">

3. Enter the following details in the **Add New Skill** window:
    1. **Skill Name**: Enter the name to identify the skill by.
    2. **Description**: Enter a brief description of the skill or its purpose.
    3. **Agent Assignments**: Associate agents to the skill and provide the proficiency level (Novice, Average, Good, and Expert).  
    <img src="../images/add-new-skill.png" alt="Add New Skill" title="Add New Skill" style="border: 1px solid gray; zoom:60%;">

    4. Click **Create** to complete the process. Contact Center AI creates the new skill, adds it to the list, and displays a success confirmation message.
    <img src="../images/skill-created.png" alt="Skill Created" title="Skill Created" style="border: 1px solid gray; zoom:60%;">

### Add a Skill Using a Script

You can use custom attributes to add skills dynamically.

You can dynamically add skills using script nodes while building [dialogs in the XO platform](../../../automation/use-cases/dialogs/node-types/working-with-the-script-node.md) or building a [flow in Contact Center AI](../../../flows/node-types/script-task.md).

The following methods are available:

**setSkills(skillsInfo)** – You can use this method to append skills to the current conversation. _skillsInfo_ is an array parameter.

```
var loanType = { //creating a sample variable of skill - loan type
    "Car Loan": {
         name: "Car Loan",
         id: "60b50becxxxxxxxx95b55d88",
    },
    "House Loan": {
         name: "House Loan",
         id: "60b50cxxxxxxxx4195b55d89",
    },
    "Education Loan": {
         name: "Education Loan",
         id: "60b894xxxxxxxx6accc5f466",
    },
    "Gold Loan": {
         name: "Gold Loan",
         id: "60b8943xxxxxxxxaccc5f467",
    },
};

agentUtils.setSkills([loanType[a]]); //setting the skill - loan type
```

**getSkills()**-Returns an array of skills in the current conversation.

**getSkillById(skillId)**-Returns a skill using the skill ID. Skills IDs are available under skills.

**deleteSkillById(skillId)**-Deletes a skill from the context of the current conversation.

**deleteSkills(skillsToDelete)**-You can use a skill ID or an array of skill IDs to delete skills from the conversation.  

     Example: `agentUtils.deleteSkills(["skillAId", "skillBId"]);`

### Edit a Skill

To edit the field values of an existing skill, follow these steps:

1. Select the desired skill group to get the associated skills list;
2. Select the **Edit** icon corresponding to the skill you want to update;  
<img src="../images/edit-skill-button.png" alt="Edit Skill Button" title="Edit Skill Button" style="border: 1px solid gray; zoom:70%;">

3. Make your changes in the **Edit Skill** window;
4. Select **Save**. A success confirmation message displays.

### Delete a Skill

To delete a skill, follow these steps:

1. Click the desired skill group to get the associated skills list;
2. Click the **Edit** icon corresponding to the skill you want to delete;
3. Ensure that there are no agents assigned to the skill. If there are, you must remove them to delete the skill. Removing an agent from a skill also removes the skill assignment on the agent’s profile. Follow these steps:
    1. In the **Edit Skill** window, scroll down to **Agent Assignments**;
    2. Click the **Delete** icon for all the agents mapped to the skill.
    3. Click the **Delete** button on the confirmation pop-up for each agent. Once deleting all the agents under _Agent Assignments_, click **Save**.
    4. Click the **Delete Skill** icon.
    5. Click the **Delete** button on the confirmation pop-up to confirm your choice.  
          <img src="../images/delete-skill-button.png" alt="Delete Skill Button" title="Delete Skill Button" style="border: 1px solid gray; zoom:70%;">

!!! Note

     You cannot restore deleted skills. Please proceed with caution.

## Skill Groups

A **Skill Group** aggregates similar agent skills. For example, _Sales_ is a skill group, and skills such as up-selling, cross-selling, and presales are skills. Click the name of a group to display associated skills.
<img src="../images/skill-group.png" alt="Skill Group" title="Skill Group" style="border: 1px solid gray; zoom:70%;">

### Add a Skill Group

Steps to add a new skill group:

1. Click the **+ New Skill Group** button;  
<img src="../images/new-skill-group-button.png" alt="New Skill GroupButton" title="New Skill Group Button" style="border: 1px solid gray; zoom:70%;">

2. In the Add New Skill Group window, provide inputs for the following:
    1. Skill Group Name: The skill group name for identification.
    2. Description: The skill group description to understand its context.
    3. Color: Associate a color to the group for easier identification. You can use Hex to choose a specific color, use the color picker or select from the preset color palette;

3. Click **Create** to complete the process;  
     <img src="../images/create-new-skill-group.png" alt="Create Skill Group" title="Create Skill Group" style="border: 1px solid gray; zoom:70%;">

!!! Note

     Skill Groups and Skills can have identical names if required. You can add skills with the same name to different groups. Within the same group, skill names must be unique.

4. A success confirmation message is displayed once the new skill group is created. You can now [add skills](#add-a-skill) to the group.  
<img src="../images/skill-group-created.png" alt="Skill Group Created" title="Skill Group Created" style="border: 1px solid gray; zoom:70%;">

### Edit a Skill Group

Follow these steps to edit a Skill Group once it is no longer associated with any skills:

1. Click the **Edit** icon corresponding to the group you want to edit;  
<img src="../images/edit-skill-group-button.png" alt="Edit Skill Group Button" title="Edit Skill Group Button" style="border: 1px solid gray; zoom:70%;">

2. Make the required changes in the _Edit Skill Group_ window and click **Save**.

### Delete a Skill Group

To delete a Skill Group, you must first remove the associated skills. In turn, the skills you have to remove must not be associated with any agent.

Follow these steps to delete a Skill Group:

1. **Delete the Skill**:
    1. Click the desired skill group to get the associated skills list;
    2. Click the **Edit** icon corresponding to the skill you want to delete;
    3. Ensure that there are no agents assigned to the skill. If there are, you must remove them to delete the skill. Removing an agent from a skill also removes the skill assignment on the agent’s profile. Follow these steps:
        1. In the **Edit Skill** window, scroll down to **Agent Assignments**;
        2. Click the **Delete** icon for all the agents mapped to the skill.
        3. Click the **Delete button** on the confirmation pop-up for each agent. Once deleting all the agents under _Agent Assignments_, click **Save**.
        4. Click the **Delete Skill** icon.
        5. Click the **Delete** button on the confirmation pop-up to confirm your choice.  
          <img src="../images/delete-skills.png" alt="Delete Skill" title="Delete Skill" style="border: 1px solid gray; zoom:70%;">

2. **Delete the Skill Group**:
    1. Click the Edit icon corresponding to the group you want to edit;
    2. In the _Edit Skill Group_ window, click **Delete Skill Group**;
    3. Confirm your choice.  
          <img src="../images/delete-skill-group.png" alt="Delete Skill Group" title="Delete Skill Group" style="border: 1px solid gray; zoom:70%;">

!!! Note

     You cannot restore deleted skill groups. Please proceed with caution.
