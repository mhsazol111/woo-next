import { AnimatePresence } from 'framer-motion';
import NextNprogress from 'nextjs-progressbar';

import Scrollbar from 'react-smooth-scrollbar';

import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';
import '../styles/globals.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <title>Woo Next</title>
      </Head>
      <div id="page-container">
        <div className="full-page-bg" style={{ backgroundImage: 'url(/images/bg-light-blue.svg)' }} />

        {/* <div className="full-gradient-bg" /> */}
        {/* <div className="page-inner-container min-h-screen 2xl:container relative 2xl:p-12 md:p-10 p-9"> */}
        {/* <div className="full-glass-bg"></div> */}

        <Scrollbar style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0 }} ref={ref}>
          <Header />
          <div id="main-content">
            <NextNprogress color="#95bae8" stopDelayMs={100} height="2" />
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </div>
          <Footer />
        </Scrollbar>
        {/* </div> */}
      </div>
    </>
  );
}

export default MyApp;
