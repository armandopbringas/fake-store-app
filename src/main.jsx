import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./router/Router";
import "./index.css";
import "tw-elements-react/dist/css/tw-elements-react.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <AppRouter />
  </>
);
