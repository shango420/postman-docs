---
title: "Configuring API Security rules"
updated: 2022-09-15
search_keyword: "api security, security warnings, schema validation, security validation, api security audit, api security scan, api schema vulnerabilities, security audit"
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Blog Posts"
  - type: link
    name: "Introducing API Security in Postman v10"
    url: "https://blog.postman.com/introducing-api-security-in-postman-v10/"
---

> [Configurable security rules are only available to Postman Enterprise teams.](https://www.postman.com/pricing) If you don't have an Enterprise account, you'll be able to see the API Security page, but you won't be able to turn rules on or off or add new rules.

You can customize the API Security rules that Postman applies to your [API definition](/docs/api-governance/api-definition/api-definition-warnings/) and [requests](/docs/api-governance/api-testing/api-testing-warnings/). Adhering to these API Security rules enables you keep your API secure and consistent.

<img alt="API Security configuration page" src="https://assets.postman.com/postman-docs/v10/api-security-configuration-home-v10.jpg" width="900px"/>

## Contents

* [Configuring rules for API definitions](#configuring-rules-for-api-definitions)
    * [Turning configured rules on and off](#turning-configured-rules-on-and-off)
    * [Adding custom rules](#adding-custom-rules)
    * [Removing custom rules](#removing-custom-rules)
* [Configuring rules for requests](#configuring-rules-for-requests)
    * [Turning configured rules on and off](#turning-configured-rules-on-and-off)

## Configuring rules for API definitions

Postman applies security rules to your [API definition](/docs/api-governance/api-definition/api-definition-warnings/) and shows rule violations that might impact your definition's security posture. In addition to the rules turned on by default in Postman, you can [create and apply your own custom rules](#adding-custom-rules).

To access the configuration page for API definitions:

1. Go to the [Postman home screen](https://go.postman.co/).
1. Select **API Security** from the team information panel.
1. Make sure that **API Definitions** is selected.

### Turning configured rules on and off

> Only Team Admins with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can turn configured API Security rules off and on.

Your team can turn individual security rules on or off to meet your development needs:

* To turn a security rule on, select the toggle next to the rule name. You and your team members will see violations for this rule in your API's definition.
* To turn a security rule off, select the toggle next to the rule name. You and your team members won't see violations for this rule in your API's definition.

<img alt="Turn individual rules on and off" src="https://assets.postman.com/postman-docs/v10/api-security-configuration-turn-rules-off-v10.jpg" width="800px"/>

### Adding custom rules

> Only Team Admins with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can create custom API Security rules.

You can create new custom security rules that Postman can use to evaluate your API's definition.

1. Select **API Definitions**.
1. Select **Create New Rule**.
1. Define the rule in the editor. It must adhere to [custom rule guidelines](/docs/api-governance/configurable-rules/spectral/).
1. The rule must be valid YAML or JSON. Use the dropdown list to choose the correct syntax.
1. Select OpenAPI 2.0 or OpenAPI 3.0 to choose which specification your new rule is valid for.
1. Select **Create**.
    <img alt="Create a custom API Security rule" src="https://assets.postman.com/postman-docs/v10/api-security-create-new-custom-rule-v10.jpg" width="800px"/>
1. Find your new rule under **Custom Rules** and turn it on.

You can also select **Upload file(s)** to upload a new rule in valid YAML or JSON format.

> You can't create a custom rule that duplicates an existing rule.

### Removing custom rules

> You must be a Team Admin with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) to delete a custom security rule.

To delete a custom rule, select the delete icon <img alt="Delete icon" src="https://assets.postman.com/postman-docs/icon-delete-v9.jpg#icon" width="12px"> next to its name. If you delete a custom rule, you'll need to add it back into Postman using **Create New Rule** if you want to use it again.

## Configuring rules for requests

> Only Team Admins with a [Developer role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can turn configured API Security rules off and on.

Postman applies security rules configured for your [API requests](/docs/api-governance/api-testing/api-testing-warnings/) when you send requests to any API using either the Postman web app or the Postman desktop app.

To access the configuration page for requests:

1. Go to the [Postman home screen](https://go.postman.co/).
1. Select **API Security** from the team information panel.
1. Select **Requests**.

### Turning configured rules on and off

Your team can turn individual security rules on or off to meet your development needs:

* To turn a security rule on, select the toggle next to the rule name. You and your team members will see violations for this rule in your API's definition.
* To turn a security rule off, select the toggle next to the rule name. You and your team members won't see violations for this rule in your API's definition.

<img alt="Turn individual rules on and off" src="https://assets.postman.com/postman-docs/v10/api-security-configuration-requests-turn-rules-off-v10.jpg" width="800px"/>
