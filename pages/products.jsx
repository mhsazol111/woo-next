import { motion } from 'framer-motion';

import Head from 'next/head';
import ProductGridItem from '../src/components/ProductGridItem';

import { getProducts } from '../src/services/fetchData';
import { pageTransition, stagger } from '../src/services/animation';

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: { products },
  };
};

const Products = ({ products }) => {
  return (
    <>
      <Head>
        <title>This is Products Page</title>
      </Head>
      <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
        <div className="py-10">
          <h2 className="text-center pb-10">Products</h2>
          {products ? (
            <motion.div variants={stagger} className="product-grid grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
              {products.map((product) => {
                return <ProductGridItem key={product.id} product={product} />;
              })}
            </motion.div>
          ) : (
            <h1>Something Went Wrong</h1>
          )}
        </div>
      </motion.div>
    </>
  );
};

export default Products;
