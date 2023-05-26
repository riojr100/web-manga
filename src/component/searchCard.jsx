import React from "react";
import { useState, useEffect } from "react";
import "../style.css";
import { getMangaImg } from "../api";

export default function searchCard(props) {
  const [image, setImage] = useState("");

  useEffect(() => {
    getMangaImg(props.id).then((e) => setImage(e.image));
  }, []);

  return (
    <React.StrictMode>
      <div className="search-card" key={props.key}>
        <a href="">
          <img src={image} className="search-card-image" />
          <div className="search-card-title">
            <h2>{props.title}</h2>
          </div>
        </a>
      </div>
    </React.StrictMode>
  );
}
