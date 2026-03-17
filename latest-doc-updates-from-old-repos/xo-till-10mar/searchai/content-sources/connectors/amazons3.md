# Amazon S3 Connector

The Amazon S3 Connector allows seamless integration between Amazon S3 and Search AI, enabling the ingestion of files stored in Amazon S3 buckets into the Search AI platform. By connecting to an Amazon S3 account, users can retrieve and make their content available for intelligent search and analysis.

<span style="text-decoration:underline;">Specifications</span>


<table>
  <tr>
   <td>Type of Repository 
   </td>
   <td>Cloud
   </td>
  </tr>
  <tr>
   <td>Content Supported
   </td>
   <td>Files in buckets of the format: .pdf, .txt, .ppt, .docx
   </td>
  </tr>
  <tr>
   <td>RACL Support
   </td>
   <td>No
   </td>
  </tr>
  <tr>
   <td>Content Filtering
   </td>
   <td>No
   </td>
  </tr>
</table>


To integrate Search AI with the Amazon S3 account and ingest data from it, follow the steps listed below. 

1. Generate an Access Key for the Amazon S3 account from which content is to be ingested. 
2. Configure the Amazon S3 connector in Search AI.

## Prerequisites 

Ensure that the IAM user generating the access credentials has the following permissions. 

```json
{
      "Effect": "Allow",
      "Action": "s3:ListAllMyBuckets",
      "Resource": "arn:aws:s3:::*"
    },
    {
      "Effect": "Allow",
      "Action": "s3:ListBucket",
      "Resource": "arn:aws:s3:::your-bucket-name"
    },
    {
      "Effect": "Allow",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::your-bucket-name/*"
    }
```

## Generate Access Key 

1. Sign in to the [AWS Management Console](https://console.aws.amazon.com/). 
1. Navigate to the user’s details page. 
1. Click the **Security credentials** tab.
1. Under the **Access keys** section, click **Create access key**.
1. Follow the prompts to generate a new key.
1. Save the Access Key. Download the .csv file with the Access Key ID and Secret Access Key. Note that the secret key is shown only at the time of creation.

Refer to [this](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_root-user_manage_add-key.html) for detailed instructions.


## Configure Amazon S3 Connector in Search AI

Go to the **Authorization page** of the Connector, provide the following configuration fields, and click **Connect**. 

1. **Name**- Unique name for the connector.
1. **Access Key**- Key generated in the above step.
1. **Secret** - Secret generated in the above step. 
1. **Region** -  The region of your account. 


## Ingesting Content

After successfully connecting the Search AI connector to the Amazon S3 account, go to the **Configuration** tab and set up content synchronization. For immediate sync, use the **Sync Now** option and the **Schedule Sync** option to set up a scheduler to sync the content in the future. 

Upon sync, Search AI ingests all the files (in supported formats) from the buckets accessible to the user used to log into the connector. This content is then accessible to all the users of Search AI. 

!!!note
    Only buckets from the same region can be used for content ingestion.
