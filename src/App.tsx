import { useCallback, useEffect, useRef, useState } from 'react';
import { Portrait } from './components/Portrait';
import { Headline } from './components/Headline';
import { Dock } from './components/Dock';
import { AboutView } from './components/AboutView';
import { Works } from './components/Works';
import { Connect } from './components/Connect';
import { ChequerBand } from './components/Decor';
import { Toast } from './components/Toast';

const EMAIL = 'priya.jadhav@gmail.com';
const X_URL = 'https://x.com/priyajadhav';
const TOAST_DURATION_MS = 2400;

export default function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    if (toastTimer.current) clearTimeout(toastTimer.current);
    setToastMessage(msg);
    toastTimer.current = setTimeout(() => setToastMessage(null), TOAST_DURATION_MS);
  }, []);

  // Clear the pending timer if the app unmounts before it fires.
  useEffect(
    () => () => {
      if (toastTimer.current) clearTimeout(toastTimer.current);
    },
    []
  );

  /**
   * Copies `text` and only reports success once the write resolves.
   * `navigator.clipboard` is undefined outside secure contexts (e.g. plain-http
   * LAN access), so we report that plainly instead of claiming success.
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

  const handleCopyEmail = useCallback(
    () => copyToClipboard(EMAIL, `Email copied (${EMAIL})`),
    [copyToClipboard]
  );

  const handleCopyX = useCallback(
    () => copyToClipboard(X_URL, 'X link copied (x.com/priyajadhav)'),
    [copyToClipboard]
  );

  return (
    <div className="min-h-screen bg-[#fafafa] relative flex flex-col items-center justify-start overflow-x-hidden font-['Switzer',sans-serif] selection:bg-neutral-200">
      {/* Subtle radial ambient highlight */}
      <div
        className="pointer-events-none fixed inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(220, 220, 230, 0.4) 0%, rgba(250, 250, 250, 0) 70%)',
        }}
        aria-hidden="true"
      />

      {/* Page column */}
      <div className="relative z-10 w-full max-w-[620px] mx-auto px-6 sm:px-8 py-14 sm:py-24 lg:py-28 flex flex-col items-start">
        {/* Portrait and headline */}
        <div className="w-full flex items-center gap-4 sm:gap-5 pb-5 sm:pb-6">
          <div className="shrink-0">
            <Portrait />
          </div>
          <div className="flex-1 min-w-0">
            <Headline />
          </div>
        </div>

        {/* Decorative brand glyphs */}
        <Dock />

        {/* Chequered flag band */}
        <ChequerBand className="mt-6 mb-7" />

        {/* Bio */}
        <AboutView />

        {/* Selected work */}
        <Works className="mt-9" />

        {/* Connect. The 9px margin here completes the 19px of space below the
            GitHub link (10px of its own padding + 9px), so that label sits
            centred between its rule and the one here. */}
        <div className="w-full mt-[9px] pt-5 border-t border-black/[0.06]">
          <Connect onCopyEmail={handleCopyEmail} onCopyX={handleCopyX} />
        </div>
      </div>

      {/* Toast Notification */}
      <Toast message={toastMessage} />
    </div>
  );
}
