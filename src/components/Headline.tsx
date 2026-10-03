import React from 'react';

export const Headline: React.FC = () => {
  return (
    <div className="text-left w-full flex flex-col justify-center py-0.5">
      {/* Subtitle / Name */}
      <h2 className="text-[13px] sm:text-[14px] text-neutral-500 font-medium tracking-normal mb-1.5 font-['Switzer',sans-serif] leading-tight">
        Priya Jadhav
      </h2>

      {/* Main Headline */}
      <h1 className="text-[19px] sm:text-[22px] md:text-[24px] leading-[1.22] font-normal tracking-[-0.015em] text-[#141416] font-['Switzer',sans-serif]">
        <span className="inline-flex items-center gap-1.5 sm:gap-2">
          <span>Developer</span>
          {/* Code brackets as a literal glyph in Geist Mono — echoes the </> on
              the OG image, and a monospace face gives the slash even weight
              against the bracketing angle marks. Mono advances are wide, so
              tracking is pulled in to -0.1em to read as one compact mark
              rather than three separate characters. */}
          <span
            aria-hidden="true"
            className="font-['Geist_Mono',monospace] text-[20px] sm:text-[24px] leading-none tracking-[-0.1em] text-[#141416] self-center"
          >
            &lt;/&gt;
          </span>
        </span>
        <span className="block mt-0.5 text-neutral-900">and AI researcher</span>
      </h1>
    </div>
  );
};
