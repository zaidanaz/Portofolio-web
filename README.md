# Zaidan Azizan — Engineering Portfolio Website

Personal portfolio website for **Zaidan Azizan**, Industrial Mechanical Engineering student at **Institut Teknologi Sepuluh Nopember (ITS)**.

Built with **React**, **Vite**, **Tailwind CSS**, and **Three.js**.

---

## 🚀 Live Demo & Local Development

### Prerequisites
- Node.js (v18+)
- npm

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
The optimized production bundle will be generated in `dist/`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## 🎨 Color Palette & Design System
- **Deep Maroon**: `#800000` — Section accents, headlines, editorial highlights
- **Crimson Red**: `#C8102E` — Interactive call-to-actions, buttons, primary badges
- **Warm Cream**: `#FFF2D5` — Warm card backgrounds and section contrast
- **Deep Navy**: `#003049` — Primary typography, technical accents, navigation
- **Soft Blue**: `#669BBC` — Secondary backgrounds, borders, interface elements

---

## 🛠️ Main Features & Architecture

### 1. Home / Hero
- Editorial split layout with authentic portrait photograph (`/assets/profile/Photo Profile.png`).
- Fold Text headline: *"Engineering Ideas. Creating Impact."*
- 3 Direct Actions:
  - **Explore My Work**: Smooth scroll to `#projects`
  - **Download CV**: Direct HTML download of `/assets/profile/CV Zaidan Azizan.pdf`
  - **Contact Me**: Smooth scroll to `#contact`
- Floating metric pills (GPA 3.61, 2x National 1st Place, 10+ Leadership Roles).

### 2. About Me
- Complete student biography, academic standing at ITS (Class of 2025, 3rd semester, GPA 3.61/4.00).
- 6 technical interest cards and verified software stack (Fusion 360, AutoCAD, ANSYS Fluent, React, Supabase, Excel).

### 3. Selected Projects
- **Interactive 3D Wind Turbine CAD**:
  - Converted from Autodesk Fusion 360 OBJ assembly into an optimized binary GLB (`wind-turbine.glb`).
  - Powered by Three.js with OrbitControls.
  - Features 360° auto-rotation, manual click-and-drag rotation, mouse wheel & touch pinch zoom, Reset View, and fullscreen/modal inspection.
- **ANSYS Fluent CFD Manifold**:
  - Internal velocity distribution and streamline convergence visualization for a 4-to-1 manifold.
  - Qualitative engineering overview and learnings.
- **English Mastery Web App**:
  - Oxford 3000 vocabulary platform built with React, JS, and Supabase.
  - Interactive screenshot carousel (Home, Login, Flashcard preview, Supabase integration, Streak tracking).
  - Direct **"Visit Live Website"** button pointing to `https://zaidanaz.github.io/English-Mastery/review` (`target="_blank" rel="noopener noreferrer"`).

### 4. Experience & Leadership
- **Seamless Infinite Animated Logo Loop**:
  - Features authentic organization logos (SRE ITS, AgroVision, HETI SY ITS, SME ITS, J-Fest 37, SEC 8.0, Service Gratis, Ini Lho ITS, LASTIVAL).
  - Pauses on hover, shows organization tooltips, and clicks to jump/highlight the relevant experience card.
- **Progressive Disclosure**:
  - Highlights CRO role at AgroVision with funded HETI grant, SRE ITS Project Implementation, SME ITS Best Staff Award, and J-Fest 37 sponsorship.
  - Toggle button expands all 12 university and community leadership entries.

### 5. Achievements & Awards
- **Depth Carousel** for 4 featured national honors with authentic certificates:
  - 1st Place — Economic Fair Budi Luhur National Business Plan Competition 2026
  - 1st Place — Inovasi Produk Pertanian 2026 (POLBANGTAN Gowa)
  - 3rd Place — Prologix 2026 (UNESA, BlueSense)
  - 2nd Place — Balsa Wood Bridge Competition 2024 (UPH)
- Lightbox inspection modal displaying non-cropped certificates.
- Official Instagram documentation links.
- Secondary grid for additional national business plan achievements.

### 6. Contact Me
- Direct channels:
  - **LinkedIn**: `https://www.linkedin.com/in/zaidanazizan/`
  - **Instagram**: `https://www.instagram.com/zaidan.azz/`
  - **WhatsApp**: `https://wa.me/6285159950701`
  - **Email**: `mailto:zaidanazizan27@gmail.com`
- Border Glow hover accents.

---

## 📁 Maintenance Guide

- **Add/Edit Projects**: Update `src/data/projects.js`
- **Add/Edit Experiences**: Update `src/data/experiences.js`
- **Add/Edit Achievements**: Update `src/data/achievements.js`
- **Add/Edit Organization Logos**: Place images into `public/assets/organizations/` and update `src/data/organizations.js`
- **Update CV**: Replace `public/assets/profile/CV Zaidan Azizan.pdf`
