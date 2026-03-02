# Feature Realignment

With the shift from SearchAssist to the next-generation Search AI on the AI for Service platform, we've restructured features to prioritize performance, user experience, and adaptability. The table below compares key capabilities that have been refined during this transition.


<table>
  <tr>
   <td><strong>Feature in SearchAssist</strong>
   </td>
   <td><strong>Status in Search AI</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td>Search Results
   </td>
   <td>Available(via APIs)
   </td>
   <td>Currently, the Search Results can only be accessed via the <a href="../../apis/searchai/advance-search/">search API</a>.  <a href="../../searchai/search-results/">Learn More.</a>
   </td>
  </tr>
  <td>FAQ Support
   </td>
   <td>Available( under the Automation AI Module)
   </td>
   <td><a href="../best-practices-faq-and-answer/">FAQs</a> are now managed via the<a href="../../automation/knowledge-ai/knowledge-ai-introduction/"> Knowledge Module</a>, offering a more flexible and scalable approach for handling common queries without duplicating functionality. This ensures consistent, centralized knowledge management.
   </td>
  </tr>
  <tr>
   <td>Bot Actions
   </td>
   <td>Available 
   </td>
   <td>Search AI and Automation AI can now work seamlessly in AI for Service platform without any additional configuration. Use the <a href="../../searchai/setup-search-ai/#enabling-answers-in-automation-ai">intent identification setting</a> to configure the use of Search AI in dialog flows. A <a href="../../automation/use-cases/dialogs/node-types/working-with-the-searchai-node/"> search node</a> is also available in dialog flows for users to fetch answers, giving users more control within the dialog. 
   </td>
  </tr>
  <tr>
   <td>Rule-based Extraction Model 
   </td>
   <td>Deprecated
   </td>
   <td>More advanced extraction techniques are available in Search AI. <a href="../../searchai/content-extraction/extraction/">Find more details here</a>. 
   </td>
  </tr>
  <tr>
   <td>Hybrid Legacy retrieval strategy
   </td>
   <td>Improved
   </td>
   <td>Hybrid retrieval is still supported, but the final ranking is now calculated using a more advanced algorithm, RRF (Reciprocal Rank Fusion), which improves accuracy. 
   </td>
  </tr>
  <tr>
   <td>Workbench Stages
<br>- Entity Extraction
<br>- Traits Extraction
<br>- Keyword Extraction
<br>- Semantic Meaning
<br>- Snippet Extraction
   </td>
   <td>Deprecated
   </td>
   <td>Search AI utilizes advanced semantic embeddings, eliminating the need for additional processing to enhance search efficiency and accuracy. However, if users have specific needs, they can still leverage <a href="../../searchai/workbench/api-stage/">API </a>or LLM stages to achieve the same outcome and tailor the process to their use case.
   </td>
  </tr>
  <tr>
   <td>Search Profiles
   </td>
   <td>Supported via multi-apps in a workspace
   </td>
   <td>Users can create multiple apps within the same workspace for isolated testing before deployment. 
   </td>
  </tr>
  <tr>
   <td>Search Settings
   <br>- Weights
   <br>- Presentable
  <br> - Prefix Search
   <br>- Search Relevance
   </td>
   <td>Deprecated
   </td>
   <td>Search results and answers now use a common processing pipeline that leverages semantic similarity along with enhanced retrieval methods, removing the need for traditional keyword-based search configurations.
   </td>
  </tr>
  <tr>
   <td>Search Settings
