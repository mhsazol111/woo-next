import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';

const wooApiService = new WooCommerceRestApi({
  url: process.env.siteUrl,
  consumerKey: process.env.wooConsumerKey,
  consumerSecret: process.env.wooConsumerSecret,
  version: 'wc/v3',
  axiosConfig: { headers: {} }
});

export default wooApiService;
