import React from "react";
import AboutUs from "../component/cardAboutUs";
import Header from "../component/header";
import "../aboutus.css";

const About = () => {
  return (
    <div className="mainAbout">
      <Header />
      <AboutUs />
    </div>
  );
};
export default About;
