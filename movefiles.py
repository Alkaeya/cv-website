import os
import shutil

base_dir = r"C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"
components_dir = os.path.join(base_dir, "components")

# Create components folder
os.makedirs(components_dir, exist_ok=True)
print("✓ Created components folder")

# Files to move
files = [
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

# Move files
for file in files:
    source_path = os.path.join(base_dir, file)
    dest_path = os.path.join(components_dir, file)
    
    if os.path.exists(source_path):
        shutil.move(source_path, dest_path)
        print(f"✓ Moved {file}")
    else:
        print(f"✗ File not found: {file}")

# List contents of components folder
print("\n📁 Components folder contents:")
contents = os.listdir(components_dir)
for file in sorted(contents):
    print(f"   - {file}")

print(f"\n✓ Total files in components folder: {len(contents)}")
