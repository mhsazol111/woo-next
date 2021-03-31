export const addToCart = (product, quantity, variation = null) => {
  if (process.browser) {
    const cart = [];
    const existingCart = getCartData();
    const cartItemData = {
      cartRowId: `cr_${Date.now()}`,
      productId: product.id,
      quantity: quantity,
      product: product,
    };

    if (existingCart) {
      existingCart.push(cartItemData);
      localStorage.setItem('woo_next_cart', JSON.stringify(existingCart));
    } else {
      cart.push(cartItemData);
      localStorage.setItem('woo_next_cart', JSON.stringify(cart));
    }
  }
};

export const clearCart = () => {
  localStorage.removeItem('woo_next_cart');
};

export const updateCart = (rowId, data) => {
  console.log('update cart', rowId);
  const existingCart = getCartData();
  console.log(existingCart);
  if (rowId) {
  }
};

export const getProductFromCart = (rowId) => {
  const cart = getCartData();
  if (cart) {
    const foundItem = cart.find((item) => item.cartRowId === rowId);
    return foundItem ? foundItem : null;
  } else {
    return null;
  }
};

export const getCartData = () => {
  if (process.browser) {
    let existingCart = localStorage.getItem('woo_next_cart');
    if (existingCart) {
      return JSON.parse(existingCart);
    }
    return null;
  }
};

export default {
  addToCart,
  clearCart,
  updateCart,
  getProductFromCart,
  getCartData,
};
