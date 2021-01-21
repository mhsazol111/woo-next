import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const wooApiService = new WooCommerceRestApi({
  url: process.env.SITE_URL,
  consumerKey: process.env.WOO_CONSUMER_KEY,
  consumerSecret: process.env.WOO_CONSUMER_SECRET,
  version: 'wc/v3',
  axiosConfig: { headers: {} },
});

export default wooApiService;
