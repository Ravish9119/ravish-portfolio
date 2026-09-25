# 🚀 Ravish Kushwaha | Modern Portfolio Website

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.3-blue?style=flat&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11.15-ff0055?style=flat&logo=framer)](https://www.framer.com/motion/)

A state-of-the-art personal portfolio website for **Ravish Kushwaha** showcasing dual expertise in **Data Analytics & Business Intelligence** and **Full Stack Web Development**.

Designed with modern UI/UX principles, dynamic animations, particle backgrounds, interactive project showcases, and a responsive layout.

---

## 🌟 Key Features

- **⚡ Fast & Modern Architecture:** Built with **Next.js 14 App Router**, **React 18**, and **TypeScript**.
- **🎨 Glassmorphic & Cyber-Dark UI:** Styled with **Tailwind CSS**, subtle glowing accents, and high-contrast readable typography.
- **✨ Dynamic Animations & Particle Canvas:** Smooth interactive canvas background and fluid animations powered by **Framer Motion**.
- **📊 Data Analytics Showcase:** Interactive presentation of Power BI dashboards, SQL pipelines, Python statistical models, and DAX measures.
- **💻 Full Stack Web Projects:** Featured case studies for full-stack and frontend development.
- **📱 Fully Responsive:** Optimized for desktops, tablets, and smartphones.
- **📬 Contact Integration:** One-click WhatsApp chat, direct email modal/mailto, and social profile links (GitHub, LinkedIn).

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Frontend Library:** [React 18](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + PostCSS
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 Project Structure

```text
portfolio/
├── public/                 # Static assets (profile image, icons, SVGs)
│   ├── favicon.svg
│   ├── profile.jpg
│   └── python.svg
├── src/
│   ├── app/
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   ├── layout.tsx      # Root HTML layout and metadata
│   │   └── page.tsx        # Homepage containing all sections
│   ├── components/         # Reusable UI components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── DataWorkflow.tsx
│   │   ├── Education.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── MetricsStrip.tsx
│   │   ├── Navbar.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── Projects.tsx
│   │   ├── Skills.tsx
│   │   └── Strengths.tsx
│   ├── data/
│   │   ├── portfolioData.ts # Data configurations for projects, skills, and info
│   │   └── types.ts         # TypeScript interfaces and types
│   └── lib/
│       └── utils.ts         # Helper utility functions
├── next.config.mjs          # Next.js configuration
├── package.json             # Project dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.ts       # Tailwind theme and styling configuration
└── tsconfig.json            # TypeScript configuration
```

---

## 💻 Getting Started Locally

### Prerequisites

Ensure you have **Node.js (v18.17 or later)** and **npm** installed on your system.

### 1. Navigate to the project folder

```bash
cd portfolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your web browser to view the portfolio.

### 4. Build for production

To verify and generate an optimized production build:

```bash
npm run build
```

To run the production build locally:

```bash
npm run start
```

---

## 🚀 Deployment

The portfolio can be deployed easily on **Vercel**:

1. Push this repository to your **GitHub** account.
2. Sign in to [Vercel](https://vercel.com).
3. Click **"Add New Project"** and import your repository: `portfolio`.
4. In the build settings:
   - If the root contains the `portfolio` folder, set **Root Directory** to `portfolio`.
   - Framework Preset: **Next.js**.
5. Click **Deploy**.

---

## 👤 Author

**Ravish Kushwaha**
- **Title:** Data Analyst & Full Stack Developer
- **University:** Rama University, Kanpur
- **GitHub:** [@Ravish9119](https://github.com/Ravish9119)
- **LinkedIn:** [Ravish Kushwaha](https://www.linkedin.com/in/ravish-kushwaha/)
- **Email:** ravishkumar94@gmail.com
- **Phone:** +91 9119984964

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
