# Using Session and Context Variables in Tasks

When you define tasks, you can access session variables provided by the Bots Platform, or custom variables that you define, as well as the context object that defines the scope of the variable.

For example, some API requests may require you to set session variables before request execution, or a dialog task component may need to access a session variable to transition to the next node. In addition, a dialog task can access the `context` object with additional system variables. For more information, see [Context Object](../intelligence/context-object.md).

You can use session variables where you define JavaScript for the User Prompt editor in tasks under the JavaScript tab.

## Session Variables

This section describes the context variables and the scope of the context variables that you can use in your custom JavaScript code for your tasks.

The JavaScript syntax to GET, PUT, or DELETE a key/value pair for each context type is:

```js
  "EnterpriseContext" : {
       "get" : function(key){...},//get the specified key
       "put" : function(key, value, ttl){...} //put the value at the key for the specified ttl, ttl is in minutes
       "delete" : function(key)//remove the specified key
   },
   "BotContext" : {
       "get" : function(key){...},//get the specified key
       "put" : function(key, value, ttl){...} //put the value at the key for the specified ttl, ttl is in minutes
       "delete" : function(key)//remove the specified key
   },
   "UserContext" : {
       "get" : function(key){...},//get the specified key
   },
   "UserSession" : {
       "get" : function(key){...},//get the specified key
       "put" : function(key, value, ttl){...} //put the value at the key for the specified ttl, ttl is in minutes
       "delete" : function(key)//remove the specified key
   },
   "BotUserSession" : {
       "get" : function(key){...},//get the specified key
       "put" : function(key, value, ttl){...} //put the value at the key for the specified ttl, ttl is in minutes
       "delete" : function(key)//remove the specified key
   }
```

For example:

```js
BotContext.put("topicSessionVariable","music",2000);
UserSession.put("firstName","Mary",20000);
UserContext.get("firstName");
```

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>put (), get (), and delete () methods support EnterpriseContext, BotContext, UserSession, and BotUserSession object types. UserContext session type is supported only for the get () method.</p>
</div>

### delete() method

The **delete()** method is used to delete only the root-level object.

For example,

```js
var Company = {

	"name":"Kore.ai"

}

var Address = {

	"location": "Hyd"
}

BotUserSession.put("Company", Company);
BotUserSession.delete("Company");
```

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The syntax <code>BotUserSession.delete("Company")</code> is used to delete the root-level object, <b>Company</b>. Using the same syntax, you cannot delete the key-value pairs inside the root-level object. <code>BotUserSession.delete("Company.name")</code> is not supported. If you want to delete the key-value pairs, use the syntax – <code>delete context.session.BotUserSession.{path to delete the key}</code>.</p>
</div>

For example, using `delete context.session.BotUserSession.Company.name`, you can delete the **name** defined inside the **Company**. You cannot delete the root-level object using the syntax `delete context.session.BotUserSession.Company`.

### put() method

Using the **put ()** method, you can insert objects at the root-level for EnterpriseContext, BotContext, UserSession, and BotUserSession object types. For example, `BotUserSession.put("Company", Company)`.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You cannot insert key-value pairs inside the root level object. The syntax <code>BotUserSession.put("Company.Address", Address)</code> is not supported.</p>
</div>

### get() method

Using the **get ()** method, you can retrieve the root-level object for EnterpriseContext, BotContext, UserSession, and BotUserSession object types. For example, `BotUserSession.get("Company")`.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>You cannot retrieve key-value pairs inside the root level object. The syntax <code>BotUserSession.get("Company.name")</code> is not supported.</p>
</div>

## Session Variable Types

The following types of session variables are available on the XO Platform:

* **EnterpriseContext** – It is a namespace within the overall context object where platform users can store key-value pairs that are available to all assistants, sessions, and users within a workspace. It ensures consistent data availability for enterprise-wide use cases.  

    For example, with a GitHub app, a user may need to access one or more enterprise repositories. The repository data can be persisted in the EnterpriseContext using the **Gitrepository** key with the following JavaScript code:

    ```js
    var userRepository = {
    "title": _labels_[repository],
    "value": repository
    };
    EnterpriseContext.put('Gitrepository', userRepository, 200000);
    ```

    !!!note
     
        Platform users must carefully assess what information should be stored in this namespace to avoid unnecessary data exposure.

* **BotContext** – A key/value pair available to all users of this specific app. For example, you may want to set up a default currency for financial transactions for a session based on a user’s location. You can persist the default currency data as **currency (Bot Context)** with the following JavaScript code:

    ```js
    var defaultCurrency = { TODO Custom JavaScript for location-based currency }
    BotContext.put('currency', defaultCurrency, 200000);
    ```

