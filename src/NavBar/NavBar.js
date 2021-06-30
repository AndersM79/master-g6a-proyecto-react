import React, { useContext } from "react";

import { AuthContext } from "../Contexts/Auth/Auth";

// usarioLogueado -- prop que te indica si el usuario esta logueado o registrado.
function NavBar() {
  const { session } = useContext(AuthContext);
  return <header>{session.login ? <input /> : <p>Registrate</p>}</header>;
}

export default NavBar;
