# Exclude Chunks

The Exclude Chunks stage prevents specific chunks from being processed in the Workbench. When chunks meet the defined exclusion condition, the system ignores them and doesn't index them.

Use this stage to filter out unwanted or irrelevant content before it enters the indexing pipeline.

## Exclude Chunk Configuration

Use the following properties to configure this stage.

* Stage Type: Set this field to Exclude Chunk type
* Stage Name: Set a unique name for the stage.
* Condition: Define conditions to selectively exclude chunks from indexing based on specific criteria. Create one or more conditions using chunk fields and operators. Multiple conditions are combined with AND logic (all conditions must be true to exclude).

For example, to exclude all the files with the keyword ‘Confidential’ in the title, add the condition as shown below. 

![Exclude document example](images/exclude-document-example.png "Example")

