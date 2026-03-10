--8<-- "includes/digital-channels-back-link.md"

# Adding the Workplace by Facebook Channel

This channel enablement flow is modified as per the changes implemented by Facebook post v7.2 of the product.

To add the Workplace by Facebook channel to your assistant, you need a developer portal _Facebook_ account to configure the connection between _Facebook Workplace_ and Kore.ai. Kore.ai application must be authorized to send and receive messages from the Workplace by Facebook channel.

## Add the Workplace by Facebook Channel

To complete the following procedure, you must have an admin account in the _Facebook Workplace Developers Portal_ (https://&lt;**_Your Domain_**>workplace.com/work/admin).


1. In the XO Platform, go to **Channels & Flows** > **Channels** > **Digital** > **All**.
2. Click the **Workplace by Facebook** icon.
3. The **Workplace by Facebook Channel** page is displayed.
4. Go to the **Configurations** tab:
    * In the **Communication Mode** section, select one or both of the following:
        * Allow communication with an AI Agent in a Workplace Group
        * Allow communication with an AI Agent through a Work Chat
    * In the **Manage Permissions** section, set the following as per your requirements ([click here for more on the permissions](https://developers.facebook.com/docs/workplace/reference/permissions)):
        * **Message any member** – To send messages to any group member. This permission is selected by default and is mandatory hence not editable.
        * **Mention bot** – Needed when the AI Agent is mentioned in a post, to see the post and to reply to comments. This permission is selected by default and is required for the assistant to respond to users in groups.
        * **Manage group content** – Required to post and comment in groups. This permission is selected by default and is required for the AI Agent to respond to users in groups.
        * **Create link previews** – Needed to see links added to posts in order to display a preview for certain domains.
        * **Read user email** – Required to see any group member’s email address.
        * **Read work profile** – Required to see any group member’s complete profile, including phone number, department, and location.
        * **Read org chart** – Needed to check a group member’s profile to see who they report to and who reports to them;

            !!! note

                You are advised to set the permissions correctly after evaluating the above-mentioned link carefully. Managing the permissions for your AI Agent after installing the Kore.ai application on your workplace account needs you to uninstall the application on the workplace account and re-authorize it in the XO platform.        

5. Click **Authorize**.
![workplace facebook](images/workplace_facebook.png "image_tooltip")

6. You are redirected to Workplace by Facebook page.

7. Log in to your _Facebook Workplace_ admin account.

8. Click **Customize** to provide the following details for the instance of Kore.ai application installed on Workplace by Facebook account:
    * integration logo
    * name
    * description
![facebook admin account](images/workplace_facebook1.png "facebook admin account")
9. The **permissions** needed by the Kore.ai assistant is selected based upon the configuration given in step 4.

10. Select the groups to which the assistant needs to be added and click **Add to Workplace**.

11. Once the instance of Kore.ai application is added to your Workplace by Facebook account, you are redirected to the Kore.ai XO Platform.
![add workplace facebook channel](images/workplace_facebook2.png "add workplace facebook channel")

12. In XO Platform, from the **Configuration** tab, click **Yes** in the **Enable Channel** section; and click **Save**.

The assistant may require your Admin approval and assignment before it is available to any users.
