import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';
export const ProductContext = createContext();

export const ProductProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [card, setCard] = useState([]);
  const [loading, setLoading] = useState(true);
  const [storage, setStorage] = useState(true);

  const fetchProducts = async () => {
    console.log('ok')
    let response = await axios('https://fakestoreapi.com/products')
    let data = response.data
    if(data.length > 0){
      setProducts(data)
    }
    setLoading(false)
  };

  useEffect(() => {
    if(storage){
      if(localStorage.getItem('card')){
        setCard(JSON.parse(localStorage.getItem('card')))
      }
      setStorage(false)
    }
    console.log('ok')
    if(loading){
      fetchProducts();
    }
  })

  return (
    <ProductContext.Provider
      value={{ products, setProducts, card, setCard, loading, setLoading }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
