import React from "react";
import "../style.css";

export default function searchCard(props) {
  return (
    <React.StrictMode>
      <div className="search-card" key={props.key}>
        <a href={`/info/?id=${props.id}`}>
          <img
            src={props.image}
            alt={props.title}
            className="search-card-image"
          />
          <div className="search-card-title">
            <h2>{props.title}</h2>
          </div>
        </a>
      </div>
    </React.StrictMode>
  );
}
