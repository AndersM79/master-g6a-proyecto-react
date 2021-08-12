import firebase from "firebase/app";
import React, { useState } from "react";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
} from "@react-firebase/auth";

import { firebaseConfig } from "../../constantes";

const AuthContext = React.createContext(null);

const sessionConGoogle = () => {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(googleAuthProvider);
};

const sessionConGithub = () => {
  const githubAuthProvider = new firebase.auth.GithubAuthProvider();
  firebase.auth().signInWithPopup(githubAuthProvider);
};

const logout = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("logout");
    });
};

function Auth(props) {
  const [carrito, setCarrito] = useState([]);

  const agregarCarrito = (producto) => {
    setCarrito((prevState) => [...prevState, producto]);
  };

  const quitarDeCarrito = (productoEleminado) => {
    setCarrito((prevState) =>
      prevState.filter((producto) => producto._id !== productoEleminado._id)
    );
  };

  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthConsumer>
        {({ isSignedIn, user, providerId }) => {
          return (
            <AuthContext.Provider
              value={{
                session: {
                  isSignedIn,
                  user,
                  providerId,
                },
                metodos: {
                  sessionConGoogle,
                  sessionConGithub,
                  logout,
                },
                carrito: carrito,
                agregarCarrito,
                quitarDeCarrito,
              }}
            >
              {props.children}
            </AuthContext.Provider>
          );
        }}
      </FirebaseAuthConsumer>
    </FirebaseAuthProvider>
  );
}

export default Auth;
export { AuthContext };

// children
/* <Auth>
  <p></p>
</Auth> */
