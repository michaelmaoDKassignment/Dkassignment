const { response } = require("express");
const express = require("express");
const app = express();
const fetch = require("node-fetch");

const githubToken = process.env.GITHUBTOKEN || "Your Github Toekn";
const currentDate = new Date().toISOString().slice(0, 10);

app.get("/", (req, res) => {
  res.send("hello");
});

// Get Public repo commits group by author
app.get("/api/public/commits/:owner/:repo", async (req, res) => {
  const repoOwner = req.params.owner;
  const repoName = req.params.repo;
  const headers = {
    Accept: "application/vnd.github.cloak-preview",
  };
  const url = `https://api.github.com/search/commits?q=repo:${repoOwner}/${repoName} author-date:2000-01-01..${currentDate}`;
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const result = await response.json();
  const commitsResults = helper_author_commits(result);
  res.send(commitsResults);
});

// Get private repo commits group by author
app.get("/api/private/commits/:owner/:repo", async (req, res) => {
  const repoOwner = req.params.owner;
  const repoName = req.params.repo;
  const headers = {
    Accept: "application/vnd.github.cloak-preview",
    Authorization: `Token ${githubToken}`,
  };
  const url = `https://api.github.com/search/commits?q=repo:${repoOwner}/${repoName} author-date:2000-01-01..${currentDate}`;
  const response = await fetch(url, {
    method: "GET",
    headers: headers,
  });
  const result = await response.json();
  const commitsResults = helper_author_commits(result);
  res.send(commitsResults);
});

// A helper function to refomat auth commits
const helper_author_commits = (result) => {
  let temp = {};
  result.items.forEach((item) => {
    let tempKey = item.commit.author.name;
    if (!temp.hasOwnProperty(tempKey)) {
      temp[tempKey] = {
        autherName: tempKey,
        commits: [],
      };
    }
    temp[tempKey].commits.push(item.commit);
  });
  let Results = Object.keys(temp).map(function (key) {
    return temp[key];
  });
  return Results;
};

// Env and Port
const PORT = process.env.PORT || 5000;
app.listen(PORT);
