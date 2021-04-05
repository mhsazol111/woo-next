export const getFloatVal = (val) => {
  return val ? parseFloat(parseFloat(val).toFixed(2)) : null;
};

export const addToCart = (product, quantity, variation = null) => {
  if (process.browser) {
    const cart = [];
    const existingCart = getCartData();
    const cartItemData = {
      cartRowId: `cr_${Date.now()}`,
      productId: product.id,
      quantity: quantity,
      price: getFloatVal(product.price),
      summedPrice: getFloatVal(quantity * product.price),
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

export const updateCartItem = (rowId, data) => {
  if (rowId) {
    const product = getProductFromCart(rowId);
    console.log(data);
    if (data.quantity) {
      product.quantity = data.quantity;
    }
    if (data.summedPrice) {
      product.summedPrice = data.summedPrice;
    }
    console.log(product, 'updated');
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

export const getSubTotal = () => {
  const cart = getCartData();
  let subTotal = 0;
  if (!cart) {
    return subTotal;
  }
  cart.map((item) => {
    subTotal += item.summedPrice;
  });
  return subTotal;
};

export default {
  getFloatVal,
  addToCart,
  clearCart,
  updateCartItem,
  getProductFromCart,
  getCartData,
  getSubTotal,
};
