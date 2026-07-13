# Kurt Lawrence J. Tolentino — Portfolio

A single-page portfolio built with React + Vite + Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Before deploying — edit your info

Open `src/Portfolio.jsx` and update the `PROFILE` and `PROJECTS` objects near
the top of the file with your real email, GitHub/LinkedIn URLs, resume link,
and project repo/demo links. Everything on the page pulls from those two
objects.

## Deploy to GitHub Pages (automatic)

This repo already includes a GitHub Actions workflow
(`.github/workflows/deploy.yml`) that builds and deploys the site every time
you push to `main`. Steps:

1. **Create a new repo on GitHub** (e.g. `kurt-portfolio`) and push this
   project to it:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. **Turn on Pages for this repo:**
   - Go to your repo on GitHub → **Settings** → **Pages**
   - Under "Build and deployment", set **Source** to **GitHub Actions**

3. That's it. The workflow will run automatically, and after a minute or two
   your site will be live at:

   ```
   https://<your-username>.github.io/<your-repo>/
   ```

   You can watch the deployment progress under the **Actions** tab of your
   repo. Every future push to `main` redeploys automatically.

## Deploy manually instead (no GitHub Actions)

If you'd rather not use the included workflow:

```bash
npm run build
```

This outputs a static site to the `dist/` folder. You can upload that
folder's contents to any static host (GitHub Pages via the `gh-pages`
branch, Netlify, Vercel, etc).
