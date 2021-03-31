import React, { useContext } from 'react';
import { Tween, Reveal } from 'react-gsap';
import Head from 'next/head';
import { AppContext } from '../src/context/AppContext';

const CartPage = () => {
  const [siteCart] = useContext(AppContext);

  return (
    <>
      <Head>
        <title>Cart - {siteCart ? siteCart.length : 0}</title>
      </Head>
      <div className="cart-section">
        <div className="py-16">
          <Tween from={{ y: 30, delay: 0.6, opacity: 0 }} duration={0.5} stagger={0.2} ease="power3.out">
            <h1>Cart</h1>

            <div>
              {siteCart ? (
                <ul>
                  {siteCart.map((item) => {
                    return <li key={item.cartRowId}>{item.product.name}</li>;
                  })}
                </ul>
              ) : (
                ''
              )}
            </div>
            <button className="bg-red-400">Clear</button>
          </Tween>
        </div>
      </div>
    </>
  );
};
export default CartPage;
