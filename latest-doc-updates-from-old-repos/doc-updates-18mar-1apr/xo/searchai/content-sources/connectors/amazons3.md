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
   <td>Yes (Advanced Filters for paths and file extensions)
   </td>
  </tr>
</table>


To integrate Search AI with the Amazon S3 account and ingest data from it, follow the steps listed below. 

1. Generate an Access Key for the Amazon S3 account from which content is to be ingested. 
2. Configure the Amazon S3 connector in Search AI.

## Prerequisites 

Ensure that the IAM user generating the access credentials has the following permissions to enable Policy-Based Sync All and standard connector functionality: 

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowListAllBuckets",
      "Effect": "Allow",
      "Action": "s3:ListAllMyBuckets",
      "Resource": "*"
    },
    {
      "Sid": "BucketAccess",
      "Effect": "Allow",
      "Action": [
        "s3:GetObject",
        "s3:ListBucket",
        "s3:GetBucketAcl",
        "s3:GetBucketLocation"
      ],
      "Resource": [
        "arn:aws:s3:::prod.ftp.kore.com.d",
        "arn:aws:s3:::prod.ftp.kore.com.d/*"
      ]
    },
    {
      "Sid": "AllowSTSCallerIdentity",
      "Effect": "Allow",
      "Action": "sts:GetCallerIdentity",
      "Resource": "*"
    },
    {
      "Sid": "AllowIAMReadForPolicyBasedSync",
      "Effect": "Allow",
      "Action": [
        "iam:GetUser",
        "iam:ListAttachedUserPolicies",
        "iam:ListUserPolicies",
        "iam:GetUserPolicy",
        "iam:GetPolicy",
        "iam:GetPolicyVersion",
        "iam:ListAttachedRolePolicies",
        "iam:GetRole"
      ],
      "Resource": "*"
    }
  ]
}
```
!!!note
    Only buckets from the same region can be used for content ingestion.

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

## Advanced Filters

Advanced Filters allow users to refine the content that's synced from Amazon S3. The following filter options are available:

## Paths

Paths is a filter that allows users to directly specify folder paths to sync. This enables the connector to sync only the specified paths, which improves sync performance and provides greater flexibility when syncing specific folders. Users can add multiple paths.

Example: ftp.kore.d/web/web/korehome/kore_file.support/pdf/

!!!note
    The path should always start from the bucket name. In the above example URL, the bucket name is ftp.kore.d.

## File Extensions

File Extensions is a filter that allows users to sync files based on specific extensions. During the sync process, users can choose to include only particular file types. This helps in limiting the sync to only the required file types.

## Incremental Sync

Improves sync efficiency by avoiding redundant processing of unchanged files.

* The first sync will perform a Full Sync.
* From the second sync onward, only newly added and modified files will be processed.
* If filters (such as Advanced Filters) are changed, the system will automatically perform a Full Sync again.

## Policy-Based Sync All

Ensures that the connector syncs only the resources that the configured access token has permission to access. This helps maintain proper access control and improves security during the sync process.

To enable this functionality, the connector requires permissions to identify the IAM user and its associated policies. The required IAM permissions are listed in the Prerequisites section above.

## Fallback Behavior

If the above IAM permissions aren't provided, the connector will fall back to the previous approach:

* The system will retrieve all buckets available to the account.
* It will attempt to process files across those buckets.
* Files that the access token has permission for will be processed.
* Files without access permissions will be blocked by Amazon S3.