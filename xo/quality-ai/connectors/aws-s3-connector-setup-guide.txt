
# AWS S3 Connector Setup Guide

## Overview

The AWS S3 Connector lets you ingest conversation recordings and chatscripts or transcripts from a configured S3 folder into Quality AI Express on a periodic schedule, enabling you to use the tool with 3rd-party Contact Center as a Service (CCaaS) solutions.

### What You Require

* S3 bucket with read permissions.
* CSV metadata files with conversation details
* Audio files (WAV/MP3) or chat transcripts (JSON).
* Quality AI Express platform access.

### Five Minute Setup

1. **Enable Quality AI Express** in platform settings.
2. **Upload test.csv** to your S3 folder with sample data.
3. **Configure the S3 connector** with bucket credentials and paths.
4. **Run validation tests** to verify connectivity.
5. **Set processing schedule** and monitor via logs.

### Critical Requirements

* **Stereo Audio**: Single file with agent (left) + customer (right) channels.
* **Mono Audio (Two separate files)**: One agent-only; one customer-only.
* **Timestamps**: ISO 8601 format with UTC timezone (YYYY-MM-DDTHH:MM:SSZ).
* **Agent Emails**: Must exactly match platform user accounts.

**Need more details?** See the following Detailed Setup Process.

## Prerequisites

Complete the following checklist before starting the configuration:

### AWS Environment Setup

* S3 bucket created in your preferred region.
* IAM user/role configured with read-only S3 permissions.
* Planned bucket folder structure (unified vs separate paths).
* Test audio/chat files prepared for validation.

### Platform Prerequisites

* The Quality AI Express feature is enabled in settings.
* All agents onboarded with correct email addresses.
* Service queues are configured and ready for mapping.
* The user has **Integrations & Extensions** permissions.

### Data Validation

* Audio files in WAV or MP3 format (maximum 50MB each).
* Audio split into separate agent/customer files, with one recording each (**For mono recordings**).
* All timestamps follow ISO 8601 format (YYYY-MM-DDTHH:MM:SSZ).
* All recording URLs are accessible via HTTPS.
* CSV files contain all required metadata fields.
* Create `test.csv` file with sample data.

## Quick Reference

### Supported Recording Types

<table>
  <tr>
   <td><strong>Type</strong>
   </td>
   <td><strong>Format</strong>
   </td>
   <td><strong>Files per Conversation</strong>
   </td>
   <td><strong>Channel Assignment</strong>
   </td>
   <td><strong>Analytics Level</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Stereo Voice</strong>
   </td>
   <td>WAV/MP3
   </td>
   <td>1
   </td>
   <td>Left=Agent, Right=Customer
   </td>
   <td><strong>Full Analytics</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Mono Voice</strong>
   </td>
   <td>WAV/MP3
   </td>
   <td>2 (separate agent/customer)
   </td>
   <td>N/A
   </td>
   <td><strong>Enhanced Analytics</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Voice Transcripts</strong>
   </td>
   <td>JSON
   </td>
   <td>1
   </td>
   <td>Pre-transcribed audio
   </td>
   <td><strong>Text Analytics</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Chat Scripts</strong>
   </td>
   <td>JSON
   </td>
   <td>1
   </td>
   <td>Message-level attribution
   </td>
   <td><strong>Full Text Analytics</strong>
   </td>
  </tr>
</table>

### Minimum Required CSV Fields

`conversationId`, `queueId`, `agentEmail`, `conversationStartTime`, `conversationEndTime`,
`recordingType`, `channelType`, [`recordingUrl`/`agentRecordings+customerRecordings`/`transcriptUrl`/`chatScriptUrl`]

### Field Name Key Differences by Type

* **Stereo Voice**: Uses `recordingUrl`, `agentChannel`, `customerChannel`.

* **Mono Voice**: Uses `agentRecordings` + `customerRecordings` (both required in the same row).

