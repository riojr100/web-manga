import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// sessionStorage : Penyimpanan sesi website, di close akan hilang.
// localStorage : Penyimpanan di %LocalAppData%, di close akan save.
// https://www.w3schools.com/jsref/prop_win_sessionstorage.asp
// https://www.w3schools.com/jsref/prop_win_localstorage.asp

// API manga
// https://manga-qvb4j6c86-riojr100.vercel.app/
