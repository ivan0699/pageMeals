import React from "react";
import Item from './product';
import './ItemList.css'

const ItemList = ({ products }) => {
    return (
      
      <div className="row">
        {products.map((product) => (
          <div key={product.idMeal} className="col-md-4 mb-4">
            <Item product={product} />
          </div>
        ))}
      </div>
      
    );
  };
  
  export default ItemList;