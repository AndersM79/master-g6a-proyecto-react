import React from "react";

import Recomendados from "./Recomendados/Recomendados";
import DetalleProducto from "./DetalleProducto/DetalleProducto";
import "./styles.css";

function Home() {
  return (
    <section>
      <div
        class='carousel'
        data-flickity='{ "autoPlay": true, "wrapAround": true, "fullscreen": true, "setGallerySize": false }'
      >
        <div class='carousel-cell'>
          <img src='https://static.vecteezy.com/system/resources/previews/002/478/302/non_2x/sale-electronics-banner-background-free-vector.jpg' />
        </div>
        <div class='carousel-cell'>
          <img src='https://static.vecteezy.com/system/resources/previews/002/478/302/non_2x/sale-electronics-banner-background-free-vector.jpg' />
        </div>
        <div class='carousel-cell'>
          <img src='https://static.vecteezy.com/system/resources/previews/002/478/302/non_2x/sale-electronics-banner-background-free-vector.jpg'></img>
        </div>
        <div class='carousel-cell'>
          <img src='https://static.vecteezy.com/system/resources/previews/002/478/302/non_2x/sale-electronics-banner-background-free-vector.jpg' />
        </div>
        <div class='carousel-cell'>
          <img src='https://static.vecteezy.com/system/resources/previews/002/478/302/non_2x/sale-electronics-banner-background-free-vector.jpg' />
        </div>
      </div>

      <Recomendados />
      <DetalleProducto idItem='5fbc19a65a3f794d72471176' />
    </section>
  );
}

export default Home;
