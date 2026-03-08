# Dialog Execution

Dialog flow can continue in the list view by providing values from the user or agent.

## DIALOG_WRAPPER

Contains:

- All entity and message nodes 
- Dialog start/end nodes 
- Feedback
- Interaction elements

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'DIALOG_WRAPPER'){
       	// Customize dialog wrapper if required.
   	   }
});
```

## DIALOG_START_TEMPLATE

Display a dialog start banner when initiating a new dialog.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'DIALOG_START_TEMPLATE'){
       	// Customize dialog start template if required.
   	   }
});
```

## ASK_CUSTOMER_TEMPLATE

Appears in a dialog or as small talk. Emit an event before rendering. Default title: **Ask Customer**.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'ASK_CUSTOMER_TEMPLATE'){
       	// Customize ask customer template if required.
   	   }
});
```

## ATTACHMENT_VIEW

Handles user interface (UI) for uploading files as attachments. Emit an event to manage the attachment template.

```

aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'ATTACHMENT_VIEW'){
       	// Customize attachment view template if required.
   	   }
});
```

## TELL_CUSTOMER_TEMPLATE

Appears in a dialog or as small talk. Emit an event before rendering. Default title: **Tell Customer**.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'TELL_CUSTOMER_TEMPLATE'){
       	// Customize tell customer template if required.
   	   }
});
```

## DIALOG_END_TEMPLATE

Displays dialog-end text and feedback options on termination or completion.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'DIALOG_END_TEMPLATE'){
       	// Customize dialog end template if required.
   	   }
});
```

## TERMINATE_POPUP_TEMPLATE

This event displays a popup with options **Yes, Terminate**, **No, Cancel**, or **Continue with Override Mode**.

## INTERRUPT DIALOG

### INTERRUPT_POPUP_TEMPLATE

It displays an interrupt popup with options when an automation is running and another dialog suggestion is selected.

* **Run Later** add the dialog to the interrupt list.
* **Accept and Run**, **Run Later**, or **Cancel** options to manage active automation.


### INTERRUPT_DROPDOWN_ITEM_TEMPLATE

**Run Later**: Add the dialog to the interrupt list.

### LIST_VIEW_TEMPLATE

**List View** on the assist banner displays previously filled entity nodes.

