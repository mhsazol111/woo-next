import React, { useState, useEffect } from 'react';

export const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [globalCart, setGlobalCart] = useState(null);

  useEffect(() => {
    if (process.browser) {
      let cartData = localStorage.getItem('woo_next_cart');
      cartData = cartData ? JSON.parse(cartData) : null;
      setGlobalCart(cartData);
    }
  }, []);

  return <AppContext.Provider value={[globalCart, setGlobalCart]}>{children}</AppContext.Provider>;
};
