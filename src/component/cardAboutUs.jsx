import React from "react";
import Header from "../component/header";

const instagramLogo = require("../gambar/logoinstagram.png");
const youtubeLogo = require("../gambar/logoyoutube.png");

const members = [
  {
    name: "Reinhard Javera Maheswara",
    image:
      "https://www.prydwen.gg/static/7bf27624888af02b16ed1ad2fdec10f2/60b4d/13_sm.webp",
    nim: "00000077732",
  },
  {
    name: "Rio Joan Rinaldo",
    image:
      "https://www.prydwen.gg/static/3c0e87556bcf541135c909a18f87ec6a/60b4d/12_sm.webp",
    nim: "00000078315",
  },
  {
    name: "Darryl Kurniawan",
    image:
      "https://www.prydwen.gg/static/0434369b1146936d32c51d5f265d17dc/e9a79/26_sm.png",
    nim: "00000078767",
  },
  {
    name: "Muhammad Tristan Ajibrilyan Nandipinto",
    image:
      "https://www.prydwen.gg/static/cff01461a4e4266e9b213e4d73c6c5c3/60b4d/15_sm.webp",
    nim: "00000078653",
  },
];

const instagramLinks = [
  "https://www.instagram.com/reinhardjvrm/",
  "https://www.instagram.com/_riorinaldo/",
  "https://www.instagram.com/darrylrk_/",
  "https://www.instagram.com/tristan.ajaj/",
];

const youtubeLinks = [
  "https://www.youtube.com/channel/UC8F8h9GA1qAqiR2xiMotPqQ", //rei
  "https://www.youtube.com/channel/UCEmSKwqgUF0ZbCYLQ6zRViQ", //rio
  "https://www.youtube.com/channel/UC6xGbnI3elnfp8wEhfxvvnQ", //daril
  "https://www.youtube.com/channel/UCjPT7ouTaxHQm2hoj5mm5hQ", //tristan
];

const Footer = () => {
  return (
    <div className="footerAboutUs">
      <p>About Us</p>
    </div>
  );
};

const MemberCard = ({ name, image, nim, instagram, youtube, index }) => {
  const instagramLink = instagramLinks[index];
  const youtubeLink = youtubeLinks[index];

  const handleInstagramClick = () => {
    window.open(instagramLink, "_blank");
  };

  const handleYoutubeClick = () => {
    window.open(youtubeLink, "_blank");
  };

  return (
    <div className="member-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{nim}</p>
      <div className="social-button-container">
        <button className="social-button" onClick={handleInstagramClick}>
          <img src={instagramLogo} alt="Instagram" />
        </button>
        <button className="social-button" onClick={handleYoutubeClick}>
          <img src={youtubeLogo} alt="YouTube" />
        </button>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="mainAbout">
      <Header />
      <Footer />
      <div className="member-list">
        {members.map((member, index) => (
          <MemberCard key={member.name} {...member} index={index} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
