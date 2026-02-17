# Enabling 2-way SSL for Service nodes

**Two-way SSL authentication** is a certificate-based mutual authentication protocol that refers to two parties authenticating each other by verifying the provided digital certificate so that both parties are assured of the others’ identity.

It refers to a client (web browser or client application) authenticating themselves to a server (website or server application) and the server also authenticating itself to the client through verifying the public key certificate/digital certificate issued by the trusted Certificate Authorities (CAs).


## Kore.ai Implementation

XO Platform offers this support by default in their cloud offering. In case, the services you use need a two-way SSL, the platform provides the certificate.


### For On-premises Users

During the  platform installation, configure the SSL certificate following the instructions given in the Installation Guide.


### Prerequisites

To establish a Two-Way SSL (Mutual Authentication) connection, you must have the following:

* Private Key
* Client Certificate
* Certificate Authority Root Certificate
* Certificate Authority Intermediate Certificates.

The client can acquire a certificate from any of the trusted Certificate Authority (CA).


## Working

Whenever the  platform makes a call to backend services for API invocation (from Service node) that requires mutual authentication (or two way SSL), the platform presents the configured certificate to the API endpoint for SSL handshake. If the certificate is not valid or not trusted by the API service, the app cannot make that call.

The authentication message exchange during SSL handshake between platform and API server includes the following steps:

1. The platform makes a request to a configured API endpoint.
2. The API server presents its certificate to the platform.
3. The platform verifies the server’s certificate.
4. If successful, the platform sends its configured two-way SSL certificate to the API server.
5. The API server verifies the presented certificate credentials.

If successful, the server grants API access to the platform.

This process is applicable for service nodes ([know more about service node](./node-types/working-with-the-service-node.md){:target="_blank"}) in an app.