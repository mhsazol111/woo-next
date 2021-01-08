import { useEffect, useState } from 'react';
import wooApiService from '../services/WooFetch';

const Products = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [hasError, setHasError] = useState();

  useEffect(() => {
    setIsLoading(true);

    const fetchProducts = async () => {
      try {
        const response = await wooApiService.get('products');
        setProducts(response.data);
        setIsLoading(false);
      } catch (error) {
        setHasError(error.message);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {isLoading ? <h1>Loading...</h1> : ''}

      {!hasError &&
        products &&
        products.map((product) => {
          return <h1 key={product.id}>{product.name}</h1>;
        })}

      {hasError ? <h1>{hasError}</h1> : ''}
    </div>
  );
};

export default Products;
