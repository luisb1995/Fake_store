import React from 'react';
import "../index.css"

function Pagination({ numeroTotalDePaginas, paginaActual, cambiarPagina }) {
  const numerosDePagina = [];

  for(let i = 1; i <= numeroTotalDePaginas; i++) {
    numerosDePagina.push(i);
  }

  return (
    <div className='paginacion'>
      <ul className="pagination">
        {numerosDePagina.map(numeroPagina => (
          <li key={numeroPagina} className={numeroPagina === paginaActual ? "page-item active" : "page-item"}>
            <button onClick={() => cambiarPagina(numeroPagina)} className="page-link">{numeroPagina}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pagination;