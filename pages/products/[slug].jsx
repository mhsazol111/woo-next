import Image from 'next/image';
import Head from 'next/head';

import { motion } from 'framer-motion';
import { pageTransition } from '../../src/services/animation';

import { getProductBySlug, getProducts } from '../../src/services/fetchData';

import styles from '../../src/assets/css/ProductDetails.module.css';

export const getStaticPaths = async () => {
  const products = await getProducts();

  const paths = products.map((product) => {
    return {
      params: { slug: product.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await getProductBySlug(params.slug);

  return {
    props: { product },
  };
};

const Product = ({ product }) => {
  const productDetails = product[0];

  return (
    <>
      <Head>
        <title>{productDetails.name}</title>
      </Head>

      <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
        <h1>{productDetails.name}</h1>
        <p>{productDetails.description}</p>
        <Image src={productDetails.images[0].src} alt={productDetails.images[0].name} width={500} height={500} />
      </motion.div>
    </>
  );
};
export default Product;
