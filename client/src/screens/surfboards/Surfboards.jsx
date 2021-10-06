import React from "react";
import { Link } from 'react-router-dom'
import "./Surfboards.css"

export default function Surfboards(props) {
  return (
    <>
        <h3 className="surfboards-title" >SURFBOARDS</h3>
      <div className="surfboards-list">

        {props.surfboards.map((surfboard) => (
          <div className="surfboard-container">
            <div className=" surfboards-name" key={surfboard.id}>
              <p>{surfboard.name}</p>
            </div>
            <div className="surfboard-image">
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
            
            
       
