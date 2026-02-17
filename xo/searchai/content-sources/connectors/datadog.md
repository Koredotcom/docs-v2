# Datadog Connector

Datadog is typically used for monitoring, observability, and security of cloud-scale applications. It helps teams track the performance of infrastructure, applications, logs, and user behavior in real time through dashboards, alerts, and analytics.

Search AI enables intelligent search through information available in **Metrics**, **Dashboards**, and **Monitors** within Datadog.

**<span style="text-decoration:underline;">Datadog Connector Specifications</span>**


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

<li>Metrics</li>

<li>Dashboards</li>

<li>Monitors</li>
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

Search AI fetches the information from Datadog application using its APIs. To authenticate the requests sent to the Datadog application, you need an API key and an Application key.


### Generate an API Key

1. Sign in to your Datadog account and navigate to the [Organization Setting](https://us5.datadoghq.com/organization-settings/api-keys). 
1. Go to the API Keys page and click **+New Key**.
1. Enter a name to identify the key and click **Create Key**.
1. This generates a new key. Save it for configuration in the Search AI connector. 


### Generate an Application Key

1. Sign in to your Datadog account and navigate to the [Organization Setting](https://us5.datadoghq.com/organization-settings/api-keys)s. 
1. Go to the Application Keys page from the left navigation and click **+New Key**.
1. Enter a name to identify the key and click **Create Key**.
1. This generates an application key. 

### Datadog Connector Configuration in Search AI

On the **Authorization** tab of the connector, enter the following details:

1. **Name**: Unique name for the connector. 
1. **API Key**: Provide the API Key generated in the Datadog application. 
1. **Application Key**: Provide the Application Key generated in the Datadog application. 
1. Click **Connect** to initiate authentication. 
