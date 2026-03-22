# Alkaeya's Professional CV & Portfolio

A modern, fully responsive professional portfolio website showcasing IT student background, capstone projects, technical skills, and academic achievements. Built with AI-powered design tools and Next.js for optimal performance and user experience.

## 📋 Live Links

- **Live Portfolio:** https://cv-website-kappa-sandy.vercel.app/
- **Repository:** https://github.com/Alkaeya/cv-website

## 🎨 AI Generation Approach

This project was developed using a **hybrid AI-powered workflow** combining design generation and code implementation:

- **v0.dev Design Phase:** Used v0.dev to rapidly prototype the professional CV portfolio structure with responsive layouts, dark/light mode toggle, and modular component architecture
- **GitHub Copilot Implementation:** Leveraged Copilot for code generation of React/TypeScript components, styling with Tailwind CSS, and integration into Next.js App Router
- **Architecture & Integration:** AI assistance with Next.js setup, dependency management, theme provider implementation, and component hierarchy optimization
- **Quality Refinement:** Used AI to debug package issues, optimize Tailwind configuration, refactor components for maintainability, and refine portfolio content into professional language

## ✨ Features Implemented

- **Next.js 15 App Router** - Scalable, modern page and component structure
- **Dark & Light Mode Toggle** - Seamless theme switching with system preference detection via next-themes
- **Responsive Design** - Optimized for desktop, tablet, and mobile devices with Tailwind CSS breakpoints
- **Modular Components** - Reusable sections: Hero, About, Skills, Experience, Education, Projects, Contact, Footer
- **Interactive Elements** - Smooth animations, hover effects, and CTA buttons for engagement
- **Professional Avatar** - Circular profile image with shadow effects and responsive sizing
- **Accessibility First** - Semantic HTML, ARIA labels, proper heading hierarchy, and keyboard navigation

## 🛠 Tech Stack

- **Framework:** Next.js 15, React 19, TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI patterns, Shadcn-inspired design system
- **Icons & Assets:** Lucide React for consistent iconography
- **Theme Management:** next-themes with persistent storage
- **Deployment:** Vercel with automatic CI/CD

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm

### Setup & Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Alkaeya/cv-website.git
cd cv-website
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```
Visit `http://localhost:3000` to see the site

4. **Build for production:**
```bash
npm run build
npm run start
```

## 📂 Project Structure

```
cv-website/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation with theme toggle
│   ├── HeroSection.tsx      # Hero section with avatar & intro
│   ├── AboutSection.tsx     # Bio & career summary
│   ├── SkillsSection.tsx    # Technical skills
│   ├── ExperienceSection.tsx # Work & project experience
│   ├── EducationSection.tsx # Education background
│   ├── ProjectsSection.tsx  # Portfolio projects
│   ├── ContactSection.tsx   # Contact information
│   ├── Footer.tsx           # Footer with social links
│   └── ThemeProvider.tsx    # Dark/light mode provider
├── public/
│   └── avatar.jpg          # Profile picture
├── package.json
├── next.config.ts
├── tailwind.config.js
└── tsconfig.json
```

## 🎯 Key Sections

### Hero Section
Introduction with name, professional title (IT Student | Aspiring Full-Stack Developer), personal bio, CTA buttons, and circular avatar image. Also includes social media links (GitHub, LinkedIn, Email).

### Skills Section
Technical competencies including:
- **Languages:** JavaScript, TypeScript, PHP, Python
- **Frontend:** Next.js, React, HTML, CSS, Tailwind CSS
- **Backend:** Laravel, REST APIs
- **Database:** MySQL
- **Tools:** Git, Responsive Design

### Experience Section
**Full-Stack Developer (Capstone Project)**
- Co-developing Student Academic Engagement Monitoring System with Decision Support
- Building secure backend with PHP and Laravel framework
- Designing interactive Data Analytics dashboards
- Technologies: Laravel, PHP, MySQL, Tailwind CSS, Data Analytics

### Education Section
- BS Information Technology at St. Paul University Philippines
- Relevant coursework and certifications

