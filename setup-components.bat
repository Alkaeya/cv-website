@echo off
REM This batch file organizes the component files into the components directory

echo Creating components directory...
if not exist components mkdir components

echo Moving component files...
move /Y Navbar.tsx components\ >nul 2>&1
move /Y HeroSection.tsx components\ >nul 2>&1
move /Y AboutSection.tsx components\ >nul 2>&1
move /Y SkillsSection.tsx components\ >nul 2>&1
move /Y ExperienceSection.tsx components\ >nul 2>&1
move /Y EducationSection.tsx components\ >nul 2>&1
move /Y ProjectsSection.tsx components\ >nul 2>&1
move /Y ContactSection.tsx components\ >nul 2>&1
move /Y Footer.tsx components\ >nul 2>&1

echo.
echo ✅ Component organization complete!
echo.
echo Components created:
dir components\*.tsx /b
echo.
echo Next steps:
echo 1. Update your app/page.tsx or app/layout.tsx to import these components
echo 2. Example imports:
echo    import Navbar from '@/components/Navbar';
echo    import HeroSection from '@/components/HeroSection';
echo.
pause
