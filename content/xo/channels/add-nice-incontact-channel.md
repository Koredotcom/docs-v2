--8<-- "includes/digital-channels-back-link.md"

# Adding Nice inContact as a Channel

The Platform supports Nice inContact as a channel for integrating an AI Agent with the NiceCXone Chat Automation platform for creating a rich and synchronous messaging experience for the end users.


## Types of Nice inContact Channel

The Nice inContact as a Channel supports two chat interaction modes, **DFO** and **Legacy Chat**.

**DFO** supports plain text messages, digital forms, and rich text elements such as message formatting, links, and templates.

The **Legacy Chat** supports only plain text messages. Digital forms and rich text elements like message formatting, templates, and links are not supported.

Select the chat interaction mode on the **Channels & Flows** > **Channels** > **Digital** > **All** > **Nice inContact** > **Instructions** tab.
By default, DFO is selected.

<img src="../images/nice-in-contact-img1.png" alt="Instructions tab" title="Instructions tab" style="border: 1px solid gray; zoom:60%;">

## Prerequisites

The following are prerequisites for adding Nice inContact as a Channel on the XO Platform:

* Access to Nice CXone Portal,
* Access to the XO Platform,
* Ensure that the Nice inContact is enabled as a channel on the Platform,
* Nice inContact Channel Studio Script,
* Keep the Webhook URL and Client ID values handy.


## Enable Nice inContact as a Channel on the XO Platform

Perform the following steps to enable Nice inContact as a channel, download the Studio Script, and get the Webhook URL and client ID from the XO Platform.

1. Login to the Platform and navigate to **Channels & Flows** > **Channels** > **Digital** > **All** > **Nice inContact** > **Configurations**.  
<img src="../images/nice-in-contact-img2.png" alt="Configurations" title="Configurations" style="border: 1px solid gray; zoom:60%;">

2. On the Configurations tab, Click **Download File** to download the Studio Script.

    !!! Note

        * The downloaded studio script varies based on the selected chat mode. The Scripts are not interchangeable between Legacy Chat and DFO modes.
        * Avoid altering the downloaded script; it could affect the channel’s communication ability.

3. Select an application from the dropdown list to view the Client ID and other fields. If an application is not available, Click **Create App** to create it. For more information, see the [Add Web/Mobile Client Channel](./add-web-mobile-client.md).  
<img src="../images/nice-in-contact-img3.png" alt="Nice InContact Configurations" title="Nice InContact Configurations" style="border: 1px solid gray; zoom:60%;">

4. In the Enable channel, select **Yes** and then click **Save**. The configuration saved success message is displayed.  
<img src="../images/nice-in-contact-img4.png" alt="Nice InContact Configuration saved" title="Nice InContact Configuration saved" style="border: 1px solid gray; zoom:60%;">

## Configure Nice inContact

Steps to configure the Nice inContact as a channel – **DFO**:

