import { CSSTransition, SwitchTransition } from 'react-transition-group';
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
        <SwitchTransition mode="out-in">
          <CSSTransition key={router.pathname} classNames="page-animation" timeout={300} unmountOnExit>
            <div id="main-content">
              <Component {...pageProps} />
            </div>
          </CSSTransition>
        </SwitchTransition>
        <Footer />
      </div>
    </>
  );
}

export default MyApp;
