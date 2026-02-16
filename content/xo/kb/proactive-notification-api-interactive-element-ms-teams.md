

# Using Proactive Notifications API with a Payload to Present Interactive Elements in MS Teams

Proactive Notifications allow enterprises to engage with their end users (customers or employees) by providing relevant and timely updates. Developers can add additional details or actions in the API payload that they want to present to the users as part of the notification. For example, for the MS Teams channel, the notification can include a link/button that the end-users can click.


### Sample API Payload for MS Teams

Below is a sample API payload with a **message** component containing the notification's content, formatted for Microsoft Teams. 

The **message** component includes the following details:



* **type**: `script`
* **val**: A stringified JSON object representing an Adaptive Card for MS Teams. This card includes:
    * An image from a URL (a company logo, for instance).
    * Text blocks for status, description, total value, and creation date of a ticket or project.
    * An action set with a submit action allowing the recipient to interact with the card, such as reopening a ticket with a specific number.


### Sample API Request


```
curl --location 'https://bots.kore.ai/api/public/bot/{{BotID}}/notify' \
--header 'Content-Type: application/json' \
--header 'auth: {{YOUR_JWT_ACCESS_TOKEN}}' \
--data-raw '{
    "channel": "msteams",
    "userIdentityType": "resolve",
    "message": {
        "type": "script",
        "val": "{\"type\":\"message\",\"speak\":\"\",\"attachments\":[{\"contentType\":\"application/vnd.microsoft.card.adaptive\",\"content\":{\"$schema\":\"https://adaptivecards.io/schemas/adaptive-card.json\",\"type\":\"AdaptiveCard\",\"version\":\"1.4\",\"body\":[{\"type\":\"ColumnSet\",\"id\":\"idx0\",\"columns\":[{\"type\":\"Column\",\"items\":[{\"type\":\"Image\",\"style\":\"Person\",\"url\":\"https://lever-client-logos.s3.amazonaws.com/965b74f1-3802-484a-9511-459bbdaccb55-1572990729555.png\",\"size\":\"Medium\"}],\"width\":\"auto\"},{\"type\":\"Column\",\"items\":[{\"type\":\"TextBlock\",\"text\":\"Status: **Closed**\",\"spacing\":\"small\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"Description: GDC Sow for development for Golden Fortress\",\"spacing\":\"Small\",\"separator\":true,\"wrap\":true},{\"type\":\"TextBlock\",\"spacing\":\"small\",\"text\":\"Total Value: 33615.00\",\"wrap\":true},{\"type\":\"TextBlock\",\"spacing\":\"small\",\"text\":\"Creation Date: 2021-08-15T16:24:17-07:0\",\"wrap\":true}],\"width\":\"stretch\"},{\"type\":\"Column\",\"items\":[{\"type\":\"ActionSet\",\"actions\":[{\"type\":\"Action.Submit\",\"title\":\"1190148660\",\"data\":{\"msteams\":{\"type\":\"imBack\",\"value\":\"Reopen ticket number INC03004614\"}}}],\"spacing\":\"None\",\"horizontalAlignment\":\"Right\",\"separator\":true}],\"width\":\"auto\",\"spacing\":\"Small\"}],\"separator\":true,\"spacing\":\"Large\"},{\"type\":\"ColumnSet\",\"id\":\"idx0\",\"columns\":[{\"type\":\"Column\",\"items\":[{\"type\":\"Image\",\"style\":\"Person\",\"url\":\"https://lever-client-logos.s3.amazonaws.com/965b74f1-3802-484a-9511-459bbdaccb55-1572990729555.png\",\"size\":\"Medium\"}],\"width\":\"auto\"},{\"type\":\"Column\",\"items\":[{\"type\":\"TextBlock\",\"text\":\"Status: **Closed**\",\"spacing\":\"small\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"Description: GDC Sow for development for Golden Fortress\",\"spacing\":\"Small\",\"separator\":true,\"wrap\":true},{\"type\":\"TextBlock\",\"spacing\":\"small\",\"text\":\"Total Value: 33615.00\",\"wrap\":true},{\"type\":\"TextBlock\",\"spacing\":\"small\",\"text\":\"Creation Date: 2021-08-15T16:24:17-07:0\",\"wrap\":true}],\"width\":\"stretch\"},{\"type\":\"Column\",\"items\":[{\"type\":\"ActionSet\",\"actions\":[{\"type\":\"Action.Submit\",\"title\":\"1190148660\",\"data\":{\"msteams\":{\"type\":\"imBack\",\"value\":\"Reopen ticket number INC03004614\"}}}],\"spacing\":\"None\",\"horizontalAlignment\":\"Right\",\"separator\":true}],\"width\":\"auto\",\"spacing\":\"Small\"}],\"separator\":true,\"spacing\":\"Large\"},{\"type\":\"ColumnSet\",\"id\":\"idx0\",\"columns\":[{\"type\":\"Column\",\"items\":[{\"type\":\"Image\",\"style\":\"Person\",\"url\":\"https://lever-client-logos.s3.amazonaws.com/965b74f1-3802-484a-9511-459bbdaccb55-1572990729555.png\",\"size\":\"Medium\"}],\"width\":\"auto\"},{\"type\":\"Column\",\"items\":[{\"type\":\"TextBlock\",\"text\":\"Status: **Closed**\",\"spacing\":\"small\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"Description: GDC Sow for development for Golden Fortress\",\"spacing\":\"Small\",\"separator\":true,\"wrap\":true},{\"type\":\"TextBlock\",\"spacing\":\"small\",\"text\":\"Total Value: 33615.00\",\"wrap\":true},{\"type\":\"TextBlock\",\"spacing\":\"small\",\"text\":\"Creation Date: 2021-08-15T16:24:17-07:0\",\"wrap\":true}],\"width\":\"stretch\"},{\"type\":\"Column\",\"items\":[{\"type\":\"ActionSet\",\"actions\":[{\"type\":\"Action.Submit\",\"title\":\"1190148660\",\"data\":{\"msteams\":{\"type\":\"imBack\",\"value\":\"Reopen ticket number INC03004614\"}}}],\"spacing\":\"None\",\"horizontalAlignment\":\"Right\",\"separator\":true}],\"width\":\"auto\",\"spacing\":\"Small\"}],\"separator\":true,\"spacing\":\"Large\"},{\"type\":\"ColumnSet\",\"id\":\"idx0\",\"columns\":[{\"type\":\"Column\",\"items\":[{\"type\":\"Image\",\"style\":\"Person\",\"url\":\"https://lever-client-logos.s3.amazonaws.com/965b74f1-3802-484a-9511-459bbdaccb55-1572990729555.png\",\"size\":\"Medium\"}],\"width\":\"auto\"},{\"type\":\"Column\",\"items\":[{\"type\":\"TextBlock\",\"text\":\"Status: **Closed**\",\"spacing\":\"small\",\"wrap\":true},{\"type\":\"TextBlock\",\"text\":\"Description: GDC Sow for development for Golden Fortress\",\"spacing\":\"Small\",\"separator\":true,\"wrap\":true},{\"type\":\"TextBlock\",\"spacing\":\"small\",\"text\":\"Total Value: 33615.00\",\"wrap\":true},{\"type\":\"TextBlock\",\"spacing\":\"small\",\"text\":\"Creation Date: 2021-08-15T16:24:17-07:0\",\"wrap\":true}],\"width\":\"stretch\"},{\"type\":\"Column\",\"items\":[{\"type\":\"ActionSet\",\"actions\":[{\"type\":\"Action.Submit\",\"title\":\"1190148660\",\"data\":{\"msteams\":{\"type\":\"imBack\",\"value\":\"Reopen ticket number INC03004614\"}}}],\"spacing\":\"None\",\"horizontalAlignment\":\"Right\",\"separator\":true}],\"width\":\"auto\",\"spacing\":\"Small\"}],\"separator\":true,\"spacing\":\"Large\"}]}}]}"
    },
    "identities": [
         "johnbogge@koredotai.onmicrosoft.com",
         "johnsonborris@koredotai.onmicrosoft.com"
    ]
}'
```


### Sample Notification in Microsoft Teams



![alt_text](images/image1.png )

