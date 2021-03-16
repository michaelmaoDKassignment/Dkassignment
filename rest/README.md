# API usage

---

## Azure App Page:

- https://dkassignment2021.azurewebsites.net/

## List commits for a public repository and group by author

- <span style="color:blue">GET</span> /api/public/commits/{owner}/{repo}
- example: /api/public/commits/Azure/azure-cli

## List commits for a private repository and group by author

- <span style="color:blue">GET</span> /api/private/commits/{owner}/{repo}
- ## example: /api/public/commits/michaelmaoDKassignment/Dkassignment
- You can replace the Github access token through Azure Application Configuration for GITHUBTOKEN.
- Default value is 89e14ca834e176acc322378c6505c2348a60c876
