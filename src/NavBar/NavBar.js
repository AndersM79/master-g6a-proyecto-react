import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";

function NavBar() {
  return (
    <header>
      <nav className='navarContainer'>
        <img src='https://www.imperiorelojes.com/wp-content/uploads/2021/07/cropped-06imperio.png' />
        <div>
          <Link>Relojes clasicos</Link>
          <Link>Relojes digitales</Link>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
