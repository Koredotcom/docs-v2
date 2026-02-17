# Figma Connector

Figma is a collaborative design tool primarily used to create user interfaces and user experience designs. It also provides FigJam boards, which serve as an interactive whiteboard space for brainstorming, ideation, and team collaboration.

The Search AI feature allows users to ingest metadata about design files and boards, making it easier to search for details and identify the necessary designs in one place.

**<span style="text-decoration:underline;">Figma Connector Specifications</span>**


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
   <td> Figma Files
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



## Figma Connector Overview

Each account in Figma can be associated with one or more teams. **Teams** are the top-level entities where users collaborate. Within teams, **projects** act as containers to organize related design files and FigJam boards. Each project contains **files**, which further have **pages** to separate screens or iterations. 

Search AI ingests files from the given list of teams. Only the files visible to the account used for authenticating Search AI requests are ingested into the application. Each file is ingested as a separate document in Search AI. 


## Connector Configuration

Search AI interacts with Figma through its APIs. To set up this communication and fetch relevant data from Search AI, it is required to authenticate the requests to the Figma API. Search AI currently supports **personal access token** for authentication. 


### Generating Personal Access Token in Figma Account

1. Sign in to your Figma account.
1. Click on your account name in the top-left corner and select Settings.
1. Navigate to the Security tab.
1. Scroll down to the Personal Access Tokens section and click Generate new token.
1. Enter a name for the token.
1. Enable the following scope:
    * File content: Read-only
1. Click Generate Token. 
1. Copy the generated token immediately. 

Note that the token will not be visible after navigating away from the page. 


### Figma Connector Configuration in Search AI

Go to the Figma Connector in the Search AI application. On the **Authorization** tab, provide the following details:

* Name - Unique name for the connector
* API Key - Personal Access Token generated in the Figma application. 
* Team IDs - Enter a list of team IDs for file ingestion. Type a team ID and press Enter for each one. To obtain the team ID, navigate to the team page in the Figma file browser. The team ID is present in the URL after the word "/team/" team.


## Content Ingestion

Each ingested record corresponds to a file in the Figma application. The title of each page that is part of the file is added to the content field of the record. The team name and the project name to which a file belongs are added as `team_name` and `project_name`, respectively. 
