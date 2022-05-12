import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import Page from "./templates/Page";

import LoginPage from "./pages/Login";
import HomePage from "./pages/Home";
import InfoPage from "./pages/Info";
import CategoriesPage from "./pages/Categories";
import ContactsPage from "./pages/Contacts";
import BasketPage from "./pages/Basket";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/info" element={<InfoPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/basket" element={<BasketPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);