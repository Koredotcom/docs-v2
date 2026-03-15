
# SDK Security

The Platform only accepts clients that are authorized to connect and exchange messages. You must register your SDK app with the Platform in the Platform tool and acquire client credentials. You can then use your client credentials to authorize the app and communication exchange between your user and bot.

## Securing Your SDKs

Using SDKs, you can create secure interactions with the Platform. 
SDK libraries can be embedded with web or mobile applications to make HTTPS calls and establish web socket connections with the Platform on behalf of a user of your application chatting with the Platform. 

To establish identity and initiate a secure web session:

* Your application SDK should sign and send the identity of the user to the Platform
* The Platform verifies the signature to establish trust with your application using:
    * **JSON Web Token (JWT)** – Used to send the user identity to Platform
    * **Bearer Token** – Your application SDK exchanges the JWT for a bearer token used for subsequent calls

### About JWT

uses the JWT (JSON Web Token) mechanism to handle the authentication.

#### JWT Flow

The following diagram depicts a typical JWT flow in Platform. 

![JWT Flow](images/JWT-flow.png "JWT Flow")

#### JWT Tokens

JSON Web Tokens consist of three parts separated by dots ” .  ” as `hhhhh.ppppp.sssss` syntax where h represents the header, p is the payload, and s represents the signature.

#### JWT Header

The JWT Header defines the token type, which is JWT, and the security algorithm.For example,

```json
{
   "alg": "HS256",
   "typ": "JWT"
}
```

The JWT type can be one of:

* **HS256 / HS512 (HMAC with SHA-256 / SHA-512)**– These algorithms use a **Secret Key** to sign the token. The **Secret Key** is generated when the app is registered on the Platform when defining your Web/Mobile Client channel.
* **RS256 / RS512 (RSA signature with SHA-256 / SHA-512)** – These are RSA public/private key-based algorithms to sign and verify the token. The client **Public Key** is defined when the app is registered on the Platform. The client app signs the token using a **Private Key**, and the Platform verifies this token using the **Public Key**.

