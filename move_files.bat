@echo off
REM Create components directory
mkdir components

REM Move all .tsx files to the components directory
move Navbar.tsx components\
move HeroSection.tsx components\
move AboutSection.tsx components\
move SkillsSection.tsx components\
move ExperienceSection.tsx components\
move EducationSection.tsx components\
move ProjectsSection.tsx components\
move ContactSection.tsx components\
move Footer.tsx components\

REM Display the files in the components directory
echo.
echo Files moved to components directory:
dir components\*.tsx

pause
