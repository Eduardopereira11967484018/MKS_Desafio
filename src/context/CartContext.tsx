"use client";
import React, { createContext, useEffect, useState } from 'react';
 
// define a estutrutra do produto
interface Product {
  id: number;
}
// Cria o contexto do carrinho 

export const CartContext = createContext<{ cartList: Product[];  addToCart: (product: Product) => void; removeToCart: (product: Product) => void;  cartOpen: boolean, OpenCart: () => void, CloseCart: () => void }>({
  cartList: [],
  addToCart: () => {},
  removeToCart: () => {},
  cartOpen: false,
  OpenCart: () => {},
  CloseCart: () => {},
});
// Provedor do  carrinho

export const CartProvider = <T extends React.ReactNode>({ children }: { children: T }) => { 
  const [cartList, setCartList] = useState<Product[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

// Controlar se o carrinho está aberto ou fechado

  const addToCart = (product: Product) => {

    //  useCallback para performance

    const isAlreadyInCart = cartList.some((item) => item.id === product.id);

     //  itens no carrinho
     
    if (!isAlreadyInCart) {
      setCartList([...cartList, product]); 
    }
  };
  

  const removeToCart = (id: Product) => {
    setCartList(cartList.filter((product) => product.id !== id.id));
  };

  function OpenCart () {
    setCartOpen(true);
  }

  function CloseCart () {
    setCartOpen(false);
  }


  return (
    <CartContext.Provider value={{cartList, addToCart,removeToCart, cartOpen, OpenCart, CloseCart}}>
      {children}
    </CartContext.Provider>
  );
};
