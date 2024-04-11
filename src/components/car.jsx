import React, {useState, useEffect} from "react";

function Car(props) {
    const [count, setCount] = useState(localStorage.length);
    useEffect(() => {
        function chekdata() {
            console.log("hola");
            setCount(localStorage.length);
            
        }
        window.addEventListener('storage',chekdata());
        

    }, onstorage, onload);
    
    return (
        <div>
        <img class="product" src='https://w7.pngwing.com/pngs/879/25/png-transparent-web-development-e-commerce-shopping-cart-software-online-shopping-business-text-service-people.png'/>
        <p> {count}</p>
        </div>

    )   

}



export default Car;