1. [Step 1 (Common): Install Nice Studio](#step-1-common-install-nice-studio)
2. [Step 2 (Common): Import the Studio Script and Create a Custom Exchange EndPoint](#step-2-common-import-the-studio-script-and-create-a-custom-exchange-endpoint)
3. [Step 3 (for DFO): Create the Chat Point of Contact](#step-3-for-dfo-create-the-chat-point-of-contact)
4. [Step 4 (for DFO): Create the Digital Routing Queue for the Agent Transfer](#step-4-for-dfo-create-the-digital-routing-queue-for-the-agent-transfer)

Steps to configure the Nice inContact as a channel – **Legacy Chat**:



1. [Step 1 (Common): Install Nice Studio](#step-1-common-install-nice-studio)
2. [Step 2 (Common): Import the Studio Script and Create a Custom Exchange EndPoint](#step-2-common-import-the-studio-script-and-create-a-custom-exchange-endpoint)
3. [Step 3 (for Legacy Chat): Create the Chat Point of Contact](#step-3-for-legacy-chat-create-the-chat-point-of-contact)
4. [Step 4 (for Legacy Chat): Enabling the Agent Transfer](#step-4-for-legacy-chat-enabling-the-agent-transfer)


### Step 1 (Common): Install Nice Studio

1. Log into the [Nice CXone](https://na1.nice-incontact.com/login) Portal.
2. Click the **profile icon** in the top right corner and then click **Support & Downloads**. The download page is displayed.  
<img src="../images/nice-in-contact-img5.png" alt="Download page" title="Download page" style="border: 1px solid gray; zoom:60%;">

3. In the **Studio** section, download **Studio Installer** to download the Nice inContact **StudioSetup.exe** file.  
<img src="../images/nice-in-contact-img6.png" alt="Download Studio installer" title="Download Studio installer" style="border: 1px solid gray; zoom:60%;">

4. Launch the **StudioSetup.exe** and install **Nice inContact Studio**. Log into **Nice inContact Studio** using NiceCXone portal login credentials.


### Step 2 (Common): Import the Studio Script and Create a Custom Exchange EndPoint

1. In the Nice Studio, click **File > Import from File**.  
<img src="../images/nice-in-contact-img7.png" alt="File - Import from File" title="File - Import from File" style="border: 1px solid gray; zoom:60%;">

2. Select the Studio Script downloaded from the XO platform and then click **Open**. For example, **Chat_Script.XML**.  
<img src="../images/nice-in-contact-img8.png" alt="Open Studio Script file" title="Open Studio Script file" style="border: 1px solid gray; zoom:60%;">

3. In the displayed script, double-click either of the **Text Box Exchange**; For example, in the Chat_Script, double-click Textbot Exchange.  
<img src="../images/nice-in-contact-img9.png" alt="Double click Text Box exchange" title="Double click Text Box exchange" style="border: 1px solid gray; zoom:60%;">

4. The AI Agent page is displayed. Click **Add Bot**.  
<img src="../images/nice-in-contact-img10.png" alt="Add bot" title="Add bot" style="border: 1px solid gray; zoom:60%;">  

5. On the General Information page, type in the bot name, select **Custom Exchange Endpoint**, and click **Next**.  
<img src="../images/nice-in-contact-img11.png" alt="Custom Exchange endpoint" title="Custom Exchange endpoint" style="border: 1px solid gray; zoom:60%;">

6. On the Bot Configuration page, fill in the details as shown and then click **Next**.  

    1. Select the **Integration Version** as **3.0.0** from the dropdown list.  
    <img src="../images/nice-in-contact-img12.png" alt="Integration version - 3.0.0" title="Integration version - 3.0.0" style="border: 1px solid gray; zoom:60%;">

    2. Paste the **Webhook URL**.
    3. Under the Customer Headers, click **Add Custom Headers**.
    4. Type “Authorization” in the Name field and “Bearer (client ID)” in the Value field.  
    <img src="../images/nice-in-contact-img13.png" alt="Custom headers" title="Custom headers" style="border: 1px solid gray; zoom:60%;">

7. On the Voice page, in the voice integration options, select **Text Only (No Voice Support)** and click **Next**.  
<img src="../images/nice-in-contact-img14.png" alt="Integration options - Text Only" title="Integration options - Text Only" style="border: 1px solid gray; zoom:60%;">

8. On the **Test + Add** page, click **Add**.  
<img src="../images/nice-in-contact-img15.png" alt="Test + Add" title="Test + Add" style="border: 1px solid gray; zoom:60%;">

9. The bot saved success message is displayed.  
<img src="../images/nice-in-contact-img16.png" alt="Bot is successfully saved" title="Bot is successfully saved" style="border: 1px solid gray; zoom:60%;">

10. Click **Close**. The Nice inContact script is displayed.
11. Double-click the other **Text Bot Exchange Configuration**. The AI Agent page is displayed.  
<img src="../images/nice-in-contact-img17.png" alt="AI Agent page" title="AI Agent page" style="border: 1px solid gray; zoom:60%;">

12. Click the right tick mark next to the created bot. The “Select this bot for this Studio action?” pop-up is displayed.  
<img src="../images/nice-in-contact-img18.png" alt="Select bot for studio action" title="Select bot for studio action" style="border: 1px solid gray; zoom:60%;">

13. Click **Yes** and then click **Close**.
14. In the Nice inContact Studio, go to file and **Save** the script.  
<img src="../images/nice-in-contact-img19.png" alt="Save the script" title="Save the script" style="border: 1px solid gray; zoom:60%;">


### Step 3 (for DFO): Create the Chat Point of Contact

To Interact with the AI Agent in Nice Channel, create a chat POC.

1. Log into the [Nice CXone](https://na1.nice-incontact.com/login/#/logout?autoLogout=true) Portal.
2. Click the **Applications** icon in the top left corner. Under **Omnichannel Routing**, click **ACD**.  
<img src="../images/nice-in-contact-img20.png" alt="Omnichannel Routing - ACD" title="Omnichannel routing - ACD" style="border: 1px solid gray; zoom:60%;">

3. In the left-side vertical menu, under **DFO**, click **Point of Contact Digital**.  
<img src="../images/nice-in-contact-img21.png" alt="DFO - Point of Contact Digital" title="DFO - Point of Contact Digital" style="border: 1px solid gray; zoom:60%;">

4. In the **Add Channel** section, click **Chat**. The My Channels page is displayed.  
<img src="../images/nice-in-contact-img22.png" alt="My Channels" title="My Channels" style="border: 1px solid gray; zoom:60%;">

5. Click **Create Messaging Channel**, type in the channel name, and click **Create**.  
<img src="../images/nice-in-contact-img23.png" alt="Create messaging channel" title="Create messaging channel" style="border: 1px solid gray; zoom:60%;">

6. The created channel is displayed.  
<img src="../images/nice-in-contact-img24.png" alt="Channel displayed" title="Channel displayed" style="border: 1px solid gray; zoom:60%;">


### Step 4 (for DFO): Create the Digital Routing Queue for the Agent Transfer

1. Log into the [Nice CXone](https://na1.nice-incontact.com/login/#/logout?autoLogout=true) Portal.
2. In the left-side vertical menu, under **DFO**, click **Routing Queues**. All the available queues are displayed.  
<img src="../images/nice-in-contact-img25.png" alt="Queues" title="Queues" style="border: 1px solid gray; zoom:60%;">

3. Click **Add Queue**, type in the queue name for the Routing Queue, and then click **Save**.  

    !!! Note
    
        Depending on the account type and the number of queues created, the system might hide the “create queue” option.

4. Click **Filters** and then click **Add routing queue filter**.  
<img src="../images/nice-in-contact-img26.png" alt="Filters - Add Routing queue filter" title="Filters - Add routing queue filter" style="border: 1px solid gray; zoom:60%;">

5. Type in the **Filter Name** and click **Save**.  
<img src="../images/nice-in-contact-img27.png" alt="Filter name" title="Filter name" style="border: 1px solid gray; zoom:60%;">

6. The Condition Type page is displayed.  
<img src="../images/nice-in-contact-img28.png" alt="Condition type" title="Condition type" style="border: 1px solid gray; zoom:60%;">

7. Click **Create condition for selected type**. All Channels page is displayed.  
<img src="../images/nice-in-contact-img29.png" alt="All Channels" title="All Channels" style="border: 1px solid gray; zoom:60%;">

8. Search the **created channel** and click the respective **Add**, For example, Channel. The selected channel is displayed.  
<img src="../images/nice-in-contact-img30.png" alt="Add the created channel" title="Add the created channel" style="border: 1px solid gray; zoom:60%;">

9. In the left-side vertical menu, under **DFO**, click **Point of Contact Digital**.
10. Search the **created channel** and click the respective **Edit**.  
<img src="../images/nice-in-contact-img31.png" alt="Edit the channel" title="Edit the channel" style="border: 1px solid gray; zoom:60%;">

11. Select the created **Studio Script** from the **Select Studio Script** dropdown and **Skill** from the **Select Default Skills** dropdown.  
<img src="../images/nice-in-contact-img32.png" alt="Select Studio script" title="Select Studio script" style="border: 1px solid gray; zoom:60%;">

12. Click **Save**. The channel saved success message is displayed.

You may go to **DFO > Point of Contact Digital > Chat > My Channels** and click **Initialization & Test** to test an AI Agent.


### Step 3 (for Legacy Chat): Create the Chat Point of Contact 

To interact with the AI Agent in the Nice InChannel, the developer must create a Chat Skill and Chat Point of Contact. The Point of Contact triggers the Studio Script associated with the AI Agent.

1. Create a Campaign.  

    1. Log into the [Nice CXone](https://na1.nice-incontact.com/login/#/logout?autoLogout=true) Portal. In the **Applications** menu in the top left corner, under **Omnichannel Routing**, click **ACD** (Automatic Call Distribution).  
    <img src="../images/nice-in-contact-img33.png" alt="Omnichannel routing - ACD" title="Omnichannel routing - ACD" style="border: 1px solid gray; zoom:60%;">

    2. In the left-side vertical menu, click **Contact Settings** and then click **Campaigns.** The Campaigns page is displayed.
    3. Click **Create New** to create a Campaign.  
    <img src="../images/nice-in-contact-img34.png" alt="Create new campaign" title="Create new campaign" style="border: 1px solid gray; zoom:60%;">

    4. Type in the campaign name and click **Create Campaign**.  
    <img src="../images/nice-in-contact-img35.png" alt="Create campaign" title="Create campaign" style="border: 1px solid gray; zoom:60%;">

    5. The success message is displayed.

2. Create A skills.  

    1. In the left side vertical menu, under **Contact Settings**, click **ACD Skills > Create New > Single Skill**.  
    <img src="../images/nice-in-contact-img36.png" alt="Create new single skill" title="Create new single skill" style="border: 1px solid gray; zoom:60%;">

    2. In the Skill Information section, in the **Media Type** dropdown, select **Chat**.  
    <img src="../images/nice-in-contact-img37.png" alt="Media type - Chat" title="Media type - Chat" style="border: 1px solid gray; zoom:60%;">

    3. Type in the **Skill Name**, and select the created campaign from the **Campaign** dropdown.
    4. In the **Transferred to Script** dropdown, select the script and click **Create**.
    5. The skills created success message is displayed.

3. Create a Point of Contact.  

    1. In the left side vertical menu, under **Contact Settings**, click **Point of Contact > Create New > Single Point of Contact**.
    2. Enter the Point of Contact Information.  
    <img src="../images/nice-in-contact-img38.png" alt="Contact settings" title="Contact settings" style="border: 1px solid gray; zoom:60%;">

        1. In the **Media Type** dropdown, select **Chat**.
        2. Type in the **Point of Contact** name.
        3. Select the created **Skill** and **Script** from the respective dropdown.
        4. Click **Create Point of Contact**.
        5. The success message is displayed.  
        
        <img src="../images/nice-in-contact-img39.png" alt="Point of contact is created" title="Point of contact is created" style="border: 1px solid gray; zoom:60%;">


You can use the generated **Point of Contact** link to test the AI Agent.


### Step 4 (for Legacy Chat): Enabling the Agent Transfer

1. In the Nice Studio > Chat Script, right-click the **Reqagent** action.  
<img src="../images/nice-in-contact-img40.png" alt="Chat script" title="Chat script" style="border: 1px solid gray; zoom:60%;">

2. Under the **Properties** section, in the **TargetAgent** dropdown, select the user/group to route the agent request.  
<img src="../images/nice-in-contact-img41.png" alt="Select user/group to route request" title="Select user/group to route request" style="border: 1px solid gray; zoom:60%;">

3. Save the script.