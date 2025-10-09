# Deploying this Portfolio to GitHub Pages

This project is a Vite + React + Tailwind portfolio. Below are step-by-step instructions to deploy it to GitHub Pages (github.io) as a project site or a user/organization site.

## Quick overview
- We set `base` in `vite.config.js` from the repository name so assets resolve correctly when served from `https://<user>.github.io/<repo>/`.
- A GitHub Actions workflow (`.github/workflows/gh-pages.yml`) builds the site and deploys the `dist/` folder to the `gh-pages` branch automatically on push to `main` or `master`.

## Option A — Project site (recommended)
1. Create a GitHub repository named `your-username/your-repo` (e.g. `nandakesh/portfolio`).
2. In PowerShell, from the project root run:

```powershell
# initialize git (if not already)
git init
git add .
git commit -m "Initial commit"
git branch -M main
# replace URL with your repo
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

3. Wait for the GitHub Action to run (it triggers on pushes to `main` or `master`). It will build and publish to `gh-pages` branch.
4. In your repository on GitHub, go to Settings → Pages and ensure the source is set to the `gh-pages` branch (the action should do this automatically). Your site will be available at:

```
https://<your-username>.github.io/<your-repo>/
```

## Option B — User/Organization site (username.github.io)
If you want your portfolio at `https://<your-username>.github.io/`:
1. Create a repository named exactly `<your-username>.github.io`.
2. The `vite.config.js` base will detect the repo name and set the base to `/your-username.github.io/` automatically. That's fine — GitHub Pages will serve at the root.
3. Push to `main` the same way and the Action will deploy to `gh-pages`. Note: for user sites, GitHub Pages serves from the repository root, so you can also choose to disable the action and simply push the built files to `main` or enable Pages from `main`.

## Local build & preview
To test locally:

```powershell
npm ci
npm run build
npm run preview
```

The `preview` command serves the built `dist/` locally so you can validate routing and assets.

## Troubleshooting
- If assets 404 after deployment, confirm the GitHub repository name matches the path and the `base` in `vite.config.js` is correct. The workflow sets `GITHUB_REPOSITORY` automatically during CI.
- If the Action fails, check the workflow logs under Actions → Build and Deploy to GitHub Pages.

## Notes
- The workflow uses the default `GITHUB_TOKEN` so no extra secrets are required.
- If you'd prefer `gh-pages` npm package or a different deployment strategy, you can adapt the workflow accordingly.

---
If you'd like, I can:
- create the repo and push these changes (I'll need GitHub access), or
- adjust the workflow to deploy on tags instead of branch pushes.
