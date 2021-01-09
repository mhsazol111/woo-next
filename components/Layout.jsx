import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Woo Next</title>
      </Head>
      <div id="page-container">
        <Header />
        <div id="main-content">{props.children}</div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
