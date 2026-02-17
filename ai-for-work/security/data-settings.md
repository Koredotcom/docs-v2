# Account Data Settings

**Data Settings** feature in the Admin Console gives you complete control over your information's journey through the system. These settings are important because they help you understand and address your organization's data management requirements.

## Understanding Data Settings

The Data Settings feature provides substantial control over the information lifecycle within the system. These settings primarily determine:

1. The specific data to be retained.
2. The designated storage duration.

Essentially, by looking closely at these things, companies can manage their day-to-day work, follow the law, and sort out any data privacy problems.

## Key Concepts

### Conversation Data Storage

Every interaction with the system creates valuable information. The Conversation Data Storage setting lets you decide how much of this information to preserve.

* **Store full end user conversation data** saves complete conversation records (questions, responses, context) for review, troubleshooting, usage understanding, and system training.
* **Do not store full end user conversation data** saves only basic interaction metadata (timestamps, user IDs, technical details), enhancing privacy while retaining operational records.
     When enabled, this setting provides three flexible control levels for conversation data retention:
     * **All Agents**: Applies no-storage policy universally across all agents, providing maximum privacy protection for sensitive environments.
     * **All Agents Except Selected Agents**: Sets platform-wide privacy as default while allowing specific agents to retain conversation data for analytics or operational needs.
     * **Only Selected Agents**: Applies no-storage policy exclusively to designated agents, ideal for compliance scenarios where certain agents handle regulated or sensitive data while maintaining standard retention for others.

### Data Retention Period

Information doesn't need to be kept forever. The Data Retention Period setting lets you decide when information should be removed from the system.

* **Use Default Retention Period (7 years)**: The standard setting keeps information for seven years before automatically removing it during scheduled cleanup processes.
* **Use Custom Data Retention Period**: Organizations have varying data retention needs. The custom retention feature allows users to define a specific data storage duration before automatic deletion, offering flexible timeframe options.

Data Settings puts you in control of your information management strategy. By thoughtfully configuring these options, you can ensure your system handles data in a way that aligns with your organization's values, obligations, and goals.