To use these JWT types, you need to register your application and select the algorithm type. For more information about using JWT, see  [JSON Web Token (JWT)](https://tools.ietf.org/html/rfc7519) and [Introduction to JSON Web Tokens](https://jwt.io/introduction/).

#### JWT Payload

The SDK client needs to assert the user by generating a unique JSON Web Token using your app registration credentials created in Platform when you defined the Web/Mobile Client channel for your app and the identity of your app user.

The following example shows a sample payload used to generate the JWT.

**Sample Header**


```json
{
    "alg": "HS256",
    "typ": "JWT"
}
```

**Sample Payload**

```json
{
    "iat": 1466684723,
    "exp": 1466684783,
    "jti": "1234",               //or kore_jti
    "aud": "https://idproxy.kore.ai/authorize",
    "iss": "cs-xxxxxxxxxx-1234", //or kore_iss
    "sub": "john.doe@example.com", //or kore_sub
    "isAnonymous": false,
    "identityToMerge": "john.doe@example.com" //to map anonymous user
}
```

The following table describes the parameters for the JWT Header and Payload.

<table>
  <tr>
   <td><strong>PARAMETER</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>TYPE</strong>
   </td>
  </tr>
  <tr>
   <td>alg
   </td>
   <td>A drop-down list of security algorithms. One of:
<ul>

<li><strong>RS256/RS512: </strong>Select to enable the <strong>Public Key.</strong> <em>The Private key, used for encryption, is provided by the user, and the Public key, used for decryption, is provided by the Platform</em>. Both the keys have to be used for generating the token. The Public Key is used by the Platform to authenticate the client application.

<li><strong>HS256/HS512:</strong> Select to generate a <strong>Secret Key </strong>and a <strong>Client ID</strong>. The <strong>Client ID</strong> is required for app initialization, and the <strong>Secret Key</strong> is used by the Platform to authenticate the client application.
</li>
</ul>
   </td>
   <td>string
   </td>
  </tr>
  <tr>
   <td>typ
   </td>
   <td>The token type. For JSON Web Token, enter <strong>JWT</strong>.
   </td>
   <td>string
   </td>
  </tr>
  <tr>
   <td>iat
   </td>
   <td>The date/time that the token was issued. This value should be in seconds.
   </td>
   <td>integer
   </td>
  </tr>
  <tr>
   <td>exp
   </td>
   <td>The date/time that the token expires. This value should be in seconds.
   </td>
   <td>integer
   </td>
  </tr>
  <tr>
   <td>jti
<p/>
or kore_jti \
(optional)
   </td>
   <td>A <em>jti claim</em> which can be used to prevent replay attacks:
<p/
“<em>The “jti” (JWT ID) claim provides a unique identifier for the JWT. The identifier value MUST be assigned in a manner that ensures that there is a negligible probability that the same value will be accidentally assigned to a different data object; if the application uses multiple issuers, collisions MUST be prevented among values produced by different issuers as well. The “jti” claim can be used to prevent the JWT from being replayed. The “jti” value is a case-sensitive string. Use of this claim is OPTIONAL.</em>” (<a href="https://tools.ietf.org/html/rfc7519#section-4.1.7">ref</a>)
<p/>
NOTE: Use <em>kore_jti</em> to bypass the pre-populated value for <em>jti</em> with Kore specific values
   </td>
   <td>string
   </td>
  </tr>
  <tr>
   <td>aud
   </td>
   <td>The audience that the token is intended for. For Kore.ai, the audience is https://idproxy.kore.com/authorize.
   </td>
   <td>string
   </td>
  </tr>
  <tr>
   <td>iss
<p/>
or kore_iss
   </td>
   <td>The ClientID of the client application. The ClientID is generated when the app is registered in the Platform.
<p/>
NOTE: Use <em>kore_iss</em> to bypass the pre-populated value for <em>iss</em> with Kore specific values
   </td>
   <td>string
   </td>
  </tr>
  <tr>
   <td>sub
<p/>
or kore_sub
   </td>
   <td>The token subject which is represented by the email ID or phone number for users who are logged in the client application system. For anonymous users, the client app can generate a unique random ID and assign that ID to this field.
<p/>
NOTE: Use <em>kore_sub</em> to bypass the pre-populated value for <em>sub</em> with Kore specific values
   </td>
   <td>string
   </td>
  </tr>
  <tr>
   <td>isAnonymous
   </td>
   <td>When set to <code>true</code>, the user is an anonymous user for the client application system. Anonymous users are not persisted on the Platform. Default setting is <code>false</code>.
   </td>
   <td>boolean
   </td>
  </tr>
  <tr>
   <td>identityToMerge
   </td>
   <td>The anonymous Identity that needs to be merged into known user
<p/>
<a href="../tutorials/web-sdk/#passing-mapped-identities">refer here</a> for details
   </td>
   <td>string
   </td>
  </tr>
</table>

#### jti Validations

In case jti claim is passed as part of the JWT payload, the Platform performs the following validations:

1. Expiry to be less than or equal to 1 hour: In case of failing to meet this requirement the following response is sent:

    ```json
    {
        "errors":[{"msg":"error verifying the jwt: if \"jti\" claim \"exp\" must be &lt;= 1 hour(s)","code":401}]
    }
    ```
2. Restricts replay of XHR: The following response is sent in case of non-compliance:
    
    ```json
    {
        "errors":[{"msg":"error verifying the jwt: possibly a replay","code":401}]
    }
    ```

#### Hosting the JWT Generation Web Service

The SDK libraries and UI widgets are integrated directly into your client applications, and you will need to generate the JWT from your server.

* For the Web SDK, the SDK libraries are run from the user’s browser.
* For mobile SDKs, the SDK libraries are run from a user’s mobile phone.

You need to host the JWT generation as a REST web service for security because the **Client Secret** or **RSA Private Key** is required for JWT generation and should not be hosted at the client application. You can make the REST web service directly available to SDK libraries or have your application call the JWT generation web service at the backend to make the JWT available to the SDK libraries.
When making the JWT generation web service available to the SDK libraries, you should keep the **Client ID**, **Client Secret**, and any key expiration logic on the server-side and expect only the user ID from the client.

There are several open-source libraries available to generate JWT, for example,

* NodeJS – [https://github.com/auth0/node-jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
* Java – [https://github.com/auth0/java-jwt](https://github.com/auth0/java-jwt)
* .Net – [https://github.com/jwt-dotnet/jwt](https://github.com/jwt-dotnet/jwt)

To generate credentials for your clients, you must register your client app in the Platform tool. For more information, see [SDK App Registration](app-registration.md).

You can also try out our tutorial, a test application, and configuring your localhost server for JWT generation. For more information, see the [Web SDK Tutorial](./tutorials/web-sdk.md).

## JSON Web Encryption (JWE)

JWT is used to send user identity in a secure form by signing the payload using the Secret Key(HS-256 algorithm) or RSA Private Key(RS-256 algorithm). There can be a requirement to send additional user data along with user identity in JWT using the “secureCustomData” or “privateClaims” key and make them available in the dialog execution context through the UserContext variable (for example, _context.session.UserContext.privateClaims.accountId_). This additional data may be sensitive information. Hence, we need to send it in encrypted form. **JWE (JSON Web Encryption)** is an IETF standard that provides a way to send the JWT in an encrypted form.

A basic implementation involves creating a JWE object, specifying encryption algorithms, and then encrypting the payload.

### About JWE Token

A JWE token is a compact, URL-safe means of representing encrypted content using JSON-based data structures. It enables the secure transmission of encrypted data that can only be decrypted by the intended recipient.

The token contains the following five parts:

* Header,
* JWE Encrypted Key (CEK),
* Initialization Vector,
* CipherText, and
* Authentication Tag

#### Header

The header part can have the following attributes:

* **“alg”**(Algorithm): defines the algorithm for content key wrapping \
Following algorithms are supported:
    * _RSA-OAEP_,
    * _RSA1_5_
* **“enc”**(Encryption Algorithm): defines the algorithm for content encryption \
Following algorithms are supported for content encryption:
    * _A128CBC-HS256_
    * _A128GCM_
    * _A256GCM_
* **“kid”**(Key ID): Key Id of the Platform’s public key. This will be displayed when you enable the JWE on the Platform.
* **“typ”** (Token Type): This will have JWT as a value since the wrapped content is JWT.

Below is the decoded sample JWE header: 
```json
{ 
"alg": "RSA-OAEP", 
"enc": "A128CBC-HS256",
"kid": "k-ffb4hty69-750a-44af-91c1-de0bvxxxx", 
"typ": "JWT"
}
```


#### JWE Encrypted Key (CEK)

A symmetric key is generated to encrypt the payload using the algorithm specified in “_enc_” field of the header. This key is encrypted using _Public Key_ using the algorithm specified in “_alg_” field of the header.


#### Initialization Vector

This is used in the encryption of the payload (JWT).


#### CipherText

This contains encrypted content of the payload. This is encrypted using the algorithm specified in “_enc_” field of the header using the initialization vector.


#### Authentication Tag

The Authentication tag is generated when authenticated encryption is performed using the algorithm specified in “_enc_” field of the header. This is used during decryption to ensure integrity.


### How to Generate a JWE Token

Generating a JWE token involves the following steps:

1. **Choose a JWE Library**: Choose a programming language and library that supports JWE. There are libraries available for various languages, such as Python (`PyJWT`), Java (`javax.crypto`), Node.js (`node-jose`), etc.
2. **Prepare Your Payload**: The payload is the data you want to encrypt and include in the JWE token. It can be a JSON object.
3. **Choose Encryption Algorithms**: Common algorithms include “RSA-OAEP” for asymmetric encryption and “A256GCM” for symmetric encryption with AES-GCM.
4. **Generate or Obtain Encryption Keys**: You will need encryption keys depending on the chosen algorithm. For asymmetric encryption, you’ll need a public key; for symmetric encryption, you’ll need a shared secret key.

**Create the JWE Token**: Use your JWE library to create the JWE token. Here’s a Python example using the `PyJWT` library:

```python

import jwt
# Sample payload data you want to include in the JWE token
# Use the "PrivateClaims" or "SecureCustomData" key to securely pass additional 
# data to the Platform
payload = {
    "sub": "1234567890",
    "name": "John Doe",
    "iat": 1516239022,
    "privateClaims": {
      "accountId": "123412512512556",
      "fusionSid": "12125125125",
      "siteId": "124125125125"
    }
}
# Sample encryption key (the shared secret key used for encryption)
secret_key = "MySecretKey123"
# Create the JWE token
jwe_token = jwt.encode(
    payload,
    secret_key,
    algorithm='HS256',  # Algorithm for signature (HMAC SHA-256)
    headers={"alg": "A256GCM"}  # Algorithm for encryption (AES-GCM)
)
print("JWE Token:", jwe_token)
```

You can now use the generated JWE token in your application.

### Find the JWE Public Key

The _Public Key_ is displayed in JWK format when you enable the JWE option while creating an SDK app. You can use this in your client library to generate JWE.

![Public Key](images/publickey.png "Public key")

### Verify and Decrypt the JWE

Let’s see an example of how you can verify and decrypt the JWE, assuming you have a JWE token (containing the payload that was encrypted using a private key), and have access to the corresponding JWE public key. The example below is in Python using the ‘PyJWT’ library; your implementation may vary depending on the language and the library you’re using.

1. **Import Libraries**: Ensure you have the necessary libraries installed. In this example, you need `PyJWT` for handling JWTs and JWEs.
2. **Load the Public Key**: Load the JWE public key in the form of a JSON Web Key (JWK); for example, the _JWE Public Key_ as shown in the previous section.
3. **Decode and Verify**: Use the public key to verify and decrypt the JWE.

**Putting it all together**: Here’s a Python example using the `PyJWT` library:

```python
import jwt
# Sample JWE token
jwe_token = "eyJhbGciOiJSUzI1xxxxx...JWE Ciphertext and other components...UkSIsIm4iOiJqYW1lc3Rpxxxx..."

# Sample JWE public key (in JWK format)
jwe_public_key = {
      "e": "AQAB",                 
      "kid": "de668337-....-....-....-5778944f9630",
      "kty": "RSA",
      "n": "rdqXc48aW...uNMSdIgn"
}

try:
    decoded_payload = jwt.decode(
        jwe_token,
        jwe_public_key,
        algorithms=['RS256'],  # Algorithm used for signature verification
        options={"verify_signature": True, "decrypt": True}
    )
    print("Decoded Payload:", decoded_payload)
except jwt.ExpiredSignatureError:
    print("JWE Signature has expired.")
except jwt.DecodeError:
    print("Invalid JWE Signature or Decryption failed.")

```

In this example code:

* ‘jwe_token` is the JWE that you want to verify and decrypt.
* The `jwt.decode` function is used to decode and verify the JWE.
* The public key is used as the key for signature verification and decryption.
* The `”verify_signature”: True` option indicates that the library should verify the signature.
* The `”decrypt”: True` option tells the library to attempt decryption of the JWE.
* The `algorithms` parameter specifies the algorithm used for signature verification that should match the algorithm used when creating the JWE.

If the JWE token is valid and the signature can be verified, the payload will be successfully decoded and printed.

For more information about JWE, refer to [JSON Web Encryption (JWE)](https://tools.ietf.org/html/rfc7516).
