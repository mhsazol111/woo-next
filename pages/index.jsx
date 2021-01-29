import { useEffect, useRef } from 'react';
import { Tween, Reveal } from 'react-gsap';
import { motion, useViewportScroll, useTransform, useSpring } from 'framer-motion';

import Head from 'next/head';
import Lottie from 'react-lottie';

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
      <div className="section-1 pt-5 sm:pt-12 lg:pt-0">
        <div className="container">
          <div className="flex flex-wrap items-center lg:min-h-without-header">
            <div className="lg:w-1/3 w-full">
              <Tween from={{ y: 30, delay: 0.5, opacity: 0 }} duration={0.7} stagger={0.2} ease="power3.out">
                <h1 className={`${styles.primary_title} xl:text-8xl lg:text-7xl md:text-5xl text-4xl xl:pb-6 lg:pb-5 pb-3`}>Next Commerce</h1>
                <p className="pb-10">SEO Friendly lightning fast headless e-commerce platform based on WooCommerce and NextJS</p>
              </Tween>
            </div>
            <div className="lg:w-2/3 w-full">
              <Tween from={{ y: 30, delay: 0.6, opacity: 0 }} duration={0.7} ease="power3.out">
                <div className="lottie-wrapper" style={{ translateY: linearY, transition: 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0s' }}>
                  <Lottie options={defaultOptions} />
                </div>
              </Tween>
            </div>
          </div>
        </div>
      </div>
      <div className="section-2 bg-indigo-50">
        <div className="container">
          <Reveal>
            <Tween from={{ y: 30, delay: 0.3, opacity: 0 }} duration={0.7} stagger={0.2} ease="power3.out">
              <p>Features</p>
              <h2>
                We build modern <br />
                experiences
              </h2>
              <p>Woo Next can help visualize even the craziest ideas converting them into elegant designs, awesome experiences and catchy brands.</p>
            </Tween>
            <div className="service-grid grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
              <div className="service-item">
                <img src="/images/ecommerce.svg" alt="invoice" />
                <p>Fast Checkout</p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
};

export default Home;
