import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Home from "./pages/home";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
// sessionStorage : Penyimpanan sesi website, di close akan hilang.
// localStorage : Penyimpanan di %LocalAppData%, di close akan save.
// https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
// https://www.w3schools.com/jsref/prop_win_localstorage.asp
