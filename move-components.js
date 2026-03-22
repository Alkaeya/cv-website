#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const projectRoot = 'C:\\Users\\Alkaeya De la Pena\\Documents\\bootcamp\\boiler-plate-nextjs';
const componentsDir = path.join(projectRoot, 'components');

const filesToMove = [
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

console.log(`Project root: ${projectRoot}`);
console.log(`Components folder: ${componentsDir}\n`);

// Create components folder if it doesn't exist
if (!fs.existsSync(componentsDir)) {
    fs.mkdirSync(componentsDir, { recursive: true });
    console.log('✓ Created components folder');
} else {
    console.log('✓ Components folder already exists');
}

// Move files
let movedCount = 0;
let notFoundCount = 0;

console.log('\nMoving files...');
filesToMove.forEach(file => {
    const sourcePath = path.join(projectRoot, file);
    const destPath = path.join(componentsDir, file);
    
    if (fs.existsSync(sourcePath)) {
        try {
            fs.renameSync(sourcePath, destPath);
            console.log(`✓ Moved ${file}`);
            movedCount++;
        } catch (err) {
            console.log(`✗ Failed to move ${file}: ${err.message}`);
            notFoundCount++;
        }
    } else {
        console.log(`✗ File not found: ${file}`);
        notFoundCount++;
    }
});

// Verification: List components folder contents
console.log('\n--- Move Summary ---');
console.log(`Files moved: ${movedCount}`);
console.log(`Files not found or failed: ${notFoundCount}`);

console.log('\n--- Components Folder Contents ---');
try {
    const files = fs.readdirSync(componentsDir);
    files.forEach(file => console.log(`  ${file}`));
} catch (err) {
    console.log(`Error reading components folder: ${err.message}`);
}

// Verify no component files remain in root
console.log('\n--- Verification: Root Directory Component Files ---');
let remainingFiles = [];
filesToMove.forEach(file => {
    const filePath = path.join(projectRoot, file);
    if (fs.existsSync(filePath)) {
        remainingFiles.push(file);
    }
});

if (remainingFiles.length === 0) {
    console.log('✓ No component files remain in root directory');
} else {
    console.log('✗ Found remaining component files in root:');
    remainingFiles.forEach(file => console.log(`  ${file}`));
}

console.log('\n=== OPERATION COMPLETE ===');
if (movedCount === 9 && remainingFiles.length === 0) {
    console.log('SUCCESS: All 9 files were moved successfully!');
    process.exit(0);
} else {
    console.log('WARNING: Some files may not have been moved correctly');
    process.exit(1);
}
