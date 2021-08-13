import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Flickity from "react-flickity-component";

import { AuthContext } from "../../Contexts/Auth/Auth";
import "./styles.css";

const flickityOptions = {
  initialIndex: 0,
};

function DetalleProducto() {
  const data = useContext(AuthContext);
  const { agregarCarrito } = data;
  const [producto, setProducto] = useState({});
  let { idProducto } = useParams();

  useEffect(() => {
    fetch(
      "http://localhost:4000/.netlify/functions/server/productos/detalle/" +
        idProducto
    )
      .then((response) => response.json())
      .then((data) => setProducto(data));
  }, [idProducto]);

  return (
    <div className='detalle-producto'>
      <div className='detalle-producto-compra'>
        <div>
          <Flickity
            className={"carousel"} // default ''
            elementType={"div"} // default 'div'
            options={flickityOptions} // takes flickity options {}
            disableImagesLoaded={false} // default false
            reloadOnUpdate // default false
            static // default false
          >
            <img src={producto.image} alt='img' />
          </Flickity>
        </div>
        <div className='detalle-producto-compra-info'>
          <h3>{producto.product_name}</h3>
          <h2>${producto.price}.00</h2>
          <p>{producto.description}</p>
          <h4>Categoria</h4>
          <p>{producto.category}</p>
          <button
            className='button-2 comprar'
            onClick={() => agregarCarrito(producto)}
          >
            Agregar a carrito
          </button>
        </div>
      </div>
    </div>
  );
}

export default DetalleProducto;
