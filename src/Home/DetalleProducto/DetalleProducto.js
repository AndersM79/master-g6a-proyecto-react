import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DetalleProducto() {
  const [producto, setProducto] = useState({
    nombre: null,
    descripcion: null,
    price: 0,
    isActive: false,
    category: null,
  });
  let { idProducto } = useParams();

  useEffect(() => {
    fetch("https://ecomerce-master.herokuapp.com/api/v1/item/" + idProducto)
      .then((response) => response.json())
      .then((data) => setProducto(data));
  }, [idProducto]);

  return (
    <div>
      <h3>Detalle Producto</h3>
      <div>
        <h4>{producto.product_name}</h4>
        <p>{producto.description}</p>
        <p>${producto.price}.00</p>
        <p>{producto.category}</p>
        <img src={producto.image} />
        {producto.isActive ? <button>Comprar</button> : <p>Agotado</p>}
      </div>
    </div>
  );
}

export default DetalleProducto;
