#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const projectRoot = process.cwd();

console.log('='.repeat(60));
console.log('Project Structure Organization Script');
console.log('='.repeat(60));
console.log('');

// Step 1: Configure Git
console.log('Step 1: Configuring Git user info...');
try {
  execSync('git config user.name "Alkaeya De la Pena"', { cwd: projectRoot });
  execSync('git config user.email "alkaeyadelapena@gmail.com"', { cwd: projectRoot });
  const userName = execSync('git config user.name', { cwd: projectRoot }).toString().trim();
  const userEmail = execSync('git config user.email', { cwd: projectRoot }).toString().trim();
  console.log('✓ Git configured successfully');
  console.log(`  - user.name: ${userName}`);
  console.log(`  - user.email: ${userEmail}`);
} catch (error) {
  console.error('✗ Git configuration failed:', error.message);
}
console.log('');

// Step 2: Create components folder
console.log('Step 2: Creating components folder...');
const componentsDir = path.join(projectRoot, 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('✓ components folder created');
} else {
  console.log('✓ components folder already exists');
}
console.log('');

// Step 3: Move component files
console.log('Step 3: Moving component files to components folder...');
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
    fs.renameSync(sourcePath, destPath);
    console.log(`  ✓ Moved ${file}`);
    movedCount++;
  } else {
    console.log(`  ✗ ${file} not found in root`);
    notFoundCount++;
  }
});

console.log('');

// Step 4 & 5: Verify structure
console.log('Step 4 & 5: Verifying final directory structure...');
console.log('');
console.log('Root directories:');
fs.readdirSync(projectRoot, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .forEach(dirent => {
    console.log(`  📁 ${dirent.name}`);
  });

console.log('');
console.log('Components folder contents:');
if (fs.existsSync(componentsDir)) {
  fs.readdirSync(componentsDir).forEach(file => {
    console.log(`  ✓ ${file}`);
  });
}

console.log('');
console.log('='.repeat(60));
console.log('Summary:');
console.log(`  - Git configured: ✓`);
console.log(`  - Components folder created: ✓`);
console.log(`  - Component files moved: ${movedCount}/${componentFiles.length}`);
if (notFoundCount > 0) {
  console.log(`  - Files not found: ${notFoundCount}`);
}
console.log('='.repeat(60));
