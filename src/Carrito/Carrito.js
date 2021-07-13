import React, { useContext } from "react";

import { AuthContext } from "../Contexts/Auth/Auth";
import Producto from "../Producto/Producto";

import useCarrito from "./useCarrito";

function Carrito() {
  const { carrito } = useContext(AuthContext);
  const { total } = useCarrito(carrito);

  return (
    <div>
      <h2>Tus productos de compra</h2>
      <h2>Total de compra: {total} </h2>
      <ul>
        {carrito.map((producto) => (
          <li>
            <Producto producto={producto} carrito={true} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Carrito;
