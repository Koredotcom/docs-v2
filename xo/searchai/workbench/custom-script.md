# Custom Script

The Custom Script stage allows you to apply custom logic within the Workbench, using JavaScript, to transform or enrich data based on specific business requirements. This provides flexibility beyond standard processing stages.

For example, you can use a custom script to prepend a chunk title to all chunks extracted from a specific file or to derive additional metadata during processing.


## Custom Script Configuration

Use the following properties to configure this stage. 

* Stage Type: Set this field to Custom Script
* Stage Name: Set a unique name for the stage.
* Outcome: Write the custom Javascript to filter and enrich chunks. Use this script to add custom fields, modify content, or conditionally process chunks based on your specific requirements.

Example1: Filtering of content - process only chunks from uploaded files.

```javascript
if(context.sys_content_type.equals("file"))
{ 
  return true;
}
else 
{
  return false;
}
```

Example 2: Split the content as sentences.

```javascript
context.cfs2 = context.chunkText.split( /[.!?]+[ ]/);
```

Example 3: Remove unnecessary content from web pages.

```javascript
if (context.chunkText) {
    // Remove header/footer page numbers (e.g., "Page 5 of 20")
    context.chunkText = context.chunkText.replace(/Page\s+\d+\s+of\s+\d+/gi, '');
    
    //Remove social sharing text, if any.
    context.chunkText = context.chunkText.split(/Share\s*Twitter/i)[0].trim();
}
```

