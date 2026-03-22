#!/bin/bash

cd "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"

echo "Step 1: Configuring Git user info..."
git config user.name "Alkaeya De la Pena"
git config user.email "alkaeyadelapena@gmail.com"
echo "✓ Git configured"
echo "  - user.name: $(git config user.name)"
echo "  - user.email: $(git config user.email)"
echo ""

echo "Step 2: Creating components folder..."
mkdir -p components
echo "✓ components folder created"
echo ""

echo "Step 3: Moving component files to components folder..."
for file in Navbar.tsx HeroSection.tsx AboutSection.tsx SkillsSection.tsx ExperienceSection.tsx EducationSection.tsx ProjectsSection.tsx ContactSection.tsx Footer.tsx; do
  if [ -f "$file" ]; then
    mv "$file" "components/$file"
    echo "  ✓ Moved $file"
  else
    echo "  ✗ $file not found"
  fi
done
echo ""

echo "Step 4 & 5: Verifying final directory structure..."
echo ""
echo "Root directories:"
ls -d */ 2>/dev/null | sed 's/\///'
echo ""
echo "Components folder contents:"
ls components/
echo ""
echo "All tasks completed!"
