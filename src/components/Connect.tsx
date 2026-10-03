import React from 'react';
import { siX } from 'simple-icons';

interface ConnectProps {
  email: string;
  onCopyEmail: () => void;
  onCopyX: () => void;
}

/**
 * Deliberately reuses the page's existing vocabulary rather than inventing a
 * footer look: the heading matches the "Selected work" label exactly, the email
 * sits at the same size as the work titles, and the secondary links match the
 * work roles. The separator above is the one rule the page already draws, so
 * no extra rules are added here.
 */
export const Connect: React.FC<ConnectProps> = ({ email, onCopyEmail, onCopyX }) => {
  return (
    <div className="w-full font-['Switzer',sans-serif]">
      <h2 className="text-[12.5px] font-medium text-neutral-500">Connect</h2>

      <div className="mt-3 flex flex-wrap items-baseline gap-x-6 gap-y-2">
        {/* Email — same size as the work titles above */}
        <button
          type="button"
          onClick={onCopyEmail}
          className="group inline-flex items-center gap-1.5 text-[14.5px] text-[#242426] hover:text-neutral-950 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
        >
          <span>{email}</span>
          <svg
            viewBox="0 0 24 24"
            aria-hidden="true"
            className="w-3 h-3 text-neutral-400 opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="9" y="9" width="11" height="11" rx="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        </button>

        {/* Social — same size as the work roles */}
        <button
          type="button"
          onClick={onCopyX}
          className="group inline-flex items-center gap-1.5 text-[13px] text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-neutral-400 group-hover:text-neutral-700 transition-colors"
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
