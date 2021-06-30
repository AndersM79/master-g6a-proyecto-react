import Home from "./Home/Home";

import AuthContext from "./Contexts/Auth/Auth";

function App() {
  return (
    <AuthContext>
      <div className='App'>
        <Home />
      </div>
    </AuthContext>
  );
}

export default App;
