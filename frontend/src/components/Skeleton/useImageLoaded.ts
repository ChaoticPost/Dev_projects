import { useEffect, useState } from 'react';

export const useImageLoaded = (src: string): boolean => {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [prevSrc, setPrevSrc] = useState(src);

  if (prevSrc !== src) {
    setPrevSrc(src);
    setLoadedSrc(null);
  }

  useEffect(() => {
    let active = true;

    const image = new Image();
    const markLoaded = () => {
      if (active) {
        setLoadedSrc(src);
      }
    };

    image.onload = markLoaded;
    image.onerror = markLoaded;
    image.src = src;

    if (image.complete && image.naturalWidth > 0) {
      markLoaded();
    }

    return () => {
      active = false;
    };
  }, [src]);

  return loadedSrc === src;
};
