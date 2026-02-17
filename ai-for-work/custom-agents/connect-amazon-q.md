# Connect Amazon Q

The Amazon Q configuration is a pivotal component for establishing seamless integration with Amazon Q Index, thereby unlocking robust enterprise search capabilities. This integration empowers organizations to harness their existing Amazon Q Business applications and associated retrievers, transforming them into a comprehensive knowledge source.

Integrating Amazon Q unlocks comprehensive enterprise search and actionable knowledge management—securely connecting your workforce to the information and tools they need, wherever they work.

## Prerequisites

* You must have an Account Admin, Workspace Admin, or Workspace Collaborator role.
* Your enterprise must have active Amazon Q Business applications and retrievers configured.


### Steps to Connect Amazon Q

To connect Amazon Q, follow these steps:

1. Navigate to **Enterprise Knowledge** on the left pane.
2. Click **Configure** and then **Create New**.
3. Select **Amazon Q**.
4. The next step is to configure the Amazon Q connection, which provides access to your indexed content for answer generation. Provide the following details for the connection:
    * **Source Name**: Create a unique and descriptive name for this knowledge source to easily identify it in your Enterprise Knowledge configuration.
    * **Description**: Provide a brief explanation of what this source contains and its purpose within your knowledge ecosystem.
5. Copy the **Tenant ID** displayed—it is required during setup of the data accessor in [AWS](../integration/amazon-q.md).
6. Enter the required details from AWS:
    * **Application ID**: The unique identifier of your Amazon Q Business application.
    * **Retriever ID**: The unique identifier of your Amazon Q Business retriever.
    * **Access Resource Name**: ARN for secure access to your Amazon Q resources.
    * **Application Location**: The AWS region where your Amazon Q Business application is deployed.
    * **IDC Location**: The AWS region where your AWS Identity Center instance is located.
7. Click **Save** to complete the configuration.
8. Mark this new source as **Active** to enable it for Enterprise Knowledge queries.

!!! note
     Application integrates with Amazon Q Index for enterprise search. If configured as the primary knowledge source, non-agent queries route to Q Index, which is recommended when it's your main search index. ***Enterprise Workspace*** is the default for Amazon Q access for all users, controlled by role-based access. A different workspace can be chosen during setup.
