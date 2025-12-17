import React from "react";
import "../../../Styles/Rating.scss";

function Rating({ rating }) {
  const ratingValue = parseInt(rating);

  return (
    <div className="rating">
      {Array.from({ length: 5 }).map((_, index) => (
        <span
          key={index}
          className={index < ratingValue ? "star filled" : "star"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Rating;
