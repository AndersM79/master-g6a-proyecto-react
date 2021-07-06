import React from "react";

import NavBar from "../NavBar/NavBar";
import Recomendados from "./Recomendados/Recomendados";
import DetalleProducto from './DetalleProducto/DetalleProducto';


function Home() {
  return (
    <section>
      <NavBar />
      <Recomendados />
      <DetalleProducto idItem="5fbc19a65a3f794d72471176"/>
    </section>
  );
}

export default Home;
