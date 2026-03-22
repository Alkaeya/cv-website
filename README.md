# Personal CV and Interactive Developer Portfolio

A modern, highly responsive developer portfolio built to showcase academic projects, technical skills, and software development growth as an Information Technology student.

## Live Links

- **Live Portfolio:** https://cv-website-kappa-sandy.vercel.app/
- **Repository:** https://github.com/Alkaeya/cv-website

## AI Generation Approach

This project was developed using a hybrid workflow: AI-assisted generation for speed and manual engineering for architecture, integration, and quality control.

- **UI and Layout Generation (v0.dev):** Core section layouts and reusable interface structure were generated using v0.dev, then adapted into the project component hierarchy.
- **Architecture and Integration (LLM Assistance):** AI assistance helped with integration into a modern Next.js App Router codebase, dependency alignment, and debugging issues during setup.
- **Debugging and Refactoring:** AI was used to help diagnose missing package issues, adjust Tailwind and component configuration, and refine project structure for maintainability.
- **Content Refinement:** AI-assisted drafting was used to convert academic and project experience into concise, professional portfolio wording.

## Features Implemented

- **Next.js App Router architecture for scalable page and component structure**
- **Dark and Light mode toggle with system preference support**
- **Modular, reusable component sections (Hero, Experience, Projects, Skills, Education, Footer)**
- **Responsive layout for desktop, tablet, and mobile**
- **Interactive project cards with repository links**
- **Radix and Shadcn-inspired UI primitives with accessible patterns**

## Tech Stack

- **Framework:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** Radix UI patterns, Shadcn-style components
- **Icons:** Lucide React
- **Theme Management:** next-themes
- **Deployment:** Vercel

## How to Run Locally

1. **Clone the repository:**

```bash
git clone https://github.com/Alkaeya/cv-website.git
cd cv-website
```

2. **Install dependencies:**

```bash
npm install
```

3. **Start the development server:**

```bash
npm run dev
```

4. **Open your browser at:**

```
http://localhost:3000
```

## Production Commands

```bash
npm run build
npm run start
```

## Project Structure

```
cv-website/
├── app/
│   ├── layout.tsx          # Root layout with theme provider
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation with theme toggle
│   ├── HeroSection.tsx      # Introduction & hero section
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

## Key Features Implemented

### ✨ Dark & Light Mode
![Dark Mode Screenshot](https://github.com/user-attachments/assets/0e6a9884-a598-459d-95e5-2404c0875a35)
- Toggle button in navbar (sun/moon icon)
- Automatic system preference detection
- Persistent theme selection using `next-themes`
- Smooth transitions between themes

### 🎨 Component Architecture
- **Navbar:** Sticky navigation with theme toggle
- **HeroSection:** Introduction with avatar, bio, and CTA buttons
- **AboutSection:** Career summary and core competencies
- **SkillsSection:** Technical skills categorized by type
- **ExperienceSection:** Capstone project with detailed descriptions
- **EducationSection:** Educational background and courses
- **ProjectsSection:** Portfolio projects with GitHub links
- **Footer:** Contact information and social links

### 📱 Responsive Design
![Light Mode Screenshot](https://github.com/user-attachments/assets/184fbd5a-fdc8-47ae-8c17-0623a869b8bf)
- Mobile-first approach
- Tailwind CSS breakpoints (sm, md, lg)
- Touch-friendly interactive elements
- Optimized image handling with Next.js Image component

### ♿ Accessibility
- Semantic HTML structure
- ARIA labels for icon buttons
- Proper heading hierarchy
- Keyboard navigation support

## Deployment

This project is deployed on **Vercel** with automatic deployment on every push to the main branch.

- **Production URL:** https://cv-website-kappa-sandy.vercel.app/
- **Branch:** main
- **Auto-deploy:** Yes

## Getting Started with Development

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

## Customization Guide

### Updating Content
- **Personal Information:** Edit `components/HeroSection.tsx`
- **Skills:** Update `components/SkillsSection.tsx`
- **Experience:** Modify `components/ExperienceSection.tsx`
- **Education:** Update `components/EducationSection.tsx`
- **Projects:** Edit `components/ProjectsSection.tsx`

### Styling
- **Colors:** Modify Tailwind config in `tailwind.config.js`
- **Typography:** Adjust font sizes and families in CSS classes
- **Theme Colors:** Edit gradient colors and hover states in components

### Adding a Profile Picture
1. Replace `/public/avatar.jpg` with your image
2. Ensure image is square (recommended: 288x288px minimum)
3. The component will automatically apply circular crop and shadow

## v0.dev AI Generation Process

This project demonstrates a **hybrid AI-powered development workflow** combining v0.dev for design generation and GitHub Copilot for implementation:

### v0.dev Design Phase
![v0.dev Process](https://github.com/user-attachments/assets/79005484-0524-4211-b495-ad9e9616b52e)

**Project Link:** https://v0.app/chat/cv-portfolio-website-bAptLyko678

v0.dev was used to rapidly prototype the professional CV portfolio design with the following specifications:
- Responsive layout for desktop, tablet, and mobile
- Dark/light mode toggle with theme switching
- Component structure for Hero, About, Skills, Experience, Education, Projects, and Footer sections
- Professional typography and color scheme
- Interactive elements and micro-interactions

### GitHub Copilot Enhancement Phase
The v0.dev design was then enhanced and customized using GitHub Copilot for:
- **Component Development:** Code generation for all React/TypeScript components
- **Integration:** Seamless integration into Next.js App Router architecture
- **Styling Refinement:** Advanced Tailwind CSS customization and animations
- **Content Integration:** Converting personal experience data into dynamic components
- **Debugging & Optimization:** Resolving dependency issues and performance optimization

### Implementation Workflow
1. **Design Foundation:** v0.dev generated initial layout and component structure
2. **Code Generation:** GitHub Copilot assisted with component logic and styling
3. **Customization:** Manual refinement of colors, spacing, and interactive behaviors
4. **Content Population:** Adding real personal and academic information
5. **Testing & Deployment:** Verifying dark/light mode, responsiveness, and deploying to Vercel

### Result
A modern, production-ready professional portfolio that demonstrates:
- ✨ Mastery of AI-powered design tools (v0.dev)
- 💻 Proficiency with AI-assisted coding (GitHub Copilot)
- 🎨 Clean code architecture and modern web design patterns
- 🚀 Successful deployment and CI/CD workflow

---

**Built with ❤️ using Next.js, React, Tailwind CSS, and v0.dev AI Generation**
