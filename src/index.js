import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { PokemonProvider } from "./contexts/PokemonContext";

ReactDOM.render(
  <PokemonProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PokemonProvider>,
  document.getElementById("root")
);
