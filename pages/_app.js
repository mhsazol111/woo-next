import { AnimatePresence, motion } from 'framer-motion';
import NextNprogress from 'nextjs-progressbar';

import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  // const pageRoute = router.route;
  return (
    <>
      <Head>
        <title>Woo Next</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
      </Head>
      <div id="page-container">
        <div className="full-gradient-bg" />
        <div className="page-inner-container min-h-screen 2xl:container relative 2xl:p-12 md:p-10 p-9">
          <motion.div
            initial={{ scale: 0.1, y: '70%' }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="full-glass-bg"
          ></motion.div>
          <Header />
          <div id="main-content">
            <NextNprogress />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
