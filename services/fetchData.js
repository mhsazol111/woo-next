import axios from 'axios';
import wooApiService from './WooFetch';

const fetchData = async (url) => {
  try {
    const { data: fetchedData } = await axios.get(`${process.env.apiEndpoint}/${url}`);
    return fetchedData;
  } catch (err) {
    return false;
  }
};

const fetchPosts = async () => {
  const posts = await fetchData('posts');
  return posts;
};

const fetchProducts = async () => {
  try {
    const response = await wooApiService.get('products');
    return response.data;
  } catch (error) {
    return false;
  }
};

const fetchProductBySlug = async (slug) => {
  try {
    const product = await wooApiService.get(`products/?slug=${slug}`);
    return product.data;
  } catch (err) {
    return false;
  }
};

export { fetchPosts, fetchProductBySlug, fetchProducts };
