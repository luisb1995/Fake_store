import React, { useState, useEffect } from 'react'
import Cards from './components/Cards';
import Pagination from './components/Pagination';
import "./index.css"

function App() {
  
  const [productos, setProductos] = useState([]);
  const [numeroProductosPorPagina] = useState(4);
  const [paginaActual, setPaginaActual] = useState(1);
  
  
    const indiceUltimoProducto = paginaActual * numeroProductosPorPagina;
    const indicePrimerProducto = indiceUltimoProducto - numeroProductosPorPagina;
    const productosPaginados = productos.slice(indicePrimerProducto, indiceUltimoProducto);


  const getProducts = async () =>{
        fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then(data=>{
              setProductos(data)
            })
            
            
  }

  const cambiarPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const numeroTotalDePaginas = Math.ceil(productos.length / numeroProductosPorPagina);


  useEffect(() => {
        getProducts();
  }, []);

  return (
    <section className='contenedor'>
      <header>
        <h1 className='fstore'>Fake Store</h1>
      </header>
      <div className='Cards'>

        <Cards productos={productosPaginados}/>

        </div>

        <Pagination
            numeroTotalDePaginas={numeroTotalDePaginas}
            paginaActual={paginaActual}
            cambiarPagina={cambiarPagina}
            />
    
    </section>
  )
}

export default App
