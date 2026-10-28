import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  mode = 'scrub',
  enableBlur = true,
  blurStrength = 6,
  baseOpacity = 0.15,
  effect = 'fade',
  duration = 0.8,
  smoothing = 0.2,
  className = '',
  yOffset = 24,
}) {
  const elRef = useRef(null);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const initialVars = {
        opacity: baseOpacity,
        y: yOffset,
      };

      if (enableBlur) {
        initialVars.filter = `blur(${blurStrength}px)`;
      }

      const targetVars = {
        opacity: 1,
        y: 0,
        ease: 'power2.out',
      };

      if (enableBlur) {
        targetVars.filter = 'blur(0px)';
      }

      if (mode === 'scrub') {
        gsap.fromTo(el, initialVars, {
          ...targetVars,
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            end: 'top 65%',
            scrub: typeof smoothing === 'number' ? smoothing : 0.2,
            toggleActions: 'play none none reverse',
          },
        });
      } else {
        gsap.fromTo(el, initialVars, {
          ...targetVars,
          duration: duration || 0.8,
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        });
      }
    }, elRef);

    return () => ctx.revert();
  }, [mode, enableBlur, blurStrength, baseOpacity, effect, duration, smoothing, yOffset]);

  return (
    <div ref={elRef} className={`scroll-reveal ${className}`}>
      {children}
    </div>
  );
}
