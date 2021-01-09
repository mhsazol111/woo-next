import Link from 'next/link';
import { fetchProducts } from '../services/fetchData';

export const getStaticProps = async () => {
  const products = await fetchProducts();
  return {
    props: { products },
  };
};

const Products = ({ products }) => {
  return (
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
  );
};

export default Products;
