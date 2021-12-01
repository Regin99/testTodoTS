import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { App } from "./components/App/App";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { BackgroundImage } from "./components/BackgroundImage/BackgroundImage";

ReactDOM.render(
  <Provider store={store}>
    <BackgroundImage />
    <App />
  </Provider>,
  document.getElementById("root")
);
