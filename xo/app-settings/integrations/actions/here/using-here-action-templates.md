# Using Here Action Templates

You can use the **Prebuilt Action Templates** from your Here integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using Here action templates:

1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  


3. On the Dialog Task pop-up, under the **Integration**, select the **Here** option to view the action templates.  
<img src="../images/here-action-img11-tem-img2.png" alt="Integration-Here" title="Integration-Here" style="border: 1px solid gray;zoom:50%;"/>



If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the **Actions** page to configure an integration for yourAI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.


  <img src="../images/here-tem-img3.png" alt="Explore Integrations" title="Explore Integrations" style="border: 1px solid gray;zoom:50%;"/>


## Here Actions 

The following Here action is supported:


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
   <td>Get location
   </td>
   <td>Finds location using the text.
   </td>
   <td>POST
   </td>
  </tr>
</table>



### Get Locations 

Steps to get location by free text in the Here integration:

1. Refer to the [Installing the Here templates](configuring-the-here-action.md#step-2-install-the-here-action-templates){:target="_blank"} section to install this template.
2. The _Get Location_ dialog task is added with the following components:
<img src="../images/here-action-img12-tem-img4.png" alt="Dialog task added" title="Dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **getLocation**: A user intent to find a location.
    2. **location**: An entity node to enter a location.
    3. **getLocationService**: A bot action service to find a location in an external integration. Click the **Plus** icon to expand to view the _generalQueryService_ bot action component properties.
    4. In the **Component Properties** window, to add one or more responses, scroll down and click the **+Add Response** button.  
    <img src="../images/here-tem-img5.png" alt="Add response" title="Add response" style="border: 1px solid gray;zoom:50%;"/>  

        **Sample Response:**

        ```
        {
        "items": [
        {
        "title": "DS Road, Nagarathpete, Bengaluru 560002, India",
        "id": "herestreet:Ivcd5Wbnv3Xdt4.XXX",
        "resultType": "street",
        "address": {
        "label": "DS Road, Nagarathpete, Bengaluru 560002, India",
        "countryCode": "IND",
        "countryName": "India",
        "stateCode": "KA",
        "state": "Karnataka",
        "county": "Bengaluru",
        "city": "Bengaluru",
        "district": "Nagarathpete",
        "street": "DS Road",
        "postalCode": "560002"
        },
        "position": {
        "lat": 12.96564,
        "lng": 77.58555
        },
        "mapView": {
        "west": 77.58419,
        "south": 12.96531,
        "east": 77.58689,
        "north": 12.96604
        },
        "scoring": {
        "queryScore": 0.99,
        "fieldScore": {
        "streets": [
        0.9
        ]
        }
        }
        }
        ]
        }
        ```

    5. **getLocationMessage** – A message node with the script to display the query in the Here system.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to get location details.
6. Enter a free text location when prompted by the AI Agent, as shown below.  
<img src="../images/here-tem-img6.png" alt="Enter location when prompted" title="Enter location when prompted" style="border: 1px solid gray;zoom:50%;"/>

7. You will notice a location is identified based on your text.  
<img src="../images/here-tem-img7.png" alt="Location identified" title="Location identified" style="border: 1px solid gray;zoom:50%;"/>
