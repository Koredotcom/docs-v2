# ETL Tool 

ETL Stands for Extract, Transform, and Load. Search AI offers an ETL tool that allows the transformation of content after its extraction or ingestion and before it is vectorized. This feature enhances data quality by enabling users to fix errors and enrich data while preserving essential relationships and context between sections of the original document during enrichment.

Extraction followed by transformation is a two-step process. 

## Step 1: Extract

Define strategies to extract different types of content from the source. Depending upon the source and the format of the input content, use appropriate extraction strategies to extract content from input in the most suitable format. Refer to [this](extraction.md) to learn more about extraction strategies. 

## Step 2: Transform

Using this step, you can transform the extracted documents and prepare them for the index. The transformation of the document is performed using stages. The document is processed sequentially through the stages of transformation. The output of one stage is the input of the next stage. The final document produced at the end of this process is used to generate vectors.

Currently, there are two types of transformations that can be performed on a document. We will continue to add more options to the list in future releases.

1. Field Mapping: This stage is used to map fields in a document to other new/existing fields. 
2. Custom Script: This stage is used to update the document using a custom painless script. 

Note that currently, we support transformation on the content extracted via text extraction model only. 

Learn more about content transformation [here](transformation.md). 
