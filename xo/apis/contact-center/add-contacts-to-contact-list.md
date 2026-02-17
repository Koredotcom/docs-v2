--8<-- "includes/ccai-api-back-link.md"

# Add Contacts to Contact List API

Use this API to add one or more contacts to an existing contact list.

| **Method**    | POST |
|---------------|------|
| **Endpoint**  | `https://{{host}}/api/1.1/public/{{IID}}/campaign/contactList/addContacts` |
| **Content-Type** | `application/json` |
| **Authorization** | `auth: {{JWT}}`  <br>See [How to generate the JWT Token](../automation/api-introduction.md#generating-the-jwt-token). |
| **API Scope** | Campaign Management |

## Path Parameters

| **Parameter** | **Description** | **Type** |
|---------------|----------------|----------|
| `host`        | Environment URL, for example, `https://platform.kore.ai` | string, required |
| `IId`    | The Application ID. | string, required |

## Sample Request

```
curl --location 'https://{{host}}/api/1.1/public/{{IID}}/campaign/contactList/addContacts' \
--header 'auth: <token>' \
--header 'iid: st-0603182c-7ffb-53c3-b307-47ca14b9xxxx' \
--header 'accountId: 67777ce93e25326494e9xxxx' \
--header 'Content-Type: application/json' \
--data '{
    "contact_list_name": "Renewal Due - July 2025",
    "data": [{
        "phoneNumber": "9122333445566"
    }]
}'
```

## Headers

| **Header** | **Description**                   | **Required/Optional** |
|------------|-----------------------------------|------------------------|
| `auth`     | JWT token for authentication.     | required               |
| `iid`     | The Application Id.     | required               |
| `accountId`     | The Account Id.     | required               |

## Body Parameters

| **Parameter**          | **Description**                                                                                                     | **Type**               |
|----------------------|-----------------------------------------------------------------------------------------------------------------|--------------------|
| `contact_list_name`  | Name of the contact list to which the data is being added. It must match an existing or target list.            | string, required   |
| `data`               | Array of contact records to be imported into the list. Each object typically represents one contact entry.      | array[object], required |
| `data[].phoneNumber` | Phone number of the contact. Must be a valid number in international or local format depending on platform rules. | string, required   |

## Sample Response

```
{
    "message": "Adding contacts to public list is in progress"
}
```

## Response Body Parameters

| **Parameter** | **Description**                               | **Type** |
|---------------|-----------------------------------------------|----------|
| `message`     | Success message. Indicates queued operation.  | string   |
