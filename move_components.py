#!/usr/bin/env python3
import os
import shutil
from pathlib import Path

project_root = r"C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"
components_dir = os.path.join(project_root, "components")

# Create components folder
os.makedirs(components_dir, exist_ok=True)
print(f"✓ Components folder ready at {components_dir}")

# Files to move
files = [
    "Navbar.tsx",
    "HeroSection.tsx",
    "AboutSection.tsx",
    "SkillsSection.tsx",
    "ExperienceSection.tsx",
    "EducationSection.tsx",
    "ProjectsSection.tsx",
    "ContactSection.tsx",
    "Footer.tsx"
]

moved_count = 0
for filename in files:
    src = os.path.join(project_root, filename)
    dst = os.path.join(components_dir, filename)
    
    if os.path.exists(src):
        shutil.move(src, dst)
        print(f"✓ Moved {filename}")
        moved_count += 1
    else:
        print(f"✗ File not found: {filename}")

print(f"\n✓ Success - {moved_count}/9 files moved")

# Verify
print("\nVerifying files in components/ folder:")
if os.path.exists(components_dir):
    files_list = sorted([f for f in os.listdir(components_dir) if f.endswith('.tsx')])
    print(f"Found {len(files_list)} component files:")
    for f in files_list:
        print(f"  ✓ {f}")
else:
    print("✗ Components folder not found!")
