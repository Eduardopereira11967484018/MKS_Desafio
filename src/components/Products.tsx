"use client";
import apiProducts from '@/functions/apiProducts';
import React, { useContext, useEffect, useState } from 'react';
import Card from './Card';
import { CartContext } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  photo: string;
}

const Products: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await apiProducts();
        setProducts(data);
      } catch (error) {
        console.error('Erro ao obter produtos:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap justify-center my-[20px] md:w-full md:justify-evenly md:mx-[20px] lg:w-[800px] xl:w-[1000px] 2xl:my-0">
      {loading ? (
        <div className="flex justify-center">
          <button className="bg-gray-100 hover:bg-gray-200 active:bg-gray-300 text-gray-600 font-bold py-2 px-4 rounded-lg">
            Carregando arquivos ...
          </button>
        </div>
      ) : (
        products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.photo}
            onClick={() => addToCart(product)}
          />
        ))
      )}
    </div>
  );
};

export default Products;
