# View Customized Events

## BEFORE_VIEW_INIT

You can customize the chat window by listening to various events. For example, you can modify the view before it is initialized.

`BEFORE_VIEW_INIT` is the generic event for all the elements that are going to render in the DOM.

The `BEFORE_VIEW_INIT` event delivers an HTML response and a payload before they are rendered in the Agent AI widget. This event allows us to customize the data and behavior for each individual event within the widget, enabling tailored content and functionality based on specific needs.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
       //customize individual events if required
});
```

## MAIN_CONTAINER

The main container element houses all widget tabs.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'MAIN_CONTAINER'){
       	 // Customize the main container if required.
   	   }
});
```

## RUN_CLICK_EVENT    

This event get triggers when the Run button is clicked on the dialog.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'RUN_CLICK_EVENT'){
       	// Capture Run click event
   	}
});
```

## TAB_CHANGE_EVENT

This event triggers when you click the footer tabs.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'TAB_CHANGE_EVENT'){
       	// Capture Tab click event
   	}
});
```

## THEME_CHANGE_EVENT

This event triggers when you click on the theme button.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'THEME_CHANGE_EVENT'){
       	// Capture Theme button click event
   	}
});
```

## SETTINGS_CLICK_EVENT

This event triggers when you click on the Settings icon on header.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SETTINGS_CLICK_EVENT'){
       	// Capture Settings button click event
   	}
});
```

## SEARCH_EVENT

This event triggers when clicking on Search icon on the header.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SEARCH_EVENT'){
       	// Capture Search Enter event
   	}
});
```

## HEADER_TEMPLATE

This event allows customization of header elements.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'HEADER_TEMPLATE'){
       	//customize html if required
   	}
});
```

## FOOTER_TEMPLATE

This event allows you to customize (icons, text font, style, and color) the footer elements i.e., Search, Transcript, and Assist.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'FOOTER_TEMPLATE'){
       	//customize html if required
   	}
});
```

**Note:** To hide the footer:

```
.agentassist-widget-main-chat-container-wrapper .widget-footer-wrapper {
    display: none !important;
}
```