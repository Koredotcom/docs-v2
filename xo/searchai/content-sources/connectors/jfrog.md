# JFrog Connector

**JFrog Artifactory** is a universal repository manager that supports multiple package formats such as Maven, PyPI, NPM, and more. It enables organizations to manage both internal and external artifacts efficiently by providing centralized control, building metadata tracking, fine-grained access, and integration with DevOps tools.

The connector enables Search AI to access JFrog repositories for indexing artifacts, retrieving metadata, and serving as an ideal integration point in RAG-based solutions.

## JFrog Connector Specifications

<table>
  <tr>
   <td><strong>Type of Repository</strong>
   </td>
   <td>Cloud or On-Prem
   </td>
  </tr>
  <tr>
   <td><strong>Content Supported</strong>
   </td>
   <td>Artifacts 
   </td>
  </tr>
  <tr>
   <td><strong>RACL Support</strong>
   </td>
   <td>Yes
   </td>
  </tr>
  <tr>
   <td><strong>Content Filtering</strong>
   </td>
   <td>No
   </td>
  </tr>
</table>

## Connector Configuration

Search AI integrates with JFrog via APIs. To establish this connection, you need a valid Identity Token with admin permissions for the target projects and repositories.

### Create an Identity Token in JFrog

1. Sign in to your [JFrog](https://jfrog-dev.kore.ai/ui/login){:target="_blank"} Artifactory account.

2. Go to your **User Profile** > **Identity Token**.

3. Click **Generate Identity Token**.

4. Under Scopes, select "admin" to assign administrator privileges.

5. Click **Generate**, then **copy the token**.  
<img src="../images/jfrog/identity-token.png" alt="Identity token in Jfrog" title="Identity token" style="border: 1px solid gray; zoom:35%;">

### JFrog Connector Configuration in Search AI

On the Authentication page, provide the following details:

* **Name**: Enter a unique name for this connector.
* **API Key**: Enter the identity token generated from your JFrog Artifactory account.
* **Host URL**: Enter the base URL of your JFrog Artifactory instance.

Ensure that the domain name is explicitly defined. For example: `https://jfrog-xxxx/`

After entering all details, click **Connect** to validate access and proceed with the configuration.

<img src="../images/jfrog/authentication.png" alt="JFrog Connector Configuration in Search AI" title="Authentication page" style="border: 1px solid gray; zoom:75%;">

## Content Ingestion

Upon a successful connection, Search AI ingests artifacts from JFrog Artifactory, enabling intelligent and context-aware responses. All the artifacts from the various repositories and projects linked to the account used for authentication are ingested into the Search AI application.

Each artifact is processed as a distinct document in Search AI, with key fields:

* doc_source_type: Indicates the type of content ingested. Value: **Artifact**.
* content: Contains the metadata associated with the artifact.
* repository_name: Name of the repository where the artifact is stored.
* project_name: Name of the project the artifact is associated with.
* project_id: Unique identifier of the related project.
* cfs4: Repository type. Example: LOCAL.
* cfs5: Package type. Example: Generic.

## RACL Support:

* In JFrog, each artifact is linked to a specific project via a unique **Project ID**.
* This Project ID is stored in the **RACL field** of the ingested data from JFrog.
* Associate users with the relevant Project ID using the [Permission Entity APIs](../../../apis/searchai/permission-entity-apis.md). Users added to these corresponding permission entities will gain access to data related to artifacts.