import { useCallback, useEffect, useRef, useState } from 'react';
import { Portrait } from './components/Portrait';
import { Headline } from './components/Headline';
import { Dock } from './components/Dock';
import { Intro } from './components/Intro';
import { Works } from './components/Works';
import { Connect } from './components/Connect';
import { Rule } from './components/Rule';
import { Toast } from './components/Toast';

/*
 * ─────────────────────────────────────────────────────────────────────────────
 * EDIT THESE — everything personal lives here.
 * ─────────────────────────────────────────────────────────────────────────────
 */
export const SITE = {
  name: 'Priya Jadhav',
  /** Two lines, set large in the hero. */
  roleLine1: 'Product',
  roleLine2: 'Designer',
  email: 'priya@example.com',
  xUrl: 'https://x.com/priyajadhav',
  linkedinUrl: 'https://linkedin.com/in/priyajadhav',
  githubUrl: 'https://github.com/priyajadhav',
} as const;
/* ───────────────────────────────────────────────────────────────────────────── */

const TOAST_DURATION_MS = 2400;

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastMessage(msg);
    toastTimer.current = setTimeout(() => setToastMessage(null), TOAST_DURATION_MS);
  }, []);

  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    []
  );

  /**
   * Copies `text` and only reports success once the write resolves.
   * `navigator.clipboard` is undefined outside secure contexts, so we report
   * that plainly instead of claiming a copy that never happened.
   */
  const copyToClipboard = useCallback(
    async (text: string, successMessage: string) => {
      if (!navigator.clipboard?.writeText) {
        showToast('Clipboard unavailable — open over https:// or localhost');
        return;
      }
      try {
        await navigator.clipboard.writeText(text);
        showToast(successMessage);
      } catch {
        showToast('Copy failed — clipboard blocked by the browser');
      }
    },
    [showToast]
  );

  return (
    <div className="min-h-screen bg-[#fafafa] relative flex flex-col items-start overflow-x-hidden font-['Switzer',sans-serif] selection:bg-neutral-200">
      {/* Page column. Indented and narrower than the priti site — the hero is
          stacked, so it reads as a single column of type rather than a row. */}
      <div className="relative z-10 w-full max-w-[560px] mx-auto px-6 sm:px-8 py-12 sm:py-20 lg:py-24 flex flex-col items-start">
        {/* Stacked hero: portrait above the role statement */}
        <Portrait />
        <Headline name={SITE.name} line1={SITE.roleLine1} line2={SITE.roleLine2} />

        {/* Tooling */}
        <Dock className="mt-8" />

        {/* Hairline rule — this site's stand-in for priti's chequer band */}
        <Rule className="mt-9" />

        {/* Intro */}
        <Intro />

        {/* Selected work — numbered editorial list */}
        <Works className="mt-11" githubUrl={SITE.githubUrl} />

        {/* Connect */}
        <div className="w-full mt-9 pt-5 border-t border-black/[0.06]">
          <Connect
            email={SITE.email}
            xUrl={SITE.xUrl}
            linkedinUrl={SITE.linkedinUrl}
            onCopyEmail={() => copyToClipboard(SITE.email, `Email copied (${SITE.email})`)}
            onCopyX={() => copyToClipboard(SITE.xUrl, 'X link copied')}
            onCopyLinkedIn={() => copyToClipboard(SITE.linkedinUrl, 'LinkedIn link copied')}
          />
        </div>
      </div>

      <Toast message={toastMessage} />
    </div>
  );
}
