# Quick Start Guide

Get started with the WellTek Catalogue admin system in 3 easy steps!

## For Admins: Updating the Catalogue

### Option 1: Using the Admin Panel (Recommended)

**Step 1: Make Your Changes**
1. Open https://your-catalogue-site.github.io
2. Click the "Admin Access" button
3. Edit products, add new ones, or upload images
4. Your changes are auto-saved to your browser

**Step 2: Export**
1. Click the green **"Export HTML"** button
2. A file named `index.html` will download
3. Save it somewhere safe

**Step 3: Deploy**
1. Go to your GitHub repository
2. Upload the new `index.html` file (replace the old one)
3. Commit with message: "Update catalogue"
4. Wait 1-2 minutes for GitHub Pages to deploy
5. Done! Your changes are now live! 🎉

### Option 2: Editing JSON Directly

**Step 1: Edit Data**
1. Clone the repository or edit on GitHub
2. Open `catalogue-data.json`
3. Make your changes (follow the existing structure)
4. Save the file

**Step 2: Build**
```bash
# Install Node.js first if needed
node build.js
```

**Step 3: Deploy**
```bash
git add index.html
git commit -m "Update catalogue data"
git push
```

## For Developers: Setting Up

### Initial Setup

```bash
# Clone the repository
git clone https://github.com/your-org/WellTek-Catalogue.git
cd WellTek-Catalogue

# Verify Node.js is installed
node --version
# Should show v16 or higher

# Test the build
npm run build
# or
node build.js
```

### Local Development

```bash
# Start a local server
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

### Making Changes

```bash
# 1. Edit files
vim catalogue-data.json

# 2. Build
npm run build

# 3. Test locally
python3 -m http.server 8080

# 4. Commit
git add .
git commit -m "Your message"
git push
```

## Understanding the Files

### 📄 Main Files

| File | Purpose | When to Edit |
|------|---------|--------------|
| `index.html` | Live site file | ❌ Generated, don't edit directly |
| `catalogue-data.json` | Product data | ✅ Edit to change products |
| `index.template.html` | HTML template | ⚠️ Only for UI changes |
| `build.js` | Build script | ⚠️ Only for build logic |

### 📚 Documentation

| File | Content |
|------|---------|
| `README.md` | Complete project documentation |
| `ADMIN_WORKFLOW.md` | Detailed admin instructions |
| `GITHUB_ACTIONS_GUIDE.md` | Automation setup (optional) |
| `QUICK_START.md` | This file! |

## Common Tasks

### Adding a New Product

**Via Admin Panel:**
1. Click "Admin Access"
2. Click "Add Product"
3. Fill in the details
4. Click "Save"
5. Click "Export HTML"
6. Deploy the file

**Via JSON:**
```json
{
  "sku": "NEW-001",
  "name": "New Product Name",
  "material": "Material description",
  "colours": "Available colors",
  "size": "Size options",
  "unit": "Piece",
  "image": "product-image.jpg",
  "main_category": "Category",
  "secondary_category": "Sub-category",
  "infusion": "Wellness-Infused",
  "product_type": "Type"
}
```

### Changing Product Details

**Via Admin Panel:**
1. Click "Admin Access"
2. Find the product in the list
3. Click "Edit"
4. Update the fields
5. Click "Save"
6. Export and deploy

**Via JSON:**
- Find the product by SKU in `catalogue-data.json`
- Edit the fields directly
- Run `node build.js`
- Commit and push

### Uploading Product Images

1. Add image file to repository root
2. In admin panel, edit the product
3. Enter the image filename in the "Image" field
4. Or reference it in the JSON: `"image": "my-image.jpg"`

## Troubleshooting

### "Export button doesn't work"
- **Solution**: Check browser's pop-up blocker
- Allow downloads from your site

### "Changes not showing on live site"
- **Solution**: Make sure you:
  1. Exported the HTML
  2. Uploaded to GitHub
  3. Committed the changes
  4. Waited 1-2 minutes for deployment

### "Build script fails"
```bash
# Check Node.js version
node --version

# Should be v16+
# Update if needed from nodejs.org
```

### "JSON is invalid"
```bash
# Validate JSON
node -e "JSON.parse(require('fs').readFileSync('catalogue-data.json'))"

# Use online validator: jsonlint.com
```

## Tips & Tricks

### 🎯 Best Practices

✅ **DO:**
- Make small, incremental changes
- Test locally before deploying
- Write clear commit messages
- Keep backups of important data

❌ **DON'T:**
- Edit `index.html` directly (it's generated)
- Forget to export after admin changes
- Delete products without backing up
- Push untested changes to production

### ⚡ Pro Tips

1. **Use Git branches** for major changes
2. **Test exports locally** before pushing
3. **Keep JSON formatted** for readability
4. **Document changes** in commit messages
5. **Review diffs** before committing

## Getting Help

### Resources

- 📖 Full docs: [README.md](./README.md)
- 🎓 Admin guide: [ADMIN_WORKFLOW.md](./ADMIN_WORKFLOW.md)
- 🤖 Automation: [GITHUB_ACTIONS_GUIDE.md](./GITHUB_ACTIONS_GUIDE.md)

### Support

- 🐛 **Bug Reports**: Create a GitHub issue
- 💡 **Feature Requests**: Create a GitHub issue
- 📧 **Questions**: Contact the development team

## What's Next?

After you're comfortable with the basics:

1. ✅ Explore the admin panel features
2. ✅ Try the build system
3. ✅ Read the full documentation
4. ⭐ Consider GitHub Actions automation
5. 🚀 Share with your team!

---

**Happy cataloguing! 🎉**
