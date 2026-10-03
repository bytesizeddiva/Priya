import React, { useEffect, useState } from 'react';

interface PortraitProps {
  /**
   * Optional override. Served from `public/`, so pass the path as it appears in
   * the URL (e.g. customImage="/me.jpg").
   */
  customImage?: string | null;
}

/** Served locally from public/ — no third-party request, no privacy leak. */
const DEFAULT_PORTRAIT = '/pfp.jpg';

const initialsOf = (name: string): string =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export const Portrait: React.FC<PortraitProps> = ({ customImage }) => {
  const [imageError, setImageError] = useState(false);
  const imageSrc = customImage || DEFAULT_PORTRAIT;

  // Clear a previous failure if the source changes (e.g. a new upload).
  useEffect(() => {
    setImageError(false);
  }, [imageSrc]);

  return (
    <div className="h-[78px] w-[78px] sm:h-[86px] sm:w-[86px] shrink-0 rounded-full overflow-hidden bg-neutral-100">
      {!imageError ? (
        <img
          src={imageSrc}
          alt="Priya Jadhav"
          // object-top keeps the face in frame: pfp.jpg is 736x882 (portrait),
          // so a centre crop would cut the forehead and chin.
          className="h-full w-full object-cover object-top"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-neutral-200 to-neutral-400 flex items-center justify-center text-neutral-700 font-semibold text-xl">
          {initialsOf('Priya Jadhav')}
        </div>
      )}
    </div>
  );
};
