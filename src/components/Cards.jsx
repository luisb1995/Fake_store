import React from 'react'
import "../index.css"

function Cards({productos}) {
  return (
    <>
        {
            productos.map(item=>{
                return(
                <div key={item.id} className='card'>   
                    <h2>{item.title.split(" ",6).join(" ")}</h2>
                    <figure>
                        <img src={item.image} alt={item.name} />
                    </figure>
                    <h3>Precio: {item.price}$</h3>
                    <h4>Stock Disponible: {item.rating.count} </h4>

                    <div className='button'>
                         <button className="btn btn-success">Añadir al carrito <i className="bi bi-cart4"></i></button>
                    </div>
                </div>
               )           
            })
        }
    
    </>
  )
}

export default Cards