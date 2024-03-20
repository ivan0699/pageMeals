import React, {useState, useEffect} from "react";

function Car(props) {
    const hiden = props.hiden;
    const [data, setData] = useState(null);
    
    useEffect(() => {
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
      }, []);


    if (!hiden) {

    return (
        <div>
        <p>hola</p>
        </div>
    )
    }else {

        return (<p>algoalgo</p>)
    }

}



export default Car;