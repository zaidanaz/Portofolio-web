import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SoftwareExpertStrip from './components/SoftwareExpertStrip';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFDF7] text-navy font-sans antialiased selection:bg-crimson selection:text-white">
      {/* Sticky Navigation with new vector logo */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home / Hero (Refactored headline, 2-line bio, metrics, standalone cutout) */}
        <Hero />

        {/* 2. Software Expert Strip (Tech Stack Marquee) */}
        <SoftwareExpertStrip />

        {/* 3. About Me (Refactored 2-col overview + education, horizontal technical interests below) */}
        <About />

        {/* 4. Selected Projects (Trimmed scannable text, static Fusion 360 preview, seamless Oxford 3000 strip) */}
        <Projects />

        {/* 5. Experience & Leadership (Borderless prominent logo slider, 2-col experience cards) */}
        <Experience />

        {/* 6. Achievements & Recognition (Clean borderless certificate showcase and pagination) */}
        <Achievements />

        {/* 7. Contact Me */}
        <Contact />
      </main>

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
