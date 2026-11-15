import type { Variants } from 'framer-motion';

/**
 * Editorial Motion Design System for Khalil Wali Portfolio
 * High-performance, GPU-accelerated motion tokens, easing functions, and variants.
 * Strictly respects prefers-reduced-motion.
 */

// 1. Signature Easing Curves
export const EDITORIAL_EASE = [0.16, 1, 0.3, 1] as const;
export const SMOOTH_OUT = [0.25, 0.9, 0.3, 1] as const;
export const ACCELERATE = [0.4, 0, 1, 1] as const;

// 2. Standard Springs
export const SPRING_SNAPPY = { type: 'spring', stiffness: 380, damping: 28 } as const;
export const SPRING_GENTLE = { type: 'spring', stiffness: 220, damping: 24 } as const;

// 3. Stagger Containers
export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0.04): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

export const staggerCards = (staggerChildren = 0.09, delayChildren = 0.05): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren,
      delayChildren
    }
  }
});

// 4. Content Reveals
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: EDITORIAL_EASE
    }
  }
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: EDITORIAL_EASE
    }
  }
};

// 5. Line and Heading Reveals
export const lineRevealItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: EDITORIAL_EASE
    }
  }
};

// 6. Image Mask Reveal
export const imageMaskReveal: Variants = {
  hidden: {
    opacity: 0,
    scale: 1.04,
    clipPath: 'inset(8% 0 8% 0 round 4px)'
  },
  visible: {
    opacity: 1,
    scale: 1,
    clipPath: 'inset(0% 0 0% 0 round 4px)',
    transition: {
      duration: 0.85,
      ease: EDITORIAL_EASE
    }
  }
};

// 7. Card Entrance on Scroll
export const cardEntrance: Variants = {
  hidden: { opacity: 0, y: 22, scale: 0.99 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      ease: EDITORIAL_EASE
    }
  }
};

// 8. Page Transitions
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.36,
      ease: EDITORIAL_EASE
    }
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: {
      duration: 0.22,
      ease: ACCELERATE
    }
  }
};
