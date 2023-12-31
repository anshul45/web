import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Login from "./Pages/Login.jsx";
import { Provider } from "react-redux";
import { store } from "./utils/store.js";
import SingleProduct from "./Pages/SingleProduct.jsx";
import Header from "./components/Header.jsx";
import Cart from "./Pages/Cart.jsx";
import PrivateRoutes from "./utils/privateRoutes.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/product/:id" element={<SingleProduct />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
