import React, {useEffect, useState} from 'react';
import './product.css'


const Item = ({product}) => {

    
    const price = product.idMeal.slice(1,-1);   
    
    
    return(
        <>

        
        
        <div>
            <div class="name">
            <p className="name2">{product.strMeal}</p>
            <div class="card">
                
                <img class="product" src= {product.strMealThumb}/>
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
                <p>${price}</p>
                
            </div>
                
            
                
                

        </div>
        </>
    )






};

export default Item;