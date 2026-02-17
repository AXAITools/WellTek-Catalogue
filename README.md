# WellTek Catalogue

A beautiful, wellness-focused product catalogue for wholesale buyers, featuring WellTek's infused products across Beauty & Wellness and Athletic categories.

## Overview

The WellTek Catalogue is a single-page React application that displays product information in an elegant, filterable interface. It includes an admin panel for managing product data with a new export workflow that eliminates dependency on localStorage.

## Features

- **📱 Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **🔍 Advanced Filtering** - Filter by product type, category, material, and more
- **🎨 Beautiful UI** - Clean, professional design with smooth animations
- **✏️ Admin Panel** - Edit products, upload images, and manage catalogue data
- **💾 Export Functionality** - Export updated catalogue as a deployable HTML file
- **🏗️ Build System** - Generate the site from structured JSON data

## New Admin Workflow (v2.0)

### What Changed?

Previously, admin changes were stored in localStorage, meaning:
- ❌ Changes were only visible on the editor's browser
- ❌ Changes were lost when clearing browser data
- ❌ No way to deploy changes to production

Now, with the new export system:
- ✅ Export changes as a complete HTML file
- ✅ Deploy changes by replacing the repository file
- ✅ Changes persist and are visible to all users
- ✅ Version control through Git commits

### Using the Admin Panel

1. **Access Admin Panel**
   - Click "Admin Access" button on the catalogue page
   - Make your desired changes to products

2. **Export Your Changes**
   - Click the **"Export HTML"** button in the admin panel
   - A new `index.html` file will download automatically
   - This file contains all your changes embedded

3. **Deploy to Production**
   - Replace the `index.html` file in the repository with your downloaded file
   - Commit and push the changes to GitHub
   - GitHub Pages will automatically deploy the update

See [ADMIN_WORKFLOW.md](./ADMIN_WORKFLOW.md) for detailed instructions.

## Build System

### Files

- `catalogue-data.json` - Structured product data
- `index.template.html` - HTML template with placeholder for data
- `build.js` - Node.js script to generate the final HTML
- `index.html` - Generated file (served by GitHub Pages)

### Building Manually

If you want to update the catalogue by editing the JSON file directly:

```bash
# Install Node.js (if not already installed)

# Edit catalogue-data.json with your changes

# Run the build script
node build.js

# Or use npm script
npm run build
```

This generates a new `index.html` file with your data embedded.

### Custom Build

You can also specify custom input/output files:

```bash
node build.js my-data.json output.html
```

## File Structure

```
WellTek-Catalogue/
├── index.html              # Main HTML file (generated, served by GitHub Pages)
├── index.template.html     # Template for build system
├── catalogue-data.json     # Product data in JSON format
├── build.js                # Build script
├── package.json            # npm configuration
├── .gitignore              # Git ignore rules
├── ADMIN_WORKFLOW.md       # Detailed admin instructions
├── README.md               # This file
└── *.png, *.jpg            # Product images
```

## Deployment

This site is deployed on GitHub Pages. Any changes to `index.html` in the `main` branch are automatically deployed.

### Deployment Steps

1. Make changes using the admin panel or by editing `catalogue-data.json`
2. Export or build the new `index.html`
3. Commit and push to GitHub:
   ```bash
   git add index.html
   git commit -m "Update product catalogue"
   git push origin main
   ```
4. Wait 1-5 minutes for GitHub Pages to deploy

## Development

### Local Testing

To test the site locally:

```bash
# Start a simple HTTP server
python3 -m http.server 8080

# Or use Node.js
npx http-server -p 8080

# Open http://localhost:8080 in your browser
```

### Making Changes

**Option 1: Via Admin Panel (Recommended)**
- Use the admin panel for visual editing
- Export the HTML when done
- Deploy to GitHub

**Option 2: Via JSON File**
- Edit `catalogue-data.json` directly
- Run `node build.js` to generate HTML
- Test locally, then deploy

## Product Data Structure

Each product in `catalogue-data.json` has the following fields:

```json
{
  "sku": "Product SKU code",
  "name": "Product Name",
  "material": "Material composition",
  "colours": "Available colors",
  "size": "Size options",
  "unit": "Piece/Pair/Set",
  "image": "image-filename.jpg",
  "main_category": "Primary category",
  "secondary_category": "Secondary category",
  "infusion": "Wellness-Infused",
  "product_type": "Product type"
}
```

## Technologies Used

- **React 18** (via CDN) - UI library
- **Babel Standalone** - JSX transformation in browser
- **Node.js** - Build system
- **GitHub Pages** - Hosting
- **Python/HTTP Server** - Local development

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Admin Panel Issues

**Export button doesn't download:**
- Check browser's pop-up blocker
- Allow downloads from the site
- Try a different browser

**Changes not appearing:**
- Remember to export the HTML
- Verify you deployed the exported file
- Clear browser cache

### Build Issues

**Build script fails:**
```bash
# Verify Node.js is installed
node --version

# Check file permissions
chmod +x build.js

# Verify JSON is valid
node -e "JSON.parse(require('fs').readFileSync('catalogue-data.json'))"
```

### Deployment Issues

**Changes not showing on live site:**
- Confirm changes are committed to `main` branch
- Wait a few minutes for GitHub Pages
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check GitHub Actions for deployment status

## Future Enhancements

Potential improvements for future versions:

- [ ] GitHub Actions workflow for automated builds
- [ ] Backend API for real-time updates
- [ ] Multi-user admin with authentication
- [ ] Product image management system
- [ ] Version history and rollback
- [ ] Import/export to CSV or Excel
- [ ] Automated testing suite

## Contributing

To contribute to this project:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

Copyright © 2026 WellTek. All rights reserved.

## Support

For technical support or questions:
- Create an issue in the GitHub repository
- Refer to [ADMIN_WORKFLOW.md](./ADMIN_WORKFLOW.md) for detailed usage instructions

---

**Version 2.0** - Export-based admin workflow
