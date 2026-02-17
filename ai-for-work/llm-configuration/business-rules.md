# Business Rules

Define business rules by setting rules for entity selection and responses based on keywords. Business rules serve as guidelines or policies that ensure generated answers meet specific criteria and align with organizational goals.

Access the Business Rules section in the Admin Console, where all business rules of published custom integrations in the account appear. Create business rules using two options:

1. Answering Rule
2. Entity Rule

## Answering Rule

Answering rules let you specify the response to display when a query relates to a particular topic. These rules rely on keywords—when the system detects specific keywords in a user's input, you can customize the answer displayed accordingly. This section contains two fields:

* **Connection**: Use the toggle option to specify whether a rule is connection-specific or independent. Toggle on to require a custom connection selection—the rule triggers only if both the bot connection and keyword match. Toggle off to keep the rule keyword-specific and independent of any connection.
* **Rule**: Type a rule that includes a question and specify how the system should answer it.

## Entity Rule

Entity rules rely on connections and keywords to define which entities the system fills in a query when it detects specific keywords in the user's input. When connection intents match and contain these keywords, the system prefills certain entities based on user-defined rules. This section includes two fields that let you specify criteria for entity selection.

* **Connection**: Select any available custom connection.
* **Rule**: Write the rule in detail, then click **Build Flow** to proceed.