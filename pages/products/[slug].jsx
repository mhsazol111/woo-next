import Image from 'next/image';
import Head from 'next/head';

import { getProductBySlug, getProducts } from '../../src/services/fetchData';

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
      <div>
        <h1>{productDetails.name}</h1>
        <p>{productDetails.description}</p>
        <Image src={productDetails.images[0].src} alt={productDetails.images[0].name} width={500} height={500} />
      </div>
    </>
  );
};
export default Product;
