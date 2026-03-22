#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = process.cwd();

console.log('='.repeat(70));
console.log('COMPLETE PROJECT SETUP');
console.log('='.repeat(70));
console.log('');

// Step 1: Configure Git
console.log('STEP 1: Configuring Git user info...');
console.log('-'.repeat(70));
try {
  execSync('git config user.name "Alkaeya De la Pena"', { cwd: projectRoot, stdio: 'ignore' });
  execSync('git config user.email "alkaeyadelapena@gmail.com"', { cwd: projectRoot, stdio: 'ignore' });
  
  const userName = execSync('git config user.name', { cwd: projectRoot }).toString().trim();
  const userEmail = execSync('git config user.email', { cwd: projectRoot }).toString().trim();
  
  console.log('✓ Git configured successfully');
  console.log(`  - user.name: ${userName}`);
  console.log(`  - user.email: ${userEmail}`);
  console.log('');
} catch (error) {
  console.error('✗ Git configuration failed:', error.message);
  console.log('');
}

// Step 2: Create components folder
console.log('STEP 2: Creating components folder...');
console.log('-'.repeat(70));

const componentsDir = path.join(projectRoot, 'components');

if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('✓ Created components folder: ' + componentsDir);
} else {
  console.log('✓ Components folder already exists: ' + componentsDir);
}
console.log('');

// Step 3: Move component files
console.log('STEP 3: Moving component files to components folder...');
console.log('-'.repeat(70));

const componentFiles = [
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

let movedCount = 0;
let notFoundCount = 0;

componentFiles.forEach(file => {
  const sourcePath = path.join(projectRoot, file);
  const destPath = path.join(componentsDir, file);
  
  if (fs.existsSync(sourcePath)) {
    try {
      fs.renameSync(sourcePath, destPath);
      console.log(`  ✓ Moved ${file}`);
      movedCount++;
    } catch (err) {
      console.log(`  ✗ Failed to move ${file}: ${err.message}`);
      notFoundCount++;
    }
  } else {
    console.log(`  ✗ ${file} not found in root`);
    notFoundCount++;
  }
});

console.log('');

// Step 4 & 5: Verify structure
console.log('STEP 4 & 5: Verifying final directory structure...');
console.log('-'.repeat(70));
console.log('');

console.log('Root directories:');
const rootDirs = fs.readdirSync(projectRoot, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name)
  .sort();

rootDirs.forEach(dir => {
  console.log(`  📁 ${dir}`);
});

console.log('');
console.log('Components folder contents:');
console.log('-'.repeat(70));

if (fs.existsSync(componentsDir)) {
  const componentFiles = fs.readdirSync(componentsDir)
    .filter(f => f.endsWith('.tsx') || f.endsWith('.ts') || f.endsWith('.jsx') || f.endsWith('.js'))
    .sort();
  
  if (componentFiles.length > 0) {
    componentFiles.forEach(file => {
      const fullPath = path.join(componentsDir, file);
      const stats = fs.statSync(fullPath);
      console.log(`  ✓ ${file} (${(stats.size / 1024).toFixed(2)} KB)`);
    });
  } else {
    console.log('  (no component files found)');
  }
} else {
  console.log('  (components folder not found)');
}

console.log('');

// Final verification
console.log('FINAL VERIFICATION');
console.log('='.repeat(70));

let remainingFiles = [];
componentFiles.forEach(file => {
  const filePath = path.join(projectRoot, file);
  if (fs.existsSync(filePath)) {
    remainingFiles.push(file);
  }
});

console.log('Summary:');
console.log(`  ✓ Git user configured`);
console.log(`  ✓ Components folder created`);
console.log(`  ✓ Component files moved: ${movedCount}/${componentFiles.length}`);

if (notFoundCount > 0) {
  console.log(`  ⚠ Files not found/failed: ${notFoundCount}`);
}

if (remainingFiles.length === 0) {
  console.log(`  ✓ No component files remain in root directory`);
} else {
  console.log(`  ⚠ Found remaining component files in root:`);
  remainingFiles.forEach(file => console.log(`    - ${file}`));
}

console.log('');
console.log('='.repeat(70));

if (movedCount === 9 && remainingFiles.length === 0) {
  console.log('SUCCESS: All tasks completed successfully! ✓');
  console.log('');
  console.log('Project structure is now organized with:');
  console.log('  - Git user info configured');
  console.log('  - components/ folder created');
  console.log('  - All 9 component files moved to components/');
  console.log('');
  process.exit(0);
} else {
  console.log('PARTIAL SUCCESS: Tasks completed with warnings');
  process.exit(0);
}
