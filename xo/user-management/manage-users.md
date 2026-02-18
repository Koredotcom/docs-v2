# Manage Users

In AI for Service, the term User refers to the App Owner, App Developer, App Tester (customer support representatives), to supervisors, and administrators with an account within Contact Center AI (CCAI). To serve customers, you must add users to Contact Center and provide them with the necessary access. You can create user profiles, assign them to voice, chat, or both channels, and specific skills or queues.

You can find the _Users_ section on the left navigation menu of the products or via the product switcher by going to **Manage** > **Users** > **Manage Users**.  
<img src="../images/product-switcher.png" alt="Users Menu" title="Users Menu" style="border: 1px solid gray; zoom:100%;">

## User Management Section Features

The Users section includes the features in the table below.

| **Feature** | **Description** |
|-------------|-----------------|
| Search | Type in a user’s name to retrieve their record. |
| User | This is the name of the user you are viewing, as entered within their profile. Under every user’s name, their configured email is displayed. |
| Role | Lists the role assigned to the user. |
| Skills | Lists the skills assigned to the user. |
| Queues | Lists the queues assigned to the user. |

## Add a User

You can add a user to CCAI by following the steps:

1. Select **Invite Users**.  
  <img src="../images/invite-user-button.png" alt="Invite Users Button" title="Invite Users Button" style="border: 1px solid gray; zoom:80%;"/>

2. The Invite User window displays. Here, you can configure the following:
    1. **Email**: Enter the users email ID.
    2. **First Name**: Enter the First Name.
    3. **Last Name**: Enter the Last Name.
    4. **Role**: Select whether the new users are App Developer, App Tester, Agent, or Supervisor.
       * Users with “Change User Role”  and permission selected as “Yes” can modify the role of an existing user.
       * Users with “Change User Role”  and permission selected as “No” can't modify the role of an existing user. See [Role Management](./role-management.md#permissions) for details.
    5. **Attributes**: You can edit the user details or delete the users.

Disabled users are displayed with a “Disabled” tag beside their name. Contact Center permissions are disabled when a new user invite is sent by a user whose Contact Center permission is disabled.  
<img src="../images/user-page-disabled-user.png" alt="Disabled User" title="Disabled User" style="border: 1px solid gray; zoom:80%;"/>

## Attributes

In the user attributes window, configure the following:

* _(Optional)_ Profile Picture: Upload the user’s profile picture here.
* Edit the user’s first, last names, email ID, role, and phone number.  
  <img src="../images/user-attributes.png" alt="User Attributes" title="User Attributes" style="border: 1px solid gray; zoom:70%;">

### General Settings

This section helps configure general settings.

In the General Settings section, You can enable the **Allow agent permissions** toggle to set the following:

* Set the Agent Console as the default in Contact Center AI - Enable this option to set **Agent Console** as the default landing page. This Dynamic Navigation Control feature determines the appropriate landing page based on user permissions rather than hardcoded role names. 
* Group
* Custom ID 
* Agent Nick Name
* Desktop layout  
<img src="../images/general-settings.png" alt="General Settings" title="General Settings" style="border: 1px solid gray; zoom:70%;">

!!! Note

    The customId field supports all special characters except spaces and backslashes, with a maximum limit of 64 characters.

### Chat & Voice

This section helps configure the chat and voice settings.

In the Chat & Voice section, you can configure the following:

* Turn on **Enable chat** toggle to set:
   1. Capacity by Channel Type - Maximum handling capacity for individual channels. (You can select maximum 15 conversations for each channel type). The total digital conversation limit should be configured within minimum and maximum limits. When an agent reaches the total digital conversation limit, they will be automatically marked as "system busy" and will not be assigned any new digital conversations until they complete ongoing conversations and free up session slots.  

!!! Note

    Agents are not listed in Agent Transfers when the Chat and Email channel slots are set to zero.

   2. Language Support - Supported languages and their proficiency level. (Novice, Average, Good, or Expert)
   3. Widget Features - Attachments and emojis in live chat.

* Turn on **Enable Voice** toggle to set the following:
  1. **Voice Support**: When voice is enabled, agents can accept voice calls by default, including inbound, manual outbound etc. However, campaign settings are set to No by default, which means agents do not receive campaign calls. To allow agents to receive campaign calls, this setting must be changed to Yes, and the agents must be part of the queue attached to the campaign.
  2. Select the supported languages and their proficiency level.

* Turn on **Enable Voice Mail** toggle to set the count of voice mails callers can leave in a queue.  
  <img src="../images/user-attribute-chat-voice.png" alt="Chat & Voice" title="Chat & Voice" style="border: 1px solid gray; zoom:70%;">

### Queues & Skills

This section lets you configure the queues and skills assigned to a user.

#### Queues

To assign queues to a user, follow these steps:

