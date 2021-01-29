import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { fadeInUp, springFromRight } from '../services/animation';

import productStyle from '../assets/css/Product.module.css';

const ProductGridItem = ({ product }) => {
  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${productStyle.product_item} second_level_blur rounded-md p-5 relative overflow-hidden`}
      key={product.id}
    >
      <Link href={`/products/${product.slug}`}>
        <a>
          <motion.div variants={springFromRight} key={`product-img-${product.id}`} className="product_img text-center w-full block mt-5 mb-7">
            <Image src={product.images[0].src} width={150} height={150} type="intrinsic" alt={product.name} className="m-auto" />
          </motion.div>

          <div className="product_info">
            <h4 className="product_title text-2xl">{product.name}</h4>
            <p className="product_price">${product.sale_price ? product.sale_price : product.price}</p>
          </div>
          <div
            className={`${productStyle.product_hover_info} absolute flex items-center right-0 top-1/2 transform -translate-y-1/2 translate-x-12 py-3 rounded-md opacity-0 invisible transition-all duration-300 ease-in-out z-10`}
          >
            <div className={`${productStyle.product_action}`}>
              <span title="Add to cart">
                <img src="/images/cart.svg" alt="Add to Cart" />
                <span>Add to cart</span>
              </span>
              <span title="Quick View">
                <img src="/images/view.svg" alt="Quick View" />
                <span>Quick Shop</span>
              </span>
              <span title="Wishlist">
                <img src="/images/heart.svg" alt="Wishlist" />
                <span>Add to Wishlist</span>
              </span>
              <span title="Compare">
                <img src="/images/compare.svg" alt="Compare" />
                <span>Add to Compare</span>
              </span>
            </div>
          </div>
        </a>
      </Link>
    </motion.div>
  );
};
export default ProductGridItem;
