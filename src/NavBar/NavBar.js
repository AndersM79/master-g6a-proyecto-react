import React from "react";

// usarioLogueado -- prop que te indica si el usuario esta logueado o registrado.

function NavBar(props) {
  return (
    <header>{props.usarioLogueado ? <input /> : <p>Registrate</p>}</header>
  );
}

export default NavBar;
