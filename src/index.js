import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import WordApp from "./WordConvertor/WordApp";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <WordApp />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
