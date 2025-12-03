import { useEffect, useState } from 'react';

/**
 * Custom hook for optimized scroll-based parallax effect
 * Uses requestAnimationFrame for smooth performance
 * Respects user's reduced motion preferences
 * Disables on mobile devices to improve performance
 */
export const useScrollParallax = (): number => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Check if device is mobile (disable parallax for better performance)
    const isMobile = window.innerWidth < 768;

    if (prefersReducedMotion || isMobile) {
      return; // Don't set up parallax effect
    }

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollY;
};
