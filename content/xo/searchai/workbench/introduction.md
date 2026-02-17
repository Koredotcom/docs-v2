# Workbench Overview

Workbench is a tool that allows you to process and enhance the ingested content. Workbench transforms data through a series of steps called **Stages**. You can use Workbench to update content, add metadata, clean data to exclude certain pages, etc. By improving the quality of your content, you can enhance the accuracy of answers and thereby, the search experience. For example, if you don't want confidential information to appear in the answers, you can set up an exclude document stage that excludes chunks containing the word ‘Confidential’ in the title or the body of the chunk.

Workbench offers stages to perform different types of operations sequentially. Each stage performs a specific set of data transformations or enrichment before passing the content onto the next stage in Workbench. The output of one stage is given to the next stage as input. For example, if there are three stages, the input to stage three is the cumulative effect of processing in stage one followed by the processing in stage two on the extracted data. 


## Features

* Pipeline Processing: The Workbench employs a series of stages that process the ingested chunks sequentially. Each stage in the pipeline executes specific data transformations.
* Custom Transformation: Each stage in the pipeline allows customization of data transformations as per your specific business needs. 
* Simulation Capabilities: Workbench has an inbuilt simulator that allows you to simulate and test the behavior of each stage individually or the cumulative impact of stages on the chunks.
* Flexible Stage Sequencing: Workbench gives you the flexibility to sequence data operations per your needs. This enables you to design chunk processing efficiently. 


## Workbench Stages

Workbench supports the following stages:

* **Field Mapping**: This stage can map fields in a document to a target field. The mapping is performed on the fields that satisfy the conditions defined for the mapping.
* **Custom Script**: This stage can run a custom script on the input data. 
* **Exclude Document**: This stage can be used to exclude some documents from being indexed. The documents/pages that satisfy the conditions defined in this stage are ignored. 
* **API Stage**: This stage enables you to connect with any third-party service and dynamically update or enrich content chunks.
* **LLM Stage**: This stage allows you to leverage the capabilities of an external LLM to refine, update, or enrich the chunks.

## **Adding a new stage to the Workbench**

Adding a new stage requires defining the type of stage, the condition that selects the data on which the processing is to be done, and the outcome of the stage. 

 To add a new stage, go to the *Enrich* page under *Index* and click *+New Stage*. 


![Add a new stage](images/workbench-home.png "add a new stage")

Select the *stage type*.

![Selecting Stage type](images/select-stage.png "selecting stage type")

Enter the details of the stage and click *Save*.

![Stage Details](images/stage-details.png "Stage Details")

Enter a unique name for the stage, the condition for the stage to select content on which processing is to be done, and the outcome of the stage. 

* You can have *one or more conditions* to select the content. 
* You can define *one or more outcomes* for the stage. 
* By default, a new stage is *enabled* at the time of creation.  
* You can add any number of workbench stages. 


## Ordering the Workbench Stages

The ingested data undergoes processing in the Workbench stages in a sequence. The order of the stages is marked along with the stage name. 

![Ordering Stages](images/stage-order.png "Ordering Stages")

To change the order of execution of the stages, use the draggable dots icon to move and place the stage as required. 
![Ordering Stages](images/change-stage-order.png "Ordering Stages")

## Enabling/Disabling a stage

When a stage is disabled, the stage is skipped during Workbench processing. For example, if there are three workbench stages defined but stage II is temporarily disabled, the data is first processed in stage I, and the output of stage I is directly be used by stage III as input. 

To enable or disable a stage, use the *Stage Status toggle button* on the stage description page. 

![Status of stage](images/stage-status.png "Status of a stage")

## Deleting a stage

Deleting a stage removes it permanently from the Workbench. Use the *Delete* button at the bottom of the page to delete the stage. 

![Delete Stage](images/delete-stage.png "Delete Stage")
