import React, { useEffect, useState, useContext } from "react";
import Flickity from "react-flickity-component";

import InformacionProducto from "../InformacionProducto/InformacionProducto";
import { AuthContext } from "../../Contexts/Auth/Auth";
import "./styles.css";

const flickityOptions = {
  initialIndex: 1,
  pageDots: false,
};

function Recomendados({ titulo, categoria }) {
  const [recomendados, setRecomendado] = useState([]);
  const data = useContext(AuthContext);
  const { agregarCarrito } = data;
  useEffect(() => {
    fetch(
      `http://localhost:4000/.netlify/functions/server/productos/${categoria}`
    )
      .then((res) => res.json())
      .then((data) => {
        setRecomendado(data);
      });
  }, [categoria]);

  return (
    <div className='recomendados'>
      <div className='recomendados-info'>
        <h2>{titulo}</h2>
        <p>
          We’ve included plants, pots and accessories to make it easy for you to
          recreate this look in your home
        </p>
      </div>
      <div className='recomendados-carrousel'>
        <Flickity
          className={"carousel"} // default ''
          elementType={"div"} // default 'div'
          options={flickityOptions} // takes flickity options {}
          disableImagesLoaded={false} // default false
          reloadOnUpdate // default false
          static // default false
        >
          {recomendados.map((producto) => (
            <InformacionProducto
              producto={producto}
              agregarCarrito={agregarCarrito}
            />
          ))}
        </Flickity>
      </div>
    </div>
  );
}

export default Recomendados;
