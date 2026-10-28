import React from 'react';
import { 
  Mail, 
  ArrowUpRight, 
  Send,
  MapPin,
  Sparkles
} from 'lucide-react';
import ScrollReveal from './react-bits/ScrollReveal';
import BorderGlow from './react-bits/BorderGlow';

// Official SVG Brand Icons
const LinkedInIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.39-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.19 8.19 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24M8.53 7.33c-.2-.43-.4-.44-.59-.45-.15 0-.33 0-.5.01-.18 0-.46.07-.7.33-.24.27-.92.9-.92 2.2 0 1.3.95 2.56 1.08 2.74.13.18 1.87 2.85 4.53 4 2.66 1.15 2.66.77 3.14.72.48-.05 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.07-.11-.25-.18-.52-.31-.27-.14-1.61-.79-1.86-.88-.25-.09-.43-.13-.62.14-.18.27-.72.88-.88 1.06-.16.18-.33.2-.6.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.35-1.61-1.51-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.31.41-.47.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.13-.6-1.45-.82-1.99z"/>
  </svg>
);

export default function Contact() {
  const contactLinks = [
    {
      name: 'LinkedIn',
      label: 'Connect on LinkedIn',
      handle: 'in/zaidanazizan',
      url: 'https://www.linkedin.com/in/zaidanazizan/',
      icon: LinkedInIcon,
      bgColor: 'hover:border-[#0077B5]/40 hover:bg-[#0077B5]/5',
      iconColor: 'text-[#0077B5]',
      badge: 'Professional Network'
    },
    {
      name: 'Instagram',
      label: 'Follow on Instagram',
      handle: '@zaidan.azz',
      url: 'https://www.instagram.com/zaidan.azz/',
      icon: InstagramIcon,
      bgColor: 'hover:border-[#E1306C]/40 hover:bg-[#E1306C]/5',
      iconColor: 'text-[#E1306C]',
      badge: 'Updates & Media'
    },
    {
      name: 'WhatsApp',
      label: 'Chat on WhatsApp',
      handle: '+62 851-5995-0701',
      url: 'https://wa.me/6285159950701',
      icon: WhatsAppIcon,
      bgColor: 'hover:border-[#25D366]/40 hover:bg-[#25D366]/5',
      iconColor: 'text-[#25D366]',
      badge: 'Direct Discussion'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative gradient backdrops */}
      <div className="absolute top-0 right-1/4 w-[32rem] h-[32rem] bg-cream/70 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-softblue/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal
          mode="scrub"
          enableBlur={true}
          blurStrength={6}
          baseOpacity={0.15}
          effect="fade"
          duration={0.8}
          smoothing={0.2}
        >
          <BorderGlow
            borderRadius={28}
            edgeSensitivity={25}
            glowRadius={35}
            glowIntensity={0.85}
            colors={['#38bdf8', '#818cf8', '#c084fc']}
          >
            {/* Main CTA Container with Border Glow */}
            <div className="relative rounded-3xl bg-gradient-to-br from-[#FFFDF7] via-cream/40 to-[#FFF9ED] border border-softblue/35 shadow-xs p-8 sm:p-12 lg:p-16 overflow-hidden">
          
          {/* Subtle Corner Graphic */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-crimson/5 rounded-full blur-xl pointer-events-none" />

          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream border border-softblue/30 text-navy font-semibold text-xs tracking-wider uppercase mb-4 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-crimson" />
              <span>Get in Touch</span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-navy tracking-tight mb-5">
              Let's <span className="text-crimson">Connect.</span>
            </h2>

            <p className="text-navy/80 text-base sm:text-lg leading-relaxed max-w-2xl">
              Interested in engineering, sustainable technology, research, or creative collaboration? I'd love to connect and explore new opportunities.
            </p>
          </div>

          {/* 3 Prominent Contact Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {contactLinks.map((item, idx) => {
              const Icon = item.icon;
              return (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-6 rounded-2xl bg-white border border-softblue/30 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${item.bgColor} border-glow-blue`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-cream/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                        <Icon className={`w-6 h-6 ${item.iconColor}`} />
                      </div>
                      <span className="text-[11px] font-bold text-navy/55 uppercase tracking-wider bg-cream/70 px-2.5 py-1 rounded-full border border-softblue/20">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-navy text-lg group-hover:text-crimson transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-xs text-navy/60 mt-1 font-mono">
                      {item.handle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-softblue/20 flex items-center justify-between text-xs font-bold text-navy group-hover:text-crimson transition-colors">
                    <span>Open Link</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>
              );
            })}
          </div>

          {/* Email Mailto Action Banner */}
          <div className="p-6 rounded-2xl bg-white/90 border border-softblue/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-left w-full sm:w-auto">
              <div className="w-10 h-10 rounded-xl bg-crimson/10 flex items-center justify-center text-crimson shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-navy/60">Official Email</p>
                <a
                  href="mailto:zaidanazizan27@gmail.com"
                  className="font-display font-semibold text-navy hover:text-crimson text-sm sm:text-base transition-colors"
                >
                  zaidanazizan27@gmail.com
                </a>
              </div>
            </div>

            <a
              href="mailto:zaidanazizan27@gmail.com"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 bg-navy hover:bg-navy-dark text-white rounded-xl text-xs font-bold shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              <Send className="w-3.5 h-3.5 text-cream" />
              <span>Send Direct Email</span>
            </a>
          </div>

          {/* Location & Academic Base */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 text-xs text-navy/60 pt-6 border-t border-softblue/20">
            <div className="flex items-center gap-1.5 font-medium">
              <MapPin className="w-3.5 h-3.5 text-crimson" />
              <span>Surabaya, East Java • Institut Teknologi Sepuluh Nopember (ITS)</span>
            </div>
            <div className="flex items-center gap-1.5 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Open to engineering internships, research, & collaborative projects</span>
            </div>
          </div>

        </div>
      </BorderGlow>
    </ScrollReveal>

  </div>
</section>
  );
}
