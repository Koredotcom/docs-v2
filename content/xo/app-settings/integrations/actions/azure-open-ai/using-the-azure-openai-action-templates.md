# Using the Azure OpenAI Action Templates

You can use the **Prebuilt Action Templates** from your Azure OpenAI integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using the Azure OpenAI action templates:

1. Ensure that you have configured [Azure OpenAI](configuring-the-azure-openai-action.md){:target="_blank"} and [installed templates](configuring-the-azure-openai-action.md#step-3-install-the-azure-openai-action-templates){:target="_blank"} successfully.

2. Go to **Automation AI** > **Use Cases** > **Dialogs**. All the dialogs are displayed.


3. Click the auto-created dialog. The the canvas opens with all required entity nodes, service nodes, and message scripts.


## Azure OpenAI Actions

The following Azure OpenAI action is supported:


<table border="1">
  <tr>
   <td><strong>Supported Tasks</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Method</strong>
   </td>
  </tr>
  <tr>
   <td>General Query
   </td>
   <td>Resolve any query using the intelligence of Azure and OpenAI.
   </td>
   <td>POST
   </td>
  </tr>
</table>



### General Query

Steps to resolve the query in the Azure OpenAI integration:


1. Refer to the [Installing the Azure OpenAI Action Templates](configuring-the-azure-openai-action.md#step-3-install-the-azure-openai-action-templates){:target="_blank"} section to install this template.

2. The _General Query_ dialog task is added with the following components:  
<img src="../images/configure-azure-img21-azure-action10.png" alt="Dialog added" title="Dialog added" style="border: 1px solid gray;zoom:50%;"/>

    1. **generalQuery**: A user intent for a general query.
    2. **userQuestion** and **deploymentID** – Entity nodes pass a user’s question.
    3. **generalQueryService** – A bot action service to send a query in an external integration. Click the **Plus** icon to expand to view the _generalQueryService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters, as shown below:  
    <img src="../images/azure-temp-img5-azure-action11.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>  
      

        **Sample Request**

        ```
        {
        "prompt": "I am the owner of a SAAS product company. How can i increase my customer base?",
        "temperature": 0.25,
        "max_tokens": 1024, 
        "top_p": 1, 
        "frequency_penalty": 0, 
        "presence_penalty": 0 
        }
        ```

        To add one or more response, scroll down and click the **+Add Response** button:

        **Sample Response**

        ```
        {
        "id": "cmpl-6s8YPFcRGYrDtPys2OdVfxxxxxx", 
        "object": "text_completion", 
        "created": 1678360613, 
        "model": "text-davinci-003", 
        "choices": [ 
        { 
        "text": "\n\n1. Focus on creating a great user experience: Make sure your product is easy to use, intuitive, and provides value to your customers.\n\n2. Offer free trials: Give potential customers the opportunity to try out your product before committing to a purchase.\n\n3. Leverage word-of-mouth marketing: Ask existing customers to share their experiences with their friends and family.\n\n4. Invest in content marketing: Create helpful content related to your product and share it on social media and other platforms.\n\n5. Utilize search engine optimization (SEO): Optimize your website and content for search engines to increase visibility and attract more customers.\n\n6. Run targeted ads: Use paid advertising to reach potential customers who are likely to be interested in your product.\n\n7. Participate in industry events: Attend conferences, trade shows, and other events to network and build relationships with potential customers.\n\n8. Offer discounts and promotions: Provide discounts and other promotions to encourage customers to purchase your product.", 
        "index": 0, 
        "logprobs": null, 
        "finish_reason": "stop" 
        } 
        ], 
        "usage": { 
        "prompt_tokens": 19, 
        "completion_tokens": 212, 
        "total_tokens": 231 
        } 
        } 
        ```  

    5. **generalQueryMessage** – A message node with the script to display the query in Azure OpenAI system. 

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to resolve a general query.
6. Enter a question based on a query when prompted by the AI Agent, as shown below:  
<img src="../images/azure-temp-img6-azure-action12.png" alt="Enter a question" title="Enter a question" style="border: 1px solid gray;zoom:50%;"/>

7. You will notice an answer is generated for your query.  
<img src="../images/azure-temp-img7-azure-action13.png" alt="Answer" title="Answer" style="border: 1px solid gray;zoom:50%;"/>
