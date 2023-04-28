import React, { useState, useEffect } from 'react'
import Cards from './components/Cards';
import "./index.css"

function App() {
  
  const [productos, setProductos] = useState([]);

  

  const getProducts = async () =>{
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=>{
              console.log(data);
              setProductos(data)
            })
            
            
  }

  useEffect(() => {
        getProducts();
  }, []);
  const primerosCincoProductos = productos.slice(0, 4);
  return (
    <section className='contenedor'>
      <header>
        <h1 className='fstore'>Fake Store</h1>
      </header>
      <div className='Cards'>

        <Cards productos={primerosCincoProductos}/>

        </div>
    </section>
  )
}

export default App
