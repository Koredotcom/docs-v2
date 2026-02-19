# Connect Agentic App

The Agentic App configuration connects your system to more specialized, action-oriented services that can perform complex operations in response to user needs. These connections allow your AI system to not just retrieve information but also potentially take appropriate actions on behalf of users.

To connect Agentic App complete the following instructions:

1. Navigate to **Enterprise Knowledge** on the left pane.
2. Click **Configure** and then **Create New**.
3. Select **Agentic App**.
4. The next step is to configure the Agentic app, which has the indexed content used for answer generation. Provide the following details for the connection by defining API fields as per the details below:
     * **URL**: Enter the endpoint URL of the app obtained from the Agentic Platform.
     * **Method**: Enter the type of request you want to make.
     * **Headers**: Specify the information that helps to customize your API request. These are like special instructions that come with your request, such as authentication tokens or specifying the type of data you're sending. You can add multiple headers as needed. 
     * **Query String**: Specify additional information attached to the end of your URL to filter or customize your request. 
     * **Body Type**: Enter the format of the data you are sending with your request. Common types include JSON, or Raw. This tells the API how to interpret the information you're sending.
     * **Content Type**: Enter a specific label that tells the API what kind of data you are sending. 
     * **Request content**: Enter the actual data payload you want to send with your request. This contains the specific information or parameters the API needs to process your request.
5. Curl Import: For existing APIs, use the CURL Import functionality to automatically populate API configuration: 
    1. Click **Curl Import** to open the import interface. 
    2. Paste your CURL command into the text box. 
    3.  Click **Import** to extract API details.
6. Click **Save** and now you can find the agentic app listed.