# Project Structure Setup Guide

## Overview
This document provides instructions to organize your Next.js portfolio project by moving component files into a dedicated `components/` folder and configuring Git.

## Tasks to Complete

### Task 1: Configure Git
Run these commands in your project directory:
```bash
git config user.name "Alkaeya De la Pena"
git config user.email "alkaeyadelapena@gmail.com"
```

**Verification:**
```bash
git config user.name      # Should show: Alkaeya De la Pena
git config user.email     # Should show: alkaeyadelapena@gmail.com
```

### Task 2: Create Components Folder
Create a new folder named `components` in the project root:
```bash
mkdir components
```

Or use File Explorer to create the folder.

### Task 3: Move Component Files
Move these 9 files from the project root into the `components/` folder:

1. `Navbar.tsx`
2. `HeroSection.tsx`
3. `AboutSection.tsx`
4. `SkillsSection.tsx`
5. `ExperienceSection.tsx`
6. `EducationSection.tsx`
7. `ProjectsSection.tsx`
8. `ContactSection.tsx`
9. `Footer.tsx`

**Using Command Line (Batch):**
```bash
move Navbar.tsx components\
move HeroSection.tsx components\
move AboutSection.tsx components\
move SkillsSection.tsx components\
move ExperienceSection.tsx components\
move EducationSection.tsx components\
move ProjectsSection.tsx components\
move ContactSection.tsx components\
move Footer.tsx components\
```

**Using PowerShell:**
```powershell
$files = @('Navbar.tsx', 'HeroSection.tsx', 'AboutSection.tsx', 'SkillsSection.tsx', 'ExperienceSection.tsx', 'EducationSection.tsx', 'ProjectsSection.tsx', 'ContactSection.tsx', 'Footer.tsx')
$files | ForEach-Object { Move-Item $_ components\ }
```

**Using File Explorer:**
- Right-click and drag each file into the `components` folder

## Automated Setup Scripts

### Option 1: Run Node.js Script
```bash
node quick-setup.js
```

### Option 2: Run Python Script
```bash
python setup.py
```

### Option 3: Run Batch File
```bash
setup-project.bat
```

### Option 4: Run Complete Setup
```bash
node complete-setup.js
```

## Final Directory Structure

After completing all tasks, your project should look like this:

```
boiler-plate-nextjs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/              ← NEW FOLDER
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── EducationSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── public/
├── node_modules/
├── package.json
├── tsconfig.json
├── .git/
├── .gitignore
└── ... (other config files)
```

## Next Steps

After organizing the component files:

1. **Update Imports in app/page.tsx**
   Update the import statements to reference the new location:
   
   ```typescript
   // Old
   import Navbar from '@/Navbar';
   import HeroSection from '@/HeroSection';
   // ... etc
   
   // New
   import Navbar from '@/components/Navbar';
   import HeroSection from '@/components/HeroSection';
   // ... etc
   ```

2. **Verify Everything Works**
   ```bash
   npm run dev
   ```

3. **Commit Your Changes**
   ```bash
   git add .
   git commit -m "Reorganize: Move components to dedicated components folder"
   ```

## Verification Checklist

- [ ] Git user configured with correct name and email
- [ ] `components/` folder created in project root
- [ ] All 9 component files moved to `components/` folder
- [ ] No component files remain in project root
- [ ] All imports in `app/page.tsx` updated to reference `components/`
- [ ] `npm run dev` runs without errors
- [ ] Git commit created successfully

## Troubleshooting

### Issue: Files won't move
**Solution:** Make sure no text editor has the files open, then try again.

### Issue: Component imports are broken
**Solution:** Update the import paths in your `app/page.tsx` to use the new location with `@/components/`.

### Issue: Git config not working
**Solution:** Make sure you're in the correct project directory and have Git installed.

### Issue: PowerShell script execution failed
**Solution:** You can run the batch file or use Command Prompt instead:
```batch
cmd.exe
cd "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"
setup-project.bat
```

## Help & Support

If you encounter any issues:
1. Check that you're in the correct project directory
2. Ensure all files are closed in your editor
3. Verify Node.js and Git are installed
4. Check file permissions

---

**Project:** Alkaeya De la Pena's Portfolio  
**Setup Date:** Generated for Next.js Portfolio Project  
**Git User:** Alkaeya De la Pena (alkaeyadelapena@gmail.com)
