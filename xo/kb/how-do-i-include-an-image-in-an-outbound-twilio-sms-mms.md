# How do I include an Image in an Outbound Twilio SMS (MMS)?

For the Twilio SMS channel, you can use the <code>MediaUrl</code> parameter in the response to deliver an image. Let’s see an example of how to send an outbound message that includes an image and a text message.

**Sample API cURL Script:**

```
curl -XPOST https://api.twilio.com/2010-04-01/Accounts/ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX/Messages.json \
--data-urlencode "To=+13105555555" \
--data-urlencode "From=+12125551234" \
--data-urlencode "MediaUrl=https://demo.twilio.com/owl.png" \
--data-urlencode "Body=Hello, here is how it looks!" \
-u 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX:your_auth_token'
```

**Related Links**

* [Adding the Twilio SMS Channel](../channels/add-twilio-sms-channel.md){:target="_blank"}.
* <a href="https://support.twilio.com/hc/en-us/articles/223133907-Simple-Example-for-Sending-Programmable-SMS-Text-or-Picture-Messages" target="_blank">Simple Example for Sending Programmable SMS Text or Picture Messages (Twilio Doc)</a>