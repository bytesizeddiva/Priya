import React from 'react';
import { siGithub } from 'simple-icons';

interface Work {
  /** Left column — the name of the work. Doubles as a link when `url` is set. */
  name: string;
  /** Right column — role, scope, or a short result. */
  role: string;
  /**
   * Where the work lives. When present, `name` renders as a link that opens in
   * a new tab; when absent it renders as plain text. Safe to mix.
   */
  url?: string;
}

/**
 * TODO — REPLACE THESE WITH YOUR REAL PROJECTS.
 *
 * These rows are derived from the focus areas stated in the bio (AboutView.tsx),
 * not from an actual project list, so they describe your work rather than
 * naming specific things you built. Swap in real project names and outcomes.
 *
 * The `url` values below all point at example.com as a placeholder — replace
 * each one with a real link to the work. Remove the `url` key entirely and the
 * name renders as plain text instead of a link.
 */
/** Where the "See more work" row points. */
const GITHUB_URL = 'https://github.com/priyajadhav';

const WORKS: Work[] = [
  {
    name: 'Agentic reasoning systems',
    role: 'Multi-step orchestration & tool use',
    url: 'https://example.com',
  },
  {
    name: 'Retrieval-augmented generation',
    role: 'Vector search, pipelines & evaluation',
    url: 'https://example.com',
  },
  {
    name: 'LLM developer tooling',
    role: 'SDKs, workflows & developer experience',
    url: 'https://example.com',
  },
  {
    name: 'Distributed backends',
    role: 'Python / FastAPI, high concurrency',
    url: 'https://example.com',
  },
  {
    name: 'Cloud-native platform',
    role: 'Docker, Kubernetes & edge delivery',
    url: 'https://example.com',
  },
];

interface WorksProps {
  className?: string;
}

export const Works: React.FC<WorksProps> = ({ className = '' }) => {
  return (
    <section
      className={`w-full font-['Switzer',sans-serif] ${className}`}
      aria-labelledby="works-heading"
    >
      <h2 id="works-heading" className="text-[12.5px] font-medium text-neutral-500 mb-1">
        Selected work
      </h2>

      <ul className="list-none p-0 m-0 w-full">
        {WORKS.map((work) => (
          <li key={work.name} className="group border-b border-black/[0.06]">
            {/* The -mx/px pair lets the hover tint bleed past the text column
                while the row's hairline border still spans the full width.
                Narrow screens stack the role under the name; from sm up they
                sit side by side, which is where the two columns have room. */}
            <div className="-mx-2 px-2 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8 py-[9px] rounded-sm transition-colors duration-150 hover:bg-black/[0.025] focus-within:bg-black/[0.025]">
              {work.url ? (
                <a
                  href={work.url}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="min-w-0"
                >
                  {/* The gradient is clipped to this span so the hover cue is
                      the colour sweep itself — no icon, no underline. */}
                  <span className="work-aurora text-[14px] sm:text-[14.5px]">
                    {work.name}
                  </span>
                </a>
              ) : (
                <span className="text-[14px] sm:text-[14.5px] text-[#242426]">
                  {work.name}
                </span>
              )}

              <span className="text-[12.5px] sm:text-[13px] text-neutral-500 sm:text-right transition-colors duration-150 group-hover:text-neutral-700">
                {work.role}
              </span>
            </div>
          </li>
        ))}

        {/* Closing link, not a work row.
            The vertical space is on the <li> rather than the anchor, and is
            split 19px above / 19px below (10px padding + the 9px margin the
            footer block adds). That balance is what centres the label between
            this rule and the Connect rule below it, and it keeps the hover
            tint tight to the text instead of filling a 48px-tall band. */}
        <li className="border-t border-black/[0.06] pt-[19px] pb-[10px]">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group w-fit inline-flex items-center gap-2 rounded-sm text-[13.5px] text-neutral-600 transition-colors duration-150 hover:bg-black/[0.025] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-400"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-[15px] h-[15px] shrink-0 text-neutral-500 transition-colors duration-150 group-hover:text-neutral-900"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d={siGithub.path} />
            </svg>
            See more on GitHub
          </a>
        </li>
      </ul>
    </section>
  );
};
