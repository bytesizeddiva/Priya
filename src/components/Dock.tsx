import React, { useState } from 'react';
import {
  siTypescript,
  siPython,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siSupabase,
} from 'simple-icons';

interface TechIcon {
  name: string;
  path: string;
}

/**
 * Skills and technology stack — decorative glyphs only. There is no click
 * handler and no detail modal, so each entry needs just a name and a path.
 * Hoisted to module scope so it is not rebuilt on every render.
 */
const ICONS: TechIcon[] = [
  // Languages
  { name: 'TypeScript', path: siTypescript.path },
  { name: 'Python', path: siPython.path },

  // Frontend
  { name: 'React', path: siReact.path },
  { name: 'Next.js', path: siNextdotjs.path },
  { name: 'Tailwind CSS', path: siTailwindcss.path },

  // Data & backend
  { name: 'Supabase', path: siSupabase.path },
];

export const Dock: React.FC = () => {
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  return (
    <div className="w-full flex items-center justify-start mt-2 mb-6 sm:mb-7">
      {/* Decorative brand glyphs — not interactive, no preview on click */}
      <ul className="flex flex-wrap items-center gap-0.5 sm:gap-1 list-none p-0 m-0">
        {ICONS.map((icon) => (
          <li
            key={icon.name}
            className="relative flex items-center justify-center"
            onMouseEnter={() => setHoveredName(icon.name)}
            onMouseLeave={() => setHoveredName(null)}
          >
            <svg
              viewBox="0 0 24 24"
              role="img"
              aria-label={icon.name}
              className="w-6 h-6 sm:w-[26px] sm:h-[26px] p-0.5 text-[#242426] opacity-75 transition-opacity duration-150 ease-out hover:opacity-100"
            >
              <path d={icon.path} fill="currentColor" />
            </svg>

            {/* Hover label */}
            {hoveredName === icon.name && (
              <div
                className="absolute -top-7.5 left-1/2 -translate-x-1/2 pointer-events-none z-30 whitespace-nowrap"
                aria-hidden="true"
              >
                <div className="bg-[#18181b]/95 text-white text-[11px] font-medium py-0.5 px-2 rounded shadow-md backdrop-blur-sm border border-white/10">
                  {icon.name}
                </div>
                <div className="w-0 h-0 border-x-3.5 border-x-transparent border-t-3.5 border-t-[#18181b] mx-auto" />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
