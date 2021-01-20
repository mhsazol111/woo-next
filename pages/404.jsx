import { motion } from 'framer-motion';
import Head from 'next/head';
import { pageTransition } from '../src/services/animation';

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Ops.. Not found</title>
      </Head>
      <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="about-section">
        <h1>Not Found</h1>
      </motion.div>
    </>
  );
};
export default NotFound;
