import ReactHtmlParser from 'react-html-parser';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import Image from 'next/image';
import Head from 'next/head';

import { pageTransition, springFromRight, fadeInUp } from '../../src/services/animation';
import { getProductBySlug, getProducts } from '../../src/services/fetchData';

import styles from '../../src/assets/css/ProductDetails.module.css';

export const getStaticPaths = async () => {
  const products = await getProducts('per_page=50');

  const paths = products.map((product) => {
    return {
      params: { slug: product.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const product = await getProductBySlug(params.slug);

  return {
    props: { product },
  };
};

const Product = ({ product }) => {
  const productDetails = product[0];
  const productImages = productDetails.images;
  const productCategories = productDetails.categories;

  const responsive = {
    device: {
      breakpoint: { max: 4000, min: 300 },
      items: 1,
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <>
      <Head>
        <title>{productDetails.name}</title>
      </Head>

      <div variants={pageTransition} initial="initial" animate="animate" exit="exit" className="page-content">
        <div className="section_1">
          <div className="flex flex-wrap">
            <div className="lg:w-1/2 w-full">
              <div className={`${styles.product_image_gallery_wrap} second_level_blur rounded-lg`}>
                <div className={`${styles.product_image_gallery}`}>
                  {productImages && (
                    <Carousel infinite keyBoardControl swipeable draggable responsive={responsive}>
                      {productImages.map((image) => {
                        return (
                          <div key={image.id} className={`${styles.product_gallery_item} flex flex-wrap justify-center items-center text-center`}>
                            <div variants={springFromRight}>
                              <Image src={image.src} alt={image.name} width={400} height={400} />
                            </div>
                          </div>
                        );
                      })}
                    </Carousel>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className={`${styles.product_info_panel} flex flex-wrap align-center justify-center items-center min-h-full`}>
                <div variants={stagger} className={`${styles.product_info_panel_inner} w-full lg:px-10 md:px-7 px-5`}>
                  <div variants={fadeInUp} className={`${styles.product_categories}`}>
                    {productCategories &&
                      productCategories.map((cat) => {
                        return <span key={cat.id}>{cat.name}</span>;
                      })}
                  </div>
                  <h1 variants={fadeInUp} className={`${styles.product_title} xl:py-8 py-5`}>
                    {productDetails.name}
                  </h1>
                  <div variants={fadeInUp} className="product_description">
                    {ReactHtmlParser(productDetails.description)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Product;
