import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createStore } from "redux";
import App from "./App";

import allReducers from "./reducers";
import { Provider } from "react-redux";

const store = createStore(allReducers);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
