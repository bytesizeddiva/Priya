import React from 'react';
import { siX } from 'simple-icons';

interface ConnectProps {
  email: string;
  onCopyEmail: () => void;
  onCopyX: () => void;
}

/**
 * Email is the primary action on a portfolio, so it is set large and given the
 * whole row; socials sit beneath it at a quieter weight. The label uses the
 * same mono-uppercase voice as the work-list heading.
 */
export const Connect: React.FC<ConnectProps> = ({ email, onCopyEmail, onCopyX }) => {
  return (
    <div className="w-full font-['Switzer',sans-serif]">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
        Get in touch
      </h2>

      {/* Primary — the email, set large across the full column */}
      <button
        type="button"
        onClick={onCopyEmail}
        className="group mt-5 flex w-full items-center justify-between gap-4 border-b border-black/[0.06] pb-4 text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
      >
        <span className="text-[17px] sm:text-[19px] tracking-[-0.015em] text-[#141416]">
          {email}
        </span>

        {/* Copy affordance, revealed on hover */}
        <span
          aria-hidden="true"
          className="shrink-0 text-neutral-400 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </span>
      </button>

      {/* Secondary — socials */}
      <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-2">
        <button
          type="button"
          onClick={onCopyX}
          className="group inline-flex items-center gap-1.5 text-[13px] text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-900 transition-colors"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={siX.path} />
          </svg>
          <span>X</span>
        </button>
      </div>
    </div>
  );
};
