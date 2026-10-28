import React, { useRef, useState, useCallback } from 'react';
import './BorderGlow.css';

export default function BorderGlow({
  children,
  borderRadius = 24,
  edgeSensitivity = 25,
  glowRadius = 35,
  glowIntensity = 0.85,
  colors = ['#38bdf8', '#818cf8', '#c084fc'],
  className = '',
}) {
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCoords({ x, y });
  }, []);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  // Gradient string created from colors
  const gradientColors = colors.join(', ');

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`border-glow-wrapper ${className}`}
      style={{
        borderRadius: `${borderRadius}px`,
      }}
    >
      {/* Outer interactive cursor-following glow & border */}
      <div
        className="border-glow-overlay"
        style={{
          borderRadius: `${borderRadius}px`,
          opacity: isHovered ? glowIntensity : 0,
          background: `radial-gradient(${glowRadius * 3}px circle at ${coords.x}px ${coords.y}px, ${colors[0]} 0%, ${colors[1] || colors[0]} 40%, ${colors[2] || 'transparent'} 70%, transparent 100%)`,
          padding: '1.5px',
          WebkitMask:
            'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Subtle outer diffused glow aura behind card when hovered near edges */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 transition-opacity duration-300"
        style={{
          borderRadius: `${borderRadius}px`,
          opacity: isHovered ? glowIntensity * 0.35 : 0,
          background: `radial-gradient(${glowRadius * 4}px circle at ${coords.x}px ${coords.y}px, ${colors[0]} 0%, ${colors[1] || colors[0]} 50%, transparent 100%)`,
          filter: `blur(${glowRadius * 0.6}px)`,
        }}
      />

      {/* Inner Children Container */}
      <div
        className="border-glow-inner"
        style={{
          borderRadius: `${borderRadius}px`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
