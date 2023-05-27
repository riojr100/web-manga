import React, { useEffect, useState } from "react";
import "../style.css";
export default function info(props) {
  const [genres, setGenres] = useState([]);
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    setGenres(props.genre);
    setThemes(props.themes);
  }, []);
  const RenderGenre = () => {
    let temp = [];
    if (genres) {
      temp = genres.map((key, index) => {
        return key.name;
      });
    }
    return <p>Genre : {temp.join(", ")}</p>;
  };
  const RenderTheme = () => {
    let temp = [];
    if (themes) {
      temp = themes.map((key, index) => {
        return key.name;
      });
    }
    return <p>Theme : {temp.join(", ")}</p>;
  };

  return (
    <React.StrictMode>
      <div className="dimScreen-info"></div>
      <div className="container-info">
        <div className="image-info">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="details-info">
          <div className="info-upper">
            <div className="title-info">
              <h1>{props.title}</h1>
            </div>
            <div className="desc-info">
              <p>{props.synopsis}</p>
            </div>
          </div>
          <div className="lower">
            <div className="release-info">
              <p>Release Date : {props.release}</p>
            </div>
            <div className="genre-info">
              <RenderGenre />
            </div>
            <div className="theme-info">
              <RenderTheme />
            </div>
            <div className="status-info">Status : {props.status}</div>
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
}
