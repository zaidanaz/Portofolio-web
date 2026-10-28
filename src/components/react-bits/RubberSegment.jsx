import React, { useState, useRef, useEffect, useCallback } from 'react';
import './RubberSegment.css';

/**
 * RubberSegment
 * Highly interactive segmented navigation with elastic rubber/squash-and-stretch motion.
 * 
 * Props:
 * - items: Array of strings or { label, value, href }
 * - value: Active value (controlled)
 * - defaultValue: Initial active value (uncontrolled)
 * - onChange: (value, index) => void
 * - trackColor: background color of the track
 * - thumbColor: background color of the elastic thumb
 * - textColor: color of inactive items
 * - activeTextColor: color of active item
 * - size: 'sm' | 'md' | 'lg'
 * - radius: border radius in px
 * - inset: padding inset between track border and thumb
 * - equalSlots: boolean, force all slots to equal width
 * - stretch: elastic stretch intensity (0-150, default 100)
 * - squash: vertical compression intensity (0-5, default 3)
 * - speed: speed factor (0.5 - 2, default 1)
 * - glide: glide ease duration in ms (default 75 or scaled)
 * - draggable: allow dragging the thumb across slots
 * - className: additional wrapper classes
 */
export default function RubberSegment({
  items = [],
  value,
  defaultValue,
  onChange,
  trackColor = 'rgba(255, 242, 213, 0.65)',
  thumbColor = '#003049',
  textColor = '#003049',
  activeTextColor = '#FFFFFF',
  size = 'md',
  radius = 9999,
  inset = 4,
  equalSlots = false,
  stretch = 100,
  squash = 3,
  speed = 1,
  glide = 75,
  draggable = false,
  className = '',
}) {
  // Normalize items
  const normalizedItems = items.map((item, index) => {
    if (typeof item === 'string') {
      return {
        label: item,
        value: item.toLowerCase(),
        href: `#${item.toLowerCase()}`,
        index,
      };
    }
    return {
      label: item.label || item.name || '',
      value: item.value || item.id || item.label?.toLowerCase() || '',
      href: item.href || `#${item.value || item.id}`,
      index,
    };
  });

  const [activeValue, setActiveValue] = useState(() => {
    if (value !== undefined) return value;
    if (defaultValue !== undefined) return defaultValue;
    return normalizedItems[0]?.value || '';
  });

  const [thumbStyle, setThumbStyle] = useState({
    left: 0,
    width: 0,
    height: 0,
    top: 0,
    opacity: 0,
    transform: 'scale(1, 1)',
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);
  const prevIndexRef = useRef(0);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);

  // Sync external value
  useEffect(() => {
    if (value !== undefined && value !== activeValue) {
      setActiveValue(value);
    }
  }, [value]);

  const activeIndex = Math.max(
    0,
    normalizedItems.findIndex((it) => it.value === activeValue)
  );

  // Calculate thumb position and apply rubber stretch
  const updateThumbPosition = useCallback(
    (targetIdx, animated = true) => {
      const track = trackRef.current;
      const targetEl = itemsRef.current[targetIdx];
      if (!track || !targetEl) return;

      const trackRect = track.getBoundingClientRect();
      const targetRect = targetEl.getBoundingClientRect();

      const left = targetRect.left - trackRect.left;
      const width = targetRect.width;
      const height = targetRect.height;
      const top = targetRect.top - trackRect.top;

      const prevIdx = prevIndexRef.current;
      const delta = targetIdx - prevIdx;

      if (animated && delta !== 0) {
        setIsAnimating(true);

        // Calculate stretch and squash scale factors based on direction & distance
        const distanceFactor = Math.min(Math.abs(delta), 3);
        const stretchAmount = (stretch / 100) * 0.16 * distanceFactor;
        const squashAmount = (squash / 3) * 0.08 * distanceFactor;

        // Direction: stretch in direction of movement
        const scaleX = 1 + stretchAmount;
        const scaleY = Math.max(0.82, 1 - squashAmount);

        // Apply temporary squash & stretch
        setThumbStyle({
          left,
          width,
          height,
          top,
          opacity: 1,
          transform: `scale(${scaleX}, ${scaleY})`,
        });

        // After a moment in the glide trajectory, bounce back to normal scale
        const durationMs = Math.max(260, Math.round((360 / speed) + (glide * 0.5)));
        const settleTimer = setTimeout(() => {
          setThumbStyle((curr) => ({
            ...curr,
            transform: 'scale(1, 1)',
          }));
        }, durationMs * 0.45);

        const endTimer = setTimeout(() => {
          setIsAnimating(false);
        }, durationMs);

        prevIndexRef.current = targetIdx;
        return () => {
          clearTimeout(settleTimer);
          clearTimeout(endTimer);
        };
      } else {
        // Immediate position (e.g. resize or initial mount)
        setThumbStyle({
          left,
          width,
          height,
          top,
          opacity: 1,
          transform: 'scale(1, 1)',
        });
        prevIndexRef.current = targetIdx;
      }
    },
    [stretch, squash, speed, glide]
  );

  // Position thumb on activeIndex changes or resize
  useEffect(() => {
    updateThumbPosition(activeIndex, true);
  }, [activeIndex, updateThumbPosition]);

  // Recalculate on window resize
  useEffect(() => {
    const handleResize = () => {
      updateThumbPosition(activeIndex, false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [activeIndex, updateThumbPosition]);

  const handleSelect = (item, index, e) => {
    if (e && item.href && item.href.startsWith('#')) {
      e.preventDefault();
      const targetId = item.href.substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        const yOffset = -75;
        const y = targetEl.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }

    if (value === undefined) {
      setActiveValue(item.value);
    }
    if (onChange) {
      onChange(item.value, index);
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      const nextIdx = (activeIndex + 1) % normalizedItems.length;
      handleSelect(normalizedItems[nextIdx], nextIdx);
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      const prevIdx = (activeIndex - 1 + normalizedItems.length) % normalizedItems.length;
      handleSelect(normalizedItems[prevIdx], prevIdx);
    }
  };

  // Dragging support
  const handleMouseDown = (e) => {
    if (!draggable) return;
    isDraggingRef.current = true;
    dragStartXRef.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!draggable || !isDraggingRef.current || !trackRef.current) return;
    const trackRect = trackRef.current.getBoundingClientRect();
    const x = e.clientX - trackRect.left;
    
    // Find closest slot
    let closestIdx = 0;
    let minDiff = Infinity;
    itemsRef.current.forEach((el, idx) => {
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const mid = rect.left - trackRect.left + rect.width / 2;
      const diff = Math.abs(x - mid);
      if (diff < minDiff) {
        minDiff = diff;
        closestIdx = idx;
      }
    });

    if (closestIdx !== activeIndex) {
      handleSelect(normalizedItems[closestIdx], closestIdx);
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  useEffect(() => {
    if (draggable) {
      window.addEventListener('mouseup', handleMouseUp);
      return () => window.removeEventListener('mouseup', handleMouseUp);
    }
  }, [draggable]);

  // Size styling maps
  const sizeClasses = {
    sm: 'text-[11px] py-1.5 px-3',
    md: 'text-xs sm:text-[13px] py-2 px-3.5 sm:px-4',
    lg: 'text-sm py-2.5 px-5',
  };

  const durationMs = Math.max(260, Math.round((360 / speed) + (glide * 0.5)));

  return (
    <div
      ref={trackRef}
      role="tablist"
      aria-label="Navigation"
      onKeyDown={handleKeyDown}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      className={`rubber-segment-container backdrop-blur-md ${className}`}
      style={{
        backgroundColor: trackColor,
        borderRadius: `${radius}px`,
        padding: `${inset}px`,
        '--glide-duration': `${durationMs}ms`,
      }}
    >
      {/* Elastic Rubber Moving Thumb */}
      <div
        className={`rubber-segment-thumb ${isAnimating ? 'is-animating' : ''}`}
        style={{
          backgroundColor: thumbColor,
          borderRadius: `${Math.max(4, radius - inset)}px`,
          left: `${thumbStyle.left}px`,
          top: `${thumbStyle.top}px`,
          width: `${thumbStyle.width}px`,
          height: `${thumbStyle.height}px`,
          opacity: thumbStyle.opacity,
          transform: thumbStyle.transform,
        }}
      />

      {/* Segment Items */}
      {normalizedItems.map((item, index) => {
        const isActive = activeIndex === index;
        return (
          <a
            key={item.value || index}
            ref={(el) => (itemsRef.current[index] = el)}
            href={item.href}
            role="tab"
            aria-selected={isActive}
            tabIndex={isActive ? 0 : -1}
            onClick={(e) => handleSelect(item, index, e)}
            className={`rubber-segment-item ${sizeClasses[size] || sizeClasses.md} ${
              equalSlots ? 'flex-1 text-center' : ''
            }`}
            style={{
              color: isActive ? activeTextColor : textColor,
              opacity: isActive ? 1 : 0.82,
              borderRadius: `${Math.max(4, radius - inset)}px`,
            }}
          >
            <span>{item.label}</span>
          </a>
        );
      })}
    </div>
  );
}
