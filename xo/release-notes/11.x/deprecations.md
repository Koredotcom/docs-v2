# Deprecation Notice

The latest release of Search AI introduces important updates to improve the performance, stability, and flexibility of the platform. As part of this upgrade, some older components and models are being deprecated to make way for new and improved features.


## Deprecation Timeline

**Automatic Migration Date: November 14, 2025**

<table>
  <tr>
   <td><strong>Deprecated Components</strong>
   </td>
   <td><strong>Change</strong>
   </td>
  </tr>
  <tr>
   <td>Embedding Models:
<ul>

<li>MPNet</li>

<li>LaBSE</li>

<li>E5 </li>

<li>BGE-M3 V1</li>
</ul>
   </td>
   <td>Switch to BGE-M3 V2 or VDR
   </td>
  </tr>
  <tr>
   <td>Old Crawler
   </td>
   <td>Upgrade via banner prompt 
   </td>
  </tr>
  <tr>
   <td>Re ranker models:
<ul>

<li>MS Macro Cross Encoder</li>

<li>Mixbread Large </li>
</ul>
   </td>
   <td>Switch to BGE Re ranker. 
   </td>
  </tr>
</table>



## Key Points

* After the Deprecation timelines, all the existing apps will be automatically updated to use newer components. 


## Why This Upgrade?

This deprecation is essential to:

* Support next-gen capabilities like adaptive re-ranking and advanced semantic search
* Deliver faster, more accurate answers
* Improve platform consistency and reduce legacy dependencies


## What's Changing and How to Upgrade

### <span style="text-decoration:underline;">Embedding Models</span>


**Deprecated Models**

* LaBSE, MPNet, E5, BGE V1

**New Defaults**

* **BGE V2** - For text embeddings (higher accuracy than all legacy models)
* **VDR** - For Image embeddings


**Impact on Existing Applications**

After November 14, your existing applications will automatically switch to BGE V2 and VDR.

**What will Change**

* Search results may rank differently due to improved semantic understanding.
* Higher accuracy in finding relevant content, especially for complex queries.
* Better handling of domain-specific terminology and context.

**Why This Change Benefits You**

* 25-40% improvement in search relevance across diverse domains.
* Better semantic understanding reduces the need for query optimization.
* The unified model approach ensures consistent performance across text types.

**How to Check Your Current Configuration**

* Go to your application>Search AI> Vector Configuration
* Check the embedding model listed.
* For applications already using BGE, to determine the version being used, refer to the application creation date. Apps created before the dates listed below use BGE-M3 V1, and apps created after these dates automatically use BGE V2, if BGE is selected.
    * US region: after July 15, 2025 
    * Japan and Germany: after July 21, 2025
    * EU: after July 30, 2025
    * Australia and UAE:  after July 31, 2025
    * India region: after August 7, 2025

Please note that if you have created an app after the date mentioned above, you don’t need to create a new app to try out BGE V2. 


**How to Test Before Migration**

1. Create a new application with the same source content as your existing app.
2. Your app will be automatically enabled with the BGE V2 model for embeddings.
3. Run identical searches and compare the results side by side. Specifically test the edge cases that are important to your use case.


**How to Upgrade**

Go to the Vector Configuration page of your Search AI app.

