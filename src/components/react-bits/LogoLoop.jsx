import React, { useRef, useState } from 'react';
import './LogoLoop.css';

export default function LogoLoop({
  logos = [],
  speed = 60,
  gap = 56,
  logoHeight = 80,
  fadeOut = true,
  fadeOutWidth = 0.15,
  pauseOnHover = true,
  onSelect = null,
  className = '',
}) {
  const trackRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Repeat logos 4 times so translateX(-50%) is mathematically seamless
  const repeatedLogos = [...logos, ...logos, ...logos, ...logos];

  // Calculate animation duration based on total estimated width and speed (pixels/sec)
  const estimatedItemWidth = logoHeight * 2.2 + gap;
  const singleLoopWidth = logos.length * 2 * estimatedItemWidth;
  const duration = Math.max(singleLoopWidth / (speed || 60), 22);

  const fadeWidthPercent = (fadeOutWidth || 0.15) * 100;

  return (
    <div
      className={`logo-loop-container experience-marquee-container relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsHovered(true)}
      onMouseLeave={() => pauseOnHover && setIsHovered(false)}
    >
      {fadeOut && (
        <>
          <div
            className="logo-loop-fade-left"
            style={{ width: `${fadeWidthPercent}%` }}
            aria-hidden="true"
          />
          <div
            className="logo-loop-fade-right"
            style={{ width: `${fadeWidthPercent}%` }}
            aria-hidden="true"
          />
        </>
      )}

      <div
        ref={trackRef}
        className="logo-loop-track experience-marquee-track py-3"
        style={{
          gap: `${gap}px`,
          animation: `infiniteLoopMarquee ${duration}s linear infinite`,
          animationPlayState: isHovered ? 'paused' : 'running',
        }}
      >
        {repeatedLogos.map((item, index) => {
          const isAriaHidden = index >= logos.length;
          return (
            <button
              key={`${item.id || item.shortName || index}-${index}`}
              onClick={() => onSelect && onSelect(item.experienceId || item.id)}
              className="logo-loop-item experience-marquee-item focus:outline-none focus:ring-2 focus:ring-crimson rounded-2xl p-2 cursor-pointer transition-transform duration-200"
              title={item.name || item.shortName}
              type="button"
              tabIndex={isAriaHidden ? -1 : 0}
              aria-hidden={isAriaHidden ? 'true' : undefined}
            >
              <img
                src={item.logo || item.icon}
                alt={item.name || item.shortName || 'Logo'}
                style={{
                  height: `${logoHeight}px`,
                  maxHeight: `${logoHeight}px`,
                  width: 'auto',
                  maxWidth: `${Math.round(logoHeight * 2.6)}px`,
                }}
                className="object-contain filter drop-shadow-sm select-none"
                loading="lazy"
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
