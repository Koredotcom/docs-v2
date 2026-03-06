
# Kore.ai Web SDK Tutorial

This tutorial is an end-to-end walkthrough for setting up and running an instance of the Kore.ai Web SDK which is a collection of libraries that you can use to integrate Kore.ai apps with your own web applications.


## Web SDK Tutorial Overview

In this tutorial, you will configure a Kore.ai sample app, a test web application to integrate the Web SDK, and then a JSON Web Token (JWT) generation web service using your local host server to communicate between the chwt window on your computer and the Kore.ai Platform. The following list describes the general steps you will take to install and configure the Web SDK.



1. **Build the App**: For this tutorial, you need to create a sample new App in the Kore.ai Platform.
2. **Configure Web/Mobile Client channel**: To use the sample *App* with the Web SDK, you must configure the App for the Web/Mobile Client channel.
3. **Create a new Client App**: When you configure the Web/Mobile Client channel for the sample *App*, you must create a client app and select the JWT signing algorithm used to generate the authentication tokens.
4. **Publish the app**: After you have configured the sample *App*, you must publish the app.
5. **Download and install Node.js**: You will need to install Node.js used to host the JWT token generation web service for the Web SDK to communicate between the Chat Window in the test application and the Kore.ai Platform.
6. **Download the sample JWT server application**: The JWT server application, [SDKApp](https://s3.amazonaws.com/static-kore/downloads/SDKApp.zip) is used to generate JWT on your computer local host server.
7. **Create a sample test application**: You need to create a sample test web application for integrating the Kore.ai Web SDK. Sample test web application can be created using any framework or library like Angular/React/Vue etc., or any use any plain HTML file. Here we will use the React application.
8. **Configuring Kore.ai Web SDK**: The Web SDK contains the libraries used to communicate and run the App in the test application using the Web/Mobile Client channel. You will need to configure settings in the test web application you have created.
9. **Start your test web application and view the App in a web browser**: In a **Terminal** window, you will start the test web application, the JWT service, and then view the Chat Window in a web browser.

Now let us see a detailed step-by-step implementation.


## Installing and Running the Kore.ai Web SDK

This section provides detailed steps on how to run a Kore.ai sample App using the Web SDK in a test web application running on your computer localhost with a sample JWT server. To get started, you will need to build the app to integrate in the test web application, and then configure the app to run in the Web/Mobile Client channel.



1. Log on to Platform, click the **New App** on the right side and create the App as per the instructions.
2. The sample App was created successfully and you landed inside the App. In this next section, you will define the Web/Mobile Client channel for the sample App by creating a new client app and defining channel settings. [See here](../../channels/add-web-mobile-client.md) for a detailed explanation of the steps.
3. On the Platform left main menu, select the **Flows & Channels**.
4. From the Channels menu, click **Digital > Web/Mobile Client**.
5. Click on the **JWT App Details** and click **Add**. The **Create New Client JWT App** dialog is displayed.
6. In the **Name** field, enter a name for your app, for example, My SDK Client App.
7. In the **JWT Signing Algorithms** section, select **HS256** to generate the authentication tokens.
8. Click the **Create**. Client app created successfully.
9. In the **Select JWT App** drop-down list, select the newly created client app and click on **Save** at the bottom.

    !!! Note
    
        By default, the sample App is configured with the Target Audience set to Enterprise Users on the App settings tab in the App profile settings. Optionally, you can define this app for General Public use. Once this bot is published, the Target Audience cannot be changed.

10. Click **Web/Mobile Client** again and click on the **JWT App Details.** It is displayed with the following JWT credentials. Make a note of all these details. We will be using them later in the Web SDK setup:
    1. Bot Name
    2. Bot ID
    3. Client ID
    4. Client Secret
11. You are ready to publish and deploy your app.
12. On the **Deploy** tab, click **Deploy Management > Publish**.
13. On the **Publish** page, select all tasks, and then click **Proceed**.
14. Enter a comment and **Confirm** publication.
15. The app will be published successfully.
16. Complete the following steps in the Admin Console if your app deployment is controlled by the Enterprise Account Administrator. Ask the Admin to complete the following:
    5. In the Admin Console, in the **Apps Management** module, on the **Deployment requests** page, click the **sample app** that you want to deploy, and then click **Publish**. The app will be published.
17. To download and install node.js on your computer, go to [Node JS](https://nodejs.org/en/download/), and then select your OS as .pkg for Mac, and .msi for Windows.
18. In a **Terminal** window, run the `node -v` command to verify installation and version, for example, `v21.7.3`.
19. To setup the sample JWT web service, click [SDKApp](https://s3.amazonaws.com/static-kore/downloads/SDKApp.zip), and unzip it and configure the Client Id and Client Secret from the **Web/Mobile Client** page on the **Flows & Channels >** **Digital** in the ***users.js*** under **routes** folder and start the server using the cmd node startServer.  
Ensure all the properties are passed when generating the JWT. We can generate JWT using any server side language.
    
    ``` json
    router.post('/', function(req, res, next) {
    let identity = req.body.identity; // from request body
    let clientId = process.env.CLIENT_ID; // from environment variables or from database
    let clientSecret = process.env.CLIENT_SECRET; // from environment variables or from database
    let isAnonymous = req.body.isAnonymous || false;
    let aud = req.body.aud || "https://idproxy.kore.com/authorize";
    let options = { "iat": new Date().getTime(),
                    "exp": new Date(new Date().getTime() + 24 * 60 * 60 *              1000).getTime(), 
                    "aud": aud,
                    "iss":clientId,
                    "sub": identity,
                    "isAnonymous": isAnonymous
                }
    let token = jwt.sign(options, clientSecret); res.send({"jwt":token}); });
    ```



20. Create a sample react application for integrating the Kore Web SDK by following the [Official React Docs](https://react.dev/learn/creating-a-react-app).
21. To integrate the Kore.ai Web SDK, go to [Kore Web SDK GitHub Repo](https://github.com/Koredotcom/web-kore-sdk). In the **master** dropdown, select the required **Branch/Tag**(v3/x.x.x) and then follow the instructions for installing the Web SDK from the npm **registry**. You can also use cdn links or embed code from the **Web/Mobile Client** channel. Below are the steps for installing in React application and configuring the SDK. Please refer to the GitHub repo for more details. You can also follow the same instructions on NPM for [Kore Web SDK](https://www.npmjs.com/package/kore-web-sdk/). 

22. From ver11.0.0 of the platform, the Web SDK repo structure has undergone a major change. The Web SDK is provided as an NPM Package. The steps would vary based on which repo you are using. 

    1. Install the Kore Web SDK from [npm.js](https://www.npmjs.com/package/kore-web-sdk) using the below command. Kore Web SDK will be installed and will be reflected in the package.json
    
        ```json
        npm i kore-web-sdk
        ```
    
    2. Import *chatConfig* and *chatWIndow* in the page.tsx or App.js file as shown below.

        ```json
        import { chatConfig, chatWindow } from "kore-web-sdk";
        ``` 

    3. Configure userIdentity and from the Platform **Web/Mobile Client Channel** page on the **Flows & Channels > Digital** menu, copy the following (as mentioned in step 10 above):
        6. Bot Id
        7. Bot Name

        ```json
        let chatWindowInstance = new chatWindow();
        let botOptions = chatConfig.botOptions;
        botOptions.koreAPIUrl = "https://platform.kore.ai/api/";
        botOptions.userIdentity = 'xxxxxxx';  //a random string or unique identifer like email id
        botOptions.botInfo = { name: "Sample App Name", "_id": "st-xxxxx-xxx-xxxx-xxxx-xxxxxxxxx" };  //bot name is case sensitive

        ```

    4. Now set up the JWTAsertion function to get the JWT by referring to the below code snippet.  
        
        ```json
        chatConfig.JWTAsertion = function (commitJWT: any) {
        let payload = {
            "identity": "user@example.com"
        }
        fetch('http://localhost:7000/api/users/sts/', {
            "headers": {
            "content-type": "application/json",
            },
            "body": JSON.stringify(payload),
            "method": "POST",
        })
            .then(res => {
            if (res.ok) {
                return res.json();
            }
            throw new Error('Something went wrong');
            })
            .then((res) => {
            chatWindowInstance.setJWT(res.jwt); // jwt returned by API service
            commitJWT(); // Callback function
            }).catch(err => {
            console.log(err);
            });
        };


        ```



        !!! note

            The URL mentioned in the above code snippet, refers to the location where your JWT Server is hosted in your computer. For production use we need to have this API end point in the Production server. 
 
    5. Configure any other kore config related settings .

        ```json
        chatConfig.history.recent.batchSize = 15;
        ```


    6. Final step in configuring the Web SDK.

        ```json
        chatWindowInstance.show(chatConfig);
        ```


    7. Start the React application by using the cmd npm start.

    8. Access the application in any browser using localhost:3000.

    9. Web SDK is successfully loaded in the browser.


### Passing data(customData) via web SDK

You can pass additional information of the user accessing the channel by adding the custom data at **botInfo** in the same file.

```json
botOptions.botInfo.customData = "value";
```
Details like phone number, address, location, etc., are examples of data that can be passed inside the `customData`. The customData can be accessed from lastMessage under the BotUserSession of the context object. This data will be specific to the user using web SDK and will last for the user session. Multiple values can also be added to the `customData` as key-value pairs:

```json
botOptions.botInfo.customData = {"name":"John",
                                  "age":30,
                                  "cars": { "car1":"Ford",
                                            "car2":"BMW",
                                            "car3":"Fiat"
                                           }
                                  }

```

![Custom Data](images/custom-data.png "custom data")



### Passing Mapped Identities

The Web/Mobile SDKs support the passing of mapped identities of the users when they switch from one identity to another while interacting with the bot. This process allows the users to continue any ongoing conversation initiated using a previous identity. For example, a user may have started a conversation with the bot using an anonymous or randomly generated identity. After exchanging a few messages, the user may become an authenticated or known user by logging into your website or any application. At this point, the user’s known identity can be passed to the bot from the SDK as part of the [JWT Grant API](../sdk-security.md) call using the parameter identityToMerge. The Platform uses this information to merge the user identities and allows the user to resume an ongoing conversation using the new known identity.

```josn
{
 "iat": 1611810186883,
 "exp": 1611813786.883,
 "aud": "https://idproxy.kore.com/authorize",
 "iss": "cs-d3042d3e-7da4-55da-a94d-78334927xxxx",
 "sub": "john.doe@example.com",
 "isAnonymous": "false",
 "identityToMerge": "john.doe@example.com"
}

```

The following scenarios describe the bot's behavior when dealing with the new identity and merged identity:



* When both the new and merged identities are not present in the system, then the new identity is created and a new conversation is started using new identity.
* When the new identity is present but the merged identity is not present in the system, then the conversation is started or continued (in case of an active session) using new identity.
* When the merged identity is present but the new identity is not present in the system, then the new identity is created and the conversation is continued using the new identity. All references to the merged identity are replaced with the new identity and the merged identity is removed.
* When both the merged identity and the new identity are present in the system and the new identity does not have an active session, then the conversation is continued using the new identity. All references to the merged identity are replaced with the new identity and the merged identity is removed.
* When both the merged identity and the new identity are present in the system and both have an active session, then the merged identity’s conversation is continued using the new identity. All references to the merged identity are replaced with the new identity and the merged identity is removed. The active session of the new identity is marked as “Drop-off” and closed.

Due to the above-mentioned behavior in the user identity following changes can be seen:



* Analytics and Chat History will be updated associating all the sessions related to the merged identity with the new identity.
* The session data is updated replacing the merged identity with the new identity.
* The Billing Session tracking merged identity’s conversation will be marked as a new identity.


### Custom Meta Tags via web SDK

With the release of ver8.0 of the platform, you can directly add Custom Meta Tags from all supported internal channels (Web SDK/IVR / IVRVoice / Webhook channels). You can define Session, User, and Message level meta-tags. These tags will be added to the Conversation Session as soon as it is created.

```json
botOptions.botInfo = {
    name: "<bot_name>",
    "_id": "<bot_id",
    customData: {
        "name": "John"
    },
    "metaTags": {
        "messageLevelTags": [{
            "name": "tag1",
            value: "message"
        }],
        "sessionLevelTags": [{
            "name": "tag2",
            value: "session"
        }],
        "userLevelTags": [{
            "name": "tag3",
            value: "user"
        }]
    }
};

```


### Some commonly encountered errors

Ensure correct Client Id and Client Secret is configured in the JWT Server and proper payload is used when generating the JWT. 


After you install and test the Web SDK using the test web application and your local host JWT server,  you can use the same concept to install and configure the Web SDK in your enterprise application. You can either use a new JWT Server for JWT generation or use existing enterprise application with a new API end point. 
 
 
 
Please refer [GitHub repo](https://github.com/Koredotcom/web-kore-sdk) for more information regarding the configurations(kore config), customizations, kore standard  templates,  kore standard plugins, custom templates and plugins, docs and other ways of integration(cdn links, Sharepoint, ServiceNow etc).


