# 🚀 COMPLETE SETUP GUIDE FOR ALKAEYA'S PORTFOLIO

## What Needs to Be Done

This guide will help you:
1. ✅ Configure Git with proper user information
2. ✅ Create a `components` folder
3. ✅ Move 9 component files into the `components` folder
4. ✅ Verify the final directory structure

---

## QUICK START (Recommended)

### Choose ONE of these methods:

#### Method 1: Windows Batch File (EASIEST)
1. Open File Explorer
2. Navigate to: `C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs`
3. Find and double-click: `setup-project.bat`
4. The script will run automatically and complete all tasks

#### Method 2: Node.js Script
1. Open Command Prompt
2. Navigate to your project:
   ```bash
   cd "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"
   ```
3. Run:
   ```bash
   node quick-setup.js
   ```

#### Method 3: Python Script
1. Open Command Prompt
2. Navigate to your project:
   ```bash
   cd "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"
   ```
3. Run:
   ```bash
   python setup.py
   ```

---

## MANUAL SETUP (Step-by-Step)

If you prefer to do it manually or if the scripts don't work:

### Step 1: Configure Git
Open Command Prompt and run:
```bash
cd "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"
git config user.name "Alkaeya De la Pena"
git config user.email "alkaeyadelapena@gmail.com"
```

✅ Verify it worked:
```bash
git config user.name
git config user.email
```

### Step 2: Create Components Folder
In the same Command Prompt window:
```bash
mkdir components
```

Or use File Explorer to create a folder named `components` in the project root.

### Step 3: Move Component Files
In Command Prompt, run these commands one by one:
```bash
move Navbar.tsx components\
move HeroSection.tsx components\
move AboutSection.tsx components\
move SkillsSection.tsx components\
move EducationSection.tsx components\
move ExperienceSection.tsx components\
move ProjectsSection.tsx components\
move ContactSection.tsx components\
move SkillsSection.tsx components\
move Footer.tsx components\
```

Or use File Explorer:
1. Select each file (Navbar.tsx, HeroSection.tsx, etc.)
2. Cut or drag it to the `components` folder

### Step 4: Verify Structure
In Command Prompt, list the components folder:
```bash
dir components
```

You should see:
- AboutSection.tsx
- ContactSection.tsx
- EducationSection.tsx
- ExperienceSection.tsx
- Footer.tsx
- HeroSection.tsx
- Navbar.tsx
- ProjectsSection.tsx
- SkillsSection.tsx

---

## Files to Move (9 Total)

These files should be moved from the project root to the `components/` folder:

1. ✅ Navbar.tsx
2. ✅ HeroSection.tsx
3. ✅ AboutSection.tsx
4. ✅ SkillsSection.tsx
5. ✅ ExperienceSection.tsx
6. ✅ EducationSection.tsx
7. ✅ ProjectsSection.tsx
8. ✅ ContactSection.tsx
9. ✅ Footer.tsx

---

## Expected Final Structure

```
C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs\
│
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
│
├── components/                    ← NEW FOLDER (should be created)
│   ├── AboutSection.tsx          ← Files should be moved here
│   ├── ContactSection.tsx
│   ├── EducationSection.tsx
│   ├── ExperienceSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   └── SkillsSection.tsx
│
├── public/
├── node_modules/
├── package.json
├── tsconfig.json
├── .git/
├── .gitignore
└── ... (config files)
```

---

## IMPORTANT: Update Your Code

After moving the files, you MUST update the imports in `app/page.tsx` (or wherever you import these components):

### Before (OLD - will break):
```typescript
import Navbar from '@/Navbar';
import HeroSection from '@/HeroSection';
import AboutSection from '@/AboutSection';
import SkillsSection from '@/SkillsSection';
import ExperienceSection from '@/ExperienceSection';
import EducationSection from '@/EducationSection';
import ProjectsSection from '@/ProjectsSection';
import ContactSection from '@/ContactSection';
import Footer from '@/Footer';
```

### After (NEW - correct):
```typescript
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
```

---

## Test Your Setup

After completing all steps:

1. Open Command Prompt in your project directory
2. Run:
   ```bash
   npm run dev
   ```
3. You should see:
   ```
   ▲ Next.js 14.x.x
   - Local: http://localhost:3000
   ```
4. Open http://localhost:3000 in your browser
5. Everything should look and work the same!

---

## Commit Your Changes

After verification:
```bash
git add .
git commit -m "Reorganize: Move components to dedicated components folder"
git log
```

---

## Git Configuration Summary

**Configured User:**
- Name: Alkaeya De la Pena
- Email: alkaeyadelapena@gmail.com

This configuration applies to this project only. Future commits will use this name and email.

---

## Available Automation Scripts

If you want to use a script, several are provided in your project:

| Script | Type | Command |
|--------|------|---------|
| `setup-project.bat` | Batch | Double-click or `setup-project.bat` |
| `quick-setup.js` | Node.js | `node quick-setup.js` |
| `setup.py` | Python | `python setup.py` |
| `complete-setup.js` | Node.js | `node complete-setup.js` |

---

## Troubleshooting

### Problem: "File is being used by another process"
**Solution:** Close your code editor and try again.

### Problem: Command not found
**Solution:** Make sure you're in the correct directory:
```bash
cd "C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs"
```

### Problem: npm run dev shows import errors
**Solution:** Update your import statements to use `/components/` as shown above.

### Problem: Git config didn't work
**Solution:** 
```bash
git config --global user.name "Alkaeya De la Pena"
git config --global user.email "alkaeyadelapena@gmail.com"
```

### Problem: Script won't run
**Solution:** Try a different method (batch file vs Node.js vs manual)

---

## Success Checklist

- [ ] Git configured (`git config user.name` shows "Alkaeya De la Pena")
- [ ] `components` folder exists in project root
- [ ] All 9 component files are in `components/` folder
- [ ] No component files remain in project root
- [ ] Import statements in `app/page.tsx` are updated
- [ ] `npm run dev` runs without errors
- [ ] Website displays correctly in browser
- [ ] Git commit created successfully

---

**If you complete all these steps, your project structure will be perfectly organized! ✨**

For questions or issues, refer to the SETUP_INSTRUCTIONS.md file for more detailed information.
