[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Test and Debug Overview - NLP

Once you have built and trained your app, it is recommended that you conduct testing, to make sure everything works as expected. Even though it takes additional effort and resources, testing ensures that you are finding and fixing problems before they reach your users. 

The Platform provides an extensive suite of features that you can use to conduct rigorous testing of your AI Agent, as follows:

1. **Test (Talk to Bot)**: This is a chat-like interface that you can access all across the platform, to talk to your AI Agent the way a user might. This allows you to test the conversations that the AI Agent can handle and find potential issues with, for example, dialog task setup, conversation flow, NLP, etc. [Learn more](talk-to-bot.md){:target="_blank"}.
2. **Utterance Testing**: Here is where you can enter potential user utterances and see which engine finds a match and which intends are deemed to be the winning ones. This allows you to find ambiguity or wrongly matching intents and correct accordingly. [Learn more](testing-your-bot-with-nlp.md){:target="_blank"}.
3. **Health and Monitoring**:This feature improves the AI Agent’s NLP accuracy by analyzing training data, test coverage, and results. It helps identify intent issues, refine models, and collaborate on test case improvements. [Learn more](./regression-testing/health-and-monitoring/virtual-assistants-health-and-monitoring.md){:target="_blank"}.
4. **Batch Testing**: This feature helps you determine your AI Agent’s to correctly recognize the expected intents and entities from a given set of utterances. This involves the execution of a series of tests to get a detailed statistical analysis and gauge the performance of your AI Agent’s ML model. [Learn more](./regression-testing/batch-testing.md){:target="_blank"}.
5. **Conversation Testing**: This feature enables you to simulate end-to-end conversation flows to evaluate dialog tasks or perform regression. You can create Test Cases to capture various business scenarios and run them later to validate the AI Agent’s performance. [Learn more](./regression-testing/conversation-testing/conversation-testing-landing-page.md){:target="_blank"}.