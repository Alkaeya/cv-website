@echo off
cd /d "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"

REM Create components folder
mkdir components

REM Move the 9 files
move Navbar.tsx components\
move HeroSection.tsx components\
move AboutSection.tsx components\
move SkillsSection.tsx components\
move ExperienceSection.tsx components\
move EducationSection.tsx components\
move ProjectsSection.tsx components\
move ContactSection.tsx components\
move Footer.tsx components\

REM List the contents
echo.
echo Components folder contents:
dir components\

pause
