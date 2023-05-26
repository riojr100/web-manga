import React from "react";
import "../style.css";
import { getMangaImg } from "../api";

export default function searchCard(props) {
  return (
    <React.StrictMode>
      <div className="search-card" key={props.key}>
        <a href="">
          <img src={getMangaImg(props.id)} className="search-card-image"></img>
          <div className="search-card-title">
            <h2>{props.title}</h2>
          </div>
        </a>
      </div>
    </React.StrictMode>
  );
}
