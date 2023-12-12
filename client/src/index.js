import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";

import Reducer from "./_reducers";
import promiseMiddleware from "redux-promise"; // promise를 사용하기 위한 미들웨어
import { thunk } from "redux-thunk";

const root = ReactDOM.createRoot(document.getElementById("root"));
const createStoreWithMiddleware = applyMiddleware(
  promiseMiddleware,
  thunk
)(createStore);
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const store = createStore(Reducer, composeEnhancers(applyMiddleware(thunk)));

// const store = createStore(
//   Reducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

root.render(
  <Provider
    store={createStoreWithMiddleware(
      Reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
