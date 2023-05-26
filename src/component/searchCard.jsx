import React from "react";
import { useState, useEffect } from "react";
import "../style.css";
import { getMangaInfo } from "../api";

export default function searchCard(props) {
  const [image, setImage] = useState("");
  useEffect(() => {
    getMangaInfo(props.id).then((e) => setImage(e.image));
  }, []);
  return (
    <React.StrictMode>
      <div className="search-card" key={props.key}>
        <a href={`/info/?id=${props.id}`}>
          <img src={image} alt={props.title} className="search-card-image" />
          <div className="search-card-title">
            <h2>{props.title}</h2>
          </div>
        </a>
      </div>
    </React.StrictMode>
  );
}
