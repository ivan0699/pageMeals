import React from 'react';

const Item = ({product}) => {
    return(
    <div class="card">
        <div class="img-container">
        <img class="product" src= {product.strMealThumb}/>
        </div>
        <div class="card-body">
            <p class="name">{product.strMeal}</p>
            <h3 class="recepy">({product.strInstructions})</h3>
            
        
        </div>





    </div>)






};
export default Item;