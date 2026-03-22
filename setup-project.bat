@echo off
setlocal enabledelayedexpansion

REM Configure project structure for Alkaeya's Portfolio

cd /d "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"

echo.
echo ======================================================================
echo ALKAEYA'S PORTFOLIO PROJECT SETUP
echo ======================================================================
echo.

REM Step 1: Configure Git
echo STEP 1: Configuring Git user info...
echo.
git config user.name "Alkaeya De la Pena"
git config user.email "alkaeyadelapena@gmail.com"

echo Git configured:
echo   User: !git config user.name!
echo   Email: !git config user.email!
echo.

REM Step 2: Create components directory
echo STEP 2: Creating components folder...
echo.
if not exist components (
    mkdir components
    echo ^✓ Created components folder
) else (
    echo ^✓ Components folder already exists
)
echo.

REM Step 3: Move component files
echo STEP 3: Moving component files to components folder...
echo.

set /A count=0
for %%F in (
    Navbar.tsx
    HeroSection.tsx
    AboutSection.tsx
    SkillsSection.tsx
    ExperienceSection.tsx
    EducationSection.tsx
    ProjectsSection.tsx
    ContactSection.tsx
    Footer.tsx
) do (
    if exist %%F (
        move /Y %%F components\ >nul 2>&1
        if !errorlevel! equ 0 (
            echo   ^✓ Moved %%F
            set /A count+=1
        ) else (
            echo   ^✗ Failed to move %%F
        )
    ) else (
        echo   ^✗ %%F not found
    )
)
echo.

REM Step 4 & 5: Verify structure
echo STEP 4 ^& 5: Verifying final directory structure...
echo.

echo Root directories:
for /D %%D in (*) do (
    echo   ^^✓ %%D
)
echo.

echo Components folder contents:
echo.
dir components /B
echo.

REM Summary
echo ======================================================================
echo SETUP COMPLETE
echo ======================================================================
echo.
echo Summary:
echo   ^✓ Git user configured
echo   ^✓ Components folder created  
echo   ^✓ Component files moved: !count!/9
echo.
echo Next steps:
echo   1. Update your imports in app/page.tsx to use components/
echo   2. Run: npm run dev
echo.
pause
