import React from "react";
import ReactDOM from "react-dom/client";
import Router from "../src/components/Router";
import "./index.css";

import Context from "./contex/Contex.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <Router />
  </Context>
);