* **UserContext** – A key/value pair available to all assistants for a user. These keys are read-only and provided by the system as user data for:
    * **UserContext.get(“_id”)** – The Kore.ai user ID.
    * **UserContext.get(“emailId”)** – The email address associated with the user ID.
    * **UserContext.get(“lastName”)** – The last name of the user.
    * **UserContext.get(“firstName”)** – The first name of the user.
    * **UserContext.get(“profImage”)** – The image or avatar filename of the user.
    * **UserContext.get(“profColor”)** – The account color for the user.
    * **UserContext.get(“activationStatus”)** – The account status of the user. Can be:
        * `active` – The user is active and can interact with other Kore.ai users.
        * `inactive` – The user is not active, but user data is retained in the system.
        * `suspended` – The user is suspended by an administrator. The user cannot log on to Kore.ai, however, messages can still be sent to the suspended user.
        * `locked` – The user exceeded the maximum number of login attempts.
    * **UserContext.get(“jTitle”)** – The title of the user, if defined.
    * **UserContext.get(“orgId”)** – The organizational ID of the user account, if defined.
    * **UserContext.get(“customData”)** – Use this to pass user information to web channels, currently only for webSDK. For more information, click [here](../../app-settings/dev-tools/kore-ai-web-sdk.md).
    * **UserContext.get(“identities”)** – Alternate user IDs, if defined.
        * `val` – The alternate ID
        * `type` – The type of alternate ID.
    * **context.session.UserContext.customData** - To access the custom data passed through the web SDK.

    For example, you can PUT a value into the session using the `UserSession` variable where the key is defined as `fullName` based on the GET from the two `UserContext` variables.

    ```js
    var name = UserContext.get("firstName")+UserContext.get("lastName");
    UserSession.put("fullName") = name;
    ```

* **UserSession** – A key/value pair that you can define for this specific user for all assistants in an enterprise. 

    For example, you may want to store a user location to make it available to all assistants, such as a user home address for commerce, transportation, and home delivery services. 

    You can persist default location data as **HomeLocation (UserSession)** with the following JavaScript code: 

    ```js
    var location = {
    "title": labels[location],
    "value": {
    "latitude": location.latitude,
    "longitude": request.location.longitude
    }
    };
    UserSession.put('HomeLocation', location, '20000');
    ```

* **BotUserSession** – A key/value pair that you can define to a specific app based on the inputs by a specific user. For example, you may want to persist a user location for more than one task of an app. 

    For a travel app, the user may be able to book a flight and a hotel based on the same home and destination addresses. 
    
    For example, you can persist the default home and destination data as **HomeLocation (BotUserSession)** and **DestinationLocation (BotUserSession)** with the following JavaScript code:

    ```js
    var homelocation = {
    "title": labels[request.sourceLocation],
    "value": {
    "latitude": request.sourceLocation.latitude,
    "longitude": request.sourceLocation.longitude
    }
    };
    BotUserSession.put('HomeLocation', homelocation, '20000');
    var destlocation = {
    "title": labels[request.destLocation],
    "value": {
    "latitude": request.destLocation.latitude,
    "longitude": request.destLocation.longitude
    }
    };
    BotUserSession.put('DestinationLocation', destlocation, '20000');
    ```

You can fetch custom data from the BotUserSession with path - **session.BotUserSession.channels[0].botInfo.customData**

## Standard Keys

In addition to session and context keys, there are Kore.ai variable placeholders for reusable data. Select one of:

<ul><li><b>_labels_</b> – Used to return the friendly label in place of a GUID. For example, when user data is requested from a web service API, the ID of a project or workspace returned is a GUID. You can use the `_labels_` key to show the user-friendly name of the GUID to the end-user instead of the GUID. In Kore.ai, a drop-down control stores the response for the `_labels_` key as, for example:

```js
{
    "_labels_": {
        "15379386734832": "roadlabs.com",
        "26377329985341": "Test Project",
        "workspace": "roadlabs.com",
        "project": "Test Project"
    },
    "_fields_": {
        "workspace": "15379386734832",
        "project": "26377329985341"
    }
}
```
</li></ul>
<p>To use the <code>_labels_</code> key in a response:</p>

`print('<a href="https://app.asana.com/0/' + workspace.id + '/' + id + '/f" target="_blank">' + title + '</a> in workspace '+_labels_[workspace.id]);`

<ul><li><b>_tenant_</b> – Used to return the tenant for the enterprise when defined. For example, <i>JIRA</i> requires a tenant for URLs, such as <b>myteam</b>, in <code>https://myteam.atlassian.net/browse/RTM-1978</code>. You can use the <code>_tenant_</code> key to build a link in a task response such as: <code>var title = request.fields.issuetype.name + ' <a href ="https://' + _tenant_ + '/browse/' + response.key + '" target = "_blank">' + request.fields.summary + '</a>  has been created.';</code></li>
<li><b>_fields_</b> – Used to return an action task field input provided by the end-user that is not part of a payload response. For example, in a <i>JIRA</i> action task, the end-user is prompted to enter a workspace name. You can use the <code>_fields_</code> key to store the end-user input as: 
<code>_fields_["workspace"]</code></li>
<li><b>_last_run</b> – Used to return the UTC date timestamp of a web service poll using ISO 8601 format, for example, <b>2016-03-05T12:44:38+00:00</b>. For example, if a web service request returns all activity in a payload response, you can use the <code>_last_run</code> key to filter results displayed before or after the value for <code>_last_run</code>.</li></ul>