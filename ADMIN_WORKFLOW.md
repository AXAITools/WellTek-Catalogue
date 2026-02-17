# Admin Panel Workflow Guide

## Overview

The WellTek Catalogue admin panel no longer relies on localStorage for persistent changes. Instead, it provides a workflow for exporting an updated HTML file that can be committed to the repository to update the live site.

## How It Works

### 1. Making Changes in the Admin Panel

1. Open the WellTek Catalogue website
2. Click the "Admin Access" button to open the admin panel
3. Make your desired changes:
   - Edit product details (SKU, name, material, colors, size, etc.)
   - Add or remove products
   - Upload custom product images
   - Switch between sheets (Wellness Infused Catalogue and Athletic Catalogue)
4. Changes are still auto-saved to your browser's localStorage for convenience during your editing session

### 2. Exporting Changes

Once you're satisfied with your changes:

1. Click the **"Export HTML"** button in the admin panel
2. A new `index.html` file will be downloaded to your computer
3. This file contains all your changes embedded directly in the HTML

### 3. Deploying Changes to the Live Site

#### Manual Deployment

1. Navigate to your local clone of the repository
2. Replace the existing `index.html` file with the downloaded one
3. Commit and push the changes:
   ```bash
   git add index.html
   git commit -m "Update product catalogue"
   git push origin main
   ```
4. GitHub Pages will automatically deploy the updated site within a few minutes

#### Using the Build Script (Alternative Method)

If you prefer to work with the data file directly:

1. Export your data by modifying `catalogue-data.json` with the updated product information
2. Run the build script:
   ```bash
   node build.js
   ```
3. This generates a new `index.html` file with the updated data embedded
4. Commit and push as described above

## File Structure

- **`index.html`** - The main HTML file served by GitHub Pages (generated file)
- **`index.template.html`** - Template file used by the build script
- **`catalogue-data.json`** - Structured product data in JSON format
- **`build.js`** - Build script that embeds data into the template
- **`ADMIN_WORKFLOW.md`** - This documentation file

## Important Notes

### localStorage Behavior

- localStorage is still used during your editing session for convenience
- Changes in localStorage are NOT automatically reflected on the live site
- You MUST export and deploy the HTML file for changes to appear on the live site
- Clearing your browser data will only affect your local editing session, not the live site

### Export Button vs. localStorage

The key difference from the old system:

- **Old System**: Changes saved to localStorage, only visible on your browser
- **New System**: Export button creates a deployable HTML file for all visitors

### Best Practices

1. **Test your changes** locally before deploying to production
2. **Keep backups** of previous index.html versions
3. **Commit frequently** with descriptive commit messages
4. **Review the exported file** before deploying to ensure all changes are correct

## Troubleshooting

### Export button doesn't work
- Check your browser's console for error messages
- Ensure you have enabled pop-ups for the site (some browsers block downloads)
- Try a different browser if issues persist

### Changes not appearing on live site
- Confirm you replaced the index.html file in the repository
- Verify your commit was pushed to GitHub
- Wait a few minutes for GitHub Pages to rebuild (usually 1-5 minutes)
- Clear your browser cache to see the latest version

### Build script fails
- Ensure Node.js is installed (`node --version`)
- Verify catalogue-data.json is valid JSON
- Check that index.template.html exists in the same directory

## Future Enhancements

Potential improvements that could be added:

1. **Automated GitHub Actions workflow** - Automatically commit and push changes when export is triggered
2. **API integration** - Backend service to handle updates without manual file replacement
3. **Version control UI** - Track history of changes within the admin panel
4. **Multi-user support** - Authentication and authorization for different admin roles

## Support

For issues or questions about the admin workflow, please create an issue in the GitHub repository.
