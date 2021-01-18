import Head from 'next/head';
import Header from '../src/components/Header';
import Footer from '../src/components/Footer';

import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Woo Next</title>
        {/* <link rel="preconnect" href="https://fonts.gstatic.com" /> */}
        {/* <link href="https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" /> */}
      </Head>
      <div id="page-container">
        <div className="full-gradient-bg" />
        <div className="page-inner-container min-h-screen 2xl:container relative 2xl:p-12 md:p-10 p-9">
          <div className="full-glass-bg" />
          <Header />
          <div id="main-content">
            <Component {...pageProps} />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default MyApp;
