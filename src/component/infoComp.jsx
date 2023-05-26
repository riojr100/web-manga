import React, { useEffect, useState } from "react";
import "../style.css";
// Variable:
// image={info.image} -- Gambar
// title={info.title} -- Judul Manga
// release={info.releaseDate} -- Tanggal rilis
// genre={info.genre} -- Genre
// themes={info.themes} -- Tema
// status={info.status} -- Status (ongoing/completed) [string]
export default function info(props) {
  const [genres, setGenres] = useState([]);
  const [themes, setThemes] = useState([]);
  useEffect(() => {
    setGenres(props.genre);
    setThemes(props.themes);
  }, []);

  const RenderGenre = () => {
    if (genres) {
      return <p>Genre : {genres.join(", ")}</p>;
    }
  };
  const RenderTheme = () => {
    if (themes) {
      return <p>Themes : {themes.join(", ")}</p>;
    }
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
              <p>{props.desc}</p>
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
