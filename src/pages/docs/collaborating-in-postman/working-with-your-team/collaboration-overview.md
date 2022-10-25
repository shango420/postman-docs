---
title: "Collaboration overview"
order: 71
updated: 2022-07-19
page_id: "collaboration_overview"
warning: false
contextual_links:
  - type: section
    name: "Additional Resources"
  - type: subtitle
    name: "Videos"
  - type: link
    name: "Working With Your Team in Postman | The Exploratory"
    url: "https://youtu.be/5lscUV-Exac"
  - type: link
    name: "Postman Intergalactic | Working with Your Team in Postman"
    url: "https://youtu.be/OifhKJCd_-M"
  - type: dynamic_blog
    name: "Blog Posts"
    blog_tag: "collaboration"

---

> Postman Free lets teams of up to three work together at no cost. To collaborate with more team members, features, and increased usage limits, see [Plans and Pricing](https://www.postman.com/pricing/).

Postman provides a variety of tools to enable and enhance collaboration within your team. You can ease the onboarding process by enabling [team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/), allowing users in your organization to request to join your Postman team. You can also create [team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/), where team members can share their work and collaborate on API projects. Users can [discuss their work](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/) directly in Postman by commenting on collections and APIs, including on specific requests, versions, and inline on schemas and scripts.

To get the most out of Postman's collaboration features, [create](#creating-a-team) or [join](#joining-a-team) a team. You can be a member of up to five Postman teams, regardless of if they're Postman Free, Basic, Professional, or Enterprise.

> Note that if an Enterprise team within your organization implements [domain capture](/docs/administration/managing-your-team/configuring-domain-capture/), you won't be able to remain on or join extra Postman teams with your captured accounts.

## Contents

* [Creating a team](#creating-a-team)
* [Joining a team](#joining-a-team)
* [Switching between teams](#switching-between-teams)
* [Leaving a team](#leaving-a-team)
* [Team usage limits](#team-usage-limits)
* [Next steps](#next-steps)

## Creating a team

To create a Postman team:

1. Select your avatar in the upper-right corner > **Create a team**. If you're already a member of a Postman team, select **+ Create Team**.
2. Select **Set Up Your Team**.
3. (Optional) Provide a team name, URL, and logo, and decide if you'd like to turn on [team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/).
4. Select **Continue**.
5. (Optional) Invite collaborators to your team by email or share an invite link.
6. Select **Continue** or **Maybe Later**.

[Postman Free](https://www.postman.com/pricing/) lets teams of up to three work together at no cost. If you'd like to collaborate with more team members, features, and increased usage limits, you can [upgrade](/docs/administration/billing/#changing-your-plan) to a Basic, Professional, or Enterprise plan. To do so, select **Upgrade** in the upper-right corner.

If you're an individual Postman user and create a Postman team through the flow mentioned above, you can choose to transfer your personal workspaces and the data within them to the team or keep them separate. When you leave a team, your personal workspaces within the team and their data will remain with the team and no longer be accessible to you.

> For more information on setting up Postman within your organization, check out the [Onboarding checklist](/docs/administration/onboarding-checklist/).

## Joining a team

There are several ways you can join a Postman team:

* **Email invite** - Select **Join Team** in the email invite. Create a new Postman account or sign in to an existing one. After signing in, you'll be redirected to your new team.
* **Invite link** - Open the link and select **Accept Invite**. Create a new Postman account or sign in to an existing one. After signing in, you'll be redirected to your new team.
* **Team discovery** - When first joining Postman, you can [find teams to join within your organization](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/#finding-teams-within-your-organization).
* **SSO automatic provisioning** - If a team in your organization has [automatic provisioning](/docs/administration/sso/admin-sso/#automatically-adding-new-users) enabled in their SSO configuration, you can join the team by [signing in to Postman with SSO](/docs/administration/sso/user-sso/).
* **SCIM provisioning** - If your organization has enabled [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/), you may be added to your organization's Postman team and receive an email invite. Select **Join Team** in the email and [sign in to Postman with SSO](/docs/administration/sso/user-sso/).
* **Domain capture** - If your organization has configured [domain capture](/docs/administration/managing-your-team/configuring-domain-capture/) and you use or create an account associated with a verified domain, Postman will [notify](/docs/administration/managing-your-team/configuring-domain-capture/#user-experience) you when you next sign in that your account is managed by your organization.

You can be a member of up to five Postman teams, regardless of if they're Postman Free, Basic, Professional, or Enterprise. However, if an Enterprise team within your organization implements domain capture, you won't be able to remain on or join extra Postman teams with your captured accounts.

If you're an individual Postman user and join a team, you can choose to transfer your personal workspaces and the data within them to the team or keep them separate. In certain cases, your personal workspaces and the data within them automatically transfer when you join a team:

* If you [request to join a team](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/#finding-teams-within-your-organization) and are approved by a Team Admin.
* If the team has [SCIM provisioning](/docs/administration/scim-provisioning/scim-provisioning-overview/) enabled.
* If the team has [domain capture](/docs/administration/managing-your-team/configuring-domain-capture/) enabled.

When you leave a team, your personal workspaces within the team and their data will remain with the team and no longer be accessible to you.

### Switching between teams

You can sign in to multiple teams at the same time with your Postman account. To switch between teams, select your avatar in the top right. Select a team to open or select **+ Create Team** to create a new team.

<img alt="Switch teams" src="https://assets.postman.com/postman-docs/team-account-switcher-v9.2.1.jpg" width="350px">

## Leaving a team

You can leave a Postman team by selecting your avatar in the top right, then **Settings**. Select **Teams** on the left.

<img src="https://assets.postman.com/postman-docs/dashboard-teams-leave-team-v9.2.jpg" alt="Leave team"/>

Select **Leave Team** to the right of a team to leave it. If you're a member of an Enterprise team that has [SCIM configured](/docs/administration/scim-provisioning/scim-provisioning-overview/), you must contact a Team Admin to remove you from the team.

When you leave a team, you no longer have access to the team's workspaces, including personal workspaces, or any of the elements in them. You must reassign your personal workspaces to a remaining team member before leaving.

<img src="https://assets.postman.com/postman-docs/leave-team-confirmation-v10.jpg" alt="Leave and delete team" width="400px"/>

If you're the last member to leave a team, the team will be deleted. You will no longer have access to the team's workspaces, including personal workspaces, or any elements in them. [Export your Postman data](/docs/getting-started/importing-and-exporting-data/#exporting-postman-data) prior to leaving the team to ensure it stays with you.

## Team usage limits

Your team's usage limits are based on your [plan type](https://www.postman.com/pricing/) and any [add-ons](/docs/administration/billing/#purchasing-add-ons) your team has purchased.

Open the Postman usage menu to review your team's limits for custom domains, image and file storage, and integrations.

* **Free users** - In the Postman header, select the menu next to **Upgrade**.
* **Paid users** - In the Postman header, select **Team**.

Select **Resource Usage** to view your usage period and detailed usage of mock servers, monitoring, custom domains, image and file storage, the Postman API, serverless requests, integrations, and the Postman Cloud Agent.

<img src="https://assets.postman.com/postman-docs/team-dropdown-resource-usage-v9-25.jpg" alt="Team resource usage information" width="342px"/>

Team members with the [Billing role](/docs/collaborating-in-postman/roles-and-permissions/#team-roles) can [purchase extra blocks](/docs/administration/billing/#purchasing-add-ons) of monitoring requests, mock server calls, and custom domains in the [billing dashboard](http://go.postman.co/billing).

## Next steps

To get the most out of Postman's collaboration features, check out the following resources:

* [Enabling team discovery](/docs/collaborating-in-postman/working-with-your-team/enabling-team-discovery/)
* [Collaborating in team workspaces](/docs/collaborating-in-postman/working-with-your-team/collaborating-in-team-workspaces/)
* [Discussing your work](/docs/collaborating-in-postman/working-with-your-team/discussing-your-work/)
