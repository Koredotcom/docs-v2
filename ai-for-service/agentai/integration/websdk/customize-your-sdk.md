# SDK Customization

This section details the customizable events with instructions to customize them. It includes examples to demonstrate the customization process, which help you know how to effectively implement changes to the events. This information serves as a practical resource for tailoring the events to your requirements.

## Connection and Event handling

### Socket Connection Success

This event allows you to perform all necessary actions after the socket connection is established. It also enables you to execute additional tasks or trigger methods for further processing.

```
aaWindowInstance.on('ON_SOCKET_CONNECTION', (configOptions) => {
  console.log('Connected:', configOptions);
});
```

### Listen to AI Agent responses

This event allows you to perform all necessary actions after the socket connection is established. It also enables you to execute event listening tasks for further processing.

```

aaWindowInstance.on('AGENT_AI_RESPONSE', (response) => {
  console.log('Bot Response:', response);
});
```

### Error Message Listener

The `ON_ERROR` event triggers for errors occurring during the SDK execution. It enables clients to handle errors gracefully by listening for the event and implementing custom error-handling logic. The SDK monitors all critical operations, such as API calls, WebSocket connections, or DOM manipulations. If an error is detected, the SDK triggers the `ON_ERROR` event with relevant error details.

Clients can subscribe to this event and define a callback function to handle the error as per their application's requirements.


```
aaWindowInstance.on('ON_ERROR', (error) => {
  console.error('SDK Error:', error);
});
```

## Tabs Enable/Disable Section

The dskSettings object configures the desktop settings for a widget, specifically defining the behavior and visibility of tabs within the widget.

```

botOptions.dskSettings = {
  tabs: [
    { type: 'mB', title: 'My Bot', default: false, isEnabled: true },
    { type: 'ast', title: 'Assist', default: true, isEnabled: true },
    { type: 'srch', title: 'Search', default: false, isEnabled: true }
  ]
};
```

| Name       | Type              | Definition                                                                 | Example                                        |
|------------|------------------|---------------------------------------------------------------------------|------------------------------------------------|
| `tabs`     | Array of objects | Defines the list of tabs in the widget, along with their individual settings. Each object represents a tab. | `[ { type: 'mB', title: 'My Bot', default: false, isEnabled: true } ]` |
| `type`     | String           | Unique identifier for the tab, used internally for tab management.        | `'mB'`, `'ast'`, `'srch'`, `'trnspt'`, `'cl'`  |
| `title`    | String           | The display name of the tab, shown in the widget's UI.                    | `'My Bot'`, `'Assist'`, `'Search'`, `'Transcript'`, `'PlayBook'` |
| `default`  | Boolean          | Determines if this tab is the default active tab when the widget loads. Only one tab should be true. | `true`, `false` |
| `isEnabled`| Boolean          | Controls tab visibility in the widget. `true`: visible, `false`: hidden.  | `true`, `false` |


**Behavior Summary**

- `isEnabled`: true appears in the widget. False will be hidden.

- `default`: true is active tab when the widget is first loaded.

**Note:**

- The type acts as an internal key and must be unique across all tabs.

- Default Tab Conflict: Ensure only one tab has default: true;

- Dynamic Updates: Tabs can be dynamically enabled or disabled by updating the dskSettings object and reinitializing the widget if necessary.

- If Desktop Settings updated, then the new changes will reflect only after changing conversationId (new Conversation).


## Widget Footer Tabs

The Agent AI widget features multiple tabs in the footer section - **Assist**, **My AI Agent (Bot)**, **Library**, and **Transcript** tabs - each serves a distinct purpose. Kore.ai is currently the offering **Search**, **Transcript**, and **Assist** tabs. However, the **Assist** tab consists only the search results. At this stage, Kore provides essential features like the search functionality for agents and transcriptions for voice conversations in the **Transcript** tab.

## Handling Messages

**sendUserMessage(data)**—Sends a user message to the chat window and initiates a socket request. `data` (Object): The message data object containing author information and message content.

**Description**

| Name          | Type      | Definition                          | Example      |
|--------------|----------|----------------------------------|--------------|
| `id`         | String   | Unique identifier for the author | `"12345"`    |
| `type`       | `'USER'` | Type of the author (must be 'USER') | `"USER"`     |
| `firstName`  | String   | Author's first name              | `"John"`     |
| `lastName`   | String   | Author's last name               | `"Doe"`      |
| `author`     | `Author` | Author information               | `{ id: '12345', type: 'USER', firstName: 'John', lastName: 'Doe' }` |
| `message`    | String   | Message content (will be processed and sent through the WebSocket connection)                 | `"Hello!"`   |


