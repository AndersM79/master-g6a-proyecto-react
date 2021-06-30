import React from "react";

function Producto(props) {
  return (
    <div>
      <img src={props.producto.image} />
      <p>{props.producto.product_name}</p>
      <p>{props.producto.price}</p>
      {props.usarioLogueado ? (
        <button>Comprar</button>
      ) : (
        <button>Registrate</button>
      )}
    </div>
  );
}

export default Producto;
