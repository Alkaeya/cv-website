# Alkaeya De La Peña - Professional CV Website

A modern, responsive CV website built with **Next.js 15**, **React 19**, **Tailwind CSS**, with professional dark/light mode toggle. Features comprehensive portfolio sections and mobile-responsive design.

![Next.js](https://img.shields.io/badge/Next.js-16.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)

## 🎯 Features

✨ **Professional Design**
- Modern color scheme with blue/purple gradients
- Clean, minimalist layout with excellent typography
- Smooth transitions and hover effects

🌙 **Dark/Light Mode**
- Toggle switch in navigation bar
- System preference detection
- Persistent theme selection

📱 **Fully Responsive**
- Mobile-first approach
- Works on all device sizes
- Tested on phones, tablets, and desktops

📝 **Comprehensive CV Sections**
- Hero section with name and title
- About/profile section
- 11 technical skills showcase
- Work experience and projects
- Education and certifications
- Project portfolio
- Contact information and social links

🔗 **Social Integration**
- GitHub: https://github.com/Alkaeya
- LinkedIn: https://www.linkedin.com/in/alkaeya-de-la-pe%C3%B1a-7a625a3b9/
- Email: alkaeyadelapena@gmail.com

## 🚀 Quick Start

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

- **Framework:** Next.js 16.1.6
- **UI Library:** React 19.2.3
- **Language:** TypeScript 5
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Deployment:** Vercel

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
