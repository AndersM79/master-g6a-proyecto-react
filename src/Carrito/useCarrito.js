import { useState, useEffect } from "react";

function useCarrito(productos) {
  const [total, setTotal] = useState(0);

  // cada vez que cambie la lista de productos voy a calcular un total
  useEffect(() => {
    let nuevoTotal = 0;
    productos.forEach((producto) => {
      nuevoTotal = nuevoTotal + producto.price;
    });
    setTotal(nuevoTotal);
  }, [productos]);

  return {
    total,
  };
}

export default useCarrito;
