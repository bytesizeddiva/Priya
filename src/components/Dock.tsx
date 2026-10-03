import React from 'react';
import { siFigma, siSketch, siPenpot, siSketchup, siFramer, siBlender, siDribbble, siNotion } from 'simple-icons';

interface DockProps {
  className?: string;
}

interface Tool {
  name: string;
  path: string;
}

/**
 * Tools used across this practice. Decorative only — no click target and no
 * detail view. Swap entries freely; they only need a `name` and a `path`.
 *
 * Note: simple-icons v16 no longer ships Adobe or LinkedIn glyphs (removed for
 * trademark reasons), so those are not available here.
 */
const TOOLS: Tool[] = [
  { name: 'Figma', path: siFigma.path },
  { name: 'Sketch', path: siSketch.path },
  { name: 'Penpot', path: siPenpot.path },
  { name: 'SketchUp', path: siSketchup.path },
  { name: 'Framer', path: siFramer.path },
  { name: 'Blender', path: siBlender.path },
  { name: 'Dribbble', path: siDribbble.path },
  { name: 'Notion', path: siNotion.path },
];

export const Dock: React.FC<DockProps> = ({ className = '' }) => {
  return (
    <ul
      aria-label="Tools"
      className={`flex flex-wrap items-center gap-x-3 gap-y-2 list-none p-0 m-0 ${className}`}
    >
      {TOOLS.map((tool) => (
        <li key={tool.name} className="flex items-center">
          <svg
            viewBox="0 0 24 24"
            role="img"
            aria-label={tool.name}
            className="w-[18px] h-[18px] text-[#242426] opacity-60 hover:opacity-100 transition-opacity duration-150"
          >
            <path d={tool.path} fill="currentColor" />
          </svg>
        </li>
      ))}
    </ul>
  );
};
