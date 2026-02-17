# TestRail Connector

**TestRail** is a test management tool to create, organize, and track test cases, runs, and results. It helps QA teams manage manual and automated testing efficiently with real-time reports and integrations.

**<span style="text-decoration:underline;">TestRail Connector Specifications</span>**


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
   <td>
<ul>

<li>Test cases</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>No
   </td>
  </tr>
</table>



## Connector Configuration

Search AI interacts with TestRail through its APIs. API communication requires an API token to authenticate the requests sent to TestRail. 


## Generate an API token in TestRail

Follow the steps listed below to generate the API Token. 



* Log in to your TestRail instance.
* Click on your profile name in the top-right corner and select **My Settings**.
* Go to API Keys tab.
* Provide a name for the key and click Generate Key. 
* Copy the api key generated. 


## TestRail Connector Configuration in Search AI

On the **Authorization** tab of the connector, provide the following details.



* Name - Unique name for the connector. 
* Domain  - URL of your TestRail instance.
* Username - Username of the account used for ingestion. 
* API Key - API Key generated in TestRail. 

Click Connect to authenticate and set up connection with the TestRail instance. 


## Content Ingestion

Once the TestRail account is successfully connected, navigate to the **Configuration** tab and click **Sync Now** to begin content ingestion. You can also schedule a one-time or recurring sync using the **Scheduler**.

During ingestion, the connector retrieves details of all testcases across various projects in the connected TestRail instance. Each test case is ingested as a **separate document** in Search AI with the following structure. 



* **Title**: Title of the testcase. 
* **URL**: Direct link to the test case in TestRail.
* **Priority**: Priority of the test case. 
* **Content**: The content field contains the title of the test case, preconditions for the test case, steps to execute in the test case, description of the test case,mission, goal, type, milestone that it belongs to, references and the suite that the test case is part of.
* **Project ID and Project Name**: References to the project that the test case belongs to
* **Priority:** Priority of the test case.


## RACL Support

Currently, Search AI connector supports project level access to the test cases. For each test case, the sys_racl field is set to the Project ID. It is saved as a permission entity object. Use the Permission Entity APIs to associate users with the project ID. 
