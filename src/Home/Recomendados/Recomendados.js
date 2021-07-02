import React, { useState, useEffect } from "react";

import Producto from "../Producto/Producto";

function Recomendados() {
  const [productos, setProductos] = useState([{}]);

  // use efect ejecuta codigo escuchando a las dependencias ([])
  // las dependencias son el arreglo, y dentro se le mandan valores
  // si algun valor de la dependencia cambia se vuelve a ejecutar el codigo.
  useEffect(() => {
    fetch("https://ecomerce-master.herokuapp.com/api/v1/item")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data)
      });
  }, []);

  return (
    <ul>
      {productos.map((productoIndividual) => {
        return (
          <li key={productoIndividual._id}>
            <Producto producto={productoIndividual} />
          </li>
        );
      })}
    </ul>
  );
}

export default Recomendados;
