const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const port = process.env.PORT || 3000;

const SECRET = "vviitm25007gravity";

app.use(express.json());

app.post('/api/receive', (req, res) => {
  const { secret, email, task, round, nonce, brief } = req.body;

  if (secret !== SECRET) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  console.log("Received task:", task);

  const commit_sha = uuidv4().substring(0, 7);
  const repo_url = `https://github.com/<yourusername>/${task}`;
  const pages_url = `https://<yourusername>.github.io/${task}/`;

  res.status(200).json({
    status: "OK",
    email,
    task,
    round,
    nonce,
    repo_url,
    commit_sha,
    pages_url
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});