<br>- Small Talk
   </td>
   <td>Available ( via Automation AI)
   </td>
   <td>Small talk can be managed through conversational flows in Automation AI. <a href="../../automation/use-cases/small-talk/">Learn More.</a> 
   </td>
  </tr>
  <tr>
   <td>Results Ranking
   </td>
   <td>Deprecated
   </td>
   <td><a href="../../searchai/business-rules/">Business rules</a> and <a href="../../searchai/rag-agents/">Agentic Rag</a> capabilities in Search AI provide the search developer better control over retrieval. Allowing them to configure behavior for a wide range of scenarios. This eliminates the need for manually configuring rules for every unique user input
   </td>
  </tr>
  <tr>
   <td>Full Search API 
   </td>
   <td>Deprecated
   </td>
   <td>Use the <a href="../../apis/searchai/advance-search/">Advanced Search API</a>, which offers more robust capabilities.
   </td>
  </tr>
  <tr>
   <td>Live Search API
   </td>
   <td>Deprecated
   </td>
   <td>Use the <a href="../../apis/searchai/advance-search/">Advanced Search API</a> instead for near real-time results.
   </td>
  </tr>
  <tr>
   <td>Auto Suggestions API
   </td>
   <td>Deprecated
   </td>
   <td>Auto Suggestions API has been deprecated as Search AI's semantic understanding directly interprets natural language queries, eliminating the need for traditional autocomplete functionality.
   </td>
  </tr>
  <tr>
   <td>Train API
   </td>
   <td>Not required
   </td>
   <td>Search AI automatically re-trains when new content is detected, both when added via the application and APIs across all data sources.
   </td>
  </tr>
  <tr>
   <td>Index Fields API
   </td>
   <td>Coming Soon
   </td>
   <td>To maintain consistency across fields in content extracted from different sources, a unified schema has been designed to address all the requirements. Adding or removing fields from the schema is not allowed. However, this schema offers 50 custom fields that can be used to meet specific requirements, such as metadata.
   
   This API will allow you to update the names and descriptions of fields, enabling you to align the field names with those used in your system.
   </td>
  </tr>
  <tr>
   <td>History API
   </td>
   <td>Not required
   </td>
   <td>Can be retrieved using <a href="../../apis/automation/conversation-history/">the Platform APIs. </a>
   </td>
  </tr>
  <tr>
   <td>Fetch Debug Information API
   </td>
   <td>Not required
   </td>
   <td>Debug information is available as part of every API. Hence, a separate api is not required. Use the <em>includeChunksinResponse </em>parameter in the request to get the debug information. 
   </td>
  </tr>
  <tr>
   <td>Index Creation 
   </td>
   <td>Not required
   </td>
   <td>Users can create separate apps for performance testing. 
   </td>
  </tr>
  <tr>
   <td>Add/Update/Delete Index Fields through UI
   </td>
   <td>Available 
   </td>
   <td>To maintain consistency across fields in content extracted from different sources, a unified schema has been designed to address all the requirements. The unified schema includes a set of fixed fields and supports up to 50 custom fields, which can be added or deleted as needed and can be used to store any metadata fields.
   </td>
  </tr>
  <tr>
   <td>Traits
   </td>
   <td>Not required
   </td>
   <td>Search AI utilizes semantic similarity along with enhanced retrieval methods, to capture the relationships between various terms based on their context. This eliminates the need to rely on traditional search relevance tools.
   </td>
  </tr>
  <tr>
   <td>Search Interface features
   </td>
   <td>Deprecated
   </td>
   <td>Custom interfaces can be built using <a href="../../apis/searchai/api-list/">Search AI’s public APIs</a>. Developers can build their own interface and directly invoke the Advanced Search API to fetch and display results. By default, the AI for Service Platform offers agent experiences available across<a href="../../channels/adding-channels-to-your-bot/"> 40+ channels.</a> 
   </td>
  </tr>
  <tr>
   <td>Analytics
   </td>
   <td>Available 
   </td>
   <td><a href="../../analytics/searchai/answer-insights/">Unified analytics</a> for search and answers are available under the analytics page in  Search AI. User engagement metrics and the Dashboard can be found as part of<a href="../../analytics/introduction/"> AI for Service analytics</a>.
   </td>
  </tr>
</table>


Additionally, features such as app importing and exporting and email notification support are under development and will soon be available. Contact us to learn more about the roadmap and release plans for Search AI. 
