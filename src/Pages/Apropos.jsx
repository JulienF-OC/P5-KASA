import React from "react";
import "../Styles/Apropos.scss";
import Banner from "../Components/Common/Banner";
import Collapse from "../Components/Common/Collapse";
import data from "../data/apropos.json";
import bannerImage from "../assets/images/banner-apropos.jpg";

function About() {
  return (
    <div className="about">
      <Banner image={bannerImage} />

      <div className="about-container">
        {data.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
