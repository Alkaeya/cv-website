const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const baseDir = "C:\\Users\\Alkaeya De la Pena\\Documents\\bootcamp\\boiler-plate-nextjs";
const componentsDir = path.join(baseDir, "components");

// Create components folder
if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
    console.log("✓ Created components folder");
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
    const sourcePath = path.join(baseDir, file);
    const destPath = path.join(componentsDir, file);
    
    if (fs.existsSync(sourcePath)) {
        fs.renameSync(sourcePath, destPath);
        console.log(`✓ Moved ${file}`);
    } else {
        console.log(`✗ File not found: ${file}`);
    }
});

// List contents of components folder
console.log("\n📁 Components folder contents:");
const contents = fs.readdirSync(componentsDir);
contents.forEach(file => {
    console.log(`   - ${file}`);
});

console.log(`\n✓ Total files in components folder: ${contents.length}`);
