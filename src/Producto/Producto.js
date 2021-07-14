import React, { useContext } from "react";
import { AuthContext } from "../Contexts/Auth/Auth";

import { Link } from "react-router-dom";

function Producto(props) {
  const { agregarCarrito, quitarDeCarrito } = useContext(AuthContext);
  return (
    <div className='card col' style={{ width: "18rem" }}>
      <Link to={`/detalle-producto/${props.producto._id}`}>
        <img src={props.producto.image} className='card-img-top' alt='test' />
      </Link>
      <div className='card-body'>
        <h5 className='card-title'>{props.producto.product_name}</h5>
        <p className='card-text'>{props.producto.price}</p>
        {props.carrito ? (
          <button
            type='button'
            className='btn btn-danger'
            onClick={() => {
              quitarDeCarrito(props.producto);
            }}
          >
            Eliminar
          </button>
        ) : (
          <button
            type='button'
            className='btn btn-success'
            onClick={() => {
              agregarCarrito(props.producto);
            }}
          >
            Comprar
          </button>
        )}
      </div>
    </div>
  );
}

export default Producto;
