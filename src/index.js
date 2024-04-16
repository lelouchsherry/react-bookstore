import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'

import App from "./App";
import { createStore } from "redux";
import rootReducer from "./reducers";
import { booksArray } from "./helpers/app-helpers";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const initialState = {
  books: booksArray,
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
