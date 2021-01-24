// Custom easing
const easing = [0.6, -0.05, 0.01, 0.99];

// Custom variant
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

export const sectionWrapper = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const sectionReveal = {
  initial: {
    y: 70,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
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
  sectionWrapper,
  sectionReveal,
  stagger,
};
