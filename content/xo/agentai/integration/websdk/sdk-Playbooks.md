
# PlayBooks

The Playbook tab offers structured guidance for handling customer interactions.

##  PLAYBOOK_HEADER_TEMPLATE

This event displays the following header icons for the playbook tab:

* **Bulb Icon**: Displays the count of dynamically triggered playbooks.
* **Default Enabled Playbooks**: Includes the primary and dynamic playbook lists.
* **Proceed to Close Button**: Closes the playbook.
* **Current Running Playbook Name and Step Name**: Displays the playbook details.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_HEADER_TEMPLATE'){
       	//customize html if required
   	   }
});
```

##  PLAYBOOK_BODY_TEMPLATE

Contains the steps configured for the selected playbook and stage.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_BODY_TEMPLATE'){
       	//customize html if required
   	   }
});
```

##  PLAYBOOK_EMPTY_TEMPLATE

Displays a message prompting the agent to select a dynamic playbook when no primary playbooks are enabled.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_EMPTY_TEMPLATE'){
       	//customize html if required
   	   }
});
```

## PLAYBOOK_PRIMARYLIST_TEMPLATE

Displays enabled primary type playbooks.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_PRIMARYLIST_TEMPLATE'){
       	//customize html if required
   	   }
});
```

## PLAYBOOK_DYNAMICLIST_TEMPLATE

Displays enabled dynamic type playbooks.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_DYNAMICLIST_TEMPLATE'){
       	//customize html if required
   	   }
});
```

## PLAYBOOK_STAGE_DROPDOWN_TEMPLATE

Displays the list of stages configured for it.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_STAGE_DROPDOWN_TEMPLATE'){
       	//customize html if required
   	   }
});
```

## PLAYBOOK_TRIGGERED_LIST_TEMPLATE

Displays dynamic playbooks that are triggered dynamically based on agent or user responses.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_TRIGGERED_LIST_TEMPLATE'){
       	//customize html if required
   	   }
});
```

## PLAYBOOK_SEND_EVENT

Triggers when the **Send** button of a specific step in the playbook body is clicked.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_SEND_EVENT'){
       	//customize html if required
   	   }
});
```

## PLAYBOOK_COPY_EVENT

Triggers when the **Copy** button of a specific step in the playbook body is clicked.

```

aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_COPY_EVENT'){
       	//customize html if required
   	   }
});
```

## PLAYBOOK_CONFIRMATION_YES

Triggers when the **Yes** button is clicked of **Yes/No** button for a specific step by the agent.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_CONFIRMATION_YES'){
       	//customize html if required
   	   }
});
```

## PLAYBOOK_CONFIRMATION_NO

Triggers when the **No** button is clicked of **Yes/No** button for a specific step by the agent.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'PLAYBOOK_CONFIRMATION_NO'){
       	//customize html if required
   	   }
});
```

## PLAYBOOK_OPENED_EVENT

Triggers when a playbook (primary or dynamic) is selected from the list.

```
aaWindowInstance.on('PLAYBOOK_OPENED_EVENT', (payload) => {
  //capture event while opening the checklist
});
```

## PLAYBOOK_RESUME_EVENT

Triggers when an opened playbook resumes after being paused due to another running playbook.

```
aaWindowInstance.on('PLAYBOOK_RESUME_EVENT', (payload) => {
  //capture event while Resuming the checklist
});
```

## PLAYBOOK_STEP_CLOSED_EVENT

Triggers when:

* **Send/Copy** buttons are clicked.
* **Yes/No** confirmation buttons are clicked.
* Step based on agent or user utterance is closed (if configured).

```
aaWindowInstance.on('PLAYBOOK_STEP_CLOSED_EVENT', (payload) => {
  //capture event while closing the step
});
```

## PLAYBOOK_PROCEED_TO_CLOSE_EVENT

Triggers when the **Proceed to Close** button is clicked to close the primary playbook.

```
aaWindowInstance.on('PLAYBOOK_PROCEED_TO_CLOSE_EVENT', (payload) => {
  //capture event while Clicking on proceed to close button (closing the primary checklist)
});
```