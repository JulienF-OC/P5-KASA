import React from "react";
import Banner from "../Components/Common/Banner";
import Gallery from "../Components/Features/Logements/Gallery";
import bannerImage from "../assets/images/banner.jpg";
import "../Styles/Home.scss";

function Home() {
  return (
    <div className="home">
      <Banner image={bannerImage} text="Chez vous, partout et ailleurs" />
      <Gallery />
    </div>
  );
}

export default Home;
