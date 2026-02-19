# Managing Your Users

You can manage users in **Admin Console** from the **User Management > Users section**.

All users across your network accounts are listed here.  

<img src="../images/users.png" alt="users" title="users" style="border: 1px solid gray; zoom:80%;"/> 

The following list describes the columns displayed for each user.

<table>
  <tr>
   <td>COLUMN
   </td>
   <td>DESCRIPTION
   </td>
  </tr>
  <tr>
   <td>USERS
   </td>
   <td>Displays the username, admin indicator, and selection box.
   </td>
  </tr>
  <tr>
   <td>DESIGNATION
   </td>
   <td>Designation of the user.
   </td>
  </tr>
  <tr>
   <td>STATUS
   </td>
   <td>Displays the user status. 
<ul>

<li>Active: The user is active and can interact with other users.</li>

<li>Invited: Users invited by the Admin, but who are yet to join or accept the invitation.</li>

<li>Suspended: The user is suspended by an administrator. The user cannot log in. The status of a Suspended user can be Activated anytime by admin.</li>

<li>Removed: A user deleted by an admin enters a "soft delete" state for 60 days, after which they are permanently deleted. During this period, the user's status can be changed back to "Active."</li>

<li>Remove Permanently: Available only for users in the "Removed" state, this action deletes them permanently from the list.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>ROLE
   </td>
   <td>Displays the user's role, indicating whether they are an admin or a member. Click on the role to navigate to the role management section, where you can add a custom role.
   </td>
  </tr>
  <tr>
   <td>USER GROUP
   </td>
   <td>Displays the names of all the groups the user belongs to.
   </td>
  </tr>
</table>


To view the user details page:

* Hover over the specific username, the **Open** icon will appear. Click **Open**.
* Click **More** in the last column of the specific user row.  

From the user details page, you can access the following fields:

* Personal Details
* Application Details
* Log details  

<img src="../images/user-details.png" alt="user-details" title="user-details" style="border: 1px solid gray; zoom:80%;"/> 

## User Roles Management

The User Roles feature allows administrators to control user access through predefined and custom role assignments. The system includes two default roles (Admin and Member) and supports the creation of custom roles with specific permissions and visual identifiers.

### *Modifying Existing Roles

1. Click on the existing role you want to modify.
2. Select the desired role.
3. Confirm changes.

### Creating Custom Roles

1. Click **Manage role** from the user management interface.
2. Select **Add Role** or equivalent option to create a new role.
3. **Role name**: Enter a descriptive name for the custom role. Use clear, meaningful names that reflect the role's purpose 
<img src="../images/user-role-2.png" alt="user-details" title="user-details" style="border: 1px solid gray; zoom:80%;"/> 

    **Access Permissions**: Choose one or multiple permissions from the provided list. Users will only see the modules corresponding to the permissions they are granted.

    * User Management
    * Assist configuration
    * LLM Configuration
    * Security
    * Analytics

    **Color**: Choose a unique color identifier for the role, this color serves as a visual indicator throughout the system.
!!! note

    At least one Access Permission must be selected to enable role creation.

## Top Navigation Menu

This section describes the commands available on the Top Navigation Menu. 

1. User Enrollments

    Click the **Change** button to open the User Enrollment page.  
    <img src="../images/user-enrollment-ref.png" alt="user-enrollment-ref" title="user-enrollment-ref" style="border: 1px solid gray; zoom:80%;"/> 

    Refer to [User Enrollment](../user-management/user-enrollments.md) for details on the type of enrollment configurations.

2. Search Field

    The list of entries in the User’s table can be very long. To find one or more specific users enter the keywords. To view all entries, clear the search field.

3. Filter

    Allows users to narrow down data or content based on specific criteria or conditions. By applying filters, users can view only the items that match their selected parameters, such as Status and Role.

4. Sort By

    Allows users to organize data or content based on specific criteria. By selecting a sorting option, users can arrange items in a particular order, such as First name, Last name, and Last login time.

5. Group 

    Allows users to organize data or items into categories based on shared attributes or criteria. Grouping allows users to view and manage information more effectively by clustering related elements together such as Status and Role.

6. Invite users

    You can add a new user by sending bulk or individual email invites. Alternatively, import the user information file directly to the console.

    1. On the Top Navigation Menu, click **Invite users**.
    2. To invite users by importing a file, **Click to upload** the file or **drag and drop** the file. Refer to the **Format template for importing files** for the Instructions to prepare files for importing users.  
    <img src="../images/invite-user.png" alt="invite-user" title="invite-user" style="border: 1px solid gray; zoom:80%;"/> 

    3. To invite users by sending emails, select the **Add manual** radio button.
    4. Enter the email address of the user. You can send invitations to multiple users at a given time.  
    5. Click **Invite**.