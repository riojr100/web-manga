import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages/home";
import Info from "./pages/info";
import Search from "./pages/search";
import Aboutus from "./pages/aboutUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search" element={<Search />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}
