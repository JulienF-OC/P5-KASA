import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footer_logo">
        <img src="/logo_white.png" alt="logo Kasa" />
      </div>
      <div className="footer_text">
        <h2>© 2020 Kasa. All right reserved.</h2>
      </div>
    </div>
  );
}

export default Footer;
