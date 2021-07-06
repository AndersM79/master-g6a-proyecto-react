import React, { useContext } from "react";
import { AuthContext } from "../../Contexts/Auth/Auth";

import { Link } from "react-router-dom";

function Producto(props) {
  const { session } = useContext(AuthContext);

  return (
    <div>
      <Link to={`/detalle-producto/${props.producto._id}`}>
        <img src={props.producto.image} />
      </Link>
      <p>{props.producto.product_name}</p>
      <p>{props.producto.price}</p>
      {session.login ? <button>Comprar</button> : <button>Registrate</button>}
    </div>
  );
}

export default Producto;
