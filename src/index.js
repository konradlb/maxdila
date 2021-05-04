import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import AppStateProvider from "./context/AppStateContext";
// import { AppStateContext } from "./context/AppStateContext";
// import { appState } from "./context/AppState";

ReactDOM.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
