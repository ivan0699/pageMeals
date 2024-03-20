import React, {useEffect, useState} from 'react';
import './product.css'
import Car from './car';


const Item = ({product}) => {

    const [count, setCount] = useState(0);
    const [data, setData] = useState(null);
    const price = product.idMeal.slice(1,-1);
    const carData = {
        id: product.idMeal,
        name: product.name,
        price: price,
        img: product.strMealThumb,
        count: count,
    };

    const fetchData = async () => {
        try {
          let response = await fetch('/car.json');
          console.log(response);
          let data = await response.json();
          
            setData(data);
          
        } 
        catch (error) {
          console.error('Error al obtener datos:', error);
        }
      };
      fetchData();
      
    
    const handleClick1 = () => {

      setCount(count + 1);
      carData.count = count;
      
    }   

    return(
        <>
        <Car hiden = {true}/>
        <p>${price}</p>
        <div class="card">
            <div class="name">
            <img class="product" src= {product.strMealThumb}/>
            <div className='blockbot'>
            <p class="name">{product.strMeal}</p>
            <button type="submit" onClick={handleClick1} className='Buy'>Buy</button>
            </div>
            </div>
                
            <div class="ing-container">

                    <p>{product.strIngredient1}: {product.strMeasure1}</p>
                    <p>{product.strIngredient2}: {product.strMeasure2}</p>
                    <p>{product.strIngredient3}: {product.strMeasure3}</p>
                    <p>{product.strIngredient4}: {product.strMeasure4}</p>
                    <p>{product.strIngredient5}: {product.strMeasure5}</p>
                    <p>{product.strIngredient6}: {product.strMeasure6}</p>
                    <p>{product.strIngredient7}: {product.strMeasure7}</p>
                                
                    
            </div>
                
                

        </div>
        </>
    )






};

export default Item;