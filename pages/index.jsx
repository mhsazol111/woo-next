import Head from 'next/head';
import Lottie from 'react-lottie';

import Layout from '../components/Layout';

import lottieAnimation from '../assets/lottie/laptop-working.json';

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
    <Layout>
      <Head>
        <title>This is the home page</title>
      </Head>
      <div className="section">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
    </Layout>
  );
};

export default Home;
