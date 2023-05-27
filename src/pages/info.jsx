import React, { useState, useEffect } from "react";
import Header from "../component/header";
import InfoComp from "../component/infoComp";
import { getMangaInfo } from "../api";

export default function info() {
  let query = window.location.search;
  let id = new URLSearchParams(query).get("id");
  const [info, setInfo] = useState({});
  const [image, setImage] = useState("");
  const [published, setPublished] = useState([]);
  useEffect(() => {
    getMangaInfo(id)
      .then((res) => res.json())
      .then((data) => {
        setInfo(data.data);
        setPublished(data.data.published.prop.from.year);
        setImage(data.data.images.jpg.image_url);
        // console.log(data.data.images.jpg.image_url);
        console.log(data.data);
      });
  }, []);

  const RenderInfo = () => {
    if (info) {
      return (
        <InfoComp
          image={image}
          background={info.background}
          synopsis={info.synopsis}
          title={info.title}
          release={published}
          genre={info.genres}
          themes={info.themes}
          status={info.status}
          type={info.type}
          chapters={info.chapters}
          volumes={info.volumes}
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
