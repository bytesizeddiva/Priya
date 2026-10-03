import React from 'react';

/**
 * The bio, as a single short paragraph. Edit the copy directly below.
 * The technical focus areas are covered by the work list below, so they are
 * deliberately not repeated here.
 */
const ABOUT =
  'I build things for the web, and I am keeping a close eye on where AI research is ' +
  'heading. Reading what gets released, being skeptical of the claims, trying to see ' +
  'what is real underneath. Studying computer science alongside it to get the ' +
  'foundations right. Still early, learning quickly.';

export const AboutView: React.FC = () => {
  return (
    <div className="w-full text-left text-[#242426] font-['Switzer',sans-serif]">
      {/* Greeting */}
      <div className="text-[15px] sm:text-[16px] font-medium text-[#18181b] mb-4 select-none flex items-center gap-2">
        <span>Hi there 👋</span>
        <span className="font-mono text-[14px] tracking-tight">ʕ•ᴥ•ʔ</span>
      </div>

      <p className="text-[14px] sm:text-[14.5px] leading-[1.62] text-[#2c2c30]">{ABOUT}</p>
    </div>
  );
};
