# Settings

This section consists of the settings required for campaigns.

To access campaign settings, go to Contact Center AI > Campaigns > Settings.  
<img src="../images/settings-page.png" alt="Settings Page" title="Settings Page" style="border: 1px solid gray; zoom:80%;">

## Global Settings

Select **Global Settings**.  
<img src="../images/global-settings.png" alt="Global Settings" title="Global Settings" style="border: 1px solid gray; zoom:80%;">

* Supervisors can configure the maximum count of concurrent calls for the campaigns. By default, the count is set to 10, and the maximum count that can be set is 25. This applies only to Agentless Campaigns. Progressive and Preview Campaigns remain unaffected, as they depend solely on the number of available agents.  
* Supervisors can set the total messages per minute for the campaigns. By default, the count is set to 1.  
* Power dialing customer wait time determines how long a customer stays on the call while waiting for an agent before the call ends. The default duration is 5 seconds, and the minimum duration is 3 seconds.  
* Power dialing agent idle max time sets the maximum time an agent can remain idle while assigned to a campaign before releasing back to the queue. The default duration is 30 seconds, and the minimum duration is 5 seconds.  
 <img src="../images/global-settings-panel.png" alt="Global Settings" title="Global Settings" style="border: 1px solid gray; zoom:80%;">

## Proactive CoolDown Time

The Cooldown Time parameter controls how frequently proactive widgets appear to a visitor during a session, preventing multiple campaigns from triggering in rapid succession. This parameter applies per app and helps create a controlled and user-friendly experience.

Once a visitor sees a campaign widget, no other campaign widget displays to them for the duration of the configured cooldown period, even if the visitor continues to meet the criteria for other campaigns. This restriction applies per visitor session.

Despite the cooldown, the system continues to track and update metrics such as Page Visit Count. Campaign rules don't retroactively trigger after cooldown ends; only rules that are met after the cooldown completes are eligible for display.

Only one proactive campaign widget displays at any given time. A campaign template doesn't display in the following scenarios:  

* Another campaign template is already active in the browser window. Even if other templates meet the conditions, they're skipped.
* A configured cooldown period is in effect. New campaign templates are skipped until the cooldown ends.
* The user is already in an active chat session. Campaign templates don't render, regardless of the browser state.
* If the chat window is open, the system skips rendering campaign templates.  
    <img src="../images/chat-window.png" alt="Chat" title="Chat" style="border: 1px solid gray; zoom:60%;">

Steps to configure the cooldown time:

1. Select **Proactive CoolDown Time**.  
    <img src="../images/proactive-cooldown-time.png" alt="Proactive Cooldown Time" title="Proactive Cooldown Time" style="border: 1px solid gray; zoom:80%;">

2. Enter a value between 0 and 30,000 for the Cooldown Time (default: 0), and click **Save**.  
    <img src="../images/cooldown-time.png" alt="Save" title="Save" style="border: 1px solid gray; zoom:80%;">

    This setting applies uniformly across all proactive campaigns within the application.

## Unanswered Call Attempts

<img src="../images/unanswered-call-attempts.png" alt="Unanswered Call Attempts" title="Unanswered Call Attempts" style="border: 1px solid gray; zoom:80%;">

Automatically add phone numbers to the Global DNC list when they repeatedly fail to connect during voice campaigns.

**Voice Campaign Call Individual Attempts**: Defines the maximum number of failed call attempts allowed before the system adds the phone number to the Global DNC list.

**No. of Attempts to Trigger DNC Enrollment**: Enter a value between 1 and 100 (default: 30).

**How long to keep in DNC**: Enter the number of months to retain the phone number in the Global DNC list. Set the value to 0 for no expiry.

## Voice Machine Timeouts

<img src="../images/voice-machine-timeouts.png" alt="Voice Machine Timeouts" title="Voice Machine Timeouts" style="border: 1px solid gray; zoom:80%;">

Voice machine timeouts define how long the system waits at each stage of an IVR or answering machine interaction before taking action.

**Decision Timeout**: Specifies how long the system waits for the machine to decide or respond before it stops waiting and returns control.

**Greeting Completion Timeout**: Specifies how long the system waits for a brief silence after the greeting message before returning control.

**No Speech Timeout**: Specifies how long the system waits for speech to begin.

**Tone Timeout**: Specifies the maximum time the system waits to detect a beep or tone.