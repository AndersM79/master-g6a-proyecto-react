import React, { useState } from "react";

const AuthContext = React.createContext(null);
const initialValue = {
  user: undefined,
  session: {
    login: false,
  },
};

function Auth(props) {
  const [user, setNewUser] = useState();
  return (
    <AuthContext.Provider value={initialValue}>
      {props.children}
    </AuthContext.Provider>
  );
}

export default Auth;
export { AuthContext };

// children
/* <Auth>
  <p></p>
</Auth> */
