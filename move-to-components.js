#!/usr/bin/env node

// This script organizes component files into a components folder
// Run with: node organize-files.js

const fs = require('fs');
const path = require('path');

function main() {
  const projectRoot = 'C:\\Users\\Alkaeya De la Pena\\Documents\\bootcamp\\boiler-plate-nextjs';
  const componentsDir = path.join(projectRoot, 'components');

  console.log('============================================');
  console.log('Component Organization Script');
  console.log('============================================\n');
  console.log(`Project root: ${projectRoot}\n`);

  // Ensure components directory exists
  try {
    if (!fs.existsSync(componentsDir)) {
      fs.mkdirSync(componentsDir, { recursive: true });
      console.log('[✓] Created components folder\n');
    } else {
      console.log('[INFO] Components folder already exists\n');
    }
  } catch (err) {
    console.error(`[✗] Failed to create components folder: ${err.message}`);
    process.exit(1);
  }

  const files = [
    'Navbar.tsx',
    'HeroSection.tsx',
    'AboutSection.tsx',
    'SkillsSection.tsx',
    'ExperienceSection.tsx',
    'EducationSection.tsx',
    'ProjectsSection.tsx',
    'ContactSection.tsx',
    'Footer.tsx'
  ];

  console.log('Moving files to components folder...\n');

  let movedCount = 0;
  let notFoundCount = 0;

  files.forEach(file => {
    const sourcePath = path.join(projectRoot, file);
    const destPath = path.join(componentsDir, file);

    try {
      if (fs.existsSync(sourcePath)) {
        // Read the file
        const content = fs.readFileSync(sourcePath, 'utf8');
        
        // Write to new location
        fs.writeFileSync(destPath, content, 'utf8');
        
        // Delete the original file
        fs.unlinkSync(sourcePath);
        
        console.log(`[✓] Moved: ${file}`);
        movedCount++;
      } else {
        console.log(`[✗] Not found: ${file}`);
        notFoundCount++;
      }
    } catch (err) {
      console.log(`[✗] Error with ${file}: ${err.message}`);
    }
  });

  console.log('\n============================================');
  console.log('VERIFICATION RESULTS');
  console.log('============================================\n');
  console.log(`Files moved: ${movedCount} / ${files.length}`);
  console.log(`Files not found: ${notFoundCount}\n`);

  console.log('Contents of components folder:');
  try {
    const contents = fs.readdirSync(componentsDir);
    if (contents.length === 0) {
      console.log('  (empty)');
    } else {
      contents.forEach(file => {
        console.log(`  - ${file}`);
      });
    }
  } catch (err) {
    console.log(`Error reading components folder: ${err.message}`);
  }

  console.log('\nVerifying files removed from root directory:');
  let remainingCount = 0;
  files.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (fs.existsSync(filePath)) {
      console.log(`[✗] Still exists in root: ${file}`);
      remainingCount++;
    }
  });

  if (remainingCount === 0 && movedCount > 0) {
    console.log('[✓] All component files successfully removed from root directory');
  }

  console.log('\n============================================');
  if (movedCount === files.length) {
    console.log('✓ Task completed successfully!');
  } else {
    console.log('⚠ Task completed with issues. Check messages above.');
  }
  console.log('============================================\n');
}

main();
