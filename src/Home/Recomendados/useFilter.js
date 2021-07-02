import { useEffect, useState } from "react";

// entrada lista prod, term
function useFilter(listaProductos = [], term) {
  const [prodFilter, setNewProdFilter] = useState([]);

  useEffect(() => {
    // proceso filter
    const filtrados = listaProductos.filter((producto) => {
      return producto.product_name.toLowerCase().includes(term.toLowerCase());
    });
    setNewProdFilter(filtrados);
  }, [listaProductos, term]);

  // salida prodFilter
  return { prodFilter };
}

export default useFilter;
