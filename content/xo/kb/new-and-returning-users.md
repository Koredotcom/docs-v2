# Personalize Experience for New and Returning Users Across Channels for an AI Agent

Each channel provides a unique identity for users, such as a Twitter handle, Facebook ID, or email address (Slack/Team), call ID or phone number (IVR), and email/customer ID (SDK). The Platform creates a corresponding unique identity for each user, ensuring that a user is consistently identified across different channels when interacting with a specific AI Agent.

When a user starts a conversation with an AI Agent, the Platform checks if the user’s channel-provided identity matches any previous users who have interacted with that AI Agent. If a match occurs, the user is marked as a ‘returning user’ by setting the `isReturningUser` flag to `true` in the ‘BotUserSession’ context object `{{context.BotUserSession.isReturningUser}}`. If there is no match, the user is marked as new.

The Platform user's can use the `isReturningUser` flag to provide personalized user experiences by implementing different business logic for new versus returning users.

**Related Links**

* [Working with Context Object](../automation/intelligence/context-object.md).
* [Users Trend Analysis](../analytics/overview/users-dashboard.md#user-trends-considerations).