const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const root = 'C:\\Users\\Alkaeya De la Pena\\Documents\\bootcamp\\boiler-plate-nextjs';
process.chdir(root);

// Step 1: Git config
console.log('Configuring Git...');
try { execSync('git config user.name "Alkaeya De la Pena"'); } catch(e) {}
try { execSync('git config user.email "alkaeyadelapena@gmail.com"'); } catch(e) {}
console.log('✓ Git configured\n');

// Step 2: Create components dir
const comp = path.join(root, 'components');
if (!fs.existsSync(comp)) fs.mkdirSync(comp);
console.log('✓ Components folder created\n');

// Step 3: Move files
const files = ['Navbar.tsx', 'HeroSection.tsx', 'AboutSection.tsx', 'SkillsSection.tsx', 'ExperienceSection.tsx', 'EducationSection.tsx', 'ProjectsSection.tsx', 'ContactSection.tsx', 'Footer.tsx'];
console.log('Moving files:');
let moved = 0;
files.forEach(f => {
  const src = path.join(root, f);
  const dst = path.join(comp, f);
  if (fs.existsSync(src)) {
    fs.renameSync(src, dst);
    console.log(`  ✓ ${f}`);
    moved++;
  } else {
    console.log(`  ✗ ${f} (not found)`);
  }
});

// Step 4 & 5: Verify
console.log('\n✓ Components folder contents:');
fs.readdirSync(comp).forEach(f => console.log(`  - ${f}`));

console.log(`\n✓ SUCCESS: Moved ${moved}/${files.length} files`);
