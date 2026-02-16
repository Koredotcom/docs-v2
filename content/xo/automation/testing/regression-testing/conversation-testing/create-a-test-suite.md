# Create a Test Suite

A Test Suite contains a collection of test cases grouped to simulate a specific conversation between the user and the app and used anytime for test execution. You can know the execution status and determine and analyze the results in a test suite.

In Conversation testing, you can create the test suites in the following two different ways:

* [Record Conversation to Create a Test Suite](#record-conversation-to-create-a-test-suite)
* [Upload File to Create a Test Suite](#upload-file-to-create-a-test-suite)


## Record Conversation to Create a Test Suite

The option to record the test suite captures the metadata in the background which helps to test the flow sequence, transitions, and track the test coverage. The following step-by-step process explains how to record a conversation as a test suite, and validate and create the test cases.


### Record Test Suite

1. On the Conversation Testing page, click **New Test Suite**.
2. Click the **Record** option to start recording the new test.  
<img src="../images/ct-create-test-suite-record1.png" alt="Start recording New Test" title="Start recording New Test" style="border: 1px solid gray;zoom:50%;"/>

3. In the pop-up displayed, Choose whether to start the recording with the On Connect event included.  
  
    !!! Note
    
        "On-Connect" is the message you receive as soon as you open the chat window, even before you enter any message. The option is displayed for VAs with an On-Connect message. If you select "No", the On-connect message does not get added as a test case. If you select "Yes", then the On-connect message is created as a separate test case.     

4. Define the Pre-processor Script to control preconditions during conversation testing. [Learn more](create-a-test-suite.md#pre-processor-script). 

5. Click **Proceed** to start the test recording.  
<img src="../images/ct-create-test-suite-record2-window.png" alt="Recording Options" title="Recording Options" style="border: 1px solid gray;zoom:50%;"/>   

6. The Chat window is displayed. The chat transcript is recorded and the recording status is displayed at the top. You can click **Stop** to stop the recording.  
<img src="../images/ct-create-test-suite-record-chat.png" alt="Chat Recording Status" title="Chat Recording Status" style="border: 1px solid gray;zoom:50%;"/>  
  
    !!! Note

        If there is an error while recording due to any limitation set on the platform, it is displayed on the page.


#### Pre-processor Script

The Pre-Processor Script allows users to manipulate context data and inject custom data before and during test execution. Context data is preset during conversation recording, which can sometimes lead to unintended workflow paths during validation and cause false negatives. Additionally, users may need to test scenarios requiring custom data from external systems.
To address these needs, users can run custom scripts at the recording, validation, and execution phases of conversation testing, enabling them to:

* **Modify Existing Context Data**: Adjust or reset context data to ensure intended workflow paths.
* **Set Custom Context Data**: Define new context data for specific scenarios, enhancing test accuracy and coverage.
* **Inject External Custom Data**: Simulate inputs from external systems for real-world test cases.

Here are the key session variables that can be set:

* EnterpriseContext
* BotContext
* UserContext
* UserSession
* BotUserSession
* Opts

**Use Case: Managing New vs. Returning Users in Conversation Testing**

In conversation testing, the **Pre-Processor Script** is crucial for handling scenarios where user status (new vs. returning) affects session behavior, leading to potential validation issues.

When recording a test case, the user is treated as a **new user** with no session data. During validation, however, the user may be recognized as a **returning user**, introducing session variables that change the conversation flow and potentially cause validation failures.

The Pre-Processor Script allows users to:

1. **Reset or Set Session Variables**: Adjust session data as needed to ensure consistent **New User** or **Returning User** states.
2. **Simulate Different User Conditions**: Accurately test new and returning user flows by managing session variables to reflect the correct state.

#### Generated User Response Suggestions

If you have enabled [LLM and Generative AI](../../../../generative-ai-tools/introduction.md){:target="_blank"} for your app, you will see User Response suggestions while recording a Conversation Test Case. 

This feature provides a regression tool that creates a conversation test suite for each intent (new and old) to evaluate the impact of a change on the conversation execution. It helps check if the task or intent is robust enough to handle random user utterances. 

It also helps you predict and simulate the end user’s behavior and check if the app can execute all the defined flows by generating user responses and presenting any digressions from the specified intent.

Click any suggestion to send it to your app and test the response.  
<img src="../images/ct-create-test-suite-suggestions.png" alt="Suggestions" title="Suggestions" style="border: 1px solid gray;zoom:50%;"/>

You can refresh the suggestions list or minimize the suggestions panel. You can also talk to your app by typing in your responses.  
<img src="../images/ct-create-test-suite-refresh-collapse.png" alt="Refresh suggestions" title="Refresh suggestions" style="border: 1px solid gray;zoom:50%;"/>


### Validate Test Suite

The conversation is recorded and all the metadata at each test case is captured. Once the recording is completed, the Platform provides you an option to validate the test suite as follows:

1. Upon successful completion of recording, click **Validate Test Suite**.  
<img src="../images/ct-create-test-suite-record3.png" alt="Click Validate Test Suite" title="Click Validate Test Suite" style="border: 1px solid gray;zoom:50%;"/>

2. The ongoing validation is displayed. You may click **Cancel** if you want to cancel the step or click **Continue in Background** to continue the validation as a background task.  
<img src="../images/ct-create-test-suite-validation-in-progress.png" alt="Validation in Progress" title="Validation in Progress" style="border: 1px solid gray;zoom:50%;"/>

3. If you click **Continue in Background**, you can see the status in the top right corner of the landing page by clicking the **Draft** icon.  
<img src="../images/ct-create-test-suite-draft.png" alt="Continue in Background" title="Continue in Background" style="border: 1px solid gray;zoom:50%;"/>  
  
    !!! Note

        **On-Connect** is the message you receive as soon as you open the chat window, even before you enter any message. The option is displayed for VAs with an On-Connect message. If you skip it, the On-connect message does not get added as a test case. If you click Proceed, then the On-connect message is created as a separate test case.  


4. The Chat window is displayed. The chat transcript is recorded and the recording status is displayed at the top. You can click **Stop** to stop the recording.  
<img src="../images/ct-create-test-suite-validate-ts.png" alt="Validate Test Suite" title="Validate Test Suite" style="border: 1px solid gray;zoom:50%;"/>  
  
    !!! Note

        If there is an error while recording due to any limitation set on the platform, it is displayed on the page.  


#### Capture Test Suite Metadata

Using Conversation Testing, you can test the sequence of nodes executed by the app for user input(s) and capture the following metadata at the time of test suite creation to verify if the app is executing the conversation flows as expected:

* Intent ID, Intent Name
* Node ID, Node Name
* Transition flow

The metadata are captured in both [Record](#record-conversation-to-create-a-test-suite) and [Upload](#upload-file-to-create-a-test-suite) scenarios for all the app responses of all the test suites. The details to be captured vary based on the intent type of the app response. For more information on the details captured here, see [Test Editor](test-editor.md){:target="_blank"}.


### Create Test Suite

1. Upon approval, a **Create Test Suite** pop-up is displayed in which you can enter the following details:
    * Test Suite Name
    * Description
    * Tags  
<img src="../images/ct-create-test-suite-create-ts.png" alt="Create Test Suite" title="Create Test Suite" style="border: 1px solid gray;zoom:50%;"/>     

2. You can either click **Create** to create the test suite or discard this step.
3. On clicking **Create**, the new test suite is created. You can click the **Run Test Suite** button to execute the test suite.  
<img src="../images/ct-create-test-suite-create-tc-selected.png" alt="Create Test Suite-Select test case" title="Create Test Suite-Select test case" style="border: 1px solid gray;zoom:50%;"/> 

4. The dialog **Before you execute the test Suite** is displayed. Select the version of your app to be executed. If any authorization profiles are available, they are displayed here.  
<img src="../images/ct-create-test-suite-create-b4-u-execute.png" alt="Before you execute the test Suite" title="Before you execute the test Suite" style="border: 1px solid gray;zoom:50%;"/>

5. Click **Continue** to continue the execution. The test cases execution progress is displayed on the top right corner of the page.  
<img src="../images/ct-create-test-suite-create-execution.png" alt="Continue executing test suite" title="Continue executing test suite" style="border: 1px solid gray;zoom:50%;"/>  
  
If the test cases are passed, the **Result** is displayed as **Passed**, as shown in the screenshot below.  
<img src="../images/ct-create-test-suite-create-suite.png" alt="Execution Results" title="Execution Results" style="border: 1px solid gray;zoom:50%;"/>


## Upload File to Create a Test Suite

Using this option, you can create test suites by uploading chat transcripts in a pre-defined JSON file. This alternative way of creating test suites is quick and scalable, as compared to recording the flow every time. The following step-by-step process explains how to upload a JSON file, validate and create the test suites.


### Upload a JSON File

1. Click **New Test Suite**.
2. Click the **Upload** option to upload a chat transcript in JSON format.  
<img src="../images/ct-create-test-suite-create-new-ts-upload.png" alt="Upload TS JSON File" title="Upload TS JSON File" style="border: 1px solid gray;zoom:50%;"/>

3. You can drag and drop a predefined JSON file in the **Upload** pop-up or select the file in the local directory using the **browse** option.  
<img src="../images/ct-create-test-suite-create-upload-file.png" alt="Browse for the JSON file" title="Browse for the JSON file" style="border: 1px solid gray;zoom:50%;"/>  
  
!!! Note

    Only JSON files can be uploaded. The maximum file size allowed for upload is 2MB. You can also download a sample JSON file by clicking the Download JSON Sample button.

If there is an error during upload due to any limitation set on the platform, an error is displayed as follows.
<img src="../images/ct-create-test-suite-file-error.png" alt="JSON file upload error" title="JSON file upload error" style="border: 1px solid gray;zoom:50%;"/> 

If an uploaded JSON file exceeds the configured size limit of 2 MB, an error is displayed as shown below.
<img src="../images/ct-create-test-suite-file-size-error.png" alt="JSON file size error" title="JSON file size error" style="border: 1px solid gray;zoom:50%;"/> 


###  Validate and Create Test Suite

The platform processes the uploaded file to simulate the conversation flow and capture all the metadata at each test case. When validating the test suite, there is an option to go back to Conversation testing while the test suite is being validated in the background.

The steps to validate test suites are the same as in Record Test suite Flow. See [Validate Test Suite](#validate-test-suite) for more information. To understand more about testing the sequence of nodes and capturing metadata, see Capture Test Suite Metadata under [Validate Test Suite](#validate-test-suite).

The steps to create a test suite are the same as in Record Test suite Flow. See [Create Test Suite](#create-test-suite) to know more.