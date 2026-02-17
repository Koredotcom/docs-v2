# MYBOT TAB SECTION

## MYBOT_EMPTY_TEMPLATE

Displays an empty message when the My AI Agent (Bot) tab holds no data, i.e. no dialog execution happens in My AI Agent (Bot).

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'MYBOT_EMPTY_TEMPLATE'){
       	// Customize MyBot empty template if required.
   	   }
});
```

## MYBOT_HEADER_LEFT_SECTION

 Displays the dialog name and step name during dialog execution.

```
 aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'MYBOT_HEADER_LEFT_SECTION'){
       	// Customize the left section of the MyBot header if required.
   	   }
});
```

## MYBOT_HEADER_RIGHT_SECTION

Contains buttons for List View and Terminate in the Right Section.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'MYBOT_HEADER_RIGHT_SECTION'){
       	// Customize the right section of the MyBot header if required.
   	   }
});
```