import React from "react";
import { useParams, Navigate } from "react-router-dom";
import apartments from "../data/logements.json";
import Carousel from "../Components/Features/Logements/Carousel.jsx";
import Host from "../Components/Features/Logements/Hosts.jsx";
import Rating from "../Components/Features/Logements/Ratings.jsx";
import Tag from "../Components/Common/Tags.jsx";
import Collapse from "../Components/Common/Collapse.jsx";
import "../Styles/Logements.scss";

function Logement() {
  const { id } = useParams();
  const logement = apartments.find((apt) => apt.id === id);

  if (!logement) return <Navigate to="/404" />;

  return (
    <div className="logement-page">
      <Carousel pictures={logement.pictures} />

      <div className="logement-header">
        <div className="logement-info">
          <h1>{logement.title}</h1>
          <p>{logement.location}</p>
          <div className="logement-tags">
            {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />
            ))}
          </div>
        </div>

        <div className="logement-host">
          <Host name={logement.host.name} picture={logement.host.picture} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div className="logement-collapse">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((eq, i) => (
                <li key={i}>{eq}</li>
              ))}
            </ul>
          }
        />
      </div>
    </div>
  );
}

export default Logement;
