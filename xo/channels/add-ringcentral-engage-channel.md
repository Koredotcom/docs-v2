--8<-- "includes/digital-channels-back-link.md"

# Add RingCentral Engage as a Channel

To set up **RingCentral Engage** as a channel, you must complete the following steps:


## Add the Host URL


1. Copy-paste the **HOST URL** from **RingCentral Engage** to the Kore.ai platform.
2. Provide it in the **Channels & Flows** > **Channels** > **Digital** > **All** > **RingCentral Engage** > **Configurations**.


## Generate API Access Token


1. Login to your **RingCentral Engage** developer account. The URL specific to your company will be available after creating a paid account with RingCentral Engage.
2. Navigate to the **Admin** section and click the code snippet icon on the left navigation menu.
3. Select **API Access Tokens**.
<img src="../images/ringcentral.png" alt="RingCentral Engage integration" title="RinCentral Engage integration" style="border: 1px solid gray; zoom:90%;">


4. If there are any tokens present already, you can use them or click **ADD** to generate a new _API Token_.

   <img src="../images/ringcentral1.png" alt="RingCentral access token" title="RinCentral access token" style="border: 1px solid gray; zoom:90%;">

   <img src="../images/ringcentral2.png" alt="RingCentral api token" title="RinCentral api token" style="border: 1px solid gray; zoom:90%;">

5. Provide a **Name** for your API Token.
6. Select **Agent** from the drop-down list.
7. Click **Save**.
8. Navigate to the _API Tokens_ screen and click on the **Edit** icon to land on the screen shown below where the generated _API Access Token_ appears.
<img src="../images/ringcentral3.png" alt="access token" title="access token" style="border: 1px solid gray; zoom:90%;">


9. Copy and provide the generated **API Access Token** under **Channels & Flows** > **Channels** > **Digital** > **All** > **RingCentral Engage** > **Configurations** on the Kore.ai platform.

## Setup Webhook Configuration

1. Once the _API Token_ has been generated, navigate to **Admin > Webhooks**. Click the **code snippet** icon on the left navigation menu, and select **Webhooks**.
<img src="../images/ringcentral4.png" alt="webhook " title="webhook" style="border: 1px solid gray; zoom:90%;">

2. If any webhook configurations are present already, you can use them or click **ADD** to generate a new webhook configuration.
   <img src="../images/ringcentral5.png" alt="webhook configuration" title="webhook configuration" style="border: 1px solid gray; zoom:90%;">

   <img src="../images/ringcentral6.png" alt="new webhook configuration" title="new webhook configuration" style="border: 1px solid gray; zoom:90%;">

3. Select the **API Access Token** generated.
4. Copy the **URL** from the Kore.ai platform under the **RingCentral Engage** channel and paste it to the above webhook configuration screen.
5. Provide a **Name** for the configuration.
6. The _Verification Token_ will be generated automatically.
7. Copy the **verification token** and paste it in the **RinCentral Engage > Configurations** section of the Kore.ai platform.
8. Provide any unique **“Secret Key”** of your choice.
<img src="../images/ringcentral7.png" alt="secret key" title="secret key" style="border: 1px solid gray; zoom:90%;">

9. Select the Channel you prefer or select all the channels if the message is to be delivered on all the channels.

Please refer to this [link](https://support.ringcentral.com/engagedigital/admin/configure-entry-points.html) for more information on how to configure channels.


## Subscribe to events for message delivery


1. Select the **content. imported** event under the **Subscriptions** section.
2. Click **Save**.

!!! note

    Make sure to check the Active option before you save. This will establish a handshake between RingCentral Engage and Kore.ai platform by sending a 200 code to RingCentral on successful connection establishment.
