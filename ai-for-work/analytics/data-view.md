# Data View

The different parameters under the Data view are:

* Request ID
* Users
* Questions
* Overall Tokens
* Response time
* Agent type
* Status
* Timestamp

<img src="../images/log-view.png" alt="data-view" title="data-view" style="border: 1px solid gray; zoom:80%;"/>

In the data, each record corresponds to a user utterance. Click **More** to open a specific data entry, where you will find a detailed view of the utterance, including the triggered questions and received answers.


## Data Parameters

The data parameters for a specific data is as follows:

**Request Information**

* Request ID
* User Name and Email Id
* User ID
* Channel: Mobile/Web	
* Previous Context: Yes/ No
* Thread ID
* Feedback Comments
* Timestamp: Date and time

**Query Details**

* Question
* Query Points

**LLM Usage**

* Model
* Total Tokens
* Request Tokens
* Response Tokens

**Execution Analyzer**

<img src="../images/execution analyzer.png" alt="execution analyzer" title="execution analyzer" style="border: 1px solid gray; zoom:80%;"/>

Expand the **Execution analyzer** to examine the steps performed in the background. If a user needs to debug a query, they can access the **Execution Analyzer** to view the exact prompt sent for each step, allowing them to see precisely what was sent to the model. This includes options for debugging each step if required, enabling users to review the response from the LLM and identify any issues.

At the top of the data view of a specific data, you can also see the Response status, Response time, and Feedback type of that data.
