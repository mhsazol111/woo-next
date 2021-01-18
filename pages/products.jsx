import ProductGridItem from '../src/components/ProductGridItem';
import { getProducts } from '../src/services/fetchData';

export const getStaticProps = async () => {
  const products = await getProducts();

  return {
    props: { products },
  };
};

const Products = ({ products }) => {
  return (
    <>
      <section className="py-10">
        <h2 className="text-center pb-10">Products</h2>
        {products ? (
          <div className="product-grid grid 2xl:grid-cols-5 xl:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4">
            {products.map((product) => {
              return <ProductGridItem key={product.id} product={product} />;
            })}
          </div>
        ) : (
          <h1>Something Went Wrong</h1>
        )}
      </section>
    </>
  );
};

export default Products;
