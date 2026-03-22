# Alkaeya's Professional CV Website

A modern, responsive CV website built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **Shadcn UI components** featuring professional dark/light mode toggle and comprehensive portfolio sections.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

## 🔗 Links

- **GitHub Repository**: [Alkaeya/cv-website](https://github.com/Alkaeya/cv-website) (Public)
- **Live Website**: [cv-website.vercel.app](https://cv-website.vercel.app) *(Deployed on Vercel)*

## 🎯 Features

✨ **Professional Design with Modern UI**
- Clean, minimalist layout with blue/purple gradient theme
- Shadcn UI components for professional appearance
- Smooth animations and transitions
- Professional headshot/avatar image

🌙 **Dark/Light Mode Toggle**
- Context-based theme management using React hooks
- Persistent theme preference using localStorage
- Smooth transitions between themes
- Toggle button in navigation bar

📱 **Fully Responsive Design**
- Mobile-first approach
- Optimized for all device sizes (mobile, tablet, desktop)
- Tested on various screen resolutions

📝 **Comprehensive CV Sections**
- Hero section with professional avatar and bio
- About section with quick facts
- Technical skills showcase (Frontend, Backend, Tools)
- Academic projects timeline (Capstone, Flutter projects)
- Education background with relevant coursework (15+ courses)
- Projects/Portfolio section
- Contact information and social links

🔗 **Social Integration**
- GitHub: https://github.com/Alkaeya
- LinkedIn: https://www.linkedin.com/in/alkaeya-de-la-pe%C3%B1a-7a625a3b9/
- Email: alkaeyadelapena@gmail.com

## 🤖 AI-Powered Development Approach

This CV website demonstrates **modern AI-assisted web development practices**:

### Design & Architecture
- Modern UI patterns using Shadcn UI components
- Component-based architecture following React best practices
- Responsive design with Tailwind CSS utility-first approach
- Theme management using React Context API

### Features Implemented
1. **Dynamic Theme Switching** - Context-based dark/light mode with localStorage persistence
2. **Component Composition** - Reusable, modular components for different CV sections
3. **Image Optimization** - Next.js Image component for performance and responsiveness
4. **Type Safety** - Full TypeScript implementation for reliable code
5. **Performance** - Optimized bundle size, lazy loading, image compression

### Development Process
- Built with modern tooling (Next.js, React, TypeScript)
- Responsive-first mobile design approach
- Clean code structure with semantic HTML
- Accessibility considerations (alt text, ARIA labels)
- Professional version control workflow with meaningful git commits

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation (3 Steps)

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Organize component files** (Windows)
   ```bash
   run-organization.bat
   ```
   Or (All platforms):
   ```bash
   node organize-files-final.js
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) to see your CV website!

## 📁 Project Structure

```
cv-website/
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
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
├── public/
├── package.json
├── tsconfig.json
└── next.config.ts
```

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| **Framework** | Next.js 16.1.6 |
| **React** | React 19.2.3 |
| **Styling** | Tailwind CSS 3.4.1 |
| **UI Components** | Shadcn UI |
| **Icons** | Lucide React 0.263.1 |
| **Language** | TypeScript 5 |
| **Image Optimization** | Next.js Image Component |
| **Deployment** | Vercel |
| **Version Control** | Git/GitHub |

## 📊 My Background

**Education:**
- BS Information Technology - St. Paul University Philippines (Ongoing)

**Technical Skills:**
- Languages: JavaScript, HTML, CSS
- Frameworks: Next.js, Laravel, Flutter
- Databases: MySQL
- Tools: Git & GitHub, REST APIs, Tailwind CSS
- Expertise: Web Application Development, Responsive Design

**Certifications:**
- Web Development with Laravel
- Next.js Fundamentals
- Tailwind CSS Essentials

**Experience:**
1. **Full-Stack Developer** - Capstone Project
   - Academic Engagement Monitoring System
   - Technologies: Laravel, PHP, MySQL, Tailwind CSS
   - Designed dashboards and data analytics features

2. **Mobile Developer** - Flutter Card Project
   - Created interactive learning application
   - Technologies: Flutter, Dart
   - Focus: UI/UX design and animations

## 🌐 Live Demo

[View Live Website](https://cv-website-demo.vercel.app) (Replace with your Vercel URL)

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push to GitHub
   ```bash
   git add .
   git commit -m "CV website"
   git push origin main
   ```

2. Go to [Vercel.com](https://vercel.com)

3. Click "New Project" → Select your GitHub repo → "Deploy"

4. Done! Your site is live 🎉

## 🎨 Customization

To update your information, edit the component files:

- **HeroSection.tsx** - Name, title, description
- **AboutSection.tsx** - Bio and personal info
- **SkillsSection.tsx** - Your technical skills
- **ExperienceSection.tsx** - Work experience and projects
- **EducationSection.tsx** - Education details
- **ProjectsSection.tsx** - Your projects
- **ContactSection.tsx** - Contact information

## 📚 Documentation

- `SETUP_CV_WEBSITE.md` - Detailed setup guide
- `COMPONENTS_SETUP.md` - Component documentation
- `00_READ_ME_FIRST.md` - Quick start guide

## 📝 Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm start      # Start production server
npm run lint   # Run ESLint
```

## 🐛 Troubleshooting

**Components not found?**
- Make sure files are in `components/` folder
- Run: `node organize-files-final.js`

**Dark mode not working?**
- Install next-themes: `npm install next-themes`

**Styles not loading?**
- Ensure globals.css is imported in layout.tsx
- Run: `npm run dev`

## 📝 Version Control

Initial commit by bootcamp organizers (Pearlshaline).
Updated and customized by Alkaeya De La Peña.

Configure Git with your info:
```bash
git config user.name "Alkaeya De la Pena"
git config user.email "alkaeyadelapena@gmail.com"
```

## 🔗 Links

- [GitHub Repository](https://github.com/Alkaeya)
- [LinkedIn Profile](https://www.linkedin.com/in/alkaeya-de-la-pe%C3%B1a-7a625a3b9/)
- [Email](mailto:alkaeyadelapena@gmail.com)

## 📄 License

MIT License - Feel free to use this as a template for your own CV website!

---

**Built with ❤️ using Next.js, React, and Tailwind CSS**

For more information about Next.js, check out the [Next.js documentation](https://nextjs.org/docs).
