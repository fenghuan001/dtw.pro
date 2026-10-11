# Anna Du — Portfolio

Static personal portfolio built with HTML, CSS and JavaScript.

Planned public URL: https://fenghuan001.github.io/dtw.pro/dtw.pro/

## Deployment

The publishable files are in `website/`. No package installation, build command,
database, environment variables, or custom domain is required.

In the GitHub repository, select **Settings → Pages → Source → GitHub Actions**.
The workflow `.github/workflows/deploy.yml` publishes only `website/` after a push
to `main` or `master`. It can also be started manually from the Actions tab.

## Updates

1. Edit the files in `website/`.
2. Replace `website/anna-du-cv.pdf` to update the CV, keeping the filename.
3. Commit and push the changes to GitHub.
4. Wait for the deployment workflow to succeed.
5. Open the public URL and check the changed pages and CV download.

When adding a page, also update `website/sitemap.xml`.
Keep image and page links relative so they work under `/dtw.pro/`.

The original project files have not been modified.
Future website updates should use this deployment copy to preserve the CV links
and deployment settings.

Only materials approved for public release should be uploaded. Original working
assets, credentials and `.env` files are excluded from the deployment copy.

## Current validation

The seven HTML pages have no missing local `src` or `href` file targets.
Nine CV links point to the included PDF. The social preview URLs, canonical
URLs, sitemap and robots file use the planned GitHub Pages project URL.

The site has not yet been published. Browser layout, public HTTPS, live page
refreshes and CV download still require verification after deployment.
