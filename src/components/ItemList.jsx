import React, {useState, useEffect} from "react";
import Item from './product';
import './ItemList.css'
import Car from './car';

const ItemList = ({ products }) => {
  
    const [count, setCount] = useState(1);
      
    let id = '';
    const carData = {
        name: '',
        price: '',
        img: '',
        count: count,
      };
    
    function handleClick1 (props) {
      setCount(count + 1);
      id = props.product.idMeal;
      carData.name = props.product.strMeal;
      carData.price = props.product.idMeal.slice(1,-1);
      carData.img = props.product.strMealThumb;
      carData.count = count;
      localStorage.setItem(id, JSON.stringify(carData));

    
    }


    return (
      <>
      <div className="car">
        <Car />
        </div>
      <div className="row">
        
        
        {products.map((product) => (
          
          <div key={product.idMeal} className="col-md-4mb-4">
            <div>
            <Item product={product} />
            <button type="submit"  onClick= {() => handleClick1({product})} className='Buy'>Buy</button>
            </div>
          </div>
          
        ))}
        
      </div>
      </>
      
    );
  };
  
  export default ItemList;