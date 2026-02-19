# Other Events

This section contains additional functionality events.

## FEEDBACK FOR (DIALOGS, SUGGESTIONS, SUMMARY)

### FEEDBACK_WRAPER_TEMPLATE

Contains like/dislike buttons for each suggestion and automation for placeholder.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'FEEDBACK_WRAPER_TEMPLATE'){
       	// Customize feedback wrapper template if required.
   	   }
});
```

### HELPFUL_FEEDBACK_TEMPLATE

Contains a thumbs-up icon to provide feedback on all suggestions.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'HELPFUL_FEEDBACK_TEMPLATE'){
       	// Customize helpful feedback template if required.
   	   }
});
```

### NEGATIVE_FEEDBACK_TEMPLATE

Contains a container for the suggestions list and a comment box for detailed context.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'NEGATIVE_FEEDBACK_TEMPLATE'){
       	// Customize negative feedback template if required.
   	   }
});
```

### FEEDBACK_TOAST_TEMPLATE

Confirms and displays a **toast message** that the feedback was received when clicking the thumbs-up icon or submitting after selecting the thumbs-down icon.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'FEEDBACK_TOAST_TEMPLATE'){
       	// Customize feedback toast template if required.
   	   }
});
```

### SUMMARY_TEMPLATE_ASSIST

Customizes the Summary element in the Assist tab as needed. Use this event like the overlay, but display it in the Assist tab only when the Agent submits or closes the summary. 

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SUMMARY_TEMPLATE_ASSIST'){
       	//customize html if required
   	}
  });
```

<img src="../images/summary-template-assist.png" alt="web-sdk-channel" title="summary-template-assist" style="border: 1px solid gray; zoom:80%;"/> 

## SCROLL BTNS IN ASSIST AND MY AI Agent (Bot)

Contains scroll buttons in the Assist and My AI Agent (Bot) tabs when the tab view becomes overflow (on scroll). These buttons include up and down arrows located on the widget tabs. 

**Note:** Scroll buttons the view upwards or downwards accordingly. A hover effect is also applied to the scroll buttons.

### SCROLL_UP_BTN

Displays a **Scroll Top** button when content exists above the scroll position. Scrolls the button to the top of the assist tab.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'SCROLL_UP_BTN'){
       	// Customize the scroll up button if required.
   	   }
});
```

### SCROLL_DOWN_BTN

Displays a **Scroll Bottom** button when content exists above the scroll position. Scrolls the button to the top of the assist tab.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'SCROLL_DOWN_BTN'){
       	// Customize the scroll down button if required.
   	   }
});
```

## LOADERS

### MAIN_LOADER

Displays the main loader during widget initialization, i.e., before landing on the default view.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'MAIN_LOADER'){
       	// Customize main loader component if required.
   	   }
});
```

### INDIVIDUAL_LOADER

Displays a loader when clicking the **Override Mode** button and entering values during agent-AI Agent interaction.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'INDIVIDUAL_LOADER'){
       	// Customize individual loader component if required.
   	   }
});
```

### NETWORK_ERROR_TOASTR

Displays a toast message at the top of the widget for network-related errors. Handle events associated with the network error toast template.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'NETWORK_ERROR_TOASTR'){
       	// Customize network error toast template if required.
   	   }
});
```

## COMMON SEND AND COPY EVENTS (SEARCH, MY AI Agent (Bot), ASSIST)

### Send and Copy Events

These events are provided when the Agent clicks on the Send or Copy button on an AI Agent message. You can customize the Send and Copy elements.

The following are the events for Send and Copy:

- AGENT_SEND_MESSAGE
- AGENT_COPY_MESSAGE

### AGENT_SEND_MESSAGE

Provides access to customize the Send button.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'AGENT_SEND_MESSAGE'){
       	//customize html if required
		// {data, msg, template}
   	}
});
```

### AGENT_COPY_MESSAGE
	
Provides access to customize the Copy button.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'AGENT_COPY_MESSAGE'){
       	//customize html if required
              // {data, msg, template}

   	}
});
```

### SENT_BUTTON_TEMPLATE

Displays the sent text while clicking the **Send** or **Copy** button.

**Note:** An event emits to display "Sent" above the entity and message nodes.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'SENT_BUTTON_TEMPLATE'){
       	// Customize sent button template if required.
   	   }
});
```

## Summary Events

Provides an overview of the conversation between the User and the Agent. It lets the Agent to retrieve the details of the overall conversation at the end of the conversation.

The following multiple events are for customization for the Summary:

- CONVERSATION_SUMMARY_TEMPLATE
- SUMMARY_TEMPLATE_ASSIST

### CONVERSATION_SUMMARY_TEMPLATE

Customizes the Summary overlay element where the overall conversation summary is displayed. 

**Note:** You can customize the summary overlay popup using this event.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'CONVERSATION_SUMMARY_TEMPLATE'){
       	//customize html if required
   	}
});
```
<img src="../images/conversation-summary.png" alt="web-sdk-channel" title="conversation-summary" style="border: 1px solid gray; zoom:80%;"/> 

## End of Conversation

Terminates the current conversation and retrieves a summary according to the specified configuration.

```
 aaWindowInstance.endOfConversation();
```

## Destroy the SDK

This event closes the socket connection and remove the widget's HTML content that was already loaded in the DOM (Document object model).

```
 aaWindowInstance.destroy();
```