import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import "bootstrap/dist/css/bootstrap.css";
import "./mystyle.css";
import "./graoh.css";
import App from "./components/app";
import reducers from "./reducers"; //taking the root reducer
import ReduxPromise from "redux-promise"; //same job as thunk for with async handle but it handles promises and return data in the reducers
//which is nice

//const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//then in Provider store = {createStoreWithMiddleware(reducers)}
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = createStore(
  reducers,
  composeEnhancers(applyMiddleware(ReduxPromise))
);
//remember that apply Middleware adds additional functionality to our function

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <App />
  </Provider>,
  document.getElementById("root")
);
