import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import CartItemStyle from '../assets/css/Cart.module.scss';
import { updateCartItem } from '../services/cart';

const CartItem = React.forwardRef(({ item, countCartTotal }, ref) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [summedPrice, setSummedPrice] = useState(item.summedPrice);
  const stock = item.product.stock_quantity;

  useEffect(() => {
    countCartTotal(summedPrice);
    // updateCartItem(item.cartRowId, { quantity, summedPrice });
  }, [quantity, summedPrice]);

  const handleIncrement = () => {
    setQuantity((prevQuantity) => (prevQuantity > (stock ? stock : 999) ? prevQuantity : prevQuantity + 1));
    setSummedPrice((prevSummedPrice) => parseFloat(parseFloat(prevSummedPrice) + parseFloat(item.price)).toFixed(2));
  };

  const handleDecrement = () => {
    setQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1));
    setSummedPrice((prevSummedPrice) => parseFloat(parseFloat(prevSummedPrice) - parseFloat(item.price)).toFixed(2));
  };

  const handleQuantityChange = (e) => {
    const range = stock ? stock : 999;
    let value = e.target.value.replace(/[^0-9]/, '');
    if (value <= range) {
      value = parseInt(value == '' ? 1 : value);
      setQuantity(value);
      setSummedPrice(parseFloat(parseFloat(item.price * value).toFixed(2)));
    }
  };

  return (
    <div ref={ref} className={`${CartItemStyle.wrapper} flex items-center`}>
      <div className={`${CartItemStyle.image}`}>
        <Image src={item.product.images[0].src} width={100} height={100} />
      </div>

      <div className={`${CartItemStyle.title}`}>
        <p>
          <Link href={`/products/${item.product.slug}`}>
            <a>{item.product.name}</a>
          </Link>
        </p>
      </div>

      <div className={`${CartItemStyle.price} mx-5`}>${item.price}</div>

      <div className="quantity_area">
        <button onClick={handleDecrement} disabled={quantity <= 1 ? true : false}>
          -
        </button>
        <input type="text" name="cart_quantity" onChange={handleQuantityChange} value={quantity} />
        <button onClick={handleIncrement} disabled={quantity >= (stock ? stock : 999) ? true : false}>
          +
        </button>
      </div>

      <div className={`${CartItemStyle.price} mx-5`}>${summedPrice}</div>
    </div>
  );
});
export default CartItem;
