import axios from 'axios';
import wooApiService from './WooFetch';

const fetchData = async (url) => {
  try {
    const { data: fetchedData } = await axios.get(`${process.env.API_ENDPOINT}/${url}`);
    return fetchedData;
  } catch (err) {
    return false;
  }
};

export const getPosts = async () => {
  const posts = await fetchData('posts');
  return posts;
};

export const getProducts = async () => {
  try {
    const response = await wooApiService.get('products');
    return response.data;
  } catch (error) {
    return false;
  }
};

export const getProductBySlug = async (slug) => {
  try {
    const product = await wooApiService.get(`products/?slug=${slug}`);
    return product.data;
  } catch (err) {
    return false;
  }
};

export const getNavById = async (id) => {
  const nav = await fetchData(`nav/${id}`);
  return nav;
};

// export { getPosts, getProductBySlug, getProducts };
