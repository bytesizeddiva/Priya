import React from 'react';

/*
 * TODO — replace with the real bio. Keep it to one paragraph; the technical
 * focus areas belong in the work list below, not repeated here.
 */
const INTRO =
  'I am a product designer with eight years shaping software that people use every ' +
  'day — across fintech, developer tools, and consumer products. I work end to ' +
  'from research and flows through to interface, design systems, and the front ' +
  'end, partnering with engineering from the first sketch to the shipped build. ' +
  'I care most about the unglamorous parts: the empty states nobody designs, the ' +
  'second revision that actually matters, and the handoff that does not lose the ' +
  'thread.';

export const Intro: React.FC = () => {
  return (
    <div className="mt-8 w-full text-left">
      <p className="text-[14.5px] leading-[1.65] text-[#2c2c30]">{INTRO}</p>
    </div>
  );
};
