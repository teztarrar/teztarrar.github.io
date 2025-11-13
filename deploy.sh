#!/bin/bash

# Deploy script for Bentolio Portfolio
echo "🚀 Starting deployment process..."

# Add all changes
echo "📦 Staging all changes..."
git add -A

# Commit changes
echo "💾 Committing changes..."
git commit -m "Add GitHub Actions workflow for GitHub Pages deployment

- Added comprehensive bento-grid portfolio layout for Vishu Dev Singh
- Integrated images (avatar, leaf, work, coffee)
- Added 24 grid sections showcasing skills, experience, projects, certifications
- Created GitHub Actions workflow for automatic deployment to GitHub Pages
- Updated next.config.mjs for static export support
- Added CI/CD pipeline for automated builds and deployments"

# Push to main branch
echo "📤 Pushing to remote repository..."
git push origin main

echo "✅ Deployment complete!"
echo ""
echo "Next steps:"
echo "1. Go to your repository Settings > Pages"
echo "2. Under 'Source', select 'GitHub Actions'"
echo "3. The workflow will automatically deploy on every push to main branch"
echo "4. Your site will be available at: https://[username].github.io/[repository-name]/"
