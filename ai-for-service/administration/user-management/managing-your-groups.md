# Managing Your Groups

On the **Groups** page in the **User Management** module, you can create and manage logically related groups of users, as well as import groups, such as your company Active Directory groups. If the enterprise has varied and distinct Bot requirements for various departments or lines of business, creating groups, adding developers and assigning bots to the groups would be the recommended option. You can create a custom group of users, for example, by geographical location, department title, or common interest. Groups are automatically created when you import organizational units using Active Directory. The following illustration is an example of the **Groups** page in the **User Management** module. 

<img src="../images/bac-groups.png" alt="User Management - Groups" title="User Management - Groups" style="border: 1px solid gray;zoom:50%;"/>


## Details

To sort the list of column values, click the **Arrow Up** <img src="../images/up-arrow.png"> icon or **Arrow Down** <img src="../images/down-arrow.png"> icon to the right of a column name. The following list describes the columns displayed in the Groups listing.


<table border="1">
  <tr>
   <td><strong>COLUMN</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
  </tr>
  <tr>
   <td>Group Name
   </td>
   <td>Displays the group name. Click a group name to edit the selected group – name, description & members.
   </td>
  </tr>
  <tr>
   <td>Description
   </td>
   <td>Displays the description of the group. This is an optional field.
   </td>
  </tr>
  <tr>
   <td>Source
   </td>
   <td>The source used to create the group. One of:
<ul>

<li><strong>Local </strong>– The group was created manually from the <strong>User Management</strong> module.

<li><strong>AD</strong> – The group was imported or synchronized using Active Directory.

<li><strong>System</strong> – The group was created as a default group by Kore.ai, for example, <em>everyone</em>.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Membership
   </td>
   <td>Displays the number of group members as users, and the number of groups as child members of the parent group. Click the link to edit the list of Kore.ai users and child groups for the selected group.
   </td>
  </tr>
</table>



### Using the Search Field

The list of entries in an admin console table can be very large depending on the size of your company. To find one or more specific users or groups, in the **Search** field, enter at least three characters to begin find-as-you-type.

!!! Note

    The number of search terms in a search query is unlimited, however, no more than the first 20 characters of each search term is used to return search results.

To view all entries, clear the search field, and then press the **Enter** key.


## Creation

You may want to create one or more groups of users in your account for users with, for example, a related interest, department, or location. Groups created by the admin are not visible to the user and are for administrative purposes only. This topic describes how to define a new group and add users, or existing groups of users to that group.

1. In the **User Management** module, select the **Groups** section.
2. Click the <img src="../images/add-new-button.png"> button to display the **Create New User Group** dialog to add a new Kore.ai group to your account.
3. The **Create New User Group** dialog is displayed.
4. In the **Common** tab,
    1. in the **Group Name** field, enter the name for the group.
    2. Optionally, in the **Description** field, enter a description for the group.  
    <img src="../images/create-new-group.png" alt="User Management - Groups" title="User Management - Groups" style="border: 1px solid gray;"/> 

5. Navigate to the **Members** tab, and select the user(s) and/or group(s) to be added to this group. You can locate the needed users/groups from the **Available Users/Groups** section by
    1. using **Sort** and then selecting a **Filter** to display users and groups that can be added to the new group.
    2. entering a name in the **Search** field, or
    3. scrolling to select one or more Kore.ai users and Kore.ai groups,
    4. Then click <img src="../images/single-arrow-right.png">, to move the selected list to the **Current Members** section.
    7. To add all available users and groups, click <img src="../images/double-arrow-right.png">.  
    <img src="../images/bots-admin-user-mgmt-groups-create-new-group-add-users.png" alt="Add users to group" title="Add users to group" style="border: 1px solid gray;zoom:80%;"/>
 
6. Click **Save**. The group is created and the **Groups** page is displayed.
7. The _Group Updated_ message is displayed at the top of the page.


## Modification

You may need to modify the members of a group. This topic describes how to modify the common group properties and the membership of an existing group.

1. In the **User Management** module, on the **Groups** page, in the **Group Name** column, click the name of the group to modify.
2. The **Editing User Group** – **_&lt; Group Name >_** dialog is displayed.
3. On the **Common** tab, you can modify the **Group Name** and **Description** field.
4. On the **Members** tab, in the **Available Users/Groups** and **Current Members** sections, optionally **Sort**, and then select a **Filter** to display users and groups to add or remove.
5. To modify the members of the group, you can:
    1. Enter a name in the **Search** field, or scroll to select one or more users and groups, and then click <img src="../images/single-arrow-right.png"> to add new group members, or click <img src="../images/single-arrow-left.png"> to remove the selected group members.
    2. Click <img src="../images/double-arrow-right.png"> to add all available group members, or click <img src="../images/double-arrow-left.png"> to remove all current group members.
6.  Click **Save**. The group is modified and the **Groups** page is displayed.  
<img src="../images/bots-admin-user-mgmt-groups-edit.png" alt="Modify group" title="Modify group" style="border: 1px solid gray;zoom:50%;"/>


## Deletion

You may no longer need a group of users in your account. You must remove all users from a group before you can delete a group. Complete the steps in the following procedure to delete a group. Instead of deleting a group, you can also modify the common settings as well as the membership of an existing group. For more information, see [Modify an Existing User Group](#modification).

1. In the **User Management** module, on the **Groups** page, in the **Group Name** column, select the name of one or more groups to delete.
2. On the **Action** bar, click <img src="../images/delete-button.png">.
3. In the **Delete Group(s)** confirmation dialog, click **Delete**.  
  
    !!! Warning
  
        This operation is permanent and cannot be undone.

The group is deleted.

<img src="../images/bots-admin-user-mgmt-groups-delete.png" alt="Delete group" title="Delete group" style="border: 1px solid gray;zoom:80%;"/>