* **Voice Transcripts**: Uses `transcriptUrl`.

* **Chat Scripts**: Uses `chatScriptUrl`.

* **Provider Field**: All types use `asrProvider`.

### Authentication Methods

* **Access Keys**: Simple setup, good for single integrations.

* **IAM Roles**: Enterprise-grade security, recommended for production.

## Mono Recording Requirements (Critical)

!!! note

    For mono recordings, you must have two separate audio files.

1. **Supported** (Two clean mono files)

    * ``` conv-123456-agent.wav ``` (agent audio only)

    * ``` conv-123456-customer.wav ```(customer audio only)`

2. **Not Supported** (Single mixed mono file)  

    * ``` conv-123456-mixed.wav ``` (both speakers mixed)

**Impact of Mixed Mono Audio on Accuracy** 

Single mixed mono files significantly reduce transcription accuracy without proper speaker diarization. Clean separation is essential for quality analytics.

### Data Flow Architecture

<img src="../configure/connectors/images/architecture.png" alt="architecture" title="architecture" style="border: 1px solid gray; zoom:60%;">

## Setup Process

### Prerequisites

#### AWS Requirements

Your AWS environment must have:

* **S3 Bucket**: An organized folder structure for audio/chat files.

* **Authentication**: Access keys or an IAM role with read permissions.

    * Access Keys: IAM user with programmatic access (Access Key ID + Secret Access Key). 

    * IAM Role: IAM role with assumed role and list bucket permissions (Role ARN).

* **Network Access**: HTTPS URLs for all audio files.

#### Authentication Setup in AWS

**Option A: Access Keys (Quick Setup)**

1. Create an IAM user in the AWS Console.
2. Attach policy with S3 read permissions.
3. Generate Access Key and Secret Key.
4. Save credentials securely.

**Option B: IAM Role (Recommended)**


1. Create an IAM role in the AWS Console.
2. Configure a trust relationship for your application/account.
3. Attach S3 read permissions policy.
4. Copy Role ARN (format: `arn:aws:iam::123456789012:role/RoleName`).

#### Required IAM Permissions

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": ["s3:GetObject", "s3:ListBucket"],
            "Resource": [
                "arn:aws:s3:::your-bucket-name",
                "arn:aws:s3:::your-bucket-name/*"
            ]
        }
    ]
}
```

**For IAM Role**: The role must also have a trust relationship allowing your application to assume it:

```
{
    "Version": "2012-10-17",
    "Statement": [{
        "Effect": "Allow",
        "Principal": {
            "AWS": "arn:aws:iam::YOUR-APPLICATION-ACCOUNT-ID:root"
        },
        "Action": "sts:AssumeRole"
    }]
}
```

### Platform Prerequisites

* **User Management**: All agents/supervisors onboarded with valid email addresses.

* **Queue Configuration**: Service queues are pre-configured for mapping.

## Configuration Schemas

### CSV Metadata Formats

#### Stereo Voice Recordings

