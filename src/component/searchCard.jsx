import React from "react";
import "../style.css";
const API_ENDPOINT = "https://manga-api-omega.vercel.app";

const testimage =
  "https://mangadex.org/covers/c27535b0-69bc-4a07-ad32-103fb6df1f03/acd74309-f444-4214-b0f4-623aa7e23fcc.png";
export default function searchCard(props) {
  fetch(`${API_ENDPOINT}/mangadex/info`);
  return (
    <React.StrictMode>
      <div className="search-card">
        <a href="">
          <img src={testimage} className="search-card-image"></img>
          <div className="search-card-title">
            <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h2>
          </div>
        </a>
      </div>
    </React.StrictMode>
  );
}
