export const pageTransition = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
  },
};

// animate: defines animation
// initial: defines initial state of animation or stating point.
// exit: defines animation when component exits

// Our custom easing
const easing = [0.6, -0.05, 0.01, 0.99];

// Custom variant
export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export const springFromRight = {
  initial: {
    x: 60,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.7,
    },
  },
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export default {
  pageTransition,
  fadeInUp,
  springFromRight,
  stagger,
};
