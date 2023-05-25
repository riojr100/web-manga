import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes } from "react-router-dom";
import "./style.css";
import Home from "./pages/home";
import Aboutus from "./pages/aboutUs";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutus" element={<Aboutus />} />
      {/* <Route path="/review" element={<Review />} /> */}
    </Routes>
  );
}
