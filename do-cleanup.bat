@echo off
cd /d "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"

git rm -f "00_READ_ME_FIRST.md" "00_START_HERE.md" "BUILD_COMPLETE.md" "COMPLETE_SETUP_SUMMARY.md" "COMPONENTS_SETUP.md" "DELIVERY_REPORT.md" "DEPLOYMENT_GUIDE.md" "EXECUTION_GUIDE.md" "FINAL_SETUP_REPORT.md" "FINAL_SUMMARY.md" "IMPLEMENTATION_CHECKLIST.md" "INDEX.md" "MANIFEST.md" "MASTER_INDEX.md" "PROJECT_SETUP_SUMMARY.md" "PROJECT_SUMMARY.md" "QUICK_REFERENCE.md" "QUICK_START.md" "README_COMPONENTS.md" "README_NEW.md" "README_SETUP.md" "SETUP_COMPLETE.md" "SETUP_CV_WEBSITE.md" "SETUP_INSTRUCTIONS.md" "SETUP_READY.md" "START_HERE.md" "START_SETUP.md" "complete-setup.js" "exec-move.bat" "fix-dev-server.bat" "move-components-windows.bat" "move-components.js" "move-files-now.js" "move-files-to-components.js" "move-to-components.js" "move_components.bat" "move_components.py" "move_files.bat" "movefiles.bat" "movefiles.js" "movefiles.py" "organize-components.js" "organize-files-final.js" "organize-files.js" "organize.bat" "organize.sh" "quick-setup.js" "run-complete-setup.bat" "run-organization.bat" "run-script.bat" "setup-components.bat" "setup-project.bat" "setup-structure.js" "setup.py" "page-example.tsx"

if %ERRORLEVEL% EQU 0 (
  echo Files removed successfully. Creating commit...
  git commit -m "refactor: remove setup files and documentation clutter"
  if %ERRORLEVEL% EQU 0 (
    echo Commit created successfully. Verifying...
    git log -1 --oneline
  ) else (
    echo Commit failed
    exit /b 1
  )
) else (
  echo Failed to remove files
  exit /b 1
)
