import React, { useState } from "react";
import "../../../Styles/Carousel.scss";

function Carousel({ pictures }) {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % pictures.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  if (!pictures || pictures.length === 0) return null;

  return (
    <div className="carousel">
      <img src={pictures[current]} alt={`Slide ${current + 1}`} />
      {pictures.length > 1 && (
        <>
          <button className="carousel-prev" onClick={prev}>
            ‹
          </button>
          <button className="carousel-next" onClick={next}>
            ›
          </button>
          <span className="carousel-counter">
            {current + 1}/{pictures.length}
          </span>
        </>
      )}
    </div>
  );
}

export default Carousel;
