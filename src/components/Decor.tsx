import React from 'react';

/**
 * Original decoration: a chequered flag band — the F1 chequerboard, generated
 * from an ordered-dither matrix rather than shipped as an image asset.
 */

const TILE = 8; // 8x8 Bayer matrix

/** Recursively build an NxN Bayer ordered-dither matrix. */
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

const mask = (value: string): React.CSSProperties => ({
  maskImage: value,
  WebkitMaskImage: value,
});

/**
 * A crisp chequerboard — the F1 flag. At a 0.5 threshold the Bayer matrix is
 * exactly a checkerboard, so this needs no image: cells are emitted at their
 * final pixel size, because rescaling the tile would blur it into mush.
 */
const chequerTile = (cellPx: number, color: string): string => {
  const cells: string[] = [];
  for (let y = 0; y < TILE; y++) {
    for (let x = 0; x < TILE; x++) {
      if (BAYER[y][x] < TILE * TILE * 0.5) {
        cells.push(`M${x * cellPx} ${y * cellPx}h${cellPx}v${cellPx}h-${cellPx}z`);
      }
    }
  }
  const px = TILE * cellPx;
  const svg =
    `<svg xmlns="http://www.w3.org/2000/svg" width="${px}" height="${px}" ` +
    `shape-rendering="crispEdges"><path d="${cells.join('')}" fill="${color}"/></svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
};

interface ChequerBandProps {
  className?: string;
  /** size of one chequer square, in px */
  cell?: number;
  color?: string;
  /**
   * Horizontal mask applied to the chequer. Defaults to a left-to-right fade so
   * the band emerges from nothing and darkens, rather than reading as a solid
   * bar. Pass an empty string for an unfaded band.
   */
  fade?: string;
}

const DEFAULT_FADE = 'linear-gradient(90deg, transparent 0%, #000 42%, #000 100%)';

/** A full-width chequered flag band that fades from empty into solid. */
export const ChequerBand: React.FC<ChequerBandProps> = ({
  className = '',
  cell = 6,
  color = '#71717a',
  fade = DEFAULT_FADE,
}) => (
  <div aria-hidden="true" className={`w-full overflow-hidden ${className}`}>
    <div
      className="h-[18px] w-full"
      style={{
        backgroundImage: chequerTile(cell, color),
        backgroundSize: `${TILE * cell}px ${TILE * cell}px`,
        ...(fade ? mask(fade) : {}),
      }}
    />
  </div>
);
