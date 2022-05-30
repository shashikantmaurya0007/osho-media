import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/index";
import { Provider } from "react-redux";
import { initialAppLoadingAction } from "./store/InitialAppLoadingAction/InitialAppLoadingAction";
// Call make Server
makeServer();
store.dispatch(initialAppLoadingAction());
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
