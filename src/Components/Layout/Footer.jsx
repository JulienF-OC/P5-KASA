import React from "react";
import "../../Styles/Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src="/logo_white.png" alt="logo Kasa" />
      </div>
      <div className="footer_text">
        <h2>
          © 2025 Kasa. All <br className="footer-mob" /> right reserved.
        </h2>
      </div>
    </div>
  );
}

export default Footer;
