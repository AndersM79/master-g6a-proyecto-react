import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function InfoProducto({ producto, agregarCarrito } = {}) {
  return (
    <div className='infoProducto'>
      <Link to={`/detalle-producto/${producto._id}`}>
        <div
          className='infoProducto-image'
          style={{
            backgroundImage: `url(${producto.image})`,
          }}
        />
        <div className='infoProducto-info'>
          <h4>{producto.product_name}</h4>
          <p>{producto.price}</p>
        </div>
      </Link>
      <button
        className='infoProducto-button'
        onClick={() => agregarCarrito(producto)}
      >
        Comprar
      </button>
    </div>
  );
}

export default InfoProducto;
