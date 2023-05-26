import React, { useState, useEffect } from "react";
import Header from "../component/header";
import InfoComp from "../component/infoComp";
import { getMangaInfo } from "../api";

export default function info() {
  let query = window.location.search;
  let id = new URLSearchParams(query).get("id");
  const [info, setInfo] = useState([]);
  const [desc, setDesc] = useState({});
  useEffect(() => {
    getMangaInfo(id).then((e) => {
      setInfo(e);
      // console.log(e.genres);
      setDesc(e.description);
    });
  }, []);

  const RenderInfo = () => {
    if (info) {
      return (
        <InfoComp
          image={info.image}
          desc={desc.en}
          title={info.title}
          release={info.releaseDate}
          genre={info.genres}
          themes={info.themes}
          status={info.status}
        />
      );
    }
  };
  return (
    <React.StrictMode>
      <Header />
      <div className="container">
        <RenderInfo />
      </div>
    </React.StrictMode>
  );
}
