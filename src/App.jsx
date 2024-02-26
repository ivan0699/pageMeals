import React, { useState , useEffect } from 'react'
import axios, { formToJSON } from 'axios';
import './App.css'
import ItemList from './components/ItemList';


const App = () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data)
        setProducts(data.meals);
      } 
      catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>List of meals</h2>
      <ItemList products={products} />
    </div>
  );
};


export default App
