# API Scopes and API Keys

API Scopes define the level of access granted to different components within an application via the platform's public APIs.  By configuring API Scopes, admins can enforce fine-grained access control and ensure that only authorized users or client applications can perform specific operations.

Each API Scope can be linked to one or more API Keys. The generated API Key must be included as the authentication key when calling the platform’s Public APIs, allowing the system to validate and enforce the permissions defined in the scope.

**Benefits**

* Control which app components a user can access.
* Restrict or enable APIs at a granular level.
* Prevent unauthorized use of sensitive app capabilities.
* Maintain secure and predictable behavior.


## Create a New API Scope

To set access permissions, create a new API Scope. Enter the permissions for the scope. 

**App Components**

Agents: Configure the level of access granted to manage agents within the app.


| Permission Level | Description |
|:------ |:------ |
| None | No access to agents. |
| View | Can view the list of agents in the application and the details of an agent. |
| Edit | Can edit and update existing agents. |
| Full | Full administrative access, including creation, updates, and deletion of agents. |


**Execute Runtime Permissions**

These permissions control which runtime operations the API key is allowed to perform.

* Run API - Enables the user to execute an agent run using the Execute endpoint. Note that this API also enables the user to create a new session if it doesn't already exist. 
* Session Create  - Enables the user to create new user sessions. 
* Session Terminate API  - Enables the user to terminate existing sessions. 
* Document Upload - Enables users to upload documents to sessions.


## Generate an API Key

Once the scope is created, go to the list of scopes and select Manage Keys under Options. 

![manage keys](images/api-keys/manage-keys.png "Manage Keys")


Click on New API Key , provide a name for the key, and click Create. This generates a unique key automatically. Copy the key for passing in the APIs.

![New Key](images/api-keys/new-key.png "Create New Key")


When you revoke a key, it becomes invalid and can no longer be used to access any application resources.

<Note> Keys are not revoked automatically. There is no expiration time associated with them, and they remain valid until explicitly revoked. </Note>
