import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../Contexts/Auth/Auth";

// usarioLogueado -- prop que te indica si el usuario esta logueado o registrado.
function NavBar() {
  const { session, metodos } = useContext(AuthContext);
  const { isSignedIn } = session;
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Tiendita
          </Link>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link className='nav-link' to='/'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/carrito'>
                  carrito
                </Link>
              </li>
            </ul>
            <div className='d-flex'>
              {isSignedIn && (
                <button
                  onClick={metodos.logout}
                  className='btn btn-outline-success'
                >
                  logout
                </button>
              )}
              {!isSignedIn && <Link to='/login'>Inicia sesion</Link>}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
