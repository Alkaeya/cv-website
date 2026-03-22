const fs = require('fs');
const path = require('path');

// Create components directory
const componentsDir = path.join(__dirname, 'components');
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('✅ Created components directory');
}

// Files to move
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

// Move files
files.forEach(file => {
  const source = path.join(__dirname, file);
  const dest = path.join(componentsDir, file);
  
  if (fs.existsSync(source)) {
    fs.renameSync(source, dest);
    console.log(`✅ Moved ${file} to components/`);
  } else {
    console.log(`⚠️  ${file} not found`);
  }
});

console.log('\n✅ All files organized successfully!');
