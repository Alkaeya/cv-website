const fs = require('fs');
const path = require('path');

const projectRoot = __dirname;
const componentsDir = path.join(projectRoot, 'components');

// Create components folder if it doesn't exist
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('✓ Created components folder');
}

// List of files to move
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

let movedCount = 0;

files.forEach(file => {
  const srcPath = path.join(projectRoot, file);
  const destPath = path.join(componentsDir, file);
  
  if (fs.existsSync(srcPath)) {
    fs.renameSync(srcPath, destPath);
    console.log(`✓ Moved ${file}`);
    movedCount++;
  } else {
    console.log(`✗ File not found: ${file}`);
  }
});

console.log(`\n✓ Success - ${movedCount}/9 files moved`);

// Verify files in components folder
const filesInComponents = fs.readdirSync(componentsDir).filter(f => f.endsWith('.tsx'));
console.log(`\nComponent files in components/ folder (${filesInComponents.length}):`);
filesInComponents.sort().forEach(f => console.log(`  ✓ ${f}`));
