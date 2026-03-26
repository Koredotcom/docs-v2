# Conversation Tray

The conversation tray helps agents track their workload by displaying all conversations that are assigned to them.  
<img src="../images/conversation-tray.png" alt="Conversation Tray" title="Conversation Tray" style="border: 1px solid gray; zoom:80%;">

## Conversation Status

The conversation tray divides conversations into different statuses, which appear at the top. Conversations can have any of the following four statuses:

* **Overdue**: These are conversations where the agent hasn't responded to the customer within the system-specified time.
* **Ongoing**: These are conversations where the last sent or received message was within the system-specified time.
* **Idle**: These conversations have a last message sent or received beyond the system-specified time threshold.
* **After Call Work (ACW)**: ACW refers to the post-call tasks or activities that agents perform immediately after ending a conversation with a customer.  
    <img src="../images/conversation-status.png" alt="Conversation Status" title="Conversation Status" style="border: 1px solid gray; zoom:60%;">

## Incoming Conversation Types

Distinct icons for each communication channel verify clarity and better interaction handling. Unique visual identifiers and tooltips for each interaction type support faster recognition and decision-making.  

<img src="../images/voice-call.png" alt="Voice Call" title="Voice Call" style="border: 1px solid gray; zoom:70%;">  

<img src="../images/courtesy-callback.png" alt="Courtesy Callback" title="Courtesy Callback" style="border: 1px solid gray; zoom:70%;">  

<img src="../images/voice-chat.png" alt="Voice Chat" title="Voice Chat" style="border: 1px solid gray; zoom:70%;">  

<img src="../images/voice-mail.png" alt="Voice Mail" title="Voice Mail" style="border: 1px solid gray; zoom:70%;">  

<img src="../images/email.png" alt="Email" title="Email" style="border: 1px solid gray; zoom:70%;"> 

<img src="../images/click-to-call.png" alt="Click to Call" title="Click to Call" style="border: 1px solid gray; zoom:70%;"> 

## Color Codes

Color codes help in easy identification and better readability of conversations on digital channels.

* The blue dot indicates a conversation where an agent is actively engaged.
    <img src="../images/blue-dot.png" alt="Blue Dot" title="Blue Dot" style="border: 1px solid gray; zoom:70%;">

* The red dot represents an overdue conversation.
    <img src="../images/red-dot.png" alt="Red Dot" title="Red Dot" style="border: 1px solid gray; zoom:50%;">

* New email conversations in the conversations tray.
    <img src="../images/new-email.png" alt="New Email Notification" title="New Email Notification" style="border: 1px solid gray; zoom:50%;">

## Search Conversations

The Search functionality lets agents to find customer conversations by phone number, email, or name. Located on the left side of the Agent Console within the conversation tray, this feature improves efficiency and reduces case handling time.  
<img src="../images/search-bar-tray.png" alt="Conversation Tray Search Bar" title="Conversation Tray Search Bar" style="border: 1px solid gray; zoom:80%;">  

### Using the Search Functionality

* Start typing a phone number, email address, or customer name in the search field, and matching results appear automatically. Select any result to open that conversation.  
    <img src="../images/search-name.png" alt="Search Name" title="Search Name" style="border: 1px solid gray; zoom:80%;">  

* A "No results found" message appears if no matches exist.  
    <img src="../images/no-results.png" alt="No Results" title="No Results" style="border: 1px solid gray; zoom:80%;">  

!!! Notes

    * The search functionality supports names in all languages configured in the system.
    * This feature is enabled by default for all agents and only returns active conversations based on your input.

## Customer Sentiment

Digital conversations display the customer's real-time sentiment. This enables agents to handle conversations better. For example, a customer may be unhappy because they have been waiting for a response from an agent for a long time.  
    <img src="../images/sentiment-conversation-tray.png" alt="Sentiment" title="Sentiment" style="border: 1px solid gray; zoom:80%;"> 

## Conversation Information

This section displays data about the conversations you are handling.

Each entry in this tray includes the following information:

* Customer Name (if available)
* Skills identified based on customer intent
* The last exchange in the conversation
* Customer profile picture
* Interaction channel icon
* Conversation status icon.  
    <img src="../images/conversation.png" alt="Conversation" title="Conversation" style="border: 1px solid gray; zoom:80%;">

## Manual Call using the Dialer

You can use the Dialer to call external contacts, as follows:

1. Select the **+** icon on the Conversation Tray and select **Outbound Call**.  
    <img src="../images/initiate-outbound-call.png" alt="Outbound call" title="Outbound Call" style="border: 1px solid gray; zoom:70%;">

2. To initiate an outbound call using the **Dialer** tab, select the country, dial any phone number, and select the **Call** icon.  
    <img src="../images/outbound-call-dialer.png" alt="Outbound Call Dialer" title="Outbound Call Dialer" style="border: 1px solid gray; zoom:70%;">

3. The **Contacts** tab is a public directory (published by Administrators using [Public APIs](../apis/contact-center/create-a-contact-by-giving-details.md)) where you can view saved contacts - **Name** and **Phone Number**.
4. You can search for a specific name and select **Call** to initiate an Outbound Call with the selected contact.  
    <img src="../images/contacts.png" alt="Contacts" title="Contacts" style="border: 1px solid gray; zoom:70%;">

## Call History

To view the Outbound Call History, follow these steps:

1. Select the **+** icon to open the **Outbound Call** window.
2. Select the **Call History** tab to view the following:
    * Name
    * Phone Number
    * Day
    * Date
    * Time of call and duration
    * Type of call (Incoming, Outgoing, or Transferred)  
        <img src="../images/call-history.png" alt="Call History" title="Call History" style="border: 1px solid gray; zoom:80%;">

!!! note "Call History Tab"
 
    Agents can see only the calls they dial, receive, or have transferred to them in the Call History tab.