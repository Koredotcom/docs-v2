# Events to customize Transcript Tab

The Transcript tab shows the transcripts of the User-AI Agent conversation if they exist. It displays a summary of the conversation to give pre-context to the Agent and to show the live transcripts of USER and AGENT during voice conversations.

## Pause Transcript

This method pauses the transcription process in the application. When invoked, ongoing transcription temporarily halts, and no further text is captured or processed until the transcription is resumed.

```
aaWindowInstance.pauseTranscript();
```

## Resume Transcript

This method resumes the transcription process after the pause. Once invoked, the application continues to capture and process text.

```
aaWindowInstance.resumeTranscript();
```

## BOT_TRANSCRIPT

This event delivers the AI Agent transcripts when the user interacts with the AI Agent prior to agent transfer. It allows to customize the AI Agent response within the transcripts.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'BOT_TRANSCRIPT'){
       	//customize html if required
   	}
});
```

<img src="../images/bot-transcript01.png" alt="web-sdk-channel" title="bot-transcript01" style="border: 1px solid gray; zoom:80%;"> 

## TRANSCRIPT_BULB

This event displays a bulb icon beside user's comments when intent-based suggestions are triggered. 

**Note:** Clicking the bulb icon activates the assist tab to show the suggestions.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'TRANSCRIPT_BULB'){
       	// Customize the transcript bulb icon if required.
   	   }
});
```

## USER_TRANSCRIPT

This event delivers the User transcripts when the user interacts with a AI Agent or agent during voice conversations. It allows to customize the User response within the transcript.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   		if(payload.event === 'USER_TRANSCRIPT'){
       		//customize html if required
   		}
});
```

<img src="../images/user-transcript01.png" alt="web-sdk-channel" title="user-transcript01" style="border: 1px solid gray; zoom:80%;"> 

## AGENT_TRANSCRIPT

This event delivers the Agent transcripts when the Agent interacts with the user during voice conversations. It allows to customize the Agent transcript within the transcript.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   		if(payload.event === 'AGENT_TRANSCRIPT'){
       	//customize html if required
   		}
});
```

<img src="../images/agent-transcript01.png" alt="web-sdk-channel" title="agent-transcript01" style="border: 1px solid gray; zoom:80%;"> 

## AGENT_JOINED_TEMPLATE

This event triggers a banner in the Transcription tab when the agent joins a voice conversation. It provides a visual cue for the agent that the agent is now part of the discussion.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'AGENT_JOINED_TEMPLATE'){
       	//customize html if required
   	}
});
```
<img src="../images/Agentjoined-transcript01.png" alt="web-sdk-channel" title="Agentjoined-transcript01" style="border: 1px solid gray; zoom:80%;"> 

## SUMMARY_TEMPLATE

This event summarizes the conversation between the User and the AI Agent before agent transfer. It also provides the Agent with context for the user's query.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SUMMARY_TEMPLATE'){
       	//customize html if required
   	}
});
```
<img src="../images/summary-template.png" alt="web-sdk-channel" title="summary-template" style="border: 1px solid gray; zoom:80%;">