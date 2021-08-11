import React, { useEffect, useState } from "react";
import Flickity from "react-flickity-component";

import InformacionProducto from "../InformacionProducto/InformacionProducto";
import "./styles.css";

const flickityOptions = {
  initialIndex: 0,
};

function Recomendados() {
  const [recomendados, setRecomendado] = useState([]);

  useEffect(() => {
    fetch(
      "https://silly-bell-cc6d01.netlify.app/.netlify/functions/server/productos"
    )
      .then((res) => res.json())
      .then((data) => {
        setRecomendado(data);
      });
  }, []);

  return (
    <div className='recomendados'>
      <div className='recomendados-info'>
        <h2>Shop the look</h2>
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
            <InformacionProducto producto={producto} />
          ))}
        </Flickity>
      </div>
    </div>
  );
}

export default Recomendados;
