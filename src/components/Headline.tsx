import React from 'react';

interface HeadlineProps {
  name: string;
  line1: string;
  line2: string;
}

/**
 * Stacked hero: name as a quiet mono label, then the role set large across
 * two lines. The priti site sets this side-by-side with the portrait; here it
 * runs full width beneath it, which reads as a different kind of statement.
 */
export const Headline: React.FC<HeadlineProps> = ({ name, line1, line2 }) => {
  return (
    <div className="mt-5 w-full text-left">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
        {name}
      </h2>

      <h1 className="mt-3 text-[34px] sm:text-[44px] font-normal leading-[1.05] tracking-[-0.03em] text-[#141416]">
        <span className="block">{line1}</span>
        <span className="block text-neutral-400">{line2}</span>
      </h1>
    </div>
  );
};
