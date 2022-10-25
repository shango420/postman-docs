---
title: 'Validating APIs'
updated: 2022-09-15
contextual_links:
  - type: section
    name: "Prerequisites"
  - type: link
    name: "API development overview"
    url: "/docs/designing-and-developing-your-api/the-api-workflow/"
  - type: link
    name: "Managing and sharing APIs"
    url: "/docs/designing-and-developing-your-api/managing-apis/"
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Postman Intergalactic | Design and Prototype an API in Postman"
    url: "https://youtu.be/r4kb3jOSsmk"
  - type: section
    name: "Next Steps"
  - type: link
    name: "Reports overview"
    url: "/docs/reports/reports-overview/"
---

You can validate your API definitions as you write them in Postman<!--, and validate your elements (collections and tests) against your schema-->. This helps keep your API well-defined<!--and ensures that your elements are in sync with your schema-->. If there is a syntax error in the definition<!--or elements don't match it-->, Postman will present a list of issues that have been found, as well as fixes for these issues. <!--You can then apply fixes to the API elements and revalidate them.-->

## Contents

* [Validating API definitions](#validating-api-definitions)
* [Validating elements](#validating-elements)

## Validating API definitions

> API definition validation is available for OpenAPI 2.0, 3.0, and 3.1 and WSDL 1.1 and 2.0 definitions.

Postman indicates validation syntax errors in your API definition as you [edit your API definition](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/). Errors can include missing required fields, malformed field names, incorrect data types, incorrect nesting, or other API definition validation issues.

The pane below the API definition editing area displays issues. You can hide and show the error view as you work.

Each error will indicate the type, the line on which it occurs, and details of the issue. To get more information as you type, you can also hover over the error inline in the editor.

![API definition error](https://assets.postman.com/postman-docs/v10/schema-validation-error-open-v10.jpg)

> Note that sometimes a single error in your definition will cause more than one issue to appear in the list. As you fix your errors, the validation issues disappear.

Postman will display a warning if there is an issue with your definition JSON or YAML syntax. Look for errors indicated in the editor and hover over them for more detail. For Postman to be able to validate your definition elements, the JSON or YAML must be well-formed.

If there are no errors, Postman will indicate in the lower pane that your API definition is valid.

<!--## Validating elements

> Element validation is available for OpenAPI 3.0 and WSDL 1.1 and 2.0 schemas.

You can compare your API schemas against documentation collections and tests  associated with it to determine if the elements need changes to stay in sync. For example, if you add a new method to your API schema, validation will indicate you need to add the method to your associated documentation. Or when you add a new element to an API, you can run a validation to check the element against the current API schema for issues.

Each element has a **Validate** column next to it. Open your API from the sidebar and locate the element:

* Documentation collections are on the API's overview.
* To view tests, select **Test and Automation**.

To validate a new element, select **Validate** in the validate column next to the element. To re-validate an element, select the status, then select **Validate Again**.

Once the validation is complete, a checkmark will appear next to the element if no issues have been found, or a warning message stating that issues are found. If there are issues, select the status, then select **Review Issues** to review them.

![Test validation](https://assets.postman.com/postman-docs/api-builder-test-validation.jpg)

### Validating requests

If you want your requests to be validated, your collection must be linked to an API.

A collection is linked to an API if you [generate it from a schema](/docs/designing-and-developing-your-api/developing-an-api/defining-an-api/#generating-an-api-definition) or [add it as a relation to an existing API](/docs/designing-and-developing-your-api/developing-an-api/adding-api-elements/#adding-a-collection).

Postman validates a request when it's sent. If there are issues with the request, Postman displays a warning message showing the number of issues next to the name of the request.

## Accessing issues

You can review the issues found during validation to fix issues in your collections or schemas.

If an issue arises when you run a request, select the warning message next to the name of the request (for example, **1 issue**). This will open a panel on the right indicating detailed information about which component of the request is affected and what the issue itself is, and a direct link to the API against which the request is validated. Select the link to open the API within Postman.

> You can select a specific issue to access the relevant request component.

If your issue relates to another element, open your API from the sidebar and locate the element:

* Documentation and collections are on the API's overview.
* To view tests, select **Test and Automation**.

If Postman finds any issues during validation, view them by selecting **Issues found** > **View issues**. This will take you to a page summarizing validation issues.

## Updating API elements

The issue summary indicates the [details of each issue](#understanding-the-issue-summary) and provides fixes you can [automatically apply](#applying-changes-to-api-elements) to the corresponding API element.

### Understanding the issue summary

The validation summary lists all the issues found between the generated collection and the API schema. You can select suggested changes to make to the collection.

![review issues sidebar](https://assets.postman.com/postman-docs/api-builder-validation-sync.jpg)

> You can select the request name or the request element in the right sidebar to go directly to the corresponding issues.

The review contains details on what changes need to be made for the API element to be in sync with the schema again.

### Applying changes to API elements

You can individually select the changes to be applied to the API element as you review them. Select the change you want to apply, then select the checkbox next to it. Repeat the same action for each change you would like to apply.

When you're done selecting the changes to apply, select **Confirm Changes to Collection**.

You can also apply all changes by selecting **Select all changes**, then **Confirm Changes to Collection**.

You can access the updated API element by selecting **View Updated Collection** from the confirmation screen. If you didn't apply all changes, you can also review the remaining issues by selecting **View Remaining Issues**.
-->

## Validating elements

The ability to compare your API definitions against documentation and test collections to determine if the elements need changes to stay in sync is no longer supported in Postman v10. If you've been using this feature, you can provide feedback on [the community forum](https://community.postman.com/t/user-feedback-updating-api-elements/13308).
