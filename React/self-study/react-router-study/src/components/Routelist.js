import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Main from "../pages/Main";
import Header from "./Header";
function Routelist() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        </Routes>
    </BrowserRouter>
  );
}

export default Routelist;
