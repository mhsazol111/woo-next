import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [siteCart, setSiteCart] = useState(null);

  useEffect(() => {
    if (process.browser) {
      let cartData = localStorage.getItem('woo_next_cart');
      cartData = cartData ? JSON.parse(cartData) : null;
      setSiteCart(cartData);
    }
  }, []);

  return <AppContext.Provider value={[siteCart, setSiteCart]}>{children}</AppContext.Provider>;
};
