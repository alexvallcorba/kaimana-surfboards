import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <div className="footer-container">
      <Link to="https://github.com/alexvallcorba">
                    <img alt="Media Logos" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633449116/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/links-logo_x4c3rq.png"/>
                  </Link>
    </div>);
}