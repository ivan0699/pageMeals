import React, { useState , useEffect } from 'react'
import ItemList from './ItemList';


const ItemListContainer = () => {
  
    
    let URL2 = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState([]);
    const [URL, setURL] = useState('https://www.themealdb.com/api/json/v1/1/search.php?s=a');
      
    const handleChange = (event) => {
      setSearch(event.target.value);
          
    }
      
    const handleSubmit = (event) => {
      event.preventDefault();
      setURL(URL2 + search);
    } 

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log({URL} );
        let response = await fetch(URL);
        let data = await response.json();
        if(Object.keys(data.meals).length > 0) {
          setProducts(data.meals);
        }
      } 
      catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };

    fetchData();
  }, [URL]);

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