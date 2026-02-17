# Conversation Sessions

Conversation sessions are defined as uninterrupted interactions between the AI Agent and the user. These sessions are used in multiple analytics dashboards in the App Builder as well as Admin Console platforms.

The Platform allows you to customize how these Conversation Sessions are to be created and closed.

!!! note

    Conversation Sessions are different from Billing Sessions, [refer here](../../administration/billing.md){:target="_blank"} for more on Billing Sessions.


## Overview

A Conversation Session is defined as an uninterrupted volley between the end-user and the AI Agent.


* Before the release of v7.2 of the platform – a new session was created after the _inactivity duration (set as 15 mins)_ has elapsed since the end-users’ last interaction.
* Post v7.2 release – after the _inactivity duration (set as 15 mins)_ has elapsed
    * if the end-user comes back and continues with the same intent, then the current session continues;
    * if the end-user comes back with a new intent or with an invalid input for the existing intent, a new session is created.
* Post v8.0 release, platform gives you an option to:
    * Proactively close the sessions after inactivity – see [Manage Sessions](#manage-sessions) to know more.
    * Not proactively close the sessions after inactivity – retain the v7.2 behavior described above;

Conversation Sessions are created for all interactions with the AI Agent. These include:

* All conversations that include one or more messages from the user marked as **interactive sessions**. These include all end-user interactions across all channels and events including providing authorization details.
* All AI Agent initiated conversion sessions like onConnect event messages are recorded as **non-interactive sessions**. These sessions will be updated as Interactive sessions as soon as a user message is received. Non-interactive sessions are not considered for calculating the billing sessions.
* **Developer interactions** are also included as conversation sessions. A flag differentiates the user sessions from developer sessions and billing sessions are not created for these developer sessions.

!!! note

     Inclusion of non-interactive and developer interactions in conversation sessions was implemented starting from ver8.0.


## Manage Sessions

This feature is only available post v8.0 of the platform release.

You can define the Conversation Session behaviors in the **Manage Sessions** tab within **App Settings > Advanced Settings** tab.

<img src="../images/bot-sessions-img1.png" alt="App Settings - Advanced Settings - Manage Sessions" title="App Settings - Advanced Settings - Manage Sessions" style="border: 1px solid gray;zoom:50%;"/>

The following details explain the options available on the page, to define the conversation sessions.

* **Do not proactively close the sessions after inactivity** – Select this option to close the session only when the user returns after 15 minutes of inactivity and provides a new intent. This was the default behavior before the release of ver8.0 of the platform. <span style="text-decoration:underline;">This option will be deprecated in future releases</span>.
* **Proactively close the sessions after inactivity** – Select this option to close the session after a defined duration of inactivity. You can set the following parameters:
    * **Inactivity Duration** – this is set to 15 minutes by default. The session closes after the time duration set here.

        !!! note

            The minimum value that can be set here is **5 min** and the maximum value is **20160 min** (14 days). These values can be configured at the application level through Koreconfig.

* **Session Closure Behavior** – You can choose to close the session without informing the user or inform the user about the session closure by sending out a message. This message can be customized using the **Manage response** link. You can click **Add Response**, if you want to add a new response.  
<img src="../images/bot-sessions-img2.png" alt="Customize message using Manage Response" title="Customize message using Manage Response" style="border: 1px solid gray;zoom:50%;"/>

* **Clear Auth Profile** – You can enable the **Clear Auth Profiles** option to clear all authorization tokens and session variables associated with a particular session. Once you enable this setting, you are required to provide the authorization profile details again to re-authorize the session.  
<img src="../images/bot-sessions-img3.png" alt="Clear Auth Profiles - clear all authorization tokens and session variables" title="Clear Auth Profiles - clear all authorization tokens and session variables" style="border: 1px solid gray;zoom:50%;"/>

* **Run Custom Script** – You can use the custom script to invoke koreUtil.ClearAuthProfiles function to clear the authorization profile and associated session variables for that particular profile.For example, if you have enable multiple authorization profiles for a session, you can use the `koreUtil.ClearAuthProfiles` to disable a particular authorization profile that is not needed for this session using this custom script:  
`koreUtil.ClearAuthProfiles ( [Auth_Profile_Name] )
`You can also clear all authorization profile using this script:
`koreUtil.ClearAllAuthProfiles ( )` For more information, see [kore.UtilLibraries ](../../apis/automation/koreutil-libraries.md){:target="_blank"}article.  
<img src="../images/bot-sessions-img4.png" alt="Run Custom Script" title="Run Custom Script" style="border: 1px solid gray;zoom:50%;"/>


## Implementation

**When does a Conversation Session start?**

Conversation Sessions are created for all interactions:

* All **end-user interactions** across all channels and events – Conversation sessions are created for On_connect – Run a script, Run a Message, Trigger a Dialog scenario. There are two categories of these conversation sessions:
    * **Interactive sessions** are conversations that include one or more messages from the user.
    * **Non-interactive sessions** are conversations with no messages from the user. All AI Agent initiated conversion sessions start as ‘Non-interactive’. These sessions are updated as Interactive sessions as soon as a user message is received. The non-interactive sessions are not considered for calculating the billing sessions.

* **Developer interactions** will also be considered for creating conversation sessions but these are marked as different from the user sessions and are not considered for Billing Sessions.

**When does a Conversation Session close?**

* The platform proactively closes inactive sessions after the specified time of inactivity set in the [Manage Sessions ](#manage-sessions)option.
* When the chat window is refreshed ie _“refresh: true”_ is detected.

!!! Note

    **Discard** and **Discard all** commands only stop the ongoing chat and do not end the Conversation Session.

    For **discard all**:

    * The Dialog context, Current and Historic Tags are cleared;
    * The Sentiment Tones are reset

    For **discard**:

    * The current Dialog context will be cleared;
    * The Current Tags will be replaced with the last updated ‘tags’ in the Historic Tags, and the Historic Tags would be cleared

    
**What happens when a Conversation Session closes?**

* Post-session closure, the following information or variables will be cleared:
    * Conversation session;
    * App User Session (developer-defined variables without custom TTL)
    * Dialog Context (Topic File and Conversation Details)
    * If configured, before closing the conversation session, the platform will proactively send a session closure message to the users on supported channels.

* For “_refresh: true_”:
    * Complete session information is cleared;
    * A new conversation session is created.