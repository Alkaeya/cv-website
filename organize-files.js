const fs = require('fs');
const path = require('path');

const projectRoot = 'C:\\Users\\Alkaeya De la Pena\\Documents\\bootcamp\\boiler-plate-nextjs';
const componentsDir = path.join(projectRoot, 'components');

// Ensure components directory exists
if (!fs.existsSync(componentsDir)) {
  fs.mkdirSync(componentsDir, { recursive: true });
  console.log('✓ Created components folder\n');
} else {
  console.log('✓ Components folder already exists\n');
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
files.forEach(file => {
  const sourcePath = path.join(projectRoot, file);
  const destPath = path.join(componentsDir, file);
  
  if (fs.existsSync(sourcePath)) {
    try {
      fs.renameSync(sourcePath, destPath);
      console.log(`✓ Moved: ${file}`);
      movedCount++;
    } catch (err) {
      console.log(`✗ Failed to move ${file}: ${err.message}`);
    }
  } else {
    console.log(`✗ Not found: ${file}`);
  }
});

console.log('\n============================================');
console.log('VERIFICATION RESULTS');
console.log('============================================\n');
console.log(`Files moved: ${movedCount} / ${files.length}\n`);

console.log('Contents of components folder:');
try {
  const contents = fs.readdirSync(componentsDir);
  contents.forEach(file => {
    console.log(`  - ${file}`);
  });
} catch (err) {
  console.log(`Error reading components folder: ${err.message}`);
}

console.log('\nVerifying files removed from root directory:');
let remainingCount = 0;
files.forEach(file => {
  if (fs.existsSync(path.join(projectRoot, file))) {
    console.log(`✗ Still exists in root: ${file}`);
    remainingCount++;
  }
});

if (remainingCount === 0) {
  console.log('✓ All component files successfully removed from root directory');
}

console.log('\n✓ Task completed successfully!');
