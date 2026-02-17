# Web Crawl Errors


<table>
  <tr>
   <td>Error Message
   </td>
   <td>Resolution
   </td>
  </tr>
  <tr>
   <td>Invalid URL syntax
   </td>
   <td>
<ul>

<li>Verify the scheme of the URL. Ensure that the URL starts with a valid scheme like "http://" or "https://”. 

<li>Check for typographical errors in the URL.

<li>Ensure that the URL points to an accessible destination.

<li>Clear your browser cache

<li>Disable any browser extensions that might be interfering with the request.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>URL unreachable
   </td>
   <td>
<ul>

<li>Verify the URL for any typographical errors. 

<li>Ensure that the URL is complete and absolute.

<li>Check if the URL is accessible.

<li>Check for any network connectivity issues.

<li>Ensure that the IP address of the SearchAI application is whitelisted.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>No links found to crawl after adhering to Robots.txt directives.
   </td>
   <td>The Robots.txt file in a website instructs the crawler about the pages that can be accessed. This error is shown when the crawler is not able to find any page that adheres to both the crawl configuration and the robots.txt directives. You can uncheck <strong>Respect Robots.txt directives</strong> in which case the crawler will ignore the contents in the file and crawl all the URLs that are reachable. Alternatively, contact the website administrator.
   </td>
  </tr>
  <tr>
   <td>Web crawling failed due to timeout.
   </td>
   <td>
<ul>

<li>Check for network connectivity issues

<li>Ensure your requests are not overwhelming the server. 
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>No suitable XMLs were found.
   </td>
   <td>Verify that the URLs listed in the XML sitemap point to valid pages on your website and that there are no typographical errors in the URLs.
   </td>
  </tr>
  <tr>
   <td>Improper column names in the CSV file.
   </td>
   <td>Please check the column names of CSV uploaded.
   </td>
  </tr>
  <tr>
   <td>Authorization or Authentication Issues
   </td>
   <td>
<ul>

<li>Ensure the URL is correct.

<li>Ensure that the browser's cache/cookies are cleared. 

<li>Verify the authentication credentials and ensure they have the necessary permissions to access the requested resource. 

<li>Verify if your IP address is whitelisted by the website. 
Contact the website's support team or your administrator for further assistance.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Server Unavailable
   </td>
   <td>If you encounter this error, the server is likely overwhelmed with requests or undergoing maintenance. 
<ul>

<li>Wait for some time and try accessing the website again later.

<li>Check the website or service for any scheduled maintenance.

<p>
Contact the website's support team or your administrator for further assistance.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Too Many Redirects
   </td>
   <td>Some websites require specific headers or cookies to proceed past certain redirects. 
<ul>

<li>Ensure that your requests include necessary headers and cookies that mimic a real browser's behavior. 

<li>Enable JS rendered crawling option.
</li>
</ul>
   </td>
  </tr>
  <tr>
   <td>Request Handling Error
   </td>
   <td>Contact SearchAI team for this. 
   </td>
  </tr>
</table>

