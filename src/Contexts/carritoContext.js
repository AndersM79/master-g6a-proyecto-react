import React, { useState } from "react";

const CarritoContext = React.createContext(null);

function Carrito({ children }) {
  const [productosCarrito, setProductosCarrito] = useState([]);
  const [isOpenModalCarrito, setIsOpenModalCarrito] = useState(false);

  const agregarCarrito = (producto) => {
    setProductosCarrito((prevState) => [...prevState, producto]);
  };

  const quitarDeCarrito = (productoEleminado) => {
    console.log(
      "🚀 ~ file: carritoContext.js ~ line 14 ~ quitarDeCarrito ~ productoEleminado",
      productoEleminado
    );
    setProductosCarrito((prevState) =>
      prevState.filter((producto) => producto._id !== productoEleminado._id)
    );
  };

  const openModal = () => {
    setIsOpenModalCarrito(true);
  };
  const closeModal = () => {
    setIsOpenModalCarrito(false);
  };

  return (
    <CarritoContext.Provider
      value={{
        isOpenModalCarrito,
        openModal,
        closeModal,
        productosCarrito,
        agregarCarrito,
        quitarDeCarrito,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
}

// asdffd -- children
/* <Test />asdffd</Test> */

export default Carrito;
export { CarritoContext };
