import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Contexts/Auth/Auth";

// usarioLogueado -- prop que te indica si el usuario esta logueado o registrado.
function NavBar() {
  const { session } = useContext(AuthContext);
  return (
    <header>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/test'>test</Link>
        </li>
      </ul>
    </header>
  );
}

export default NavBar;