**Configuration**: `recordingType` = `stereo` and `channelType` = `voice`

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Example</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td><code>conversationId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>conv-123456
   </td>
   <td>Unique identifier, max 50 chars
   </td>
  </tr>
  <tr>
   <td><code>agentEmail</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>john.smith@company.com
   </td>
   <td>Must exist in the platform, defaults to the default user
   </td>
  </tr>
  <tr>
   <td><code>conversationStartTime</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>2025-04-10T14:30:00Z
   </td>
   <td>ISO 8601 with UTC timezone
   </td>
  </tr>
  <tr>
   <td><code>conversationEndTime</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>2025-04-10T14:32:45Z
   </td>
   <td>Must be after start time
   </td>
  </tr>
  <tr>
   <td><code>channelType</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>voice
   </td>
   <td>Always <strong>voice </strong>for audio
   </td>
  </tr>
  <tr>
   <td><code>recordingType</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>stereo
   </td>
   <td>Always <strong>stereo</strong> for this format
   </td>
  </tr>
  <tr>
   <td><code>recordingUrl</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td><a href="https://s3.amazonaws.com/bucket/conv-123456.wav</a>
   </td>
   <td>HTTPS accessible URL
   </td>
  </tr>
  <tr>
   <td><code>queueId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>support-tier1
   </td>
   <td>Must exist in the queue mapping
   </td>
  </tr>
  <tr>
   <td><code>agentChannel</code>
   </td>
   <td>Required
   </td>
   <td>Integer
   </td>
   <td>0
   </td>
   <td>Agent audio channel (0=left, 1=right)
   </td>
  </tr>
  <tr>
   <td><code>customerChannel</code>
   </td>
   <td>Required
   </td>
   <td>Integer
   </td>
   <td>1
   </td>
   <td>Customer audio channel (0=left, 1=right)
   </td>
  </tr>
  <tr>
   <td><code>language</code>
   </td>
   <td>Optional
   </td>
   <td>String
   </td>
   <td>en
   </td>
   <td>ISO 639-1 format, defaults to "en"
   </td>
  </tr>
  <tr>
   <td><code>asprovider</code>
   </td>
   <td>Optional
   </td>
   <td>String
   </td>
   <td>microsoft
   </td>
   <td>Audio service provider
   </td>
  </tr>
</table>

#### Mono Voice Recordings

**Configuration**: `recordingType = mono` and `channelType = voice`

**Critical**: Mono recordings require **two separate CSV entries** and **two audio files** per conversation.

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Example</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td><code>conversationId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>conv-123456
   </td>
   <td>Same ID for both agent/customer entries
   </td>
  </tr>
  <tr>
   <td><code>agentEmail</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>john.smith@company.com
   </td>
   <td>Must exist in the platform, defaults to the default user
   </td>
  </tr>
  <tr>
   <td><code>conversationStartTime</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>2025-04-10T14:30:00Z
   </td>
   <td>ISO 8601 with UTC timezone
   </td>
  </tr>
  <tr>
   <td><code>conversationEndTime</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>2025-04-10T14:32:45Z
   </td>
   <td>The end time must follow the start time \

   </td>
  </tr>
  <tr>
   <td><code>channelType</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>voice
   </td>
   <td>Always <strong>voice</strong> for audio
   </td>
  </tr>
  <tr>
   <td><code>recordingType</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>mono
   </td>
   <td>Always <strong>mono</strong> for this format
   </td>
  </tr>
  <tr>
   <td><code>agentRecordings</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td><a href="https://s3.amazonaws.com/bucket/conv-123456-agent.wav</a>
   </td>
   <td>URL to agent stream recording file
   </td>
  </tr>
  <tr>
   <td><code>customerRecordings</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>   
   <td><a href="https://s3.amazonaws.com/bucket/conv-123456-agent.wav</a>
   </td>
   <td>URL to customer stream recording file
   </td>
  </tr>
  <tr>
   <td><code>queueId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>support-tier1
   </td>
   <td>Must exist in the queue mapping
   </td>
  </tr>
  <tr>
   <td><code>agentId</code>
   </td>
   <td>Optional
   </td>
   <td>String
   </td>
   <td>agent-789
   </td>
   <td>Internal agent identifier
   </td>
  </tr>
  <tr>
   <td><code>language</code>
   </td>
   <td>Optional
   </td>
   <td>String
   </td>
   <td>en
   </td>
   <td>ISO 639-1 format, defaults to <strong>en</strong>
   </td>
  </tr>
  <tr>
   <td><code>asProvider</code>
   </td>
   <td>Optional
   </td>
   <td>String
   </td>
   <td>microsoft
   </td>
   <td>Transcription provider
   </td>
  </tr>
</table>

#### Voice Transcripts (Pre-transcribed Audio)

**Configuration**: `recordingType = transcription` and `channelType = voice`

