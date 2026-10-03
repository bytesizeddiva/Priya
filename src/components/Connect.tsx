import React from 'react';
import { siX } from 'simple-icons';

interface ConnectProps {
  onCopyEmail: () => void;
  onCopyX: () => void;
}

export const Connect: React.FC<ConnectProps> = ({ onCopyEmail, onCopyX }) => {
  return (
    <div className="w-full text-left text-[#242426] font-['Switzer',sans-serif]">
      <h2 className="text-[12.5px] font-medium text-neutral-500 mb-2.5">Connect</h2>

      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[13px] text-neutral-700 font-medium">
        {/* X */}
        <button
          type="button"
          onClick={onCopyX}
          className="group inline-flex items-center gap-1.5 transition-colors cursor-pointer hover:text-neutral-950"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-neutral-500 transition-colors group-hover:text-neutral-900"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d={siX.path} />
          </svg>
          <span>X</span>
        </button>

        {/* Email */}
        <button
          type="button"
          onClick={onCopyEmail}
          className="group inline-flex items-center gap-1.5 transition-colors cursor-pointer hover:text-neutral-950"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-3.5 h-3.5 text-neutral-500 transition-colors group-hover:text-neutral-900"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
            <polyline points="22,6 12,13 2,6" />
          </svg>
          <span>Email</span>
        </button>
      </div>
    </div>
  );
};
