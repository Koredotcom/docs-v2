# Amazon Q Integration with AI for Work Platform

In addition to Search and Data AI solution, AI for Work Platform connects with external search indexes such as Amazon Q. This integration allows customers to leverage connectors configured in their Amazon Q Index application on top of the ones available.

### Key Benefits 

* Data Sovereignty: Maintain data indexing within the AWS cloud using Amazon Q, eliminating the need for partner cloud storage.
* Unified, Context-aware search: Retrieve insights and documents from 90+ enterprise connectors ([Connectors](https://docs.kore.ai/xo/searchai/content-sources/connectors/connector-directory/) and [Amazon Q Connectors](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/connectors-list.html)), including AWS and non-AWS systems.
* Agentic actions, not just Search: Automate workflows—schedule meetings, update records, generate presentations—all with your search context.
* Flexible routing: AI-driven query routing uses intent recognition to send requests to the right retriever.
* Security and Permissions: E2E data encryption both at rest and transit, cross-account connectivity with granular access control.
* Simplified user authentication: Amazon Q index provides a [Trusted Token Issuer](https://docs.aws.amazon.com/singlesignon/latest/userguide/using-apps-with-trusted-token-issuer.html) (TTI) mechanism to issue their own security tokens. Users just need to login once from Kore.ai to get answers from Amazon Q index, without the need for authenticating a second time.

## How is Amazon Q Different from the RAG Search Solution?

[Search and Data AI](https://kore.ai/agent-platform/search-data-ai/) Solution comes with [70+ connectors](https://docs.kore.ai/xo/searchai/content-sources/connectors/connector-directory/) and the flexibility to build custom ones, giving enterprises deep control over how data is ingested, extracted, and configured. This allows users to experiment, fine-tune, and choose the indexing and retrieval methods that best fit their unique business needs.

Amazon Q, on the other hand, provides [40+ connectors](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/connectors-list.html) with a strong focus on simplicity and accuracy. It delivers a managed, standardized indexing and retrieval experience designed to meet enterprise-grade accuracy benchmarks without requiring extensive customization.

## Augmenting Search in AI for Work with Amazon Q Index

Amazon Q can be integrated with the Platform through two configuration approaches, each suited to different needs and data architectures.

When Amazon Q Index is the primary knowledge source, it can be set as the default search destination in [Enterprise Knowledge](../custom-agents/enterprise-knowledge.md) to deliver a consistent search experience across the organization. This involves creating a Amazon Q Index application in AWS with the necessary data sources, enabling Kore as the data accessor, and providing these details when configuring an active Amazon Q Source.

Alternatively, Amazon Q can be leveraged as a specialized search tool alongside other knowledge sources by creating a Amazon Q Index application in AWS, enabling Kore as the data accessor, and using those details to configure a search agent within the desired workspace.

### Enterprise Knowledge

When you configure it as a primary enterprise knowledge source, Amazon Q Index serves as the default fallback for queries that don't match specific agents. This configuration is recommended when Amazon Q Index is your main search index in the Platform. For more information, refer [Enterprise Knowledge](../custom-agents/enterprise-knowledge.md).

### Search Agent

When you have multiple search indices, Amazon Q can be configured as a contextual search agent that triggers based on query context and intent recognition. For more information, refer [Search Agent](../custom-agents/search-agents.md).

## Getting Started

Follow the below steps to connect your Amazon Q index application in the Platform.

### Enterprise Knowledge

Use this configuration when Amazon Q Index should serve as your primary knowledge source. This works best when most of your data resides in the index and many of your enterprise connectors link to it.

1. Navigate to Enterprise Knowledge
    * Access the **Admin Console**.
    * Select **Enterprise Knowledge** from the left navigation pane.
    <img src="../images/AmazonQ_2.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">
2. Create New Configuration
    * Click **Configure**.
    * Select **Create New**.
    * Choose **Amazon Q** as the knowledge source type.
    <img src="../images/AmazonQ_3.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">
3. Configure Basic Settings
    * **Source Name**: Enter a unique, descriptive identifier for this knowledge source.
    * **Description**: Provide a clear explanation of the source content and purpose.
4. Record Tenant ID
    * Copy the displayed **Tenant ID**.
    * You need this ID during AWS data accessor setup.
    <img src="../images/AmazonQ_3.5.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">
5. Configure AWS Connection Details 
 Enter the following information from your AWS environment:
    * **Application ID**: Unique identifier of our Amazon Q Business application.
    * **Retriever ID**: Unique identifier of your Amazon Q Business retriever.
    * **Access Resource Name (ARN)**: Resource identifier for secure access to Amazon Q resources.
    * **Application Location**: AWS region hosting your Amazon Q Business application.
    * **IDC Location**: AWS region hosting your AWS Identity Center instance.
1. Complete Configuration
    * Click **Save** to store the configuration.
    * Mark the source as *Active* to enable it as the default source for queries.
    <img src="../images/AmazonQ_3.75.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

!!!note
     * Enterprise Knowledge becomes the default knowledge source accessible to all users in that workspace, when configured within a specific workspace.
     * You can select alternative workspaces during initial setup depending on who needs data access. Select Enterprise Workspace if you want all users in the organization to access the data.

### Search Agent

Use this configuration when integrating Amazon Q as an additional search capability alongside existing search indices. This approach works best when you want to govern by description when this index should activate, or when you have limited data available in Q that you want to reference in the Platform.

1. Access Search Agent Configuration
    * Navigate to the **Search Agents** section.
    * Click **Create**.
    <img src="../images/AmazonQ_4.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">
    * Provide input for **Agent Name and Purpose**. This helps the to invoke the agent for relevant user queries.
    <img src="../images/AmazonQ_4.5.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">
    * Select **Amazon Q** as the Index type.
    <img src="../images/AmazonQ_4.6.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">
2. Use Tenant ID
    * Refer to the **Tenant ID** displayed in the configuration screen.
    * Provide this ID during AWS data accessor setup.
    <img src="../images/AmazonQ_4.7.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">
3. Configure AWS Integration Details
Complete the following fields with information from your AWS setup:
    * **Application ID**: Unique identifier of your Amazon Q Business application.
    * **Retriever ID**: Unique identifier of your Amazon Q Business retriever.
    * **Access Resource Name (ARN)**: Resource identifier for secure access to Amazon Q resources.
    * **Application Location**: AWS region hosting your Amazon Q Business application.
    * **IDC Location**: AWS region hosting your AWS Identity Center instance.

## How to Configure Amazon Q Business Application

To enable the Platform to connect with your Amazon Q Business application, you need to complete a one-time configuration using Trusted Token Issuer (TTI). This setup establishes a secure handshake between your Identity Provider (IdP) and AWS Identity Center, allowing ISVs to access your Amazon Q index.

For detailed reference, see the [AWS configuration blog](https://aws.amazon.com/blogs/machine-learning/configuring-amazon-q-business-with-aws-iam-identity-center-trusted-identity-propagation/).

### Required Permissions

Before starting the configuration, ensure your AWS setup includes the following permissions:

* Read access to Amazon Q Business application
* Retriever access permissions
* AWS IAM Identity Center integration permissions
* Cross-account access permissions (if applicable)

### Configuration Steps

Step 1: Set Up a Trusted Token Issuer (OIDC IdP) in IAM Identity Center

1. Navigate to the **IAM Identity Center console** (ensure your IAM Identity Center is already enabled).
2. Go to **Settings** → **Authentication** tab.
3. Under **Trusted token issuers**, click **Create trusted token issuer.**
4. Configure the following:
    * **Issuer URL**: Enter `https://work.kore.ai` (this must match the `iss` claim in JWT).
    * **Display name**: Provide a descriptive name for identification.
    * **User attributes**: Map the required user attributes according to your organization's needs.
5. Save the configuration and confirm the trusted token issuer has been successfully added.

<img src="../images/AmazonQ_5.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

Step 2: Configure Audience Claims

1. Verify that the audience claim (`Aud` claim) in the IdP-issued token matches your Amazon Q application's audience requirement as configured in IAM Identity Center.
2. Add or update the claim mapping from the IdP admin interface as needed.
3. Ensure proper attribute mapping is established between your external IdP and AWS Identity Center.

<img src="../images/AmazonQ_6.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

Step 3: Add and Assign Users in IAM Identity Center

1. **Add users in your external IdP**:
    * Create new users in your external identity provider.
    * Provision them according to the mapped attributes configured in Step 1.
2. **Configure user authentication**:
    * The external IdP will now authenticate users.
    * These users can exchange their tokens through IAM Identity Center for credentials to access Amazon Q index APIs.
3. **Assign users/groups** (if required by your organization's access policies):
    * Navigate to **IAM Identity Center** → **Applications** → **[Your Q App].**
    * Select **Assign Users/Groups** and complete the assignment configuration.

<img src="../images/AmazonQ_7.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

Step 4: Create or Configure Q Business Application

1. **Set up the application**:
    * Create a new Q Business Application or use an existing one.
    * Access the application configuration in the AWS console.
2. **Add users for search access**:
    * Within the Q Business application, add all users who need search access.
    * Ensure these users correspond to the data sources you'll be adding.
<img src="../images/AmazonQ_8.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

Step 5: Add Required Data Sources to Amazon Q Index

1. **Create an index** by configuring relevant data sources within your Q Business application.
2. **Add data sources** such as:
    * Google Drive
    * JIRA
    * Amazon S3
    * Other enterprise systems as needed
3. **Configure data source connections** following the [AWS documentation](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/isv-creating-index.html)

  <img src="../images/AmazonQ_9.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

Step 6: Add Kore.ai as a Data Accessor

This final step completes the integration by configuring Kore.ai as a data accessor using the Tenant ID provided during the Platform setup.

**Data Accessor Configuration Process**

1. **Access Data Accessors**:
    * In the Q Business Application console, navigate to **Data Accessors**.
    * Click **Add Data Accessor**.

2. **Select Kore.ai as the data accessor**:
    * Choose **Kore.ai** from the available data accessor options.
    <img src="../images/AmazonQ_11.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

3. **Configure the External ID**:
    * Locate the **Tenant ID** displayed in your Platform configuration screen.
    * Paste this **Tenant ID** into the **External ID** field in the AWS console.
    <img src="../images/AmazonQ_12.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

4. **Configure Trusted Token Issuer**: Choose one of the following options:
    * **Use an existing TTI** that you configured.
    * **Create a new TTI** specifically for this accessor.
5. **Set Data Source Access permissions**:
    * **All data sources**: Grant Kore.ai access to all current and future data sources.
    * **Specific data sources**: Select only the data sources that Kore.ai should access.
    <img src="../images/AmazonQ_13.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

6. **Configure User Access**:
    * **All Users**: Grant access to all users (ensure that you add the users to the application).
    * **Specific Users**: Select individual users who should have access through Kore.ai.
7. **Complete the integration**:
    * Copy the **Data Accessor Details** from the AWS console.
    * Return to your Platform configuration screen. Paste the Data Accessor Details to complete the linkage.
    <img src="../images/AmazonQ_14.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

## Technical Details

### Integration Architecture

The architecture comprises several interconnected components that facilitate secure cross-account data access while maintaining strict access controls.

At the infrastructure level, the solution leverages AWS Identity and Access Management (IAM) for authentication and authorization, with AWS Security Token Service (STS) serving as the credential broker. The core components include Amazon Q Index (which stores vector embeddings and metadata), Application code (which handles API routing and token exchange), and the Platform application layer (which manages user interactions and business logic). These components communicate via HTTPS using RESTful APIs with AWS Signature Version 4 (SigV4) for request signing.

When processing queries, the data flow begins with user input at the Platform application layer, which routes to either Kore's native retrievers or Amazon Q Index based on predefined routing rules. For Amazon Q Index requests, the architecture implements cross-account API calls using OAuth 2.0 tokens that undergo transformation into temporary AWS credentials.

Query responses from Amazon Q Index contain relevant document snippets with source references rather than complete documents, maintaining both security and performance optimization.

<img src="../images/AmazonQ_1.png" alt="Platform Architecture" title="Platform Architecture" style="border: 1px solid gray; zoom:100%;">

### Security and User Authentication

Amazon Q authentication supports [TTI](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/isv-retrieving-data.html) (Trusted Token Issuer), which is a modern, standards-based approach allowing organizations to use external identity providers (IdPs) that issue OIDC-compliant tokens for user authentication and access to Amazon Q index resources.

* In the TTI workflow for ISVs, the user first authenticates with their organization’s IdP, which issues a signed OIDC token containing user identity and attribute claims. The ISV’s application then presents this token to AWS IAM Identity Center, where the token’s validity, issuer, and claims are verified against a pre-configured trusted token issuer. 
* If the token is valid and the user is authorized, IAM Identity Center exchanges it for AWS credentials scoped to the permissions required for Amazon Q index operations. The ISV’s app now interacts with the Amazon Q index APIs—such as search and retrieval—using these temporary AWS credentials, ensuring that access is governed by both external IdP policies and AWS resource-level security controls. 

This workflow enables seamless and secure cross-organizational SSO, granular permission mapping, and logging, while allowing enterprises to centrally manage identities outside AWS in compliance with their security and governance models.
