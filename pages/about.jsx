import { motion } from 'framer-motion';
import Head from 'next/head';
import { pageTransition } from '../src/services/animation';

const About = () => {
  return (
    <>
      <Head>
        <title>This is About Page</title>
      </Head>
      <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="about-section">
        <div className="h-screen w-full bg-red-300">
          <h1>This is about us</h1>
        </div>
      </motion.div>
    </>
  );
};
export default About;
