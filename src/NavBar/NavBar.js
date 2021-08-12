import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";

import { AuthContext } from "../Contexts/Auth/Auth";
import "./styles.css";

function NavBar() {
  const { carrito } = useContext(AuthContext);
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
            <Link>
              <FontAwesomeIcon icon={faShoppingBag} size='lg' />
            </Link>
            <div className='nav-icons-badge'>{carrito.length}</div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
