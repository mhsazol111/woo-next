import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Woo Next</title>
      </Head>
      <div id="page-container" className="lg:p-8 md:p-7">
        <div className="full-gradient-bg" />
        <div className="full-glass-bg" />
        <Header />
        <div id="main-content">{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
