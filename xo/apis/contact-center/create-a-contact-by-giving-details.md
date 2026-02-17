--8<-- "includes/ccai-api-back-link.md"

# Create a Contact by Giving Details

To create a contact with the given stream Id.

| **METHOD**       | **POST**                                                                                                             |
|------------------|------------------------------------------------------------------------------------------------------------------|
| **Endpoint**     | `https://{host}/agentassist/api/v1/public/{{streamId}}/contacts`                                                 |
| **Content Type** | `application/json`                                                                                               |
| **Authorization**| `auth: {{JWT}}` <br>See [How to generate the JWT Token.](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**    | Configuration                                                                                                    |

## Path Parameters

| **PARAMETER** | **DESCRIPTION**                                                                                         | **TYPE**         |
|---------------|---------------------------------------------------------------------------------------------------------|------------------|
| host          | Environment URL, for example, `https://platform.kore.ai`                                                | string, required |
| BotId         | BotId or StreamId. You can access it from the App Settings page of the bot.                         | string, required |
| accountId     | Your Account ID.                                                                                        | string, required |
| contacts      | Contact details, for example, firstName, salutation, phoneNumber, countryCode, extension.               | string, required |

## Sample Request

```
curl --location --request POST 'https://{{host}}/agentassist/api/v1/public/{{streamId}}/contacts' \
      --header 'auth: {jwt-code}' \
      --header 'accountId:123456789'
      --header 'Content-Type: application/json' \
[
     {
       "firstName": "John",
       "lastName": "Doe",
       "salutation": "Mr",
       "cellPhone": {
            "phoneNumber": "98765xxxxx",
            "countryCode": "+91",
            "extension": "+"
        }
     }
]
```

!!! Note

     Saving contacts through the public API will allow duplicate names with different numbers but will prevent the same number from being associated with different or identical names. Backward compatibility to delete existing duplicate numbers will not be provided.

## Request Headers

| **Header** | **Description** | **Required/Optional** |
| :---- | :---- | :---- |
| `auth` | JWT token for authentication. | required |
| `accountId` | The account ID associated with the API request. | required |

## Body Parameters

| **PARAMETER**            | **DESCRIPTION**                                                                              | **TYPE**         |
|--------------------------|----------------------------------------------------------------------------------------------|------------------|
| firstName                | The first name of the contact.                                                               | string, required |
| lastName                 | The last name of the contact.                                                                | string, required |
| salutation               | The salutation (Mr. or Mrs.) of the contact.                                                 | string, required |
| cellPhone.phoneNumber    | The phone number of the contact in numeric digits without any special characters or alphabets.| string, required |
| cellPhone.countryCode    | The country code of the contact.                                                             | string, required |
| cellPhone.extension      | The extension of the contact.                                                                | string, required |

## Sample Response

```
[
  {
    "status": "ACTIVE",
    "firstName": "John",
    "lastName": "Doe",
    "salutation": "Mr",
    "cellPhone": {
          "phoneNumber": "+9198765xxxxx",
          "countryCode": "+91",
          "extension": "+"
        },
        "createdBy":
   "u-5304b2ff-3647-53eb-9ef1-7ae63175xxxx",
        "orgId":
   "o-acccb4e7-4378-564e-9822-3f5f8bf3xxxx",
        "accountId": "635ba2bbec8cd28846c7xxxx",
        "instanceBotId":
   "st-2c7f48ca-fe7c-5778-a903-2854a94cxxxx",
        "fullName": "John Doe",
        "address": [],
        "twitterDetails": [],
        "createdAt": "2023-01-18T10:21:05.318Z",
        "updatedAt": "2023-01-18T10:21:05.318Z",
        "id": "63c7c8119187ebc8bae1xxxx"
  }
]
```