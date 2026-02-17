# Configure Web Crawl for Websites

Websites usually provide detailed information about an organization's products and services but have numerous pages and links. Finding a particular piece of information on a website can be a time-consuming task. Search AI simplifies this process by indexing the content of websites, enabling the data and information on the web pages to be readily available as answers to the user's queries. 

## Key Features

* **Scheduled crawling**: Automatically ingest web content at regular intervals to ensure search results reflect the latest information.

* **Automatic discovery**: Simply provide a base URL—the crawler automatically discovers pages using site navigation and hyperlinks.

* **Crawl rules**: Define which pages to include or exclude from crawling.

* **Authentication support**: Access restricted content with proper credentials.

To manage ingested web data or add new web sources, navigate to **Content** > **Websites**.

![Web Crawl](images/web-crawl-home.png "Web Crawl")

## Adding a New Web Crawler for a Web Source

To add a new web source, click **+Web Crawl**.

Alternatively, if some web domains are already configured for crawling, you will see the list on this page. Click **+Add Web Crawl** on the top right to add a new web domain for crawling.

![Add new web source](images/existing-webcrawls.png "add a new web source")

Provide details of the crawl configuration on the **Configuration** tab and click **Save & Crawl**.

![Web Crawl Configuration](images/add-web-config-page.png "Web Crawl Configuration")

This validates the configuration provided and by default, automatically initiates the crawl process after validation.
![Automate Crawling](images/automatic-crawl.PNG "Automate Crawling")

You can choose to run the crawl in the background, which allows you to perform other tasks on the application. Alternatively, you can also schedule the crawler to run at specific times in the future.
![Schedule Crawling](images/schedule-crawl.PNG "Schedule Crawling")

### Crawl Configuration

**Source Title** - Provide a unique name for the web source. 

**Description** - Enter a description of the source. This field can contain any information about the source, such as the data it offers and the reason for adding it as a source. 

**Crawl Sources** - There are three ways to initiate crawling for a web domain.

1. **URL** - Provide the base URL of the web domain to be crawled. When a URL is provided, the crawler automatically goes through the web pages that are discoverable through this URL in the domain based on the **crawl configuration** discussed below.
2. **Upload Sitemap** - Provide a list of sitemaps as a CSV file and a Base URL. The base URL is used to validate the URLs in the sitemaps. It crawls through all the web pages listed in each sitemap in the CSV file, for which the URL matches the Base URL. If a URL in the sitemap doesn't match the base URL, the crawler skips that URL and doesn't crawl it. The crawl options are used to refine the URLs further for crawling. You can use the [sample sitemap CSV](assets/sample_sitemap.csv "download") to learn the format of the CSV file. 
3. **Upload URL** - Provide a list of URLs to crawl in the form of a CSV file and a base URL. The base URL is used to validate the URLs in the CSV file. In this case, the crawler goes through all the pages listed in the CSV file that match the Base URL. The URLs that match the base URL are crawled, and those that don't match are skipped. The crawl options are used to refine the URLs further for crawling. In this case, crawl depth and max URL crawl options aren't required. Use the [Sample URL CSV](assets/sample_url.csv "download") to learn about the format of the CSV file.

**Crawl Depth** - Each website contains multiple levels of the hierarchy of pages and sub-pages. The source URL is considered at the top of the hierarchy, and other pages linked to the URL create nested layers. Crawl depth refers to the maximum number of nested levels the crawler should reach. This field can take values between 1 and 10. If no value is provided for the field, the default crawl depth is set to 5. 


**Max URL Limit** - This field refers to the maximum number of URLs to crawl. This field can take any integer value between 1 and 10,000. If no value is provided, the default value is 10. 


**Advanced Crawl Configuration** - This section provides advanced configurations to optimize the crawling process and filter the web pages to be crawled. 

* **Use Cookies** - Check the field if you want to crawl web pages that require cookie acceptance. If the field is unchecked, the web pages which require cookie acceptance will be ignored. 

* **JavaScript Rendered** - Check this field if the content rendered through Javascript code is to be crawled. This field can be useful if the web pages are Javascript-heavy and may have useful information for the user. If disabled, any content that's rendered on the website through Javascript will be skipped. 
   
