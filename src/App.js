import { useState } from "react";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "firebase/auth";

import "./App.css";
import NavBar from "./NavBar/NavBar";
import AuthContext from "./Contexts/Auth/Auth";
import DetalleProducto from "./Home/DetalleProducto/DetalleProducto";
import Login from "./Login/Login";
import Carrito from "./Carrito/Carrito";
import CarritoContext from "./Contexts/carritoContext";

import Modal from "react-modal";

Modal.setAppElement("body");

function NoMatch() {
  return (
    <div>
      <p>NoMatch</p>
    </div>
  );
}

function App() {
  let subtitle;
  return (
    <Router>
      <AuthContext>
        <CarritoContext>
          <NavBar />
          <Carrito />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/detalle-producto/:idProducto'>
              <DetalleProducto />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/carrito'>
              <Carrito />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </CarritoContext>
      </AuthContext>
    </Router>
  );
}

export default App;
