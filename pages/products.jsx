import Link from 'next/link';
import Head from 'next/head';
import { fetchProducts } from '../services/fetchData';
import Layout from '../components/Layout';

export const getStaticProps = async () => {
  const products = await fetchProducts();
  return {
    props: { products },
  };
};

const Products = ({ products }) => {
  return (
    <Layout>
      <Head>
        <title>This is the home page</title>
      </Head>
      <h1>This is Product page</h1>
      <div>
        {products ? (
          products.map((product) => {
            return (
              <h1 key={product.id}>
                <Link href={`/products/${product.slug}`}>{product.name}</Link>
              </h1>
            );
          })
        ) : (
          <h1>Something Went Wrong</h1>
        )}
      </div>
    </Layout>
  );
};

export default Products;
