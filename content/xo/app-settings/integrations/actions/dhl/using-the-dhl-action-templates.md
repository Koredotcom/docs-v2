# Using the DHL Action Templates

You can use the **Prebuilt Action Templates** from your DHL integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using the DHL action templates:

1. Ensure that you have configured [DHL](configuring-the-dhl-action.md){:target="_blank"} and [installed templates](configuring-the-dhl-action.md#step-2-install-the-dhl-action-templates){:target="_blank"} successfully.

2. Go to **Automation AI** > **Use Cases** > **Dialogs**. All the dialogs are displayed.

3. Click the auto-created dialog. The the canvas opens with all required entity nodes, service nodes, and message scripts.

## DHL Actions

The following DHL actions are supported:


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
   <td>Track Shipment
   </td>
   <td>Tracks the shipment using the DHL tracking ID.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Find locations
   </td>
   <td>Retrieves locations using the country code and postal code from the DHL system.
   </td>
   <td>GET
   </td>
  </tr>
</table>



### Track Shipment

Steps to track the shipment using the DHL tracking ID:

1. Refer to the [Installing the DHL Action templates](configuring-the-dhl-action.md#step-2-install-the-dhl-action-templates){:target="_blank"} section to install this template.
2. The **Track Shipment** dialog task is added with the following components:  
<img src="../images/dhl-action-img12-tem-img4.png" alt="Dialog task added" title="Dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **trackShipment**: A user intent to track a shipment using the DHL ID.
    2. **trackingNumber** – Entity nodes for entering the tracking number.
    3. **trackShipmentService** – A bot action service to find places from an external integration using the place name. Click the Plus icon to expand to view the **trackShipmentService** bot action component properties.
    4. (Optional)In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/dhl-tem-img5.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>

        To add one or more responses, scroll down and click the +Add Response button:  
        <img src="../images/dhl-tem-img6.png" alt="Response" title="Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "shipments": [
        {
        "id": "7777777770",
        "service": "express",
        "origin": {
        "address": {
        "addressLocality": "-"
        },
        "servicePoint": {
        "url": "https://www.dhl.com/en/country_profile.html",
        "label": "Origin Service Area"
        }
        },
        "destination": {
        "address": {
        "addressLocality": "-"
        },
        "servicePoint": {
        "url": "https://www.dhl.com/en/country_profile.html",
        "label": "Destination Service Area"
        }
        },
        "status": {
        "timestamp": "2023-05-23T12:30:00",
        "location": {
        "address": {
        "addressLocality": "NUREMBERG - GERMANY"
        }
        },
        "statusCode": "transit",
        "status": "transit",
        "description": "Arrived at DHL Delivery Facility NUREMBERG - GERMANY"
        },
        "details": {
        "proofOfDelivery": {
        "signatureUrl": "https://proview.dhl.com/proview/adhocnotify?id=vasdsasss",
        "documentUrl": "https://proview.dhl.com/proview/adhocnotify?id=vQg5"
        },
        "proofOfDeliverySignedAvailable": false
        },
        "events": [
        {
        "timestamp": "2023-05-23T12:30:00",
        "location": {
        "address": {
        "addressLocality": "NUREMBERG - GERMANY"
        }
        },
        "description": "Arrived at DHL Delivery Facility NUREMBERG - GERMANY"
        },
        {
        "description": "Shipment picked up"
        }
        ]
        }
        ]
        }
        ```


    5. **trackShipmentMessage** – A message node with the script to display responses.
3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to track shipment, as shown below.  
<img src="../images/dhl-tem-img7.png" alt="VA console prompt to track shipment" title="VA console prompt to track shipment" style="border: 1px solid gray;zoom:50%;"/>

### Find Locations

Steps to find DHL locations using the country and postal codes:

1. Refer to the [Installing the DHL Action templates](configuring-the-dhl-action.md#step-2-install-the-dhl-action-templates){:target="_blank"} section to install this template.
2. The **Find Locations** dialog task is added with the following components:  
<img src="../images/dhl-tem-img8.png" alt="Dialog task added" title="Dialog task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **findLocations**: A user intent to find locations using the coordinates.
    2. **countryCode** and **postalCode** – Entity node for entering the country and postal codes.
    3. **findLocationsService** – A bot action service to find locations using a country and postal code from an external integration. Click the Plus icon to expand to view the **findLocationsService** bot action component properties.
    4. (Optional)In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/dhl-tem-img9.png" alt="Request" title="Request" style="border: 1px solid gray;zoom:50%;"/>

        To add one or more responses, scroll down and click the +Add Response button:  
        <img src="../images/dhl-tem-img10.png" alt="Response" title="Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "locations": [
        {
        "url": "/locations/HYD102",
        "location": {
        "ids": [
        {
        "locationId": "HYD102",
        "provider": "express"
        }
        ],
        "keyword": "",
        "keywordId": "",
        "type": "servicepoint"
        },
        "name": "Madhapur Office, HYDERABAD",
        "distance": 1076,
        "place": {
        "address": {
        "countryCode": "IN",
        "postalCode": "500081",
        "addressLocality": "HYDERABAD",
        "streetAddress": "H.No.2-52/1, Plot No.12 Opp Kasanigr Hotel,"
        },
        "geo": {
        "latitude": 17.441049,
        "longitude": 78.392052
        }
        },
        "openingHours": [
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Monday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Tuesday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Wednesday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Thursday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Friday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Saturday"
        }
        ],
        "closurePeriods": [],
        "serviceTypes": [
        "express:drop-off-easy",
        "express:drop-off",
        "express:drop-off-account",
        "express:pick-up",
        "express:drop-off-prelabeled"
        ],
        "averageCapacityDayOfWeek": []
        },
        {
        "url": "/locations/HYD112",
        "location": {
        "ids": [
        {
        "locationId": "HYD112",
        "provider": "express"
        }
        ],
        "keyword": "",
        "keywordId": "",
        "type": "servicepoint"
        },
        "name": "Gachibowli Office, HYDERABAD",
        "distance": 1840,
        "place": {
        "address": {
        "countryCode": "IN",
        "postalCode": "500032",
        "addressLocality": "HYDERABAD",
        "streetAddress": "Shop No.1, First floor House no. 2-48/T2, Gachibowli"
        },
        "geo": {
        "latitude": 17.435879,
        "longitude": 78.366746
        }
        },
        "openingHours": [
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Monday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Tuesday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Wednesday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Thursday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Friday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Saturday"
        }
        ],
        "closurePeriods": [],
        "serviceTypes": [
        "express:drop-off-easy",
        "express:drop-off",
        "express:drop-off-account",
        "express:pick-up",
        "express:drop-off-prelabeled"
        ],
        "averageCapacityDayOfWeek": []
        },
        {
        "url": "/locations/HYD119",
        "location": {
        "ids": [
        {
        "locationId": "HYD119",
        "provider": "express"
        }
        ],
        "keyword": "",
        "keywordId": "",
        "type": "servicepoint"
        },
        "name": "Kothaguda X Roads,HYDERABAD",
        "distance": 2332,
        "place": {
        "address": {
        "countryCode": "IN",
        "postalCode": "500084",
        "addressLocality": "HYDERABAD",
        "streetAddress": "Shop No.5, 1st Flr, Satya Towers Satya Towers,H.No.2-17, Kothaguda X Roads"
        },
        "geo": {
        "latitude": 17.4588091,
        "longitude": 78.3672857
        }
        },
        "openingHours": [
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Monday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Tuesday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Wednesday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Thursday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Friday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Saturday"
        }
        ],
        "closurePeriods": [],
        "serviceTypes": [
        "express:drop-off-easy",
        "express:drop-off",
        "express:drop-off-account",
        "express:pick-up",
        "express:drop-off-prelabeled"
        ],
        "averageCapacityDayOfWeek": []
        },
        {
        "url": "/locations/HYD109",
        "location": {
        "ids": [
        {
        "locationId": "HYD109",
        "provider": "express"
        }
        ],
        "keyword": "",
        "keywordId": "",
        "type": "servicepoint"
        },
        "name": "Jubilee Hills Office, HYDERABAD",
        "distance": 2909,
        "place": {
        "address": {
        "countryCode": "IN",
        "postalCode": "500033",
        "addressLocality": "HYDERABAD",
        "streetAddress": "Plot No.243, Rd No.36 Jubilee Hills,"
        },
        "geo": {
        "latitude": 17.432275,
        "longitude": 78.407039
        }
        },
        "openingHours": [
        {
        "opens": "09:00:00",
        "closes" : "21:00:00",
        "dayOfWeek": "https://schema.org/Monday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Tuesday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Wednesday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Thursday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Friday"
        },
        {
        "opens": "09:00:00",
        "closes": "21:00:00",
        "dayOfWeek": "https://schema.org/Saturday"
        }
        ],
        "closurePeriods": [],
        "serviceTypes": [
        "express:drop-off-easy",
        "express:drop-off",
        "express:drop-off-account",
        "express:pick-up",
        "express:drop-off-prelabeled"
        ],
        "averageCapacityDayOfWeek": []
        }
        ]
        }
        ```


    5. **getLocationsbyCoordinatesMessage** – A message node with the script to display responses.
3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to find the location using the country and postal codes, as shown below.  
<img src="../images/dhl-action-img11-tem-img2.png" alt="VA console prompt to find location" title="VA console prompt to find location" style="border: 1px solid gray;zoom:50%;"/>

6. To view the location details, click and expand the desired item in the results.  
<img src="../images/dhl-action-img12-tem-img4.png" alt="View location details" title="View location details" style="border: 1px solid gray;zoom:50%;"/>
