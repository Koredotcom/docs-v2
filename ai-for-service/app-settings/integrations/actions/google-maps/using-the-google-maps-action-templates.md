# Using the Google Maps Action Templates

You can use the **Prebuilt Action Templates** from your Google Maps integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using the Google Maps action templates:

1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  


3. On the Dialog Task pop-up, under the Integration, select the Google Maps option to view the action templates.
4. Select any of the dialog task templates and click **Proceed**. For example, select the **Get locations by coordinates** item.  
<img src="../images/google-maps-action-img11-tem-img2.png" alt="Select dialog and proceed" title="Select dialog and proceed" style="border: 1px solid gray;zoom:50%;"/>

5. If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the Actions page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.  
<img src="../images/google-maps-tem-img3.png" alt="Explore integrations" title="Explore integrations" style="border: 1px solid gray;zoom:50%;"/>


## Google Maps Actions

The following Google Maps actions are supported:


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
   <td>Get places by name
   </td>
   <td>Displays the coordinate, and address based on the name of a place.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Get locations by coordinates
   </td>
   <td>Get location information based on the coordinate.
   </td>
   <td>GET
   </td>
  </tr>
</table>



### Get places by names

Steps to find places by name in Google Maps:

1. Refer to the [Installing the Google Maps Action Templates](configuring-the-google-maps-action.md#step-2-install-the-google-maps-action-templates){:target="_blank"} section to install this template.
2. The **Get Places** dialog task is added with the following components:  
<img src="../images/google-maps-action-img12-tem-img4.png" alt="Get Places task added" title="Get Places task added" style="border: 1px solid gray;zoom:50%;"/>

    1. **getPlaces**: A user intent to get places by name from Google Maps.
    2. **place** – Entity node for entering the name of the place.
    3. **getLocationService** – A bot action service to find places from an external integration using the place name. Click the **Plus** icon to expand to view the **getLocationService** bot action component properties.
    4. (Optional)In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/google-maps-tem-img5.png" alt="Edit request" title="Edit request" style="border: 1px solid gray;zoom:50%;"/>  
      
        To add one or more responses, scroll down and click the **+Add Response** button:  
        <img src="../images/google-maps-tem-img6.png" alt="Add Response" title="Add Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "places": [
        {
        "formatted_address": "3rd Floor, Aurobindo Galaxy Towers, Hitech City Rd, opposite IKEA Restaurant, Hyderabad, Telangana 500081, India",
        "geometry": {
        "location": {
        "lat": 17.4368202,
        "lng": 78.3754289
        },
        "viewport": {
        "northeast": {
        "lat": 17.43813227989272,
        "lng": 78.37674267989273
        },
        "southwest": {
        "lat": 17.43543262010727,
        "lng": 78.37404302010728
        }
        }
        },
        "name": "Kore.ai Software India Pvt Ltd",
        "opening_hours": {
        "open_now": false
        },
        "place_id": "ChIJG6F9J8-TyzsRmATpJeu0qxE"
        }
        ],
        "status": "OK"
        }
        ```

    5. **getPlacesMessage** – A message node with the script to display responses.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to find places by name, as shown below.  
<img src="../images/google-maps-tem-img7.png" alt="VA prompt to find places by name" title="VA prompt to find places by name" style="border: 1px solid gray;zoom:50%;"/>


### Get locations by coordinates

Steps to find locations using the Google Maps coordinates:

1. Refer to the [Installing the Google Maps Action Templates](configuring-the-google-maps-action.md#step-2-install-the-google-maps-action-templates){:target="_blank"} section to install this template.
2. The **Get Locations by Coordinates** dialog task is added with the following components:  
<img src="../images/google-maps-tem-img8.png" alt="Get Locations by Coordinates dialog task is added" title="Get Locations by Coordinates dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **getLocationsbyCoordinates** – A user intent to find locations using the coordinates.
    2. **latitude** and **longitude** – Entity node for entering the latitude and longitude coordinates.
    3. **getLocationsbyCoordinatesService** – A bot action service to get locations using coordinates from an external integration. Click the **Plus** icon to expand to view the **getLocationsbyCoordinatesService** bot action component properties.
    4. (Optional)In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below.  
    <img src="../images/google-maps-tem-img9.png" alt="Edit Request" title="Edit Request" style="border: 1px solid gray;zoom:50%;"/>  
      
        To add one or more responses, scroll down and click the **+Add Response** button.  
        <img src="../images/google-maps-tem-img10.png" alt="Add Response" title="Add Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "plus_code": {
        "compound_code": "P27Q+MCM New York, NY, USA",
        "global_code": "87G8P27Q+MCM"
        },
        "results": [
        {
        "address_components": [
        {
        "long_name": "277",
        "short_name": "277",
        "types": [
        "street_number"
        ]
        },
        {
        "long_name": "Bedford Avenue",
        "short_name": "Bedford Ave",
        "types": [
        "route"
        ]
        },
        {
        "long_name": "Williamsburg",
        "short_name": "Williamsburg",
        "types": [
        "neighborhood",
        "political"
        ]
        },
        {
        "long_name": "Brooklyn",
        "short_name": "Brooklyn",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "long_name": "Kings County",
        "short_name": "Kings County",
        "types": [
        "administrative_area_level_2",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        },
        {
        "long_name": "11211",
        "short_name": "11211",
        "types": [
        "postal_code"
        ]
        }
        ],
        "formatted_address": "277 Bedford Ave, Brooklyn, NY 11211, USA",
        "geometry": {
        "location": {
        "lat": 40.7142205,
        "lng": -73.9612903
        },
        "location_type": "ROOFTOP",
        "viewport": {
        "northeast": {
        "lat": 40.71556948029149,
        "lng": -73.95994131970849
        },
        "southwest": {
        "lat": 40.7128715197085,
        "lng": -73.9626392802915
        }
        }
        },
        "place_id": "ChIJd8BlQ2BZwokRAFUEcm_qrcA",
        "plus_code": {
        "compound_code": "P27Q+MF New York, NY, USA",
        "global_code": "87G8P27Q+MF"
        },
        "types": [
        "street_address"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "279",
        "short_name": "279",
        "types": [
        "street_number"
        ]
        },
        {
        "long_name": "Bedford Avenue",
        "short_name": "Bedford Ave",
        "types": [
        "route"
        ]
        },
        {
        "long_name": "Williamsburg",
        "short_name": "Williamsburg",
        "types": [
        "neighborhood",
        "political"
        ]
        },
        {
        "long_name": "Brooklyn",
        "short_name": "Brooklyn",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "long_name": "Kings County",
        "short_name": "Kings County",
        "types": [
        "administrative_area_level_2",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        },
        {
        "long_name": "11211",
        "short_name": "11211",
        "types": [
        "postal_code"
        ]
        },
        {
        "long_name": "4203",
        "short_name": "4203",
        "types": [
        "postal_code_suffix"
        ]
        }
        ],
        "formatted_address": "279 Bedford Ave, Brooklyn, NY 11211, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 40.7142628,
        "lng": -73.96121309999999
        },
        "southwest": {
        "lat": 40.7141534,
        "lng": -73.9613792
        }
        },
        "location": {
        "lat": 40.7142015,
        "lng": -73.96130769999999
        },
        "location_type": "ROOFTOP",
        "viewport": {
        "northeast": {
        "lat": 40.7155570802915,
        "lng": -73.95994716970849
        },
        "southwest": {
        "lat": 40.7128591197085,
        "lng": -73.96264513029149
        }
        }
        },
        "place_id": "ChIJRYYERGBZwokRAM4n1GlcYX4",
        "types": [
        "premise"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "277",
        "short_name": "277",
        "types": [
        "street_number"
        ]
        },
        {
        "long_name": "Bedford Avenue",
        "short_name": "Bedford Ave",
        "types": [
        "route"
        ]
        },
        {
        "long_name": "Williamsburg",
        "short_name": "Williamsburg",
        "types": [
        "neighborhood",
        "political"
        ]
        },
        {
        "long_name": "Brooklyn",
        "short_name": "Brooklyn",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "long_name": "Kings County",
        "short_name": "Kings County",
        "types": [
        "administrative_area_level_2",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        },
        {
        "long_name": "11211",
        "short_name": "11211",
        "types": [
        "postal_code"
        ]
        }
        ],
        "formatted_address": "277 Bedford Ave, Brooklyn, NY 11211, USA",
        "geometry": {
        "location": {
        "lat": 40.7142205,
        "lng": -73.9612903
        },
        "location_type": "ROOFTOP",
        "viewport": {
        "northeast": {
        "lat": 40.71556948029149,
        "lng": -73.95994131970849
        },
        "southwest": {
        "lat": 40.7128715197085,
        "lng": -73.9626392802915
        }
        }
        },
        "place_id": "ChIJF0hlQ2BZwokRsrY2RAlFbAE",
        "plus_code": {
        "compound_code": "P27Q+MF Brooklyn, NY, USA",
        "global_code": "87G8P27Q+MF"
        },
        "types": [
        "establishment",
        "point_of_interest"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "291-275",
        "short_name": "291-275",
        "types": [
        "street_number"
        ]
        },
        {
        "long_name": "Bedford Avenue",
        "short_name": "Bedford Ave",
        "types": [
        "route"
        ]
        },
        {
        "long_name": "Williamsburg",
        "short_name": "Williamsburg",
        "types": [
        "neighborhood",
        "political"
        ]
        },
        {
        "long_name": "Brooklyn",
        "short_name": "Brooklyn",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "long_name": "Kings County",
        "short_name": "Kings County",
        "types": [
        "administrative_area_level_2",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        },
        {
        "long_name": "11211",
        "short_name": "11211",
        "types": [
        "postal_code"
        ]
        }
        ],
        "formatted_address": "291-275 Bedford Ave, Brooklyn, NY 11211, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 40.7145065,
        "lng": -73.9612923
        },
        "southwest": {
        "lat": 40.7139055,
        "lng": -73.96168349999999
        }
        },
        "location": {
        "lat": 40.7142045,
        "lng": -73.9614845
        },
        "location_type": "GEOMETRIC_CENTER",
        "viewport": {
        "northeast": {
        "lat": 40.7155549802915,
        "lng": -73.96013891970848
        },
        "southwest": {
        "lat": 40.7128570197085,
        "lng": -73.96283688029149
        }
        }
        },
        "place_id": "ChIJ8ThWRGBZwokR3E1zUisk3LU",
        "types": [
        "route"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "P27Q+MC",
        "short_name": "P27Q+MC",
        "types": [
        "plus_code"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "New York",
        "types": [
        "locality",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "formatted_address": "P27Q+MC New York, NY, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 40.71425,
        "lng": -73.96137499999999
        },
        "southwest": {
        "lat": 40.714125,
        "lng": -73.9615
        }
        },
        "location": {
        "lat": 40.714224,
        "lng": -73.96145199999999
        },
        "location_type": "GEOMETRIC_CENTER",
        "viewport": {
        "northeast": {
        "lat": 40.71553648029149,
        "lng": -73.96008851970849
        },
        "southwest": {
        "lat": 40.71283851970849,
        "lng": -73.96278648029151
        }
        }
        },
        "place_id": "GhIJWAIpsWtbREARHyv4bYh9UsA",
        "plus_code": {
        "compound_code": "P27Q+MC New York, NY, USA",
        "global_code": "87G8P27Q+MC"
        },
        "types": [
        "plus_code"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "South Williamsburg",
        "short_name": "South Williamsburg",
        "types": [
        "neighborhood",
        "political"
        ]
        },
        {
        "long_name": "Brooklyn",
        "short_name": "Brooklyn",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "long_name": "Kings County",
        "short_name": "Kings County",
        "types": [
        "administrative_area_level_2",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "formatted_address": "South Williamsburg, Brooklyn, NY, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 40.7167119,
        "lng": -73.9420904
        },
        "southwest": {
        "lat": 40.6984866,
        "lng": -73.9699432
        }
        },
        "location": {
        "lat": 40.7043921,
        "lng": -73.9565551
        },
        "location_type": "APPROXIMATE",
        "viewport": {
        "northeast": {
        "lat": 40.7167119,
        "lng": -73.9420904
        },
        "southwest": {
        "lat": 40.6984866,
        "lng": -73.9699432
        }
        }
        },
        "place_id": "ChIJR3_ODdlbwokRYtN19kNtcuk",
        "types": [
        "neighborhood",
        "political"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "11211",
        "short_name": "11211",
        "types": [
        "postal_code"
        ]
        },
        {
        "long_name": "Brooklyn",
        "short_name": "Brooklyn",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "New York",
        "types": [
        "locality",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "formatted_address": "Brooklyn, NY 11211, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 40.7280089,
        "lng": -73.9207299
        },
        "southwest": {
        "lat": 40.7008331,
        "lng": -73.9644697
        }
        },
        "location": {
        "lat": 40.7093358,
        "lng": -73.9565551
        },
        "location_type": "APPROXIMATE",
        "viewport": {
        "northeast": {
        "lat": 40.7280089,
        "lng": -73.9207299
        },
        "southwest": {
        "lat": 40.7008331,
        "lng": -73.9644697
        }
        }
        },
        "place_id": "ChIJvbEjlVdZwokR4KapM3WCFRw",
        "types": [
        "postal_code"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "Williamsburg",
        "short_name": "Williamsburg",
        "types": [
        "neighborhood",
        "political"
        ]
        },
        {
        "long_name": "Brooklyn",
        "short_name": "Brooklyn",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "long_name": "Kings County",
        "short_name": "Kings County",
        "types": [
        "administrative_area_level_2",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "formatted_address": "Williamsburg, Brooklyn, NY, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 40.7251773,
        "lng": -73.936498
        },
        "southwest": {
        "lat": 40.6979329,
        "lng": -73.96984499999999
        }
        },
        "location": {
        "lat": 40.7081156,
        "lng": -73.9570696
        },
        "location_type": "APPROXIMATE",
        "viewport": {
        "northeast": {
        "lat": 40.7251773,
        "lng": -73.936498
        },
        "southwest": {
        "lat": 40.6979329,
        "lng": -73.96984499999999
        }
        }
        },
        "place_id": "ChIJQSrBBv1bwokRbNfFHCnyeYI",
        "types": [
        "neighborhood",
        "political"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "Kings County",
        "short_name": "Kings County",
        "types": [
        "administrative_area_level_2",
        "political"
        ]
        },
        {
        "long_name": "Brooklyn",
        "short_name": "Brooklyn",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "formatted_address": "Kings County, Brooklyn, NY, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 40.7394209,
        "lng": -73.8330411
        },
        "southwest": {
        "lat": 40.551042,
        "lng": -74.05663
        }
        },
        "location": {
        "lat": 40.6528762,
        "lng": -73.95949399999999
        },
        "location_type": "APPROXIMATE",
        "viewport": {
        "northeast": {
        "lat": 40.7394209,
        "lng": -73.8330411
        },
        "southwest": {
        "lat": 40.551042,
        "lng": -74.05663
        }
        }
        },
        "place_id": "ChIJOwE7_GTtwokRs75rhW4_I6M",
        "types": [
        "administrative_area_level_2",
        "political"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "Brooklyn",
        "short_name": "Brooklyn",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "long_name": "Kings County",
        "short_name": "Kings County",
        "types": [
        "administrative_area_level_2",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "formatted_address": "Brooklyn, NY, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 40.739446,
        "lng": -73.83336509999999
        },
        "southwest": {
        "lat": 40.551042,
        "lng": -74.05663
        }
        },
        "location": {
        "lat": 40.6781784,
        "lng": -73.94415789999999
        },
        "location_type": "APPROXIMATE",
        "viewport": {
        "northeast": {
        "lat": 40.739446,
        "lng": -73.83336509999999
        },
        "southwest": {
        "lat": 40.551042,
        "lng": -74.05663
        }
        }
        },
        "place_id": "ChIJCSF8lBZEwokRhngABHRcdoI",
        "types": [
        "political",
        "sublocality",
        "sublocality_level_1"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "New York",
        "short_name": "New York",
        "types": [
        "locality",
        "political"
        ]
        },
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "formatted_address": "New York, NY, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 40.9175771,
        "lng": -73.70027209999999
        },
        "southwest": {
        "lat": 40.4773991,
        "lng": -74.25908989999999
        }
        },
        "location": {
        "lat": 40.7127753,
        "lng": -74.0059728
        },
        "location_type": "APPROXIMATE",
        "viewport": {
        "northeast": {
        "lat": 40.9175771,
        "lng": -73.70027209999999
        },
        "southwest": {
        "lat": 40.4773991,
        "lng": -74.25908989999999
        }
        }
        },
        "place_id": "ChIJOwg_06VPwokRYv534QaPC8g",
        "types": [
        "locality",
        "political"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "New York",
        "short_name": "NY",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "formatted_address": "New York, USA",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 45.015861,
        "lng": -71.777491
        },
        "southwest": {
        "lat": 40.476578,
        "lng": -79.7625901
        }
        },
        "location": {
        "lat": 43.2994285,
        "lng": -74.21793260000001
        },
        "location_type": "APPROXIMATE",
        "viewport": {
        "northeast": {
        "lat": 45.015861,
        "lng": -71.777491
        },
        "southwest": {
        "lat": 40.476578,
        "lng": -79.7625901
        }
        }
        },
        "place_id": "ChIJqaUj8fBLzEwRZ5UY3sHGz90",
        "types": [
        "administrative_area_level_1",
        "political"
        ]
        },
        {
        "address_components": [
        {
        "long_name": "United States",
        "short_name": "US",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "formatted_address": "United States",
        "geometry": {
        "bounds": {
        "northeast": {
        "lat": 74.071038,
        "lng": -66.885417
        },
        "southwest": {
        "lat": 18.7763,
        "lng": 166.9999999
        }
        },
        "location": {
        "lat": 37.09024,
        "lng": -95.712891
        },
        "location_type": "APPROXIMATE",
        "viewport": {
        "northeast": {
        "lat": 74.071038,
        "lng": -66.885417
        },
        "southwest": {
        "lat": 18.7763,
        "lng": 166.9999999
        }
        }
        },
        "place_id": "ChIJCzYy5IS16lQRQrfeQ5K5Oxw",
        "types": [
        "country",
        "political"
        ]
        }
        ],
        "status": "OK"
        }
        ```
         
    5. **getLocationsbyCoordinatesMessage** – A message node with the script to display responses.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to get the location using the coordinates, as shown below.  
<img src="../images/google-maps-action-img11-tem-img2.png" alt="VA prompts to get location using coordinates" title="VA prompts to get location using coordinates" style="border: 1px solid gray;zoom:50%;"/>

6. To view the location details click and expand the desired item in the results.  
<img src="../images/google-maps-action-img12-tem-img4.png" alt="View location details" title="View location details" style="border: 1px solid gray;zoom:50%;"/>
