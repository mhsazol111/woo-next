import Head from 'next/head';
import Layout from '../components/Layout';

const Home = () => {
  return (
    <Layout>
      <Head>
        <title>This is the home page</title>
      </Head>
      <h1>This is home page</h1>
    </Layout>
  );
};

export default Home;
