# Web SDK: Architecture, Security, and Resource Utilization

The Platform Web SDK is a powerful tool for integrating the Platform bots into web applications. This document provides an overview of how the Web SDK works, its architecture, security model, and resource utilization. It also discusses using JSON Web Tokens (JWTs) for session management and authentication, ensuring secure communication between the SDK and the Platform.

## How the Web SDK Works and Resource Utilization

* The Platform Web SDK consists of JavaScript libraries that are embedded into the client web application to enable communication with the Platform bots over a web socket.
* The SDK libraries run on the client side in the user's web browser. This means the SDK itself does not consume server-side resources.
* The main resource utilization will be the hosting of the SDK files (JavaScript, CSS, etc.) and serving them to the client. This is minimal overhead, similar to serving other static web assets.

## Session Management between Web SDK and Bot Platform

* The Web SDK uses JSON Web Tokens (JWTs) to establish a secure session with the Platform on behalf of the end user.
* When the SDK is initialized, it calls a client-provided assertion function that generates a signed JWT containing the user identity and client app credentials. To make the signing secure, this assertion function will internally call the JWT generation service to get the JWT.
* This JWT is sent to the Platform to authenticate the user and establish the bot session.
* The session is maintained on the client side using web sockets. Messages between the SDK and the bot platform are exchanged using this secure web socket.


## JWT Flow

![JWT Flow](images/JWT-flow.png "JWT Flow")

## Stateless Web SDK and Session Persistence

* The Web SDK is stateless on the server side. All session states are stored on the client side in the user's browser.
* If a user's request gets routed to a different web server in your Active-Active setup, their bot session will persist uninterrupted.
* This is because the session state (user context, conversation history, etc.) is enclosed in the JWT, and messages are sent from the SDK. It is not dependent on any particular server.
* Even if the client-side state gets lost (e.g. user refreshes page), the session can be restored from the user identity in the JWT. The loadHistory option can be enabled to retrieve recent conversation history in this scenario.

## Minimum Server Requirements

* Given the Web SDK runs client-side and simply needs the static files served, the minimum server requirements are quite low.
* A server with 2 CPUs and 4 GB RAM should be more than adequate to serve the Web SDK files as part of a web application.
* The real consideration is the expected traffic and concurrent users for your application as a whole rather than the Web SDK specifically.

## Security of the Web SDK and JWT Service

* The Web SDK uses secure web sockets (wss://) for all communication with the Platform, encrypting data end-to-end.
* User authentication is handled via signed JWTs, ensuring only authorized clients can establish bot sessions.
* Client secrets and private signing keys are never exposed client-side. The JWT signing occurs server-side via the client-provided assertion function.
* The client app ID and secret used to sign the JWT are obtained by registering your app on the Platform, ensuring only valid clients can authenticate.
* As an added security measure, you can enable the requireHTTPS option to force the SDK to only communicate over HTTPS.

    It's important to note that you must host a server-side JWT generation service for the Web SDK to authenticate with the Platform. This service should:

    * Receive a request from the Web SDK with the user identity and any other necessary claims.
    * Retrieve the client app ID and secret (or private key) from a secure location (e.g., environment variables, secret management service).
    * Generate and sign the JWT using the client credentials and return it to the Web SDK.

The JWT service should be hosted on infrastructure that matches your security and compliance requirements. A few recommendations:

* Host the service on HTTPS with a valid SSL certificate.
* Ensure the server has restricted access and follows security best practices (regular patching, minimal attack surface, etc.).
* Store secrets securely and rotate them periodically.
* Implement rate limiting and other safeguards against abuse.
* From a resource perspective, the JWT service is lightweight and can be hosted on a server with similar specs to your web servers (2 CPUs, 4GB RAM). The main factors are the expected traffic and ensuring low latency to generate JWTs quickly.

The Platform Web SDK is a lightweight and secure solution for enabling the Platform bots in your web application. Its client-side architecture, stateless design, and JWT-based authentication make it well-suited for deployment across multiple web servers in an Active-Active setup. With proper app credentials and SSL, you can ensure a secure and uninterrupted user experience. [Learn more](sdk-security.md).
