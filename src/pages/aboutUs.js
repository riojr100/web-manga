import React from "react";
import AboutUs from "../component/cardAboutUs";
import Header from "../component/header";
import Footer from "../component/footer";
import "../aboutus.css";

const About = () => {
  return (
    <div className="mainAbout">
      <Header />
      <AboutUs />
      <Footer />
    </div>
  );
};
export default About;
