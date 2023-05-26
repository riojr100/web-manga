import React, { useEffect, useState } from "react";

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
      return <h3>{genres.join(", ")}</h3>;
    }
  };
  const RenderTheme = () => {
    if (themes) {
      return <h2>{themes.join(", ")}</h2>;
    }
  };

  return (
    <React.StrictMode>
      <div className="dimScreen-info"></div>
      <div className="container-info">
        <div className="title">
          <h1>{props.title}</h1>
        </div>
        <div className="genre">
          <RenderGenre />
        </div>
        <div className="release">
          <RenderTheme />
        </div>
        <div className="status">Status : {props.status}</div>
      </div>
    </React.StrictMode>
  );
}
