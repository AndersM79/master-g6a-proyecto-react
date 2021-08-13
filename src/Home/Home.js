import React from "react";

import "./styles.css";

import Lading from "./Landing/Lading";
import Recomendados from "./Recomendados/Recomendados";
import Seccion from "./Seccion/Seccion";

import img1 from "./assets/img1.jpg";
import img2 from "./assets/img2.jpg";

function Home() {
  return (
    <section>
      <Lading />
      <Recomendados titulo='Relojes clasicos' categoria='relojes-clasicos' />
      <Seccion
        imagen={img1}
        titulo='Relojes digitales'
        textoBoton='Learn More'
        parrafo={`Plants bring homes to life, and they also bring life to your office. Adding plants into your space also helps to create a relaxing environment.

Shop from our curated collection of low-maintenance plants perfect for a home or commercial office.`}
      />
      <Seccion
        posicion='izquierda'
        imagen={img2}
        titulo='Relojes clasicos'
        textoBoton='Learn More'
        parrafo={`Plants bring homes to life, and they also bring life to your office. Adding plants into your space also helps to create a relaxing environment.

Shop from our curated collection of low-maintenance plants perfect for a home or commercial office.`}
      />
      <Recomendados titulo='Smart watch' categoria='smartwatch' />
      <Seccion
        imagen={img1}
        titulo='Relojes digitales'
        textoBoton='Learn More'
        parrafo={`Plants bring homes to life, and they also bring life to your office. Adding plants into your space also helps to create a relaxing environment.

Shop from our curated collection of low-maintenance plants perfect for a home or commercial office.`}
      />
      <Seccion
        posicion='izquierda'
        imagen={img2}
        titulo='Relojes clasicos'
        textoBoton='Learn More'
        parrafo={`Plants bring homes to life, and they also bring life to your office. Adding plants into your space also helps to create a relaxing environment.

Shop from our curated collection of low-maintenance plants perfect for a home or commercial office.`}
      />
    </section>
  );
}

export default Home;
