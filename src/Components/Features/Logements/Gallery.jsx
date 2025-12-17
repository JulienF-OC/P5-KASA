import React from "react";
import Card from "./Card";
import "../../../Styles/Gallery.scss";
import apartments from "../../../data/logements.json";

function Gallery() {
  return (
    <div className="gallery-container">
      <div className="gallery">
        {apartments.map((apt) => (
          <Card key={apt.id} id={apt.id} cover={apt.cover} title={apt.title} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
