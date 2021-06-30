import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth/Auth";

function Producto(props) {
  const { session } = useContext(AuthContext);

  return (
    <div>
      <img src={props.producto.image} />
      <p>{props.producto.product_name}</p>
      <p>{props.producto.price}</p>
      {session.login ? <button>Comprar</button> : <button>Registrate</button>}
    </div>
  );
}

export default Producto;
