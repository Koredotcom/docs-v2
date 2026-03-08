# Search Suggestion Events (Search / Assist )

The **Search** tab offers suggestions for the Agent's query. The search results feature various data presentations, such as articles, FAQs, and snippets. This diversity helps the agent find relevant information quickly and efficiently and allows the agent to quickly find and select the most appropriate response to send to the user.

There are two types of search suggestions–Search AI results and FAQ.

## Search events

### MENU_TEMPLATE

This event lists enabled suggestions from the configuration. Click the **Run** button to initiate dialog execution in the assist tab.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'MENU_TEMPLATE'){
       	// Customize the menu template if required.
   	   }
});
```

### SEARCH_INPUT 

This event customizes the search text in the Input box and typeahead.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   		if(payload.event === 'SEARCH_INPUT'){
       	//customize html if required
   		}
});
```

### ARTICLE_TEMPLATE 

This event customizes the search result for the Agent query where the article contains the array of object data.

```

aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'ARTICLE_TEMPLATE'){
       	//customize article suggestion template html in assist tab if required

   	}
});

aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SEARCH_ARTICLE_TEMPLATE'
'){
       	//customize search article suggestion template html if required

   	}
});
```

:   !!! tip

        An article is a web page or a specific piece of content that provides detailed information of a particular topic. When users enter search queries, it retrieves relevant articles from various websites. These articles are then displayed in the search results, often with a title, URL, and a brief snippet or description that summarizes the content.

### SNIPPET_TEMPLATE 

This event customizes the search result containing snippets.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SNIPPET_TEMPLATE'){
       	//customize snippet suggestion template html in assist tab if required

   	}
});

aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SEARCH_SNIPPET_TEMPLATE'){
       	//customize search snippet suggestion template html if required

   	}
});
```

:   !!! tip

        A snippet is a brief description or summary of a web page that appears in the search engine results, usually providing a glimpse of the content on the page and also a short excerpt from a larger document or conversation. Snippets are often used to provide a quick reference or highlight key information. Kore uses the following types of snippets to display content:

* Active_citation_snippet or citation_snippet
* Paragraph_snippet
* List_element_snippet
* Headings_snippet

!!! note

    Every snippet contains content. However, content varies based on snippet type.

### FILE_TEMPLATE 

This event customizes the search results that include files. 

Within the event:

- Summary of the file's content is provided to give users a quick overview.
- It contains hyperlinks that enable the file to be opened in a new tab.

This feature ensures that users can easily access and review the file without disrupting their current workflow. By offering both a summary and a link, the event enhances the usability and efficiency of the search results.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'FILE_TEMPLATE'){
       	//customize file suggestion template html in assist tab if required

   	}
});

aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SEARCH_FILE_TEMPLATE'){
       	//customize search filesuggestion template html if required
   	}
});
```

### FAQ_TEMPLATE 

This event provides FAQ response results (questions with answers) for Agent queries.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'FAQ_TEMPLATE'){
       	//customize faq suggestion template html in assist tab if required
   	}
});

aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SEARCH_FAQ_TEMPLATE'){
       	//customize search faq suggestion template html if required
   	}
});
```

### DIALOG_TEMPLATE 

This event provides Dialog suggestions for Agent queries/ User queries. Select the **run** button to initiate execution on assist tab.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'DIALOG_TEMPLATE'){
       	//customize dialog html in assist tab if required
   	}
});

aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   	if(payload.event === 'SEARCH_DIALOG_TEMPLATE'){
       	//customize Search dialog html if required
   	}
});
```

## ASSIST TAB SECTION

### ASSIST_EMPTY_TEMPLATE

Displays an empty message when the assist tab holds no data and welcome messages.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => { 
           if (payload.event === 'ASSIST_EMPTY_TEMPLATE') {
 // Customize assist empty template if required.
     }
});
```

### ASSIST_HEADER_LEFT_SECTION

Displays the dialog and step name during dialog execution.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'ASSIST_HEADER_LEFT_SECTION'){
       	// Customize left section of the assist header if required.
   	   }
});
```

### ASSIST_HEADER_RIGHT_SECTION

Displays buttons for **List view** and **Terminate**.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'ASSIST_HEADER_RIGHT_SECTION'){
       	// Customize right section of the assist header if required.
   	   }
});
```

### WELCOME_MSG_TEMPLATE

Displays all suggestion types (dialogs, articles, files, FAQs, and snippets) that were triggered by user responses.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'WELCOME_MSG_TEMPLATE'){
       	// Customize welcome message template if required.
   	   }
});
```

### WELCOME_MSG_TEMPLATE

Displays welcome messages on widget landing to greet the customer.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'WELCOME_MSG_TEMPLATE'){
       	// Customize welcome message template if required.
   	   }
});
```

### ASSIST_SUGGESTIONS_TEMPLATE

Displays all suggestion types (dialogs, articles, files, FAQs, and snippets) triggered by user responses.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'ASSIST_SUGGESTIONS_TEMPLATE'){
       	// Customize assist suggestions template if required.
   	   }
});
```

### FAQ_EXPAND_CLOSE_TEMPLATE (SEARCH and ASSIST SUGGESTIONS)

Displays only the top answer initially. Expand to extract more answers by selecting the **Expand** button and select the **Close** button to collapse answers.

```
aaWindowInstance.on('BEFORE_VIEW_INIT', (html, payload) => {
   if(payload.event === 'FAQ_EXPAND_CLOSE_TEMPLATE'){
       	// Customize FAQ expand/close template if required.
   	   }
});
```

