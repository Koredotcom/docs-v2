# Shopify Connector

**Shopify** is a leading e-commerce platform that allows individuals and businesses to create their online stores and sell products or services.

Shopify Connector facilitates the seamless ingestion of **blogs** from the Shopify application. 

**<span style="text-decoration:underline;">Shopify Connector Specifications</span>**


<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Content Supported
   </td>
   <td>Blog Articles
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>No
   </td>
  </tr>
</table>



## Prerequisites 

Admin account on Shopify


## Shopify Configuration

Search AI interacts with the Shopify application through Shopify Admin APIs. To enable this communication, set up an app on Shopify. Follow the steps listed below. 

* Sign to the Shopify admin portal. 
* Go to **Apps and Sales Channels**.
* Click **Develop apps** and **create an app**. 
* Enter the name and other details of the app.
* Enable the following **admin scopes** and click **Save**.
    * read_content
* Go to the **API Credentials** tab and **Install app** to generate an access token. This token is used to configure the Search AI connector. 


## Shopify Connector Config in Search AI

Go to the **Auth** page for the connector and enter the following details. 

* Name - Unique name for the connector
* Store Host URL - URL of the Shopify account. 
* Admin API access token - Provide the access token generated in the Shopify app. 
* Click **Connect** to initiate the authentication and connection process. 


## Content Ingestion

The Shopify connector is designed to ingest **blog articles** from your Shopify account seamlessly. Please note that only the articles published or visible at the time of sync are ingested into the Search AI app, ensuring that only accessible content is utilized for search functionalities. If the visibility status of an article is updated after the sync, the changes will reflect in Search AI only after the next sync. 

The content field in the ingested document contains the textual content of the blog, while the metadata like author, labels, and URL are captured in specific fields.
