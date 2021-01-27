import { useEffect, useRef } from 'react';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import Head from 'next/head';
import Lottie from 'react-lottie';

import { fadeInUp, pageTransition } from '../src/services/animation';
import lottieAnimation from '../src/assets/lottie/e-commerce-animations.json';

import styles from '../src/assets/css/Home.module.css';
import { onPageEnter, onPageExit } from '../src/services/gsapAnimation';

const Home = () => {
  let animatedElem1 = useRef(null);

  useEffect(() => {
    onPageEnter(animatedElem1);
  }, [animatedElem1]);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const { scrollYProgress } = useViewportScroll(0);
  const springConfig = {
    damping: 100,
    stiffness: 300,
    mass: 1,
  };

  const linearY = useTransform(scrollYProgress, [0, 1], [50, -300]);
  const springY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -200]), springConfig);

  return (
    <>
      <Head>
        <title>Next Commerce - NextJs with headless WooCommerce</title>
      </Head>
      <div className="section-1">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/3 w-full">
              <h1 ref={(elm) => (animatedElem1 = elm)} className={`${styles.primary_title} xl:pb-6 lg:pb-5 pb-3`}>
                Next Commerce
              </h1>
              <p
                onClick={() => {
                  onPageExit(animatedElem1);
                }}
              >
                SEO Friendly lightning fast headless e-commerce platform based on WooCommerce and NextJS
              </p>
            </div>
            <div className="lg:w-2/3 w-full">
              <div className="lottie-wrapper" style={{ translateY: linearY, transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0s' }}>
                <Lottie options={defaultOptions} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