!!!note
    Tip: Websites with dynamic content are usually Javascript rendered. 

When the **JavaScript Rendered** option is enabled, specify the **Crawl Delay field** that specifies the time that a crawler waits before considering a web page as fully rendered and starting indexing of the page.

* **Crawl Beyond Sitemap** - Sitemap is a file that provides information about the important pages and files on the website. Check this field to crawl URLs beyond those listed in the sitemap. If this is unchecked, only the URLs defined in the sitemap are crawled.  

* **Respect robots.txt directives** - Robots.txt file contains information about the URLs that the crawler can access on the website. This field, when checked, forces the crawler to honor any directives in the robots.txt file for the web domain.  

* **Processing Options** - This enables you to choose the content for ingestion from a given web page. 

    * **Automatic Cleaning**- This option is useful for web pages where the header and footer may not contain information useful to the end users. When automatic cleaning is selected, the content in the header, footer, and head tags from the web page are removed before ingestion into the Search AI application. This helps exclude irrelevant sections and unnecessary content to be indexed from the web pages.
    * **Retain Original** - When this option is selected, all the content from a web page (including all HTML tags and their content) is ingested into the application. Use **Workbench** to transform the content on this page specifically.

* **Crawl Options** - This field can be used to further filter the web pages to crawl from the list of URLs defined using the crawl source. You can choose to crawl and index all the URLs in the crawl source or allow or block specific URLs from being crawled. This configuration can be used to avoid crawling unnecessary web pages from the source, thereby, optimizing indexing for efficient searches. The field can take one of the following values:
    * **Crawl everything** - Use this option when all the URLs in the domain specified by the Crawl Source are to be crawled. By default, when a new domain is added, this option is used, and all the URLs in the domain are used.
    * **Crawl everything except specific URLs** - Use this option when all the URLs except the blocked URLs are to be crawled. You can add rules to identify the blocked URLs, like _block if URL contains or doesn’t contain a specific term or if the URL is equal to a specific URL_, as shown below. Select the condition from the drop-down list and specify its values in the text box on the right. 
        
    ![Crawl Everything except specific URL](images/URL-exclude-conditions.png "Crawl specific URLs")

    * **Crawl only specific URLs** - Use this option when only selected URLs that satisfy a given condition are to be crawled. For example, if only the blog section is to be crawled, you can set the rule as _Allow if URL contains “blog”_. ![Crawl Only Specific URLs](images/URL-include-conditions.png "crawl only specific URLs") You can use any of the following types of conditions to choose the URLs:
           * **Equals to** - when the URL exactly matches the given value.
           * **Not equal to** - when the URL doesn't match the given value.
           * **Contains** - when a given string is found in the URL.
           * **Does not contain** - When a given string value isn't found in the URL.
           * **Begins with** - when a given string is found at the beginning of the URL.
           * **Ends with** - when a given string is found at the end of the URL.
            
    You can **add any number of rules** to selectively choose the URLs from the web domain in the above two options. 
        
    ![Number of rules](images/multiple-include-conditions.png "number of rules")

* **Set Schedule Timer** - Enable this field to schedule the crawling at a particular date and time. You can also set a frequency for crawling the web domain at regular intervals. To set a schedule, enter the following:
    * **Date**: The date you want to schedule the first crawl of the web source.
    * **Time**: When you want to schedule the first crawling of the web source. Specify the hours and minutes in a 12-hour format along with the timezone. 
    * **Frequency**: Crawling at regular intervals ensures users have up-to-date information. Use this field to specify the frequency of crawling the website. If you want to crawl it only once, set it to ‘Does not repeat’. You can choose daily, weekly, monthly, annual, or custom values for this field.

* **Is this an Authenticated website?** - Enable this field if an authentication mechanism protects the source website. If the website requires authentication, provide relevant information to access the website depending on the authentication method. Search AI web crawling supports the two types of authentication - **Basic Authentication** and **Form-based Authentication**. Both are simple authentication schemes built into the HTTP protocol that are used to protect web resources. Although both mechanisms use a username and password to authenticate the client, the difference is in the way both are implemented. Basic Authentication uses an HTTP header to provide the username and password when making a request to the server. Whereas Form-based authentication uses standard HTML form fields to pass the username and password values to the server via a POST request. Depending on the authentication mechanism supported by the web domain, choose the authentication method from the drop-down menu. 

