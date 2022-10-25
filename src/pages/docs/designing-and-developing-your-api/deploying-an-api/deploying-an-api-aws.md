---
title: 'Deploying to an Amazon API Gateway'
updated: 2022-09-15
search_keyword: "deploy, aws, api gateway"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API development overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Stay on Top of Your API Deployments: AWS API Gateway Integration"
    url: "https://blog.postman.com/deployments-aws-api-gateway-integration/"
---

[Amazon API Gateway](https://aws.amazon.com/api-gateway/) enables developers to publish and manage APIs that access AWS and other web services and data sources. Once connected to API Gateway, you can view your API deployment status and history from within Postman. You can also view [Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) metrics for each stage to get operational insight into your API.

This integration supports OpenAPI 3.0 definitions for HTTP and REST APIs. You can import a definition from Amazon API Gateway and use it in Postman. For HTTP APIs, you can choose to export your definition from Postman to API Gateway. You can use the AWS console to deploy your exported definition to a stage, or deploy your HTTP API definition directly from Postman to a stage.

## Contents

* [Connecting to Amazon API Gateway](#connecting-to-amazon-api-gateway)
    * [Authenticating with an AWS IAM role](#authenticating-with-an-aws-iam-role)
    * [Authenticating with an AWS access key](#authenticating-with-an-aws-access-key)
* [Viewing Amazon API Gateway deployments](#viewing-amazon-api-gateway-deployments)
* [Viewing CloudWatch metrics](#viewing-cloudwatch-metrics)
* [Importing a definition from Amazon API Gateway](#importing-a-definition-from-amazon-api-gateway)
* [Exporting and deploying your API](#exporting-and-deploying-your-api)

## Connecting to Amazon API Gateway

To connect to Amazon API Gateway in Postman, select **APIs** in the sidebar and select an API. Select **Deployments**, and then select **AWS API Gateway**.

When setting up the connection to API Gateway, you can choose to authenticate by [creating an AWS IAM role](#authenticating-with-an-aws-iam-role) or by [using an AWS access key](#authenticating-with-an-aws-access-key). Follow the steps for your chosen method below. After setting up the connection, you can choose to import a definition from the API Gateway.

> When you delete an API or remove it from a workspace, any configured integrations aren't deleted or removed. On the Postman **Home** page, select **Integrations** and search for "AWS API Gateway" to view the list of [AWS API gateway integrations](https://go.postman.co/integrations/service/api_gateway_aws/api_gateway_aws). To delete an integration, select it and then select **Delete Integration**.

### Authenticating with an AWS IAM role

To set up a connection to Amazon API Gateway using an AWS IAM role, select **IAM** under **AWS Authentication Mechanism**.

<img alt="Connecting with AWS IAM role" src="https://assets.postman.com/postman-docs/v10/connect-to-api-gateway-with-iam-role-v10.jpg" width="520px"/>

Enter a **Nickname** for this integration and select the **AWS API Type** (HTTP or REST).

Next, create an IAM role for Postman in AWS:

1. Open the [AWS IAM console](https://console.aws.amazon.com/iam/home#/roles) and select **Create role**.
2. Under **Select type of trusted entity**, select **Another AWS account**.
3. Enter Postman's **AWS Account ID**: `258201882842`
4. Under options, select the check box to **Require external ID** and enter the **External ID** from Postman. You can find the external ID under **Step 1: Create an IAM role**.

    > For more information, refer to the [AWS IAM guide on using external IDs](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html).

5. Select **Next: Permissions**.
6. Select an existing IAM policy or select **Create policy**. If you are creating a policy, use the following JSON code:

    ```json
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "Stmt909923626743",
                "Effect": "Allow",
                "Action": [
                    "apigateway:GET",
                    "apigateway:PUT",
                    "apigateway:POST",
                    "cloudwatch:GetMetricData"
                ],
                "Resource": [
                    "*"
                ]
            }
        ]
    }
    ```

    This policy will enable exporting and deploying for HTTP API definitions. (Exporting and deploying aren't supported for REST API definitions.) You can customize the `Action` section in the IAM policy based on your needs:

    * `"apigateway:GET"` - (Required) Enables viewing API Gateway deployments for HTTP and REST APIs in Postman.
    * `"apigateway:PUT"` - Enables [exporting](#exporting-and-deploying-your-api) HTTP API definitions to the API Gateway.
    * `"apigateway:POST"` - Enables [deploying](#exporting-and-deploying-your-api) HTTP API definitions to a stage on the API Gateway.
    * `"apigateway:*"` - Assigns all GET, PUT, POST, PATCH, DELETE permissions to the IAM role.
    * `"cloudwatch:GetMetricData"` - Enables [viewing CloudWatch metrics](#viewing-cloudwatch-metrics) in Postman.

7. Select **Next: Tags**.
8. Select **Next: Review**.
9. Add a **Role name** and **Role description**, then select **Create role**.

Copy the **Role ARN** from AWS and paste it in Postman under **Step 2: Enter role ARN and region**. Next, enter the **AWS Region** where the API Gateway is located and select the **API Gateway**. When you're ready, select **Connect**.

### Authenticating with an AWS access key

To set up a connection to Amazon API Gateway using an AWS access key, select **Access Key** under **AWS Authentication Mechanism**.

<img alt="Connecting with AWS access key" src="https://assets.postman.com/postman-docs/v10/connect-to-api-gateway-with-access-key-v10.jpg" width="520px"/>

Next, enter information about the connection:

* Enter a **Nickname** for this integration.
* Select the **AWS API Type** (HTTP or REST).
* Enter the **Access Key ID** and **Secret Access Key** for your AWS account. (Learn how to [find your credentials in AWS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-your-credentials.html).)
* Enter the **AWS Region** where the API Gateway is located and select the **API Gateway**.

When you're ready, select **Connect**.

### Importing a definition

After setting up the connection, you can choose to import an HTTP or REST definition from the API Gateway:

* To import a definition, select the **AWS stage** to import the definition from and select **Import**. _Importing a definition will replace your current API definition or add a new definition if one doesn't exist._
* If you don't want to import a definition, select **Maybe later**. You can [import a definition](#importing-a-definition-from-amazon-api-gateway) at any time after connecting to Amazon API Gateway.

<img alt="Importing a definition" src="https://assets.postman.com/postman-docs/v10/connect-to-api-gateway-import-v10.jpg" width="520px"/>

## Viewing Amazon API Gateway deployments

After connecting to Amazon API Gateway, you can view the export and deployment history for your API definitions in Postman. Select **APIs** in the sidebar and select an API. Select **Deployments**.

* For each stage you can view the active deployment and the date last updated. You can also view CloudWatch metrics for the last week, such as average latency and the number of `4xx` and `5xx` errors.
    * Select the arrow next to a stage to view more details, including the invoke URL and stage description (from AWS).
    * Select a stage name to view metrics on the [CloudWatch dashboard](#viewing-cloudwatch-metrics).
* For each export from Postman, you can view the source of the export and the time when exported.
* For each deployment you can view the deployment ID, description, and creation date.

<img alt="Viewing API deployments" src="https://assets.postman.com/postman-docs/v10/api-gateway-deployments-tab-v10.jpg"/>

From the **Deployments** view, you can take the following actions:

* To view your API Gateway in AWS, select the **AWS Gateway ID**.
* To export or deploy an HTTP definition to the API Gateway, select **Deploy API**. Learn more about [deploying your API](#exporting-and-deploying-your-api).
* To import a definition from the API Gateway, select **Import Definition**. Learn more about [importing a definition](#importing-a-definition-from-amazon-api-gateway).
* To view metrics for your API Gateway in AWS, select **View Dashboard**.
* For information about the latest deployment status, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.
* To edit or delete the connection to Amazon API Gateway, select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px">.

## Viewing CloudWatch metrics

[Amazon CloudWatch](https://aws.amazon.com/cloudwatch/) provides monitoring and observability for APIs deployed to Amazon API Gateway. By default, API Gateway metrics data is automatically sent to CloudWatch in one-minute intervals. After connecting to API Gateway, you can view the last week of CloudWatch metrics in Postman.

From the **Deployments** view, select the name of a stage to view the CloudWatch dashboard for that stage. The graphs on the dashboard display metrics for latency, integration latency, `4xx` and `5xx` error rates, and count.

* Hover over a data point on a graph to view detailed metrics data.
* Hover over the information icon <img alt="Information icon" src="https://assets.postman.com/postman-docs/icon-information-v9-5.jpg#icon" width="16px"> for a specific graph to learn more about the metrics.

<img alt="Viewing CloudWatch metrics" src="https://assets.postman.com/postman-docs/api-gateway-cloudwatch-metrics-v9-15.jpg"/>

From the CloudWatch dashboard, you can take the following actions:

* To view metrics for a different stage, select the stage in the dropdown list.
* To view metrics for a different time range, select the time range in the dropdown list.
* To view metrics for your API Gateway in AWS, select **View Dashboard**.
* To view the this stage in AWS, select **View Stage on AWS**.
* To view the latest CloudWatch metrics, select the refresh icon <img alt="Refresh icon" src="https://assets.postman.com/postman-docs/icon-refresh-v9-5.jpg#icon" width="14px">.

### Updating an existing IAM policy for CloudWatch

The Amazon API Gateway integration supports viewing CloudWatch metrics in Postman. If you previously created an IAM policy when configuring the integration, you may need to update the policy to enable CloudWatch metrics. Make sure to add the `"cloudwatch:GetMetricData"` action to your IAM policy:

```json
"Action": [
    "apigateway:GET",
    "apigateway:PUT",
    "apigateway:POST",
    "cloudwatch:GetMetricData"
],
```

## Importing a definition from Amazon API Gateway

You can import an HTTP or REST definition from a connected Amazon API Gateway to your API in Postman. _Importing a definition will replace your current API definition or add a new definition if one doesn't exist._

1. Select **APIs** in the sidebar and select an API.
1. Select **Deployments**.
1. Select **Import Definition**.
1. Select the **AWS stage** to import the definition from.
1. Select **Import**.

<img alt="Importing a definition" src="https://assets.postman.com/postman-docs/v10/amazon-api-gateway-import-v10.jpg" width="650px"/>

## Exporting and deploying your API

Exporting an HTTP API definition makes it available in the connected Amazon API Gateway. After you export a definition from Postman, use the AWS console to configure and deploy the definition to a stage in API Gateway. When exporting, you can also choose to deploy the definition directly from Postman to a stage in the connected API Gateway. Once the definition is deployed, users can start calling the API.

> HTTP API definition can be exported and deployed from Postman. To deploy a REST API definition, use the AWS console.

1. Select **APIs** in the sidebar and select an API.
1. Select **Deployments**.
1. Select **Deploy API**.
1. Select the source of the definition you want to deploy. You can select the current definition or any [published version](/docs/designing-and-developing-your-api/versioning-an-api/api-versions/) of the definition.
1. (Optional) If you would like to deploy the definition to a stage after exporting, select **Deploy on a stage**. Select the AWS stage to deploy the definition to, and enter a brief description.

    > To deploy your definition, your gateway must have at least one route with a configured integration.

1. Select **Deploy**.

    > If you have a problem exporting or deploying, make sure you've assigned both the PUT and POST permissions [in your IAM policy](#authenticating-with-an-aws-iam-role).

<img alt="Deploying an API" src="https://assets.postman.com/postman-docs/v10/deploy-api-definition-on-aws-v10-0-15.jpg" width="516px"/>

> [API Gateway extensions to Open API](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-swagger-extensions.html) (vendor extensions) are preserved when pushing and deploying a definition from Postman. Postman merges any extensions present in the API Gateway into the definition before pushing the merged definition to the API Gateway.
