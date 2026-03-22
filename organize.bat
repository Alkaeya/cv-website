@echo off
REM Change to the project directory
cd /d "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"

echo Current directory: %CD%
echo.

REM Create components folder if it doesn't exist
if not exist "components" (
    mkdir components
    echo [SUCCESS] Created components folder
) else (
    echo [INFO] Components folder already exists
)

echo.
echo Moving component files...
echo.

REM Move all files one by one
set /a count=0

if exist "Navbar.tsx" (
    move "Navbar.tsx" "components\" >nul 2>&1
    echo [MOVED] Navbar.tsx
    set /a count+=1
)

if exist "HeroSection.tsx" (
    move "HeroSection.tsx" "components\" >nul 2>&1
    echo [MOVED] HeroSection.tsx
    set /a count+=1
)

if exist "AboutSection.tsx" (
    move "AboutSection.tsx" "components\" >nul 2>&1
    echo [MOVED] AboutSection.tsx
    set /a count+=1
)

if exist "SkillsSection.tsx" (
    move "SkillsSection.tsx" "components\" >nul 2>&1
    echo [MOVED] SkillsSection.tsx
    set /a count+=1
)

if exist "ExperienceSection.tsx" (
    move "ExperienceSection.tsx" "components\" >nul 2>&1
    echo [MOVED] ExperienceSection.tsx
    set /a count+=1
)

if exist "EducationSection.tsx" (
    move "EducationSection.tsx" "components\" >nul 2>&1
    echo [MOVED] EducationSection.tsx
    set /a count+=1
)

if exist "ProjectsSection.tsx" (
    move "ProjectsSection.tsx" "components\" >nul 2>&1
    echo [MOVED] ProjectsSection.tsx
    set /a count+=1
)

if exist "ContactSection.tsx" (
    move "ContactSection.tsx" "components\" >nul 2>&1
    echo [MOVED] ContactSection.tsx
    set /a count+=1
)

if exist "Footer.tsx" (
    move "Footer.tsx" "components\" >nul 2>&1
    echo [MOVED] Footer.tsx
    set /a count+=1
)

echo.
echo === VERIFICATION RESULTS ===
echo.
echo Files moved: %count% / 9
echo.
echo Contents of components folder:
dir "components\" /B
echo.
echo Checking for remaining .tsx component files in root:
dir /B *.tsx 2>nul | find /V "page-example.tsx" && (
    echo [WARNING] Found remaining .tsx files
) || (
    echo [SUCCESS] All component files successfully moved!
)

echo.
pause
