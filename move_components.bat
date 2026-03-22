@echo off
cd /d "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"

REM Create components folder if it doesn't exist
if not exist "components" (
    mkdir components
    echo Created components folder
) else (
    echo Components folder already exists
)

REM Move all component files
echo.
echo Moving files...
move Navbar.tsx components\ 2>nul && echo Moved Navbar.tsx || echo Failed to move Navbar.tsx
move HeroSection.tsx components\ 2>nul && echo Moved HeroSection.tsx || echo Failed to move HeroSection.tsx
move AboutSection.tsx components\ 2>nul && echo Moved AboutSection.tsx || echo Failed to move AboutSection.tsx
move SkillsSection.tsx components\ 2>nul && echo Moved SkillsSection.tsx || echo Failed to move SkillsSection.tsx
move ExperienceSection.tsx components\ 2>nul && echo Moved ExperienceSection.tsx || echo Failed to move ExperienceSection.tsx
move EducationSection.tsx components\ 2>nul && echo Moved EducationSection.tsx || echo Failed to move EducationSection.tsx
move ProjectsSection.tsx components\ 2>nul && echo Moved ProjectsSection.tsx || echo Failed to move ProjectsSection.tsx
move ContactSection.tsx components\ 2>nul && echo Moved ContactSection.tsx || echo Failed to move ContactSection.tsx
move Footer.tsx components\ 2>nul && echo Moved Footer.tsx || echo Failed to move Footer.tsx

echo.
echo === Verification ===
echo.
echo Components folder contents:
dir components\

echo.
echo Checking root directory for remaining .tsx component files:
dir *.tsx 2>nul | findstr "tsx" && echo WARNING: Found .tsx files in root || echo SUCCESS: No .tsx component files in root

pause