1. Type in a queue name in the search field, then select the one you need from the list. The list only contains queues that are already created. To add a queue, see [Add Queues](../contactcenter/routing/queues/queue-management.md#add-a-queue).
2. Once you select a queue, it will be added to the user’s list of assigned queues. If you have more than one queue assigned to the same user, you can select or deselect the queues to assign; and set queues as _Preferred_. Queues set as such will take priority over others when the user receives incoming queries.
3. You can remove a skill by clicking the **Delete** (bin) button next to it.  
  <img src="../images/select-queues.png" alt="Select Queues" title="Select Queues" style="border: 1px solid gray; zoom:70%;">

#### Skills

This section lets you configure the skills that the user brings to your team.

To assign skills to a user, follow these steps:

1. Type in a skill name in the search field, and select it from the dropdown list to add it to the user’s skill list. The list only contains skills that are already created. To add more skills, see [Add Skills](../contactcenter/routing/skills/skill-management.md#add-a-skill).
2. Once you select a skill, choose the proficiency level  (_Novice, Average, Good,_ or _Expert_).
3. You can remove a skill by clicking the **Delete** (bin) button next to it.
  <img src="../images/select-skills.png" alt="Select Skills" title="Select Skills" style="border: 1px solid gray; zoom:70%;">

## Save a User

To save the user, click the **Invite User** button at the bottom of the New User window. This is available regardless of the section that you are currently navigating.
<img src="../images/invite-user-window.png" alt="Invite User Window" title="Invite User Window" style="border: 1px solid gray; zoom:70%;">

!!! Notes

      The minimum requirements to save a user record are the following:

      1. The mandatory fields email, first name, and role;
      2. Enable at least one channel (Chat or Voice);
      3. Assign at least one language to the channel you enable.

## Edit a User

To edit a user, follow these steps:

1. On the Manage Users page, click the **Ellipsis** icon (⋮) corresponding to the user you want to edit.
  <img src="../images/edit-user.png" alt="Edit User" title="Edit User" style="border: 1px solid gray; zoom:70%;">
2. On the User Attributes window, make the necessary edits.
3. Click **Update Changes**.

    Disabled users can edit only the Name, Phone Number, and Role fields of other users.  
      <img src="../images/user-attributes-disabled-user.png" alt="User Attributes" title="User Attributes" style="border: 1px solid gray; zoom:70%;">

## Promote As Owner

To promote a user to owner, follow these steps:

1. On the Manage Users page, click the **Ellipsis** icon (⋮) corresponding to the user you want to promote to owner.  
  <img src="../images/promote-as-owner.png" alt="Promote As Owner" title="Promote As Owner" style="border: 1px solid gray; zoom:70%;">

2. On the Promote app owner pop-up window, select the role and click **Save**.

## Change Owner

To change the app owner, follow these steps:

1. On the Manage Users page, click the **Ellipsis** icon (**⋮**) corresponding to the App Owner.

   <img src="../images/change-owner-button.png" alt="Change Owner Button" title="Change Owner Button" style="border: 1px solid gray; zoom:70%;">

2. On the Promote app owner pop-up window, select the role and click **Save**.  

   <img src="../images/change-app-owner.png" alt="Change App Owner" title="Change App Owner" style="border: 1px solid gray; zoom:70%;">

## Delete a User

To delete a user, follow these steps:

1. On the Manage Users page, click the **Ellipsis** icon (**⋮**) corresponding to the user you want to delete.
2. Click **Delete**.  
  <img src="../images/delete-user.png" alt="Delete User" title="Delete User" style="border: 1px solid gray; zoom:70%;">

3. You will be asked to confirm your choice.

!!! Notes

      1. You cannot delete your own user.
      2. You cannot delete the Contact Center AI app owner.
      3. Reports, dashboards, and APIs will display deleted agents as long as interactions and metrics contain data associated with the deleted agents.
      4. After deleting a user record, the respective user can no longer sign into Contact Center AI. If you want to temporarily restrict users from handling customer conversations, you can turn off their access to chat and voice channels, or add them to the [Unassigned group](../contactcenter/agent-and-supervisors/agent-management/agent-management.md#pre-configured-groups).

## Add a Group

You can add a group by following the steps below:

1. Click **Invite Users**.  
  <img src="../images/invite-user-button.png" alt="Invite Users Button" title="Invite Users Button" style="border: 1px solid gray; zoom:70%;">

2. The Invite User window displays. Here, you can configure the following:
    1. **Name**:  Enter the name of the group you want to add. Refer to [Create a Group](../administration/user-management/managing-your-groups.md#creation).
    2. **Role**: Select whether the new users will be App Developer, App Tester, Agent, or Supervisor.

3. Click the **Share Invites** button at the bottom of the New Groups window.

  <img src="../images/share-group-invite.png" alt="Share Invites" title="Share Invites" style="border: 1px solid gray; zoom:70%;">
