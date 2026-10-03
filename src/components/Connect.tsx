import React from 'react';
import { siX } from 'simple-icons';

/* simple-icons v16 dropped the LinkedIn glyph over trademark concerns, so the
   mark is inlined here instead — same as the priti site. */
const LINKEDIN_PATH =
  'M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z';

interface ConnectProps {
  email: string;
  xUrl: string;
  linkedinUrl: string;
  onCopyEmail: () => void;
  onCopyX: () => void;
  onCopyLinkedIn: () => void;
}

export const Connect: React.FC<ConnectProps> = ({
  email,
  onCopyEmail,
  onCopyX,
  onCopyLinkedIn,
}) => {
  const item =
    'group inline-flex items-center gap-2 text-[13px] text-neutral-700 hover:text-neutral-950 transition-colors cursor-pointer';

  const icon = 'w-3.5 h-3.5 text-neutral-500 group-hover:text-neutral-900 transition-colors';

  return (
    <div className="w-full text-left">
      <h2 className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400 mb-3">Get in touch</h2>

      <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
        {/* Email */}
        <button type="button" onClick={onCopyEmail} className={item} title={email}>
          <svg
            viewBox="0 0 24 24"
            className={icon}
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

        {/* X */}
        <button type="button" onClick={onCopyX} className={item}>
          <svg viewBox="0 0 24 24" className={icon} fill="currentColor" aria-hidden="true">
            <path d={siX.path} />
          </svg>
          <span>X</span>
        </button>

        {/* LinkedIn */}
        <button type="button" onClick={onCopyLinkedIn} className={item}>
          <svg viewBox="0 0 24 24" className={icon} fill="currentColor" aria-hidden="true">
            <path d={LINKEDIN_PATH} />
          </svg>
          <span>LinkedIn</span>
        </button>
      </div>
    </div>
  );
};
