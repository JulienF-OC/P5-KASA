import React from "react";
import "../../Styles/Banner.scss";

function Banner({ image, text, showOverlay = true }) {
  console.log("Image reçue dans Banner:", image);

  return (
    <div className="banner">
      <img src={image} alt="Bannière" className="banner-img" />
      {showOverlay && <div className="banner-overlay"></div>}
      {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}

export default Banner;
