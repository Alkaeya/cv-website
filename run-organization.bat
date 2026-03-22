@echo off
setlocal enabledelayedexpansion

cd /d "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"

echo ============================================
echo Component Organization Script
echo ============================================
echo.

REM Create components folder
if not exist "components" (
    mkdir components
    echo [✓] Created components folder
) else (
    echo [INFO] Components folder already exists
)

echo.
echo Copying files to components folder...
echo.

REM Array of files to move
setlocal disabledelayedexpansion
set "files=Navbar.tsx HeroSection.tsx AboutSection.tsx SkillsSection.tsx ExperienceSection.tsx EducationSection.tsx ProjectsSection.tsx ContactSection.tsx Footer.tsx"
setlocal enabledelayedexpansion

set count=0
for %%F in (!files!) do (
    if exist "%%F" (
        move "%%F" "components\" >nul 2>&1
        echo [✓] Moved %%F
        set /a count+=1
    ) else (
        echo [✗] Not found: %%F
    )
)

echo.
echo ============================================
echo VERIFICATION RESULTS
echo ============================================
echo.
echo Files moved: !count! / 9
echo.
echo Contents of components folder:
dir "components" /B
echo.
echo ============================================
echo Verification complete!
echo ============================================

pause
