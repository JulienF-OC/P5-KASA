import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import apartments from "../data/logements.json";
import "./Logement.scss";

// Composant Collapse minimal
function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={() => setIsOpen(!isOpen)}>
        <h3>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      {isOpen && <div className="collapse-content">{content}</div>}
    </div>
  );
}

// Composant Carrousel minimal
function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % pictures.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + pictures.length) % pictures.length);

  if (pictures.length === 0) return null;

  return (
    <div className="carousel">
      <img src={pictures[current]} alt={`Slide ${current}`} />
      {pictures.length > 1 && (
        <>
          <button className="prev" onClick={prev}>
            ‹
          </button>
          <button className="next" onClick={next}>
            ›
          </button>
          <span className="counter">
            {current + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

function Logement() {
  const { id } = useParams();
  const logement = apartments.find((apt) => apt.id === id);

  // Si logement introuvable, redirige vers 404
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
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="logement-host">
          <div className="host-info">
            <p className="host-name">{logement.host.name}</p>
            <img
              className="host-picture"
              src={logement.host.picture}
              alt={logement.host.name}
            />
          </div>
          <div className="logement-rating">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className={
                  i < parseInt(logement.rating) ? "star filled" : "star"
                }
              >
                ★
              </span>
            ))}
          </div>
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
