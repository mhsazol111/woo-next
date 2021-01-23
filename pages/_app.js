import { AnimatePresence } from 'framer-motion';
import NextNprogress from 'nextjs-progressbar';

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
        <NextNprogress color="#95bae8" stopDelayMs={100} height="2" />
        <Header />
        <div id="main-content">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
