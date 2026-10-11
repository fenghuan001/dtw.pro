# Anna Du — Portfolio

Static personal portfolio built with HTML, CSS and JavaScript. Current source: `portfolio-v1`.

Public URL: https://fenghuan001.github.io/dtw.pro/

## Deployment

The publishable files are in `website/`. No package installation, build command,
database, environment variables, or custom domain is required.

In the GitHub repository, select **Settings → Pages → Source → GitHub Actions**.
The workflow `.github/workflows/deploy.yml` publishes only `website/` after a push
to `main` or `master`. It can also be started manually from the Actions tab.

## Updates

1. Edit the files in `website/`.
2. Replace `website/assets/du-tingwei-anna-cv.pdf` to update the CV, keeping the filename.
3. Commit and push the changes to GitHub.
4. Wait for the deployment workflow to succeed.
5. Open the public URL and check the changed pages and CV download.

For a browser-only update, open the relevant folder on GitHub, select
**Add file → Upload files**, upload the replacement file with the same name,
and select **Commit changes** on `main`. Put images in `website/assets/` and
the CV in `website/assets/`. Check the **Actions** tab for a successful deployment.

When adding a page, also update `website/sitemap.xml`.
Keep image and page links relative so they work under `/dtw.pro/`.

The original project files have not been modified.
Future website updates should use this deployment copy to preserve the CV links
and deployment settings.

Only materials approved for public release should be uploaded. Original working
assets, credentials and `.env` files are excluded from the deployment copy.

## Current validation

The eight HTML pages have no missing local `src` or `href` file targets.
Four CV download links point to the included PDF. The social preview URLs, canonical
URLs, sitemap and robots file use the live GitHub Pages project URL.

Published and checked on October 11, 2026:

- The deployment workflow completed successfully in 25 seconds.
- All eight pages opened through the public HTTPS URL.
- All sixteen page images loaded successfully.
- Desktop homepage and 390-pixel mobile layouts were inspected. No horizontal
  overflow was found on the eight pages at that mobile width.
- The new Resume page refreshed successfully without a 404.
- The CV was downloaded through the new Resume page link. Its SHA-256 hash matched
  the original 124,657-byte PDF.
- The project dropdown opened successfully. Arrow Down focused the first
  project, and Escape closed the dropdown. Email links point to the displayed
  Outlook address; no test email was sent.
- No browser errors or warnings were captured in the checked pages.

The site currently has no LinkedIn link. Browser checks do not replace a full
accessibility audit or tests on physical mobile devices. No Lighthouse score
or worldwide latency guarantee is claimed.
