import React, { useEffect, useState } from 'react';

interface PortraitProps {
  customImage?: string | null;
}

/**
 * TODO — put a photo in public/ and point this at it, e.g. '/pfp.jpg'.
 * Falls back to a monogram if the file is missing.
 */
const DEFAULT_PORTRAIT = '/pfp.jpg';

const initialsOf = (name: string): string =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

export const Portrait: React.FC<PortraitProps> = ({ customImage }) => {
  const [imageError, setImageError] = useState(false);
  const imageSrc = customImage || DEFAULT_PORTRAIT;

  useEffect(() => {
    setImageError(false);
  }, [imageSrc]);

  return (
    <div className="h-[64px] w-[64px] shrink-0 rounded-full overflow-hidden bg-neutral-100">
      {!imageError ? (
        <img
          src={imageSrc}
          alt=""
          // object-top keeps a face in frame for portrait-orientation crops
          className="h-full w-full object-cover object-top"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-neutral-200 to-neutral-400 text-sm font-semibold text-neutral-700">
          {initialsOf('Priya Jadhav')}
        </div>
      )}
    </div>
  );
};
