import React from "react";
import "./Footer.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react"



export default function Footer() {
  const [path, setPath] = useState("")

  
  let params = useParams()
  useEffect(() => {
    let pathRoute = window.location.pathname
    setPath(pathRoute)
  },[params])

  
  if (path === "/" || path === "/about" || path === "") {
    return (
      <a className="icons" href="https://github.com/alexvallcorba" target="_blank" rel="noopener noreferrer">
        <img className="media-logos" alt="Media Logos" src="https://res.cloudinary.com/dhkeoqhmp/image/upload/v1633449116/PROJECT-4.%20KAIMANA%20SURFBOARDS%20APP/links-logo_x4c3rq.png" />
      </a>
    );
  }
  else {
    return (
      <a className="icons" href="https://github.com/alexvallcorba" target="_blank" rel="noopener noreferrer">
        <img className="media-logos" alt="Media Logos" src="https://i.imgur.com/Z0eRThZ.png" />
      </a>
    )
    
  }
 
  
}