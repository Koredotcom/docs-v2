--8<-- "includes/ccai-api-back-link.md"

# Create Bulk Contacts

To create bulk contact from a CSV file with the given stream Id.

| **METHOD**       | **POST**                                                          |
|--------------|---------------------------------------------------------------|
| **Endpoint**     | `https://{host}/agentassist/api/v1/public/{{botId}}/contacts/import-contacts` |
| **Content Type** | `application/json`                                           |
| **Authorization**| `auth: {{JWT}}` <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token) |
| **API Scope**    | Configuration                                                 |

## Path Parameters

| **PARAMETER** | **DESCRIPTION** | **TYPE**     |
|-----------|-------------|----------|
| `host`      | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `botId`     | botId or streamId. You can get it from the App Settings page. | string, required |
| `contacts`  | Contact details. For example, firstName, salutation, cellPhoneNumber, cellPhoneCountryCode, cellPhoneExtension. | string, required |

## Sample CSV File

<img src="../images/sample-csv-file.png" alt="Sample CSV File" title="Sample CSV File" style="border: 1px solid gray; zoom:80%;"/>

## Sample Request

```
curl --location --request POST
     'https://{{host}}/agentassist/api/v1/public/{{IID}}/contacts/import-contacts' \
      --header 'authority: smartassist.kore.ai' \
      --header 'accept: application/json, text/plain, */*' \
      --header 'accept-language: en-GB,en;q=0.6' \
      --header 'accountid: 63c7ebae6a2aef36de8fxxxx' \
      --header 'app-language: en' \
      --header 'content-type: application/json;charset=UTF-8' \
      --header 'cookie:
      mp_047a11cecb5356a4a4d5b3807d280766_mixpanel=%7B%22distinct_id%22%3A%20%
22185c4ee76476b6-06c5d613d9143b-1e462c6d-1fa400-185c4ee764897d%22%2C%22%24device_id%22%3A%20%22185c4ee76476b6-06c5d613d9143
b-1e462c6d-1fa400-185c4ee764897d%22%7D; mp_7888bdd5fedfd65f44bb9a3100fa9e80_mixpanel=%7B%22distinct_id%22%3A%20%22185c96da
2076ba-0f4b0a432b9049-1e462c6d-1fa400-185c96da208b46%22%2C%22%24device_id%22%3A%20%22185c96da2076ba-0f4b0a432b9049-1e462c6
d-1fa400-185c96da208b46%xxxxx' \
      --header 'referer: https://smartassist.kore.ai/desktop/console' \
      --header 'sec-ch-ua: "Not_A Brand";v="99", "Brave";v="109", 
      "Chromium";v="109"' \
      --header 'sec-ch-ua-mobile: ?0' \
      --header 'sec-ch-ua-platform: "Linux"' \
      --header 'sec-fetch-dest: empty' \
      --header 'sec-fetch-mode: cors' \
      --header 'sec-fetch-site: same-origin' \
      --header 'sec-gpc: 1' \
      --header 'smartassist: true' \
      --header 'state: configured' \
      --header 'user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36' \
      --header 'x-request-id: ed914d3f-9985-47a5-8ab2-84573c68xxxx' \
      --header 'x-timezone-offset: -330' \
      --header 'auth: <token>' \
      --form 'result_file=@"/home/johnsmith/Documents/john/sample.csv"'
```

!!! Note

     Saving contacts through the public API will allow duplicate names with different numbers but will prevent the same number from being associated with different or identical names. Backward compatibility to delete existing duplicate numbers will not be provided.

## Body Parameters

| **PARAMETER**            | **DESCRIPTION**                            | **TYPE**           |
|----------------------|----------------------------------------|----------------|
| firstName            | The first name of the contact.         | string, required |
| lastName             | The last name of the contact.          | string, required |
| salutation           | The salutation (Mr. or Mrs.) of the contact. | string, required |
| cellPhoneNumber      | The phoneNumber of the contact.       | string, required |
| cellPhoneCountryCode| The countryCode of the contact        | string, required |
| cellPhoneExtension  | The extension of the contact.          | string, required |

## Sample Response

```
[
  {
    "status": "ACTIVE",
    "firstName": "john",
    "lastName": "doe",
    "salutation": "Mr",
    "accountId": "63ab016b0d909c22b2daxxxx",
    "orgId": "o-dd99e2e4-476f-5aa6-90ad-bd7a0b9bxxxx",
    "createdBy":
"u-79cda73a-5947-536f-a1cc-3e939e84xxxx",
    "cellPhone": {
          "phoneNumber": "+9198765xxxxx",
          "countryCode": "+91",
          "extension": "+"
        },
        "fullName": "john doe",
        "address": [],
        "twitterDetails": [],
        "createdAt": "2023-01-18T10:53:35.622Z",
        "updatedAt": "2023-01-18T10:53:35.622Z",
        "id": "63c7cfaf196ce928529bxxxx"
  },
  {
    "status": "ACTIVE",
    "firstName": "jane",
    "lastName": "doe",
    "salutation": "Mrs",
    "accountId": "63ab016b0d909c22b2daxxxx",
    "orgId": "o-dd99e2e4-476f-5aa6-90ad-bd7a0b9bxxxx",
   "createdBy":
"u-79cda73a-5947-536f-a1cc-3e939e84xxxx",
   "cellPhone": {
       "phoneNumber": "+9112345xxxxx",
       "countryCode": "+91",
       "extension": "91"
   },
   "fullName": "jane doe",
   "address": [],
   "twitterDetails": [],
   "createdAt": "2023-01-18T10:53:35.622Z",
   "updatedAt": "2023-01-18T10:53:35.622Z",
   "id": "63c7cfaf196ce928529bxxxx"
  }
]
```