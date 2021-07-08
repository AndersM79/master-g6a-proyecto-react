import firebase from "firebase/app";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "firebase/auth";
import "flickity/css/flickity.css";
import Flickity from "flickity";

import NavBar from "./NavBar/NavBar";
import AuthContext from "./Contexts/Auth/Auth";
import DetalleProducto from "./Home/DetalleProducto/DetalleProducto";
import Login from "./Login/Login";

function NoMatch() {
  return (
    <div>
      <p>NoMatch</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AuthContext>
        <NavBar />
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
          <Route path='*'>
            <NoMatch />
          </Route>
        </Switch>
      </AuthContext>
    </Router>
  );
}

export default App;
