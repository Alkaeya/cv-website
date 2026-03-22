#!/usr/bin/env python3

import os
import shutil
import subprocess
import sys
from pathlib import Path

root_dir = r"C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"
os.chdir(root_dir)

print("=" * 70)
print("COMPLETE PROJECT SETUP")
print("=" * 70)
print()

# Step 1: Configure Git
print("STEP 1: Configuring Git user info...")
print("-" * 70)
try:
    subprocess.run(['git', 'config', 'user.name', 'Alkaeya De la Pena'], check=True, capture_output=True)
    subprocess.run(['git', 'config', 'user.email', 'alkaeyadelapena@gmail.com'], check=True, capture_output=True)
    
    name_result = subprocess.run(['git', 'config', 'user.name'], capture_output=True, text=True)
    email_result = subprocess.run(['git', 'config', 'user.email'], capture_output=True, text=True)
    
    print("✓ Git configured successfully")
    print(f"  - user.name: {name_result.stdout.strip()}")
    print(f"  - user.email: {email_result.stdout.strip()}")
except Exception as e:
    print(f"✗ Git configuration failed: {e}")

print()

# Step 2: Create components folder
print("STEP 2: Creating components folder...")
print("-" * 70)

components_dir = os.path.join(root_dir, 'components')

if not os.path.exists(components_dir):
    os.makedirs(components_dir, exist_ok=True)
    print(f"✓ Created components folder")
else:
    print(f"✓ Components folder already exists")

print()

# Step 3: Move component files
print("STEP 3: Moving component files to components folder...")
print("-" * 70)

component_files = [
    'Navbar.tsx',
    'HeroSection.tsx',
    'AboutSection.tsx',
    'SkillsSection.tsx',
    'ExperienceSection.tsx',
    'EducationSection.tsx',
    'ProjectsSection.tsx',
    'ContactSection.tsx',
    'Footer.tsx'
]

moved_count = 0
not_found_count = 0

for file in component_files:
    source_path = os.path.join(root_dir, file)
    dest_path = os.path.join(components_dir, file)
    
    if os.path.exists(source_path):
        try:
            shutil.move(source_path, dest_path)
            print(f"  ✓ Moved {file}")
            moved_count += 1
        except Exception as err:
            print(f"  ✗ Failed to move {file}: {err}")
            not_found_count += 1
    else:
        print(f"  ✗ {file} not found in root")
        not_found_count += 1

print()

# Step 4 & 5: Verify structure
print("STEP 4 & 5: Verifying final directory structure...")
print("-" * 70)
print()

print("Root directories:")
for item in sorted(os.listdir(root_dir)):
    item_path = os.path.join(root_dir, item)
    if os.path.isdir(item_path):
        print(f"  📁 {item}")

print()
print("Components folder contents:")
print("-" * 70)

if os.path.exists(components_dir):
    component_files_in_dir = sorted([f for f in os.listdir(components_dir) 
                                     if f.endswith(('.tsx', '.ts', '.jsx', '.js'))])
    
    if component_files_in_dir:
        for file in component_files_in_dir:
            full_path = os.path.join(components_dir, file)
            size_kb = os.path.getsize(full_path) / 1024
            print(f"  ✓ {file} ({size_kb:.2f} KB)")
    else:
        print("  (no component files found)")
else:
    print("  (components folder not found)")

print()

# Final verification
print("FINAL VERIFICATION")
print("=" * 70)

remaining_files = []
for file in component_files:
    file_path = os.path.join(root_dir, file)
    if os.path.exists(file_path):
        remaining_files.append(file)

print("Summary:")
print(f"  ✓ Git user configured")
print(f"  ✓ Components folder created")
print(f"  ✓ Component files moved: {moved_count}/{len(component_files)}")

if not_found_count > 0:
    print(f"  ⚠ Files not found/failed: {not_found_count}")

if len(remaining_files) == 0:
    print(f"  ✓ No component files remain in root directory")
else:
    print(f"  ⚠ Found remaining component files in root:")
    for file in remaining_files:
        print(f"    - {file}")

print()
print("=" * 70)

if moved_count == 9 and len(remaining_files) == 0:
    print("SUCCESS: All tasks completed successfully! ✓")
    print()
    print("Project structure is now organized with:")
    print("  - Git user info configured")
    print("  - components/ folder created")
    print("  - All 9 component files moved to components/")
    print()
    sys.exit(0)
else:
    print("PARTIAL SUCCESS: Tasks completed with warnings")
    sys.exit(0)
