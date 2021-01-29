import { useRouter } from 'next/router';

import Head from 'next/head';
import ProductGridItem from '../src/components/ProductGridItem';
import Pagination from '../src/components/Pagination';

import { getProducts } from '../src/services/fetchData';

export const getServerSideProps = async ({ query }) => {
  const page = query.page || 1;
  let totalProduct = await getProducts('per_page=9999');
  totalProduct = Math.ceil(totalProduct.length / 15);
  const products = await getProducts(`per_page=15&page=${page}`);
  return {
    props: {
      page,
      totalProduct,
      products,
    },
  };
};

const Products = ({ page, totalProduct, products }) => {
  const router = useRouter();

  const handlePageChange = (pageNumber) => {
    const path = router.pathname;
    const query = router.query;
    query.page = pageNumber.selected + 1;
    router.push({
      pathname: path,
      query: query,
    });
  };

  return (
    <>
      <Head>
        <title>This is Products Page</title>
      </Head>
      <div className="section-1 py-10">
        <div className="container">
          <h2 className="text-center pb-10">Products</h2>
          {products ? (
            <>
              <div className="product-grid grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
                {products.map((product) => {
                  return <ProductGridItem key={product.id} product={product} />;
                })}
              </div>
              <Pagination initialPage={page} totalPage={totalProduct} onPageChange={handlePageChange} />
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
