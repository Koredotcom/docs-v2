# Kore.ai Connectors

On the **Kore.ai Connector** page, in the **Security & Control** module of the Admin Console, you can download and configure the Kore.ai Connector Agent for Apps within your secure company intranet to provide secure communications between the XO Platform in the cloud and your network.

## Why Kore.ai Connector?

Kore.ai Apps are designed to make updates, provide notifications to users, and perform tasks. The tasks to perform are received from or performed on third-party applications available over the Internet as web-based applications or on-premises AI Agents applications.

In a Kore.ai Apps on-premises system, communications security is maintained by restricting users and systems within the company intranet or by configuring specific channels for specific data exchange. On the contrary, Kore.ai Apps reside and process data in the cloud environment and cannot directly connect to your AI Agents' premises applications.

You can use the Kore.ai Connector Agent to establish and maintain secure data connectivity between Kore.ai and your on-premises applications within your intranet.

The Kore.ai Connector is a stand-alone application that is installed and configured within your company intranet configured with restricted and secure connectivity to specified AI Agent applications. The Kore.ai Connector Agent is designed to pass requests for data access between your on-premises applications and Kore.ai to process the specific AI Agent tasks configured by an end-user with rights and privileges for those applications.

The following illustration shows the **Kore.ai Connector** page in the Admin Console **Security & Control** module.

<img src="../images/kore-ai-connector-img1.png" alt="Kore.ai connector page" title="Kore.ai connector page" style="border: 1px solid gray;zoom:70%;"/>


**Kore.ai Connector Page Controls**

The following controls are available on the **Kore.ai Connector** page in the Admin Console.

**Download Connector** – Click the **Download Connector** drop-down arrow in and then select one of the following operating systems:

* Windows Based
* Unix/Linux Based

