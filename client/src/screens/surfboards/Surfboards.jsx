import React from "react";
import { Link } from 'react-router-dom'
import "./Surfboards.css"

export default function Surfboards(props) {
  return (
    <>
     
      <div className="surfboards-list">
      
        {props.surfboards.map((surfboard) => (
          <div className="surfboard-container">
          <div className=" surfboards-name" key={surfboard.id}>
              <h2>{surfboard.name}</h2>
            </div>
            <div className="surfboard">
              <Link to={`/surfboards/${surfboard.id}`}>
                <img className="surfboard-image" src={surfboard.image_url} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
            
            
       
