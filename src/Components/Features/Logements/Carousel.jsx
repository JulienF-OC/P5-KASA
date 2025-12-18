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
          <button
            className="carousel-prev"
            onClick={prev}
            aria-label="Previous image"
          >
            <svg width="128" height="128" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            className="carousel-next"
            onClick={next}
            aria-label="Next image"
          >
            <svg width="128" height="128" viewBox="0 0 24 24" fill="none">
              <path
                d="M9 6l6 6-6 6"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
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
