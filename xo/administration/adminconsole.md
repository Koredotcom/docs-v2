# Intro to Admin Console

Admin Console is where AI Agents project administrators can manage assistants and related tasks, users, security, billing, and more, at the organization level. This article provides an overview of the Admin Console, covering prerequisites, access options, and a recommended workflow.

## Admin Prerequisites

To sign up for an Admin account, you must meet the following requirements:

* A valid email address.
* A validated Kore.ai user account. If you do not have a user account, Kore.ai will create a user account for you, and you must validate that account before proceeding.
* Authorization to control the Admin account. Only one user in an account can be the primary Admin. The Primary Admin can add multiple other users as admins with custom defined permissions.


## Accessing the Admin Console

You can access the Admin Console from the [Platform](https://platform.kore.ai/builder){:target="_blank"} using the **Go To Admin Console** option, under your user account menu.

<img src="../images/adminconsole-img1-access-admin-xo.png" alt="Navigate to Admin Console" title="Navigate to Admin Console" style="border: 1px solid gray;zoom:50%;"/>

You can also access the Admin Console by going directly to: [https://platform.kore.ai/Admin](https://platform.kore.ai/Admin) 

!!! Note

    These options are available only for the XO Platform account Administrator.  

In case you have access to multiple accounts, the same will be listed for selection.  You can set one as the default account.

The Kore.ai XO Platform offers an additional layer of security beyond username and password during account sign-in with **Two-Factor Authentication (2FA)**. 2FA when enabled, prompts for a security code verification after you’ve entered your username and password. [Learn more](./security-and-control/two-factor-authentication-for-platform-access.md#enable-two-factor-authentication){:target="_blank"}.

Kore.ai triggers a session timeout after 15 mins of idle time to prevent unauthorized access. In such scenarios, you will be taken to your account admin console and asked to sign-in again.

As an Admin, you can enroll users, manage admin and custom roles, define security settings, and manage AI Agents in your company. The following illustration is an example of the Admin Console with the **Dashboard** page displayed. [Refer here for more on the Admin Dashboard](dashboard-bac.md){:target="_blank"}.

<img src="../images/adminconsole-img2-bac-dashboard.png" alt="Admin Console Dashboard" title="Admin Console Dashboard" style="border: 1px solid gray;zoom:50%;"/>


## Getting Started as an XO Platform Admin

When you first start using the Kore.ai XO Platform, using the Admin Console, you should start inviting and adding users to join the Kore.ai account for your company.

You can also control  access to individual assistants in your enterprise account. For managing access to assistants, [see here](bot-management.md){:target="_blank"}.

If your enterprise has varied departments, with each having individual and separate assistant requirements, it is advisable to segregate the development into Groups. You can create groups of users and assign assistants to the groups as needed. For managing groups, [see here](./user-management/managing-your-groups.md){:target="_blank"}.

Let us look at inviting and adding users to join your enterprise account. For this scenario, we will assume an example user, that Bob at `bob@example.com` has never signed up for the the Platform and is a company employee that you want to manage. To invite and allow Bob to use the Platform, follow these steps:

1. Invite Bob to join Kore.ai by sending him an invite.
2. Bob enrolls in Kore.ai using the link you sent in the invite. Using this link, Bob signs up and provides a password and other user info for his account.
3. Once the sign-up process is complete, you can assign him to one or more assistants.
4. You can also assign various roles to the user.

The following sections describe how to achieve the above-mentioned steps from the Admin Console.


### Step 1 – Inviting a New User

Let’s invite Bob to join Kore.ai.

1. On the left navigation menu, click to expand the **Enrollment** module, and then click **Invite**. The **Invite users to join Kore.ai** page is displayed.
2. Enter the email address of the user, in this case `bob@example.com`. You can send invitations to five users at  a given time.
3. Click **Send Invitations**.  
<img src="../images/adminconsole-img3-bac-invite-user.png" alt="Invite users" title="Invite users" style="border: 1px solid gray;zoom:50%;"/>

An email is sent to `bob@example.com` with a link to sign up for Kore.ai. Bob clicks the link, signs up for Kore.ai, and becomes a user in your Kore.ai XO Platform account and is ready to be assigned assistants.

[More on User Management](./user-management/users-module-overview.md){:target="_blank"}


### Step 2 – Assigning an Assistant

As an Admin, you can assign users to assistants. Before you can assign an assistant to a user, it should have been published to the enterprise.

For this example scenario, we assume that assistants have been published to your account.

1. Since this assistant was deployed for Enterprise use, it is displayed on the **Enterprise Bots** page, as shown in the following image.  
<img src="../images/adminconsole-img4-bac-bot-assign.png" alt="Assigning an Assistant" title="Assigning an Assistant" style="border: 1px solid gray;zoom:50%;"/>

2. In the **Bot & task assignments** dialog, select **Assign Bot’s tasks** and then choose **Assign individual users**, select Bob from the list of users (you will see Bob’s name only after he has accepted the invitation and joined Kore.ai) and then click **Done**.
3. To save and apply the changes, in the **Bot & task assignments** dialog, click **Apply**.
4. In the _Bot Assignment successful_ dialog, click **OK**.

[More on Bots Management](bot-management.md){:target="_blank"}


### Step 3 – Assigning a Role

You can assign Roles to the user. By default the roles of _Master Admin, Bot Owner, Bot Developer_ and _Bot Tester_ are created by the Platform. You can create your own custom roles, too ([refer here for more](./user-management/role-management.md){:target="_blank"}).

<img src="../images/adminconsole-img5-bac-roles.png" alt="Assigning a Role" title="Assigning a Role" style="border: 1px solid gray;zoom:50%;"/>

To assign a role to a user follow these steps:

1. From **User Management**, select **Role Management.**
2. Hover over the role that you want to assign to the user and click the **edit icon.**
3. From the **Manage Role** dialog, under the **Assignments** tab click **Assign Role** button.
4. Type and select the **User Name** you want to add (Bob in this case).

!!! Note

    _The role of Bot Owner is assigned at the time of Bot creation and can be changed either from the Bots Management module or from the Platform by the Bot Owner not from Role Management._
