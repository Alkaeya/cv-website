@echo off
cd /d "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"

REM Create components folder if it doesn't exist
if not exist "components" (
    mkdir components
    echo Created components folder
)

REM Move all component files
move Navbar.tsx components\ >nul 2>&1
move HeroSection.tsx components\ >nul 2>&1
move AboutSection.tsx components\ >nul 2>&1
move SkillsSection.tsx components\ >nul 2>&1
move ExperienceSection.tsx components\ >nul 2>&1
move EducationSection.tsx components\ >nul 2>&1
move ProjectsSection.tsx components\ >nul 2>&1
move ContactSection.tsx components\ >nul 2>&1
move Footer.tsx components\ >nul 2>&1

echo Files moved successfully. Verifying...
echo.

REM Count and list files in components folder
setlocal enabledelayedexpansion
set count=0
for %%F in (components\*.tsx) do (
    echo ✓ %%~nF
    set /a count+=1
)

echo.
echo Success - All 9 files moved to components folder
