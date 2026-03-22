# CV Website Components - Setup Guide

## 📋 Overview

This package contains 9 professional React TypeScript components for a CV/Portfolio website with dark mode support and responsive design.

## 📦 Component Files

All component files are currently in the root directory and need to be moved to a `components/` directory:

1. **Navbar.tsx** - Sticky navigation bar with dark/light mode toggle
2. **HeroSection.tsx** - Hero section with name, title, and CTA buttons
3. **AboutSection.tsx** - About/Profile section with highlights
4. **SkillsSection.tsx** - Skills categories and proficiency levels
5. **ExperienceSection.tsx** - Work experience timeline
6. **EducationSection.tsx** - Education and certifications
7. **ProjectsSection.tsx** - Featured and other projects portfolio
8. **ContactSection.tsx** - Contact form and information
9. **Footer.tsx** - Footer with social links

## 🚀 Setup Instructions

### Option 1: Automatic Setup (Windows)
1. Open Command Prompt or PowerShell
2. Navigate to the project directory:
   ```
   cd C:\Users\Alkaeya De la Pena\Documents\bootcamp\boiler-plate-nextjs
   ```
3. Run the setup script:
   ```
   setup-components.bat
   ```

### Option 2: Manual Setup
1. Create a `components` directory in the project root
2. Move all `.tsx` files (Navbar.tsx, HeroSection.tsx, etc.) into the `components/` directory

### Option 3: Using Node.js
```bash
node organize-components.js
```

## 📁 Final Structure

After setup, your project structure should look like:

```
boiler-plate-nextjs/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── ...
├── components/
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
└── ...
```

## 💻 Integration Example

Update your `app/page.tsx` to use the components:

```typescript
'use client';

import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
```

Or update your `app/layout.tsx`:

```typescript
'use client';

import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Alkaeya - Full-Stack Web Developer',
  description: 'Portfolio of Alkaeya De La Peña, IT Student and Web Developer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
```

## 🎨 Component Features

### All Components Include:
- ✅ `'use client'` directive for client-side interactivity
- ✅ Tailwind CSS styling with dark mode support
- ✅ lucide-react icons
- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Professional animations and transitions
- ✅ Accessibility features (ARIA labels)

### Key Features:
- **Dark Mode**: Click the moon/sun icon in the navbar to toggle
- **Responsive Navigation**: Mobile menu on small screens
- **Smooth Scrolling**: Navigation links use anchor tags
- **Contact Form**: Fully functional with validation
- **Skill Proficiency**: Visual progress bars for skills
- **Project Showcase**: Featured and other projects sections
- **Timeline Design**: Experience section with timeline layout

## 📝 Customization

### Update Content
All component files contain placeholder content that you can customize:

**Navbar.tsx** - Navigation links and branding
**HeroSection.tsx** - Name, title, bio, and CTA buttons
**AboutSection.tsx** - Personal summary and highlights
**SkillsSection.tsx** - Skill categories and proficiency levels
**ExperienceSection.tsx** - Work experience entries
**EducationSection.tsx** - Education and certifications
**ProjectsSection.tsx** - Project descriptions and links
**ContactSection.tsx** - Contact form and information
**Footer.tsx** - Social links and footer content

### Update Styling
All components use Tailwind CSS classes. Modify the `className` attributes to customize colors, spacing, and layout.

### Update Icons
Components use icons from lucide-react. Replace icon names with other available icons from the lucide-react library.

## 🔧 Prerequisites

Ensure your `package.json` includes these dependencies:

```json
{
  "dependencies": {
    "next": "^16.1.6",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "latest",
    "tailwindcss": "^4.0.0"
  }
}
```

If not already installed, run:
```bash
npm install lucide-react
```

## 🚀 Running the Project

After setup:

```bash
# Install dependencies (if not already done)
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Then visit `http://localhost:3000` to see your CV website!

## 📚 Component Details

### Navbar
- Sticky positioning
- Dark/light mode toggle
- Mobile hamburger menu
- Smooth transitions

### HeroSection
- Large hero image area
- Name and title display
- Bio text
- CTA buttons
- Social media links
- Animated scroll indicator

### AboutSection
- Profile summary
- Key highlights
- Statistics display
- Call-to-action button

### SkillsSection
- Skill categories
- Proficiency bars
- Responsive grid layout

### ExperienceSection
- Timeline design
- Experience entries
- Technology tags
- Highlight bullets

### EducationSection
- Education details
- Certifications grid
- Degree information

### ProjectsSection
- Featured projects (large cards)
- Additional projects (grid)
- Project descriptions
- Technology tags
- Links to code/demo

### ContactSection
- Contact form
- Contact information
- Social media links
- Success message

### Footer
- Brand information
- Navigation links
- Social media icons
- Copyright information
- Scroll-to-top button

## ✨ Design Features

- **Gradient Accents**: Blue to purple gradients throughout
- **Dark Mode**: Complete dark theme support
- **Shadows & Effects**: Professional hover effects
- **Spacing**: Consistent padding and margins
- **Typography**: Clear hierarchy and readability
- **Animations**: Smooth transitions and hover effects
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🐛 Troubleshooting

### Components Not Importing
- Ensure files are in `components/` directory
- Check import paths use `@/components/`
- Verify file names match exactly (case-sensitive on Linux/Mac)

### Styling Not Applying
- Check Tailwind CSS is installed: `npm install tailwindcss`
- Verify `tailwind.config.ts` includes component paths
- Ensure `globals.css` includes Tailwind directives

### Icons Not Showing
- Install lucide-react: `npm install lucide-react`
- Check icon names are spelled correctly
- Verify import statement in each component

### Dark Mode Not Working
- Check `dark` class is being added to `<html>` element
- Verify Tailwind dark mode is configured in `tailwind.config.ts`
- Browser dev tools should show `dark` class when toggled

## 📞 Support

For issues or questions:
1. Check component comments in the code
2. Review Tailwind CSS documentation: https://tailwindcss.com
3. Check lucide-react icons: https://lucide.dev
4. Review Next.js documentation: https://nextjs.org/docs

---

**Created**: 2024
**Author**: Alkaeya De La Peña
**Technologies**: React, Next.js, TypeScript, Tailwind CSS, lucide-react
