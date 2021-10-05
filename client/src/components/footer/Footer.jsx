import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="footer-container">
      <Link to="https://github.com/alexvallcorba">
                    <img src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633449116/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/links-logo-black_m4puy1.png"/>
                  </Link>
    </div>);
}