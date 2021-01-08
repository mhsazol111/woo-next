import WooCommerceRestApi from '@woocommerce/woocommerce-rest-api';
import config from '../config/config';

const wooApiService = new WooCommerceRestApi({
  url: config.siteUrl,
  consumerKey: config.wooConsumerKey,
  consumerSecret: config.wooConsumerSecret,
  version: 'wc/v3',
  axiosConfig: { headers: {} }
});

export default wooApiService;
