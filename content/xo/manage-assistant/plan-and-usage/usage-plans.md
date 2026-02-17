# Plan and Usage

Plan and Usage help you manage your apps and workspaces while keeping track of their periodic billing and usage. The **Plan Information** section provides information on your current plans for all the products. You can also view your billing cycle, modify your current plans, and compare them from here. On the analytics-driven **Usage Trends** dashboard, you can monitor the usage patterns of your App Interactions with customers.

## Plan Comparison

The Platform offers the following plans:

* Essential: Everything you need to get started building an AI Chatbot.
* Advanced: Everything in Essential plus higher limits and more advanced features to help your AI Chatbot do more.
* Enterprise: Everything in Advanced plus enterprise features, custom pricing, and highest limits designed for enterprise.




## Billing Session

### Key Billing Rules

* Automation AI and Search AI: Billed per 15-minute of activity.
* Contact Center AI and Agent AI: Billed per Agent Seats (named or concurrent).
* Add-ons: Billed separately. 

### Product-Specific Billing Sessions

* Automation AI: A billing session is 15 minutes of user conversation with the bot. For example, if a user converses with the bot for 31 minutes, it would be counted as 3 sessions (0-15, 16-30, 31-End).
    * Billing sessions are tracked at the individual app or bot level. In dynamic routing scenarios, the Parent app functions as a standalone app with its own billing sessions. When the Parent app routes a user query to a linked app, that billing session is attributed to the linked app, not the Parent app.  
    When you select the Parent app in the Admin Console or pass its ID via the API, the system returns only the Parent app's direct sessions; it doesn't include sessions routed from the Parent app to linked apps.


* Search AI: This is included in Automation AI, and the same billing session is applied. 
    * Enterprise users can ingest up to 1 GB of data, by default, with an additional 1% allowance. Contract-specific limits, if applicable, override this default.
* Contact Center AI: It’s billed per the agent seats:
    * Named Seats: Each agent gets a dedicated seat. For example, if 100 agents work across 3 shifts, you will be billed for 100 seats.
    * Concurrent Seats: This is based on the maximum number of simultaneously logged-in agents. For example, if a maximum of 50 agents work per shift across 3 shifts (150 total agents), you will be billed only for 50 seats.  
* Agent AI: It’s billed per the agent seats, similar to Contact Center AI as explained above.
* Add-ons: They are billed separately from the plan. 

## Navigating to Plan and Usage

To access the **Plan and Usage**, follow the steps below:

1. Log in to the Platform and select the app to see its **Plan and Usage**.
2. Navigate to **Product Switcher > Billing > Manage > Plan and Usage**.  
<img src="../images/navigating-to-plan-and-usage.gif" alt="Navigating to Plan and Usage" title="Navigating to Plan and Usage" style="border: 1px solid gray;"/>

### Plan Information

Here, you can find detailed information about your current plan and product usage. You can also modify or upgrade your plan directly from here.  
<img src="../images/plan-information.png" alt="Nplan-information" title="plan-information" style="border: 1px solid gray;"/>

### Usage Trends

This section allows app users to access detailed billing information, helping them stay informed about their expenses and effectively track Apps’ usage. The dashboard provides a consolidated view of cumulative billing data, including Billing sessions, voice sessions, and agent counts.

* Billing Sessions: Total number of billing sessions completed, encompassing automation AI interactions and API requests.
* Voice Sessions: Total number of voice-based interactions across products, including Speech-to-Text (STT), Text-to-Speech (TTS), and calls via the Voice Gateway.
* Agent Count: Concurrent Agent Seats that the customers have subscribed to for the given time.  

!!! note
   
    The Agent Count is not displayed for enterprise customers.


Users can filter and view billing data for individual apps and refine the data further with date filters. They can select from predefined ranges such as 24 hours, 7 days, 30 days, or 90 days or set a custom date range.

Billing metrics are shown using a graph or table, making it easy to understand usage patterns.

Hovering over a data point displays a tooltip with the following details:

* Date
* Billing Sessions
* Voice Sessions
* Agent Count  

 <img src="../images/usage-trend.png" alt="usage trend" title="usage trend" style="border: 1px solid gray;"/>

         
## Payment Methods

The following payment modes are available on the Payment page when you add funds to the Platform:

### PayPal (Default Selection)

Link your PayPal email account to the Platform’s payment gateway to add paid credits.

