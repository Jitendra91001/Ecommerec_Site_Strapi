import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { persistor ,store } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ToastContainer/>
    <PersistGate loding="loding" persistor={persistor}>
    <App />
    </PersistGate>
  </Provider>
);
