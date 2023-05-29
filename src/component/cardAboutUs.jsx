import React from "react";
import Header from "../component/header";

const instagramLogo = require("../gambar/logoinstagram.png");
const youtubeLogo = require("../gambar/logoyoutube.png");

const members = [
  {
    name: "Reinhard Javera Maheswara",
    image: require("../gambar/reinhard.jpg"),
    nim: "00000077732",
  },
  {
    name: "Rio Joan Rinaldo",
    image: require("../gambar/rio.jpg"),
    nim: "00000078315",
  },
  {
    name: "Darryl Kurniawan",
    image: require("../gambar/darryl.jpg"),
    nim: "00000078767",
  },
  {
    name: "Muhammad Tristan Ajibrilyan Nandipinto",
    image: require("../gambar/tristan.jpg"),
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