**Basic HTTP authentication**: Basic HTTP authentication requires auth credentials and other optional auth parameters to be validated to access the website. The authentication URL may or may not be the same as the source URL. So, to enable access to a website,  provide the values for the following fields. ![Basic Auth](images/basic-auth.png "Basic Auth")
    <table>
    <tr>
    <td><strong>Field</strong>
    </td>
    <td><strong>Description</strong>
    </td>
    </tr>
    <tr>
    <td><strong>Username or email</strong>
    </td>
    <td>Username or email address, whichever is used to identify the user.
    </td>
    </tr>
    <tr>
    <td><strong>Password</strong>
    </td>
    <td>Password corresponding to the username specified above.
    </td>
    </tr>
    <tr>
    <td><strong>Authorization Field</strong>
    </td>
    <td>Additional field, if any, required by the authentication site for authorization. This is an optional field. You can add one or more auth fields. You can also choose how to send the field and its value in the request like as part of the request header, payload, query string, or as a path parameter. These fields can be used when the authentication URL requires additional fields than the standard ones. For example, if a URL requires an employee ID along with the username and password, add the employee ID to the request using the auth field. 
    </td>
    </tr>
    <tr>
    <td><strong>Authentication URL</strong>
    </td>
    <td>Provide the authentication URL where the identity is to be authenticated. This may or may not be the same as the source URL. 
    </td>
    </tr>
    <tr>
    <td><strong>Test Type</strong>
    </td>
    <td>The type of test to be performed on the response from the authentication URL upon sending the auth request. This field can take one of the following three values:
    <ul>
    <li><strong>Text Presence</strong>: When a specific keyword or text is expected to be returned in the response.
    <li><strong>Redirection to</strong>: When successful authentication is expected to redirect the user to another URL in response.  
    <li><strong>Status Code</strong>: When the response is expected to have a particular value of HTTP status code. 
    </li>
    </ul>
    </td>
    </tr>
    <tr>
    <td><strong>Test value</strong>
    </td>
    <td>Expected response from the authentication URL on sending the auth request. This value depends upon the value of the Test Type. For example, if you set Test Type to <strong><em>Status code</em></strong>, set this to appropriate status code values like 200 (OK), 201(Created), etc. Similarly, if you expect certain keywords or text in the response, set Test Type to <strong><em>Text Presence</em></strong> and provide the expected value in Test Value. 
    </td>
    </tr>
    </table>
    
!!!note
    For increased security, ensure that the websites use a secure communication protocol (HTTPS). 

**Form-based authentication**: In this type of authentication,  auth information is required in the form of fields in a form. On the first successful authentication, the session is maintained, and used for subsequent requests. Enter the values for the following fields to configure form-based authentication.
    <table>
    <tr>
    <td><strong>Field</strong>
    </td>
    <td><strong>Description</strong>
    </td>
    </tr>
    <tr>
    <td><strong>Form Field</strong>
    </td>
    <td>You can create one or more fields in a form to send as auth information. For each field, define 
    <p>
        <strong>Field key</strong>: Identifier of the field
    <p>
        <strong>Field type</strong>: Type of the field 
    <p>
        <strong>Field value</strong>: Value of the field.  
    </td>
    </tr>
    <tr>
    <td><strong>Authorization Field</strong>
    </td>
    <td>Additional field, if any, required by the authentication site for authorization. This is an optional field. You can add one or more auth fields. You can also choose how to send the field and its value in the request like as part of the request header, payload, query string, or as a path parameter. These fields can be used when the authentication URL requires additional fields than the standard ones. For example, if a URL requires an account ID along with the username and password, add the account ID to the request using auth field.
    </td>
    </tr>
    <tr>
    <td><strong>Authentication URL</strong>
    </td>
    <td>Provide the authentication URL where the identity is to be authenticated. This may or may not be the same as the source URL. 
    </td>
    </tr>
    <tr>
    <td><strong>Test Type</strong>
    </td>
    <td>The type of test to be performed on the response from the authentication URL upon sending the auth request. This field can take one of the following three values:
    <ul>
    <li><strong>Text Presence</strong>: When a specific keyword or text is expected to be returned in the response.
    <li><strong>Redirection to</strong>: When successful authentication is expected to redirect the user to another URL in response.  
    <li><strong>Status Code</strong>: When the response is expected to have a particular value of HTTP status code. 
    </li>
    </ul>
    </td>
    </tr>
    <tr>
    <td><strong>Test value</strong>
    </td>
    <td>Expected response from the authentication URL on sending the auth request. This value depends upon the value of the Test Type. For example, if you set Test Type to Status code, set this to appropriate status code values like 200 (for success), etc. 
    </td>
    </tr>
    </table>

