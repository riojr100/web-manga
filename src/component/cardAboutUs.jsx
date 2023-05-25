import React from "react";
import Header from "../component/header";

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

const Footer = () => {
  return (
    <div className="footerAboutUs">
      <p>About Us</p>
    </div>
  );
};

const MemberCard = ({ name, image, nim }) => {
  return (
    <div className="member-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{nim}</p>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Footer />
      <div className="member-list">
        {members.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