Download the Kore.ai Connector Agent to your default browser downloads directory. Install the agent in your DMZ or Intranet. For more information, see [Installing the Kore.ai Connector Agent](#installing).

**Add Connector** – Click to add up to two connectors. After a connector is added, you should install and configure the Kore.ai Connector Agent.

**Actions Menu** – On the **Kore.ai Connector** page, against each added connector, click the **Ellipsis**  icon to display the **Actions** menu to run the following commands:

* **Instructions** – Displays the **Connector Instructions** dialog that describes the overall steps to install and configure the Kore.ai Connector Agent.
* **Edit** – Displays the **Connector Details** dialog that shows the Kore.ai Connector name, description, ID, status as CONNECTED or DISCONNECTED, and **Last Connected** date.
* **Generate Certificate** – Displays the Generate Signed Certificate dialog used to create a .pem file for security along with instructions on how to create the file. For more information, see [Installing the Kore.ai Connector Agent](#installing).
* **Enable/Disable** – Click to show the **Are you sure you want to enable this connector?** dialog. Click Continue to enable the connector. When enabling a connector, any other enabled instances of the Kore.ai Connector Agent are disabled.
* **Delete** – Click to display the **Delete Connector** dialog. To permanently delete the connector, click **Confirm**.


## About

The Kore.ai Connector is an agent that runs behind your AI Agent firewall within your company Intranet or perimeter network (DMZ) to provide secure data exchange between Kore.ai which operates in the cloud and your on-premises applications.

In the following diagram, end-users configure a Kore.ai Agent that connects to Kore.ai in the cloud. The Kore.ai Agent servers (5) contact the Kore.ai Connector Gateway (2) with the AI Agent request. The Kore.ai Connector Gateway relays the request to the Kore.ai Connector (3) installed and securely configured in your on-premises Intranet or DMZ to interact with your AI Agents applications. The response from your applications is sent through the Kore.ai Connector back out to the Kore.ai cloud and processed. Optionally, you can enable your on-premises applications to push data, for example, alert messages, to the Kore.ai cloud using webhooks.

<img src="../images/kore-ai-connector-img2.png" alt="About Kore.ai connector" title="About Kore.ai connector" style="border: 1px solid gray;zoom:70%;"/>
 

**How it Works**

After you install the Kore.ai Connector in your network, you configure the agent with details to specifically access, communicate, and request or post data to the AI Agents application you define.

When started, the Kore.ai Connector Agent initiates a persistent SSL connection with Kore.ai and monitors requests for data transfer to or from your AI Agents applications and Kore.ai. If the persistent connection is broken, the Kore.ai Connector automatically attempts to reestablish communication. You can monitor connectivity directly in the Admin console.


## Installing

This topic describes how to install and configure the Kore.ai Connector Agent for Kore.ai Apps that you can use to securely connect the cloud-based XO Platform to your on-premises applications in your company Intranet.

**Prerequisites**

To install the Kore.ai Connector, you should review the following hardware and software requirements.

**Hardware Requirements**

The server hosting the Kore.ai Connector Agent should have:

**RAM:** 4 GB

**CPU Core:** 8

**Hard disk space:** 10 GB

To support the following:

* Kore.ai Connector download – 10MB
* Installation Files – 20MB
* Logging and Configuration Files – &lt; 5GB

**Software Requirements**

The Kore.ai Connector supports both Windows and Linux operating systems as follows:

**Linux/Unix**

The following Red Hat® Enterprise Linux® versions are supported:

* RHEL 7.x or higher
* RHEL 5 (32-bit and 64-bit)
* RHEL 6 (32-bit and 64-bit)
* RHEL 7 (64-bit)

The following CentOS versions are supported:

* CentOS 7.x or higher
* CentOS 5 (32-bit and 64-bit)
* CentOS 6 (32-bit and 64-bit)
* CentOS 7 (64-bit)

**Node.js** (version 10 or higher) – Required to run the Kore.ai Connector Agent. Download and install from [https://nodejs.org/en/download/](https://nodejs.org/en/download/){:target="_blank"} on the server where the Kore.ai Connector Agent is installed.

**Windows**

The following Microsoft Windows 64-bit operating systems are supported:

* Windows 7 (64-bit)
* Windows 8.1 (64-bit)
* Windows 10 (64-bit)
* Windows Server 2008 R2 (64-bit)
* Windows Server 2012 (64-bit)
* Windows Server 2012 R2 (64-bit)

**Node.js** – Required to run the Kore.ai Connector Agent. Download and install from [https://nodejs.org/en/download/](https://nodejs.org/en/download/){:target="_blank"} (version 10 or higher)on the server where the Kore.ai Connector Agent is installed. In addition, you must also install the **forever** module. After node.js is installed, run the following command to install the **forever** module:

`npm  install forever -g`

**Installation Process**

This section describes the installation and configuration of your application server where the Kore.ai Connector Agent is installed, the configuration required in the Admin Console, and finally, enabling enterprise Apps for the Kore.ai Connector Agent and deploying the upgraded Apps for enterprise users.


## Adding

In the Admin Console, you begin by adding a connector. When you add a connection, a unique ID is created for your company and your unique Kore.ai Connector.

1. In the Admin Console, in the **Security & Control** module, on the **Kore.ai Connector** page, click **Add Connector**. The **Add Connector** dialog is displayed.
2. Optionally, in the first field, edit the name of the connector, and then enter a **Description** for the connector in the second field.
3. Click **Add**. The **Connector Instructions** dialog is displayed as shown in the following illustration.  
<img src="../images/kore-ai-connector-img3.png" alt="Adding Kore.ai connector - Connector instructions" title="Adding Kore.ai connector - Connector instructions" style="border: 1px solid gray;zoom:70%;"/>

4. In the **Connector Instructions** dialog, click **OK**. The **Kore.ai Connector** page is displayed.
5. In the Download Connector drop-down list, select you operating system and download the Kore.ai Connector Agent compressed file, one of:
    1. **Linux/Unix** – kore-connector-1.0.0.tar.gz
    2. **Windows** – kore-connector-1.0.0.zip

6. Copy, and then uncompress the file to your application server.
    1. For Linux, use the following command:
      `tar -xvf kore-connector-X.X.X.tar.gz
    
    2. For Windows, in File Explorer, right-click the file and select **Extract to** on the command menu.

The Kore.ai Connector Agent file is uncompressed into the following directory structure.

<img src="../images/kore-ai-connector-img4.png" alt="Kore.ai connector directory structure" title="Kore.ai connector directory structure" style="border: 1px solid gray;zoom:70%;"/>


**Generating a Signed Security Certificate**

For secure data exchange between the Kore.ai servers in the cloud and your intranet, you need to generate a signed security certificate. First, create a .csr file on your application server using the command displayed in the Admin Console, and then paste the content of the .csr file into the **Generate Signed Certificate** dialog. The .csr content is used to generate and download the .pem file. You will then copy the .pem file back to the Kore.ai Connector Agent installed on your application server.


1. In the Admin Console, in the **Security & Control** module, on the **Kore.ai Connector** page, click the **Ellipsis**  icon.
2. On the **Actions** menu, click **Generate Certificate**. The **Generate Signed Certificate** dialog is displayed as shown in the following illustration.  
<img src="../images/kore-ai-connector-img5.png" alt="Generate Signed Certificate dialog" title="Generate Signed Certificate dialog" style="border: 1px solid gray;zoom:70%;"/>

3. Review the instructions, and then copy your custom command displayed after step 6 in the instructions as shown in the following illustration.  
<img src="../images/kore-ai-connector-img6.png" alt="Review the instructions and copy custom command" title="Review the instructions and copy custom command" style="border: 1px solid gray;zoom:70%;"/>

4. Paste and run the command on your application server within your company intranet in the _/Credentials_ directory created when you installed the Kore.ai Connector Agent.
5. In the _/Credentials_ directory, the Kore.aiConnector.csr file is created, along with the Kore.aiConnector.key file. Open the Kore.aiConnector.csr file using a text editor, and copy the entire contents of the file, and then paste the contents into the **Certificate signing request** field in the **Generate Signed Certificate** dialog as shown in the following illustration.  
<img src="../images/kore-ai-connector-img7.png" alt="Paste file contents in Generate Signed Certificate dialog" title="Paste file contents in Generate Signed Certificate dialog" style="border: 1px solid gray;zoom:70%;"/>

6. Click **Generate**. The **Download Certificate** and **View Certificate** buttons are displayed.
7. Click **Download Certificate**. The Kore.aiConnectorCert.pem file is downloaded to your local computer browser default downloads folder.
8. Copy the Kore.aiConnectorCert.pem file to the /Credentials folder created when you installed the Kore.ai Connector on your application server.

Your security files are in-place on the application server.


## Configuring 

After you install the Kore.ai Connector Agent software, you must verify or set the properties for:

* **Certificate Information** – See `credentials` in the connectorconfig.json file.
* **Log Directories** – See `logger` in the connectorconfig.json file.
* **Cluster Environment** – See `cluster` in the connectorconfig.json file.
* **Proxy Control for Outbound Connections** – See `tunnel` in the connectorconfig.json file.
* **Access Control for Enterprise Applications** – See the accesscontrol.json file.

**Default Configuration Settings – connectorconfig.json**

This section shows the default configuration settings for certificate information, logging, and cluster mode settings in the &lt; **_Kore.ai Connector agent Installation Path_** >/config/connectorconfig.json file:

```
{
   "credentials":{
      "key":"./credentials/Kore.aiConnector.key",
      "cert":"./credentials/Kore.aiConnectorCert.pem",
      "ca":"./credentials/ca.crt"
   },
   "logger":{
      "applogs":{
         "path":"./logs",
         "level":"info"
      },
      "auditlogs":{
         "path":"./audits",
         "level":"info"
      }
   },
   "cluster":{
      "enabled":true,
      "workers":2
   }
}
```


**Certificate Information**

You may want to store the security keys for the Kore.ai Connector Agent in another location other than the installation directory for the Kore.ai Connector Agent. You can move the credential files to another directory on the application server or another server in the network and specify the relative or absolute path in the `credentials` section in the connectorconfig.json file that contains the following parameters:

* `key` – The client certificate. Default setting is:
`./credentials/Kore.aiConnector.key`
* `cert` – The .pem file generated in the Admin Console. Default setting is:
`./credentials/Kore.aiConnectorCert.pem`
* `ca` –  Installed as part of the Kore.ai Connector Agent. Default setting is:
`./credentials/ca.crt`

**Logging Configuration**

The Kore.ai Connector Agent generates two logging files at runtime:

* kore-connector.log.&lt; **_dd-MM-yyyy_** > – Application logging events to include:
    * **Connector status** – Any change in status such as agent start or stop is added **as a log entry.**
    * **Errors** – Any error message for the agent is captured in the app.log file.

* kore-connector-audit.log.&lt; **_dd-MM-yyyy_** > – Audit logging events.
    * **Configuration changes** – Any changes in connectorconfig.json file and accesscontrol.json file. The original file is backed up automatically and a log entry is made.
    * **Requested URLs** – All requested URLs coming into the Kore.ai Connector are captured as a log entry.

By default, logging files for the application and auditing logs are created and stored in the default installation pat in the &lt; **_Kore.ai Connector Agent Installation Path_** >/logs and &lt; **_Kore.ai Connector Agent Installation Path_** >/audits. You can specify another directory on the application server or another server in the network and specify the full path.
You can also increase or decrease the logging levels as needed for either logging file as:



* **fatal** – Any error that is forcing a shutdown of the service or application to prevent data loss or further data loss. Occurs only once in a process and is usually the last entry in a log.
* **critical** – An error which requires immediate investigation that has not yet shut down a service or application, but is likely to do so.
* **error** – Any error which is fatal to the current operation but not fatal to the service or application, for example, cannot open a file, missing file, or missing data. This type of errors usually requires administrator intervention.
* **warn** – Anything that can potentially cause application abnormalities with the ability to recover, for example, switching from a primary to backup server, retrying, or missing secondary data.
* **info** – General information about normal application operations such as start and planning stopping of service, configuration assumptions, and so forth. This is the default setting for the Kore.ai Connector Agent.
* **debug** – Diagnostic information, usually for system administrators and IT personnel.
* **trace** – All operational information, for example, parts of a function.

Each log level below fatal includes the information from any logging level above. For example, the default level as info includes all the information for fatal, critical, error, warn, and info in the log file.

**Scalability and Cluster Configuration**

The Kore.ai Connector Agent is scalable to handle the request load as required. When you install the Kore.ai Connector Agent, cluster mode settings are enabled by default, with 2 workers, or CPUs, set for use.

For increased load handling for requests by the Kore.ai Connector Agent, you may want to enable more workers. If you do not want to use cluster mode, set the “enabled” property to false.

You can also run cloud connectors in more than one server to meet failover as well as scalability requirements. Certificate and other configurations will remain same. Cloud Connector is a client which makes outboud connection to Kore.ai Cloud Gateway. When more than one connectors are connected, Cloud Gateway will distribute the load to the connectors.

**Proxy Control for Outbound Connections**

You can configure outbound proxy settings for the Kore.ai Connector Agent in the &lt; **_Kore.ai Connector agent Installation Path_** >/config/connectorconfig.json file. This configuration is optional unless all of your outbound data is routed through a proxy server.
To configure outbound proxy settings, add the following configuration shown as the entry labeled tunnel_ _in the following configuration sample:


```
{
   "credentials":{
      "key":"./credentials/Kore.aiConnector.key",
      "cert":"./credentials/Kore.aiConnectorCert.pem",
      "ca":"./credentials/ca.crt"
   },
   "logger":{
      "applogs":{
         "path":"./logs",
         "level":"info"
      },
      "auditlogs":{
         "path":"./audits",
         "level":"info"
      }
   },
   "cluster":{
      "enabled":true,
      "workers":2
   },
   "tunnel":{
      "proxyHost":"hostname",
      "proxyPort":"portnumber"
   }
}
```


**Access Control for Applications**

The Kore.ai Connector Agent requires an explicit set of white-listed URLs to access specific applications on your company intranet. Any other HTTP requests are denied by the Kore.ai Connector.
You must configure access control for each app application that will use the Kore.ai Connector Agent in the accesscontrol.json file in the Kore.ai Connector installation directory in the …/config/configs directory with the following parameters:

* **virtualhost** – Specify the virtual host name exactly as specified in the **Request URL** property in the **Set Up Request Chain** dialog while configuring on-premises apps in the App Builder tool. For more information, see [Defining a Request Chain Object](../automation/use-cases/alert-tasks.md){:target="_blank"} in the App Builder documentation.
* **virtualport** – Specify the virtual port exactly as specified in the **Request URL** property in the **Set Up Request Chain** dialog while configuring on-premises Apps in the App Builder tool. For more information, see [Defining a Request Chain Object](../automation/use-cases/alert-tasks.md){:target="_blank"} in the App Builder documentation.
* **internalhost** – Specify the actual host name of the on-premises enterprise application used for data exchange with your Apps.
* **internalport** – Specify the actual port of the on-premises enterprise application used for data exchange with your Apps.
* **protocol** – Specify HTTP or HTTPS for the connection to on-premises enterprise applications.
* **allowedPaths** – Specify all paths as “/*” or a specific array of paths for the host, not to include any parameters. The Kore.ai Connector checks the path up to, but not including parameters beginning with " ? "

The following image is an example of a configured accesscontrol.json file with four AI Agent configurations.

<img src="../images/kore-ai-connector-img8.png" alt="configured accessconteol.json" title="configured accesscontrol.json" style="border: 1px solid gray;zoom:70%;"/>

!!! Note

      Comments cannot be used in configuration files.


## Starting

This section describes how to start or stop the Kore.ai Connector Agent on Windows or Linux operating systems.

**Linux/Unix Operating Systems**

On Linux operating systems, you can manually start the Kore.ai Connector Agent, or configure the Kore.ai Connector Agent to autostart on boot.

**Manually Starting/Stopping the Kore.ai Connector on Linux**

Manually start or stop the Kore.ai Connector Agent on the Linux/Unit application server by running the following commands in the Kore.ai Connector installation directory, and check the status as follows:

```
./koreconnector.sh start
./koreconnector.sh stop    
./koreconnector.sh status
```


The following image shows the response for a successful start and status check of the Kore.ai Connector.

<img src="../images/kore-ai-connector-img9.png" alt="successful start and status check of the Kore.ai Connector" title="successful start and status check of the Kore.ai Connector" style="border: 1px solid gray;zoom:70%;"/>


**Configuring Kore.ai Connector for Autostart on Linux**

This section describes how to set the Kore.ai Connector Agent to automatically start when the Linux server is started or rebooted.

To configure the autostart for the Kore.ai Connector Agent, on the application server, in the …/etc/rc.local file, add the following command:

`cd &lt;Kore.ai Connector&nbsp;Installation Root> ; ./koreconnector.sh start`

For example:

`cd /home/CompanyAdmin/kore-connector ; ./koreconnector.sh start`

**Windows Operating Systems**

On Windows operating systems, you can manually start or stop the Kore.ai Connector Agent, and check the status of the Kore.ai Connector Agent.

**Manually Starting/Stopping the Kore.ai Connector on Windows**

Manually start or stop the Kore.ai Connector Agent on the Windows application server by running the following commands in the Kore.ai Connector installation directory, and check the status as follows:

```
.\koreconnector.cmd start
.\koreconnector.cmd stop    
.\koreconnector.cmd status
```

## Enabling Apps 

In this section, you can verify the connection to the Kore.ai Connector Agent in the Admin Console, and then enable the connection. When the connection is enabled, you can modify your custom Apps in the App Builder tool to use the Kore.ai Connector, publish those Apps, and then in the Admin Console, deploy the published Apps and assign the Apps to users in your company.

1. In the Admin Console, in the **Security & Control** module, on the **Kore.ai Connector** page, verify the Kore.ai Connector status as CONNECTED, click the **Ellipsis** icon, and then on the **Actions** menu, click **Enable** as shown in the following illustration.  
<img src="../images/kore-ai-connector-img10.png" alt="Enable bots" title="Enable bots" style="border: 1px solid gray;zoom:70%;"/>

2. In App Builder, for each AI Agent task that you want to run using the Kore.ai Connector, clone or upgrade each AI Agent.  
      1. In the **Set up Request Chain Object** dialog, select **Access using connector**, save the changes, and then publish the App. For more information about configuring the request object, see [Configuring an Alert Task Request Object](../automation/use-cases/alert-tasks.md#configuration){:target="_blank"} in the App Builder tool documentation.  

         **Note:** The option in the **Set up Request Chain Object** dialog for **Access using connector** is only available after the Kore.ai connector is enabled in the Admin Console.

3. In the Admin Console, deploy the published App and assign the users that can use the AI Agent tasks in your enterprise. For more information, see [App Management](bot-management.md){:target="_blank"}.

After the Kore.ai Connector is installed on your application server, enabled in Admin Console, and your Apps customized to use the connector, you only need to monitor the status of your connector in the Admin Console.
If you cannot start the Kore.ai Connector, or customers are reporting errors, you may need to reconfigure Kore.ai Connector settings.


## Troubleshooting

Installing and configuring the Kore.ai Connector Agent involves many steps. And even after installation, you may need additional configuration to maintain connectivity between Kore.ai Agent and your on-premises applications. This topic describes some of the typical issues that may arise, and how to handle those issues.

**Kore.ai Connect Agent Server Issues**

**Kore.ai Connector Fails to Start**

**Log Error Message:** TypeError: Object #&lt;Object> has no method ‘parse’
**Solution:** The server may have multiple node.js installations with different versions. You may need to specify which node.js version to run.
To check for versions, run the following command:

`nvm list`

This command may return:

```
v0.10.29
v0.10.30
v0.10.31
v0.10.35
v0.10.36
v0.11.13
v0.12.2
v0.12.4
v4.0.0
```

To set the version to use, run the following command:

`nvm use v4.0.0`

The command should return:

`Now using node v4.0.0`

**Client Issues**

Users in your organization may experience connectivity issues with the Kore.ai Connector.

* **Error Message:** _“&lt; Enterprise application >” is not reachable. Unable to communicate with the connector. Please try again._
    * **Solution:** The “virtualhost” entry in the _**< Kore.ai Connector Install Dir >**/config/configs/accesscontrol.json_ file is not defined, or is incorrectly configured. Verify the entry.

* **Error Message:** _The server returned an error. Try again later. (404 – System not reachable)._
    * **Solution:** Connectivity between the Kore.ai Connector on your application server and the Kore.ai Gateway is broken. The Kore.ai Connector Agent may have stopped running. You may need to restart the Kore.ai Connector on the application server.

If you cannot resolve your issue, contact Kore.ai Support.