## Updating an existing web crawler

You can edit the configuration for any crawl source at any time. This can be useful if the authentication methods have changed, the crawl rules need to be updated, the crawling schedule needs to be modified, etc. 

!!!Note
    We can use all the properties of the web crawler except the crawl source. 

Any changes made to the configuration become effective either when you manually crawl the domain after making the changes or at the next scheduled crawl time.  

To make any changes in the source configuration, click the source title from the list of configured sources and make appropriate changes under the **Configuration** tab. ![Update a web source](images/update-websource.png "Updating a web source")

## View execution status and crawled pages

Crawling a web domain takes time, depending on the crawl options set for the source. For example, if all the URLs are to be crawled and the crawl depth and max URLs are set to maximum, it may take longer than a configuration where the crawl depth is set to 2, and the max URLs are set to 10. When a new web source is added, you can execute the crawling process in the background. Also, the scheduled recrawl of a web domain is automatically run in the background. Go to its **Pages** tab to view the pages crawled in a web source. This tab lists the pages crawled in the last update, along with the user who initiated the crawl and the URL of the crawled pages in three different categories:

1. **Successful**: Pages that were successfully crawled
2. **Failed**: Pages that failed to crawl
3. **Skipped**: Pages that were skipped during crawling
 
This information can be very useful for understanding the data retrieved from the web source.

![Crawled pages](images/crawled-pages_logs.png "crawled pages")

It lists the pages crawled in the last update, the user who initiated the crawl, and the URL of the crawled page. You can also recrawl a given page or delete it using the actions for the page. 
![Page actions](images/pages-actions.png "page actions")

You can also go to the detailed view of a given page and take these actions as shown below. 
![Page Details](images/page-details.png "page details")

Additionally, to view how the page is stored in the application, click on the **View JSON** button. 
![JSON View](images/json-view.png "json view")

To view the execution status and logs, go to the **Executions** tab for the source.
![Execution status](images/execution-status.png "execution status")

It shows the current status of the web crawl, the timestamp of the most recent crawl, and the corresponding logs.

## Recrawling a web source

Recrawling is required to keep up with the changes in the source. You can either schedule recrawling of the website at regular intervals using the scheduler or you can manually perform a recrawl operation as and when required. To manually recrawl a web source, click the **recrawl** action against the name of the source.
![Recrawl Web Source](images/recrawl-webpage.png "recrawl web source")

You can also use the Re-Crawl on the configuration page of the web source. ![Recrawl](images/recrawl-websource-via-config-page.png "recrawl")


You can also recrawl selected pages of the source when you know the specific pages that have been updated. This can avoid the unnecessary crawling of the whole source. Go to the **Pages** tab of the source and click the **Recrawl** link under **Actions** for the page to be crawled.![Recrawl a page](images/page-actions.png "recrawl a page")

Whenever a web page is recrawled, all the existing chunks corresponding to the content are deleted and recreated.

## Deleting an existing web crawler

When a resource is no longer required and you don't want the information to appear in the answers, delete the source from the application. To do so, go to the **Web Crawl page** that lists all the existing sources and click the delete link for the source you want to delete.
![Delete Web Source](images/delete-webpage.png "delete web source")

You can also delete one or more of the crawled pages individually from the source without deleting the source. To do so, go to the **Pages** tab for the selected source and click the **Delete** link under **Actions** for the page to be removed.
![Delete a page](images/delete-pages.png "delete page")

