# Agent Coaching Events

The Agent Coaching feature provides real-time guidance to agents based on both user and agent messages. It offers insights into user emotions, empathy, and recommendations to help agents respond effectively during conversations.

## HINT_TEMPLATE

Hints provide information based on the User or Agent messages.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
  if (payload.event === 'HINT_TEMPLATE') {
    // Customize HTML if required
  }
});
```  

## NUDGE_TEMPLATE 

Nudges are also similar to hints, but they are in the notification format.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
  if (payload.event === 'NUDGE_TEMPLATE') {
    // Customize HTML if required
  }
});
```
