# Installing the BotKit SDK

The Platform BotKit SDK runs as a Node.js application. You can add your own reverse proxy, firewall, and load balancer to meet your functional requirements for availability, scalability, and performance.

This section provides a high-level overview of BotKit SDK installation and configuration.

For a detailed end-to-end tutorial on installation and setup using Platform Sample bots, see this [BotKit SDK Tutorial](./tutorials/flight-search-sample-bot.md).

To install the BotKit SDK, you need to:

* Register your application on the Platform by creating an app, and then configuring it for the Web/Mobile channel.
* Download and deploy the BotKit SDK libraries.
* Configure the config.json file.

## Authorization

As a prerequisite for BotKit SDK installation, you need to register your SDK app with the Platform, as follows.

In the Platform, you need to create a bot, and then from API Extensions -> BotKit SDK section,

* Go to **Deploy > Integrations > BotKit.**
* Register/create an app for that bots to generate the **ClientID** and **Client Secret** security credentials used for mutual SSL authentication for communication between your app and the Platform and to authorize API calls from your SDK to the Platform. 

In the config.json file in the SDK, you need to copy the following authentication keys from the Platform.

* appId: ClientID
* appKey: Client Secret

For more information, see [SDK App Registration](app-registration.md).

## Installation and Setup

The Platform BotKit SDK libraries can be downloaded from the Github repository at:

[https://github.com/Koredotcom/BotKit](https://github.com/Koredotcom/BotKit)

To configure your SDK, you must define the following keys in your config.json file to get your BotKit up and running.



<table border="1">
  <tr>
    <th>KEY</th>
    <th>DESCRIPTION</th>
  </tr>
  <tr>
    <td>"server": {<br>"port": 8003<br>}</td>
    <td>port: The port used to run the BotKit NodeJS app.</td>
  </tr>
  <tr>
    <td>"app": {<br>"apiPrefix": "",<br>"url": "https://0ddf-122-174-183-138.ngrok-free.app"<br>}</td>
    <td>
      apiPrefix: The API path prefix to the NodeJS express route (empty in the sample code).<br>
      url: The ngrok Forwarding URL for the callback server.
    </td>
  </tr>
  <tr>
    <td>"validations": {<br>"leastNodeVersion": 10<br>}</td>
    <td>leastNodeVersion: The minimum required version of Node.js on which the application must run. Ensure the version is 10 or higher.</td>
  </tr>
  <tr>
    <td>"credentials": {<br>"apikey": "tz4fhIiIPg6c1JHnP7tiZBtGfeCtCydlv6rxxxxxxxx=",<br>"appId": "cs-9a909c58-c5a9-xxxx-xxxx-1f36f94b23ad",<br>"st-67890":{<br>"apikey": "test_api_key2",<br>"appId": "test_app_id2"<br>}<br>}</td>
    <td>
      apikey: The Client Secret value generated on the Platform when registering your SDK app.<br>
      appId: The Client ID value generated on the Platform when registering your SDK app.<br>
      st-ID: This sub-section allows users to configure the credentials for a specific bot. If no bot/st-ID block is available, this falls back to the parent credentials.
    </td>
  </tr>
  <tr>
    <td>"jwt": {<br>"jwtAlgorithm": "HS256",<br>"jwt-expiry": 60,<br>"st-67890": {<br>"jwtAlgorithm": "HS512",<br>"jwt-expiry": 60<br>}<br>}</td>
    <td>
      This section supports JWT variations RS256, RS512, HS256, and HS512; HS256 remains the default for backward compatibility.<br>
      jwtAlgorithm: The type of algorithm used for JWT signing.<br>
      jwt-expiry: JWT expiration time in seconds; the JWT token expires in 60 seconds by default. You can change this using the following KoreConfig setting:<br>
      "botkit": { "jwt_expiry": 300 //seconds }<br>
      st-ID: This sub-section allows users to configure these algorithms for a specific bot. If no bot/st-ID block is available, this falls back to the parent JWT configurations.
    </td>
  </tr>
  <tr>
    <td>"redis": {<br>"options": {<br>"host": "localhost",<br>"port": 6379<br>},<br>"available": false<br>}</td>
    <td>
      host: The hostname where the Redis server is running. Here, it's configured to run on the local machine.<br>
      port: The port number on which Redis is running. By default, Redis uses port 6379.<br>
      available: Indicates whether Redis is available or not. It's set to false here, meaning Redis isn't an use.
    </td>
  </tr>
  <tr>
    <td>"examples": {<br>"mockServicesHost": "https://localhost:8004"<br>}</td>
    <td>mockServicesHost: Host for mock services that can be used for testing.</td>
  </tr>
  <tr>
    <td>"liveagentlicense": "8947569"</td>
    <td>liveagentlicense: The license key for the LiveChat agent application. This is required to connect and authenticate the bot with LiveChat services.</td>
  </tr>
  <tr>
    <td>"supportsMessageAck": true</td>
    <td>supportsMessageAck: Indicates whether the app supports message acknowledgment. It's set to true here, meaning the app acknowledges receipt of messages.</td>
  </tr>
  <tr>
    <td>"languages": ["en", "de"]</td>
    <td>languages: A list of languages supported by the bot or the application.</td>
  </tr>
</table>





!!! note

    By default, the JWT token would expire in 60 seconds. You can change this using the following KoreConfig setting:
    ```
    “botkit”:{

        “jwt_expiry”: 300 //seconds

    }
    ```
   

## Run BotKit SDK

To run BotKit SDK, in a **Terminal** window, enter: <code> node app.js</code>. Make sure that the node.js version is 10 or higher.
