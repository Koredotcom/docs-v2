# Text to Image Node: Turn Text into Stunning Visuals

The **Text to Image** node is a powerful AI component that enables you to generate images dynamically within your automation flows using natural language input. By providing descriptive text and keywords, you can define what the image should include or exclude, and produce multiple high-quality variants in a single run. 
l̥
Configuration options allow you to specify input prompts and control output formats, making it easy to integrate image generation into data-driven workflows. This multimodal capability enables developers to seamlessly integrate text and visual elements across various use cases.

## Key Capabilities

* **Text-to-Image Conversion**: Converts descriptive text prompts into images using advanced AI models. 

* **Prompt Customization**

    * **Positive Prompt**: Define what the image should include (style, elements, setting, etc.). 

    * **Negative Prompt**: Specify what to exclude to avoid unwanted elements. 

* **Aspect Ratio Control**: Customize the image dimensions up to a maximum of **2048 x 2048** pixels (GPU-dependent). 

* **Step-based Image Refinement**: Fine-tune image quality with adjustable step counts—up to **30 steps** recommended for balancing detail and performance. 

* **Batch Generation**: Generate up to **5 image variants** in a single run (e.g., color and black-and-white versions for different audiences). 

* **High-Quality Output Format**: Images are generated in **PNG format** and returned as **URLs** for seamless integration into workflows. 

* Supports multiple model versions for the following:

    **Stable Diffusion Model**

    * stabilityai/stable-diffusion-xl-base-1.0 

    * stabilityai/stable-diffusion-2-1 

    * Stable-diffusion-v1-5

    **OpenAI Models**

    * DALL·E 2 
    * DALL·E 3

## Common Use Cases

* **Marketing Asset Generation**:  Automatically create banners, ads, and promotional visuals from campaign briefs or product descriptions. 

* **Content Illustration**: Create contextual images for blogs, newsletters, or articles tailored to a specific topic or tone. 

* **Visual Prototyping**: Rapidly generate visual concepts for UI mockups, storyboards, or creative pitches. 

* **Variant Testing**: Produce multiple versions of the same image for A/B testing in marketing or design workflows.

## Example Use Case

A creative marketing team can use the system to instantly generate images for emails, campaigns, and other promotional content. With built-in content moderation, the images meet quality and relevance standards, minimizing the need for manual review and removing the dependency on licensed stock images or external generators. Instead of appending visuals later or integrating them via separate API calls, using this node directly within the workflow is faster and more efficient.

## How It Works

The **Text to Image** node fits seamlessly into your tool flows, accepting descriptive inputs from previous nodes and returning AI-generated image URLs as outputs. You can define prompts directly within the node, select the processing model, and specify what the image should include or exclude, along with aspect ratio, steps, and batch count. The node supports both static and dynamic inputs via context variables, enabling automated image generation across a wide range of use cases, from marketing creatives to content illustration.

<img src="../images/how-text-to-image-works.png" alt="how text to image works" title="how text to image works" style="border: 1px solid gray; zoom:75%;">

In this document, you will learn how to add the node to your flows, configure it with descriptive prompts and generation settings, manage inputs and outputs, and test the generated image results.

## Node Configuration Information

### Exported Image Formats

The node generates the image output in the *PNG* format only.

### Inputs

The key node inputs include:

1. A detailed instruction set on what the image should contain, including the style, attributes, elements, location, background, lighting, look and feel, etc., in the **Positive Prompt**. For example, “*Christmas greeting with Santa giving presents in the North Pole*.”
2. Instructions on what the image should exclude in the **Negative Prompt**. For example, add the words “*Reindeers*”, “black color”, or “*Santa running*” to avoid them in the image.
3. The **Aspect Ratio**, including the width and height of the image. The **maximum limit is  2048 x 2048**, depending on the GPU specifications.
4. The number of **Steps** to improve the image generation. Each step includes enhancements or improvements that align the output as closely as possible with the positive prompt instructions. This ensures that the generated image meets expectations by refining details, adjusting parameters, and optimizing quality while maintaining relevance to the intended prompt.

   <div class="admonition note">
   <p class="admonition-title">Important</p>
   <p>Image generation depends on the number of steps in the process. While more steps add details, they also increase generation time and may cause the model to hallucinate, leading to deviations from the prompt instructions. To balance quality and efficiency, a maximum of 25-30 steps is recommended, minimizing unnecessary details (noise) and hallucinations in the final output.</p>
   </div>