**Request sample**

```
aaWindowInstance.sendUserMessage({
  author: { id: "user123", type: 'USER', firstName: "John", lastName: "Doe" },
  message: "Hello!"
});
```  

**sendAgentMessage(data)**

Sends an agent message to the chat window and initiates a socket request.

**Description**

| Name         | Type      | Definition                            | Example                                          |
|-------------|----------|------------------------------------|--------------------------------------------------|
| `id`        | String   | Unique identifier for the agent    | `"agent123"`                                     |
| `type`      | `'AGENT'`| Type of the author (must be 'AGENT') | `"AGENT"`                                        |
| `firstName` | String   | Agent's first name                 | `"Jane"`                                         |
| `lastName`  | String   | Agent's last name                  | `"Smith"`                                        |
| `author`    | `Author` | Agent information                  | `{ id: 'agent123', type: 'AGENT', firstName: 'Jane', lastName: 'Smith' }` |
| `message`   | String   | Message content                    | `"How can I help you today?"`                    |


**Request sample**

```
aaWindowInstance.sendAgentMessage({
  author: { id: "agent123", type: 'AGENT', firstName: "Jane", lastName: "Smith" },
  message: "How can I assist you?"
});
``` 

## Error Handling

Error handling validates the input data format before sending. Invalid data structure results an error being thrown.

**Response**

This method triggers a WebSocket event and the response will be handled by the socket message listeners.

## Pop-up settings

This event includes agent-specific options such as proactive mode, autoscroll, and a Help & Support section that provides access to documentation, FAQs, and KoreAcademy links.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'SETTINGS_TEMPLATE'){
       	// Customize settings template if required.
   	   }
});
```

## Click Events for Footer Tabs

This SDK provides the capability to customize the “click” functionality for the footer tabs, where they can customize each tab.

## Theme Selection in the Widget

This feature allows theme customization for the widget.

### Theme Icon

The theme icon is located in the top-right corner of the widget. Users can click this icon to select their preferred theme.

### THEME_CHANGE_EVENT

This event triggers when you click on the theme button.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'THEME_CHANGE_EVENT'){
       	// Capture Theme button click event
   	}
});
```

### Theme Persistence

There are two type of themes available to select:

- Dark theme
- Light theme

**Behavior**

- The selected theme is saved in the local storage.
- Upon reloading the application, the same theme is automatically applies without any user assistance.

**Customization**

Theme-related DOM elements are available in the header template for additional customization.

## Proactive Mode Functionalities

The Proactive Mode includes the following functionalities:

- **Global control**—This feature contains a toggle switch to enable or disable Proactive mode to provide centralized control over all Proactive mode functionalities.

- **Proactive Suggestions for Dialog Tasks**—This feature provides a separate setting specifically for controlling proactive suggestions for dialog tasks. This setting is available within the widget's Settings configuration under the child toggle called as **Automatic Dialog Task Entity Extraction**.

## Automatic Dialog Task Entity Extraction

This feature automatically extracts entities from user messages during dialog task execution using a toggle button.

When toggle button is:

- **Disabled**—The dialog task entities will not be detected ot extracted automatically and other proactive functionalities will remain unaffected.
- **Enabled**—The dialog task entities will be automatically detected and extracted.

## User interface (UI) override option

This feature allows user interface to follow the exact user experience (UX) implementation as in My AI Agent (Bot). This feature does not require any changes to the existing design.

### PROACTIVE_CLICK_EVENT

This event triggers when you click on theme the button.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'PRO_ACTIVE_CHANGE'){
       	// Capture proactive button click event
   	}
});
```

## Disable the widget

This method disables the widget. Note that when you disable the widget, you can still see the widget but cannot interact with it.

```
aaWindowInstance.disableWidget(true/false);
```

### Disable the widget banner

Use this feature to disable widget for a specific channel in the configuration page. The widget disabled banner is displayed at runtime on the top of the widget. It appears for a specific channel in the Agent AI settings configuration.

This banner notify users that the widget is currently non-functional due to configuration settings and how to contact the Agent AI admin for assistance.

**Banner details**

*  **Title**—Widget Disabled
*  **Message**—Agent AI Settings configuration are Disabled! Please reach out to Agent AI Admin.
