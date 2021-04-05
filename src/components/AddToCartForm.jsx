import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { addToCart, getCartData } from '../services/cart';

const AddToCartForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const stock = product.stock_quantity;
  const [globalCart, setGlobalCart] = useContext(AppContext);

  const handleIncrement = () => {
    const count = quantity > (stock ? stock : 999) ? quantity : quantity + 1;
    setQuantity(count);
  };

  const handleDecrement = () => {
    setQuantity(quantity === 1 ? 1 : quantity - 1);
  };

  const handleQuantityChange = (e) => {
    const range = stock ? stock : 999;
    let value = e.target.value.replace(/[^0-9]/, '');
    if (value <= range) {
      value = parseInt(value == '' ? 1 : value);
      setQuantity(value);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setGlobalCart(getCartData()); // Update the global cart
  };

  const handleGetProduct = () => {
    const getP = getProductFromCart('cr_1614887738875');
    console.log(getP);
  };

  return (
    <div className="add_to_cart_form">
      <div className="quantity_area">
        <button onClick={handleDecrement} disabled={quantity <= 1 ? true : false}>
          -
        </button>
        <input type="text" name="cart_quantity" onChange={handleQuantityChange} value={quantity} />
        <button onClick={handleIncrement} disabled={quantity >= (stock ? stock : 999) ? true : false}>
          +
        </button>
      </div>
      {product.type === 'simple' ? (
        ''
      ) : (
        <div>
          <p>variable product</p>
        </div>
      )}
      <div className="cart-btn-section">
        <button className="bg-green-300 px-2 py-1 mr-2" onClick={handleAddToCart}>
          Add to cart
        </button>

        <button
          className="bg-yellow-300 px-2 py-1"
          onClick={() => {
            console.log(getProductFromCart('cr_1614888542934'));
          }}
        >
          get product from cart
        </button>
      </div>
    </div>
  );
};
export default AddToCartForm;
