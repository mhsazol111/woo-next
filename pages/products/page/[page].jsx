import { useRouter } from 'next/router';
import { Tween } from 'react-gsap';

import Head from 'next/head';
import ProductGridItem from '../../../src/components/ProductGridItem';
import Pagination from '../../../src/components/Pagination';

import { getProducts, getTotalProductPages } from '../../../src/services/fetchData';

export const getStaticPaths = async () => {
  const totalPages = await getTotalProductPages();

  const pagesArray = [];
  for (let i = 1; i <= totalPages; i++) {
    pagesArray.push({ params: { page: i.toString() } });
  }

  return {
    paths: pagesArray,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const currentPage = params.page;
  const totalPages = await getTotalProductPages();
  const products = await getProducts(`page=${currentPage}`);
  return {
    props: { products, totalPages, currentPage },
  };
};

const PageNumber = ({ products, totalPages, currentPage }) => {
  // Handle Pagination Page changes
  const router = useRouter();
  const handlePageChange = (pageNumber) => {
    router.push({
      pathname: `/products/page/${pageNumber.selected + 1}`,
    });
  };

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
                {products.map((product, index) => {
                  return <ProductGridItem key={product.id} index={index} product={product} />;
                })}
              </div>
              <Tween from={{ y: 30, delay: 0.7, opacity: 0 }} duration={0.7} delay={5} ease="power3.out">
                <Pagination initialPage={currentPage} totalPage={totalPages} onPageChange={handlePageChange} />
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

export default PageNumber;