**Use Case**: When you have pre-transcribed audio files and need to skip the speech-to-text processing.

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Example</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td><code>conversationId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>conv-123456
   </td>
   <td>Unique identifier, max 50 chars
   </td>
  </tr>
  <tr>
   <td><code>agentEmail</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>john.smith@company.com
   </td>
   <td>Must exist in the platform, defaults to the default user
   </td>
  </tr>
  <tr>
   <td><code>conversationStartTime</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>2025-04-10T14:30:00Z
   </td>
   <td>ISO 8601 with UTC timezone
   </td>
  </tr>
  <tr>
   <td><code>conversationEndTime</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>2025-04-10T14:32:45Z
   </td>
   <td>The end time must follow the start time
   </td>
  </tr>
  <tr>
   <td><code>channelType</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>voice
   </td>
   <td>Always <strong>voice</strong> for audio transcripts
   </td>
  </tr>
  <tr>
   <td><code>recordingType</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>transcription
   </td>
   <td>Always <strong>transcription</strong> for pre-transcribed
   </td>
  </tr>
  <tr>
   <td><code>transcriptPath</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>transcripts/voice-123.json
   </td>
   <td>Path to JSON transcript file
   </td>
  </tr>
  <tr>
   <td><code>queueId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>support-tier1
   </td>
   <td>Must exist in the queue mapping
   </td>
  </tr>
  <tr>
   <td><code>language</code>
   </td>
   <td>Optional
   </td>
   <td>String
   </td>
   <td>en
   </td>
   <td>ISO 639-1 format, defaults to <strong>en</strong>
   </td>
  </tr>
  <tr>
   <td><code>asProvider</code>
   </td>
   <td>Optional
   </td>
   <td>String
   </td>
   <td>microsoft
   </td>
   <td>Original audio service provider
   </td>
  </tr>
</table>

!!! note

    Chat scripts include real-time messaging interactions across platforms, such as web chat, WhatsApp, and Facebook Messenger.


### JSON Transcript Schema

#### Voice Transcript Format

json
```
{
  "recognizedPhrases": [
    {
      "recognitionStatus": "Success",
      "channel": 0,
      "offset": "PT14S",
      "duration": "PT2.4S",
      "offsetInTicks": 140000000.0,
      "durationInTicks": 24000000.0,
      "durationMilliseconds": 2400,
      "offsetMilliseconds": 14000,
      "nBest": [
        {
          "confidence": 0.8205426,
          "lexical": "yes one four three four two six",
          "itn": "yes 143426",
          "maskedITN": "yes one four three four two six",
          "display": "Yes, 143426.",
          "words": [
            {
              "word": "yes",
              "offset": "PT14S",
              "duration": "PT0.32S",
              "offsetInTicks": 140000000.0,
              "durationInTicks": 3200000.0,
              "durationMilliseconds": 320,
              "offsetMilliseconds": 14000,
              "confidence": 0.51653963
            },
            {
              "word": "one",
              "offset": "PT14.32S",
              "duration": "PT0.2S",
              "offsetInTicks": 143200000.0,
              "durationInTicks": 2000000.0,
              "durationMilliseconds": 200,
              "offsetMilliseconds": 14320,
              "confidence": 0.65166444
            }
          ]
        }
      ]
    }
  ]
}
```

**Required Fields**:

json
```
{
  "recognizedPhrases": [
    {
      "channel": 0,
      "offsetInTicks": 140000000.0,
      "nBest": [
        {
          "lexical": "yes one four three four two six",
          "words": [
            {
              "word": "yes",
              "offsetInTicks": 140000000.0,
              "durationInTicks": 3200000.0,
              "confidence": 0.51653963
            }
          ]
        }
      ]
    }
  ]
}
```

#### Chat Scripts (Live Chat Interactions)

**Configuration**: `recordingType = transcription` and `channelType = chat`

**Use Case**: For live chat interactions from web chat, messaging platforms, or chat-based customer service.

