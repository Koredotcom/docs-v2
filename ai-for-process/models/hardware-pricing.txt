# Hardware Configurations and Pricing

The following table outlines hardware configurations and their corresponding hourly prices (model credits) for a single replica on the AWS cloud:

| Hardware Configuration         | Hourly Model Credits :material-information-outline:{ title="1 Model Credit = $1" } |
| ------------------------------ | ----------- |
| A10 single                     | 2.118      |
| A10 cluster of 4               | 8.808      |
| A10 cluster of 8               | 24.732     |
| T4 single                      | 1.428      |
| T4 cluster of 4                | 6.168      |
| T4 cluster of 8                | 12.036     |     

Prices are per replica. You can define minimum and maximum replicas. For example, with 3 replicas of "A10 single", up to 3 "A10 singles" will be used during high load before requests enter a waiting period.

Also, configurations like "T4 cluster of 4" represent one replica. A second replica would be another complete "T4 cluster of 4".

!!! note

      Azure and Google Cloud Platform (GCP) support is not yet available.