<img src="../images/up(24).png" alt="Payment Method" title="Payment Method" style="border: 1px solid gray;"/>


### Credit/Debit Card

Initiate the transaction for paid credits using a valid credit/debit card. Add the _card number_, _account holder’s name_, _expiry date_, and _CVV security code_ to authorize the transaction and validate using an OTP.

<img src="../images/up(10).png" alt="Credit/Debit Card" title="Credit/Debit Card" style="border: 1px solid gray;"/>

### Wire Transfer

Select the wire transfer payment mode while adding funds. A wire transfer is a form of electronic payment that sends money directly from one bank account (Payer) to another (Payee). 
<img src="../images/up(4).png" alt="Wire Transfer" title="Wire Transfer" style="border: 1px solid gray;"/>

**Important Considerations**

* **View Order Details**: When you place an order by selecting the wire transfer method, it gets registered with pending payment clearance status. The order summary page provides you the total amount to transfer along with the break-up summary. Meanwhile, you should also receive an email from Paypro with the detailed steps to complete your Wire Transfer order. 
 
  <img src="../images/up(12).png" alt="order details" title="Order details" style="border: 1px solid gray;"/>

* **Ability to Add Funds during pending Wire Transfer**: A Wire Transfer process may take four to eight days to complete. The paid credits are loaded only after the transfer is successful. If the agent runs out of balance and your Wire Transfer order is still in ‘Pending’ status, you can add funds using an alternative payment method like a credit card or PayPal.


### Subscribe and Modify the Plan

To subscribe to a new plan or modify an existing plan, follow the steps below:

1. On the Platform, navigate to **Manage** > **Plan & Usage**.
2. In the **Plan Information** section, click **Subscribe** to sign up for a new plan, or click **Modify** to adjust your existing plan. 
   <img src="../images/up(3).png" alt="Subscription" title="Subscription" style="border: 1px solid gray;"/>  
   <img src="../images/up(35).png" alt="modify" title="modify" style="border: 1px solid gray;"/>


3. Select the plan and then click **Proceed and Modify**.  
   <img src="../images/up(20).png" alt="Proceed and Modify" title="Proceed and Modify" style="border: 1px solid gray;"/>

4. Enter the **Billing Information**, select a **Payment Method**, and enter the payment details.


5. Click **Submit Order**.

   <img src="../images/up(25).png" alt="Submit Order" title="Submit Order" style="border: 1px solid gray;"/>


## Deployment Flow

The admin can take action for a Standard Workspace app deployment request based on the following scenarios:

**Standard Workspace with Free Credits**

The admin user can approve a deployment request without constraints/checks or any plan selection flows if the workspace has free credits.

**Standard Workspace without Free Credits**

If the standard workspace has exhausted all the free credits, the admin cannot approve the publish request until funds/ credits are added to the account.

**Standard Workspace with Paid Credits**

If an account has paid credits, then the admin user can approve the deployment flow.

## Emails and Notifications

The Platform sends notifications and marketing emails to the app developers/account owners at various stages. 
The following table describes the automatic emails triggered by the system when an event occurs:

