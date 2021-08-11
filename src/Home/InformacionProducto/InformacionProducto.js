import React from "react";

import "./styles.css";

function InfoProducto({ producto } = {}) {
  console.log(
    "🚀 ~ file: InformacionProducto.js ~ line 4 ~ InfoProducto ~ producto",
    producto
  );
  return (
    <div className='infoProducto'>
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
      <button className='infoProducto-button'>Comprar</button>
    </div>
  );
}

export default InfoProducto;
