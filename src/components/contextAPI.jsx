import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';


export const ProductContext = createContext();

export const ProductProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    let response = await axios('https://fakestoreapi.com/products')
    let data = response.data
    setProducts(data)
    setLoading(false)
  };

  useEffect(()=>{
    fetchProducts();
    setCard(
      JSON.parse(localStorage.getItem('card'))
    )
  },[]);

  
  return (
    <ProductContext.Provider
      value={{ products, setProducts, card, setCard, loading, setLoading }}
    >
      {children}
    </ProductContext.Provider>
  );
};
