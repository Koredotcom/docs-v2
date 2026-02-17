# Using the Shopify Action Templates

You can use the **Prebuilt Action Templates** from your Shopify integration to auto-create dialog tasks and test them using the **Talk to Bot** option.

Steps to create a dialog task using the Shopify action templates:



1. Go to **Automation AI** > **Use Cases** > **Dialogs**.
2. Click **Create a Dialog Task**.  


3. On the Dialog Task pop-up, under the Integration, select the Shopify option to view the action templates.  
<img src="../images/shopify-tem-img2.png" alt="Integrations - Shopify" title="Integrations - Shopify" style="border: 1px solid gray;zoom:50%;"/>

4. If you have not configured any integration for your AI Agent, you will see the **Explore Integrations** option. Once you click this option, you will be redirected to the Actions page to configure an integration for your AI Agent. For more information, see [Actions Overview](../actions.md){:target="_blank"}.  
<img src="../images/shopify-tem-img3.png" alt="Explore Integrations" title="Explore Integrations" style="border: 1px solid gray;zoom:50%;"/>

## Shopify Actions

The following Shopify actions are supported in this release:


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
   <td>Get order by ID
   </td>
   <td>Retrieves the order details with an order ID from the system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Get orders by customer ID
   </td>
   <td>Retrieves orders using the customer ID from the system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Get products by name
   </td>
   <td>Retrieves products using their names from the system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Get product by ID
   </td>
   <td>Retrieves product details using the ID from the system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Get products by collection ID
   </td>
   <td>Retrieves products using the collection ID from the system.
   </td>
   <td>GET
   </td>
  </tr>
  <tr>
   <td>Get variants by product id
   </td>
   <td>Retrieves product variants using the product ID from the system.
   </td>
   <td>GET
   </td>
  </tr>
</table>



### Get order by ID

Steps to find an order using an order ID:

1. Refer to the [Installing the Shopify templates ](configuring-the-shopify-action.md#step-2-install-the-shopify-action-templates){:target="_blank"}section to install this template.
2. The **Get Order by ID** dialog task is added with the following components:  
<img src="../images/shopify-tem-img4.png" alt="Get Order by ID dialog task is added" title="Get Order by ID dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **getOrderbyID** - A user intent to fetch an order by ID.
    2. **orderID** – Entity node for entering the order ID.
    3. **getOrderbyID Service** – A bot action service to get an order by ID in an external integration. Click the Plus icon to expand to view the **getOrderbyIDService** bot action component properties.
    4. (Optional)In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below:  
    <img src="../images/shopify-tem-img5.png" alt="Get Order by ID - Edit Request" title="Get Order by ID - Edit Request" style="border: 1px solid gray;zoom:50%;"/>

        To add one or more responses, scroll down and click the **+Add Response** button:  
        <img src="../images/shopify-tem-img6.png" alt="Get Order by ID - Add Response" title="Get Order by ID - Add Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "orders": [
        {
        "id": 5323508842800,
        "admin_graphql_api_id": "gid://shopify/Order/5323508842800",
        "app_id": 41312092161,
        "browser_ip": null,
        "buyer_accepts_marketing": false,
        "cancel_reason": null,
        "cancelled_at": null,
        "cart_token": null,
        "checkout_id": null,
        "checkout_token": null,
        "closed_at": null,
        "confirmed": true,
        "contact_email": "john@abcd.com",
        "created_at": "2023-05-11T12:40:17+05:30",
        "currency": "INR",
        "current_subtotal_price": "30000.00",
        "current_subtotal_price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "current_total_discounts": "0.00",
        "current_total_discounts_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "customer_locale": null,
        "device_id": null,
        "discount_codes": [],
        "email": "john@abcd.com",
        "estimated_taxes": false,
        "financial_status": "partially_paid",
        "fulfillment_status": null,
        "gateway": "",
        "landing_site": null,
        "landing_site_ref": null,
        "location_id": null,
        "merchant_of_record_app_id": null,
        "name": "#1002",
        "note": null,
        "note_attributes": [],
        "number": 2,
        "order_number": 1002,
        "order_status_url": "original_total_duties_set": null,
        "payment_gateway_names": [],
        "phone": null,
        "presentment_currency": "INR",
        "processed_at": "2023-05-11T12:40:17+05:30",
        "processing_method": "",
        "reference": null,
        "referring_site": null,
        "source_identifier": null,
        "source_name": "41312092161",
        "source_url": null,
        "subtotal_price": "30000.00",
        "subtotal_price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "tags": "",
        "tax_lines": [],
        "taxes_included": false,
        "test": false,
        "token": "b69588d7e98c979b1d036ecd2f2xxxxx",
        "total_discounts": "0.00",
        "total_discounts_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "total_line_items_price": "30000.00",
        "total_line_items_price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "total_outstanding": "30000.00",
        "total_price": "30000.00",
        "total_price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "total_shipping_price_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "total_tax": "0.00",
        "total_tax_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "total_tip_received": "0.00",
        "total_weight": 0,
        "updated_at": "2023-05-11T12:41:17+05:30",
        "user_id": null,
        "customer": {
        "id": 6930128470320,
        "email": "john@abcd.com",
        "accepts_marketing": false,
        "created_at": "2023-05-11T12:21:20+05:30",
        "updated_at": "2023-05-11T12:40:17+05:30",
        "first_name": "John",
        "last_name": "Smith",
        "state": "disabled",
        "note": "",
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "phone": null,
        "email_marketing_consent": {
        "state": "not_subscribed",
        "opt_in_level": "single_opt_in",
        "consent_updated_at": null
        },
        "sms_marketing_consent": null,
        "tags": "",
        "currency": "INR",
        "accepts_marketing_updated_at": "2023-05-11T12:40:17+05:30",
        "marketing_opt_in_level": null,
        "tax_exemptions": [],
        "admin_graphql_api_id": "gid://shopify/Customer/6930128470320",
        "default_address": {
        "id": 9175363191088,
        "customer_id": 6930128470320,
        "first_name": "John",
        "last_name": "Smith",
        "company": "",
        "address1": "",
        "address2": "",
        "city": "",
        "province": "",
        "country": "India",
        "zip": "",
        "phone": "",
        "name": "John Smith",
        "province_code": null,
        "country_code": "IN",
        "country_name": "India",
        "default": true
        }
        },
        "discount_applications": [],
        "fulfillments": [],
        "line_items": [
        {
        "id": 13881417564464,
        "admin_graphql_api_id": "gid://shopify/LineItem/13881417564464",
        "fulfillable_quantity": 1,
        "fulfillment_service": "manual",
        "fulfillment_status": null,
        "gift_card": false,
        "grams": 0,
        "name": "shorts",
        "price": "30000.00",
        "price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "product_exists": false,
        "product_id": null,
        "properties": [],
        "quantity": 1,
        "requires_shipping": true,
        "sku": null,
        "taxable": true,
        "title": "shorts",
        "total_discount": "0.00",
        "total_discount_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "variant_id": null,
        "variant_inventory_management": null,
        "variant_title": null,
        "vendor": null,
        "tax_lines": [],
        "duties": [],
        "discount_allocations": []
        }
        ],
        "payment_terms": null,
        "refunds": [],
        "shipping_lines": []
        }
        ```

    5. **getOrderbyIDMessage** – A message node with the script to display responses for various scenarios.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to get an order by ID as shown below.  
<img src="../images/shopify-tem-img7.png" alt="VA prompts to Get Order by ID" title="VA prompts to Get Order by ID" style="border: 1px solid gray;zoom:50%;"/>

6. To view the order details for a given id click the **View Order** button.  
<img src="../images/shopify-tem-img8.png" alt="View order details for a given id" title="View order details for a given id" style="border: 1px solid gray;zoom:50%;"/>

7. Once you click View Order button, you are redirected to view the order details in Shopify as shown below.  
<img src="../images/shopify-tem-img9.png" alt="View Order - view the order details in Shopify" title="View Order - view the order details in Shopify" style="border: 1px solid gray;zoom:50%;"/>


### Get Orders by Customer ID

Steps to find orders by customer Id in Shopify:

1. Refer to the [Installing the Shopify templates ](configuring-the-shopify-action.md#step-2-install-the-shopify-action-templates){:target="_blank"}section to install this template.
2. The **Get Orders by Customer ID** dialog task is added with the following components:  
<img src="../images/shopify-tem-img10.png" alt="Get Orders by Customer ID dialog task is added" title="Get Orders by Customer ID dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **getOrdersbyCustomerID** – A user intent to get orders by customer ID.
    2. **customerID** – Entity nodes for entering the customer ID.
    3. **getOrdersbyCustomerIDService** – A bot action service to get orders from an external integration using the customer ID. Click the Plus icon to expand to view the **getOrderbyCustomerIDService** bot action component properties.
    4. (Optional)In the Component Properties window, click the **Edit Request** link to edit the request parameters as shown below.  
    <img src="../images/shopify-tem-img11.png" alt="Get Orders by Customer ID - Edit Request" title="Get Orders by Customer ID - Edit Request" style="border: 1px solid gray;zoom:50%;"/>

        To add one or more responses, scroll down and click the **+Add Response** button.  
        <img src="../images/shopify-tem-img12.png" alt="Get Orders by Customer ID - Add response" title="Get Orders by Customer ID - Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "orders": [
        {
        "id": 5323508842800,
        "admin_graphql_api_id": "gid://shopify/Order/5323508842800",
        "app_id": 41312092161,
        "browser_ip": null,
        "buyer_accepts_marketing": false,
        "cancel_reason": null,
        "cancelled_at": null,
        "cart_token": null,
        "checkout_id": null,
        "checkout_token": null,
        "closed_at": null,
        o"confirmed": true,
        "contact_email": "john@abcd.com",
        "created_at": "2023-05-11T12:40:17+05:30",
        "currency": "INR",
        "current_subtotal_price": "30000.00",
        "current_subtotal_price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "current_total_discounts": "0.00",
        "current_total_discounts_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "current_total_duties_set": null,
        "current_total_price": "30000.00",
        "current_total_price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "current_total_tax": "0.00",
        "current_total_tax_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "customer_locale": null,
        "device_id": null,
        "discount_codes": [],
        "email": "john@abcd.com",
        "estimated_taxes": false,
        "financial_status": "partially_paid",
        "fulfillment_status": null,
        "gateway": "",
        "landing_site": null,
        "landing_site_ref": null,
        "location_id": null,
        "merchant_of_record_app_id": null,
        "name": "#1002",
        "note": null,
        "note_attributes": [],
        "number": 2,
        "order_number": 1002,
        "order_status_url": "https://38d913.myshopify.com/",
        "original_total_duties_set": null,
        "payment_gateway_names": [],
        "phone": null,
        "presentment_currency": "INR",
        "processed_at": "2023-05-11T12:40:17+05:30",
        "processing_method": "",
        "reference": null,
        "referring_site": null,
        "source_identifier": null,
        "source_name": "41312092161",
        "source_url": null,
        "subtotal_price": "30000.00",
        "subtotal_price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "tags": "",
        "tax_lines": [],
        "taxes_included": false,
        "test": false,
        "token": "b69588d7e98c979b1d036ecd2f2xxxxx",
        "total_discounts": "0.00",
        "total_discounts_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "total_line_items_price": "30000.00",
        "total_line_items_price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "total_outstanding": "30000.00",
        "total_price": "30000.00",
        "total_price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "total_shipping_price_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "total_tax": "0.00",
        "total_tax_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "total_tip_received": "0.00",
        "total_weight": 0,
        "updated_at": "2023-05-11T12:41:17+05:30",
        "user_id": null,
        "customer": {
        "id": 6930128470320,
        "email": "john@abcd.com",
        "accepts_marketing": false,
        "created_at": "2023-05-11T12:21:20+05:30",
        "updated_at": "2023-05-11T12:40:17+05:30",
        "first_name": "John",
        "last_name": "Smith",
        "state": "disabled",
        "note": "",
        "verified_email": true,
        "multipass_identifier": null,
        "tax_exempt": false,
        "phone": null,
        "email_marketing_consent": {
        "state": "not_subscribed",
        "opt_in_level": "single_opt_in",
        "consent_updated_at": null
        },
        "sms_marketing_consent": null,
        "tags": "",
        "currency": "INR",
        "accepts_marketing_updated_at": "2023-05-11T12:40:17+05:30",
        "marketing_opt_in_level": null,
        "tax_exemptions": [],
        "admin_graphql_api_id": "gid://shopify/Customer/6930128470320",
        "default_address": {
        "id": 9175363191088,
        "customer_id": 6930128470320,
        "first_name": "John",
        "last_name": "Smith",
        "company": "",
        "address1": "",
        "address2": "",
        "city": "",
        "province": "",
        "country": "India",
        "zip": "",
        "phone": "",
        "name": "John Smith",
        "province_code": null,
        "country_code": "IN",
        "country_name": "India",
        "default": true
        }
        },
        "discount_applications": [],
        "fulfillments": [],
        "line_items": [
        {
        "id": 13881417564464,
        "admin_graphql_api_id": "gid://shopify/LineItem/13881417564464",
        "fulfillable_quantity": 1,
        "fulfillment_service": "manual",
        "fulfillment_status": null,
        "gift_card": false,
        "grams": 0,
        "name": "shorts",
        "price": "30000.00",
        "price_set": {
        "shop_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "30000.00",
        "currency_code": "INR"
        }
        },
        "product_exists": false,
        "product_id": null,
        "properties": [],
        "quantity": 1,
        "requires_shipping": true,
        "sku": null,
        "taxable": true,
        "title": "shorts",
        "total_discount": "0.00",
        "total_discount_set": {
        "shop_money": {
        "amount": "0.00",
        "currency_code": "INR"
        },
        "presentment_money": {
        "amount": "0.00",
        "currency_code": "INR"
        }
        },
        "variant_id": null,
        "variant_inventory_management": null,
        "variant_title": null,
        "vendor": null,
        "tax_lines": [],
        "duties": [],
        "discount_allocations": []
        }
        ],
        "payment_terms": null,
        "refunds": [],
        "shipping_lines": []
        }
        ]
        }
        ```

    5. **getOrdersbyCustomerIDMessage** – A message node with the script to display responses.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to fetch orders by customer ID as shown below.  
<img src="../images/shopify-tem-img13.png" alt="VA Prompt to Get Orders by Customer ID" title="VA prompt to Get Orders by Customer ID" style="border: 1px solid gray;zoom:50%;"/>


### Get Products by Name

Step to view products by name in Shopify:

1. Refer to the [Installing the Shopify templates ](configuring-the-shopify-action.md#step-2-install-the-shopify-action-templates){:target="_blank"}section to install this template.
2. The **Get Products by Name** dialog task is added for Shopify with the following components:  
<img src="../images/shopify-tem-img14.png" alt="Get Products by Name dialog task is added" title="Get Products by Name dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Get Products by Name** – A user intent to fetch products by name.
    2. **Name** – Entity node for entering the name of the product.
    3. **getProductsbyNameService** – A bot action script to view all deals in an external integration. Click the Plus icon to expand to view the **getProductsbyNameService** bot action component properties, and click **+Add Response** to add one or more  
    <img src="../images/shopify-tem-img15.png" alt="Get Products by Name - Add Response" title="Get Products by Name - Add Response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response**:

        ```
        {
        "products": [
        {
        "id": 8328274510128,
        "title": "shorts",
        "body_html": "Burmudas",
        "vendor": "My Store",
        "product_type": "",
        "created_at": "2023-05-11T12:20:44+05:30",
        "handle": "shorts",
        "updated_at": "2023-05-11T12:34:39+05:30",
        "published_at": "2023-05-11T12:20:44+05:30",
        "template_suffix": "",
        "status": "active",
        "published_scope": "global",
        "tags": "",
        "admin_graphql_api_id": "gid://shopify/Product/8328274510128",
        "variants": [
        {
        "product_id": 8328274510128,
        "id": 45090761212208,
        "title": "Default Title",
        "price": "200.00",
        "sku": "",
        "position": 1,
        "inventory_policy": "deny",
        "compare_at_price": "600.00",
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "created_at": "2023-05-11T12:20:44+05:30",
        "updated_at": "2023-05-11T12:20:44+05:30",
        "taxable": true,
        "barcode": "",
        "grams": 0,
        "image_id": null,
        "weight": 0.0,
        "weight_unit": "kg",
        "inventory_item_id": 47142403408176,
        "inventory_quantity": 0,
        "old_inventory_quantity": 0,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/45090761212208"
        }
        ],
        "options": [
        {
        "product_id": 8328274510128,
        "id": 10541831913776,
        "name": "Title",
        "position": 1,
        "values": [
        "Default Title"
        ]
        }
        ],
        "images": [],
        "image": null
        }
        ]
        }
        ```

    4. **getProductsByNameMessage** – A message node with the script to display responses.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to fetch products by name as shown below.  
<img src="../images/shopify-tem-img16.png" alt="VA prompt to Get Products by Name" title="VA prompt to Get Products by Name" style="border: 1px solid gray;zoom:50%;"/>

### Get Product by ID

Steps to get a product by ID in Shopify:

1. Refer to the [Installing the Shopify templates ](configuring-the-shopify-action.md#step-2-install-the-shopify-action-templates){:target="_blank"}section to install this template.
2. The **Get Product by ID** dialog task is added with the following components:  
<img src="../images/shopify-tem-img17.png" alt="Get Product by ID dialog task is added" title="Get Product by ID dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **Get product by ID** – A user intent to fetch the product by ID.
    2. **productId** – Entity nodes for entering the product ID.
    3. **getProductbyIDService** – A bot action service to find a product in an external integration using the ID. Click the **Plus** icon to expand to view the **getProductbyIDService** bot action component properties, and click **Edit Request** to edit the sample request.  
    <img src="../images/shopify-tem-img18.png" alt="Get Product by ID - Edit Request" title="Get Product by ID - Edit Request" style="border: 1px solid gray;zoom:50%;"/>

        To add one or more responses, scroll down and click **+Add Response**.  
        <img src="../images/shopify-tem-img19.png" alt="Get Product by ID - Add response" title="Get Product by ID - Add response" style="border: 1px solid gray;zoom:50%;"/>

        **Sample Response:**

        ```
        {
        "product": {
        "id": 8328273789232,
        "title": "shirts",
        "body_html": "Polo neck t shirts",
        "vendor": "My Store",
        "product_type": "",
        "created_at": "2023-05-11T12:20:03+05:30",
        "handle": "t-shirts",
        "updated_at": "2023-05-11T12:34:53+05:30",
        "published_at": "2023-05-11T12:20:03+05:30",
        "template_suffix": "",
        "status": "active",
        "published_scope": "global",
        "tags": "",
        "admin_graphql_api_id": "gid://shopify/Product/8328273789232",
        "variants": [
        {
        "product_id": 8328273789232,
        "id": 45090759737648,
        "title": "Default Title",
        "price": "100.00",
        "sku": "",
        "position": 1,
        "inventory_policy": "deny",
        "compare_at_price": "500.00",
        "fulfillment_service": "manual",
        "inventory_management": "shopify",
        "option1": "Default Title",
        "option2": null,
        "option3": null,
        "created_at": "2023-05-11T12:20:03+05:30",
        "updated_at": "2023-05-11T12:20:03+05:30",
        "taxable": true,
        "barcode": "",
        "grams": 0,
        "image_id": null,
        "weight": 0.0,
        "weight_unit": "kg",
        "inventory_item_id": 47142401933616,
        "inventory_quantity": 0,
        "old_inventory_quantity": 0,
        "requires_shipping": true,
        "admin_graphql_api_id": "gid://shopify/ProductVariant/45090759737648"
        }
        ],
        "options": [
        {
        "product_id": 8328273789232,
        "id": 10541830963504,
        "name": "Title",
        "position": 1,
        "values": [
        "Default Title"
        ]
        }
        ],
        "images": [],
        "image": null
        }
        }
        ```

    4. **getProductbyIDMessage** – A message node with the script to display responses.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to find products by ID as shown below:  
<img src="../images/shopify-tem-img20.png" alt="VA prompt to Get Product by ID" title="VA prompt to Get Product by ID" style="border: 1px solid gray;zoom:50%;"/>

### Get products by Collection ID

Steps to find products using the collection ID in Shopify:

1. Refer to the [Installing the Shopify templates ](configuring-the-shopify-action.md#step-2-install-the-shopify-action-templates){:target="_blank"}section to install this template.
2. The **Get Products by Collection ID** dialog task is added for Shopify with the following components:  
<img src="../images/shopify-tem-img21.png" alt="Get Products by Collection ID dialog task is added" title="Get Products by Collection ID dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **getProductsbyCollectionId** – A user intent to fetch products using a collection ID.
    2. **collectionID** – Entity nodes for entering the collection ID to find products.
    3. **getProductsbyCollectionIDService** – A bot action script to update a deal in an external integration. Click the **Plus** icon to expand to view the getProductsbyCollectionIDService bot action component properties, and click **Edit Request** to edit request parameters.  
    <img src="../images/shopify-tem-img22.png" alt="Get Products by Collection ID - Edit request" title="Get Products by Collection ID - Edit request" style="border: 1px solid gray;zoom:50%;"/>

    4. In the Component Properties window, to add one or more responses, scroll down and click **+Add Response**.

        **Sample Response**:

        ```
        {
        "products": [
        {
        "id": 8328273789232,
        "title": "shirts",
        "body_html": "Polo neck t shirts",
        "vendor": "My Store",
        "product_type": "",
        "created_at": "2023-05-11T12:20:03+05:30",
        "handle": "t-shirts",
        "updated_at": "2023-05-11T12:34:53+05:30",
        "published_at": "2023-05-11T12:20:03+05:30",
        "template_suffix": "",
        "status": "active",
        "published_scope": "global",
        "tags": "",
        "admin_graphql_api_id": "gid://shopify/Product/8328273789232",
        "options": [
        {
        "id": 10541830963504,
        "product_id": 8328273789232,
        "name": "Title",
        "position": 1
        }
        ],
        "images": [],
        "image": null
        }
        ]
        }
        ```

    5. **getProductsbyCollectionIDMessage** – A message node with the script to display responses.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to fetch products by collection ID as shown below.  
<img src="../images/shopify-tem-img23.png" alt="VA prompt to Get Products by Collection ID" title="VA prompt to Get Products by Collection ID" style="border: 1px solid gray;zoom:50%;"/>

### Get variants by Product ID

Steps to get variants by product ID in Shopify:

1. Refer to the [Installing the Shopify templates ](configuring-the-shopify-action.md#step-2-install-the-shopify-action-templates){:target="_blank"}section to install this template.
2. The **Get Variants by Product ID** dialog task is added for Shopify with the following components:  
<img src="../images/shopify-tem-img24.png" alt="Get Variants by Product ID dialog task is added" title="Get Variants by Product ID dialog task is added" style="border: 1px solid gray;zoom:50%;"/>

    1. **GetVariantsbyProductID** – A user intent to fetch variants by product ID.
    2. **productId** – Entity nodes for entering the product ID.
    3. **getVariantsbyProductIDService** – A bot action script to delete a deal in an external integration. Click the **Plus** icon to expand to view the **getVariantsbyProductIDService** bot action component properties, and click **Edit Request** to edit request parameters.  
    <img src="../images/shopify-tem-img25.png" alt="Get Variants by Product ID - Edit Request" title="Get Variants by Product ID - Edit Request" style="border: 1px solid gray;zoom:50%;"/>

    4. **getVariantsbyProductIDMessage** – A message node with the script to display responses.

3. Click the **Train** tab to complete the Dialog task training.
4. Click the **Talk to Bot** icon to test and debug the dialog task.
5. Follow the prompts in the App console to fetch variants using the product ID as shown below.  
<img src="../images/shopify-tem-img26.png" alt="VA prompt to Get Variants by Product ID" title="VA prompt to Get Variants by Product ID" style="border: 1px solid gray;zoom:50%;"/>