<table>
  <tr>
   <td><strong>Field</strong>
   </td>
   <td><strong>Required/Optional</strong>
   </td>
   <td><strong>Type</strong>
   </td>
   <td><strong>Example</strong>
   </td>
   <td><strong>Notes</strong>
   </td>
  </tr>
  <tr>
   <td><code>conversationId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>conv-123456
   </td>
   <td>Unique identifier, maximum 50 characters
   </td>
  </tr>
  <tr>
   <td><code>agentEmail</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>john.smith@company.com
   </td>
   <td>Must exist in the platform, defaults to the default user 
   </td>
  </tr>
  <tr>
   <td><code>conversationStartTime</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>2025-04-10T14:30:00Z
   </td>
   <td>ISO 8601 format
   </td>
  </tr>
  <tr>
   <td><code>conversationEndTime</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>2025-04-10T14:45:00Z
   </td>
   <td>Must be after start time
   </td>
  </tr>
  <tr>
   <td><code>channelType</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>chat
   </td>
   <td>Always <strong>chat</strong> for text interactions
   </td>
  </tr>
  <tr>
   <td><code>recordingType</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>transcription
   </td>
   <td>Always <strong>transcription</strong> for chat
   </td>
  </tr>
  <tr>
   <td><code>transcriptPath</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>transcripts/chat-123.json
   </td>
   <td>Path to JSON transcript file
   </td>
  </tr>
  <tr>
   <td><code>queueId</code>
   </td>
   <td>Required
   </td>
   <td>String
   </td>
   <td>support-tier1
   </td>
   <td>Must exist in the queue mapping
   </td>
  </tr>
  <tr>
   <td><code>language</code>
   </td>
   <td>Optional
   </td>
   <td>String
   </td>
   <td>en-US
   </td>
   <td>Defaults to <strong>en</strong> if not specified
   </td>
  </tr>
</table>

!!! Note

    Chat scripts include real-time messaging interactions from various platforms, including web chat, WhatsApp, Facebook Messenger, and so on.

### JSON Transcript Schema

#### Chat Transcript Format

json
```
{
  "1": {
    "type": "AGENT",
    "text": "Good afternoon, how can I help you today?",
    "timestamp": 1749562206000,
    "userId": "john.smith@company.com"
  },
  "2": {
    "type": "USER", 
    "text": "I need help with my account balance.",
    "timestamp": 1749562253142,
    "userId": "customer_12345"
  }
}
```

**Required Fields**:

* `type`: `AGENT`, `USER`, or `SYSTEM`

* `text`: Message content

* `timestamp`: Unix timestamp in milliseconds

* `userId`: Participant identifier

!!! note

    For conversations involving transfers across agents and queues, use the `queueId` of the queue where the conversation ended, and the `agentEmail` of the agent who terminated the conversation.


## Step-by-Step Configuration

### Step 1: Prepare S3 Environment

#### Option 1: Unified Path Structure

<img src="../configure/connectors/images/unified-path-structure.png" alt="unified path" title="unified path" style="border: 1px solid gray; zoom:60%;">

#### Option 2: Separate Paths

<img src="../configure/connectors/images/separate-path-structure.png" alt="separate path" title="separate path" style="border: 1px solid gray; zoom:60%;">

### Validation Checkpoint (Data Preparation)

**Verify your S3 setup**:

* All audio files are accessible via HTTPS URLs.

* CSV files contain the required fields with correct headers.

* Mono recordings have separate agent/customer files.

* The `test.csv` file exists in each configured folder before the configuration.

* File sizes under 50MB each.

### Step 2: Platform Configuration

1. Navigate to **Connector Setup**.

2. Navigate to **Quality AI** > **Configure** > **Connectors**.

3. Click **+ Add Connector** > **Amazon S3** > **Connect**.

