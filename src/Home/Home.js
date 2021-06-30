import React from "react";

import NavBar from "../NavBar/NavBar";
import Recomendados from "./Recomendados/Recomendados";

function Home() {
  return (
    <section>
      <NavBar usarioLogueado={false} />
      <Recomendados usarioLogueado={false} />
    </section>
  );
}

export default Home;
