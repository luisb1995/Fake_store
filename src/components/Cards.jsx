import React from 'react'

function Cards({productos}) {
  return (
    <>
        {
            productos.map(item=>{
                return(
                <div key={item.id} className='card'>   
                    <h2>{item.title}</h2>
                    <figure>
                        <img src={item.image} alt="" />
                    </figure>
                    <h3>Precio: {item.price}$</h3>
                    <h4>Stock Disponible: {item.rating.count} </h4>
                    <button className="btn btn-success">Añadir al carrito <i className="bi bi-cart4"></i></button>
                </div>
               )           
            })
        }
    
    </>
  )
}

export default Cards