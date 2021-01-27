import { gsap } from 'gsap';

export const onPageEnter = (node) => {
  gsap.from(node, {
    duration: 0.3,
    y: 30,
    delay: 0.6,
    ease: 'power2',
    opacity: 0,
    stagger: {
      amount: 0.2,
    },
  });
};

export const onPageExit = (node) => {
  gsap.to(node, {
    duration: 1,
    y: -30,
    opacity: 0,
    ease: 'power2',
    stagger: {
      amount: 0.2,
    },
  });
};

export default { onPageEnter, onPageExit };
