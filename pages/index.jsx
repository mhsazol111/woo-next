import { Tween, Reveal, Timeline } from 'react-gsap';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { CustomEase } from 'gsap/dist/CustomEase';

import Head from 'next/head';
import Lottie from 'react-lottie';

import lottieAnimation from '../src/assets/lottie/e-commerce-animations.json';

import styles from '../src/assets/css/Home.module.scss';

gsap.registerPlugin(ScrollTrigger, CustomEase);

const Home = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: lottieAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  CustomEase.create('planeEase', '0.34, 1.30, 0.64, 1');

  return (
    <>
      <Head>
        <title>Next Commerce - NextJs with headless WooCommerce</title>
      </Head>
      <div className="section-1 pt-5 sm:pt-12 lg:pt-0">
        <div className="container">
          <div className="flex flex-wrap items-center lg:min-h-without-header">
            <div className="lg:w-1/3 w-full">
              <Tween from={{ y: 30, delay: 0.7, opacity: 0 }} duration={0.7} stagger={0.2} ease="power3.out">
                <h1 className={`${styles.primary_title} xl:text-8xl lg:text-7xl md:text-5xl xl:pb-6 lg:pb-5 pb-3`}>Next Commerce</h1>
                <p className="pb-10">SEO Friendly lightning fast headless e-commerce platform based on WooCommerce and NextJS</p>
              </Tween>
            </div>
            <div className="lg:w-2/3 w-full">
              <Tween from={{ y: 30, delay: 0.8, opacity: 0 }} duration={0.7} ease="power3.out">
                <div className="lottie-wrapper">
                  <Lottie options={defaultOptions} />
                </div>
              </Tween>
            </div>
          </div>
        </div>
      </div>

      <div className="section-2 bg-white bg-opacity-50 py-16 md:py-36">
        <div className="container">
          <Reveal threshold={0.75}>
            <div className="flex flex-wrap-reverse items-center md:flex-wrap z-10 relative">
              <div className="w-full md:w-1/2 md:pr-7 md:pt-0 pt-8">
                <div className={`${styles.service_grid} grid xl:grid-cols-4 grid-cols-2 gap-4`}>
                  <Tween from={{ x: -50, delay: 0.4, opacity: 0 }} duration={0.4} stagger={0.2} ease="back.out(1.7)">
                    <div className={`${styles.service_item} p-5 rounded-md text-center bg-indigo-200 bg-opacity-50`}>
                      <img src="/images/ecommerce.svg" alt="invoice" />
                      <p>Fast Checkout</p>
                    </div>
                    <div className={`${styles.service_item} p-5 rounded-md text-center bg-indigo-200 bg-opacity-50`}>
                      <img src="/images/mobile-shopping.svg" alt="invoice" />
                      <p>Mobile apps</p>
                    </div>
                    <div className={`${styles.service_item} p-5 rounded-md text-center bg-indigo-200 bg-opacity-50`}>
                      <img src="/images/shopping-bag.svg" alt="invoice" />
                      <p>Easy to Use</p>
                    </div>
                    <div className={`${styles.service_item} p-5 rounded-md text-center bg-indigo-200 bg-opacity-50`}>
                      <img src="/images/invoice.svg" alt="invoice" />
                      <p>Low Price</p>
                    </div>
                  </Tween>
                </div>
              </div>
              <div className="w-full md:w-1/2 md:pl-7">
                <Tween from={{ y: 30, delay: 0.2, opacity: 0 }} duration={0.5} stagger={0.2} ease="power3.out">
                  <p className="text-xl">Features</p>
                  <h2 className="text-4xl md:text-5xl pt-5 pb-7">
                    We build modern <br />
                    experiences
                  </h2>
                  <p>
                    Woo Next can help visualize even the craziest ideas converting them into elegant designs, awesome experiences and catchy brands.
                  </p>
                </Tween>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptates earum praesentium distinctio cum facere nihil velit repellat blanditiis
        doloribus, nam architecto amet dicta dolores quibusdam dolore repudiandae rerum omnis veniam molestiae, vero hic quos libero rem? Temporibus
        suscipit architecto ut magni sed velit modi optio exercitationem animi consequatur labore quia veniam dolores repellat perspiciatis tempore
        vitae asperiores et cum, corporis deleniti doloribus eligendi inventore! Ipsum doloremque quis omnis culpa quisquam, dolor praesentium,
        aliquid aspernatur amet, ullam fugit. Vel optio necessitatibus, eveniet obcaecati quisquam, omnis dicta expedita, eaque a aut magni sapiente
        officia possimus similique voluptates atque minima vitae sunt labore impedit saepe praesentium! Eius, reiciendis modi? Voluptatum officia
        veritatis aspernatur, repellat molestiae, quos magnam ad pariatur at possimus saepe modi. Sequi cupiditate maiores earum, blanditiis et
        veritatis esse nemo modi reprehenderit dolor necessitatibus, natus consequatur porro eos ducimus ut voluptatibus, quibusdam corporis
        architecto ratione voluptates totam? Dicta nostrum eos ullam impedit voluptate veniam, architecto voluptatem, suscipit dolore sint sit illum
        ut quia labore natus facilis! Cum libero asperiores sunt molestias sit obcaecati consectetur aspernatur, qui ipsum nihil laudantium officiis
        incidunt ipsa, eaque blanditiis cupiditate aperiam quae, illum magnam possimus neque odio delectus ut ullam! Dicta iusto in eveniet quisquam,
        dignissimos atque iste quidem, eligendi voluptas quod ea accusantium animi laboriosam quis! Dolorem suscipit in exercitationem fugiat quasi
        voluptatem magni saepe, tempora cupiditate hic nihil voluptatibus similique et adipisci vitae alias. Quidem consequuntur neque, quae, soluta
        id voluptatem rem fugiat fuga explicabo saepe placeat commodi repellendus. Nemo odio esse minus facilis voluptate corporis aut culpa enim quas
        qui laborum, assumenda sapiente deserunt nisi tenetur quaerat accusantium velit vero adipisci ullam similique! Quos quisquam praesentium
        assumenda ab nesciunt perspiciatis maxime, doloribus earum ad nobis tenetur iusto non perferendis. Ipsam voluptatum soluta saepe consequatur
        mollitia nostrum qui eligendi sunt odit natus. Dolorum repudiandae repellendus, beatae nobis excepturi delectus quis inventore nemo, eius
        voluptatibus aut hic reprehenderit cum impedit maiores accusantium, quas exercitationem. Facilis impedit, corrupti, enim illum quia quae,
        praesentium dicta voluptatibus iste molestias consequatur nesciunt dolore quas deserunt magnam cum facere in nulla eaque harum ex voluptas!
        Harum quos, exercitationem, iusto consectetur mollitia inventore porro fugiat odio deserunt a iste explicabo earum distinctio at nulla
        blanditiis possimus reiciendis odit nam cum molestiae unde. Rerum voluptatem id exercitationem, alias, ea et culpa accusantium facere
        dignissimos ipsa libero. Incidunt, nam reiciendis atque iure ad maxime, numquam, ullam inventore dolore corrupti fugiat qui sed perferendis
        pariatur omnis. Repellat voluptatibus esse iusto repudiandae maiores natus sunt officia dolorum. At velit sequi nobis, autem, nam quo
        reprehenderit laborum obcaecati tempora qui harum ad consectetur quia, ut facere dolore omnis. Error similique tempore sit ad quod! Dolore
        quis adipisci sequi repudiandae atque sint necessitatibus a deleniti saepe delectus excepturi voluptas voluptatibus asperiores ea aperiam
        corporis harum commodi, non iure! Ab similique adipisci, voluptatem eligendi harum ipsa facere explicabo. Exercitationem, animi vitae at
        perspiciatis voluptatibus cupiditate nostrum provident facilis fuga, quam necessitatibus? Totam dolorem ducimus dolore ab rerum eveniet eius
        autem. Assumenda, dolorum dolorem placeat officiis enim inventore perspiciatis!
      </p>

      <Timeline
        scrollTrigger={{ trigger: '.section-2', scrub: 1, start: 'top center', end: '+=100%' }}
        target={
          <div className={styles.plane_scroll_wrapper}>
            <div className={styles.plane_scroll_inner}>
              <img src="/images/paper-plane.png" alt="Paper Plane" />
            </div>
          </div>
        }
      >
        <Tween from={{ x: -200 }} to={{ x: '100vw', y: '60vh' }} duration={2} ease="planeEase" />
      </Timeline>
    </>
  );
};

export default Home;
