const fs = require('fs');
const path = require('path');

const sourceDir = 'C:\\Users\\Alkaeya De la Pena\\Documents\\bootcamp\\boiler-plate-nextjs';
const componentDir = path.join(sourceDir, 'components');

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

// Create components folder if it doesn't exist
if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir, { recursive: true });
  console.log('✓ Created components folder');
}

// Move each file
let movedCount = 0;
const failedFiles = [];

files.forEach(file => {
  const sourcePath = path.join(sourceDir, file);
  const destPath = path.join(componentDir, file);
  
  if (fs.existsSync(sourcePath)) {
    try {
      fs.renameSync(sourcePath, destPath);
      movedCount++;
      console.log(`✓ Moved: ${file}`);
    } catch (err) {
      failedFiles.push(file);
      console.log(`✗ Failed to move: ${file} - ${err.message}`);
    }
  } else {
    failedFiles.push(file);
    console.log(`✗ Not found: ${file}`);
  }
});

console.log('\n--- Verification ---');
console.log(`Files moved: ${movedCount}/9`);

if (failedFiles.length > 0) {
  console.log(`Failed files: ${failedFiles.join(', ')}`);
}

// Verify all files are in components folder
console.log('\nFiles currently in components folder:');
try {
  const filesInComponents = fs.readdirSync(componentDir).filter(f => f.endsWith('.tsx'));
  filesInComponents.forEach(file => {
    console.log(`  ✓ ${file}`);
  });
  
  console.log(`\nTotal .tsx files in components folder: ${filesInComponents.length}`);
  
  if (filesInComponents.length === 9) {
    console.log('\n✓ SUCCESS: All 9 files successfully moved to components folder');
    process.exit(0);
  } else {
    console.log(`\n⚠ Only ${filesInComponents.length} out of 9 files found in components folder`);
    process.exit(1);
  }
} catch (err) {
  console.log(`✗ Error verifying files: ${err.message}`);
  process.exit(1);
}
