import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./reset.css";
import Cardapio from "./pages/Cardapio/Index";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Cardapio />
  </React.StrictMode>
);
