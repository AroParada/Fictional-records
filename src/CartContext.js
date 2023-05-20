import { createContext, useState } from 'react';
import { productsArray } from './productsStore';

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOnetoCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] =useState([]);

    function getProductQuantity(id){
        cartProducts.find(product => product.id === id)?.quantity
        
        if (quantity == undefined) {
            return 0;
        }
    }

    const contextValue = {
      items: cartProducts  ,
      getProductQuantity,
      addOnetoCart,
      removeOneFromCart,
      deleteFromCart,
      getTotalCost
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

// Content (cart, addToCart, removeCart)
// Provider -> gives react app access to all the things in your context