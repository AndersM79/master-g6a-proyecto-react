import React from "react";

import "./styles.css";

import Lading from "./Landing/Lading";
import Recomendados from "./Recomendados/Recomendados";

function Home() {
  return (
    <section>
      <Lading />
      <Recomendados />
    </section>
  );
}

export default Home;
