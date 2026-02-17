
# SDK App Registration

This topic describes how to register your application and generate credentials for your clients that are required to exchange messages between your application and the  Platform.

When you register your app, you will need to select a security algorithm:

* **HS256 / HS512**– The Platform generates and displays the Client ID and Client Secret necessary to generate the JWT token from your server.
* **RS256 / RS512**– Upload your public key to the platform and use the private key to generate the signature from your server.

**To register an app:**

1. Open the bots that you are working with.
2. From the **App Settings** menu, go to **Dev Tools > Web/Mobile SDK**.
3. In the **JWT App** drop-down list, select your existing app registration or click **Add** to create a new.
![SDK Home](images/sdkhome.png "SDK Home")

4. Enter the details of your application.
![Create a new app](images/jwtapp.png "Create a new app")

    * In the **JWT App** field, enter the name for the app registration used in App Builder. For example, **weather app**.
    * In the **JWT Signing** Algorithms Used For Client App Authentication drop-down list, select one of the following security algorithms:
        1. **RS256/RS512:** Select to enable the **Public Key.** _The Private key, used for encryption, is provided by the user, and the Public key, used for decryption, is provided by the Platform_. Both the keys have to be used for generating the token. The Public Key is used by the Platform to authenticate the client application.
        2. **HS256/HS512:** Select to generate a **Secret Key**and a **Client ID**. The **Client ID** is required for app initialization, and the **Secret Key** is used by the Platform to authenticate the client application.
    * Enable **Enforce JTI Claim**.
    * Enforce JWE Encryption.
    * Click **Next**. On successful creation of the application, you will see client Id and secret for the app. Click **Done**.
![App creation successful](images/newappsuccess.png "App creation successful.")
