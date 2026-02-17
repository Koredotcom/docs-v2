--8<-- "includes/digital-channels-back-link.md"

# Adding the Telegram Channel

To add Telegram as a channel to your Kore.ai assistant, you must create a bot on the Telegram platform. Adding the Telegram channel to your Kore.ai Assistant allows end-users to interact with it using their _Telegram_ account. You need a Telegram account to complete this procedure.

To add the Telegram channel, follow the below steps:


## Step 1: Configure a Telegram Bot



1. Log into **Telegram** and search for _@BotFather_ from the Search bar as shown below.
<img src="../images/telegram.png" alt="telegram channel" title="telegram channel" style="border: 1px solid gray; zoom:70%;">

2. Select **@BotFather** and click **START**.
3. In the chat section, type _/newbot_ in the **Message** box and click **Send**.
<img src="../images/telegram1.png" alt="telegram bot" title="telegram bot" style="border: 1px solid gray; zoom:70%;">

4. On sending the_ /newbot_ message, _BotFather_ prompts you to enter a **Name** for the new bot to be created. Preferably, give the same name as that of the Kore.ai assistant for which the channel is enabled.
5. After providing the name, _BotFather_ prompts for the **Username** for the new bot to be created. Provide any name that ends with _bot_. For example, sample bot or SampleBot.
<img src="../images/telegram2.png" alt="telegram configuration" title="telegram configuration" style="border: 1px solid gray; zoom:70%;">

6. After providing the username, _BotFather_ displays a confirmation message and access token. Note the access token to enter in the **Configurations** tab of the Telegram Channel page.
<img src="../images/telegram3.png" alt="telegram confirmation" title="telegram confirmation" style="border: 1px solid gray; zoom:70%;">



## Step 2: Configure the Channel



1. In the XO Platform, select the assistant that you want to enable the channel for.
2. Go to **Channels & Flows** > **Channels** > **Digital** > **All** > **Telegram**.
3. Go to the **Configurations** tab of the Telegram Channel page, enter the **Bot Name** of your Telegram bot in the **Bot Name** field.
4. Enter the **Access Token** that was displayed as a part of bot creation.
5. Select **Yes** and then click **Save** to enable the Telegram Channel for your bot.
<img src="../images/telegram4.png" alt="enable telegram channel" title="enable telegram channel" style="border: 1px solid gray; zoom:70%;">


After enabling the channel and verifying all the configurations, you can optionally publish the assistant for the new channel. Learn more about[ Publishing your App](../deploy/publishing-bot.md).

To learn more about working with Channels within the Kore.ai XO Platform, please see [Channel Enablement.](../channels/adding-channels-to-your-bot.md)
