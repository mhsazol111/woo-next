import { motion } from 'framer-motion';
import Head from 'next/head';
import Lottie from 'react-lottie';

import { fadeInUp, pageTransition } from '../src/services/animation';
import lottieAnimation from '../src/assets/lottie/laptop-working.json';

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <>
      <Head>
        <title>This is the home page</title>
      </Head>
      <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" transition={{ delay: 1.5 }} className="section-1">
        <div className="flex items-center">
          <div className="lg:w-1/2 w-full">
            <motion.h1 variants={fadeInUp} initial="initial" animate="animate">
              Component animation controls
            </motion.h1>
            <p>
              It's also possible to imperatively animate single values or a single MotionValue with the low-level animate function. This function is
              for advanced use-cases where you want to animate a MotionValue without binding it to a component.
            </p>
          </div>
          <div className="lg:w-1/2 w-full">
            <Lottie options={defaultOptions} height={400} width={400} />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Home;
