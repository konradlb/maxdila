import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AppStateContext } from "./context/AppStateContext";
import { appState } from "./context/AppState";

ReactDOM.render(
  <React.StrictMode>
    <AppStateContext.Provider value={appState}>
      <App />
    </AppStateContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
