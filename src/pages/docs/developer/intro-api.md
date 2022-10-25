---
title: "Postman API"
order: 146
updated: 2022-10-12
page_id: "intro_api"
search_keyword: "postman-api-key, X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset"
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "Grouping requests in collections"
    url: "/docs/sending-requests/intro-to-collections/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Intro to the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=iEtsp6o4AJg"
  - type: link
    name: "User Info from the Postman API | Postman Level Up"
    url: "https://www.youtube.com/watch?v=k2bvdqxDcsU"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Filtering and Sorting APIs Using the Postman API"
    url: "https://blog.postman.com/filtering-and-sorting-apis-using-the-postman-api/"
  - type: link
    name: "Introducing an API to Access Mock Server Call Logs"
    url: "https://blog.postman.com/introducing-an-api-to-access-mock-server-call-logs/"
  - type: link
    name: "Introducing APIs to Access and Manage Server-Level Responses on a Mock Server"
    url: "https://blog.postman.com/apis-to-access-manage-server-level-responses-mock-server/"
  - type: subtitle
    name: "Public Workspaces"
  - type: link
    name: "Postman API"
    url:  "https://www.postman.com/postman/workspace/postman-public-workspace/collection/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a?ctx=documentation"
  - type: link
    name: "Postman Public Workspace"
    url:  "https://www.postman.com/postman/workspace/405e0480-49cf-463b-8052-6c0d05a8e8f3"
  - type: subtitle
    name: "Next Steps"
  - type: link
    name: "Continuous Integration"
    url: "/docs/running-collections/using-newman-cli/continuous-integration/"

warning: false

---

The [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) endpoints enable you to integrate Postman within your development toolchain.

You can add new collections, update existing collections, update environments, and add and run monitors directly through the API. This enables you to programmatically access data stored in your Postman account. You can also [combine the Postman API with Newman](/docs/running-collections/using-newman-cli/continuous-integration/) to integrate Postman with your CI/CD workflow.

You can get started with the API by forking its collection. For more details, see the [Postman API documentation](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a).

You will need an [API key](#generating-a-postman-api-key) to access the Postman API.

> The Postman API is [rate limited](#rate-limits).

## Generating a Postman API key

You need a valid API Key to send requests to the Postman API. To generate an API key:

1. Open your [API Keys page](https://go.postman.co/settings/me/api-keys). Select your avatar in the upper-right corner > **Settings**. Then select **API keys**.

1. If you don't have any keys yet you'll be prompted to create one. Select __Generate API Key__.

   <img alt="Generate API Key" src="https://assets.postman.com/postman-docs/v10/no-api-keys-generate-v10.jpg" width="600px"/>

1. Enter a name for your key and select __Generate API Key__.

1. Copy your key.

    <img src="https://assets.postman.com/postman-docs/v10/copy-your-api-key-v10.jpg" alt="Copy your API key" width="600px"/>

Once you have API keys generated you can manage them within your workspace. Select the more actions icon <img alt="More actions icon" src="https://assets.postman.com/postman-docs/icon-more-actions-v9.jpg#icon" width="16px"> next to a key to regenerate, rename, or delete it.

<img src="https://assets.postman.com/postman-docs/v10/api-keys-regenerate-rename-delete-v10.jpg" alt="View your API keys"/>

Use __API key settings__ to specify expiration periods for your keys.

<img src="https://assets.postman.com/postman-docs/v10/postman-api-key-settings-v10.jpg" width="600px" alt="API key settings"/>

### Authentication

You will need to authenticate your requests to the Postman API by sending your API Key in the `X-Api-Key` header of every request you make.

You can also send the key as an `apikey` URL query parameter. An API key sent as part of the header has a higher priority in case you send the key using both request header and query parameter.

Your API Key provides access to any Postman data you have permissions for.

You can store your API key in a [variable](/docs/sending-requests/variables/). If you name it `postman_api_key`, the Postman API collection will use it automatically

## Rate limits

API access rate limits are applied at a per-key basis in unit time.

Access to the API using a key is limited to **300 requests per minute**. Every API response includes the following set of headers to identify the status of your consumption.

| Header                | Description   |
| ---                   | ---           |
| `X-RateLimit-Limit`   | The maximum number of requests that the consumer is permitted to make per minute. |
| `X-RateLimit-Remaining`| The number of requests remaining in the current rate limit window. |
| `X-RateLimit-Reset`   | The time at which the current rate limit window resets in UTC epoch seconds. |

### Free API calls with your Postman account

Your Postman account gives you a limited number of free Postman API calls per month. You can check your usage limits through the [Postman API](https://www.postman.com/postman/workspace/postman-public-workspace/documentation/12959542-c8142d51-e97c-46b6-bd77-52bb66712c9a) itself or the [resource usage page](https://go.postman.co/billing/add-ons/overview).
