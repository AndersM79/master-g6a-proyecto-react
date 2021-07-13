import React, { useState, useEffect } from "react";

import Producto from "../../Producto/Producto";

import useFilter from "./useFilter";
import "./styles.css";

function Recomendados() {
  // salida  // []
  const [productos, setProductos] = useState([]);
  const [formulario, setValores] = useState({ term: "" });
  const { prodFilter } = useFilter(productos, formulario.term);

  // use efect ejecuta codigo escuchando a las dependencias ([])
  // las dependencias son el arreglo, y dentro se le mandan valores
  // si algun valor de la dependencia cambia se vuelve a ejecutar el codigo.
  useEffect(() => {
    fetch("https://ecomerce-master.herokuapp.com/api/v1/item")
      .then((res) => res.json())
      .then((data) => {
        setProductos(data);
      });
  }, []);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setValores({ ...formulario, [name]: value });
  };

  return (
    <div>
      <input name='term' onChange={handleInputChange} />
      <div className='container'>
        <ul className='product-list'>
          {prodFilter.map((productoIndividual) => {
            return (
              <li key={productoIndividual._id}>
                <Producto producto={productoIndividual} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Recomendados;
