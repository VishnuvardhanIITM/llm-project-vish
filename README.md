# LLM Code Deployment API

This project is a minimal Node.js API built with Express that serves as an endpoint for the LLM Code Deployment project. It receives task details, validates a secret key, and returns a JSON response with deployment information.

## Prerequisites

- [Node.js](https://nodejs.org/) (v18.x or later)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- [Git](https://git-scm.com/)

## Running Locally

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <repository-name>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the server:**
    ```bash
    npm start
    ```

    The API will be running at `http://localhost:3000`.

## Initializing a GitHub Repository

1.  **Initialize a new Git repository locally:**
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  **Create a new repository on GitHub.**

3.  **Link the local repository to the remote one and push your code:**
    ```bash
    git remote add origin https://github.com/<yourusername>/<your-repo-name>.git
    git branch -M main
    git push -u origin main
    ```
    Replace `<yourusername>` and `<your-repo-name>` with your actual GitHub username and repository name.

## Deploying to Vercel

1.  **Install the Vercel CLI:**
    ```bash
    npm install -g vercel
    ```

2.  **Deploy the project:**
    Run the following command in your project's root directory:
    ```bash
    vercel
    ```

3.  **Follow the on-screen prompts** to log in, link the project, and deploy. Vercel will automatically detect the project type and use the `web: node app.js` command from the `Procfile`.

4.  Once deployed, Vercel will provide you with a public URL for your API (e.g., `https://<your-project-name>.vercel.app`).

## Testing the API

You can test the API using `curl` or a tool like Postman.

### `curl` Command Example

Replace `<your-vercel-url>` with the URL provided by Vercel after deployment.

```bash
curl -X POST https://<your-vercel-url>/api/receive \
-H "Content-Type: application/json" \
-d '{
  "secret": "MY_TEST_SECRET",
  "email": "example@mail.com",
  "task": "demo-task",
  "round": "1",
  "nonce": "abc123",
  "brief": "Test deployment"
}'
```

### Expected Output

The API will respond with a JSON object similar to this:

```json
{
  "status": "OK",
  "email": "example@mail.com",
  "task": "demo-task",
  "round": "1",
  "nonce": "abc123",
  "repo_url": "https://github.com/<yourusername>/demo-task",
  "commit_sha": "a1b2c3d",
  "pages_url": "https://<yourusername>.github.io/demo-task/"
}
```
*(Note: The `commit_sha` will be a randomly generated 7-character string.)*