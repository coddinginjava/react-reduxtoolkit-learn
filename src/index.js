import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./Store/Store";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