<ol start="5"><li><b>Batch Count</b> to define the limit on the number of image versions/variants the node generates sequentially. A <b>maximum of 5 images</b> can be generated. For example, you can create the color and black-and-white versions of the same image sequentially in a batch and use each version for different purposes. For example, generate a Christmas greeting for employees and another for customers.</li></ol>

### Output

The generated image output is available only in PNG format. Once created, the image is converted into a URL.

**Important Considerations**

* The node generates high-quality images based on the provided prompts and configurations.
* The generated images are available forever and do not have an expiry period.
* The model uses an input scanner in the node to detect and filter banned words or topics. If a banned topic is included in the input prompts, an error is generated and displayed in the debug window when the flow is executed.
* Performance tracking is available under **Settings** -> **Model Analytics Dashboard** -> **Open-source Models** tab. [Learn more](../../../../settings/monitoring/analytics/model-analytics-dashboard.md). 

The metrics include:

* **Number of images generated** since the supported models are charged based on this count.
* **Input tokens** since the Stable Diffusion models usually support a small number of tokens, and tracking the counts is necessary. [Learn more](../../../../settings/monitoring/analytics/model-analytics-dashboard.md#tokens){:target="_blank"}.


## Add and Configure a Text to Image Node

<div class="admonition note">
<p class="admonition-title">Note</p>
<p>Before proceeding, you must add an external LLM to your account.</p>
</div>


### Step 1: Open Flow Builder

* Log into the the Platform and select **Tools** under modules.
* Select your tool and select **Go to Flow**.

### Step 2: Add the Node

* Click the "**+**" icon for **Text to Image** under **AI** in the **Assets** panel. Alternatively, drag the node from the panel onto the canvas. You can also click **AI** in the pop-up menu and click **Text to Image**.
  <img src="../images/text-to-image-add-node.png" alt="add node" title="add node" style="border: 1px solid gray; zoom:75%;">

### Step 3: Configure the Node

* Click the added node to open its properties dialog box. The **General Settings** for the node are displayed. 

* Enter or select the following **General Settings**:

    * **Node Name**: Enter an appropriate name for the node. For example, “*Christmasgreeting*.”
    * **Select Model**: Select the required variant of the Stable Diffusion model.
    * **Positive Prompt**: Enter the keywords for what needs to be generated in the image or what it should include. The model will generate along the lines of the details mentioned here and not consider the negative hints.
    * **Negative Prompt**: Enter the keywords for the elements the image should exclude.

     <div class="admonition note">
     <p class="admonition-title">Important</p>
      <p>User prompts define specific questions or requests for the model to follow and generate results. You can use input variables you add in <a href="#step-1-optional-add-input-variables">this</a> step to add dynamic inputs to the prompt in the recommended syntax:<code>{{context.variable_name}}</code> before you run and test the flow. <a href="#step-3-run-the-flow">Learn more</a>.</p></div>

    * **Aspect Ratio**: Define the dimensions of the image in pixels for width and height.
    * **Steps**: Add the number of times the model will go back to the image and add more details/enhancements to get it as close to the prompt as possible. 25-30 steps are recommended for any image generation. Increasing the steps might add unwanted elements or model hallucinations and increase the time of generation.
    * **Batch Count**: The number of images to be generated sequentially.

        <img src="../images/properties-panel-text-to-image.png" alt="properties panel" title="properties panel" style="border: 1px solid gray; zoom:75%;">

       <div class="admonition warning" bgcolor="blue">
       <p class="admonition-title">Standard Error</p>
       <p>When the Model isn't selected, the prompt details aren't provided, or both, the error message “<i>Proper data needs to be provided in the LLM node</i>” is displayed.</p></div>


* Click the <b>Connections</b> icon and select the <b>Go to Node</b> for success and failure conditions.
  <img src="../images/connection-text-to-image.png" alt="click connections" title="click connections" style="border: 1px solid gray; zoom:75%;">

    * <b>On Success</b> -> <b>Go to Node</b>: After the current node is successfully executed, go to a selected node in the flow to execute next, such as an AI node, Function node, Condition node, API node, or End node.
    * <b>On Failure</b> -> <b>Go to Node</b>: If the execution of the current node fails, go to the End node to display any custom error message from the <b>Text to Image</b> node.

    For the configured inputs, the following image is generated.
    
     <img src="../images/node-output-image.png" alt="output image" title="output image" style="border: 1px solid gray; zoom:75%;">

* Finally, <a href="#step-3-run-the-flow">run the flow</a> and fix any issues found.

## Test the Flow for the Node

After adding and configuring the node as mentioned [here](./text-to-image-node.md#add-and-configure-a-text-to-image-node){:target="_blank"}, follow the steps below to test the flow.

<div class="admonition note">
<p class="admonition-title">Dynamic Prompt Inputs</p>
<p>Before you <a href="#step-3-run-the-flow">run the flow</a>, provide clear instructions for the model to follow using the <b>input variable(s)</b> you add in the following step with the help of <b>context variables</b>. Context variables add dynamic values to the prompt instructions that the model will follow. The recommended syntax is: <code>{{context.variable_name}}</code>. For example, you can store the generated image URL in a variable named “<i>Imaggenerated</i>” and pass it on in the prompt when you mention <q><i>Generate an image based on the below description</i>: <code>{{context.steps.Start.Imaggenerated}}</code></q>, as shown in the image below.</p></div>

<img src="../images/dynamic-prompt-input.png" alt="dynamic prompt input" title="dynamic prompt input" style="border: 1px solid gray; zoom:75%;"> 

### Step 1: (Optional) Add Input Variable(s)

* Click the **Input** tab of the **Start** node, and click **Add Input Variable** to configure the input for the flow’s test run. [Learn more](../perform-other-actions-on-the-flow-builder/manage-input-and-output.md#adding-input-variables){:target="_blank"}.

     <img src="../images/add-input-variable-text-to-image.png" alt="add input variable" title="add input variable" style="border: 1px solid gray; zoom:75%;">

* Select <b><i>Text</i></b> for the <b>Type</b> field in the <b>Enter input variable window</b> to define a text input variable.
* Click <b>Save</b>. <a href="../text-to-text-node/#access-the-ai-nodes-output">Learn more</a> about accessing the node’s output.
   <img src="../images/select-text-for-input.png" alt="click add output variable" title="click add output variable" style="border: 1px solid gray; zoom:75%;"/>

Add all the required input variables to run the flow in the **Input** section of the **Start** node.


### Step 2: Add Output Variable(s)

* Click the **Output** tab for the **Start** node.
* Click **Add Output Variable**.

    <img src="../images/click-add-output-variable.png" alt="click add output variable" title="click add output variable" style="border: 1px solid gray; zoom:75%;">

* Enter the value for <b>Name (key)</b> and select <b><i>String</i></b> for <b>Type</b> to generate the image URL.
* Click <b>Save</b>. <a href="../text-to-text-node/#access-the-ai-nodes-output">Learn more</a> about accessing the node’s output.
     
   <img src="../images/output-var.png" alt="save output variable" title="save output variable" style="border: 1px solid gray; zoom:75%;">

### Step 3: Run the Flow

To run and test the flow, follow the steps below:

* Click the **Run Flow** button at the top-right corner of the flow builder.
   <img src="../images/run-the-flow-text-to-image.png" alt="run the flow" title="run the flow" style="border: 1px solid gray; zoom:75%;">
    
* (Optional) Add the value for **Input Variable** if you have configured it to test the flow. Otherwise, go directly to the next step.
* Click **Generate Output**.

     <img src="../images/generate-output-text-to-image.png" alt="generate output" title="generate output" style="border: 1px solid gray; zoom:75%;">

The **Debug** window generates the flow log and results, as shown below. [Learn more](../types-of-nodes/text-to-image-node.md#step-3-run-the-flow){:target="_blank"} about running the tool flow.

<img src="../images/debug-window-text-to-image.png" alt="debug window" title="debug window" style="border: 1px solid gray; zoom:75%;">