!!!note
    Note that if a specific page is deleted manually as explained above and the web source is recrawled, the page reappears in the crawled pages list unless the crawl options are modified to disable the crawling of this page( like adding it in the exclude list). 

## Web Crawl Errors and Troubleshooting

There can be various scenarios when the application either fails to crawl a web page or successfully crawls the page but doesn't index the web page’s content and, hence, doesn't return the expected results. 

Whenever the application fails to validate the crawl configuration provided and is unable to initiate the crawling process, the details of the error are displayed as shown below.
![Error Reporting](images/validation-error.PNG "Error Reporting")

If the web crawl fails while running in the background, you can see the crawl errors in the status field as shown below. Hovering over the info icon gives you more details about the error.
![Error Reporting](images/webcrawl-list-error-status.PNG "Error Reporting")

Below are some of the most common error scenarios. Refer to [this list](web-crawl-errors.md) for an exact list of errors, potential causes, and the next steps to take. For any specific queries or issues, please [contact us](https://kore.ai/).

### 1. Web Crawl Failure

This issue occurs when the crawler is unable to start or complete the crawl. It often relates to authentication, permissions, or invalid configurations.


<table>
  <tr>
   <td>
    <strong>Potential Causes</strong>
   </td>
   <td>
    <strong>Next Steps</strong>
   </td>
  </tr>
  <tr>
   <td>Insufficient permissions to log in to the web pages.
   </td>
   <td>Ensure you have permission to access and crawl the required pages.
   </td>
  </tr>
  <tr>
   <td>Incorrect credentials were provided in the web crawl configuration.
   </td>
   <td>Verify that the correct credentials are configured.
   </td>
  </tr>
  <tr>
   <td>Invalid or incomplete URL.
   </td>
   <td>Check that the URL is accurate and complete.
   </td>
  </tr>
  <tr>
   <td>The base URL lacks any links to crawl, and the sitemap is missing.
   </td>
   <td>Add webpage URLs to a CSV manually or using an external script, and provide the CSV as a crawl source.
   </td>
  </tr>
  <tr>
   <td>The HTML structure differs from standard webpage patterns.
   </td>
   <td>Validate the web page format and confirm that it can be parsed correctly.
   </td>
  </tr>
  <tr>
   <td>Domain not whitelisted for the AI for Service platform.
   </td>
   <td>Confirm that the domain is whitelisted for the AI for Service platform.
   </td>
  </tr>
</table>



### 2. Successful Web Crawl but Unsuccessful Indexing

This situation arises when the crawler successfully fetches pages but fails to index the content, often due to configuration or rendering limitations.


<table>
  <tr>
   <td><strong>Potential Causes</strong>
   </td>
   <td><strong>Next Steps</strong>
   </td>
  </tr>
  <tr>
   <td>Pages rendered in JavaScript (JS).
   </td>
   <td>Enable the <strong>“Javascript Rendered”</strong> option in the crawl configuration.
   </td>
  </tr>
  <tr>
   <td>Incorrect inclusion/exclusion rules.
   </td>
   <td>Verify that inclusion and exclusion rules are configured correctly.
   </td>
  </tr>
  <tr>
   <td>Incorrect crawl depth or max URL configuration.
   </td>
   <td>Adjust crawl depth and max URL settings.
   </td>
  </tr>
  <tr>
   <td>Pages not discoverable (not linked or listed in the sitemap).
   </td>
   <td>Ensure pages are linked or included in the sitemap for discovery.
   </td>
  </tr>
</table>



### 3. Web Crawl Takes Too Long

This issue occurs when large content volumes delay the crawling process or when JavaScript-rendered pages return no content.

  <tr>
   <td>Potential Causes </td>
   <td>Next Steps  </td>
  </tr>
  <tr>
   <td>JavaScript-rendered pages returning no content.

   </td>
   <td>Enable the “JavaScript Rendered” option to crawl JS pages.

   </td>
  </tr>
  <tr>
   <td>Crawler attempting to process too many pages without content.

   </td>
   <td>Adjust the max URLs setting to limit the number of pages being crawled.

   </td>
  </tr>
