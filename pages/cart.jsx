import React, { useContext, useRef, useEffect, useState } from 'react';
import { Tween } from 'react-gsap';
import Head from 'next/head';
import { AppContext } from '../src/context/AppContext';
import { getCartData, clearCart, getSubTotal } from '../src/services/cart';
import CartItem from '../src/components/CartItem';
// import CartStyle from '../src/assets/css/Cart.module.scss';

const CartPage = () => {
  const [globalCart, setGlobalCart] = useContext(AppContext);
  const cartItemRef = useRef([]);
  const [cartTotal, setCartTotal] = useState(getSubTotal());

  // useEffect(() => {
  //   console.log('cart page event');
  // }, []);

  const handleClearCart = () => {
    clearCart();
    setGlobalCart(getCartData()); // Update the global cart
  };

  const handleCartTotal = (data) => {
    console.log('getTotalCount', data);
  };

  return (
    <>
      <Head>
        <title>Cart - {globalCart ? globalCart.length : 0}</title>
      </Head>

      <div className="section-1 py-10">
        <div className="container">
          <Tween from={{ y: 50, delay: 0.7, opacity: 0 }} duration={0.5} ease="back.out(1.7)">
            <h2 className="text-center pb-10">Cart</h2>
          </Tween>
          <div className="cart-section">
            {globalCart ? (
              <>
                <Tween from={{ y: 30, delay: 0.3, opacity: 0 }} duration={0.5} stagger={0.2} ease="power3.out">
                  {globalCart.map((item) => {
                    return <CartItem key={item.cartRowId} ref={cartItemRef} item={item} countCartTotal={handleCartTotal} />;
                  })}
                </Tween>
                <h3>Total: ${getSubTotal()}</h3>
                <button className="bg-red-400" onClick={handleClearCart}>
                  Clear
                </button>
              </>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default CartPage;
