import React from 'react';

/*
 * A hairline rule built from an ordered-dither gradient: solid at the left,
 * thinning out to nothing at the right.
 *
 * The priti site uses the same Bayer generator for a chequered band. Reusing
 * the technique here ties the two sites together without repeating the motif.
 */

const TILE = 8;
const CELL = 3;

const bayerMatrix = (size: number): number[][] => {
  let m: number[][] = [[0]];
  let s = 1;
  while (s < size) {
    const n = s * 2;
    const next: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
    for (let y = 0; y < s; y++) {
      for (let x = 0; x < s; x++) {
        const v = m[y][x] * 4;
        next[y][x] = v;
        next[y][x + s] = v + 2;
        next[y + s][x] = v + 3;
        next[y + s][x + s] = v + 1;
      }
    }
    m = next;
    s = n;
  }
  return m;
};

const BAYER = bayerMatrix(TILE);

const ditherTile = (threshold: number): string => {
  const cells: string[] = [];
  for (let y = 0; y < TILE; y++) {
    for (let x = 0; x < TILE; x++) {
      if (BAYER[y][x] < threshold) {
        cells.push(`M${x * CELL} ${y * CELL}h${CELL}v${CELL}h-${CELL}z`);
      }
    }
  }
  const px = TILE * CELL;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" ` +
    `shape-rendering="crispEdges"><path d="${cells.join('')}" fill="#a1a1aa"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

const tile = (threshold: number): React.CSSProperties => ({
  backgroundImage: ditherTile(threshold),
  backgroundSize: `${TILE * CELL}px ${TILE * CELL}px`,
  backgroundRepeat: 'repeat',
});

const mask = (value: string): React.CSSProperties => ({
  maskImage: value,
  WebkitMaskImage: value,
});

interface RuleProps {
  className?: string;
}

export const Rule: React.FC<RuleProps> = ({ className = '' }) => (
  <div aria-hidden="true" className={`w-full overflow-hidden ${className}`}>
    <div className="relative h-[9px] w-full">
      <div
        className="absolute inset-0"
        style={{
          ...tile(TILE * TILE * 0.25),
          ...mask('linear-gradient(90deg, #000 0%, #000 22%, transparent 78%)'),
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          ...tile(TILE * TILE * 0.5),
          ...mask('linear-gradient(90deg, #000 0%, #000 8%, transparent 44%)'),
        }}
      />
    </div>
  </div>
);
