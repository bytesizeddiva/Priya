import React from 'react';

interface Work {
  title: string;
  detail: string;
  url?: string;
}

/*
 * TODO — replace with real projects. Give each a short outcome for `detail`
 * rather than a list of responsibilities; one line is enough.
 */
const WORKS: Work[] = [
  {
    title: 'Meridian',
    detail: 'Payments onboarding — rebuilt the first-run flow and cut abandonment by a third.',
  },
  {
    title: 'Hollowpoint',
    detail: 'Developer docs — restructured information architecture, 40% faster time-to-first-call.',
  },
  {
    title: 'Cadence',
    detail: 'Design system — 60 components, one source of truth across four product teams.',
  },
  {
    title: 'Fieldnote',
    detail: 'Research tool — offline-first capture for site surveys in low-connectivity sites.',
  },
];

interface WorksProps {
  className?: string;
  githubUrl: string;
}

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * Numbered editorial list. The mono index and the hairline running down the
 * left give this a different rhythm from the plain two-column rows used on the
 * priti site, while sharing the same palette and type.
 */
export const Works: React.FC<WorksProps> = ({ className = '', githubUrl }) => {
  return (
    <section className={`w-full ${className}`} aria-labelledby="work-heading">
      <h2 id="work-heading" className="font-mono text-[11px] uppercase tracking-[0.18em] text-neutral-400">
        Selected work
      </h2>

      <ol className="mt-5 list-none p-0 m-0 w-full">
        {WORKS.map((work, i) => (
          <li key={work.title} className="group flex gap-4 sm:gap-5 py-4">
            {/* Index */}
            <span className="font-mono text-[11px] tabular-nums text-neutral-400 pt-[3px] w-6 shrink-0">
              {pad(i + 1)}
            </span>

            {/* Hairline running down the list */}
            <span aria-hidden="true" className="w-px shrink-0 bg-black/[0.08]" />

            {/* Body */}
            <div className="min-w-0 flex-1">
              {work.url ? (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group/link inline-block"
                >
                  <span className="work-aurora text-[15px]">{work.title}</span>
                </a>
              ) : (
                <span className="text-[15px] text-[#242426]">{work.title}</span>
              )}

              <p className="mt-1 text-[13px] leading-[1.55] text-neutral-500">{work.detail}</p>
            </div>
          </li>
        ))}

        {/* More work — same aurora hover as the project titles above */}
        <li className="group flex gap-4 sm:gap-5 pt-4">
          <span aria-hidden="true" className="w-6 shrink-0" />
          <span aria-hidden="true" className="w-px shrink-0 bg-transparent" />
          <div className="min-w-0 flex-1">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="group/link inline-block text-[13px] text-neutral-500 hover:text-[#242426] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
            >
              More work →
            </a>
          </div>
        </li>
      </ol>
    </section>
  );
};
