import React, { useState, useRef } from "react";
import "../../Styles/Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-apropos">
      <div className="collapse-header" onClick={toggle}>
        <h3>{title}</h3>
        <span>{isOpen ? "▲" : "▼"}</span>
      </div>
      <div
        className="collapse-content"
        ref={contentRef}
        style={{ display: isOpen ? "block" : "none" }}
      >
        {content}
      </div>
    </div>
  );
}

export default Collapse;
