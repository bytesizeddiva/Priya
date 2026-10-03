import React from 'react';
import { siX } from 'simple-icons';

interface ConnectProps {
  email: string;
  onCopyX: () => void;
}

/** Email opens the mail app; the address itself is the label, not a button. */
const EMAIL_LINK =
  'text-[15px] text-[#141416] hover:text-neutral-950 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400';

export const Connect: React.FC<ConnectProps> = ({ email, onCopyX }) => {
  return (
    <footer className="w-full font-['Switzer',sans-serif]">
      <a href={`mailto:${email}`} className={EMAIL_LINK}>
        {email}
      </a>

      <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2">
        {/* X — copies the handle */}
        <button
          type="button"
          onClick={onCopyX}
          className="group inline-flex items-center gap-1.5 text-[13px] text-neutral-600 hover:text-neutral-950 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-900 transition-colors"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={siX.path} />
          </svg>
          <span>X</span>
          <span className="sr-only"> — copy profile link</span>
        </button>
      </div>
    </footer>
  );
};
