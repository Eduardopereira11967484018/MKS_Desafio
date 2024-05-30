"use client";
import { CartContext } from '@/context/CartContext';
import React, { useContext, useEffect, useState } from 'react';

export default function Header() {
  const [productAdd, setProductAdd] = useState(false);
  const { cartList, OpenCart, cartOpen } = useContext(CartContext);

  useEffect(() => {
    if (cartList.length > 0) {
      setProductAdd(true);
      const timeout = setTimeout(() => {
        setProductAdd(false);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [cartList]);

  function handleClick() {
    setTimeout(() => {
      OpenCart();
    }, 200);
      
  }

  return (
    <header className='fixed w-full bg-gradient-to-r from-[#1252b6] to-[#4567b7] flex justify-center items-center p-2  md:px-6 lg:static lg:h-[100px] lg:px-16 lg:py-0'>
      <div className="w-full flex items-center justify-between max-w-[1440px]">
      <div className="flex gap-2 text-white animate-pulse">
  <h1 className="text-[40px] font-semibold animate-pulse- slow animate-white-to-black">MKS</h1>
  <p className="text-[20px] flex items-center font-light animate-pulse- slow animate-white-to-black">Sistemas</p>
</div>
        {cartOpen? "" : productAdd ? (
          <button className='bg-white text-green-500 flex px-4 py-3 gap-4 w-[80px] rounded-lg max-h-[45x] cursor-pointer active:bg-slate-100'>
          <img  src='/icons/cart.svg' alt='cart icon' />
          {cartList.length}
        </button>
        ) : (
          <button onClick={handleClick} className='bg-white flex px-4 py-3 gap-4 rounded-lg w-[80px] max-h-[45x] cursor-pointer active:bg-slate-100 transition-all duration-500 hover:shadow-md hover:translate-y-1 button-effect'>
  <img src='/icons/cart.svg' alt='cart icon' />
  {cartList.length}
</button>
        )}
      </div>
    </header>
  );
}
