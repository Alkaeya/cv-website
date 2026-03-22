#!/usr/bin/env python3
import os
import subprocess
import sys

os.chdir(r"C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs")

files_to_remove = [
    # Setup documentation files
    "00_READ_ME_FIRST.md",
    "00_START_HERE.md",
    "BUILD_COMPLETE.md",
    "COMPLETE_SETUP_SUMMARY.md",
    "COMPONENTS_SETUP.md",
    "DELIVERY_REPORT.md",
    "DEPLOYMENT_GUIDE.md",
    "EXECUTION_GUIDE.md",
    "FINAL_SETUP_REPORT.md",
    "FINAL_SUMMARY.md",
    "IMPLEMENTATION_CHECKLIST.md",
    "INDEX.md",
    "MANIFEST.md",
    "MASTER_INDEX.md",
    "PROJECT_SETUP_SUMMARY.md",
    "PROJECT_SUMMARY.md",
    "QUICK_REFERENCE.md",
    "QUICK_START.md",
    "README_COMPONENTS.md",
    "README_NEW.md",
    "README_SETUP.md",
    "SETUP_COMPLETE.md",
    "SETUP_CV_WEBSITE.md",
    "SETUP_INSTRUCTIONS.md",
    "SETUP_READY.md",
    "START_HERE.md",
    "START_SETUP.md",
    # Setup scripts
    "complete-setup.js",
    "exec-move.bat",
    "fix-dev-server.bat",
    "move-components-windows.bat",
    "move-components.js",
    "move-files-now.js",
    "move-files-to-components.js",
    "move-to-components.js",
    "move_components.bat",
    "move_components.py",
    "move_files.bat",
    "movefiles.bat",
    "movefiles.js",
    "movefiles.py",
    "organize-components.js",
    "organize-files-final.js",
    "organize-files.js",
    "organize.bat",
    "organize.sh",
    "quick-setup.js",
    "run-complete-setup.bat",
    "run-organization.bat",
    "run-script.bat",
    "setup-components.bat",
    "setup-project.bat",
    "setup-structure.js",
    "setup.py",
    # Other unnecessary files
    "page-example.tsx",
    "remove-files.bat",
    "do-cleanup.bat",
    "cleanup.bat"
]

print("Starting cleanup...")
removed_count = 0
failed_count = 0

for file in files_to_remove:
    if os.path.exists(file):
        try:
            subprocess.run(["git", "rm", "-f", file], check=True, capture_output=True)
            removed_count += 1
            print(f"✓ Removed: {file}")
        except subprocess.CalledProcessError as e:
            failed_count += 1
            print(f"✗ Failed to remove: {file}")
            print(f"  Error: {e.stderr.decode()}")
    else:
        print(f"- Skipped (not found): {file}")

print(f"\nRemoved: {removed_count} files")
print(f"Failed: {failed_count} files")

# Commit the changes
print("\nCommitting changes...")
try:
    subprocess.run(["git", "commit", "-m", "refactor: remove setup files and documentation clutter"], check=True)
    print("✓ Commit successful!")
    # Show the commit
    subprocess.run(["git", "log", "-1", "--oneline"])
except subprocess.CalledProcessError as e:
    print("✗ Commit failed!")
    print(f"Error: {e.stderr.decode()}")
    sys.exit(1)

print("\nCleanup complete!")
