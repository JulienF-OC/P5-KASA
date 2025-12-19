// components/common/Collapse.jsx
import React, { useState, useRef, useEffect } from "react";
import "../../Styles/Collapse.scss";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse-container">
      <div className="collapse-header" onClick={toggle}>
        <h3>{title}</h3>
        <span className={`arrow ${isOpen ? "open" : ""}`}>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path
              d="M8 14l8-8 8 8"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div
        className="collapse-content"
        ref={contentRef}
        style={{
          maxHeight: `${height}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        <div className="collapse-inner">{content}</div>
      </div>
    </div>
  );
}

export default Collapse;
