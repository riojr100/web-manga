import React, { useState, useEffect } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import InfoComp from "../component/infoComp";
import { getMangaInfo } from "../api";
import Slides from "../slides.json";
import Slider from "../component/Slider";

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
        // console.log(data.data.authors);
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
          authors={info.authors}
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
      <section className="trend" id="trend">
        <h2 className="heading">📚 Catalogue</h2>
        <Slider slides={Slides} />
      </section>
      <Footer />
    </React.StrictMode>
  );
}
