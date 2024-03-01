import React, {useEffect, useState} from 'react';
import './product.css'


const Item = ({product}) => {

    const [count, setCount] = useState(0);
    const price = product.idMeal.slice(1,-1);
    const carData = { 
        name: product.name,
        price: price,
        img: product.strMealThumb,
        count: count,
    };    
    
    const handleClick1 = () => {

      setCount(count + 1);
      
    }
    
    useEffect(() => {

        localStorage.setItem("carData", JSON.stringify(carData));

    },[count]);
    

    return(
        <>
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