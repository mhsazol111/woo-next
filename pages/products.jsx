import { createRef, useRef } from 'react';
import { useRouter } from 'next/router';
import { Tween } from 'react-gsap';

import Head from 'next/head';
import ProductGridItem from '../src/components/ProductGridItem';
import Pagination from '../src/components/Pagination';

import { getProducts, getTotalProductPages } from '../src/services/fetchData';

export const getStaticProps = async () => {
  const totalPages = await getTotalProductPages();
  const products = await getProducts();
  return {
    props: { products, totalPages },
  };
};

const Products = ({ products, totalPages }) => {
  // Handle Pagination Page changes
  const router = useRouter();
  const handlePageChange = (pageNumber) => {
    router.push({
      pathname: `products/page/${pageNumber.selected + 1}`,
    });
  };

  const sRef = useRef([]);
  const anotherRef = useRef([]);

  return (
    <>
      <Head>
        <title>This is Products Page</title>
      </Head>
      <div className="section-1 py-10">
        <div className="container">
          <Tween from={{ y: 50, delay: 0.7, opacity: 0 }} duration={0.5} ease="back.out(1.7)">
            <h2 className="text-center pb-10">Products</h2>
          </Tween>
          {products ? (
            <>
              <div className="product-grid grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                <Tween from={{ y: 30, delay: 0.7, opacity: 0 }} duration={0.5} stagger={0.1} ease="power3.out">
                  {products.map((product, index) => {
                    return <ProductGridItem ref={sRef} key={product.id} index={index} product={product} />;
                  })}
                </Tween>
              </div>
              <Tween from={{ y: 30, delay: 0.9, opacity: 0 }} duration={0.7} ease="power3.out">
                <div className="paginate-wrap">
                  <Pagination initialPage={1} totalPage={totalPages} onPageChange={handlePageChange} />
                </div>
              </Tween>
            </>
          ) : (
            <h1>Something Went Wrong</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
