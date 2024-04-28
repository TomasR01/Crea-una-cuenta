import { useState } from "react";
import "./App.css";
import Registro from "./components/Registro";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [error, setError] = useState({
    error: false,
    msg: "",
    color: "",
  });

  return (
    <>
      <Registro
        error={error}
        setError={setError}
        color={error.color}
        msg={error.msg}
      />
    </>
  );
}

export default App;
