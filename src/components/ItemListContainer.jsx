import React, { useState , useEffect } from 'react'
import ItemList from './ItemList';


const ItemListContainer = () => {
  
    const URL = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    let url = 'ad';
    let url2 = URL + search;
      
    const handleChange = (event) => {
          setSearch(event.target.value);
    }
      
    const handleSubmit = (event) => {
    event.preventDefault();
         url = URL + event;
    console.log(`Searching for ${search}... ${url}` );
    }
      if(true){

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
  }, []);}

  return (
    <div>
      <h2>List of meals</h2>
      <form onSubmit={handleSubmit}>
            <input type="text" value={search} onChange={handleChange} />
            <button type="submit">Search</button>
          </form>
          
      
      <ItemList products={products} />
    </div>
  );
};


export default ItemListContainer;