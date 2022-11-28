import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function App() {
  const [confirmados, setConfirmado] = useState(["asd"]);
  const [inputValue, setInputValue] = useState("");

  const changeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const confirmar = () => {
    setConfirmado([...confirmados, inputValue]);
    setInputValue("");
  };

  const removerConfirmado = (confirmado) => {
    setConfirmado(confirmados.filter((persona) => persona !== confirmado));
  };

  return (
    <div className="App">
      <h1>Lista de Confirmados</h1>
      <input
        type="text"
        placeholder="Ingresar nombre"
        value={inputValue}
        onChange={changeHandler}
      />
      <button onClick={confirmar}>Confirmar</button>

      <ul>
        {confirmados.length > 0 &&
          confirmados.map((persona) => {
            return (
              <li key={persona}>
                {persona}{" "}
                <DeleteForeverIcon onClick={() => removerConfirmado(persona)} />
              </li>
            );
          })}
      </ul>
    </div>
  );
}

export default App;
