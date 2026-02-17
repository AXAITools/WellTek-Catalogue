# GitHub Actions Workflow (Optional Enhancement)

This is an **optional** automation that can be added in the future to automatically generate and deploy HTML files when catalogue-data.json is updated.

## Setup Instructions

To enable automated builds when `catalogue-data.json` is modified:

### 1. Create GitHub Actions Workflow

Create `.github/workflows/build-catalogue.yml`:

```yaml
name: Build Catalogue

on:
  push:
    branches: [ main ]
    paths:
      - 'catalogue-data.json'
      - 'index.template.html'
      - 'build.js'
  workflow_dispatch:

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Build HTML
      run: node build.js
      
    - name: Check for changes
      id: verify_diff
      run: |
        git diff --quiet index.html || echo "changed=true" >> $GITHUB_OUTPUT
        
    - name: Commit and push if changed
      if: steps.verify_diff.outputs.changed == 'true'
      run: |
        git config user.name "GitHub Actions Bot"
        git config user.email "actions@github.com"
        git add index.html
        git commit -m "Auto-build: Update catalogue from data changes"
        git push
```

### 2. Alternative: Manual Trigger Workflow

For a manual trigger that rebuilds on demand:

```yaml
name: Manual Build Catalogue

on:
  workflow_dispatch:
    inputs:
      reason:
        description: 'Reason for rebuild'
        required: false
        default: 'Manual catalogue update'

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Build HTML
      run: node build.js
      
    - name: Create Pull Request
      uses: peter-evans/create-pull-request@v5
      with:
        commit-message: 'Build: ${{ github.event.inputs.reason }}'
        title: 'Automated Catalogue Build'
        body: |
          Automated catalogue build triggered by: ${{ github.actor }}
          
          Reason: ${{ github.event.inputs.reason }}
          
          Please review and merge if the build is correct.
        branch: automated-build-${{ github.run_number }}
```

## Benefits of Automation

### Automated Approach
✅ No manual export step needed  
✅ Version controlled data changes  
✅ Automatic deployment  
✅ CI/CD integration  

### Manual Export (Current)
✅ Simple to understand  
✅ Visual preview before deployment  
✅ No GitHub Actions knowledge required  
✅ Works without repository access  

## Current Recommendation

**Keep the manual export workflow** for now because:

1. **Simplicity** - Users can make changes and see results immediately
2. **Safety** - Changes are reviewed before deployment
3. **No Dependencies** - Doesn't require GitHub Actions or repository write access
4. **Flexibility** - Users can test locally before deploying

## When to Add Automation

Consider adding GitHub Actions when:

- Multiple admins are making frequent updates
- You want to enforce data validation before deployment
- You have CI/CD expertise in your team
- You need automated testing before deployment
- You want a clear audit trail of data changes

## Migration Path

If you decide to add automation later:

1. Keep the export button (useful for previewing changes)
2. Add the GitHub Actions workflow
3. Document both workflows in README
4. Let users choose their preferred method

## Testing Automation

To test the workflow before enabling:

```bash
# 1. Create the workflow file
mkdir -p .github/workflows
# Add the workflow YAML

# 2. Test locally first
node build.js
git diff index.html

# 3. Commit the workflow
git add .github/workflows/build-catalogue.yml
git commit -m "Add automated build workflow"
git push

# 4. Make a test change to catalogue-data.json
# The workflow should trigger automatically
```

## Security Considerations

When adding GitHub Actions:

- ✅ Use `actions/checkout@v3` or later
- ✅ Pin action versions for security
- ✅ Limit workflow permissions (write only to index.html)
- ✅ Add branch protection rules
- ✅ Review all automated commits
- ⚠️ Never commit secrets or credentials
- ⚠️ Validate JSON before building

## Support

For help implementing GitHub Actions automation:
- See [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Reference workflow examples in `.github/workflows/`
- Create an issue in the repository

---

**Note:** This is an optional enhancement. The current manual export system is fully functional and recommended for most users.
