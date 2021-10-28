import React from "react";
import ReactDOM from "react-dom";

import Routes from "./routes.js";
import GlobalStyle from "./style/global.js";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
