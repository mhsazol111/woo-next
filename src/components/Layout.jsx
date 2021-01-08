import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Woo Next</title>

        <link rel="icon" type="image/png" href="images/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/magnific-popup.min.css" />
        <link rel="stylesheet" href="css/font-awesome.css" />
        <link rel="stylesheet" href="css/jquery.fancybox.min.css" />
        <link rel="stylesheet" href="css/themify-icons.css" />
        <link rel="stylesheet" href="css/niceselect.css" />
        <link rel="stylesheet" href="css/animate.css" />
        <link rel="stylesheet" href="css/flex-slider.min.css" />
        <link rel="stylesheet" href="css/owl-carousel.css" />
        <link rel="stylesheet" href="css/slicknav.min.css" />

        {/* Eshop StyleSheet */}
        <link rel="stylesheet" href="css/reset.css" />
        <link rel="stylesheet" href="style.css" />
        <link rel="stylesheet" href="css/responsive.css" />
      </Head>
      <Header />
      {props.children}
      <Footer />
    </>
  );
};

export default Layout;