<table>
  <tr>
   <td><strong>Email Template Name</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Emails from the product</strong>
   </td>
  </tr>
  <tr>
   <td>Sign-up – OTP and Resend Signup – OTP
   </td>
   <td>This email provides a One-Time Password (OTP) to complete their self-signup process.
   </td>
  </tr>
  <tr>
   <td>Forget Password 
   </td>
   <td> This email provides a verification link to reset the password.
   </td>
  </tr>
  <tr>
   <td>Two factor-OTP and resend-OTP
   </td>
   <td>This email provides an OTP  for Two-Factor Authentication (2FA).
   </td>
  </tr>
  <tr>
   <td>Workspace approval request
   </td>
   <td>This email notifies the account owner about an access request for their platform account, asking for approval or denial of the request, with a prompt to contact for further details or concerns.
   </td>
  </tr>
  <tr>
   <td>Workspace approval accepted
   </td>
   <td>This email confirms the acceptance of an access request to the specified platform workspace, welcoming the recipient to collaborate with their team and offering assistance for a smooth onboarding experience.
   </td>
  </tr>
  <tr>
   <td>Workspace approval rejected
   </td>
   <td>This email informs the recipient that their request for access to a specific platform workspace has been declined by the account owner, offering further clarification and support if needed.
   </td>
  </tr>
  <tr>
   <td>Invite new user to account from admin console
   </td>
   <td>This email invites the recipient to join a platform workspace, providing steps to accept the invitation and start collaborating, along with contact details for any support needed during the process.
   </td>
  </tr>
  <tr>
   <td>Invite existing user to account from admin console
   </td>
   <td>This email invites the recipient to join a platform workspace, providing steps to accept the invitation and offering support for any issues.
   </td>
  </tr>
  <tr>
   <td>Invite new user from bot
   </td>
   <td>This email invites the recipient to join an app on platform, providing steps to accept the invitation.
   </td>
  </tr>
  <tr>
   <td>Invite existing user from bot (user is not part of the account)
   </td>
   <td>This email invites the recipient to join an app on platform, following an administrator's invitation, with steps to access the app's features and support details for assistance if needed.
   </td>
  </tr>
  <tr>
   <td>Invite existing user from bot(user is part of the account)
   </td>
   <td>This email invites the recipient, via a bot, to join an app on platform, providing steps to access the app's features, along with support details.
   </td>
  </tr>
  <tr>
   <td>Bot Publish 
   </td>
   <td>This email announces the successful publication of a bot.
   </td>
  </tr>
  <tr>
   <td>Free Tokens Exhausted  
   </td>
   <td>This email informs the recipient that their free tokens for the Generative AI features have been exhausted for the specified app, providing steps to configure their own Language Model (LLM) to continue using the capabilities.
   </td>
  </tr>
  <tr>
   <td colspan="2" ><strong>Pricing Emails</strong>
   </td>
  </tr>
  <tr>
   <td>Automation AI Subscription
   </td>
   <td>This email confirms the successful activation of the recipient's subscription to the Automation AI service, indicating that payment has been processed and the account is ready to use.
   </td>
  </tr>
  <tr>
   <td>Contact Center AI Subscription
   </td>
   <td>This email confirms the successful activation of the recipient's subscription to the Contact Center AI service, indicating that payment has been processed.
   </td>
  </tr>
  <tr>
   <td>Automation AI & Contact Center AI Subscription
   </td>
   <td>This email confirms the successful activation of the recipient's subscriptions to the Automation AI and Contact Center AI services, indicating that payment has been processed.
   </td>
  </tr>
  <tr>
   <td>Add-on platform Voice Gateway with ASR and TTS
   </td>
   <td>This email confirms the successful activation of the recipient's subscription for the platform Voice Gateway add-on with ASR and TTS, indicating that payment has been processed.
   </td>
  </tr>
  <tr>
   <td>Single add-on subscription (Ex: Advanced RAG)
   </td>
   <td>This email confirms the successful activation of the recipient's subscription for the Advanced RAG add-on, indicating that payment has been processed and the advanced features are now accessible in their account.
   </td>
  </tr>
  <tr>
   <td>Multiple Add-ons 
   </td>
   <td>This email confirms the successful activation of the recipient's subscriptions for the add-ons, indicating that payment has been processed and the advanced features are now accessible in their account.
   </td>
  </tr>
  <tr>
   <td>Auto-Renewal Successful
   </td>
   <td>This email confirms the successful renewal of the recipient's XO11 product subscription, providing details about the subscription plan, billing amount, renewal date, and next billing date.
   </td>
  </tr>
  <tr>
   <td>Auto-Renewal Unsuccessful
   </td>
   <td>This email informs the recipient of an issue encountered during the renewal of their XO11 product subscription, highlighting that their services will stop in a specified number of days unless immediate action is taken to complete the payment.
   </td>
  </tr>
  <tr>
   <td>Trial Expired
   </td>
   <td>This email informs the recipient that the trial has expired, and encourages them to upgrade to a paid plan for uninterrupted access. 
   </td>
  </tr>
  <tr>
   <td>Subscription Expired
   </td>
   <td>This email informs the recipient that their XO11 product subscription has expired and encourages them to renew for uninterrupted access to all features and benefits.
   </td>
  </tr>
  <tr>
   <td>Subscription Canceled
   </td>
   <td>This email confirms the successful processing of the recipient's cancellation request for their XO11 product subscription, stating that it is effective immediately and that they will no longer be billed.
   </td>
  </tr>
   </td>
  </tr>
</table>
