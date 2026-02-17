# Installing Botkit in AWS

			


## Introduction

This guide outlines the steps for installing Kore.ai Experience Optimization Platform BotKit in AWS.


## BotKit Overview

BotKit is an SDK that extends the Platform’s conversational AI capabilities. It allows developers to:



* Implement custom business logic in conversational flows using webhooks.
* Enhance entity and intent recognition with custom NLU models.
* Integrate with unsupported messaging or voice-based channels.
* Handle additional conversation events for complex workflows.

BotKit complements the Platform's no-code bot builder by enabling programmatic customization for enterprise requirements.


### Example Use Cases



* Channel integrations: Integrate with new conversational channels not natively supported by the platform, such as custom mobile SDKs or IoT devices.
* Custom NLU Models: Employ external NLP models tuned to proprietary enterprise data for specialized intent recognition and entity extraction. BotKit enables the injection of custom models that are not available on the platform.
* Conversation Lifecycle Handlers: Add custom logic triggered on conversation events like start, close, user input, etc., for additional processing like state notifications, metrics tracking, etc. This is useful for complex workflows.
* Non-Standard Integrations: Connect to external services that don’t directly conform to the API node spec, such as calling custom APIs, on-premise systems, etc. BotKit allows for webhooks to custom integration code. For example, external biometrics inject voice/face verification from third-party systems before providing privileged information. Confirm identity via voice match before sharing account balance.
* Custom Analytics: Capture enterprise KPIs that are not available out-of-the-box, like lead quality customer lifetime value, and store them in a third-party analytics platform. For example, Track key metrics across all conversational touchpoints and send them to Google Analytics.

References:



* [Using the BotKit SDK](./using-the-botkit-sdk.md)
* [Events for the BotKit SDK](./sdk-events.md)
* [Functions for the BotKit SDK](./sdk-functions.md)


## Botkit Installation Steps in AWS

Follow these steps for an automated BotKit deployment in AWS:


### Step 1. Create a Golden Image



1. Launch a new server with the base OS with the below configurations Amazon Linux 2 or the certified Base OS such as CentOS / RedHat 7.x or above:
    1. 4vCPU
    2. 16 GB RAM
    3. OS Disk (20 GB)
    4. Data Disk (50 GB)
    
    We suggest the instance type m5.xlarge on AWS, which would satisfy the above requirements.
   
2. Update all the OS-level packages using the command “yum update”.
3. Install NodeJS.
    * Refer to the below link to download & install the NodeJS for the support versions:[ https://nodejs.org/en/download](https://nodejs.org/en/download)

4. Install Nginx’s latest version.
    * Refer to the below link for the installation:
[ https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/](https://docs.nginx.com/nginx/admin-guide/installing-nginx/installing-nginx-open-source/)

5. Ensure both the package installations are successful with the following commands:
    * node -v
    * nginx –version
6. Create a DeployScript to pull the build from your central repository & extract it to the data disk.
7. Create the required startup scripts to bring up the services for both Botkit & Nginx.
8. Configure Nginx to listen on port 80 and add the upstream configuration to route the traffic to the respective bootkit instance.
9. Create the Golden Image.


### Step 2. Set Up Load Balancer



1. Create an External(Internet-facing) Application Load Balancer (ALB).
2. Add a listener on port 443 with an SSL certificate (Preferably using ACM).
3. Create a target group to configure the backend instances on port 80 and assign the same to the listener.


### Step 3: Configure DNS



1. Create an “A/CNAME Record” under your external facing domain & map it to the Load Balancer.


### Step 4: Set Up Elasticache (Optional)



1. If Botkit requires Redis, launch an AWS ElasticCache service for Redis with the respective capacity requirements.


### Step 5: Create a Launch Template



1. Create an AWS Launch template with the Golden image.
2. Configure the required VPC settings, including the subnets, Security Groups, etc.,
3. Under the “USER_DATA”, invoke the deployment script to deploy the latest build & start the services.
4. Set the current version as the default.


### Step 6: Configure AutoScaling Group



1. Create a new AutoScaling Group with the launch template with the default version.
2. Configure all the other required settings as per your internal policies.
3. Attach the target group to automatically attach the instance to the Load Balancer.
4. Enabling the SNS notifications for the launch/termination of the instances is recommended.
5. Configure autoscaling policies to scale up with the CPU utilization threshold as per your internal policies.


### Step 7: Establish Configuration Repository



1. Maintain a configuration repository for the configurations for Botkit, Nginx, etc.


### Step 8: Implement CI/CD Pipeline



1. Create a CI/CD pipeline using Jenkins or any other automation tools as per your internal policies.
2. Below are the steps for the deployments:
    1. Checkout of the Botkit codebase to the local workspace.
    2. Check out the configuration files from the configuration repository.
    3. Install the NPM dependencies (Optional).
    4. Create an Archive & push it to the central repository (S3 Bucket / Artifactory, etc.).
    5. Invoke the Deploy Script to deploy the bundle to the target systems in a rolling fashion: Remove one of the servers from the LB, deploy the build, restart the services, and attach it back to the LB. Repeat the same for the other server.
    6. Additionally, you can configure the vulnerability scans in your pipeline before pushing the build to the target systems & add a condition based on the vulnerability report to proceed further.


## Optional: Security Patching



1. Update your Golden image with the respective patches.
2. Validate the application by launching a standalone server.
3. Upon successful validation, launch new servers using the AutoScaling Group & terminate the old servers.

		
