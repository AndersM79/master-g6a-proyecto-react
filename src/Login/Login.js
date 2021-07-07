import React, { useContext } from "react";

import { AuthContext } from "../Contexts/Auth/Auth";

function Login() {
  const { metodos } = useContext(AuthContext);

  return (
    <div>
      <h2>inicia sesion</h2>
      <button onClick={metodos.sessionConGoogle}>google</button>
      <button onClick={metodos.sessionConGithub}>github</button>
    </div>
  );
}

export default Login;
