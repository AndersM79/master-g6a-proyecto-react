import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Contexts/Auth/Auth";

// usarioLogueado -- prop que te indica si el usuario esta logueado o registrado.
function NavBar() {
  const { session, metodos } = useContext(AuthContext);
  const { isSignedIn, user } = session;

  return (
    <header>
      <ul>
        {isSignedIn && <p>Bienvenido {user.displayName}</p>}
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/test'>test</Link>
        </li>
        {isSignedIn && <button onClick={metodos.logout}>logout</button>}
        {!isSignedIn && <Link to='/login'>Inicia sesion</Link>}
      </ul>
    </header>
  );
}

export default NavBar;
