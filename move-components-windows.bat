@echo off
REM Script to create components folder and move TypeScript component files

setlocal enabledelayedexpansion

set "SOURCE_DIR=C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"
set "COMP_DIR=%SOURCE_DIR%\components"

REM Create components directory
if not exist "%COMP_DIR%" (
    mkdir "%COMP_DIR%"
    echo Created components folder
)

REM Move files
echo Moving files...
move "%SOURCE_DIR%\Navbar.tsx" "%COMP_DIR%\" >nul 2>&1 && echo Moved Navbar.tsx
move "%SOURCE_DIR%\HeroSection.tsx" "%COMP_DIR%\" >nul 2>&1 && echo Moved HeroSection.tsx
move "%SOURCE_DIR%\AboutSection.tsx" "%COMP_DIR%\" >nul 2>&1 && echo Moved AboutSection.tsx
move "%SOURCE_DIR%\SkillsSection.tsx" "%COMP_DIR%\" >nul 2>&1 && echo Moved SkillsSection.tsx
move "%SOURCE_DIR%\ExperienceSection.tsx" "%COMP_DIR%\" >nul 2>&1 && echo Moved ExperienceSection.tsx
move "%SOURCE_DIR%\EducationSection.tsx" "%COMP_DIR%\" >nul 2>&1 && echo Moved EducationSection.tsx
move "%SOURCE_DIR%\ProjectsSection.tsx" "%COMP_DIR%\" >nul 2>&1 && echo Moved ProjectsSection.tsx
move "%SOURCE_DIR%\ContactSection.tsx" "%COMP_DIR%\" >nul 2>&1 && echo Moved ContactSection.tsx
move "%SOURCE_DIR%\Footer.tsx" "%COMP_DIR%\" >nul 2>&1 && echo Moved Footer.tsx

echo.
echo Verification:
dir "%COMP_DIR%\*.tsx" /b
echo.
echo Operation complete!

endlocal
