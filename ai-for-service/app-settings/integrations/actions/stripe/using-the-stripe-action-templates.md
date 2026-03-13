# Using the Stripe Action Templates

You can use the **Prebuilt Action Templates** from your Stripe integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using the Stripe action templates:



1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  

3. On the Dialog Task pop-up, under the Integration, select the Stripe option to view the action templates.  
<img src="../images/stripe-tem-img2.png" alt="Integration - Stripe" title="Integration - Stripe" style="border: 1px solid gray;zoom:50%;"/>

4. If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the Actions page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.  
<img src="../images/stripe-tem-img3.png" alt="Explore Integrations" title="Explore Integrations" style="border: 1px solid gray;zoom:50%;"/>


## Stripe Actions

The following Stripe actions are supported in this release:


<table border="1">
  <tr>
   <td><strong>Supported Tasks</strong>
   </td>
   <td><strong>Description</strong>
   </td>
   <td><strong>Method</strong>
   </td>
  </tr>
  <tr>
   <td>Create a Customer
   </td>
   <td>Creates a customer in the Stripe system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>List all customers
   </td>
   <td>Retrieves all customers from the Stripe system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Create Invoice
   </td>
   <td>Create a new invoice in the system.
   </td>
   <td>POST
   </td>
  </tr>
  <tr>
   <td>List all invoices
   </td>
   <td>Retrieves all invoices in the Stripe system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Create a payment intent
   </td>
   <td>Create a payment intent in the Stripe system.
   </td>
   <td>POST
   </td>
  </tr>
</table>



### Create a Customer

Steps to create a customer in the Stripe integration:

1. Refer to the [Installing the Stripe templates ](configuring-the-stripe-action.md#step-2-install-the-stripe-action-templates){:target="_blank"}section to install this template.
2. The _Create a Customer_ dialog task is added with the following components:  
<img src="../images/stripe-tem-img4.png" alt="Create a Customer dialog task is added" title="Create a Customer dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createCustomer** – A user intent to create a customer.
    2. **name**, **email**, and **phone** – Entity nodes for gathering the required customer details.
    3. **createCustomerService** – A bot action service to create a customer in an external integration. Click the **Plus** icon to expand to view the _createCustomerService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/stripe-tem-img5.png" alt="Create customer - Edit response" title="Create customer - Edit response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**:

        ```
        Key Value
        name
        Alan Walker
        phone
        774499847x
        email
        abc@xyz.com
        }
        ```

        To add one or more responses, scroll down and click the **+Add Response** button:

        **Sample Response**:

        ```
        {
        "id": "cus_N42Fu5I7t3dDyu",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1672212940,
        "currency": null,
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": "abc@xyz.com",
        "invoice_prefix": "44E40F14",
        "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
        },
        "livemode": false,
        "metadata": {},
        "name": "Alan Walker",
        "next_invoice_sequence": 1,
        "phone": "7000028162",
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none",
        "test_clock": null
        }
        ```

    5. **createCustomerMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create a customer as shown below:  
<img src="../images/stripe-tem-img6.png" alt="VA prompt to create customer" title="VA prompt to create customer" style="border: 1px solid gray;zoom:50%;"/>


### List All Customers

Steps to view all customers in the Stripe integration:

1. Refer to the [Installing the Stripe templates ](configuring-the-stripe-action.md#step-2-install-the-stripe-action-templates){:target="_blank"}section to install this template.
2. The _List All Customers_ dialog task is added with the following components:  
<img src="../images/stripe-tem-img7.png" alt="List All Customers dialog task is added" title="List All Customers dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **listAllCustomers** – A user intent to view all customers.
    2. **listAllCustomersService** – A bot action service to fetch all customers from an external integration. Click the **Plus** icon to expand to view the _listAllCustomersService_ bot action component properties.
    3. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/stripe-tem-img8.png" alt="List all customers - Edit Request" title="List all customers - Edit Request" style="border: 1px solid gray;zoom:50%;"/>

        To add one or more responses, scroll down and click the **+Add Response** button:

        **Sample Response**:

        ```
        {
        "object": "list",
        "data": [
        {
        "id": "cus_N42Fu5I7t3dDyu",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1672212940,
        "currency": null,
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": "abc@xyz.com",
        "invoice_prefix": "44E40F14",
        "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
        },
        "livemode": false,
        "metadata": {},
        "name": "John Doe",
        "next_invoice_sequence": 1,
        "phone": "7000028162",
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none",
        "test_clock": null
        },
        {
        "id": "cus_N42AIrFfWwxMgE",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1672212630,
        "currency": null,
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": null,
        "invoice_prefix": "8C233FEC",
        "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
        },
        "livemode": false,
        "metadata": {},
        "name": null,
        "next_invoice_sequence": 1,
        "phone": "7000028162",
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none",
        "test_clock": null
        },
        {
        "id": "cus_MoehoTNKYRVe26",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1668665764,
        "currency": "inr",
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": "fvs@iv.com",
        "invoice_prefix": "8DCEDA60",
        "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
        },
        "livemode": false,
        "metadata": {},
        "name": "sifjsv",
        "next_invoice_sequence": 2,
        "phone": "1234567890",
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none",
        "test_clock": null
        },
        {
        "id": "cus_MoPMlg13KszYN3",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1668608684,
        "currency": "inr",
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": "sofh@su.com",
        "invoice_prefix": "0B2EEB5D",
        "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
        },
        "livemode": false,
        "metadata": {},
        "name": "osuhs",
        "next_invoice_sequence": 2,
        "phone": "1234567890",
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none",
        "test_clock": null
        },
        {
        "id": "cus_MoPC8gvKMlx7dm",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1668608083,
        "currency": "inr",
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": "fs@g.com",
        "invoice_prefix": "4592BEDC",
        "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
        },
        "livemode": false,
        "metadata": {},
        "name": "Afaf",
        "next_invoice_sequence": 2,
        "phone": "1234567890",
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none",
        "test_clock": null
        },
        {
        "id": "cus_MoOz7609WhikjI",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1668607304,
        "currency": null,
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": "dfuu@affs.com",
        "invoice_prefix": "25CD7994",
        "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
        },
        "livemode": false,
        "metadata": {},
        "name": "Kevin Smith",
        "next_invoice_sequence": 1,
        "phone": "9090909089",
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none",
        "test_clock": null
        },
        {
        "id": "cus_MoLarncjII6Ysw",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1668594673,
        "currency": null,
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": "aoic@iaad.com",
        "invoice_prefix": "E935E75F",
        "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
        },
        "livemode": false,
        "metadata": {},
        "name": "addufad",
        "next_invoice_sequence": 1,
        "phone": "1234567890",
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none",
        "test_clock": null
        },
        {
        "id": "cus_MoLVfPuvfbkqtd",
        "object": "customer",
        "address": null,
        "balance": 0,
        "created": 1668594346,
        "currency": null,
        "default_source": null,
        "delinquent": false,
        "description": null,
        "discount": null,
        "email": null,
        "invoice_prefix": "71DA22EF",
        "invoice_settings": {
        "custom_fields": null,
        "default_payment_method": null,
        "footer": null,
        "rendering_options": null
        },
        "livemode": false,
        "metadata": {},
        "name": "Michael John",
        "next_invoice_sequence": 1,
        "phone": null,
        "preferred_locales": [],
        "shipping": null,
        "tax_exempt": "none",
        "test_clock": null
        }
        ],
        "has_more": true,
        "url": "/v1/customers"
        }
        ```

    4. **listAllCustomersMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to view all customers as shown below:  
<img src="../images/stripe-tem-img9.png" alt="List all customers - Edit Request" title="List all customers - Edit Request" style="border: 1px solid gray;zoom:50%;"/>


### Create an Invoice

Steps to create an invoice in the Stripe integration:

1. Refer to the [Installing the Stripe templates ](configuring-the-stripe-action.md#step-2-install-the-stripe-action-templates){:target="_blank"}section to install this template.
2. The _Create an Invoice_ dialog task is added with the following components:  
<img src="../images/stripe-tem-img10.png" alt="Create an Invoice dialog task is added" title="Create an Invoice dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createInvoice** – A user intent to create an invoice.
    2. **name**, **email**, **phone**, **dueDate**, **productName**, **productQuantity**, and **unitAmount** – Entity nodes for gathering the required invoice details.
    3. **createInvoiceScript** – A bot action service to create an invoice in an external integration. Click the **Plus** icon to expand to view the _createInvoiceScript_ bot action component properties.  
    <img src="../images/stripe-tem-img11.png" alt="createInvoiceScript bot action component properties" title="createInvoiceScript bot action component properties" style="border: 1px solid gray;zoom:50%;"/>

    4. **createInvoiceService** – A bot action service to create an invoice in an external integration. Click the **Plus** icon to expand to view the _createInvoiceService_ bot action component properties.
    5. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/stripe-tem-img12.png" alt="Create an Invoice - Edit request" title="Create an Invoice - Edit request" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Request**:

        ```
        {
        customer
        cus_N42Fu5I7t3dDyu
        collection_method
        send_invoice
        due_date
        1704067199
        }
        ```

    6. **createInvoiceItemService** – A bot action service to create an invoice item in an external integration.
    7. **createInvoiceMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create an invoice as shown below:  
<img src="../images/stripe-tem-img13.png" alt="VA prompt to create an invoice" title="VA prompt to create an invoice" style="border: 1px solid gray;zoom:50%;"/>


### List All Invoices

Steps to fetch all invoices from the Stripe integration:

1. Refer to the [Installing the Stripe templates ](configuring-the-stripe-action.md#step-2-install-the-stripe-action-templates){:target="_blank"}section to install this template.
2. The _List All Invoices_ dialog task is added with the following components:  
<img src="../images/stripe-tem-img14.png" alt="List All Invoices dialog task is added" title="List All Invoices dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **listAllInvoices** – A user intent to list all invoices.
    2. **listAllInvoicesService** – A bot action service to fetch all invoices in an external integration. Click the **Plus** icon to expand to view the _listAllInvoicesService_ bot action component properties.
    3. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response** as shown below:  
    <img src="../images/stripe-tem-img15.png" alt="List All Invoices - Add response" title="List All Invoices - Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        [
        "object": "list",
        "data": [
        {
        "id": "in_1MJuQrSFoZeLxu29Hpot60d2",
        "object": "invoice",
        "account_country": "IN",
        "account_name": "Kore",
        "account_tax_ids": null,
        "amount_due": 0,
        "amount_paid": 0,
        "amount_remaining": 0,
        "application": null,
        "application_fee_amount": null,
        "attempt_count": 0,
        "attempted": false,
        "auto_advance": false,
        "automatic_tax": {
        "enabled": false,
        "status": null
        },
        "billing_reason": "manual",
        "charge": null,
        "collection_method": "send_invoice",
        "created": 1672213933,
        "currency": "inr",
        "custom_fields": null,
        "customer": "cus_N42Fu5I7t3dDyu",
        "customer_address": null,
        "customer_email": "john.doe@example.com",
        "customer_name": "John Doe",
        "customer_phone": "7xxxxxxxxx",
        "customer_shipping": null,
        "customer_tax_exempt": "none",
        "customer_tax_ids": [],
        "default_payment_method": null,
        "default_source": null,
        "default_tax_rates": [],
        "description": null,
        "discount": null,
        "discounts": [],
        "due_date": 1704067199,
        "ending_balance": null,
        "footer": null,
        "from_invoice": null,
        "hosted_invoice_url": null,
        "invoice_pdf": null,
        "last_finalization_error": null,
        "latest_revision": null,
        "lines": {
        "object": "list",
        "data": [],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/invoices/in_1MJuQrSFoZeLxu29Hpot60d2/lines"
        },
        "livemode": false,
        "metadata": {},
        "next_payment_attempt": null,
        "number": null,
        "on_behalf_of": null,
        "paid": false,
        "paid_out_of_band": false,
        "payment_intent": null,
        "payment_settings": {
        "default_mandate": null,
        "payment_method_options": null,
        "payment_method_types": null
        },
        "period_end": 1672213933,
        "period_start": 1672213933,
        "post_payment_credit_notes_amount": 0,
        "pre_payment_credit_notes_amount": 0,
        "quote": null,
        "receipt_number": null,
        "rendering_options": null,
        "starting_balance": 0,
        "statement_descriptor": null,
        "status": "draft",
        "status_transitions": {
        "finalized_at": null,
        "marked_uncollectible_at": null,
        "paid_at": null,
        "voided_at": null
        },
        "subscription": null,
        "subtotal": 0,
        "subtotal_excluding_tax": 0,
        "tax": null,
        "test_clock": null,
        "total": 0,
        "total_discount_amounts": [],
        "total_excluding_tax": 0,
        "total_tax_amounts": [],
        "transfer_data": null,
        "webhooks_delivered_at": 1672213933
        },
        {
        "id": "in_1M51OLSFoZeLxu29CinEAuPN",
        "object": "invoice",
        "account_country": "IN",
        "account_name": "Kore",
        "account_tax_ids": null,
        "amount_due": 1000000,
        "amount_paid": 0,
        "amount_remaining": 1000000,
        "application": null,
        "application_fee_amount": null,
        "attempt_count": 0,
        "attempted": false,
        "auto_advance": false,
        "automatic_tax": {
        "enabled": false,
        "status": null
        },
        "billing_reason": "manual",
        "charge": null,
        "collection_method": "send_invoice",
        "created": 1668665765,
        "currency": "inr",
        "custom_fields": null,
        "customer": "cus_MoehoTNKYRVe26",
        "customer_address": null,
        "customer_email": "fvs@iv.com",
        "customer_name": "sifjsv",
        "customer_phone": "1234567890",
        "customer_shipping": null,
        "customer_tax_exempt": "none",
        "customer_tax_ids": [],
        "default_payment_method": null,
        "default_source": null,
        "default_tax_rates": [],
        "description": null,
        "discount": null,
        "discounts": [],
        "due_date": 1671692400,
        "ending_balance": 0,
        "footer": null,
        "from_invoice": null,
        "hosted_invoice_url":
        "last_finalization_error": null,
        "latest_revision": null,
        "lines": {
        "object": "list",
        "data": [
        {
        "id": "il_1M51OLSFoZeLxu29AoKrzSrN",
        "object": "line_item",
        "amount": 1000000,
        "amount_excluding_tax": 1000000,
        "currency": "inr",
        "description": "uuttl",
        "discount_amounts": [],
        "discountable": true,
        "discounts": [],
        "invoice_item": "ii_1M51OLSFoZeLxu29JYoVyeY5",
        "livemode": false,
        "metadata": {},
        "period": {
        "end": 1668665765,
        "start": 1668665765
        },
        "plan": null,
        "price": {
        "id": "price_1M51OLSFoZeLxu29NW1RuC8g",
        "object": "price",
        "active": false,
        "billing_scheme": "per_unit",
        "created": 1668665765,
        "currency": "inr",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": "prod_MoehlWyJkRdwgS",
        "recurring": null,
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "one_time",
        "unit_amount": 500000,
        "unit_amount_decimal": "500000"
        },
        "proration": false,
        "proration_details": {
        "credited_items": null
        },
        "quantity": 2,
        "subscription": null,
        "tax_amounts": [],
        "tax_rates": [],
        "type": "invoiceitem",
        "unit_amount_excluding_tax": "500000"
        }
        ],
        "has_more": false,
        "total_count": 1,
        "url": "/v1/invoices/in_1M51OLSFoZeLxu29CinEAuPN/lines"
        },
        "livemode": false,
        "metadata": {},
        "next_payment_attempt": null,
        "number": "8DCEDA60-0001",
        "on_behalf_of": null,
        "paid": false,
        "paid_out_of_band": false,
        "payment_intent": "pi_3M51ONSFoZeLxu290bGHhjsQ",
        "payment_settings": {
        "default_mandate": null,
        "payment_method_options": null,
        "payment_method_types": null
        },
        "period_end": 1668665765,
        "period_start": 1668665765,
        "post_payment_credit_notes_amount": 0,
        "pre_payment_credit_notes_amount": 0,
        "quote": null,
        "receipt_number": null,
        "rendering_options": null,
        "starting_balance": 0,
        "statement_descriptor": null,
        "status": "open",
        "status_transitions": {
        "finalized_at": 1668665766,
        "marked_uncollectible_at": null,
        "paid_at": null,
        "voided_at": null
        },
        "subscription": null,
        "subtotal": 1000000,
        "subtotal_excluding_tax": 1000000,
        "tax": null,
        "test_clock": null,
        "total": 1000000,
        "total_discount_amounts": [],
        "total_excluding_tax": 1000000,
        "total_tax_amounts": [],
        "transfer_data": null,
        "webhooks_delivered_at": 1668665765
        },
        {
        "id": "in_1M4mO0SFoZeLxu29DKFkhfsO",
        "object": "invoice",
        "account_country": "IN",
        "account_name": "Kore",
        "account_tax_ids": null,
        "amount_due": 50000000,
        "amount_paid": 0,
        "amount_remaining": 50000000,
        "application": null,
        "application_fee_amount": null,
        "attempt_count": 0,
        "attempted": false,
        "auto_advance": false,
        "automatic_tax": {
        "enabled": false,
        "status": null
        },
        "billing_reason": "manual",
        "charge": null,
        "collection_method": "send_invoice",
        "created": 1668608084,
        "currency": "inr",
        "custom_fields": null,
        "customer": "cus_MoPC8gvKMlx7dm",
        "customer_address": null,
        "customer_email": "fs@g.com",
        "customer_name": "Afaf",
        "customer_phone": "1234567890",
        "customer_shipping": null,
        "customer_tax_exempt": "none",
        "customer_tax_ids": [],
        "default_payment_method": null,
        "default_source": null,
        "default_tax_rates": [],
        "description": null,
        "discount": null,
        "discounts": [],
        "due_date": 1669438800,
        "ending_balance": 0,
        "footer": null,
        "from_invoice": null,
        "hosted_invoice_url":
        "last_finalization_error": null,
        "latest_revision": null,
        "lines": {
        "object": "list",
        "data": [
        {
        "id": "il_1M4mO1SFoZeLxu29VCaYVgXy",
        "object": "line_item",
        "amount": 50000000,
        "amount_excluding_tax": 50000000,
        "currency": "inr",
        "description": "Car",
        "discount_amounts": [],
        "discountable": true,
        "discounts": [],
        "invoice_item": "ii_1M4mO1SFoZeLxu2945Hl3pAW",
        "livemode": false,
        "metadata": {},
        "period": {
        "end": 1668608085,
        "start": 1668608085
        },
        "plan": null,
        "price": {
        "id": "price_1M4mO1SFoZeLxu29RJHNzS1O",
        "object": "price",
        "active": false,
        "billing_scheme": "per_unit",
        "created": 1668608085,
        "currency": "inr",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": "prod_MoPCjtWBmV0OYn",
        "recurring": null,
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "one_time",
        "unit_amount": 50000000,
        "unit_amount_decimal": "50000000"
        },
        "proration": false,
        "proration_details": {
        "credited_items": null
        },
        "quantity": 1,
        "subscription": null,
        "tax_amounts": [],
        "tax_rates": [],
        "type": "invoiceitem",
        "unit_amount_excluding_tax": "50000000"
        }
        ],
        "has_more": false,
        "total_count": 1,
        "url": "/v1/invoices/in_1M4mO0SFoZeLxu29DKFkhfsO/lines"
        },
        "livemode": false,
        "metadata": {},
        "next_payment_attempt": null,
        "number": "4592BEDC-0001",
        "on_behalf_of": null,
        "paid": false,
        "paid_out_of_band": false,
        "payment_intent": "pi_3M4mO2SFoZeLxu290TwK43Vu",
        "payment_settings": {
        "default_mandate": null,
        "payment_method_options": null,
        "payment_method_types": null
        },
        "period_end": 1668608084,
        "period_start": 1668608084,
        "post_payment_credit_notes_amount": 0,
        "pre_payment_credit_notes_amount": 0,
        "quote": null,
        "receipt_number": null,
        "rendering_options": null,
        "starting_balance": 0,
        "statement_descriptor": null,
        "status": "open",
        "status_transitions": {
        "finalized_at": 1668608086,
        "marked_uncollectible_at": null,
        "paid_at": null,
        "voided_at": null
        },
        "subscription": null,
        "subtotal": 50000000,
        "subtotal_excluding_tax": 50000000,
        "tax": null,
        "test_clock": null,
        "total": 50000000,
        "total_discount_amounts": [],
        "total_excluding_tax": 50000000,
        "total_tax_amounts": [],
        "transfer_data": null,
        "webhooks_delivered_at": 1668608084
        },
        {
        "id": "in_1LuVm9SFoZeLxu29NdxJebPB",
        "object": "invoice",
        "account_country": "IN",
        "account_name": "Kore",
        "account_tax_ids": null,
        "amount_due": 3559110,
        "amount_paid": 0,
        "amount_remaining": 3559110,
        "application": null,
        "application_fee_amount": null,
        "attempt_count": 0,
        "attempted": false,
        "auto_advance": false,
        "automatic_tax": {
        "enabled": false,
        "status": null
        },
        "billing_reason": "manual",
        "charge": null,
        "collection_method": "send_invoice",
        "created": 1666160953,
        "currency": "inr",
        "custom_fields": null,
        "customer": "cus_MbY9Ce4b1x2QD6",
        "customer_address": null,
        "customer_email": "john.doe@example.com",
        "customer_name": "John Doe",
        "customer_phone": "70000xxxx",
        "customer_shipping": null,
        "customer_tax_exempt": "none",
        "customer_tax_ids": [],
        "default_payment_method": null,
        "default_source": null,
        "default_tax_rates": [],
        "description": null,
        "discount": null,
        "discounts": [],
        "due_date": 1668105000,
        "ending_balance": null,
        "footer": null,
        "from_invoice": null,
        "hosted_invoice_url": null,
        "invoice_pdf": null,
        "last_finalization_error": null,
        "latest_revision": null,
        "lines": {
        "object": "list",
        "data": [
        {
        "id": "il_1LuVndSFoZeLxu29l7AgoRlj",
        "object": "line_item",
        "amount": 3555555,
        "amount_excluding_tax": 3555555,
        "currency": "inr",
        "description": "sfsf",
        "discount_amounts": [],
        "discountable": true,
        "discounts": [],
        "invoice_item": "ii_1LuVndSFoZeLxu29fwQOCvru",
        "livemode": false,
        "metadata": {},
        "period": {
        "end": 1666161045,
        "start": 1666161045
        },
        "plan": null,
        "price": {
        "id": "price_1LuVnSSFoZeLxu29PJBUQR5N",
        "object": "price",
        "active": false,
        "billing_scheme": "per_unit",
        "created": 1666161034,
        "currency": "inr",
        "custom_unit_amount": null,
        "livemode": false,
        "lookup_key": null,
        "metadata": {},
        "nickname": null,
        "product": "prod_MdnOtDUTW3XRdu",
        "recurring": null,
        "tax_behavior": "unspecified",
        "tiers_mode": null,
        "transform_quantity": null,
        "type": "one_time",
        "unit_amount": 1,
        "unit_amount_decimal": "1"
        },
        "proration": false,
        "proration_details": {
        "credited_items": null
        },
        "quantity": 3555555,
        "subscription": null,
        "tax_amounts": [],
        "tax_rates": [],
        "type": "invoiceitem",
        "unit_amount_excluding_tax": "1"
        },
        {
        "id": "in_1LuVl5SFoZeLxu293cqXtIjc",
        "object": "invoice",
        "account_country": "IN",
        "account_name": "Kore",
        "account_tax_ids": null,
        "amount_due": 0,
        "amount_paid": 0,
        "amount_remaining": 0,
        "application": null,
        "application_fee_amount": null,
        "attempt_count": 0,
        "attempted": false,
        "auto_advance": false,
        "automatic_tax": {
        "enabled": false,
        "status": null
        },
        "billing_reason": "manual",
        "charge": null,
        "collection_method": "send_invoice",
        "created": 1666160887,
        "currency": "inr",
        "custom_fields": null,
        "customer": "cus_MbY9Ce4b1x2QD6",
        "customer_address": null,
        "customer_email": "john.doe@example.com",
        "customer_name": "John Doe",
        "customer_phone": "700xxxxxx",
        "customer_shipping": null,
        "customer_tax_exempt": "none",
        "customer_tax_ids": [],
        "default_payment_method": null,
        "default_source": null,
        "default_tax_rates": [],
        "description": null,
        "discount": null,
        "discounts": [],
        "due_date": 1668105000,
        "ending_balance": null,
        "footer": null,
        "from_invoice": null,
        "hosted_invoice_url": null,
        "invoice_pdf": null,
        "last_finalization_error": null,
        "latest_revision": null,
        "lines": {
        "object": "list",
        "data": [],
        "has_more": false,
        "total_count": 0,
        "url": "/v1/invoices/in_1LuVl5SFoZeLxu293cqXtIjc/lines"
        },
        "livemode": false,
        "metadata": {},
        "next_payment_attempt": null,
        "number": null,
        "on_behalf_of": null,
        "paid": false,
        "paid_out_of_band": false,
        "payment_intent": null,
        "payment_settings": {
        "default_mandate": null,
        "payment_method_options": null,
        "payment_method_types": null
        },
        "period_end": 1666160887,
        "period_start": 1666160887,
        "post_payment_credit_notes_amount": 0,
        "pre_payment_credit_notes_amount": 0,
        "quote": null,
        "receipt_number": null,
        "rendering_options": null,
        "starting_balance": 0,
        "statement_descriptor": null,
        "status": "draft",
        "status_transitions": {
        "finalized_at": null,
        "marked_uncollectible_at": null,
        "paid_at": null,
        "voided_at": null
        },
        "subscription": null,
        "subtotal": 0,
        "subtotal_excluding_tax": 0,
        "tax": null,
        "test_clock": null,
        "total": 0,
        "total_discount_amounts": [],
        "total_excluding_tax": 0,
        "total_tax_amounts": [],
        "transfer_data": null,
        "webhooks_delivered_at": 1666160887
        },
        ],
        "has_more": true,
        "url": "/v1/invoices"
        }
        }
        ]
        ```

    4. **listAllInvoicesMessage** – A message node with script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to view all invoices.


### Create a Payment Intent

Steps to create a payment intent in the Stripe integration:

1. Refer to the [Installing the Stripe templates ](configuring-the-stripe-action.md#step-2-install-the-stripe-action-templates){:target="_blank"}section to install this template.
2. The _Create a Payment Intent_ dialog task is added with the following components:  
<img src="../images/stripe-tem-img16.png" alt="Create a Payment Intent dialog task is added" title="Create a Payment Intent dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **createPaymentIntent** – A user intent to make payments.
    2. **currency**, **amount**, and **customer** – Entity nodes for gathering the required payment details.
    3. **createPaymentIntentService** – A bot action service to make payments in an external integration. Click the **Plus** icon to expand to view the _createPaymentIntentService_ bot action component properties.
    4. In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/stripe-tem-img17.png" alt="Create a Payment Intent - Edit request" title="Create a Payment Intent - Edit request" style="border: 1px solid gray;zoom:50%;"/>

    5. **createPaymentIntentMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to create payment intents as shown below:  
<img src="../images/stripe-tem-img18.png" alt="VA prompt to Create a Payment Intent" title="VA prompt to Create a Payment Intent" style="border: 1px solid gray;zoom:50%;"/>