* If your app was created *after* the above-mentioned dates and is still using a deprecated model, select BGE M3 or VDR Vector Model from the dropdown, as appropriate.
* For older apps, created *before* the above-mentioned dates, the transition will occur automatically according to the [deprecation and migration timelines](#timelines). 

![Vector Configuration](images/deprecations/vector-model.png "Vector Configuration")



### <span style="text-decoration:underline;">Web Crawler</span>


**Impact on Existing Applications**

If your application is still using the old crawler, we will automatically migrate it to the new crawler and initiate a re-crawl of the configured webpages. All the functionality stays the same between the two crawlers, so we will honor your existing configurations and re-crawl the content using the new crawler. 

**What will Change**

* Crawl times reduced by 80%.
* Better extraction from JavaScript-heavy sites.
* Cleaner content with automatic filtering of navigation, ads, and boilerplate text.
* More successful crawls of complex websites.


**Why This Change Benefits You**

* Faster time-to-value with dramatically reduced crawl times
* Higher success rates on complex, modern websites
* Better content quality with intelligent filtering of irrelevant text
* Reduced resource usage means lower costs and better platform stability

*Note: The new crawler was released on May 31, 2025. New applications automatically use it, while existing applications can upgrade early via banner notification or will be automatically migrated by November 14.*


**How to Upgrade**

If your app is using the old crawler, you’ll see an upgrade banner on the **Websites** page under Content. 

![Crawler](images/deprecations/webpage.png "crawler")


Click on the banner to start the upgrade process. 

![Crawler Update](images/deprecations/webpage1.png "crawler update")


Click on **Switch to New Crawler**. The crawler is automatically updated to the new crawler. 


### <span style="text-decoration:underline;">Re-ranker Models</span>


**Deprecated Models**

* MS Macro Cross Encoder (sentence-transformers/all-MiniLM-L6-v2)
* Mixbread Large (mixedbread-ai/mxbai-rerank-large-v1)

**Supported Model (Default):**

* BGE(BAAI/bge-reranker-v2-m3) - Provides the highest accuracy among all re-ranker options


**Impact on Existing Applications**

If you're currently using re-ranker models, your applications will automatically switch to BGE:

**What will change:**

* Applications using MS Macro Cross Encoder or Mixbread Large will automatically use BGE-M3.
* Improved re-ranking accuracy, especially for complex queries requiring nuanced understanding.
* Consistent performance across different content types and languages.

If you're not using re-ranker models, there is no impact.


**How to Update**

If you are using a re-ranker, to update the re-ranker model, follow the instructions. 

1. Go to your application>Search AI> Advanced Configuration
2. **Set up BGE-M3 re-ranker** in Advanced Configuration → Re-Rank Chunks

![update re-ranker](images/deprecations/re-ranker.png "update re-ranker model")


## Impact on Your Applications


**Existing Applications**

* No action is required after the automatic migration timelines have been met. All migrations will happen automatically.
* Applications will continue functioning without interruption.
* You may notice improved search accuracy and faster crawling after migration.


**New Applications**

* Automatically use BGE V2, VDR, and the new crawler.
* No configuration needed - best practices are applied by default.
* Access to the most accurate and fastest-performing models immediately.


## Testing the New Features

**Before Migration (Recommended):**

1. Create a new application to test the new models and the crawler.
2. Compare search results and performance with your existing application
3. Familiarize yourself with the improved capabilities

**What to Test:**

* Search accuracy with BGE V2 embeddings.
* Crawling speed and reliability with the new crawler.
* Overall application performance.

## Timelines

The existing applications will be automatically migrated in batches by November 14, 2025. Upon completion of the migration, you will receive a pop-up notification confirming the upgrade.

<table>
  <tr>
   <td><strong>Date</strong>
   </td>
   <td><strong>Action</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Now</strong>
   </td>
   <td>Test new features by creating new applications.
   </td>
  </tr>
  <tr>
   <td><strong>November 14, 2025</strong>
   </td>
   <td>Automatic migration of all existing applications.
   </td>
  </tr>
  <tr>
   <td><strong>After November 14, 2025</strong>
   </td>
   <td>Legacy models and old crawlers will no longer be available.
   </td>
  </tr>
</table>



## Frequently Asked Questions


### Can I opt out of this migration?

No, this is a platform-wide upgrade that will apply to all applications to ensure consistent performance and enable new features.


### Will my search results change?

You may notice improvements in search accuracy due to the superior BGE V2 model. Some specific result rankings may change, but overall relevance will improve.


### Can I still use the old crawler?

No, after November 14, 2025, only the new crawler will be available. However, the new crawler provides significant performance and reliability improvements.


### What if my application breaks after migration?

While we expect the migration to be seamless, our support team will be available to assist with any issues that may arise. We recommend testing with a new application beforehand to identify any potential concerns.


### Will I be charged differently for the new models?

Pricing remains the same. You're getting improved performance and accuracy at no additional cost.


## Support

If you have questions or concerns about this migration:

* Create a new application to test the new features
* Contact our support team for technical assistance
* Review this documentation for detailed information about changes

We're excited to provide you with these improvements and look forward to the enhanced performance and capabilities they'll bring to your applications.
