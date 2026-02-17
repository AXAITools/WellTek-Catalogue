#!/usr/bin/env node

/**
 * Build Script for WellTek Catalogue
 * 
 * This script generates the index.html file with embedded product data from catalogue-data.json
 * Usage: node build.js [input-data.json] [output-file.html]
 */

const fs = require('fs');
const path = require('path');

// Parse command line arguments
const args = process.argv.slice(2);
const dataFile = args[0] || 'catalogue-data.json';
const outputFile = args[1] || 'index.html';
const templateFile = 'index.template.html';

console.log('WellTek Catalogue Build Script');
console.log('==============================');

// Read the catalogue data
console.log(`Reading data from: ${dataFile}`);
let catalogueData;
try {
  const dataContent = fs.readFileSync(dataFile, 'utf8');
  catalogueData = JSON.parse(dataContent);
  console.log(`✓ Loaded ${Object.keys(catalogueData).length} sheets`);
  
  // Count total products
  let totalProducts = 0;
  Object.keys(catalogueData).forEach(sheet => {
    if (catalogueData[sheet].products) {
      totalProducts += catalogueData[sheet].products.length;
    }
  });
  console.log(`✓ Total products: ${totalProducts}`);
} catch (error) {
  console.error(`✗ Error reading ${dataFile}:`, error.message);
  process.exit(1);
}

// Read the template HTML
console.log(`Reading template from: ${templateFile}`);
let template;
try {
  template = fs.readFileSync(templateFile, 'utf8');
  console.log(`✓ Template loaded (${template.length} bytes)`);
} catch (error) {
  console.error(`✗ Error reading ${templateFile}:`, error.message);
  console.error('Make sure index.template.html exists!');
  process.exit(1);
}

// Replace the data placeholder with actual data
console.log('Embedding catalogue data...');
const dataString = JSON.stringify(catalogueData);
const output = template.replace(
  '/*CATALOGUE_DATA_PLACEHOLDER*/',
  `const CATALOGUE_DATA = ${dataString};`
);

// Write the output file
console.log(`Writing output to: ${outputFile}`);
try {
  fs.writeFileSync(outputFile, output, 'utf8');
  console.log(`✓ Successfully generated ${outputFile}`);
  console.log(`✓ File size: ${(output.length / 1024).toFixed(1)} KB`);
} catch (error) {
  console.error(`✗ Error writing ${outputFile}:`, error.message);
  process.exit(1);
}

console.log('');
console.log('Build completed successfully! 🎉');
