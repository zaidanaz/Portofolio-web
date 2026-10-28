import React from 'react';
import { ORGANIZATIONS_DATA } from '../data/organizations';

export default function OrganizationLogoLoop({ onSelectOrg }) {
  // Duplicate items array to ensure a seamless infinite loop
  const loopItems = [...ORGANIZATIONS_DATA, ...ORGANIZATIONS_DATA, ...ORGANIZATIONS_DATA];

  return (
    <div className="w-full py-6 relative overflow-hidden group">
      
      {/* Infinite Scrolling Marquee Track directly on the page background */}
      <div className="relative w-full overflow-hidden flex items-center">
        
        {/* Left & Right gradient alpha edge fades for smooth vanishing effect */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

        <div className="flex items-center gap-10 sm:gap-14 animate-org-marquee group-hover:[animation-play-state:paused] py-4">
          {loopItems.map((org, index) => (
            <button
              key={`${org.id}-${index}`}
              onClick={() => onSelectOrg && onSelectOrg(org.experienceId)}
              className="shrink-0 flex items-center justify-center p-2 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-crimson rounded-xl"
              title={`${org.name} — Click to view role`}
            >
              {/* Prominently scaled authentic logo without bounding box/card container */}
              <img
                src={org.logo}
                alt={org.name}
                className="h-14 sm:h-16 w-auto max-w-[140px] sm:max-w-[170px] object-contain filter hover:brightness-105 transition-all"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
