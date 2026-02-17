[ :octicons-arrow-left-24: Back to NLP Topics](../../nlp-topics.md)

# Generate a Knowledge Graph

The performance of the  Knowledge Graph is based on its organization which is influenced by the key domain terms, and the established hierarchy.

Building the FAQ is easy when you start fresh with the Knowledge Graph, but in case you have a list of questions-answer pairs, converting them into a fully-functional Knowledge Graph is tedious task.

The XO Platform provides a Knowledge Graph Generator that automatically extracts terms from FAQ, defines the hierarchy between these terms, and also associates the FAQ to the right terms. You can then import the output file from the generator to your AI Agent’s Knowledge Graph without worrying about the hierarchy. 

You can also edit the hierarchy after import to suit your needs. It is highly recommended to review and make changes as the Knowledge Graph generated is only a suggestion.

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>The Knowledge Graph Generator is available from v7.1 of the Platform.</p>
</div>

The Kore.ai Knowledge Graph Generator is hosted on the Kore GitHub repository. This document provides the steps needed to install and use the generator.

## Prerequisites

* **Python 3.6**: The Knowledge Graph Generator requires python v3.6. You can download it <a href="https://www.python.org/downloads/" target="_blank">here</a>.
* **Virtual Environment**: It is advised to use a virtual environment, instead of installing requirements in the system directly. Follow the steps mentioned <a href="https://docs.python.org/3/tutorial/venv.html#creating-virtual-environments" target="_blank">here</a> to set up the environment.
* For Windows Developers:
    * **Microsoft Visual C++** Build Tools – tested with v14.0.
    * Windows 10 users must install **Windows 10 SDK**. You can download it <a href="https://developer.microsoft.com/en-us/windows/downloads/windows-10-sdk/" target="_blank">here</a>.
    * The operating system must be up to date for a seamless installation of requirements. Some libraries like SpiCy (internal dependency) need specific DLLs that are available in the latest updates.
* A file containing the FAQs in _JSON_ or _CSV_ format. You can obtain this file in two ways:
    * Export the Knowledge Graph from XO Platform. [Learn more](import-and-export-knowledge-graph.md).
    * Build the Knowledge Graph in a tabular form with questions in the first column and answers in the corresponding second column and save the file in _CSV_ format.

## Configuration

1. Download the Knowledge Graph Generator from <a href="https://github.com/Koredotcom/KnowledgeGraphGenerator" target="_blank">Kore.ai GitHub</a>.
2. Extract the zip file into a folder and open the command prompt from that generator folder.
3. Activate the virtual environment: Execute the following command replacing the placeholders with actual values to activate the virtual environment:
    1. For Windows: 
`<virtual_environments_folder_location>/>virtualenv_name>/Scripts/activate`
    2. For Unix/macOS: 
`<virtual_environments_folder_location>/<virtualenv_name>/bin/activate`.
4. Once the virtual environment is activated, you can see the virtual environment name at the start of every command in the console.
5. Install the requirements: Run the following command from your project root directory (KnowledgeGraphGenerator) in the virtual environment to install the requirements 
`pip install -r requirements.txt 
`You can verify the installation by running the following command and ensuring that the list contains all the components mentioned in the _requirement.txt_ file. 
`pip list`
6. Download spaCy English model: Run the following command to download spaCy, the NLP model. 
`python -m spacy download en`

## Execution

Now that you have the prerequisites and have configured the Knowledge Graph Generator, let us see how to generate the Knowledge Graph.

The following command executes the generator:

```{python}
python KnowledgeGraphGenerator.py --file_path <INPUT_FILE_PATH> --type <INPUT_FILE_TYPE> --language <LANGUAGE_CODE> --v <true/false>
```

Let us look at each of the options:

<table border="1.5">
<tr bgcolor="#ECECEC">
   <td><strong>OPTION</strong>
   </td>
   <td><strong>DESCRIPTION</strong>
   </td>
   <td><strong>MANDATORY/OPTIONAL</strong>
   </td>
   <td><strong>DEFAULT VALUE</strong>
   </td>
  </tr>
  <tr>
   <td>Input File Path
   </td>
   <td>Input file name along with the location
   </td>
   <td>Mandatory
   </td>
   <td>
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Input File Type
   </td>
   <td>The type of input file:
<ul>

<li><em>json_export</em> – for files exported from Kore.ai App Builder using JSON Export option

<li><em>csv_export</em> – for files exported from Kore.ai App Builder using CSV Export option

<li><em>CSV</em> – for files with questions in the first column and answers in the respective second column
</li>
</ul>
   </td>
   <td>Mandatory
   </td>
   <td>
   </td>
  </tr>
  <tr>
   <td>Language Code
   </td>
   <td>The language code for the language in which input data exist
   </td>
   <td>Optional
   </td>
   <td>en (English)
   </td>
  </tr>
  <tr bgcolor="#FAFAFA">
   <td>Verbose Mode
   </td>
   <td>Running a command in verbose mode to see intermediate progress steps
   </td>
   <td>Optional
   </td>
   <td>false
   </td>
  </tr>
</table>

## Output

The output JSON file is generated and placed under the project root directory with the name `ao_output.json`

The output JSON file can directly be imported to Knowledge Graph in the app. 

See [steps to import Knowledge Graph](import-and-export-knowledge-graph.md).

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>When you try to import the Knowledge Graph it replaces the existing one. We recommend you take a back up before importing.</p>
</div>


