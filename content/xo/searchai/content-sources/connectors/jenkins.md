# Jenkins Connector

Jenkins is an open-source automation server primarily used for **Continuous Integration (CI) and Continuous Deployment (CD)** in software development. 

**<span style="text-decoration:underline;">Jenkins Connector Specifications</span>**


<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>On-Premise
   </td>
  </tr>
  <tr>
   <td>Content Supported
   </td>
   <td>
<ul>

<li>Jenkins Dashboards</li>

<li>Jobs</li>

<li>Builds</li>

<li>Plugins</li>
</ul>
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



## Connector Configuration

Search AI interacts with Jenkins through its APIs. API communication requires an API token to authenticate the requests sent to Jenkins. 


## Generate an API token in Jenkins

Follow the steps listed below to generate the API Token. 

* Sign in to Jenkins.
* Click on your **Username**.
* Go to Configure.
* Scroll down to API Token and click **Add New Token**.
* Generate and copy the token (store it securely).

## Jenkins Connector Configuration in Search AI

On the **Authorization** tab of the connector, enter the following details.

* Name - Unique name for the connector. 
* Jenkins Server URL  - URL of the hosted application. 
* Username - Username of the user whose account is used for ingestion. 
* API Token - API token generated above. 

Click **Connect** to authenticate and set up a connection with the Jenkins account. 


## Content Ingestion

Search AI enables the ingestion of data from the Jenkins dashboard and the building of pages, jobs, and plugins.

**Dashboard**

Dashboards provide a summary of the jobs in the instance. The content field in the ingested document contains information like total jobs, successful jobs, failed jobs, details of the jobs, information on the configuration, and state of the instance like the mode, node description, number of executors, etc. 

**Jobs**

Search AI also ingests and enables search on the configuration and status of a particular job. The name of the job is captured in the title field. For each job, the content field captures job properties like buildable, health score, build stability, and information about recent builds. 

**Builds**

For builds, the content ingested includes the name of the build, build number, build parameters, the initiator for the build, the contributors of the build, the total duration of the build, etc.

**Plugins**

Search AI ingests information about the plugins installed on the Jenkins instance. Each plugin record is ingested as a separate document. For each plugin, the name of the plugin is captured as the title in the ingested record. Search AI fetches other plugin details like the version number, the required core version, and the status of the plugin and stores them in the content field. 
