import { useState, useEffect } from 'react';

export interface WindowDimensions {
    width: number;
    height: number;
    isDesktop: boolean;
    isMobile: boolean;
}

function getWindowDimensions(): WindowDimensions {
  const { innerWidth: width, innerHeight: height } = window;

  const isMobile = width <= 600;
  const isDesktop = width > 600;
  return {
    width,
    height,
    isDesktop,
    isMobile
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}