4. Configure the following **Basic Configuration**. 

    * **Name**: Enter a descriptive connector name.

    * **AWS Region**: Select your S3 bucket region.

    * **Auth Type**: Choose the authentication method.

5. Configure the **Authentication Setup (For Access Keys)**.

    * Enter **Access key** and **Secret key**.

6.  Configure the **IAM Role**. 
    * Enter the IAM Role ARN. 

7. Configure the following two **Folder Paths**. 

    a. **Unified Path:**
        
      * Unified Voice and Chat Path 

      * **Folder Path**: s3://your-bucket/conversations/

    b. **Separate Paths**: 

      * Separate Voice and Chat Path 

      * **Voice Path**: s3://your-bucket/voice-interactions/
      
      * **Chat Path**: s3://your-bucket/chat-interactions/

### Validation Checkpoint (Connection Setup)

**Test your configuration**:

1. Click the **Test** tab in the connector configuration.

2. Expected results:

    * **IAM Role Assumption**: Role assumed successfully

    * **Authentication**: Connected successfully.

    * **File Path Access**: S3 bucket accessible.

    * **File Format**: CSV format validated.

    * **Metadata Validation**: Required fields confirmed.

    If any checks fail:

    * **Authentication**: Verify credentials and IAM permissions.

    * **File Access**: Check bucket name, region, and folder paths, and ensure file URLs are accessible.

    * **Format/Metadata**: Ensure the `test.csv` file exists with the proper structure, and that the column headers and timestamps match the specified formats. 

### Step 3: Queue Mapping & Scheduling

1. **Configure Queue Mapping**

    a. Navigate to the **Queue** tab.

    b. Map CSV `queueId `values to **Quality AI Express** queues.

    c. Ensure exact string matches.

2. **Set Processing Schedule**

    a. Navigate to the **Schedule** tab.

      * **Interval**: Choose frequency (minutes/hours/days). 

      * **Start Time**: Set initial run time (UTC timezone).

    b. Click **Save** to activate.

### Validation Checkpoint (Final Configuration)

**Verify Complete Setup**:

* Queue mappings saved and validated.
* Processing schedule configured and active.
* The first ingestion job appears in the **Log** tab.
* No error messages in processing logs.

**Success Indicators**:

* Conversations appear in **Quality AI Express dashboards**.
* Analytics data populates for ingested interactions.

## Troubleshooting Guide

### Authentication Issues

<table>
  <tr>
   <td><strong>Problem</strong>
   </td>
   <td><strong>Symptoms</strong>
   </td>
   <td><strong>Solution</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Invalid Credentials</strong>
   </td>
   <td>Authentication failed error
   </td>
   <td>
<ul>

<li>Verify access key/secret key accuracy</li>

<li>Check IAM role ARN format or copied correctly</li>

<li>Ensure credentials have not expired</li>

<li>Verify the role exists in the correct AWS account</li>
</ul>
   </td>
  </tr>
  <tr>
   <td><strong>Permission Denied</strong>
   </td>
   <td>Access denied to S3 bucket
   </td>
   <td>
<ul>

<li>Add S3 read permissions to the IAM user/role</li>

<li>Verify the bucket policy allows access</li>

<li>Check that the bucket region matches the configuration</li>
</ul>
   </td>
  </tr>
</table>

### Data Processing Issues

<table>
  <tr>
   <td><strong>Problem</strong>
   </td>
   <td><strong>Symptoms</strong>
   </td>
   <td><strong>Solution</strong>
   </td>
  </tr>
  <tr>
   <td><strong>Timestamp Errors</strong>
   </td>
   <td>Invalid timestamp format
   </td>
   <td>
<ul>

<li>Use ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ</li>

<li>Include UTC timezone designation</li>

<li>Verify end time and start time</li>
</ul>
   </td>
  </tr>
</table>

### File Access

#### Performance Expectations

* 3-5 minutes per conversation, depending on conversation duration, ASR transcription latency (for voice), and LLM response latency.
