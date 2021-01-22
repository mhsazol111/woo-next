import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';
import Head from 'next/head';
import Lottie from 'react-lottie';

import { fadeInUp, pageTransition } from '../src/services/animation';
import lottieAnimation from '../src/assets/lottie/e-commerce-animations.json';

import styles from '../src/assets/css/Home.module.css';

const Home = () => {
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
      <motion.div initial="initial" animate="animate" exit="exit" variants={pageTransition} className="section-1">
        <div className="container">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/3 w-full">
              <motion.h1 variants={fadeInUp} initial="initial" animate="animate" className={`${styles.primary_title} xl:pb-6 lg:pb-5 pb-3`}>
                Next Commerce
              </motion.h1>
              <p>SEO Friendly lightning fast headless e-commerce platform based on WooCommerce and NextJS</p>
            </div>
            <div className="lg:w-2/3 w-full">
              <motion.div
                className="lottie-wrapper"
                style={{ translateY: linearY, transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0s' }}
              >
                <Lottie options={defaultOptions} />
              </motion.div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full">
            <motion.h1 variants={fadeInUp} initial="initial" animate="animate">
              Component animation controls
            </motion.h1>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
          </div>
          <div className="lg:w-1/2 w-full"></div>
        </div>

        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full">
            <motion.h1 variants={fadeInUp} initial="initial" animate="animate">
              Component animation controls
            </motion.h1>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
          </div>
          <div className="lg:w-1/2 w-full"></div>
        </div>

        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full">
            <motion.h1 variants={fadeInUp} initial="initial" animate="animate">
              Component animation controls
            </motion.h1>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
          </div>
          <div className="lg:w-1/2 w-full"></div>
        </div>

        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full">
            <motion.h1 variants={fadeInUp} initial="initial" animate="animate">
              Component animation controls
            </motion.h1>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
          </div>
          <div className="lg:w-1/2 w-full"></div>
        </div>

        <div className="flex flex-wrap items-center">
          <div className="lg:w-1/2 w-full">
            <motion.h1 variants={fadeInUp} initial="initial" animate="animate">
              Component animation controls
            </motion.h1>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
          </div>
          <div className="lg:w-1/2 w-full"></div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
