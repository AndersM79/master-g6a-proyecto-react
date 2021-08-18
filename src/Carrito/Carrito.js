import React, { useContext } from "react";

import { CarritoContext } from "../Contexts/carritoContext";
import ProductoCarrito from "../ProductoCarrito/ProductoCarrito";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import useCarrito from "./useCarrito";
import "./styles.css";

function Vacio() {
  const { closeModal } = useContext(CarritoContext);
  return (
    <div>
      <div className='carrito-header carrito-header-right'>
        <button onClick={closeModal} className='close-button'>
          <FontAwesomeIcon icon={faTimes} size='lg' />
        </button>
      </div>
      <h2>Oops looks like your bag is empty</h2>
      <p>Head back to continue shopping</p>
      <button onClick={closeModal}>continuar comprando</button>
    </div>
  );
}

function Lista() {
  const { productosCarrito, closeModal } = useContext(CarritoContext);
  const { total } = useCarrito(productosCarrito);
  return (
    <div className='carrito'>
      <div className='carrito-header'>
        <h4>Tu carrito</h4>
        <button onClick={closeModal} className='close-button'>
          <FontAwesomeIcon icon={faTimes} size='lg' />
        </button>
      </div>

      <ul>
        {productosCarrito.map((producto) => (
          <li>
            <ProductoCarrito producto={producto} />
          </li>
        ))}
      </ul>
      <hr />
      <div className='carrito-total'>
        <span>Total</span>
        <span>{total}</span>
      </div>
      <button>Pagar</button>
    </div>
  );
}
function Carrito() {
  const { productosCarrito, isOpenModalCarrito, closeModal } =
    useContext(CarritoContext);

  const vacio = productosCarrito.length === 0;

  return (
    <Modal
      isOpen={isOpenModalCarrito}
      onRequestClose={closeModal}
      className='modal'
      contentLabel='Example Modal'
    >
      {vacio ? <Vacio /> : <Lista />}
    </Modal>
  );
}

export default Carrito;
