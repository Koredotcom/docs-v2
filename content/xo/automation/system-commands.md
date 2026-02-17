# System Commands

Using system commands, users can define the AI Agents behavior to some extent.

The following is the list of available commands.


## To manage sessions


* You can **terminate the current task/intent** using commands like “_Discard_“, “_Terminate_“, “_End_” etc. Any previous tasks that were on hold would be resumed.
* You can **terminate all tasks/intents** for that particular session using commands like “_Discard All_“, “_Terminate Everything_“, “_Clean All_” etc.  You can also use the **Refresh** icon at the top of the **Talk to Bot** window for the same purpose.
* You, as a developer, can define your own discard commands using a **custom concept** named _~bot_commands_override_discard_ ([see here for how](./natural-language/training/fundamental-meaning.md#define-custom-concepts){:target="_blank"}). When the words in this concept are detected in the user utterance then the current task will be discarded without any further checks. Only these words will cause a discard to happen, and these must be the only words on the user utterance. An explicit reference to “all” in these command variations will ensure termination of all tasks, else only the current task will be terminated.

Be aware that if the AI Agent recognizes any of these commands (<span style="text-decoration:underline;">except</span> those defined in the custom concept) as a valid intent or entity value then priority would be given to the intent/entity recognized and the AI Agent would process these phrases accordingly. The priority being – first intent then entity and lastly system command.


## To manage accounts

Chances are the end-user might want to change their account profile like revoke permissions or manage the alert subscriptions etc.

* Users can use the **manage account** using commands like “_Reactivate my account_“, “_manage my account_“, etc.
* Platform responds with a message to the user with a link.
* The link can be used by the user to change:
    * **Authorizations** – The end-user can delete any authorizations and/or add new auth accounts. Especially useful when the user has multiple accounts and wants to revisit the auth account or if the given account authorization token has expired. In case the AI Agent requires multiple authorizations each of these would be listed here.
    * **Alert Task Settings** – The end-user can unsubscribe by deleting the subscription or change the notification settings
    * **Profile** – this includes first name, last name and the preferred time zone.

* This link would be generated ONLY when:
    * no intent matches the user utterance; and
    * the user utterance matches the pattern `<&lt; [manage delete reactivate] [account connection] >>`

!!! note

    In case your AI Agent has _account_ related tasks, a proper training would ensure that this link is not sent to the end-user instead of the account-related task.