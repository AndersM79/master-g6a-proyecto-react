import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { CarritoContext } from "../Contexts/carritoContext";
import "./styles.css";

function NavBar() {
  const { productosCarrito, openModal } = useContext(CarritoContext);
  return (
    <header>
      <nav className='nav'>
        <img
          src='https://www.imperiorelojes.com/wp-content/uploads/2021/07/cropped-06imperio.png'
          alt='test'
        />
        <div className='nav-links'>
          <Link>Relojes clasicos</Link>
          <Link>Relojes digitales</Link>
        </div>
        <div className='nav-icons'>
          <div className='nav-icons-container'>
            <button onClick={openModal}>
              <FontAwesomeIcon icon={faShoppingBag} size='lg' />
            </button>
            <div className='nav-icons-badge'>{productosCarrito.length}</div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
