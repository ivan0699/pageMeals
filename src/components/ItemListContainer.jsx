import React, { useState , useEffect } from 'react'
import ItemList from './ItemList';
import './ItemListContainer.css'




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
   
    
    <div >
      
        <form  onSubmit={handleSubmit}>
            <div className="search" >
                <div className="input">
                    <input type="text" value={search} onChange={handleChange} />
                </div>
                <div >
                    <button className="buton" type="submit">Search</button>
                </div>
            </div>
        </form>
          
      
          
        <div className="items">
            <ItemList products={products} />
        </div>
    </div>
    
  );
};


export default ItemListContainer;