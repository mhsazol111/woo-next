import Head from 'next/head';
import Layout from '../src/components/Layout';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Create Next home page</title>
      </Head>
      <Layout>This is the home page</Layout>
    </div>
  );
};

export default Home;
