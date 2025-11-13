# Deployment Instructions

## GitHub Actions Workflow Setup

The GitHub Actions workflow has been configured to automatically deploy your Next.js portfolio to GitHub Pages.

## Steps to Deploy:

### 1. Commit and Push Changes

Run these commands in your terminal:

```bash
# Stage all changes
git add -A

# Commit with message
git commit -m "Add GitHub Actions workflow for GitHub Pages deployment

- Added comprehensive bento-grid portfolio layout for Vishu Dev Singh
- Integrated images (avatar, leaf, work, coffee)
- Added 24 grid sections showcasing skills, experience, projects, certifications
- Created GitHub Actions workflow for automatic deployment to GitHub Pages
- Updated next.config.mjs for static export support
- Added CI/CD pipeline for automated builds and deployments"

# Push to main branch
git push origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on **Settings** tab
3. Scroll down to **Pages** section (in the left sidebar)
4. Under **Source**, select **GitHub Actions** (not "Deploy from a branch")
5. Save the settings

### 3. Verify Deployment

1. Go to the **Actions** tab in your repository
2. You should see the workflow running: "Deploy Next.js site to Pages"
3. Wait for it to complete (usually takes 2-3 minutes)
4. Once complete, your site will be available at:
   - `https://[your-username].github.io/[repository-name]/`

### 4. Automatic Deployments

From now on, every time you push to the `main` branch, the workflow will automatically:
- Build your Next.js application
- Deploy it to GitHub Pages
- Make it live within a few minutes

## Workflow Files Created:

- `.github/workflows/deploy-pages.yml` - Main deployment workflow
- `.github/workflows/ci.yml` - CI/CD pipeline for testing
- `.github/workflows/deploy.yml` - Alternative Vercel deployment (optional)

## Configuration:

The `next.config.mjs` has been updated to:
- Export static files (`output: 'export'`)
- Enable unoptimized images for GitHub Pages
- Add trailing slashes for better compatibility

## Troubleshooting:

If deployment fails:
1. Check the **Actions** tab for error messages
2. Ensure `next.config.mjs` has `output: 'export'`
3. Verify all dependencies are in `package.json`
4. Make sure GitHub Pages is set to use "GitHub Actions" as source

## Quick Deploy Script:

You can also use the provided script:
```bash
chmod +x deploy.sh
./deploy.sh
```
