import React from "react";

import "./styles.css";

function InfoProducto({ producto } = {}) {
  console.log(
    "🚀 ~ file: InformacionProducto.js ~ line 4 ~ InfoProducto ~ producto",
    producto
  );
  return (
    <div className='infoProducto'>
      <img src={producto.image} />
      <div>
        <h4>{producto.product_name}</h4>
        <p>{producto.price}</p>
      </div>
      <button>Comprar</button>
    </div>
  );
}

export default InfoProducto;