### Projects Section
Portfolio of academic and personal projects with descriptions and GitHub repository links

## 🌓 Theme Customization

### Dark Mode
- Beautiful dark theme optimized for extended viewing
- Moon icon toggle in navigation bar
- Smooth color transitions

### Light Mode
- Clean, readable light theme with professional styling
- Sun icon toggle in navigation bar
- Automatically respects system preferences

## 📱 Responsive Design & Accessibility

- **Mobile-First Approach:** Optimized layouts starting from mobile up to desktop
- **Breakpoints:** Full support for sm, md, and lg screens via Tailwind
- **Touch-Friendly:** Large interactive areas and smooth scrolling
- **Accessibility Features:** Semantic HTML, ARIA labels, proper heading hierarchy, keyboard navigation support

## 🔧 Customization Guide

### Update Personal Information
- **Name & Title:** Edit `components/HeroSection.tsx`
- **Bio & Summary:** Modify text in `components/AboutSection.tsx`
- **Skills:** Update skill list in `components/SkillsSection.tsx`
- **Experience:** Modify project details in `components/ExperienceSection.tsx`
- **Education:** Update education info in `components/EducationSection.tsx`
- **Projects:** Add/edit projects in `components/ProjectsSection.tsx`

### Customize Styling
- **Colors:** Modify color palette in `tailwind.config.js`
- **Typography:** Adjust font sizes and families in component CSS classes
- **Theme Colors:** Edit gradient backgrounds and hover states in components

### Add Profile Picture
1. Replace `/public/avatar.jpg` with your image (square format recommended, 288x288px minimum)
2. The circular crop and shadow effects are automatically applied by the Image component

## 🚀 Deployment

This project is deployed on **Vercel** with automatic continuous deployment on every push to the main branch.

- **Production URL:** https://cv-website-kappa-sandy.vercel.app/
- **Auto-Deploy:** Enabled on main branch
- **Performance:** Optimized for fast load times and smooth interactions

## 📊 v0.dev AI Generation Process

This project demonstrates a complete **AI-powered development workflow** leveraging modern tools for rapid prototyping and professional implementation:

### v0.dev Design Phase
![v0.dev Process](https://github.com/user-attachments/assets/79005484-0524-4211-b495-ad9e9616b52e)

**v0.dev Project:** https://v0.app/chat/cv-portfolio-website-bAptLyko678

v0.dev was used for rapid prototyping with:
- Professional responsive layouts for all portfolio sections
- Dark/light mode toggle UI patterns
- Component structure and styling framework
- Interactive element designs and micro-interactions

### Development Workflow

1. **Design Foundation** - v0.dev generated initial layout and component structure
2. **Code Implementation** - GitHub Copilot assisted with React/TypeScript component development
3. **Architecture Setup** - Integrated into Next.js 15 App Router with proper structure
4. **Styling & Theme** - Advanced Tailwind CSS customization with dark mode support
5. **Content Integration** - Added real CV content and personal information
6. **Optimization** - Resolved dependencies, optimized performance, enhanced accessibility
7. **Deployment** - Configured for automatic Vercel deployment with CI/CD

### Results Achieved
- ✨ Modern, professional portfolio showcasing IT student background
- 💻 Full-stack implementation using cutting-edge web technologies
- 🎨 Clean, maintainable code architecture with modular components
- 🌍 Globally accessible via Vercel with optimized performance
- 🔄 Demonstrates mastery of AI-powered design and development tools

### Dark Mode Screenshot
![Dark Mode](https://github.com/user-attachments/assets/0e6a9884-a598-459d-95e5-2404c0875a35)

### Light Mode Screenshot
![Light Mode](https://github.com/user-attachments/assets/184fbd5a-fdc8-47ae-8c17-0623a869b8bf)

---

**Built with ❤️ using Next.js 15, React 19, Tailwind CSS, and v0.dev AI Generation**

---

**Built with ❤️ using Next.js, React, Tailwind CSS, and v0.dev AI Generation**
