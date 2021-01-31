import Head from 'next/head';
import Lottie from 'react-lottie';
import { pageTransition } from '../src/services/animation';

import lottie404 from '../src/assets/lottie/404-poky-heads.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const NotFound = () => {
  return (
    <>
      <Head>
        <title>Ops.. Not found</title>
      </Head>
      <div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="about-section">
        <Lottie options={{ defaultOptions, animationData: lottie404 }} height={500} width={900} />
      </div>
    </>
  );
};
export default NotFound;
