import firebase from "firebase/app";
import Home from "./Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "firebase/auth";

import NavBar from "./NavBar/NavBar";
import AuthContext from "./Contexts/Auth/Auth";
import DetalleProducto from "./Home/DetalleProducto/DetalleProducto";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

import { firebaseConfig } from "./constantes";

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
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        <FirebaseAuthConsumer>
          {({ isSignedIn, user, providerId }) => {
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {JSON.stringify({ isSignedIn, user, providerId }, null, 2)}
              </pre>
            );
          }}
        </FirebaseAuthConsumer>
        <AuthContext>
          <NavBar />
          <button
            onClick={() => {
              const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
              firebase.auth().signInWithPopup(googleAuthProvider);
            }}
          >
            google
          </button>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/detalle-producto/:idProducto'>
              <DetalleProducto />
            </Route>
            <Route path='*'>
              <NoMatch />
            </Route>
          </Switch>
        </AuthContext>
      </FirebaseAuthProvider>
    </Router>
  );
}

export default App;
