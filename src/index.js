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

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Page />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/categories" element={<div>Categories</div>} />
          <Route path="/info" element={<div>Info</div>} />
          <Route path="/contacts" element={<div>Contacts</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);