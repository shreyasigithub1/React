import { useState } from "react";
import Login from "./components/login";
import Password from "./components/password";

function App() {
  const [onReset, setOnReset] = useState(false);

  function handlePassword() {
    setOnReset({
      onReset: false,
    });
  }
  return (
    <>{onReset ? <Password handlePassword={handlePassword}/> : <Login handlePassword={handlePassword} />}</>
  );
}

export default App;
