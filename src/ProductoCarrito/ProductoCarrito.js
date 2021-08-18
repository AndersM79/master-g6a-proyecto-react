import { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

import { CarritoContext } from "../Contexts/carritoContext";

function ProductoCarrito({ producto }) {
  const { quitarDeCarrito } = useContext(CarritoContext);

  return (
    <div className='producto-carrito'>
      <img src={producto.image} alt='test' />
      <div className='producto-carrito-info'>
        <div className='producto-carrito-info-2'>
          <span>{producto.product_name}</span>
          <span>{producto.price}</span>
        </div>
        <div>
          <button
            onClick={() => quitarDeCarrito(producto)}
            className='button-trash'
          >
            <FontAwesomeIcon icon={faTrash} size='lg' />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductoCarrito;
