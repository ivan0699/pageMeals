import React, { useState , useEffect } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer';
import Car from './components/car';

function App () {
  
  
    
  return (
    <div>
      <Car hiden = {false}/>
      <h2>List of meals</h2>
      <ItemListContainer/>
        
      
      
    </div>
  );
};


export default App
