# Using the Bitly Action Template

You can use the **Prebuilt Action Templates** from your Bitly integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using Bitly action templates:

1. Ensure that you have configured [Bitly](configuring-the-bitly-action.md){:target="_blank"} and [installed templates](configuring-the-bitly-action.md#step-2-install-the-bitly-action-templates){:target="_blank"} successfully.

2. Go to **Automation AI** > **Use Cases** > **Dialogs**. All the dialogs are displayed.


3. Click the auto-created dialog. The the canvas opens with all required entity nodes, service nodes, and message scripts.


## Bitly Actions 

The following Bitly action is supported:


<table border="1">
  <tr>
   <td><strong>Supported Actions</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Method</strong>
   </td>
  </tr>
  <tr>
   <td>Short an URL
   </td>
   <td>Shortens any long URL.
   </td>
   <td>POST
   </td>
  </tr>
</table>



### General Query 

Steps to shorten the URL in the Bitly integration:

1. Refer to the [Installing the Bitly templates](configuring-the-bitly-action.md#step-2-install-the-bitly-action-templates){:target="_blank"} section to install this template.
2. The _Short URL_ dialog task is added with the following components:  
<img src="../images/bitly-action-img12-tem-img4.png" alt="Dialog task added" title="Dialog task added" style="border: 1px solid gray;zoom:50%;"/> 

    1. **shortUrl**: A user intent to shorten an URL.
    2. **longURL** – An entity node to enter a long URL.
    3. **shortUrlService**– A bot action service to send a query in an external integration. Click the **Plus** icon to expand to view the _generalQueryService_ bot action component properties.
    4. In the **Component Properties** window, click the **Edit Request** link to edit the request parameters, as shown below.  
    <img src="../images/bitly-tem-img5-short-url.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>  

        **Sample Request**
        ```
        {
            "long_url": "https://en.wikipedia.org/wiki/Constantine_V"
        }
        ```

    5. To add one or more responses, scroll down and click the **+Add Response** button.  
        <img src="../images/bitly-tem-img6-short-url.png" alt="Add Response" title="Add Response" style="border: 1px solid gray;zoom:50%;"/>  
          
        **Sample Response**
        ```
        {
        "created_at": "2023-08-25T08:38:00+0000",
        "id": "bit.ly/3E8Nec6",
        "link": "https://bit.ly/3E8Nec6",
        "custom_bitlinks": [],
        "long_url": "https://en.wikipedia.org/wiki/Constantine_V",
        "archived": false,
        "tags": [],
        "deeplinks": [],
        "references": {
        "group": "https://api-ssl.bitly.com/v4/groups/Bn448WZsE7j"
        }
        }
        ```

    6. **generalQueryMessage** – A message node with the script to display the query in the Bitly system.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to resolve a general query.
6. Enter a long URL when prompted by the App, as shown below.  
<img src="../images/bitly-tem-img7-short-url.png" alt="Enter long url" title="Enter long url" style="border: 1px solid gray;zoom:50%;"/>  

7. You will notice that the long URL is shortened. Click **View Stats** to view URL statistics in the Bitly instance.  
<img src="../images/bitly-tem-img8-short-url.png" alt="View Stats" title="View Stats" style="border: 1px solid gray;zoom:50%;"/>
