// Organize components into a dedicated folder
const fs = require('fs');
const path = require('path');

const projectRoot = path.dirname(__filename);
const componentsDir = path.join(projectRoot, 'components');

// List of component files to move
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

// Create components directory if it doesn't exist
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('✅ Created components folder');
}

// Move component files
componentFiles.forEach(file => {
  const oldPath = path.join(projectRoot, file);
  const newPath = path.join(componentsDir, file);
  
  if (fs.existsSync(oldPath) && !fs.existsSync(newPath)) {
    fs.renameSync(oldPath, newPath);
    console.log(`✅ Moved ${file}`);
  } else if (fs.existsSync(newPath)) {
    console.log(`✓ ${file} already in components folder`);
  } else {
    console.log(`⚠️ ${file} not found`);
  }
});

console.log('\n✅ Component organization complete!');
