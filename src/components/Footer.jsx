import React from "react";
import { useLocation } from "react-router-dom";
import "./Components.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <h3>Seruput Web Studio</h3>
        <p className="nonRespon">
          <Link to="/">Home</Link> | <Link to="/layanan">Layanan</Link> |{" "}
          <Link to="/paket-website">Paket Website</Link> |{" "}
          <Link to="/jasa-lainnya">Jasa Lainnya</Link>
        </p>
        <ul className="respon">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/layanan">Layanan</Link>
          </li>
          <li>
            {" "}
            <Link to="/paket-website">Paket Website</Link>
          </li>
          <li>
            <Link to="/jasa-lainnya">Jasa Lainnya</Link>
          </li>
        </ul>
      </div>
      <div className="footer-content">
        <h3>Follow Us</h3>
        <p>Instagram</p>
      </div>
      <div className="footer-content">
        <h3>Contact Us</h3>
        <p>
          <Link to="/kontak">Kontak</Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
