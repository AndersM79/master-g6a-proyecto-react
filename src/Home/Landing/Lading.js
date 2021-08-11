import React from "react";

import clock from "./assets/clock.jpg";

import "./styles.css";

function Landing() {
  return (
    <div className='landing'>
      <div>
        <h1>Relojes made easy</h1>
        <p>
          Patch helps you discover the best plants for your space, delivers them
          to your door and helps you look after them.
        </p>

        <button>Relojes clasicos</button>
        <button>Relojes Digitales</button>
      </div>
      <img src={clock} alt='clock' />
    </div>
  );
}

export default Landing;
