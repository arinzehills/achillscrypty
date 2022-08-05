import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { TradesProvider } from "./context/TradeContext";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TradesProvider>
        <App />
      </TradesProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
