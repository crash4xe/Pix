import React from "react";
import { createRoot } from "react-dom/client";
import "./styles/stylesheet.css";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
import App from "./Components/App";
import { thunk } from "redux-thunk";
import { db } from "./Database/config";

const store = createStore(rootReducer, applyMiddleware(thunk));
const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
